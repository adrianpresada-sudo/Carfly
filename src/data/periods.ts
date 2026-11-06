// Perioade de preț. În zilele dintr-o perioadă, prețurile ei înlocuiesc prețurile standard.
// Dacă o mașină lipsește dintr-o perioadă, se folosește prețul ei standard.
// Dacă două perioade se suprapun, câștigă cea aflată mai jos în listă (adăugată ultima).
// Aceste date vor fi gestionate din panoul de administrare; până atunci se editează aici.

import type { Tiers } from './fleet';

export interface PricePeriod {
  id: string;
  name: { en: string; ro: string };
  /** Prima zi, inclusiv (YYYY-MM-DD). */
  from: string;
  /** Ultima zi, inclusiv (YYYY-MM-DD). */
  to: string;
  prices: Record<string, Tiers>;
}

// Exemplu de format (dezactivat până când Adrian stabilește prețurile):
// {
//   id: 'winter-2026',
//   name: { en: 'Winter holidays', ro: 'Sărbători de iarnă' },
//   from: '2026-12-10',
//   to: '2027-01-02',
//   prices: { 'dacia-logan': [55, 38, 32, 28, 25, 22] },
// },
export const PERIODS: PricePeriod[] = [];
