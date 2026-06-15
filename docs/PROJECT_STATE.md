# PROJECT_STATE — thelifespa

> Anlık durum dosyası. Her sprint başı/sonu ve deploy sonrası güncelle.
> Geçmiş kayıt için `OPS_LOG.md` ve `CHANGELOG.md`'ye bak.

**Last updated:** 2026-06-15 — Premium yeniden inşa (v0.1.0): component mimarisi + motion + islands

---

## Active sprint

- **Ad:** Premium landing yükseltme
- **Başlangıç:** 2026-06-15
- **Hedef:** Tek dosyalık landing'i component mimarisine taşımak; vanilla motion, lucide ikonlar,
  React island'lar (mobil menü, FAQ akordeon, galeri lightbox), görsel derinlik ile "üst lig" kalite.
- **Açık PR'lar:** Yok

---

## Blocker

Yok.

---

## Known issues

| # | Severity | Tanım | Lokasyon | Workaround |
|---|---|---|---|---|
| 1 | P3 | Görseller hâlâ küratörlü Unsplash stok; gerçek işletme fotoğrafları bekleniyor | `data/site.ts` | İçerik hazır olunca tek yerden değiştir |

---

## Production state

- **Versiyon:** `0.0.1`
- **Deploy tarihi:** 2026-05-26
- **Deploy hash:** `67eb8e8`
- **Deploy URL:** https://thelife.siberkale.com
- **Coolify IST UUID:** `fevvvzqwlrf29t485w12t121`
- **DNS:** Cloudflare proxied A → `188.125.168.128`
- **Durum:** `running:healthy`, public HTTPS 200 doğrulandı
- **Son manuel ops:** OPS_LOG.md → 2026-05-26 TheLifeSpa geçici İstanbul yayını

---

## Links

- **Repo:** https://github.com/ozyurterdem/thelifespa
- **Issues:** https://github.com/ozyurterdem/thelifespa/issues
- **Production:** https://thelife.siberkale.com
- **Docs:**
  - [ARCHITECTURE.md](./ARCHITECTURE.md)
  - [RUNBOOK.md](./RUNBOOK.md)
  - [OPS_LOG.md](./OPS_LOG.md)

---

## Sprint hedefleri

- [x] Astro 6 minimal proje oluştur
- [x] React Islands ve Tailwind CSS 4 kur
- [x] Dockerfile + nginx static hosting ekle
- [x] GitHub repo oluştur ve `main` push et
- [x] İstanbul Coolify deploy
- [x] Cloudflare DNS + HTTPS smoke test
- [x] Gerçek landing içerik ve UI (premium yeniden inşa, v0.1.0)
- [ ] Production deploy (v0.1.0 → Coolify IST)
- [ ] Gerçek işletme fotoğraflarıyla görselleri değiştir
