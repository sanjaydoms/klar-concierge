# Security Model

## Why the attack surface is small by design
- **No authentication, no accounts, no passwords** — nothing to phish or crack.
- **No database** — no SQL injection target, nothing to exfiltrate.
- **No customer PII at rest** — contact details exist only in transit during a
  CRM handover; sessions are anonymous, TTL-bound (120 min) and in-memory.
- **No payments, no bookings** — no financial rails to attack.

## Active protections
| Layer | Protection |
| --- | --- |
| Transport | HSTS (2 years, includeSubDomains) |
| Headers | CSP (`default-src 'self'`, frame-ancestors restricted to klartravels.com), nosniff, strict referrer, camera/mic/geo denied |
| Input | zod validation on every API body: length caps, UUID-only session ids, enum-bound fields, month/slug bounds |
| Output | React auto-escaping everywhere; JSON-LD blocks escape `<` so no data can break out of the script tag |
| Rate limiting | Per-IP fixed windows (chat 30/min, plan 30/min, CRM 5/min), platform-set client IP preferred, bounded memory |
| Sessions | `crypto.randomUUID()` (122 bits), TTL purge, transcript capped at 80 messages |
| Errors | Generic messages only — no stack traces or internals in responses |

## Automated vulnerability testing and fixing
- **`security` workflow** (every push + weekly): `npm audit --audit-level=high`
  fails the build on any high/critical advisory; unit fuzzing (prototype
  pollution, template/SQL/header injection, hostile unicode) and end-to-end
  security tests (headers, XSS execution, payload abuse, path traversal) run
  against a production build.
- **Auto-fix** (weekly): `npm audit fix` is applied, the full quality gate
  re-runs, and only a green result is committed to main. Breaking upgrades
  are never auto-applied — Dependabot raises those as PRs for review.
- **Dependabot**: weekly dependency and GitHub Actions updates; security
  advisories raise PRs immediately.

## Known trade-offs (documented, not hidden)
- Rate limits are per-instance in-memory: on serverless scale-out they are
  soft limits. Swap `lib/rateLimit.ts` for Redis/Upstash when traffic grows.
- Sessions are in-memory: a cold start loses live conversations (clients
  recover gracefully). Same Redis swap applies.
- `'unsafe-inline'` remains in CSP script-src because Next.js inline runtime
  requires it without nonce plumbing; mitigated by React escaping and zero
  third-party scripts.

## Testing it yourself
```
npm audit                                    # dependency vulnerabilities
npx vitest run tests/unit/input-fuzzing.test.ts
npx playwright test tests/e2e/security.spec.ts
```
