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
src/pages/          Astro sayfaları
src/components/     React/Astro component'leri
src/layouts/         Ortak layout'lar
src/styles/          Global Tailwind CSS
public/              Statik asset'ler
Dockerfile           Build + nginx runtime
nginx.conf           Static hosting config
```

## Deploy mimarisi

```text
GitHub repo → Coolify Dockerfile build → Nginx container → Traefik/Caddy proxy → Cloudflare → kullanıcı
```

## Kararlar

- Full React SPA yerine Astro ana sayfa + küçük React islands kullanılacak.
- Statik output Nginx ile servis edilecek.
- Geçici domain `thelife.siberkale.com` Cloudflare proxied A kaydıyla İstanbul Coolify'a yönleniyor.

## Riskler

- İçerik henüz minimal starter seviyede.
- SAK standby deploy henüz yapılmadı.
- Gerçek spa görselleri ve metinleri eklendiğinde SEO/a11y regresyonu yapılmalı.
