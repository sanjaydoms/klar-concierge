# Klar Concierge — Developer Installation & Operations Guide

**Version:** 2.5.0 · **For:** the Klar Travels dev team · **Deployment target:** Vercel + GitHub

Klar Concierge is a conversational holiday **decision engine** for klartravels.com:
a chat planner, destination encyclopedia (53 destinations / 318 attractions),
deterministic comparison tool and itinerary builder — with a self-maintaining,
evidence-verified knowledge base and a self-testing security pipeline.

What it deliberately does NOT contain: authentication, a database, customer PII
storage, prices, availability, bookings, or visa claims. Keep it that way.

---

## Part 1 — First deployment (one time, ~30 minutes)

### Step 1. Push the code

You received `klar-concierge-v2.5.bundle` (a complete git repository) and a zip
of the working tree. Use the bundle — it preserves full history.

```bash
git clone klar-concierge-v2.5.bundle klar-concierge
cd klar-concierge
git remote set-url origin <YOUR-TEAM-REPO-URL>
git push -u origin main --force-with-lease
```

> If the team repo already has older versions (v2.1–v2.4), this push simply
> fast-forwards it. Never deploy two versions — v2.5 contains everything.

### Step 2. GitHub repository settings (needs admin)

1. **Settings → Actions → General → Workflow permissions** → select
   **"Read and write permissions"** → Save.
   *Why: the knowledge bot and security auto-fix bot commit their results to
   `main`. Without this they can test but not fix.*
2. **Settings → Secrets and variables → Actions → New repository secret**:
   - `ANTHROPIC_API_KEY` — preferred AI engine (Claude)
   - `OPENAI_API_KEY` — optional fallback engine
   *Either key alone is enough for autonomous knowledge generation; climate
   enrichment and photo fetching need no key at all.*
3. **Branch protection**: if `main` is protected against direct pushes,
   exempt GitHub Actions — otherwise the bots' commits are rejected.

### Step 3. Vercel project settings

Connect the repo to Vercel (framework preset: Next.js — defaults are fine;
the build command `npm run build` already compiles the knowledge base first).

Environment variables to set in Vercel:

| Variable | Value | Why |
| --- | --- | --- |
| `NEXT_PUBLIC_APP_URL` | your production URL | correct sitemap/llms.txt/share links |
| `ANTHROPIC_API_KEY` | your key | Claude-powered chat extraction + reply polish |
| `AI_PROVIDER` | `auto` (default) | prefers Claude → OpenAI → deterministic |

Everything else has safe defaults (see `docs/ENVIRONMENT.md`). Do NOT set
`CRM_ENABLED=true` yet — see Part 4.

### Step 4. First workflow runs (Actions tab)

Run these once, in order, via **Run workflow**:

1. **`security`** — proves the vulnerability gate is green on your infra.
2. **`knowledge-autonomous`** — the important one. On this first run it:
   - pulls 5 years of measured climate for all 53 destinations (Open-Meteo),
   - attaches Wikipedia/Wikivoyage citations with access dates,
   - fetches destination photography from Wikimedia with licence credits,
   - runs the full test gate, commits to `main` → Vercel redeploys.
   After this run every month of every destination is backed by measured
   data, and every guide has a real photo.

### Step 5. Verify the deployment (10-point smoke test)

On the production URL:

1. `/` — landing renders, destination lists are clickable.
2. `/concierge` — chat: type "Family of 4 from Mumbai, 7 nights in December,
   kids 6 and 10, we love food" → expect an acknowledgement summarising all of it.
3. Reply "9" when asked a number question → it must fill the slot, not re-ask.
4. Send "❤️" → expect an honest "couldn't make sense of that", never "Got it".
5. Complete the flow → brief review → directions → itinerary; check
   "📍 Map" links and "Share on WhatsApp / Copy link / Download PDF".
6. `/destinations` — photo cards (gradients before the first workflow run);
   open one → hero image, 12-month table, attractions.
