# Developer Guidelines — extending Klar Concierge safely

For any developer working on this codebase. The system is built so that the
common growth tasks are data edits, not code changes — follow the recipes
below and the architecture stays clean.

## The golden rules (break these and the product breaks)

1. **Honesty is load-bearing.** Never add prices, availability, bookings or
   visa claims anywhere. Never fake a success message. Never let the engine
   "guess" a fact — if the knowledge base doesn't know, the product says so.
2. **The AI never decides.** Engines (recommendations, comparison,
   itinerary) are deterministic; AI only extracts preferences and rephrases
   replies, strictly grounded. Keep it that way.
3. **Unverified knowledge never reaches customers.** The eligibility gate
   (`src/services/ktie/eligibility.ts`) and the drafts quarantine exist for
   this. Never bypass, weaken, or special-case them.
4. **No PII at rest.** Sessions are anonymous; contact details exist only in
   transit at handover. Do not add customer storage of any kind.
5. **All-green gate before every merge to main:**
   ```
   npm run typecheck && npm test && npm run eval && npm run build
   npx playwright test
   npm audit          # must stay at 0
   ```

## Recipe: add a holiday theme (~15 minutes)

Everything is one object in `src/services/ktie/themes.ts` — the planner
grid chip, the tailored conversation opening, and the `/holidays/<key>`
landing page all generate from it.

1. Append a `HolidayTheme` object: key, label, emoji, tagline, intro,
   `briefPatch` (what picking it implies), `openingQuestion` (must end
   with a question), `interestKeys` (KTIE interest keys that rank its
   destinations), 3+ honest FAQs.
2. Update the count assertion in `tests/unit/themes.test.ts` (12 → 13).
3. Run the gate. Done — chip, conversation, landing page, sitemap and
   llms.txt entries all appear automatically.

If the theme can't be fulfilled by the planner (like cruises), set
`expertLed: true` and write the intro/opening honestly — record the intent,
never fake the inventory.

## Recipe: add a destination

**Preferred (autonomous):** add coordinates to
`scripts/lib/coordinates.ts`, then run the `knowledge-expand` GitHub
workflow with the destination name. Evidence-gathering, AI synthesis,
adversarial audit, tests and commit are automatic; failures land in
`knowledge/drafts/<slug>/WHY_NOT_LIVE.txt` with reasons.

**Hand-authored (for home-ground expertise):** add entries to the newest
`scripts/authoring/destinations-N.ts` / `attractions-N.ts` following the
existing pattern (or start `destinations-8.ts` and wire it into
`generate-knowledge.ts`). Rules of quality:
- Season scores must be honest — monsoon months score low even if that's
  commercially inconvenient; measured climate will clamp lies anyway.
- Every destination needs real `tradeOffs` and `whoShouldAvoid` — empty
  honesty fields fail the eligibility gate.
- ≥5 attractions with genuine child/senior/practical notes.
- Add coordinates in `scripts/lib/coordinates.ts` (mandatory).
- Then `npm run knowledge:seed` and commit both `knowledge/` and
  `src/generated-knowledge/`.

**Editing live knowledge:** the JSON under `knowledge/` is the source of
truth. Edit it directly, run `npm run knowledge:build`, commit both.
Human edits to trade-offs/suitability survive autonomous refreshes; climate
bands and citations are pipeline-owned and will be overwritten with
measured data.

## Recipe: teach the conversation new phrasings

- **Keyword-level** (deterministic engine): extend the regex tables in
  `src/services/ai/fallbackExtractor.ts` (interests, scope, budget, etc.).
- **Slot answers** (bare replies to a question): `src/services/conversation/slotFill.ts`.
- **Always** add an eval scenario in `tests/evaluations/scenarios.ts` for
  every phrasing you teach — that's what keeps regressions impossible.
  When a real customer phrase confuses the bot, adding it here IS the fix.

## Recipe: add a comparison dimension

In `src/services/comparison/engine.ts`, use the `dimension({...})` helper.
Requirements: values must be self-explanatory sentences (never bare
scores), `reason` must name BOTH destinations, and the dimension must be
brief-conditional if it isn't universally relevant (see the seniors/
children/romance rows). Add a test in `tests/unit/comparison-quality.test.ts`.

## What is machine-owned (don't hand-edit)

| Path | Owner |
| --- | --- |
| `src/generated-knowledge/knowledge.json` | `npm run knowledge:build` |
| `src/generated-knowledge/images.json` + `public/destinations/*.jpg` | `npm run knowledge:images` (CI) |
| Climate bands + citation sources inside `knowledge/destinations/*.json` | `npm run knowledge:enrich` (CI) |
| `knowledge/countries/registry.json` | `npm run knowledge:generate` |

## Code conventions

- TypeScript strict; `npm run typecheck` is the linter — keep it at zero.
- Server components by default; `"use client"` only where interaction
  demands it. Never import the knowledge repository into client
  components (it drags the full dataset into the bundle) — pass slim
  props from server pages instead (see how themes reach the Planner).
- Every API route: zod-validated body with explicit bounds + rate limit.
- Comments explain constraints, not narration. Match the existing voice.
- The official Klar logo is used as-is from `public/brand/` — never
  recreated, recolored or restyled.

## Release checklist

1. Full gate green (see golden rule 5).
2. Bump `package.json` version; add a `docs/RELEASE_NOTES.md` section
   (what + why, verification numbers).
3. Update counts in README / DESTINATION_COVERAGE / KNOWN_LIMITATIONS if
   knowledge changed.
4. Commit with a descriptive message; push to main; Vercel deploys.

## Where to read more

- `docs/ARCHITECTURE.md` — system map
- `docs/KNOWLEDGE_AUTOMATION.md` — the autonomous learning loop and its
  trust model
- `docs/SECURITY.md` — security model + automated vulnerability testing
- `docs/EMBEDDING.md` — klartravels.com integration
- `docs/CRM_INTEGRATION.md` — activating handover
- `docs/RELEASE_NOTES.md` — the full history of what changed and why
