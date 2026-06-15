// The Life Spa — tüm landing içeriği tek kaynakta. Görseller ileride
// gerçek işletme fotoğraflarıyla burada tek yerden değiştirilecek.
import { PHONE_DISPLAY } from '../lib/whatsapp';

export const site = {
  name: 'The Life Spa',
  url: 'https://thelife.siberkale.com',
  address: 'İstiklal Mah., Altınışık Sk. No:43/A, Serdivan/Sakarya',
  hours: 'Her Gün 12:00 - 22:00',
  phoneDisplay: PHONE_DISPLAY,
  title: 'The Life Spa Sakarya | Serdivan Premium Masaj ve Spa',
  description:
    'Serdivan’da premium spa deneyimi. Masaj, hamam, sauna ve jakuzi ritüelleri için The Life Spa’dan WhatsApp ile randevu alın.',
};

export const navLinks = [
  ['#ritueller', 'Ritüeller'],
  ['#wellness', 'Wellness'],
  ['#paketler', 'Paketler'],
  ['#randevu', 'Randevu'],
  ['#iletisim', 'İletişim'],
] as const;

export const heroNotes = [
  ['Rezervasyon', 'WhatsApp ile kişisel saat teyidi'],
  ['Atmosfer', 'Sessiz, ferah ve mahrem alanlar'],
  ['Ritüel', 'Masaj + hamam + jakuzi akışı'],
] as const;

export const stats = [
  ['12:00–22:00', 'Her gün açık'],
  ['4+', 'İmza spa ritüeli'],
  ['2 kişilik', 'Özel oda seçeneği'],
] as const;

export const highlights = [
  'Serdivan merkezde kolay ulaşım',
  'Özel oda ve jakuzi seçenekleri',
  'Kese köpük + sauna akışı',
  'WhatsApp ile hızlı saat teyidi',
] as const;

export const rituals = [
  {
    title: 'İsveç Masajı',
    text: 'Spa deneyimine sakin ve dengeli başlamak isteyenler için dolaşımı destekleyen, kasları gevşetmeye odaklanan klasik masaj.',
    meta: '50 / 60 / 90 Dakika · WhatsApp ile bilgi alın',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=900&q=85',
  },
  {
    title: 'Medikal Taş Masaj',
    text: 'Sıcak taş dokunuşu ve terapötik masaj teknikleriyle kas gerginliği, yorgunluk ve stres hissini azaltmaya yardımcı olur.',
    meta: 'Seanslı · WhatsApp ile bilgi alın',
    image: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=900&q=85',
  },
  {
    title: 'Hamam & Kese Köpük',
    text: 'Profesyonel kese köpük uygulaması, sauna ve dinlenme akışıyla bedeni arındıran geleneksel spa ritüeli.',
    meta: 'Hamam + Sauna · WhatsApp ile bilgi alın',
    image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=900&q=85',
  },
  {
    title: 'Çift Spa Deneyimi',
    text: 'Çift kişilik özel oda, jakuzi kullanımı ve masaj akışıyla birlikte planlanan huzurlu bir spa molası.',
    meta: 'Özel oda + Jakuzi · WhatsApp ile bilgi alın',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=900&q=85',
  },
] as const;

export const experienceLayers = [
  ['Sessizlik', 'Randevu saatleri, misafirin acele hissetmeyeceği sakin bir geçişle planlanır.'],
  ['Mahremiyet', 'Tek veya çift kişilik alanlar, bakım boyunca konfor ve özel alan hissini korur.'],
  ['Ritüel Akışı', 'Sauna, hamam, jakuzi ve masaj sıralaması ihtiyaca göre birlikte kurgulanır.'],
] as const;

export const areas = [
  ['Yeni ve Ferah Salonlar', 'Randevu öncesi hazırlanan temiz, sakin ve konforlu bakım alanları.'],
  ['Sauna', 'Kese köpük veya masaj öncesi bedeni gevşetmeye yardımcı sıcak hazırlık alanı.'],
  ['Jakuzi', 'Tek veya çift kişilik spa molasını tamamlayan dinlendirici sıcak su deneyimi.'],
  ['Çift Kişilik Özel Oda', 'Birlikte vakit ayırmak isteyen misafirler için mahrem ve özenli spa akışı.'],
] as const;

// Wellness galerisi — ana görsel + lightbox için küçük set.
export const gallery = [
  { src: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=1100&q=85', alt: 'Spa bakım alanı' },
  { src: 'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&w=800&q=85', alt: 'Dinlenme alanı' },
  { src: 'https://images.unsplash.com/photo-1583416750470-965b2707b355?auto=format&fit=crop&w=800&q=85', alt: 'Sauna alanı' },
  { src: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=800&q=85', alt: 'Sessiz bakım odası' },
] as const;

export const serviceMenu = [
  ['İsveç Masajı', 'İlk spa deneyimi, hafif gevşeme ve dengeli rahatlama isteyenler için.'],
  ['Medikal Taş Masaj', 'Kas gerginliği, yoğun iş temposu ve bedensel yorgunluk hissine odaklanır.'],
  ['Kese Köpük', 'Hamam ritüelinin arındırıcı etkisini profesyonel uygulamayla tamamlar.'],
  ['Sauna', 'Masaj veya hamam öncesi bedeni gevşetmeye yardımcı sıcak hazırlık alanı.'],
  ['Jakuzi', 'Seans öncesi veya sonrası özel spa molasını daha dingin hale getirir.'],
  ['Çift Konsepti', 'Özel oda, jakuzi ve masaj akışıyla birlikte planlanan iki kişilik deneyim.'],
] as const;

export const packages = [
  ['Arınma Molası', 'Hamam, kese köpük ve sauna ile bedeni tazeleyen kısa spa akışı.'],
  ['Derin Rahatlama', 'Medikal taş masaj ve sakin dinlenme süreciyle kas gerginliğine odaklanır.'],
  ['Çiftlere Özel', 'Özel oda, jakuzi ve masaj deneyimini birlikte yaşamak isteyenler için planlanır.'],
] as const;

export const protocols = [
  ['Hazırlık', 'Oda, havlu ve kullanılacak alan randevu öncesinde hazırlanır.'],
  ['Yönlendirme', 'Misafirin seçtiği hizmete göre sauna, hamam, jakuzi veya masaj sırası netleştirilir.'],
  ['Dinlenme', 'Seans sonrası acele etmeden toparlanabileceğiniz sakin bir geçiş alanı sunulur.'],
] as const;

export const journey = [
  ['01', 'Talebinizi iletin', 'Hizmet, gün ve kişi sayısını formdan ya da WhatsApp üzerinden paylaşın.'],
  ['02', 'Saatiniz netleşsin', 'Ekip uygun saat aralığını teyit eder ve deneyiminizi planlar.'],
  ['03', 'Alanınız hazırlansın', 'Oda, havlu ve spa akışı randevunuzdan önce özenle hazırlanır.'],
] as const;

export const faqs = [
  ['İlk kez geliyorum, hangi hizmet uygun?', 'Rahat ve dengeli başlangıç için İsveç masajı veya hamam + kese köpük akışı önerilir. Daha yoğun kas gerginliğinde medikal taş masaj tercih edilebilir.'],
  ['Çiftler için özel alan var mı?', 'Evet. Çift kişilik özel oda, jakuzi kullanımı ve masaj akışı WhatsApp üzerinden saat teyidiyle planlanır.'],
  ['Randevu kesinleşmesi nasıl oluyor?', 'Form veya WhatsApp mesajından sonra ekip uygun saat aralığını teyit eder. Kesin randevu işletme onayıyla netleşir.'],
] as const;
