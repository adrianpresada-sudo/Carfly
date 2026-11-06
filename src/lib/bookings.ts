// Trimiterea unei rezervări.
// Rezervarea se trimite la adresa din variabila de mediu BOOKING_WEBHOOK_URL (de ex. un flux care
// trimite email + WhatsApp echipei și o salvează în baza de date). Fără ea, rezervarea apare doar
// în jurnalul serverului — de configurat înainte de lansare.

export interface BookingInput {
  ref: string;
  lang: string;
  carId: string;
  carName: string;
  pickup: string;
  return: string;
  days: number;
  extras: string[];
  total: number;
  name: string;
  phone: string;
  email: string;
  flight: string;
  createdAt: string;
}

export function newRef(): string {
  const rand = crypto.randomUUID().replace(/-/g, '').slice(0, 6).toUpperCase();
  return `CF-${rand}`;
}

export async function submitBooking(b: BookingInput): Promise<{ delivered: boolean }> {
  const url = import.meta.env.BOOKING_WEBHOOK_URL ?? process.env.BOOKING_WEBHOOK_URL;
  console.info('[booking]', JSON.stringify({ ...b, phone: '***', email: '***' }));
  if (!url) return { delivered: false };
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(b),
    });
    return { delivered: res.ok };
  } catch (err) {
    console.error('[booking] webhook failed', err);
    return { delivered: false };
  }
}
