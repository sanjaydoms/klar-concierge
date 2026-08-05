# Release Notes

## 2.2.0 — Live-QC fixes, real comparatives, encyclopedia & portal embedding (2026-08-05)

### Conversation: the reported planner bugs, fixed at the root
- Bare answers now land in the right slot: answering "9" to "How many
  nights?" fills nights (previously the engine only understood "9 nights"
  and re-asked in a loop). Works for nights, month, children's ages, origin
  city, pace and comfort level; the session tracks which question is open.
- Emoji/symbol-only input ("❤️") is now honestly rejected — "Sorry, I
  couldn't make sense of that" plus a re-ask — never "Got it."
- Messages that teach the engine nothing get "I didn't quite catch that"
  instead of a fake warm acknowledgement.
- Out-of-range answers are refused with honest limits (nights 1–45,
  months 1–12).

### Comparison: real comparatives, not score dumps
- Every dimension value is now a self-explanatory sentence ("~12h — a
  serious long-haul commitment", "Sits in the sweet spot (ideal 7,
  range 5–10)") instead of a bare "82/100".
- Every decided dimension carries a contrastive verdict naming both
  destinations, and it is now actually rendered under each row (it was
  previously computed but never shown).
- Dimensions adapt to the trip: seniors row only when seniors travel,
  children row bound to the actual ages, romance row for couples/honeymoons,
  budget row at the stated comfort level, accessibility only when asked.
- New rows: trip character (what each place is actually about), your-nights
  fit, daily effort on the ground, and a closing honest trade-off row.

### Discover & navigation: nothing is dead any more
- Every destination card on Discover and the landing page is now a link into
  the new encyclopedia; "Switzerland / Switzerland" duplication fixed
  (region shown when country equals name).
- Mobile finally has navigation: a scrollable tab row under the header
  (previously Discover/Compare/How-It-Works were unreachable on phones).
- Header made fully opaque so scrolled content no longer ghosts through.

### Destination Encyclopedia (new)
- `/destinations` — all destinations grouped by region.
- `/destinations/[slug]` — statically generated guide per destination:
  trip-at-a-glance, all 12 months of season intelligence, who-it-suits
  scores, honest trade-offs and who-may-not-enjoy-it, food and on-the-ground
  practicality, every reviewed attraction with ideal-for/skip-if, common
  mistakes, packing, provenance (status, reviewer, dates, confidence) and a
  clear "we never guess visas/prices" note.
- TouristDestination JSON-LD on every guide; per-page metadata and
  canonical URLs.

### Portal embedding (klartravels.com chat box + tab)
- New `/embed` route: the bare planner with no site chrome, built for the
  portal's floating chat box; `docs/EMBEDDING.md` has copy-paste snippets.
- CSP `frame-ancestors` now allows `klartravels.com` and subdomains only
  (previously `'none'`, which would have blocked the portal iframe
  entirely); all other sites remain blocked from framing.

### Search & AI discoverability
- `sitemap.xml` now includes every destination guide with review dates;
  `robots.txt` added (blocks `/api/` and the iframe-only `/embed`).
- `llms.txt` (llmstxt.org) generated from the live knowledge base so AI
  assistants can index the encyclopedia accurately — including the honesty
  contract.

### Automated knowledge learning (governed)
- `npm run knowledge:research -- "Sri Lanka"` — AI drafts complete
  destination intelligence into `knowledge/drafts/` (schema-validated,
  confidence-capped below the eligibility threshold, invisible to builds).
- `npm run knowledge:research -- --refresh-stale [--draft]` — finds
  destinations past their review date and drafts refreshes.
- `npm run knowledge:promote -- <slug> --reviewed-by "Name"` — the human
  attestation step; refuses to promote drafts without sources.
- Weekly GitHub Action opens a drafts-only PR for anything stale
  (`.github/workflows/knowledge-refresh.yml`, needs `OPENAI_API_KEY`
  secret). Four independent layers keep unreviewed drafts away from
  customers — see `docs/KNOWLEDGE_AUTOMATION.md`.

### Input hardening
- Nights field in the brief review is digits-only with clamping (mobile
  keyboards could previously type emoji into it); numeric keyboards on all
  count fields.

### Verification
- 76 unit/integration tests (14 new), 288/288 evals (70/70 critical),
  16/16 Playwright e2e (4 new: encyclopedia, clickable discover, embed),
  production build with all 40 destination guides statically generated.

## 2.1.0 — QC hardening, smarter conversation, knowledge expansion (2026-08-05)

### Mobile QC (instrumented audit at 320/375/390/430px + visual review)
- Fixed footer logo distortion (flex-stretch was deforming the official mark)
- Comparison results now render as stacked per-dimension cards on phones —
  previously the winner column could sit off-screen behind an unhinted scroll
- Stage indicator no longer wraps with dangling arrows on small screens
- Destination country stacks under the name on narrow cards
- Raised default chat/plan rate limits (30/min) — shared office/CGNAT IPs
  could previously trip 429s during normal comparison use

### Conversation intelligence
- Rich acknowledgements: the assistant now reflects back everything it
  understood ("So far I have: a family holiday, 7 nights, in December…")
- Direct destination Q&A from KTIE ("Tell me about Bali?") with season,
  child/senior fit and an honest trade-off — always ending in a next step
- Best-time answers ("When should I visit the Maldives?") with strongest and
  riskiest months
- Grounded seasonal shortlists for undecided travellers with a month in mind
- Optional OpenAI reply polishing (strictly grounded in engine facts; always
  degrades to the deterministic reply)

### Knowledge expansion
- +10 Tier-1 destinations: Hong Kong, Nepal, Bhutan, Oman, Qatar, Cambodia,
  Kenya, Morocco, Portugal, United Kingdom — now 40 destinations and 240
  structured attractions, all passing the eligibility gate
- 4 new conversation unit tests (62 total); e2e stabilised at 12/12 across
  repeated runs

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
