# Test Plan

## Automated (all green at release)
- `npm run typecheck` — strict TypeScript, zero errors.
- `npm run test` — 62 Vitest tests: extraction (v2 fields, intents),
  recommendation scoring/exclusions/three-direction honesty, comparison
  determinism, itinerary feasibility and safety, knowledge invariants and
  eligibility gate, privacy/CRM truthfulness, and an integration suite for
  the complete anonymous planning flow (recovery, start-over, TTL,
  no-repeat questioning, comparison intent).
- `npm run knowledge:validate` / `coverage` / `staleness` — knowledge CI.
- `npm run eval` — 288/288 scenarios (see EVALUATION_FRAMEWORK.md).
- `npm run test:e2e` — 12 Playwright checks × desktop + 320px mobile:
  landing (logo, no horizontal scroll), discover collections, absence of
  internal/commerce routes (404), the full family planner journey with
  CRM-disabled honesty assertions, the comparison tool, and keyboard focus.

## Manual QA
See QA_AUDIT.md for the signed checklist and ACCESSIBILITY_AUDIT.md for the
accessibility pass. Real-device iOS Safari / Android Chrome passes remain an
operational step before public launch (KNOWN_LIMITATIONS.md).
