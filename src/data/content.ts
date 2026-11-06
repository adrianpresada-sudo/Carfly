// Conținut text pentru paginile-răspuns (fapte, întrebări frecvente, condiții).
// Fiecare răspuns începe cu răspunsul direct, ca să poată fi citat de asistenții AI.
import type { Lang } from '../i18n';

export interface QA { q: string; a: string }

export const FAQ: Record<Lang, QA[]> = {
  en: [
    { q: 'Do I need to pay a deposit to rent a car at Otopeni with Carfly?', a: 'No. Carfly does not take a deposit and does not block any amount on your card. You pay the rental price when you pick up the car.' },
    { q: 'Do I need a credit card?', a: 'No. You pay when you pick up the car, in euros or lei. The invoice is issued in lei at the BNR exchange rate.' },
    { q: 'What does "zero liability for damage" mean?', a: 'Full insurance is included in the price and you do not pay for damage to the car, as written in the Carfly rental contract. The contract lists the exceptions, such as driving under the influence of alcohol or drugs, a driver not named in the contract, or an accident not reported to the police.' },
    { q: 'Where do I pick up the car?', a: 'At Bucharest Henri Coandă International Airport (Otopeni, OTP), in front of the Arrivals terminal. The car is delivered 24/7, including at night.' },
    { q: 'What documents do I need?', a: 'A valid driving licence held for at least one year and an identity document or passport. The driver must be at least 20 years old. A national licence is accepted; an international driving permit is accepted too.' },
    { q: 'Is the mileage unlimited?', a: 'Yes. All Carfly cars have unlimited kilometres.' },
    { q: 'Can I drive the rental car outside Romania?', a: 'Only with approval requested in advance and an extra fee for extending the insurance and roadside assistance abroad. Driving abroad without approval is not allowed.' },
    { q: 'What is the fuel policy?', a: 'Same level: you receive the car with a certain fuel level and return it with the same level. A difference is charged at 2 € per litre.' },
    { q: 'Is the road tax (rovinieta) included?', a: 'Yes. The rovinieta and other road taxes are included in every Carfly rental.' },
    { q: 'How is the price calculated?', a: 'The price is per day of 24 hours and depends on the car and the rental length: 1 day, 2–3, 4–7, 8–14, 15–21 or 22+ days. Longer rentals have a lower price per day. In special price periods, the prices of that period apply on those days.' },
  ],
  ro: [
    { q: 'Trebuie să las garanție ca să închiriez o mașină la Otopeni cu Carfly?', a: 'Nu. Carfly nu cere garanție și nu blochează nicio sumă pe card. Plătești prețul închirierii când ridici mașina.' },
    { q: 'Am nevoie de card de credit?', a: 'Nu. Plătești la ridicarea mașinii, în euro sau în lei. Factura se emite în lei, la cursul BNR.' },
    { q: 'Ce înseamnă „zero răspundere pentru daune”?', a: 'Asigurarea completă e inclusă în preț și nu plătești daunele mașinii, așa cum scrie în contractul de închiriere Carfly. Contractul enumeră excepțiile, de exemplu condusul sub influența alcoolului sau a drogurilor, un șofer care nu e trecut în contract sau un accident nedeclarat la poliție.' },
    { q: 'De unde ridic mașina?', a: 'De la Aeroportul Internațional Henri Coandă (Otopeni, OTP), din fața terminalului Sosiri. Mașina e livrată non-stop, inclusiv noaptea.' },
    { q: 'Ce acte îmi trebuie?', a: 'Permis de conducere valabil, obținut de cel puțin un an, și act de identitate sau pașaport. Șoferul trebuie să aibă minimum 20 de ani. Se acceptă permisul național, dar și permisul internațional.' },
    { q: 'Kilometrii sunt nelimitați?', a: 'Da. Toate mașinile Carfly au kilometri nelimitați.' },
    { q: 'Pot ieși din țară cu mașina închiriată?', a: 'Doar cu acord cerut în avans și cu o taxă pentru extinderea asigurării și a asistenței rutiere în străinătate. Ieșirea din țară fără acord nu e permisă.' },
    { q: 'Cum e cu combustibilul?', a: 'Același nivel: primești mașina cu un anumit nivel de combustibil și o returnezi cu același nivel. Diferența se plătește cu 2 € pe litru.' },
    { q: 'Rovinieta e inclusă?', a: 'Da. Rovinieta și celelalte taxe de drum sunt incluse în orice închiriere Carfly.' },
    { q: 'Cum se calculează prețul?', a: 'Prețul e pe zi de 24 de ore și depinde de mașină și de durată: 1 zi, 2–3, 4–7, 8–14, 15–21 sau peste 22 de zile. La perioade mai lungi, prețul pe zi e mai mic. În perioadele cu preț special se aplică prețurile perioadei în zilele respective.' },
  ],
};

