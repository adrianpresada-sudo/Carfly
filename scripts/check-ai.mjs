// Verifică site-ul cum îl vede un robot AI: HTML brut, fără JavaScript.
// Folosire: node scripts/check-ai.mjs [adresa]   (implicit http://localhost:4321)
const BASE = process.argv[2] ?? 'http://localhost:4321';
const UA = 'Mozilla/5.0 (compatible; Claude-SearchBot/1.0)';

const pages = [
  ['/en/', ['Otopeni', 'no deposit', 'application/ld+json', 'AutoRental']],
  ['/ro/', ['Otopeni', 'garanție', 'AutoRental']],
  ['/en/cars/', ['Dacia Logan', '€', 'ItemList']],
  ['/en/cars/?pd=2027-05-10&pt=10:00&rd=2027-05-15&rt=10:00', ['5 days', 'Choose']],
  ['/en/book/toyota-c-hr/?pd=2027-05-10&pt=10:00&rd=2027-05-15&rt=10:00', ['Toyota C-HR', 'Confirm reservation', '185 €']],
  ['/en/prices/', ['Mercedes Vito', '176 €', 'Prices']],
  ['/ro/prices/', ['Dacia Jogger', 'Prețuri']],
  ['/en/about/', ['Zero', 'Otopeni']],
  ['/en/faq/', ['FAQPage', 'deposit']],
  ['/en/conditions/', ['20 years']],
  ['/en/guides/transfagarasan/', ['2,042', '07:00', 'Article', 'FAQPage']],
  ['/ro/guides/transfagarasan/', ['2.042', 'Bâlea']],
  ['/llms.txt', ['# Carfly', 'zero liability']],
  ['/prices.json', ['"cars"', 'dacia-logan']],
  ['/robots.txt', ['Claude-SearchBot', 'OAI-SearchBot', 'Sitemap']],
];

let failed = 0;
for (const [path, needles] of pages) {
  const res = await fetch(BASE + path, { headers: { 'user-agent': UA }, redirect: 'manual' });
  const body = await res.text();
  const missing = needles.filter((n) => !body.includes(n));
  const bad = ['undefined', 'NaN', '[object Object]'].filter((x) => body.includes(`>${x}<`) || body.includes(` ${x} `));
  const jsonld = [...body.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)].map((m) => m[1]);
  let jsonErr = 0;
  for (const j of jsonld) { try { JSON.parse(j); } catch { jsonErr++; } }
  const ok = res.status === 200 && missing.length === 0 && bad.length === 0 && jsonErr === 0;
  if (!ok) failed++;
  console.log(`${ok ? 'OK  ' : 'FAIL'} ${res.status} ${path}${missing.length ? `  lipsă: ${missing.join(', ')}` : ''}${bad.length ? `  greșit: ${bad.join(', ')}` : ''}${jsonErr ? `  JSON-LD invalid: ${jsonErr}` : ''}${jsonld.length ? `  (JSON-LD: ${jsonld.length})` : ''}`);
}
console.log(failed ? `\n${failed} pagini cu probleme.` : '\nToate paginile se citesc complet fără JavaScript.');
process.exit(failed ? 1 : 0);
