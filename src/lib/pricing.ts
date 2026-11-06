// Calculul prețului unei închirieri.
// Regula: treapta de durată se ia după numărul total de zile; fiecare zi se plătește
// cu prețul perioadei în care cade (sau cu prețul standard, dacă nu e în nicio perioadă).

import { FLEET, type Car } from '../data/fleet';
import { PERIODS, type PricePeriod } from '../data/periods';
import { EXTRAS } from '../data/extras';

export const TIER_COUNT = 6;

export function tierIndex(days: number): number {
  if (days <= 1) return 0;
  if (days <= 3) return 1;
  if (days <= 7) return 2;
  if (days <= 14) return 3;
  if (days <= 21) return 4;
  return 5;
}

/** Parsează "YYYY-MM-DDTHH:MM" sau "YYYY-MM-DD" ca timp UTC, fără dependență de fusul serverului. */
export function parseLocal(value: string | null | undefined): number | null {
  if (!value) return null;
  const m = /^(\d{4})-(\d{2})-(\d{2})(?:T(\d{2}):(\d{2}))?$/.exec(value.trim());
  if (!m) return null;
  const [, y, mo, d, h = '0', mi = '0'] = m;
  const t = Date.UTC(+y, +mo - 1, +d, +h, +mi);
  return Number.isNaN(t) ? null : t;
}

export function isoDay(t: number): string {
  return new Date(t).toISOString().slice(0, 10);
}

/** Zile facturate: fiecare 24 de ore începute = o zi; minimum o zi. */
export function rentalDays(pickup: number, ret: number): number {
  return Math.max(1, Math.ceil((ret - pickup) / 86_400_000));
}

export function periodForDay(day: string, periods: PricePeriod[] = PERIODS): PricePeriod | null {
  for (let i = periods.length - 1; i >= 0; i--) {
    const p = periods[i];
    if (day >= p.from && day <= p.to) return p;
  }
  return null;
}

export interface QuoteLine {
  periodId: string | null;
  days: number;
  rate: number;
  subtotal: number;
}

export interface Quote {
  car: Car;
  days: number;
  tier: number;
  lines: QuoteLine[];
  rentalTotal: number;
  extras: { id: string; price: number }[];
  total: number;
  /** Cel mai mic tarif pe zi folosit (pentru afișarea "× X €/zi" când nu există perioade). */
  averageRate: number;
}

export function quote(
  car: Car,
  pickup: number,
  ret: number,
  extraIds: string[] = [],
  periods: PricePeriod[] = PERIODS,
): Quote {
  const days = rentalDays(pickup, ret);
  const tier = tierIndex(days);
  const lines: QuoteLine[] = [];
  for (let k = 0; k < days; k++) {
    const day = isoDay(pickup + k * 86_400_000);
    const p = periodForDay(day, periods);
    const rate = (p && p.prices[car.id]?.[tier]) ?? car.prices[tier];
    const periodId = p && p.prices[car.id] ? p.id : null;
    const last = lines[lines.length - 1];
    if (last && last.periodId === periodId && last.rate === rate) {
      last.days++;
      last.subtotal += rate;
    } else {
      lines.push({ periodId, days: 1, rate, subtotal: rate });
    }
  }
  const rentalTotal = lines.reduce((a, l) => a + l.subtotal, 0);
  const extras = EXTRAS.filter((e) => extraIds.includes(e.id)).map((e) => ({ id: e.id, price: e.price }));
  const total = rentalTotal + extras.reduce((a, e) => a + e.price, 0);
  return { car, days, tier, lines, rentalTotal, extras, total, averageRate: Math.round(rentalTotal / days) };
}

/** Cel mai mic preț standard pe zi al unei mașini (treapta 22+), pentru "de la X €". */
export const lowestRate = (car: Car) => Math.min(...car.prices);

/** Prețul de referință afișat public: treapta 4–7 zile, preț standard. */
export const referenceRate = (car: Car) => car.prices[2];

export function cheapestInCategory(category: Car['category']): number {
  return Math.min(...FLEET.filter((c) => c.category === category).map(referenceRate));
}
