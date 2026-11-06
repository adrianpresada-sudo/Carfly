// Citirea și formatarea datelor de închiriere din adresa paginii (?pd=&pt=&rd=&rt=).
import { parseLocal } from './pricing';
import { LOCALE, type Lang } from '../i18n';

export interface Trip { pd: string; pt: string; rd: string; rt: string; pickup: number; ret: number }

const TIME = /^\d{2}:\d{2}$/;

export type TripResult = { status: 'none' } | { status: 'invalid' } | { status: 'short' } | { status: 'ok'; trip: Trip };

export function readTrip(params: URLSearchParams): TripResult {
  const pd = params.get('pd') ?? '';
  const rd = params.get('rd') ?? '';
  const pt = params.get('pt') ?? '10:00';
  const rt = params.get('rt') ?? '10:00';
  if (!pd && !rd) return { status: 'none' };
  if (!TIME.test(pt) || !TIME.test(rt)) return { status: 'invalid' };
  const pickup = parseLocal(`${pd}T${pt}`);
  const ret = parseLocal(`${rd}T${rt}`);
  if (pickup === null || ret === null) return { status: 'invalid' };
  if (ret - pickup < 24 * 3_600_000) return { status: 'short' };
  if (ret - pickup > 120 * 86_400_000) return { status: 'invalid' };
  return { status: 'ok', trip: { pd, pt, rd, rt, pickup, ret } };
}

export const tripQuery = (t: Trip) => `pd=${t.pd}&pt=${encodeURIComponent(t.pt)}&rd=${t.rd}&rt=${encodeURIComponent(t.rt)}`;

export function niceDate(ts: number, lang: Lang): string {
  const d = new Date(ts);
  const date = d.toLocaleDateString(LOCALE[lang], { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' });
  const time = d.toLocaleTimeString(LOCALE[lang], { hour: '2-digit', minute: '2-digit', hour12: false, timeZone: 'UTC' });
  return `${date}, ${time}`;
}
