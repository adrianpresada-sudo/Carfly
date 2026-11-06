// Opționale, preț pe toată perioada închirierii (EUR, cu TVA).
export interface Extra {
  id: string;
  price: number;
  name: { en: string; ro: string };
  note: { en: string; ro: string };
}

export const EXTRAS: Extra[] = [
  { id: 'child-seat', price: 30, name: { en: 'Child seat', ro: 'Scaun copil' }, note: { en: 'For the whole rental', ro: 'Pe toată perioada' } },
  { id: 'child-seat-isofix', price: 50, name: { en: 'Child seat ISOFIX', ro: 'Scaun copil ISOFIX' }, note: { en: 'For the whole rental', ro: 'Pe toată perioada' } },
  { id: 'wash', price: 10, name: { en: 'Car wash included', ro: 'Spălare inclusă' }, note: { en: 'Return the car without washing it', ro: 'Predai mașina fără să o speli' } },
];
