// WhatsApp randevu akışı için tek kaynak. Numara/format burada değişir.
export const WHATSAPP_NUMBER = '905012500054';
export const PHONE_DISPLAY = '0501 250 00 54';

const DEFAULT_TEXT = 'Merhaba, The Life Spa için randevu oluşturmak istiyorum.';

/** Verilen (opsiyonel) mesajla wa.me bağlantısı üretir. */
export function whatsappUrl(text: string = DEFAULT_TEXT): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

/** Randevu formundan gelen alanları tek WhatsApp mesajına çevirir. */
export function bookingMessage(fields: Record<string, string>): string {
  return [
    DEFAULT_TEXT,
    `Ad Soyad: ${fields.name || '-'}`,
    `Telefon: ${fields.phone || '-'}`,
    `E-posta: ${fields.email || '-'}`,
    `Tercih: ${fields.date || '-'}`,
    `Hizmet: ${fields.service || '-'}`,
  ].join('\n');
}
