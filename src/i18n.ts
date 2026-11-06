// Texte pe limbi. Limbile noi (de, it, fr, es) se adaugă aici și în LANGS.
import type { CategoryId, Fuel } from './data/fleet';

export const LANGS = ['en', 'ro'] as const;
export type Lang = (typeof LANGS)[number];
export const isLang = (x: unknown): x is Lang => typeof x === 'string' && (LANGS as readonly string[]).includes(x);

export const LOCALE: Record<Lang, string> = { en: 'en-GB', ro: 'ro-RO' };
export const LANG_NAME: Record<Lang, string> = { en: 'English', ro: 'Română' };

export const TIER_LABELS: Record<Lang, string[]> = {
  en: ['1 day', '2–3 days', '4–7 days', '8–14 days', '15–21 days', '22+ days'],
  ro: ['1 zi', '2–3 zile', '4–7 zile', '8–14 zile', '15–21 zile', '22+ zile'],
};

export const CATEGORY_NAMES: Record<Lang, Record<CategoryId, string>> = {
  en: {
    economy: 'Economy', 'economy-auto': 'Economy automatic', compact: 'Compact', suv: 'Compact SUV',
    'family-hybrid': 'Family hybrid', electric: 'Electric', premium: 'Premium', business: 'Business',
    'premium-suv': 'Premium SUV', van: '7–9 seats',
  },
  ro: {
    economy: 'Economic', 'economy-auto': 'Economic automat', compact: 'Compact', suv: 'SUV compact',
    'family-hybrid': 'Familie hibrid', electric: 'Electric', premium: 'Premium', business: 'Business',
    'premium-suv': 'SUV premium', van: '7–9 locuri',
  },
};

export const FUEL_NAMES: Record<Lang, Record<Exclude<Fuel, null>, string>> = {
  en: { petrol: 'Petrol', diesel: 'Diesel', hybrid: 'Hybrid', electric: 'Electric', 'petrol-lpg': 'Petrol + LPG' },
  ro: { petrol: 'Benzină', diesel: 'Diesel', hybrid: 'Hibrid', electric: 'Electric', 'petrol-lpg': 'Benzină + GPL' },
};