export const FACTS: Record<Lang, [string, string][]> = {
  en: [
    ['What Carfly is', 'A local car rental company at Bucharest Henri Coandă International Airport (Otopeni, OTP), Romania'],
    ['Pick-up and return', 'Otopeni Airport, in front of Arrivals, 24/7'],
    ['Price includes', 'VAT, full insurance (CASCO and third-party liability), road tax (rovinieta), maintenance, roadside assistance, unlimited km'],
    ['Damage liability', 'Zero: the customer does not pay for damage, with the exceptions written in the contract'],
    ['Deposit', 'None (0 €)'],
    ['Credit card', 'Not required'],
    ['Payment', 'At pick-up, in EUR or RON; invoice in RON at the BNR rate'],
    ['Minimum rental', '24 hours'],
    ['Driver', 'At least 20 years old, licence held for at least 1 year (national or international)'],
    ['Fuel', 'Same level at pick-up and return; difference charged at 2 € per litre'],
    ['Driving abroad', 'Only with approval requested in advance and an insurance extension fee'],
    ['Fleet', 'Economy, automatic, compact, SUV, hybrid, electric, premium, business and 7–9 seat cars'],
    ['Languages', 'English, Romanian, German, Italian, French, Spanish'],
  ],
  ro: [
    ['Ce este Carfly', 'O firmă locală de închirieri auto la Aeroportul Internațional Henri Coandă (Otopeni, OTP), România'],
    ['Ridicare și returnare', 'Aeroportul Otopeni, în fața terminalului Sosiri, non-stop'],
    ['Prețul include', 'TVA, asigurare completă (CASCO și RCA), rovinieta, întreținerea, asistența rutieră, kilometri nelimitați'],
    ['Răspundere pentru daune', 'Zero: clientul nu plătește daunele, cu excepțiile scrise în contract'],
    ['Garanție', 'Nu există (0 €)'],
    ['Card de credit', 'Nu e necesar'],
    ['Plată', 'La ridicare, în EUR sau RON; factură în lei la cursul BNR'],
    ['Durata minimă', '24 de ore'],
    ['Șofer', 'Minimum 20 de ani, permis de cel puțin 1 an (național sau internațional)'],
    ['Combustibil', 'Același nivel la ridicare și returnare; diferența se plătește cu 2 € pe litru'],
    ['Ieșire din țară', 'Doar cu acord cerut în avans și taxă de extindere a asigurării'],
    ['Flotă', 'Mașini economice, automate, compacte, SUV, hibride, electrice, premium, business și de 7–9 locuri'],
    ['Limbi', 'Română, engleză, germană, italiană, franceză, spaniolă'],
  ],
};

export const CONDITIONS: Record<Lang, { h: string; p: string }[]> = {
  en: [
    { h: 'Driver', p: 'The driver must be at least 20 years old and hold a valid national or international driving licence for at least one year. Only the customer and the additional driver named in the contract may drive the car.' },
    { h: 'What the price includes', p: 'VAT, full CASCO insurance and third-party liability (RCA), road taxes, maintenance and roadside assistance. Fuel is not included.' },
    { h: 'Damage', p: 'Zero liability for damage: the customer does not pay for damage to the car, except in the cases listed in the contract, such as driving under the influence of alcohol or drugs, a driver not named in the contract, unreported accidents or forbidden use of the car. Any incident must be reported to Carfly and to the police.' },
    { h: 'Fuel', p: 'The car is handed over and returned with the same fuel level. Any difference is charged at 2 € per litre.' },
    { h: 'Rental period', p: 'The minimum rental is 24 hours and the price is calculated per started day of 24 hours. If you need more time, tell us before the return time and we extend the rental. Days not used after an early return are not refunded.' },
    { h: 'Driving abroad', p: 'The car may be driven only in Romania. Driving abroad is possible only with approval requested in advance and an extra fee for extending the insurance and roadside assistance.' },
    { h: 'Payment', p: 'You pay at pick-up, in EUR or RON. The invoice is issued in RON at the BNR exchange rate on the invoice date.' },
    { h: 'Forbidden use', p: 'Subletting, taxi or driving-school use, towing, motorsport, and driving under the influence of alcohol or drugs are not allowed. Fines and lost keys (200 €) are paid by the customer.' },
  ],
  ro: [
    { h: 'Șoferul', p: 'Șoferul trebuie să aibă minimum 20 de ani și permis de conducere valabil, național sau internațional, obținut de cel puțin un an. Mașina poate fi condusă doar de client și de șoferul adițional trecut în contract.' },
    { h: 'Ce include prețul', p: 'TVA, asigurare CASCO completă și RCA, taxele de drum, întreținerea și asistența rutieră. Combustibilul nu e inclus.' },
    { h: 'Daune', p: 'Zero răspundere pentru daune: clientul nu plătește daunele mașinii, cu excepția cazurilor din contract, de exemplu condusul sub influența alcoolului sau a drogurilor, un șofer netrecut în contract, accidente nedeclarate sau folosirea interzisă a mașinii. Orice incident se anunță la Carfly și la poliție.' },
    { h: 'Combustibil', p: 'Mașina se predă și se returnează cu același nivel de combustibil. Diferența se plătește cu 2 € pe litru.' },
    { h: 'Durata', p: 'Durata minimă este de 24 de ore, iar prețul se calculează pe fiecare zi de 24 de ore începută. Dacă ai nevoie de mai mult timp, ne anunți înainte de ora returnării și prelungim. Zilele nefolosite la o returnare mai devreme nu se rambursează.' },
    { h: 'Ieșirea din țară', p: 'Mașina poate fi condusă doar în România. Ieșirea din țară e posibilă doar cu acord cerut în avans și cu o taxă pentru extinderea asigurării și a asistenței rutiere.' },
    { h: 'Plata', p: 'Plătești la ridicare, în EUR sau RON. Factura se emite în lei, la cursul BNR din ziua facturării.' },
    { h: 'Folosire interzisă', p: 'Nu sunt permise subînchirierea, taximetria, școala de șoferi, tractarea, competițiile și condusul sub influența alcoolului sau a drogurilor. Amenzile și cheile pierdute (200 €) se plătesc de client.' },
  ],
};
