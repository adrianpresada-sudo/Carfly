# Carfly — carfly.ro

Rent a car la Aeroportul Otopeni (OTP). Site construit și operat de agenți AI, după regulile din documentul de brand „Carfly — Creierul brandului”.

## Principiu: „AI super friendly”
Tot ce contează (prețuri, flotă, condiții, întrebări frecvente, ghiduri) e în HTML-ul trimis de server, citibil fără JavaScript, în fiecare limbă la adresa ei (`/en/`, `/ro/`). Verificare: `npm run check:ai` (cu `npm run dev` pornit).

## Structură
- `src/data/fleet.ts` — clasele de mașini și prețurile standard (6 trepte de durată)
- `src/data/periods.ts` — perioadele de preț care înlocuiesc prețurile standard
- `src/data/business.ts` — datele firmei (**de completat înainte de lansare**)
- `src/data/content.ts` — fapte, întrebări frecvente, condiții
- `src/lib/pricing.ts` — calculul prețului (treapta după durata totală, fiecare zi cu prețul perioadei ei)
- `src/pages/[lang]/` — paginile; `cars/` și `book/` rulează pe server, restul sunt statice
- `/llms.txt`, `/prices.json`, `/robots.txt`, `/sitemap-index.xml` — stratul pentru AI și motoare de căutare

## Înainte de lansare
1. Datele firmei în `src/data/business.ts` (SRL, CUI, adresă, telefon, WhatsApp, email).
2. `BOOKING_WEBHOOK_URL` în Vercel — unde ajung rezervările (email/WhatsApp/bază de date). Fără el, rezervările apar doar în jurnalul serverului.
3. Confirmarea prețului Mercedes E-Class la 4–7 zile (acum 76 €, propus).
4. Termenii și condițiile Carfly, politica de confidențialitate și politica de anulare.
5. Fotografii proprii ale flotei.

## Comenzi
- `npm install` · `npm run dev` · `npm run build` · `npm run check:ai`
