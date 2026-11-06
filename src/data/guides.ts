// Lista ghidurilor de călătorie. Fiecare ghid are pagina lui în src/pages/[lang]/guides/.
import type { Lang } from '../i18n';

export interface GuideInfo {
  slug: string;
  meta: Record<Lang, string>;
  title: Record<Lang, string>;
  summary: Record<Lang, string>;
}

export const GUIDES: GuideInfo[] = [
  {
    slug: 'transfagarasan',
    meta: { en: '3 days · about 620 km', ro: '3 zile · aproximativ 620 km' },
    title: { en: 'The Transfăgărășan road trip from Bucharest Airport', ro: 'Transfăgărășan din Aeroportul Otopeni, în 3 zile' },
    summary: {
      en: 'Vidraru Dam, Poenari Fortress, Bâlea Lake at 2,042 m and Sibiu. Usually open 1 July – 31 October.',
      ro: 'Barajul Vidraru, Cetatea Poenari, Bâlea Lac la 2.042 m și Sibiu. Deschis de regulă 1 iulie – 31 octombrie.',
    },
  },
];
