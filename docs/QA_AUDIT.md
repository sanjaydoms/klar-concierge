# QA Audit — v2.0.0

## Brand QC
- [x] Exact official logo at public/brand/klar-logo.png (+ SVG wrapper of the same artwork); never redrawn
- [x] Navy/red/white system; green only for success states
- [x] No glassmorphism, AI-glow, dashboard cards or capability-status sections
- [x] One primary CTA per stage

## UX QC
- [x] Natural conversation; one question per turn; known facts never re-asked (integration-tested)
- [x] Editable human-readable brief; no raw JSON anywhere
- [x] Honest limited-options and empty states with guidance
- [x] "Start over" and refresh recovery work (tested)
- [x] No dead-end: every stage has a back path

## Content QC
- [x] No booking/price/availability claims (asserted in unit, eval and e2e suites)
- [x] No visa guarantees; visa always routed to expert verification
- [x] Trade-off + who-may-not-enjoy on every recommendation

## Knowledge QC
- [x] 30/30 destinations pass the eligibility gate (coverage report)
- [x] 12-month coverage, sources and review dates on every record
- [x] 180 attractions with structured suitability data

## Technical QC
- [x] typecheck 0 errors · 58/58 tests · 288/288 evals · build passes · 12/12 e2e
- [x] No auth code, no commerce routes, no internal dashboards (e2e asserts 404s)
- [x] No PII persistence; redaction unit-tested
- [x] CRM placeholder never fakes success (unit + eval + e2e)

## Mobile QC
- [x] 320px e2e run passes with no horizontal scroll
- [ ] Real-device iOS Safari / Android Chrome pass — operational step before launch

Signed off: engineering QA complete for v2.0.0; open items tracked in
KNOWN_LIMITATIONS.md.
