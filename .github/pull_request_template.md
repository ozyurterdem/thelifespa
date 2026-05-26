<!-- Bu dosya .github/pull_request_template.md olarak kopyalanır. -->

## Özet

<!-- 1-3 cümle: ne değişti, niye gerekti -->

Closes #

---

## Manual steps

> **Zorunlu bölüm.** Yoksa "yok" yaz, silme.

- [ ] `.env` yeni değişken eklendi mi? Hangi: `<KEY>=<example>`
- [ ] Migration var mı? `alembic upgrade head` gerek
- [ ] Servis restart şart mı? Hangi container
- [ ] Cache flush gerek mi? `redis-cli FLUSHDB`
- [ ] Coolify Redeploy webhook otomatik mi, manuel mi?
- [ ] DNS / Cloudflare değişikliği var mı?
- [ ] 3rd party konfig (LiveKit, S3, mailcow)?

**Eğer bu PR'da manual ops varsa, merge sonrası `OPS_LOG.md`'ye entry ekle.**

---

## Test plan

### Otomatik
- [ ] Lokal `pytest` geçti
- [ ] CI yeşil (varsa)

### Manuel
- [ ] Lokal smoke (geliştirme env'de happy path)
- [ ] Staging smoke (varsa)
- [ ] Edge case: <şu durum>

### Smoke test komutu (PROD URL'inde, merge sonrası)

```bash
curl -s https://panel.mtokurumsal.org/api/health | jq .
# ve PR-spesifik endpoint:
curl -s https://panel.mtokurumsal.org/api/<yeni-endpoint> ...
```

---

## DoD checklist

- [ ] Code review yapıldı (subagent veya kişi)
- [ ] Lokal testler geçti
- [ ] CI yeşil
- [ ] Manuel smoke test (PROD URL'inde gerçek isteğe doğrulandı)
- [ ] Manual ops adımları yukarıda listelendi
- [ ] Manual ops uygulandıysa `OPS_LOG.md` güncellendi
- [ ] `CHANGELOG.md` "Unreleased" güncellendi
- [ ] `PROJECT_STATE.md` güncellendi (sprint, blocker, prod state)
- [ ] Breaking change varsa MIGRATION not (CHANGELOG + ADR)

---

## Ek not

<!-- Reviewer'a bağlam, screenshot, log, vs. -->