7. `/concierge/compare?d=japan,south-korea&month=10` — auto-runs; each row
   has a verdict sentence naming both destinations.
8. `/plan/japan?n=7&t=family&a=6,10` — shared plan regenerates; print
   preview (Ctrl/Cmd-P) hides the chrome.
9. `/sitemap.xml`, `/robots.txt`, `/llms.txt` — all present, listing all
   destinations.
10. `/api/system/health` — `{"ok":true,...}`.

---

## Part 2 — What runs automatically (know it, don't babysit it)

| Schedule | Workflow | What it does |
| --- | --- | --- |
| Every push | `security` | npm audit gate (fails on high+), injection/pollution fuzzing, e2e attack tests |
| Mon 03:00 UTC | `knowledge-autonomous` | Re-measures climate, re-dates citations, fetches missing photos, regenerates stale entries, full test gate, commits |
| Mon 03:30 UTC | `security` auto-fix | Applies `npm audit fix`, re-runs the entire gate, commits **only if green** |
| Weekly | Dependabot | PRs for dependency upgrades incl. breaking ones — the one thing needing a human click |

Trust model (full detail in `docs/KNOWLEDGE_AUTOMATION.md` and `docs/SECURITY.md`):
measured data overrides AI opinion; an adversarial audit pass must approve every
AI-generated destination; schema validation gates every build; the 288-scenario
eval suite must stay green before any autonomous commit ships.

---

## Part 3 — Growing the encyclopedia

**Add a destination** (2 minutes of typing, live in ~10):

1. Add coordinates in `scripts/lib/coordinates.ts`:
   ```ts
   philippines: { lat: 14.6, lon: 120.98, station: "Manila" },
   ```
   Commit and push. (Measured climate is mandatory evidence — unknown
   coordinates fail loudly instead of guessing weather.)
2. Actions → **`knowledge-expand`** → Run workflow → enter `Philippines`
   (comma-separate for several).
3. Done. It gathers evidence, drafts, audits, tests and commits. A failed
   audit lands in `knowledge/drafts/<slug>/WHY_NOT_LIVE.txt` instead of going
   live — read it, fix, rerun.

Every new destination automatically gets: encyclopedia page, photo, sitemap +
llms.txt entries, Discover placement, full planner/comparison/itinerary support.

**Hand-polish (optional, recommended over time):** edit any
`knowledge/destinations/*.json` — trade-offs, who-should-avoid and suitability
scores are where human expertise beats machines. Run
`npm run knowledge:build`, commit both the JSON and
`src/generated-knowledge/knowledge.json`.

**Feed the eval suite:** when consultants hear real customer phrasings the bot
mishandles, add them to `tests/evaluations/scenarios.ts`. This is how the
conversation engine compounds.

---

## Part 4 — Activating CRM handover (the open loop)

Today the handover is truthfully disabled — the planner works fully but leads
aren't captured. When your CRM/RMS can receive a webhook:

1. Build an endpoint that accepts the JSON POST described in
   `docs/CRM_INTEGRATION.md` (brief + itinerary + customer contact; PII is
   in transit only, never stored by the concierge).
2. Set in Vercel: `CRM_ENABLED=true`, `CRM_PROVIDER=webhook`,
   `CRM_WEBHOOK_URL=...`, `CRM_WEBHOOK_TOKEN=...` → redeploy.
3. The "Hand Over to a Klar Expert" button activates itself; on success the
   anonymous session is deleted.

Never fake this: if the webhook fails, the UI says so honestly by design.

---

## Part 5 — Embedding in klartravels.com

Full snippets in `docs/EMBEDDING.md`. Summary:

- **Chat box:** iframe `https://<host>/embed` (bare planner, no chrome).
- **Portal tabs:** iframe or link `/concierge`, `/concierge/discover`,
  `/destinations`, `/concierge/compare`.
- CSP allows framing **only** from `klartravels.com` and subdomains — to add
  another origin, edit `FRAME_ANCESTORS` in `next.config.mjs`.
