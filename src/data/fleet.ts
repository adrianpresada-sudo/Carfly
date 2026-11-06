// Flota Carfly și prețurile standard (EUR/zi, cu TVA).
// Prețurile standard sunt valabile oricând nu e activă o perioadă de preț (vezi periods.ts).
// Treptele: [1 zi, 2–3 zile, 4–7 zile, 8–14 zile, 15–21 zile, 22+ zile]

export type CategoryId =
  | 'economy'
  | 'economy-auto'
  | 'compact'
  | 'suv'
  | 'family-hybrid'
  | 'electric'
  | 'premium'
  | 'business'
  | 'premium-suv'
  | 'van';

export type Fuel = 'petrol' | 'diesel' | 'hybrid' | 'electric' | 'petrol-lpg' | null;

export type Tiers = [number, number, number, number, number, number];

export interface Car {
  id: string;
  name: string;
  category: CategoryId;
  gear: 'manual' | 'automatic';
  seats: number;
  fuel: Fuel;
  prices: Tiers;
  /** Garanție în EUR. 0 = fără garanție. */
  deposit: number;
}

export const CATEGORY_ORDER: CategoryId[] = [
  'economy', 'economy-auto', 'compact', 'suv', 'family-hybrid', 'electric', 'premium', 'business', 'premium-suv', 'van',
];

const c = (
  id: string, name: string, category: CategoryId, gear: Car['gear'], seats: number, fuel: Fuel, prices: Tiers, deposit = 0,
): Car => ({ id, name, category, gear, seats, fuel, prices, deposit });

