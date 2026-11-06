// Date structurate schema.org (JSON-LD). Publicăm doar câmpuri adevărate și completate.
import { BUSINESS } from '../data/business';
import { FLEET, type Car } from '../data/fleet';
import { referenceRate } from './pricing';
import { CATEGORY_NAMES, type Lang } from '../i18n';
import type { QA } from '../data/content';

const clean = <T extends Record<string, unknown>>(o: T) =>
  Object.fromEntries(Object.entries(o).filter(([, v]) => v !== null && v !== undefined)) as T;

export function orgSchema(lang: Lang) {
  return clean({
    '@context': 'https://schema.org',
    '@type': 'AutoRental',
    '@id': `${BUSINESS.url}/#business`,
    name: BUSINESS.brand,
    legalName: BUSINESS.legalName,
    url: `${BUSINESS.url}/${lang}/`,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    vatID: BUSINESS.vatId,
    description: lang === 'ro'
      ? 'Închirieri auto la Aeroportul Otopeni (OTP): zero răspundere pentru daune, fără garanție, fără card, kilometri nelimitați, livrare la Sosiri non-stop.'
      : 'Car rental at Bucharest Otopeni Airport (OTP): zero liability for damage, no deposit, no credit card, unlimited km, delivery at Arrivals 24/7.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: BUSINESS.pickup.locality,
      addressRegion: BUSINESS.pickup.region,
      addressCountry: BUSINESS.pickup.country,
    },
    geo: { '@type': 'GeoCoordinates', latitude: BUSINESS.pickup.lat, longitude: BUSINESS.pickup.lng },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
    areaServed: { '@type': 'Country', name: 'Romania' },
    currenciesAccepted: 'EUR, RON',
    priceRange: `€${Math.min(...FLEET.map((c) => Math.min(...c.prices)))}–€${Math.max(...FLEET.map((c) => c.prices[0]))} per day`,
    knowsLanguage: BUSINESS.languages,
  });
}

export function carOfferSchema(car: Car, lang: Lang) {
  return {
    '@type': 'Product',
    name: car.name,
    category: CATEGORY_NAMES[lang][car.category],
    description: lang === 'ro'
      ? `${car.name} de închiriat la Aeroportul Otopeni, ${car.seats} locuri, cutie ${car.gear === 'automatic' ? 'automată' : 'manuală'}.`
      : `${car.name} for rent at Bucharest Otopeni Airport, ${car.seats} seats, ${car.gear} gearbox.`,
    offers: {
      '@type': 'Offer',
      priceCurrency: 'EUR',
      price: referenceRate(car),
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: referenceRate(car),
        priceCurrency: 'EUR',
        unitCode: 'DAY',
        valueAddedTaxIncluded: true,
      },
      availability: 'https://schema.org/InStock',
      seller: { '@id': `${BUSINESS.url}/#business` },
    },
  };
}

export function fleetListSchema(lang: Lang, cars: Car[] = FLEET) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: lang === 'ro' ? 'Flota Carfly la Aeroportul Otopeni' : 'Carfly rental fleet at Otopeni Airport',
    itemListElement: cars.map((car, i) => ({ '@type': 'ListItem', position: i + 1, item: carOfferSchema(car, lang) })),
  };
}

export function faqSchema(items: QA[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((x) => ({ '@type': 'Question', name: x.q, acceptedAnswer: { '@type': 'Answer', text: x.a } })),
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((x, i) => ({ '@type': 'ListItem', position: i + 1, name: x.name, item: `${BUSINESS.url}${x.url}` })),
  };
}

export function articleSchema(o: { lang: Lang; headline: string; description: string; url: string; datePublished: string; dateModified: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: o.headline,
    description: o.description,
    inLanguage: o.lang,
    url: `${BUSINESS.url}${o.url}`,
    datePublished: o.datePublished,
    dateModified: o.dateModified,
    author: { '@type': 'Organization', name: 'Carfly', url: BUSINESS.url },
    publisher: { '@id': `${BUSINESS.url}/#business` },
  };
}
