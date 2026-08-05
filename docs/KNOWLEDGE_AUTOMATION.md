# How the engine learns — automated, but never gullible

Klar Concierge's intelligence is a Git-managed knowledge base
(`knowledge/`). The engine "learns" by growing and refreshing that knowledge
— and the loop below automates everything except the one step that must stay
human: deciding a fact is true.

## The learning loop

```
   ┌─────────────────────────────────────────────────────────────┐
   │  1. DRAFT (automated)                                       │
   │     npm run knowledge:research -- "Sri Lanka"               │
   │     → AI researches and writes knowledge/drafts/sri-lanka/  │
   │       (schema-validated, confidence-capped, build-ignored)  │
   └──────────────────────────┬──────────────────────────────────┘
                              ▼
   ┌─────────────────────────────────────────────────────────────┐
   │  2. REVIEW (human — the only manual step)                   │
   │     Expert works through drafts/<slug>/REVIEW.md:           │
   │     verifies seasons, attractions, scores; attaches sources │
   └──────────────────────────┬──────────────────────────────────┘
                              ▼
   ┌─────────────────────────────────────────────────────────────┐
   │  3. PROMOTE (automated attestation)                         │
   │     npm run knowledge:promote -- sri-lanka                  │
   │         --reviewed-by "Expert Name" --confidence 80         │
   │     → moves to knowledge/, sets verified, schedules the     │
   │       next review in 90 days                                │
   └──────────────────────────┬──────────────────────────────────┘
                              ▼
   ┌─────────────────────────────────────────────────────────────┐
   │  4. PUBLISH (automated)                                     │
   │     npm run knowledge:build → commit → deploy               │
   │     The destination is now recommendable, appears in        │
   │     Discover, gets an encyclopedia page, enters the         │
   │     sitemap and llms.txt automatically.                     │
   └─────────────────────────────────────────────────────────────┘
```

## Staying fresh without anyone remembering

- Every verified destination carries a `nextReviewAt` date; past it, the
  eligibility gate gives 90 days' grace and then **automatically stops
  recommending it**. Stale knowledge retires itself.
- The GitHub Action `.github/workflows/knowledge-refresh.yml` runs weekly:
  it drafts refreshes for anything past review date and opens a PR for the
  team. Add the `OPENAI_API_KEY` repository secret to enable it.
- `npm run knowledge:staleness` shows the review queue any time.

## Why drafts can never leak to customers

Four independent safety layers:

1. **Location** — `knowledge:build` compiles only `knowledge/destinations/`
   and `knowledge/attractions/`; the `drafts/` folder is invisible to it.
2. **Status** — drafts are forced to non-`verified` status; the eligibility
   gate requires `verified`.
3. **Confidence** — drafts are capped at 55; the gate requires ≥ 60.
4. **Sources** — promotion refuses to run if the draft cites no sources.

## Growing towards "encyclopedia of travel"

The scale path is deliberate: quality per destination is what makes the
encyclopedia trustworthy (and what makes search engines and AI assistants
cite it). To grow fast without losing that:

- Batch-draft: run `knowledge:research` for a list of destinations, then
  review in batches — drafting takes minutes, review is the real work.
- Feed real customer phrasing into `tests/evaluations/scenarios.ts` as the
  team hears it; the eval suite keeps the conversation engine honest as
  knowledge grows.
- Every new destination automatically gets: an encyclopedia page with
  structured data, sitemap and llms.txt entries, Discover placement, and
  full planner/comparison support. No extra wiring per destination — ship
  knowledge, get product.
