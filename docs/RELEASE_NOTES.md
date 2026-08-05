# Release Notes

## 2.0.0 — Final decision-engine release (2026-08-05)

A ground-up correction of the repository against the final product
definition: Klar Concierge is a conversational holiday **decision engine**,
not a lead-management system.

### Removed (architecture correction)
- All authentication code, the consultant workspace, admin dashboards and the
  customer-lead database (PostgreSQL/Prisma removed entirely) — customer PII
  is no longer persisted anywhere in the app.
- All internal lead APIs, audit UI and CRM retry/backfill scaffolding tied to
  the old lead store.

### New intelligence core
- Git-managed KTIE under `knowledge/`: 196-country ISO registry, 30 deep
  destinations (12-month intelligence each), 180 structured attraction
  records with suitability metadata, typed sources, and governance scripts
  (validate / coverage / staleness) that gate the build.
- Recommendation eligibility gate — only evidence-complete, verified,
  fresh destinations can be recommended.

### New engines and experience
- Enhanced trip understanding: exclusions, dislikes, climate preferences,
  crowd and flight tolerance, dietary needs, multi-generational parties,
  comparison/undecided/out-of-scope intents; anonymous TTL sessions with
  refresh recovery and start-over.
- Deterministic scoring with 15-dimension breakdowns and hard exclusions;
  honest two-option and zero-option behaviour instead of padded thirds.
- Destination comparison engine (+ /concierge/compare and in-chat "Japan or
  Korea?") with dimension winners, conditions and confidence.
- Attraction-grounded itineraries with morning/afternoon/evening blocks,
  weather alternatives and child/senior/accessibility notes.
- Truthful CRM handover: consent-gated, idempotent, PII-in-transit-only,
  session deleted on success; disabled mode never fakes anything.

### Quality
- 58 unit/integration tests, 288-scenario evaluation suite (caught and fixed
  two real defects pre-release), 12 Playwright e2e checks across desktop and
  320px mobile, strict typecheck, knowledge CI — all green.
