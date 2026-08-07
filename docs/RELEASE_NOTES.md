# Release Notes

## 3.1.0 — Every entry point wired, mobile chat fixed (2026-08-06)

Fixes the three defects shown in the live screen recording.

### "Plan a South Africa Holiday" now plans a South Africa holiday
- Destination pages' CTAs carry the destination into the planner
  (`/concierge?destination=south-africa`). The conversation opens already
  about that place — "South Africa — wonderful choice. Safari mornings,
  wineland afternoons, ocean sunsets. Which month are you thinking of
  travelling?" — with the destination seeded into the brief so it leads
  the matches.
- A destination or theme deep link **always acts**, even when an older
  planning session exists — the unrelated previous conversation can never
  hijack a fresh intent again. (Theme links now behave the same way.)
- "Compare With Another" on a destination page pre-selects that
  destination in the comparison tool.

### Back, everywhere
- The planner conversation now has a visible **← Back** control (browser
  history when available, home otherwise). Every other stage already had
  one; now no screen strands the traveller.

### Mobile-friendly chat
- Once the conversation starts, the page headline hides on phones — the
  chat gets the screen (taller message log too).
- The **Show My Matches / Change Something** panel moved directly under
  the conversation, above the input — visible without scrolling past it.
- Extra bottom clearance on phones so portal chat widgets floating in the
  corner no longer sit on top of the Send button.

### Verification
- 124/124 unit tests (3 new destination-entry tests), 288/288 evals,
  **50/50 e2e** (new: destination CTA journey, deep link vs stale
  session, theme link with existing session, back control), build green,
  0 audit findings. E2e server now runs with test-scoped rate limits so
  parallel suites can't rate-limit each other.


## 3.0.0 — One continuous conversation (2026-08-06)

Implements the executive product review in full: same architecture, same
engines, a journey that finally feels like planning with a consultant.

### Faster planning (review §4) — 4–6 answers to matches
- Only the essentials can stand between a traveller and their matches:
  travel period, duration, who's travelling (+ ages for families) and
  origin city. Pace, tastes and comfort level **never block** — they
  sharpen matches and stay editable behind "Change Something".
