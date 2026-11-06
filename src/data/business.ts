// Datele firmei. Câmpurile null nu apar nicăieri pe site și nici în datele structurate,
// ca să nu publicăm informații greșite. Se completează înainte de lansare.

export const BUSINESS = {
  brand: 'Carfly',
  url: 'https://www.carfly.ro',
  legalName: null as string | null, // ex. "Carfly SRL" — DE COMPLETAT
  vatId: null as string | null, // CUI — DE COMPLETAT
  registeredAddress: null as string | null, // DE COMPLETAT
  phone: null as string | null, // ex. "+40 7xx xxx xxx" — DE COMPLETAT
  whatsapp: null as string | null, // număr în format internațional, fără + și spații — DE COMPLETAT
  email: null as string | null, // DE COMPLETAT
  pickup: {
    name: 'Henri Coandă International Airport (OTP), Arrivals',
    locality: 'Otopeni',
    region: 'Ilfov',
    country: 'RO',
    lat: 44.5711,
    lng: 26.085,
  },
  languages: ['en', 'ro', 'de', 'it', 'fr', 'es'],
  minDriverAge: 20,
  minLicenceYears: 1,
  fuelChargePerLitre: 2,
  lostKeyFee: 200,
};
