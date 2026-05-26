# OPS_LOG — thelifespa

> Append-only. Yeni entry'yi en üste ekle. Eski entry'yi düzenleme; yanlışsa üstüne yeni entry ile düzelt.

---

## 2026-05-26 14:12 | TheLifeSpa geçici İstanbul yayını

- **Aksiyon:** Astro 6 site GitHub'a alındı, İstanbul Coolify'da Dockerfile build app oluşturuldu, `thelife.siberkale.com` DNS kaydı eklendi.
- **Sebep:** The Life Spa sitesini geçici olarak `thelife.siberkale.com` altında yayına almak.
- **Kim:** Erdem + Pi agent
- **Sonuç:** Başarılı. Coolify app `fevvvzqwlrf29t485w12t121` `running:healthy`.
- **Backup:** GitHub repo: https://github.com/ozyurterdem/thelifespa
- **Rollback:** Cloudflare DNS kaydını kaldır veya Coolify app FQDN'i devre dışı bırak.
- **Doğrulama:** `npm run build`, `npm audit --audit-level=high`, Coolify deploy finished, public HTTPS 200.
- **PR:** N/A
- **Not:** İlk `dockerimage` denemesi registry pull nedeniyle başarısız oldu; doğru pattern public GitHub repo + Coolify Dockerfile build.

---