export const FLEET: Car[] = [
  c('dacia-logan', 'Dacia Logan', 'economy', 'manual', 5, null, [41, 27, 23, 20, 18, 16]),
  c('skoda-fabia', 'Skoda Fabia 2025', 'economy', 'manual', 5, 'petrol', [44, 29, 25, 22, 19, 17]),
  c('vw-polo', 'VW Polo 2025', 'economy', 'manual', 5, 'petrol', [44, 29, 25, 22, 19, 17]),
  c('opel-corsa', 'Opel Corsa 2025', 'economy', 'manual', 5, null, [44, 29, 25, 22, 19, 17]),
  c('renault-clio', 'Renault Clio 2025', 'economy', 'manual', 5, 'petrol', [44, 29, 25, 22, 19, 17]),
  c('citroen-c3', 'Citroën C3 2026', 'economy', 'manual', 5, 'petrol', [48, 32, 26, 23, 20, 18]),
  c('skoda-fabia-auto', 'Skoda Fabia Automatic', 'economy-auto', 'automatic', 5, 'petrol', [48, 32, 26, 23, 20, 18]),
  c('vw-golf-8', 'VW Golf 8', 'compact', 'manual', 5, 'petrol', [51, 35, 34, 32, 29, 25]),
  c('skoda-octavia-manual', 'Skoda Octavia 2025', 'compact', 'manual', 5, 'petrol', [51, 34, 28, 25, 22, 20]),
  c('suzuki-s-cross', 'Suzuki S-Cross Hybrid 2025', 'compact', 'manual', 5, 'hybrid', [51, 34, 28, 25, 22, 20]),
  c('opel-mokka', 'Opel Mokka 2025', 'suv', 'automatic', 5, 'petrol', [54, 37, 32, 27, 24, 23]),
  c('vw-t-cross', 'VW T-Cross', 'suv', 'automatic', 5, 'petrol', [54, 37, 32, 27, 24, 23]),
  c('skoda-kamiq', 'Skoda Kamiq 2026', 'suv', 'automatic', 5, 'petrol', [54, 37, 32, 27, 24, 23]),
  c('dacia-duster-hybrid', 'Dacia Duster Hybrid 2026', 'suv', 'automatic', 5, 'hybrid', [61, 42, 37, 35, 32, 29]),
  c('renault-symbioz', 'Renault Symbioz Hybrid 2026', 'suv', 'automatic', 5, 'hybrid', [61, 42, 37, 35, 32, 29]),
  c('toyota-c-hr', 'Toyota C-HR Hybrid 2026', 'suv', 'automatic', 5, 'hybrid', [61, 42, 37, 35, 32, 29]),
  c('toyota-corolla-hybrid', 'Toyota Corolla Hybrid 2026', 'family-hybrid', 'automatic', 5, 'hybrid', [61, 42, 37, 35, 32, 29]),
  c('toyota-corolla-touring', 'Toyota Corolla Touring 2026', 'family-hybrid', 'automatic', 5, 'hybrid', [61, 42, 37, 35, 32, 29]),
  c('skoda-octavia-hybrid', 'Skoda Octavia Hybrid 2026', 'family-hybrid', 'automatic', 5, 'hybrid', [61, 42, 37, 35, 32, 29]),
  c('vw-id4', 'VW ID.4', 'electric', 'automatic', 5, 'electric', [200, 120, 110, 100, 100, 100]),
  c('nissan-ariya', 'Nissan Ariya', 'electric', 'automatic', 5, 'electric', [240, 130, 120, 110, 110, 110]),
  c('tesla-model-3', 'Tesla Model 3', 'electric', 'automatic', 5, 'electric', [260, 140, 130, 120, 120, 120]),
  c('tesla-model-y', 'Tesla Model Y', 'electric', 'automatic', 5, 'electric', [300, 160, 150, 140, 140, 140]),
  c('audi-a3', 'Audi A3 Sedan 2026', 'premium', 'automatic', 5, 'petrol', [68, 49, 44, 44, 38, 33]),
  c('mercedes-a-class', 'Mercedes A-Class 2026', 'premium', 'automatic', 5, 'petrol', [68, 49, 44, 44, 38, 33]),
  c('mercedes-gla', 'Mercedes GLA 2026', 'premium', 'automatic', 5, 'petrol', [108, 86, 67, 62, 56, 54]),
  c('audi-q3', 'Audi Q3 2027', 'premium', 'automatic', 5, null, [108, 86, 67, 62, 56, 54]),
  c('skoda-superb', 'Skoda Superb 2026', 'business', 'automatic', 5, 'petrol', [68, 49, 44, 44, 38, 33]),
  c('bmw-3-series', 'BMW 3 Series', 'business', 'automatic', 5, 'diesel', [108, 86, 67, 62, 56, 54]),
  c('audi-a5', 'Audi A5 2026', 'business', 'automatic', 5, 'petrol', [108, 86, 67, 62, 56, 54]),
  c('mercedes-c-class', 'Mercedes C-Class', 'business', 'automatic', 5, 'diesel', [108, 86, 67, 62, 56, 54]),
  // E-Class: 4–7 zile = 76 € e propunere (în lista inițială era 66 €, greșit). De confirmat de Adrian.
  c('mercedes-e-class', 'Mercedes E-Class', 'business', 'automatic', 5, 'diesel', [120, 82, 76, 72, 68, 64]),
  c('mercedes-glb', 'Mercedes GLB', 'premium-suv', 'automatic', 5, 'diesel', [160, 112, 92, 72, 64, 56]),
  c('mercedes-gle', 'Mercedes GLE', 'premium-suv', 'automatic', 5, 'diesel', [280, 160, 140, 120, 96, 88]),
  c('bmw-x5', 'BMW X5', 'premium-suv', 'automatic', 5, 'petrol', [280, 160, 140, 120, 96, 88]),
  c('dacia-jogger', 'Dacia Jogger', 'van', 'manual', 7, 'petrol-lpg', [82, 51, 48, 33, 31, 29]),
  c('skoda-kodiaq-4x4', 'Skoda Kodiaq 4x4 2026', 'van', 'automatic', 7, 'diesel', [102, 68, 58, 58, 54, 51]),
  c('mercedes-vito', 'Mercedes Vito 2026', 'van', 'automatic', 8, 'diesel', [176, 120, 104, 88, 80, 72]),
  c('renault-trafic', 'Renault Trafic', 'van', 'manual', 9, 'diesel', [122, 82, 68, 68, 65, 55]),
];

export const carById = (id: string) => FLEET.find((x) => x.id === id);
