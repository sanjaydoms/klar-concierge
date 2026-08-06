# How the engine learns — fully autonomous, evidence-verified

Klar Concierge's intelligence is a Git-managed knowledge base (`knowledge/`).
As of 2.3.0 it grows and refreshes itself **without human intervention**.
The safety that a human reviewer used to provide now comes from machines:
measured data, multiple independent sources, and an adversarial audit pass.

## The autonomous loop

```
 ┌────────────────────────────────────────────────────────────────┐
 │ 1. EVIDENCE (free, keyless APIs)                               │
 │    · Open-Meteo archive — 5 years of MEASURED daily climate    │
 │    · Wikipedia — encyclopedic summary + canonical citation     │
 │    · Wikivoyage — traveller-focused guide extract              │
 └────────────────────────────┬───────────────────────────────────┘
                              ▼
 ┌────────────────────────────────────────────────────────────────┐
 │ 2. SYNTHESIS (multi-engine AI)                                 │
 │    Claude (ANTHROPIC_API_KEY) or OpenAI (OPENAI_API_KEY)       │
 │    writes the destination profile grounded ONLY in evidence    │
 └────────────────────────────┬───────────────────────────────────┘
                              ▼
 ┌────────────────────────────────────────────────────────────────┐
 │ 3. HARD FACTS (deterministic, no AI opinion)                   │
 │    Measured climate overwrites the model's weather claims:     │
 │    temperature/rainfall/humidity bands mapped by fixed,        │
 │    unit-tested thresholds; season scores clamped when they     │
 │    contradict measured weather                                 │
 └────────────────────────────┬───────────────────────────────────┘
                              ▼
 ┌────────────────────────────────────────────────────────────────┐
 │ 4. ADVERSARIAL AUDIT                                           │
 │    A second AI pass tries to REFUTE the draft against the      │
 │    evidence (wrong region, monsoon sold as excellent, absurd   │
 │    flight hours…). Refuted drafts never go live.               │
 └────────────────────────────┬───────────────────────────────────┘
                              ▼
 ┌────────────────────────────────────────────────────────────────┐
 │ 5. PROMOTION (earned, not asserted)                            │
 │    Schema-valid + ≥5 attractions + encyclopedic source +       │
 │    audit passed  → LIVE with citations and computed confidence │
 │    Anything weaker → knowledge/drafts/ (invisible to builds,   │
 │    below the eligibility threshold) with WHY_NOT_LIVE.txt      │
 └────────────────────────────────────────────────────────────────┘
```

## Commands

| Command | What it does | Needs |
| --- | --- | --- |
| `npm run knowledge:enrich` | Refresh every destination's climate with measured data + attach citations | internet only |
| `npm run knowledge:autonomous -- "Jordan" "Fiji"` | Generate destinations end-to-end and promote automatically | internet + AI key |
| `npm run knowledge:autonomous -- --refresh-stale` | Regenerate everything past its review date | internet + AI key |
| `npm run knowledge:build` | Validate + compile (always run after the above) | — |

New destinations need coordinates in `scripts/lib/coordinates.ts` first —
measured climate is mandatory evidence, so unknown places fail loudly
instead of shipping weather guesses.

## Hands-off operation (GitHub Actions)

- **`knowledge-autonomous`** (weekly + on-demand): enriches everything with
  fresh measured climate, regenerates stale destinations, runs the full test
  gate (typecheck, tests, critical evals) and **commits straight to main**.
  Vercel redeploys automatically. Stale knowledge refreshes itself.
- **`knowledge-expand`** (on-demand): type destination names in the Actions
  tab and they go live minutes later — evidence-gathered, audited, tested,
  committed.

Setup: add `ANTHROPIC_API_KEY` (preferred) and/or `OPENAI_API_KEY` as
repository secrets. Enrichment alone needs no key at all.

## Why this is trustworthy without a human

1. **Weather is measured, not asserted** — every month's bands come from
   five years of Open-Meteo archive data through fixed thresholds; the AI
   has no vote on the weather.
2. **Season claims are bounded by physics** — a score that contradicts
   measured climate is clamped (unit-tested rule, never inflated).
3. **Two AI passes disagree by design** — the auditor's only job is to
   refute the writer; a failed audit lands in drafts, not production.
4. **Confidence is computed from evidence coverage** — climate + Wikipedia
   + Wikivoyage + audit each earn points; nothing self-declares 95.
5. **The full test gate runs before any autonomous commit** — 288 eval
   scenarios and the test suite must stay green or nothing ships.
6. **Everything is Git** — every autonomous change is a diffable commit
   with citations and access dates; rollback is `git revert`.

The optional human path (`knowledge:research` → review → `knowledge:promote`)
still exists for destinations the team wants to hand-polish — it's simply no
longer required for the engine to learn.

## Optional human touch (recommended, never required)

Klar experts add most value editing what machines can't measure: the
trade-offs, who-should-avoid honesty, and suitability scores born from real
customer trips. Editing any `knowledge/destinations/*.json` and committing
is enough — the next autonomous run preserves human edits to those fields
and only refreshes climate and citations.
