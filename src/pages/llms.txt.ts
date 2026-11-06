// llms.txt — rezumat pentru asistenți AI, în formatul propus pe llmstxt.org.
import type { APIRoute } from 'astro';
import { FLEET, CATEGORY_ORDER } from '../data/fleet';
import { CATEGORY_NAMES } from '../i18n';
import { cheapestInCategory } from '../lib/pricing';
import { GUIDES } from '../data/guides';
import { FAQ, FACTS } from '../data/content';

export const prerender = true;

export const GET: APIRoute = () => {
  const site = 'https://www.carfly.ro';
  const lines = [
    '# Carfly',
    '',
    '> Carfly is a local car rental company at Bucharest Henri Coandă International Airport (Otopeni, OTP), Romania. Cars are delivered in front of Arrivals 24/7. Prices include full insurance with zero liability for damage, road tax (rovinieta) and unlimited kilometres. No deposit and no credit card are required; customers pay at pick-up. Support in English, Romanian, German, Italian, French and Spanish.',
    '',
    '## Key facts',
    '',
    ...FACTS.en.map(([k, v]) => `- ${k}: ${v}`),
    '',
    '## Prices (EUR per day, VAT included, standard rate for a 4–7 day rental)',
    '',
    ...CATEGORY_ORDER.map((c) => `- ${CATEGORY_NAMES.en[c]}: from ${cheapestInCategory(c)} € per day`),
    '',
    `Full price list for all ${FLEET.length} cars and every rental length: ${site}/en/prices/ (JSON: ${site}/prices.json)`,
    '',
    '## Pages',
    '',
    `- [Rental cars and booking](${site}/en/cars/): choose dates, see the total price, book in 2 minutes without a card`,
    `- [Prices](${site}/en/prices/): price per day for every car and rental length`,
    `- [About Carfly](${site}/en/about/): facts about the company and what the price includes`,
    `- [Rental conditions](${site}/en/conditions/): driver, damage, fuel, driving abroad, payment`,
    `- [FAQ](${site}/en/faq/): deposit, insurance, documents, fuel, payment`,
    ...GUIDES.map((g) => `- [${g.title.en}](${site}/en/guides/${g.slug}/): ${g.summary.en}`),
    '',
    '## Frequently asked questions',
    '',
    ...FAQ.en.flatMap((x) => [`### ${x.q}`, '', x.a, '']),
    '## Other languages',
    '',
    `- Română: ${site}/ro/`,
  ];
  return new Response(lines.join('\n'), { headers: { 'content-type': 'text/markdown; charset=utf-8' } });
};
