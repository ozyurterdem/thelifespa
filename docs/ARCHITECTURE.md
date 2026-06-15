# ARCHITECTURE — thelifespa

## Amaç

The Life Spa için hızlı, SEO dostu ve geçici yayına uygun landing site altyapısı.

## Stack

- Astro 6
- React 19 islands
- Tailwind CSS 4 via `@tailwindcss/vite`
- Nginx static container
- Coolify İstanbul deploy

## Yapı

```text
src/pages/index.astro   Sadece kompozisyon (BaseLayout + section bileşenleri)
src/layouts/            BaseLayout — head/meta/JSON-LD/fontlar/grain/motion script
src/components/         Astro section bileşenleri + React island'lar (.tsx) + Icon/Reveal
src/data/site.ts        Tüm landing içeriği (tek kaynak)
src/lib/whatsapp.ts     WhatsApp url/mesaj helper (numara tek yerde)
src/scripts/motion.ts   Vanilla motion: reveal/stagger/parallax/count-up/nav
src/styles/global.css   Token sistemi + premium derinlik
public/                 Statik asset'ler (favicon, og.svg)
Dockerfile              Build + nginx runtime
nginx.conf              Static hosting config
```

## Deploy mimarisi

```text
GitHub repo → Coolify Dockerfile build → Nginx container → Traefik/Caddy proxy → Cloudflare → kullanıcı
```

## Kararlar

- Full React SPA yerine Astro ana sayfa + küçük React islands kullanılacak.
- **Hareket React'siz vanilla `motion` ile** (`inView`/`scroll`/`stagger`/`animate`) tek client
  script'te kurulur → island hydration maliyeti yok, statik/SEO/perf korunur. Tüm hareket
  `prefers-reduced-motion` ile koşullu; CSS guard'ı JS çalışmasa da içeriği görünür tutar.
- React island yalnızca **gerçekten interaktif** parçalar için: `MobileNav`, `FaqAccordion`,
  `GalleryLightbox` (`client:idle`/`client:visible`).
- **Modal/lightbox `createPortal` ile `document.body`'ye** render edilir — reveal animasyonu
  ata elemana kalıcı `transform` bırakırsa `position: fixed` için yanlış containing block
  oluşur; portal bunu tamamen by-pass eder.
- İçerik `data/site.ts`, WhatsApp mantığı `lib/whatsapp.ts` — tek kaynak; href'ler elle yazılmaz.
- Statik output Nginx ile servis edilecek.
- Domain `thelife.siberkale.com` Cloudflare proxied A kaydıyla İstanbul Coolify'a yönleniyor.

## Riskler

- Görseller küratörlü Unsplash stok; gerçek işletme fotoğrafları `data/site.ts`'ten değişecek.
- Yeni içerik/görsel eklenince a11y (alt metin, kontrast) ve görsel 200 kontrolü tekrarlanmalı.
- `og.svg` placeholder — bazı paylaşım botları SVG OG render etmez; gerçek PNG/JPG ile değişmeli.
