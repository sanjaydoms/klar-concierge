# Attraction Model

Attractions are structured records, not strings — see KTIE_SCHEMA.md.

## How engines use them
- **Itinerary composer:** filters by traveller fit (minimum age, physical
  intensity vs toddlers/seniors/accessibility, unsuitableFor markers), ranks
  by interest alignment, schedules morning/afternoon/evening blocks without
  repetition, honours best-time-of-day, and attaches child/senior/
  accessibility/practical notes to the day.
- **Weather resilience:** high weather-sensitivity main blocks automatically
  get an indoor/low-sensitivity alternative from the same destination.
- **Eligibility:** ≥5 suitable attractions are required before a destination
  can be recommended at all.

## Editing
Add or edit records in `knowledge/attractions/<destination-slug>.json`, then
run `npm run knowledge:build`. Validation enforces schema shape, unique ids
and a known destination slug. Operational details (hours, closures) belong in
`practicalNotes` with the standing verification disclaimer — never as claimed
live facts.
