# PROJECT_STATE — thelifespa

> Anlık durum dosyası. Her sprint başı/sonu ve deploy sonrası güncelle.
> Geçmiş kayıt için `OPS_LOG.md` ve `CHANGELOG.md`'ye bak.

**Last updated:** 2026-05-26 14:20 — İlk yayın + standart iskelet

---

## Active sprint

- **Ad:** Geçici landing yayını
- **Başlangıç:** 2026-05-26
- **Hedef:** The Life Spa için Astro 6 + React Islands + Tailwind CSS 4 tabanlı hızlı, SEO dostu geçici site altyapısı.
- **Açık PR'lar:** Yok

---

## Blocker

Yok.

---

## Known issues

| # | Severity | Tanım | Lokasyon | Workaround |
|---|---|---|---|---|
| 1 | P3 | İçerik ve tasarım henüz starter/minimal seviyede | `/` | Asıl brief uygulanacak |

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
- [ ] Gerçek landing içerik ve UI uygulanacak
