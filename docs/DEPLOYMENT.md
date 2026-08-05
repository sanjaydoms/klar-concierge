# Deployment (Vercel or any Node host)

## Vercel
1. Import the repository (app at the repo root). Framework: Next.js.
   Build command `npm run build` (runs knowledge validation + compile first —
   an invalid knowledge base fails the build by design).
2. Environment variables — none required. Optional:
   `OPENAI_API_KEY`/`OPENAI_MODEL`, `SESSION_TTL_MINUTES`,
   `ANALYTICS_PROVIDER`, and the CRM block when handover goes live.
3. Deploy. Verify `GET /api/system/health` and `GET /api/system/readiness`.

## Enabling CRM handover later
Set `CRM_ENABLED=true`, `CRM_PROVIDER=webhook`, `CRM_WEBHOOK_URL` (HTTPS),
`CRM_WEBHOOK_TOKEN`. Redeploy; readiness validates the provider. The handover
CTA appears automatically. See CRM_ADAPTER.md.

## Multi-instance note
Sessions and idempotency default to in-memory stores — correct on a single
instance. For serverless scale-out, implement `SessionStore` and
`IdempotencyStore` against Redis (interfaces in src/repositories) and register
them; no other changes are needed. Rate limiting has the same property.

## Domain
`concierge.klartravels.com` → this app, linked from klartravels.com's
"Plan My Holiday" CTA. The planner is fully self-contained.

## Post-deploy smoke
`curl -s https://<domain>/api/system/readiness` → `ready: true`; run one
planner journey and one comparison on a phone.
