# Changelog

Tüm önemli değişiklikler bu dosyada izlenir.

Format: [Keep a Changelog](https://keepachangelog.com/en/1.1.0/)
Versiyonlama: [Semantic Versioning](https://semver.org/lang/tr/)

---

## [Unreleased]

### Added
- Henüz yok.

---

## [0.1.0] — 2026-06-15

### Added
- **Premium yeniden inşa.** Tek dosyalık `index.astro` component mimarisine bölündü
  (`layouts/BaseLayout`, `components/*`, `data/site.ts`, `lib/whatsapp.ts`).
- Vanilla `motion` (React'siz) ile scroll-reveal + stagger, hero parallax, sticky nav yoğunluğu;
  hepsi `prefers-reduced-motion` korumalı.
- lucide ikonları inline SVG olarak (`Icon.astro`) — metin glyph'lerinin yerine.
- React island'lar: mobil menü drawer (`MobileNav`), FAQ akordeon (`FaqAccordion`),
  galeri lightbox (`GalleryLightbox`, `createPortal` ile `body`'ye).
- Mobil alt sabit CTA çubuğu + desktop yüzen WhatsApp butonu (`StickyCta`).
- Film grain overlay, `og:image`, canonical ve genişletilmiş OG/Twitter meta.

### Changed
- `global.css` token sistemi korunarak premium derinlik (shadow/radius ölçeği, hover hiyerarşisi,
  focus-visible halkaları, cam/blur efektleri) ile genişletildi.
- Tüm içerik `data/site.ts`'te tek kaynakta toplandı; WhatsApp mantığı `lib/whatsapp.ts`'e taşındı.

### Fixed
- Kırık galeri görseli (Unsplash 404) çalışan görselle değiştirildi.
- `Reveal` sarmalayıcısı `id`/aria gibi attribute'ları forward etmiyordu → `#randevu`/`#iletisim`
  çapaları ve form id'si düşüyordu; düzeltildi.
- `position: fixed` lightbox, reveal transform'unun yarattığı containing block içinde
  kısılıyordu → `createPortal` ile `body`'ye taşınarak tam ekran garantilendi.

---

## [0.0.1] — 2026-05-26

### Added
- Astro 6 minimal proje React Islands ve Tailwind CSS 4 ile oluşturuldu.
- Dockerfile, nginx config ve Coolify uyumlu static hosting eklendi.
- `thelife.siberkale.com` geçici İstanbul yayını açıldı.