const en = {
  nav: { cars: 'Our cars', prices: 'Prices', guides: 'Road trips', faq: 'FAQ', facts: 'About Carfly' },
  gear: { manual: 'Manual', automatic: 'Automatic' },
  seats: (n: number) => `${n} seats`,
  day: (n: number) => (n === 1 ? 'day' : 'days'),
  perDay: '/ day',
  from: 'from',
  orSimilar: 'or similar',
  home: {
    title: 'Car rental at Otopeni Airport, Bucharest — no deposit, zero liability | Carfly',
    description: 'Rent a car at Bucharest Otopeni Airport (OTP). Your car waits at Arrivals 24/7. Zero liability for damage, no deposit, no credit card, unlimited km. Book in 2 minutes.',
    h1a: 'Land at Otopeni.', h1b: 'Drive Romania.',
    lead: 'Your car waits at Arrivals, day or night. Zero liability for damage, no deposit, pay when you pick up.',
    answer: 'Carfly is a local car rental company at Bucharest Henri Coandă Airport (Otopeni, OTP). Prices include full insurance with zero liability for damage, road tax and unlimited kilometres. There is no deposit and no credit card is needed: you pay when you pick up the car at Arrivals.',
    categoriesTitle: 'Cars for every trip',
    categoriesNote: 'Standard prices per day for a 4–7 day rental, VAT included.',
    tripsTitle: 'Road trips from Otopeni',
  },
  search: {
    pickup: 'Pick-up', ret: 'Return', pickupWhen: 'Pick-up date & time', returnWhen: 'Return date & time',
    location: 'Otopeni Airport (OTP)', submit: 'See prices', change: 'Change dates', pickupTime: 'Pick-up time', returnTime: 'Return time',
    tooShort: 'The return must be at least 24 hours after pick-up.', invalid: 'Please choose valid dates.',
  },
  promises: [
    { t: 'Zero liability for damage', d: 'Full insurance is included in the price. You do not pay for damage, as written in your rental contract.' },
    { t: 'No deposit, no credit card', d: 'Nothing is blocked on your card. You pay the price shown when you get the keys.' },
    { t: 'Car waits at Arrivals, 24/7', d: 'Day or night, in front of Otopeni Arrivals. Give us your flight number and we follow your landing.' },
    { t: 'Answers in your language', d: 'WhatsApp support in English, Romanian, German, Italian, French and Spanish.' },
  ],
  cars: {
    title: 'Rental cars at Otopeni Airport — prices and availability | Carfly',
    description: 'All Carfly rental cars at Bucharest Otopeni Airport with prices per day: economy, automatic, SUV, hybrid, electric, premium and 7–9 seat vans.',
    h1: 'Choose your car',
    all: 'All cars',
    choose: 'Choose',
    includes: 'Zero liability · No deposit · Unlimited km · Pay at pick-up',
    pickDates: 'Pick your dates to see the total price.',
    fromNote: 'Standard price per day for 4–7 days.',
  },
  book: {
    title: 'Your booking | Carfly',
    back: '← Back to cars',
    extras: 'Extras',
    add: 'Add',
    update: 'Update total',
    summary: 'Your booking',
    damage: 'Damage liability',
    deposit: 'Deposit',
    total: 'Total',
    payNote: 'Prices in EUR, VAT included. Invoiced in lei at the BNR exchange rate on the invoice date. You pay at pick-up.',
    who: 'Who is picking up the car?',
    noCard: 'No card needed. We confirm on WhatsApp within minutes.',
    name: 'Full name', phone: 'Phone / WhatsApp', email: 'Email', flight: 'Flight number (optional)',
    flightNote: 'With your flight number we follow your landing, so the car waits even if your flight is late.',
    terms: 'I accept the rental conditions and the privacy policy. Driver at least 20 years old, licence held for at least 1 year.',
    confirm: 'Confirm reservation',
    missing: 'Please fill in your name, phone and email, and accept the conditions.',
    doneTitle: 'Reservation received',
    doneText: (name: string, car: string, when: string, total: number) => `Thank you, ${name}. Your ${car} is reserved for ${when}. We will confirm on WhatsApp shortly. You pay ${total} € when you get the keys at Otopeni Arrivals.`,
    ref: 'Reservation number',
    home: 'Back to home',
    period: 'Price period',
    standard: 'Standard price',
  },
  prices: {
    title: 'Car rental prices at Otopeni Airport, per day | Carfly',
    description: 'Full Carfly price list: price per day for every car at Bucharest Otopeni Airport, for 1 day up to 22+ days. Insurance with zero liability, road tax and unlimited km included.',
    h1: 'Prices',
    answer: 'Carfly prices are per day and get lower the longer you rent. They include VAT, full insurance with zero liability for damage, road tax (rovinieta), roadside assistance and unlimited kilometres. Fuel is not included. There is no deposit.',
    car: 'Car', category: 'Category',
    periodsTitle: 'Special price periods',
    noPeriods: 'No special price periods are active. The standard prices below apply on every day.',
    periodsNote: 'On days inside a special period, its prices replace the standard prices.',
  },
  facts: {
    title: 'About Carfly — facts about our car rental at Otopeni Airport',
    description: 'Key facts about Carfly car rental at Bucharest Otopeni Airport: what the price includes, driver age, licence, deposit, insurance, payment and languages.',
    h1: 'Carfly in facts',
  },
  faq: { title: 'Car rental at Otopeni Airport — questions and answers | Carfly', description: 'Answers to common questions about renting a car at Bucharest Otopeni Airport with Carfly: deposit, insurance, documents, driving abroad, fuel and payment.', h1: 'Questions and answers' },
  guides: { title: 'Road trips in Romania from Bucharest Airport | Carfly', description: 'Road trip itineraries in Romania starting from Bucharest Otopeni Airport, with distances, seasons and practical driving tips.', h1: 'Road trips from Otopeni' },
  footer: { prices: 'Prices include VAT. Invoiced in lei at the BNR rate.', conditions: 'Rental conditions' },
};

