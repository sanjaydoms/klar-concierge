# Knowledge Governance

The knowledge base is Git-managed — no app authentication, no public editor.

```
knowledge/
  countries/registry.json          # Tier 0 + reviewed overlays
  destinations/<slug>.json         # one file per destination
  attractions/<slug>.json          # attraction list per destination
  sources/sources.json             # shared source registry
  schemas/                         # JSON-schema exports (generated)
  coverage/coverage-report.json    # written by knowledge:coverage
```

## Workflow for the Klar team
1. Edit the JSON files in a branch (any editor; schema errors are caught).
2. `npm run knowledge:build` — validates every record (zod), checks
   cross-references and duplicates, compiles the bundle the app imports.
3. `npm run knowledge:coverage` — eligibility report (CI fails <10 eligible).
4. `npm run knowledge:staleness` — review-due and stale-source report.
5. Open a PR; CI runs validate + coverage + tests; merge ships the knowledge.

## Commands
`knowledge:generate` (regenerate from authoring sources — initial pack only),
`knowledge:build`, `knowledge:validate`, `knowledge:coverage`,
`knowledge:staleness`, `knowledge:seed` (generate + build).

## Rules
Never invent facts to fill fields — use skeleton status or omit. Dynamic
information (visas, advisories, closures, prices) never enters static
knowledge. Every reviewed record carries reviewer, review date, next-review
date and sources; the eligibility gate enforces freshness with a 90-day grace.
