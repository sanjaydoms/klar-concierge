# Country Coverage

- **Tier 0 — registry:** 196 ISO 3166-1 countries generated from the
  `world-countries` dataset (name, ISO codes, region, subregion, currencies,
  languages). Status `skeleton`; unknown fields are absent, not invented.
  Skeleton countries are **never recommendation-eligible**.
- **Reviewed overlays:** countries hosting Tier-1 destinations (currently 35)
  carry aggregated traveller-fit, practicality and food blocks derived from
  their reviewed destination records, status `reviewed`.
- Regeneration: `npm run knowledge:generate` (authoring sources) →
  `npm run knowledge:build` (validation + compile).
- Coverage numbers are reported by `npm run knowledge:coverage` and written to
  `knowledge/coverage/coverage-report.json`.

Country coverage is intentionally not the same claim as destination depth —
see DESTINATION_COVERAGE.md and KNOWN_LIMITATIONS.md.
