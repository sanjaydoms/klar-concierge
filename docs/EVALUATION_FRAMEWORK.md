# Evaluation Framework

288 deterministic scenarios (tests/evaluations) run against the engine's
AI-unavailable path, so results are reproducible and hallucination-free by
construction. `npm run eval` runs all; `npm run eval:critical` runs the
release-blocking subset (exit 1 on any failure).

## Coverage
- 11 traveller groups × all 12 months (eligibility, uniqueness, in-season,
  explanations, toddler-fit checks)
- Traveller groups × durations 3/5/7/14 nights
- 13 interests × 2 months (taste-pick alignment)
- 13 constraints × 4 months (wheelchair, limited walking, veg, halal,
  short-flight, avoid-humidity, avoid-crowds, exclusions, toddler+senior,
  mixed ages, unknown month/budget)
- 12 extraction scenarios (fields, exclusions, climate, comparison,
  undecided, out-of-scope incl. price/booking/visa-guarantee)
- 12 itinerary scenarios across destinations (feasibility, no repetition,
  no booking claims, day-load caps)
- 8 comparison pairs (consistency, determinism, explained winners)
- 14 adversarial cases (impossible duration, full exclusion, contradictory
  preferences, prompt injection, unknown places, stale-knowledge gate,
  CRM-disabled truthfulness, misconfigured-CRM throw, idempotency dedupe,
  analytics redaction, session TTL, AI unavailable)

## Track record
The suite caught two real defects before release: long-haul destinations
leaking past a short-flight preference (now a hard exclusion) and
"guarantee my visa" phrasing missing the out-of-scope net (now covered).
