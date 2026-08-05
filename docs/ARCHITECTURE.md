# Architecture

```
Customer
   ↓
Conversational engine (src/services/conversation, src/services/ai)
   ↓  deterministic fallback extraction stands behind optional OpenAI
Structured trip brief (anonymous TTL session — src/repositories/sessions)
   ↓
KTIE (knowledge/ JSON → compiled → src/repositories/knowledge)
   ↓  eligibility gate (src/services/ktie/eligibility)
Recommendation / comparison / itinerary engines (deterministic, testable)
   ↓
Customer decision
   ↓
CRM adapter (src/services/crm) — placeholder now, webhook/vendor later
```

## Data ownership
The app owns destination/country/attraction intelligence, conversation
orchestration, anonymous session state, recommendation and itinerary logic,
non-personal analytics, and evaluation datasets. The CRM owns every piece of
customer PII, the qualified lead, follow-up and the relationship.

## Key decisions
- **No database.** Sessions and idempotency records are TTL stores behind
  `SessionStore` / `IdempotencyStore` interfaces (in-memory default; implement
  against Redis for multi-instance deployments). Knowledge compiles to a
  statically-imported JSON bundle, so the engine runs anywhere.
- **AI never ranks.** The model (when configured) extracts preferences and
  intent; scoring, exclusion, comparison and itinerary logic are pure
  deterministic TypeScript with full test coverage.
- **Eligibility gate.** A destination enters recommendations only with
  verified status, 12-month data, ≥5 attractions, trade-offs, sources,
  confidence ≥60 and a valid review date (90-day grace after review-due).

## Public surface
Routes: `/`, `/concierge`, `/concierge/discover`, `/concierge/compare`,
`/concierge/how-it-works`, `/privacy`, `/terms`.
APIs: `POST /api/chat`, `POST /api/chat/complete`,
`GET|DELETE /api/chat/session/:id`, `POST /api/plan`, `POST /api/compare`,
`GET /api/discover`, `GET /api/destinations/:slug`, `POST /api/crm/handover`,
`GET /api/system/health`, `GET /api/system/readiness`.
Nothing else — no admin, consultant, booking, payment or auth routes exist.

## Security
Zod validation and length limits on every API, fixed-window rate limits
(chat/plan/crm), CSP + frame-deny + referrer/permissions headers, safe error
responses, server-only secrets, PII redaction before telemetry
(src/lib/privacy), session TTL and deletion, consent-gated handover.