- **Strongly recommended:** serve on a subdomain like
  `concierge.klartravels.com` (Vercel → Domains). The SEO/AI-discoverability
  investment (guides, JSON-LD, llms.txt) only compounds on your real domain,
  not vercel.app.

---

## Part 6 — Local development

```bash
npm install
cp .env.example .env.local        # defaults are fine
npm run dev                       # http://localhost:3002
```

The full gate (run before any PR):

```bash
npm run typecheck && npm test && npm run eval && npm run build
PLAYWRIGHT_CHROMIUM_PATH=<path-if-needed> npx playwright test
```

Command reference:

| Command | Purpose |
| --- | --- |
| `npm run dev` / `build` / `start` | Next.js app (port 3002) |
| `npm test` | 88 unit/integration tests |
| `npm run eval` / `eval:critical` | 288 conversation scenarios / 70 release-blocking |
| `npx playwright test` | 38 e2e tests incl. security suite |
| `npm run knowledge:build` | Validate + compile knowledge → app |
| `npm run knowledge:coverage` / `staleness` | Reports |
| `npm run knowledge:enrich` | Measured climate + citations (internet) |
| `npm run knowledge:images` | Wikimedia photos + credits (internet) |
| `npm run knowledge:autonomous -- "Name"` | Full AI generation (internet + AI key) |
| `npm run knowledge:research` / `promote` | Optional human-review path |
| `npm audit` | Should always report 0 vulnerabilities |

Architecture map:

```
src/services/        conversation, recommendations, comparison, itinerary,
                     ai (anthropic/openai/deterministic), ktie, crm, analytics
src/repositories/    knowledge (compiled JSON), sessions (in-memory TTL)
src/app/             pages + API routes (all zod-validated, rate-limited)
knowledge/           Git-managed source of truth (destinations/attractions/…)
scripts/             generation, enrichment, images, autonomous pipeline
tests/               unit, integration, e2e (+security), evaluations
docs/                20+ docs — ARCHITECTURE, SECURITY, KNOWLEDGE_AUTOMATION,
                     EMBEDDING, CRM_INTEGRATION, ENVIRONMENT, RELEASE_NOTES
```

---

## Part 7 — Troubleshooting

| Symptom | Cause → fix |
| --- | --- |
| Workflow fails at commit step | Workflow permissions not "read and write", or branch protection blocks Actions (Part 1, Step 2) |
| `knowledge-expand` says "No coordinates for X" | Add the entry to `scripts/lib/coordinates.ts` first |
| New destination went to drafts, not live | Read `knowledge/drafts/<slug>/WHY_NOT_LIVE.txt` — audit refuted it or schema/attraction count failed |
| Photos missing after first run | Wikipedia article had no lead image, or step was rate-limited — rerun `knowledge-autonomous`; gradient art shows meanwhile by design |
| Chat feels scripted | No AI key set — add `ANTHROPIC_API_KEY` in Vercel; the deterministic engine is the fallback, not the ceiling |
| 429 responses during testing | Per-IP rate limits (30/min chat & plan) — expected behaviour |
| Handover button missing | `CRM_ENABLED` is false — that's honest, not broken (Part 4) |
| Scheduled workflows stopped | GitHub disables schedules after 60 days of repo inactivity — re-enable in Actions tab (weekly bot commits normally prevent this) |
| Vercel cold start loses a chat session | Known trade-off of in-memory sessions; client recovers gracefully. For scale, implement `SessionStore` against Redis (interface in `src/repositories/sessions`) |

## Non-negotiables (the product's honesty contract)

1. Never add prices, availability, bookings or visa claims to the engine.
2. Never let unverified knowledge reach customers — the eligibility gate and
   drafts quarantine exist for this; don't bypass them.
3. Never fake CRM success or any "we've sent your request" message.
4. The official Klar logo is used as-is — never recreated or restyled.
5. All-green gate before every deploy: `typecheck`, `test`, `eval`, `build`,
   `playwright`, `audit`.
