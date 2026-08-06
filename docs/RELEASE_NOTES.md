# Release Notes

## 2.6.0 — Domestic India, and the language of Indian travellers (2026-08-06)

### India domestic knowledge pack (the reported gap)
- +8 Indian destinations with honest seasons and 48 reviewed attractions:
  **Goa, Kerala, Rajasthan, Himachal Pradesh, Kashmir, Andaman Islands,
  Ladakh, Sikkim & Darjeeling** — monsoon truthfully scored, altitude and
  permit realities stated, ropey roads called ropey. Now **61 destinations
  / 366 attractions**, all eligibility-gated, all in the autonomous
  climate/photo pipeline.
- New "Incredible India" Discover collection; "Short holidays" collection
  is now explicitly international so the two don't blur.

### The planner now speaks domestic
- New `travelScope` understanding: "domestic tours", "within India",
  "holiday in India" → only Indian recommendations; "abroad/international"
  → only international. Enforced as a hard exclusion in the engine, not a
  soft preference.
- "Within India" quick chip added to the planner.
- Bug fixed en route: "holiday in **Goa**" was previously read as a
  *departure city* (Goa was in the origin-city list). Origin now requires
  "from <city>" phrasing; bare city mentions are destination wishes, and
  bare answers to "which city are you starting from?" still fill origin
  via slot-filling.
- More natural-language coverage: hill station(s), Himalayas, backwaters,
  valley, snowfall now map to interests.

### Verification
- 95/95 unit/integration tests (7 new domestic-scope tests), 288/288
  evals, 38/38 e2e, production build green with 61 static guides.
- Live-verified: "Suggest some domestic tours for a family, 5 nights in
  December, we love beaches" → understood in one turn, recommends Goa /
  Andaman Islands / Kerala.

## 2.5.0 — The "feel" release: photography, maps, sharing, streaming (2026-08-06)

### Destination photography (autonomous, credited)
- New imagery pipeline: `npm run knowledge:images` fetches each destination's
  Wikipedia lead image (Wikimedia-hosted, freely licensable), resizes it
  locally and records artist/licence credits. Runs inside the weekly and
  expand workflows; photos are committed and served same-origin, so the
  strict CSP is untouched.
- Hero images on every destination guide, photo thumbnails across the
  encyclopedia index and Discover. Until the first CI run fetches photos,
  every surface renders deliberate brand-gradient art — nothing ever looks
  broken.

### Maps everywhere they help
- Every real attraction in an itinerary carries a "📍 Map" deep link, and
  each day has a "Day route map" link chaining the day's stops into
  directions — no API keys, no embedded tiles, no CSP exceptions; the
  user's own maps app does what it does best.
- Encyclopedia attraction cards link to maps too.

### Share it with the family (the India-critical feature)
- **Deterministic share links**: `/plan/<destination>?n=7&t=family&a=6,10…`
  regenerates the identical itinerary from the URL — no storage, no expiry,
  no PII in links. "Share on WhatsApp", "Copy link" and "Download PDF"
  (print-styled) on every itinerary, plus a branded shared-plan page with
  the honesty note and a "plan your own" call-to-action.
- Comparisons are shareable the same way
  (`/concierge/compare?d=japan,south-korea&month=10` auto-runs on arrival).
- Print stylesheet: header/footer/buttons vanish, the plan prints clean.

### Conversation feel
- Assistant replies now stream in with a typewriter reveal — same engine,
  far more alive. Screen readers receive the full text immediately and
  prefers-reduced-motion users see it instantly.

### Verification
- 88/88 unit/integration tests, 288/288 evals (70/70 critical), **38/38
  Playwright e2e** (4 new: shared plans, comparison deep links), production
  build green, `npm audit` still 0 vulnerabilities.

## 2.4.0 — Europe & Americas expansion, security certification, sharper comparison (2026-08-06)

### Knowledge: +8 destinations across Europe and the Americas
- Germany, Netherlands, Croatia, Hungary, Norway, Iceland, United States,
  Canada — chosen for Indian outbound demand across first-Europe trips,
  honeymoons (Croatia, Norway, Iceland), families (Germany, USA, Canada) and
  value city breaks (Hungary). Now **53 destinations / 318 attractions**,
  all eligibility-gated, all with encyclopedia pages, sitemap and llms.txt
  entries, all wired into the autonomous climate/citation pipeline.

