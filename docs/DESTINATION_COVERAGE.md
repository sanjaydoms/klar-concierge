# Destination Coverage

40 Tier-1 destinations, each with full 12-month intelligence and ≥5 structured
attractions (240 total):

Singapore · Dubai · Abu Dhabi · Bali · Bangkok · Phuket · Krabi ·
Kuala Lumpur · Langkawi · Vietnam · Japan · South Korea · Sri Lanka ·
Maldives · Mauritius · Seychelles · Turkey · Georgia · Azerbaijan · Egypt ·
Switzerland · France · Italy · Greece · Spain · Austria · Czech Republic ·
Australia · New Zealand · South Africa · Hong Kong · Nepal · Bhutan · Oman ·
Qatar · Cambodia · Kenya · Morocco · Portugal · United Kingdom

## Recommendation eligibility gate
A destination is customer-recommendable only when **all** hold:
verified status · 12/12 months · ≥5 attractions · trade-offs present ·
who-should-avoid present · confidence ≥60 · sources present · valid next-review
date not past the 90-day grace period. `npm run knowledge:coverage` prints the
gate result per destination and fails CI below 10 eligible.

## Status honesty
Seed records ship as `verified` in the structural/editorial sense: complete
evidence, stable-fact review by the knowledge pack author, and passing
validation. Klar's operations team should still re-confirm commercial fit
before major campaigns — tracked in KNOWN_LIMITATIONS.md. Tier-2 skeletons can
be added under `knowledge/destinations/` with `status: "skeleton"`; the gate
keeps them out of recommendations automatically.
