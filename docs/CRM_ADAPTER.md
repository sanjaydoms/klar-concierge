# CRM Adapter

The CRM/RMS is ready but connected later. The adapter is the entire coupling
surface — connecting a real CRM requires **one provider implementation, one
factory registration, and environment variables**. No UI, engine or API
changes.

## Interface (src/types/crm.ts, src/services/crm/providers.ts)
`CRMProvider.submitLead(payload, {idempotencyKey})` + `health()`.
`CRMLeadPayload` carries the customer contact block (with consent + timestamp),
the trip brief, selected destination, itinerary and a non-PII conversation
summary.

## Disabled mode (CRM_ENABLED=false — current default)
- The decision engine is 100% usable.
- `POST /api/crm/handover` answers 503 with an honest message; nothing is
  transmitted or stored.
- The UI hides the handover CTA in production; in previews it shows a
  clearly-labelled disabled button plus honest guidance to contact Klar
  directly. **No fake success, no fake reference, no PII collection.**

## Enabled mode (CRM_ENABLED=true, CRM_PROVIDER=webhook)
Validate form + consent → idempotency key (one delivery per session) → HTTPS
webhook with bearer token, Idempotency-Key header and timeout → CRM reference
returned to the customer → the planning session is deleted (PII retention
ends). Failures: truthful 502, the plan stays intact in the session for retry,
telemetry is PII-redacted. Misconfiguration throws at the factory — there is
no silent fallback to the placeholder.
