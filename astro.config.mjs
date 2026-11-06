// Carfly — configurație Astro.
// Paginile de conținut sunt generate static (HTML complet, citibil fără JavaScript).
// Doar paginile care depind de datele clientului (căutare, rezervare) rulează pe server.
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.carfly.ro',
  output: 'server',
  adapter: vercel(),
  trailingSlash: 'always',
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'en', locales: { en: 'en', ro: 'ro' } },
      lastmod: new Date(),
      // Paginile randate pe server (acasă, mașini) nu apar automat; le adăugăm explicit.
      customPages: ['https://www.carfly.ro/en/', 'https://www.carfly.ro/ro/', 'https://www.carfly.ro/en/cars/', 'https://www.carfly.ro/ro/cars/'],
    }),
  ],
});