### Security: audited, hardened, and self-testing
- **Dependencies: 0 known vulnerabilities.** Next.js upgraded to 15.5.22;
  patched sharp (libvips CVEs) and postcss (XSS/path-traversal advisories)
  forced via overrides — without the breaking Next 16 jump.
- Hardening from a full-surface review: HSTS added; JSON-LD script blocks
  escape `<` (script-tag breakout closed); rate-limiter memory bounded and
  client-IP detection made platform-aware; session transcripts capped;
  every API body already zod-validated with length/enum/UUID bounds.
- **Automated vulnerability test + fix module**: the `security` CI workflow
  runs `npm audit` (fails on high+), prototype-pollution/injection fuzzing
  and end-to-end security tests (headers, XSS execution, payload abuse,
  path traversal) on every push and weekly; the weekly run applies
  `npm audit fix`, re-runs the entire quality gate and commits only if
  green. Dependabot handles breaking upgrades as reviewable PRs.
  Full model in `docs/SECURITY.md`.

### Comparison: two more decision-driving rows
- "Peace of mind if something goes wrong" — medical-access comparison,
  shown only when children or seniors are travelling.
- The trade-off row now also names who each destination is *not* for.

### Verification
- 88 unit/integration tests, 288/288 evals, **34/34 e2e** (18 security
  assertions across desktop + 320px mobile), production build green with 53
  static guides, `npm audit`: 0 vulnerabilities.

## 2.3.0 — Autonomous evidence-verified knowledge, multi-engine AI (2026-08-05)

### The knowledge base now grows and refreshes itself — no human required
- **Measured climate replaces estimates**: `npm run knowledge:enrich` pulls
  five years of measured daily data per destination from the Open-Meteo
  archive (free, keyless) and maps it to monthly temperature/rainfall/
  humidity bands through fixed, unit-tested thresholds. Season scores that
  contradict measured weather are clamped — never inflated.
- **Real citations**: Wikipedia and Wikivoyage sources with URLs and access
  dates are attached to every destination automatically.
- **`npm run knowledge:autonomous`** generates new destinations end-to-end:
  evidence pack → AI synthesis grounded only in that evidence → measured
  climate injected deterministically → an adversarial AI audit that tries to
  refute the draft → auto-promotion with confidence computed from evidence
  coverage. Refuted or under-evidenced drafts land in `knowledge/drafts/`
  (invisible to builds) with a WHY_NOT_LIVE.txt.
- **Hands-off CI**: the weekly `knowledge-autonomous` workflow enriches
  everything, regenerates stale entries, runs the full test gate (typecheck,
  tests, 70 critical evals) and commits straight to main — Vercel redeploys.
  The on-demand `knowledge-expand` workflow takes typed destination names
  from the Actions tab to live pages in minutes.
- Requires nothing for enrichment; `ANTHROPIC_API_KEY` and/or
  `OPENAI_API_KEY` repository secrets enable generation.
  See `docs/KNOWLEDGE_AUTOMATION.md` for the full trust model.

### Multi-engine AI (not just OpenAI)
- New Anthropic (Claude) provider for chat extraction and reply polishing,
  with the same strict grounding and deterministic fallback contracts.
- `AI_PROVIDER=auto|anthropic|openai|deterministic` — auto prefers Claude,
  then OpenAI, then the deterministic engine. The planner never depends on
  any external API being up.
- The knowledge pipeline uses whichever engine is keyed; evidence sources
  (Wikipedia, Wikivoyage, Open-Meteo) are engines of record in their own
  right — free, keyless and independent of any AI vendor.

### Knowledge expansion
- +5 destinations chosen for Indian-traveller value: Uzbekistan, Almaty
  (Kazakhstan), Armenia, Jordan, Zanzibar (Tanzania) — 45 destinations and
  270 attractions total, all passing the eligibility gate, all with
  encyclopedia pages, sitemap and llms.txt entries automatically.

### Verification
- 84 unit/integration tests (8 new for the deterministic climate mapping and
  coordinates registry), 288/288 evals, 16/16 Playwright e2e, production
  build green with 45 statically generated guides.

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
