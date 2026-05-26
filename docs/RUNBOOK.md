# RUNBOOK — thelifespa

## Lokal geliştirme

```bash
cd /Users/erdem/Documents/GitHub/thelifespa
npm install
npm run dev
```

## Build doğrulama

```bash
npm run build
npm audit --audit-level=high
```

## Deploy

Mevcut pattern:

```text
git push origin main → Coolify İstanbul → Dockerfile build → nginx static container
```

Coolify app:

- UUID: `fevvvzqwlrf29t485w12t121`
- FQDN: `https://thelife.siberkale.com`
- Server: İstanbul Coolify / localhost
- Build pack: Dockerfile
- Port: `80`

## Manuel deploy tetikleme

```bash
IST_URL=$(~/.siberkale/scripts/read-secret.sh coolify_ist_url)
IST_TOKEN=$(~/.siberkale/scripts/read-secret.sh coolify_ist_token)
curl -X POST "$IST_URL/api/v1/deploy" \
  -H "Authorization: Bearer $IST_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"uuid":"fevvvzqwlrf29t485w12t121","force":true}'
```

## Smoke test

```bash
curl -I https://thelife.siberkale.com/
```

Beklenen: HTTP `200`.

## Rollback

1. Git'te önceki sağlıklı commit'e dön.
2. `git push origin main`.
3. Coolify deploy tetikle.
4. `curl -I https://thelife.siberkale.com/` ile doğrula.

Acil kapatma:

- Cloudflare `thelife.siberkale.com` DNS kaydını kaldır.
- Veya Coolify app FQDN'ini temizle.

## DNS

- Zone: `siberkale.com`
- Record: `thelife.siberkale.com`
- Type: A
- Target: `188.125.168.128`
- Proxied: açık