- A rich first message ("family of four from Hyderabad, 7 nights in
  December, kids 6 and 10…") reaches the understanding moment in one turn.

### Inline understanding (review §5) — the brief page is no longer a gate
- When the essentials are in, the assistant says **"Here's what I've
  understood: …"** with the complete picture, and offers two buttons:
  **Show My Matches** (straight to recommendations) and **Change
  Something** (the existing editable review, now headed "Here's what
  I've understood").

### Human matches (review §6) + intent confirmation (§7)
- Cards now read like a consultant wrote them: **Why it suits you**,
  **three signature experiences** (named, from the knowledge base, matched
  to who's travelling), **one honest trade-off**, best-for and season.
  Numeric score breakdowns are gone from the UI.
- Buttons per card: **Choose {destination}** → "Would you like me to build
  your suggested holiday around {destination}?" → **Create My Plan** /
  **View Other Matches**. **Explore ↗** opens the full destination guide.

### Lightweight itinerary refinement (review §8)
- Three controls, no editors: **Make it more relaxed**, **Add more
  experiences**, **Change a day** (regenerates that day with next-best
  attractions, deterministically; earlier days stay identical).

### A real ending (review §9) — no more dead end without CRM
- **Finish My Plan** → "Your holiday plan is ready": a plan reference
  (e.g. `KLAR-3F8A2C`), trip summary, view/download link and "Start
  another holiday". No CRM errors, no disabled forms.
- New `LeadCaptureAdapter` interface (review §3): the placeholder issues
  a deterministic reference from the anonymous session id and **stores
  nothing** — when Klar's CRM arrives, only the adapter changes.
- With CRM enabled, the button reads **Continue with Klar** and the
  existing handover flow runs unchanged.

### Trust details (review §2–3)
- City removed from the welcome step — name, mobile, email only.
- Contact details now live in **sessionStorage** (cleared when the tab
  closes), never long-term localStorage; old localStorage copies are
  cleaned up on sight. No PII at rest, as always.

### Progress language & microcopy (review)
- Stages are now **Your Trip → Your Matches → Your Plan → Next Step**.
- "Show My Directions" → "Show My Matches"; "Hand over" → "Continue with
  Klar"; interest chips display human labels ("Romantic", "Theme parks").

### SEO (checklist §10)
- Every theme landing page now cross-links all other holiday types.

### Verification
- 121/121 unit tests (5 new: lead adapter, refinement determinism,
  essentials journey), 288/288 evals, 44/44 e2e (family flow rewritten to
  walk the full new journey: one message → understanding → Change
  Something → matches → confirmation → plan → refine → completion),
  build green, 0 audit findings.

## 2.9.0 — Go-live polish: Romantic rename, honest theme flow, answer chips (2026-08-06)

Fixes the three defects reported from live testing, plus a full go-live sweep.

### "Romantic", not "Romance" — and a full tone audit
- The couples theme is now **Romantic** everywhere: planner grid, welcome
  step, chat bubble ("💐 Romantic holiday"), `/holidays/romantic` landing
  page ("Romantic Holidays", "Plan My Romantic Holiday"). Old
  `/holidays/romance` links redirect permanently; old `?theme=romance`
  deep links and stored keys still resolve via an alias.
- Every user-facing sentence was audited for tone; wording that could read
  as anything other than professional family travel was rewritten (e.g.
  "the destination does the wooing" is gone). The trip-brief interest chip
  now displays "Romantic" too.

### The theme flow finally respects the theme
- Picking **Romantic** now tells the planner a couple is travelling
  (2 adults) — it will **never again ask "who's travelling?"** after you
  chose a couples holiday. Each of the 12 themes was audited the same way.
- Every theme's opening question now remembers which field it primarily
  asks for, so bare answers land correctly on the first reply: "6 and 9"
  after the family opening fills the children's ages; "April" after the
  romantic opening fills the month.
- Slot understanding hardened: "Relaxed pace" (the word *relaxed* itself)
  now fills pace; "A couple's getaway", "With my parents", "Travelling
  solo" and friends/honeymoon phrasings answer "who's travelling?"
  directly; "From Hyderabad" no longer risks being stored verbatim as a
  city called "From Hyderabad".

### Answer chips that match the question (replaces the random chip row)
- The static chip row is gone. While a question is open, the planner now
  shows **one-tap answers for exactly that question**: months when asked
  "when", night counts when asked "how long", party types when asked
  "who's travelling", ages, pace, interests, origin cities and comfort
  levels each for their own question. Tapping a chip sends the answer
  immediately.
- Every chip's send-text is covered by a unit test proving the engine
  parses it into the intended brief field — a chip can never produce
  "I didn't quite catch that".
- Starter idea chips still appear before the conversation begins.

### Go-live verification (the complete sweep)
- All 12 themes tested end-to-end as a user against the production build:
  theme → conversation → brief → 3 recommendations → itinerary. All pass;
  the romantic flow was additionally asserted never to re-ask who's
  travelling and never to repeat a question.
- All public routes status-checked (landing, planner, discover, compare +
  deep links, holidays index + all theme pages, destinations, shared plans,
  embed, legal, sitemap/robots/llms.txt; internal routes still 404).
- Natural-language spot checks: "mid July" → July, "early December" →
  December, "a short 4-day break" → 3 nights, bare "9" only fills nights
  when nights was asked, emoji-only input still honestly rejected.
- 116/116 unit tests (15 new), 288/288 evals, **44/44 e2e** (the welcome
  journey now also asserts answer chips appear for the open question and
  never show unrelated options), build green, `npm audit` 0 vulnerabilities.

## 2.8.0 — Trust-based lead capture, without changing the flow (2026-08-06)

One inserted step, everything after it untouched, per the blueprint.

### The welcome step
- Fresh visitors to the planner now see "Let's Plan Your Perfect Holiday":
  first a theme choice (planning, not a form), then a polite contact card —
  full name, mobile, email, optional city, and the exact consent line
  "I agree to be contacted by Klar regarding this holiday enquiry" — with
  the why-text above and three subtle trust statements below. CTA: **Start
  Planning**, which flows seamlessly into the existing theme-aware
  conversation. No popups, no modals.
- Shown once per visit; returning visitors and recovered sessions skip it.
  A quiet "Continue without sharing details" link keeps consent genuinely
  voluntary (and keeps the classic type-anything planner reachable).

### Privacy architecture preserved (the important part)
- Contact details are stored **only in the visitor's browser** — the server
  never sees them until the existing CRM enquiry fires. No PII at rest,
  exactly as before.
- At handover, the saved details **pre-fill the enquiry form** (name,
  phone, email, city, consent) — confirmation instead of retyping, which is
  where end-of-flow leads were being lost.
- The enquiry object now carries optional `city` and the selected theme
  (`theme:romance` in decision priorities + conversation summary). The
  submission flow itself is unchanged; with CRM disabled the placeholder
  behaves truthfully as always.

### Verification
- 102/102 unit tests, 288/288 evals, **44/44 e2e** (new: full welcome
  journey theme → contact → conversation; skip path), build green.

## 2.7.0 — The discovery layer: holiday themes, Holiday DNA, /holidays SEO (2026-08-06)

Implements the "Klar Holiday Planner v2 (Minimal Blueprint)" — preserving the
existing application exactly as it is, all additions data-driven.

### Discovery layer (blueprint §1)
- Twelve holiday themes — Romance, Family, Luxury, Adventure, Beach, Nature,
  Wellness, Cruises, Snow, Food, Culture, Wildlife — presented as a picker
  before the conversation. One registry file (`src/services/ktie/themes.ts`)
  drives the planner grid, the conversation seeding and the landing pages:
  adding a theme is adding one object.

### Context-aware conversation (blueprint §2)
- Picking a theme seeds the brief with its implied preferences (Family →
  traveller type; Luxury → comfort band; Snow → wants-snow climate) and
  opens with a tailored question ("How old are the children…?", "Honeymoon
  or anniversary…?") instead of interrogating everyone identically.
- Landing pages deep-link into the planner with the theme pre-applied
  (`/concierge?theme=romance`).
- Cruises handled honestly: recorded as an interest for the Klar cruise
  specialists (no fake cruise inventory), while the planner shapes the
  land-stay around the sailing.

### Recommendations & Holiday DNA (blueprint §3–4)
- Three explained recommendations already existed — unchanged, per the
  blueprint's own rule.
- New **Holiday DNA** card: traveller type, scope, month, nights, pace,
  comfort, style, weather and the recommended directions in one glance —
  the same picture the Klar team receives at handover.

### SEO landing pages (blueprint §5)
- `/holidays` index + statically generated `/holidays/<theme>` pages:
  honest introduction, top destinations ranked from KTIE scores (with
  photos), computed best-months badge, FAQ with FAQPage JSON-LD, and the
  planner CTA. All in the sitemap, llms.txt and site navigation.

### Verification
- 102/102 unit/integration tests (7 new theme tests), 288/288 evals,
  **42/42 e2e** (4 new: theme landing pages, theme-driven conversation),
  production build green — 12 theme pages + 61 destination guides static.

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