type Dict = typeof en;

const ro: Dict = {
  nav: { cars: 'Mașinile noastre', prices: 'Prețuri', guides: 'Excursii', faq: 'Întrebări', facts: 'Despre Carfly' },
  gear: { manual: 'Manuală', automatic: 'Automată' },
  seats: (n: number) => `${n} locuri`,
  day: (n: number) => (n === 1 ? 'zi' : 'zile'),
  perDay: '/ zi',
  from: 'de la',
  orSimilar: 'sau similar',
  home: {
    title: 'Închirieri auto Aeroport Otopeni — fără garanție, zero răspundere | Carfly',
    description: 'Închiriezi o mașină la Aeroportul Otopeni (OTP). Mașina te așteaptă la Sosiri, non-stop. Zero răspundere pentru daune, fără garanție, fără card, kilometri nelimitați. Rezervi în 2 minute.',
    h1a: 'Aterizezi la Otopeni.', h1b: 'Pleci cu mașina.',
    lead: 'Mașina te așteaptă la Sosiri, zi și noapte. Zero răspundere pentru daune, fără garanție, plătești la ridicare.',
    answer: 'Carfly este o firmă locală de închirieri auto la Aeroportul Henri Coandă (Otopeni, OTP). Prețul include asigurare completă cu zero răspundere pentru daune, rovinieta și kilometri nelimitați. Nu există garanție și nu ai nevoie de card: plătești când ridici mașina de la Sosiri.',
    categoriesTitle: 'Mașini pentru orice drum',
    categoriesNote: 'Prețuri standard pe zi, pentru 4–7 zile, cu TVA.',
    tripsTitle: 'Excursii cu mașina din Otopeni',
  },
  search: {
    pickup: 'Ridicare', ret: 'Returnare', pickupWhen: 'Data și ora ridicării', returnWhen: 'Data și ora returnării',
    location: 'Aeroport Otopeni (OTP)', submit: 'Vezi prețurile', change: 'Schimbă datele', pickupTime: 'Ora ridicării', returnTime: 'Ora returnării',
    tooShort: 'Returnarea trebuie să fie la cel puțin 24 de ore după ridicare.', invalid: 'Alege date valide.',
  },
  promises: [
    { t: 'Zero răspundere pentru daune', d: 'Asigurarea completă e inclusă în preț. Nu plătești daunele, așa cum scrie în contractul de închiriere.' },
    { t: 'Fără garanție, fără card', d: 'Nu blocăm nimic pe card. Plătești prețul afișat când primești cheile.' },
    { t: 'Mașina te așteaptă la Sosiri, non-stop', d: 'Zi și noapte, în fața terminalului Sosiri. Ne dai numărul de zbor și urmărim aterizarea.' },
    { t: 'Răspundem în limba ta', d: 'Asistență pe WhatsApp în română, engleză, germană, italiană, franceză și spaniolă.' },
  ],
  cars: {
    title: 'Mașini de închiriat la Aeroportul Otopeni — prețuri | Carfly',
    description: 'Toate mașinile Carfly de la Aeroportul Otopeni, cu prețul pe zi: economice, automate, SUV, hibride, electrice, premium și microbuze de 7–9 locuri.',
    h1: 'Alege mașina',
    all: 'Toate',
    choose: 'Alege',
    includes: 'Zero răspundere · Fără garanție · Km nelimitați · Plată la ridicare',
    pickDates: 'Alege perioada ca să vezi prețul total.',
    fromNote: 'Preț standard pe zi, pentru 4–7 zile.',
  },
  book: {
    title: 'Rezervarea ta | Carfly',
    back: '← Înapoi la mașini',
    extras: 'Opționale',
    add: 'Adaugă',
    update: 'Actualizează totalul',
    summary: 'Rezervarea ta',
    damage: 'Răspundere pentru daune',
    deposit: 'Garanție',
    total: 'Total',
    payNote: 'Prețuri în euro, cu TVA. Factura se emite în lei, la cursul BNR din ziua facturării. Plătești la ridicare.',
    who: 'Cine ridică mașina?',
    noCard: 'Nu ai nevoie de card. Confirmăm pe WhatsApp în câteva minute.',
    name: 'Nume și prenume', phone: 'Telefon / WhatsApp', email: 'Email', flight: 'Număr de zbor (opțional)',
    flightNote: 'Cu numărul de zbor urmărim aterizarea, ca mașina să te aștepte chiar dacă avionul întârzie.',
    terms: 'Accept condițiile de închiriere și politica de confidențialitate. Șofer de minimum 20 de ani, cu permis de cel puțin 1 an.',
    confirm: 'Confirmă rezervarea',
    missing: 'Completează numele, telefonul și emailul și acceptă condițiile.',
    doneTitle: 'Rezervare primită',
    doneText: (name: string, car: string, when: string, total: number) => `Mulțumim, ${name}. ${car} e rezervată pentru ${when}. Îți confirmăm pe WhatsApp în scurt timp. Plătești ${total} € când primești cheile la Sosiri Otopeni.`,
    ref: 'Număr rezervare',
    home: 'Înapoi la pagina principală',
    period: 'Perioadă de preț',
    standard: 'Preț standard',
  },
  prices: {
    title: 'Prețuri închirieri auto Aeroport Otopeni, pe zi | Carfly',
    description: 'Lista completă de prețuri Carfly: preț pe zi pentru fiecare mașină de la Aeroportul Otopeni, de la 1 zi la peste 22 de zile. Asigurare cu zero răspundere, rovinietă și km nelimitați incluși.',
    h1: 'Prețuri',
    answer: 'Prețurile Carfly sunt pe zi și scad cu cât închiriezi mai mult. Includ TVA, asigurare completă cu zero răspundere pentru daune, rovinieta, asistența rutieră și kilometri nelimitați. Combustibilul nu e inclus. Nu există garanție.',
    car: 'Mașină', category: 'Categorie',
    periodsTitle: 'Perioade cu preț special',
    noPeriods: 'Nu e activă nicio perioadă cu preț special. Prețurile standard de mai jos se aplică în fiecare zi.',
    periodsNote: 'În zilele dintr-o perioadă specială, prețurile ei înlocuiesc prețurile standard.',
  },
  facts: {
    title: 'Despre Carfly — informații despre închirierile auto de la Otopeni',
    description: 'Informațiile esențiale despre Carfly, închirieri auto la Aeroportul Otopeni: ce include prețul, vârsta șoferului, permisul, garanția, asigurarea, plata și limbile vorbite.',
    h1: 'Carfly, pe scurt',
  },
  faq: { title: 'Închirieri auto Otopeni — întrebări și răspunsuri | Carfly', description: 'Răspunsuri la întrebările frecvente despre închirierea unei mașini la Aeroportul Otopeni cu Carfly: garanție, asigurare, acte, ieșire din țară, combustibil și plată.', h1: 'Întrebări și răspunsuri' },
  guides: { title: 'Excursii cu mașina prin România, din Aeroportul Otopeni | Carfly', description: 'Trasee prin România care pornesc din Aeroportul Otopeni, cu distanțe, sezoane și sfaturi practice de condus.', h1: 'Excursii din Otopeni' },
  footer: { prices: 'Prețurile includ TVA. Facturare în lei, la cursul BNR.', conditions: 'Condiții de închiriere' },
};

export const T: Record<Lang, Dict> = { en, ro };
export const t = (lang: Lang) => T[lang];
