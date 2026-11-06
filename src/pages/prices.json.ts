// Feed public de prețuri pentru asistenți AI și agregatoare. Generat din aceleași date ca site-ul.
import type { APIRoute } from 'astro';
import { FLEET } from '../data/fleet';
import { PERIODS } from '../data/periods';
import { BUSINESS } from '../data/business';
import { CATEGORY_NAMES, FUEL_NAMES } from '../i18n';

export const prerender = true;

export const GET: APIRoute = () => {
  const body = {
    business: 'Carfly',
    url: BUSINESS.url,
    location: 'Bucharest Henri Coandă International Airport (OTP), Otopeni, Romania — Arrivals, 24/7',
    currency: 'EUR',
    vatIncluded: true,
    unit: 'price per rental day of 24 hours',
    tiers: ['1 day', '2-3 days', '4-7 days', '8-14 days', '15-21 days', '22+ days'],
    tierRule: 'The tier is chosen by the total rental length; each day is charged at the price of the period it falls in.',
    included: ['full insurance with zero liability for damage (exceptions in contract)', 'third-party liability (RCA)', 'road tax (rovinieta)', 'roadside assistance', 'unlimited kilometres'],
    notIncluded: ['fuel (same-level policy, difference 2 EUR/litre)'],
    deposit: 0,
    creditCardRequired: false,
    payment: 'at pick-up, EUR or RON',
    minDriverAge: BUSINESS.minDriverAge,
    minLicenceYears: BUSINESS.minLicenceYears,
    booking: `${BUSINESS.url}/en/cars/`,
    generatedAt: new Date().toISOString(),
    cars: FLEET.map((c) => ({
      id: c.id,
      name: c.name,
      category: CATEGORY_NAMES.en[c.category],
      gearbox: c.gear,
      seats: c.seats,
      fuel: c.fuel ? FUEL_NAMES.en[c.fuel] : null,
      pricesPerDay: Object.fromEntries(['1', '2-3', '4-7', '8-14', '15-21', '22+'].map((k, i) => [k, c.prices[i]])),
      deposit: c.deposit,
      bookUrl: `${BUSINESS.url}/en/book/${c.id}/`,
    })),
    pricePeriods: PERIODS.map((p) => ({ name: p.name.en, from: p.from, to: p.to, prices: p.prices })),
  };
  return new Response(JSON.stringify(body, null, 2), {
    headers: { 'content-type': 'application/json; charset=utf-8', 'access-control-allow-origin': '*' },
  });
};
