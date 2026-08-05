# Changed Files — 2.0.0

Everything below is relative to the repo root. This release rewrites the
application around the final product definition.

## Removed
- prisma/ (schema, migrations, seed), src/lib/db.ts — no database
- src/app/consultant/**, src/app/admin/**, src/app/login/** and all
  api/consultant, api/admin, api/auth, api/leads, api/internal routes
- src/lib/auth/**, src/lib/audit.ts, src/lib/enums.ts
- v1 lead/analytics services and v1 KTIE TS dataset

## Knowledge system (new)
- knowledge/{countries,destinations,attractions,sources,coverage}/**.json
- scripts/generate-knowledge.ts, scripts/knowledge-build.ts,
  scripts/knowledge-reports.ts, scripts/authoring/** (builders + 30
  destination records + 180 attraction records)
- src/lib/knowledgeSchemas.ts, src/generated-knowledge/knowledge.json
- src/repositories/knowledge/, src/services/ktie/{eligibility,discover}.ts

## Engines (new/rewritten)
- src/types/{brief,knowledge,recommendation,session,crm}.ts
- src/services/recommendations/engine.ts (scoring + hard exclusions +
  honest three directions)
- src/services/comparison/engine.ts
- src/services/itinerary/composer.ts (block-structured, attraction-grounded)
- src/services/conversation/engine.ts, src/services/ai/** (v2 extraction)
- src/services/crm/providers.ts, src/services/analytics/index.ts
- src/services/readiness/checks.ts, src/lib/privacy.ts, src/lib/config.ts
- src/repositories/{sessions,idempotency}/

## API surface (rewritten)
- api/chat{,/complete,/session/[sessionId]}, api/plan, api/compare,
  api/discover, api/destinations/[slug], api/crm/handover,
  api/system/{health,readiness}

## UI
- Planner rewritten (session recovery, comparison stage, honest CRM states):
  components/planner/**, components/comparison/**, components/handover/**
- New /concierge/compare page; landing trust section; updated privacy,
  how-it-works, header/footer/sitemap

## Tests and docs
- tests/unit/** (6 suites), tests/integration/planning-flow.test.ts,
  tests/e2e/planner.spec.ts + playwright.config.ts,
  tests/evaluations/{scenarios,run-evals}.ts (288 scenarios)
- docs/** — this 21-document set; README rewritten
