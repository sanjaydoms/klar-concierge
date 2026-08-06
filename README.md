# Klar Concierge

A conversational holiday decision engine for **Klar Travels** (klartravels.com).

Klar Concierge helps a traveller answer *where should I go?* — through natural
conversation, grounded destination intelligence (KTIE), honest three-direction
recommendations, side-by-side comparison and practical draft itineraries —
ending in an optional handover to a real Klar travel expert via CRM.

```
Natural conversation → Structured travel understanding → Decision support
→ Three differentiated directions → Comparison on request → Draft itinerary
→ Customer selects → Optional Klar expert handover (CRM)
```

## What it is not

No supplier integrations, inventory, live pricing, quotes, bookings, payments,
traveller accounts, internal lead dashboards, or authentication. Customer PII
is never persisted here — it travels to the CRM at handover only.

## Stack

- Next.js (App Router) + TypeScript + Tailwind — no database required
- KTIE knowledge base: Git-managed JSON under `knowledge/` (196 countries,
  61 deep destinations, 366 structured attractions), compiled and validated
  by scripts
- Deterministic recommendation, comparison and itinerary engines —
  AI (optional OpenAI) only interprets the traveller, never ranks destinations
- Anonymous TTL planning sessions; truthful placeholder CRM adapter
- Vitest unit/integration tests, Playwright e2e, 288-scenario evaluation suite

## Quick start

```bash
npm install
npm run knowledge:build     # validate + compile the knowledge base
npm run dev                 # http://localhost:3002
```

No environment variables are required to run the full decision engine.
See `.env.example` for optional AI, session-TTL and CRM configuration.

## Verification (all must pass before release)

```bash
npm run typecheck
npm run test                # 62 unit + integration tests
npm run knowledge:validate
npm run knowledge:coverage
npm run knowledge:staleness
npm run eval                # 288 evaluation scenarios
npm run eval:critical       # release-blocking subset
npm run build
npm run test:e2e            # Playwright (build + start first, or let it boot)
```

## Documentation

Everything lives in [`docs/`](./docs) — product definition, architecture,
conversation engine, KTIE schemas and coverage, knowledge governance, CRM
adapter, privacy and retention, evaluation framework, test plan, QA and
accessibility audits, deployment, release notes and honest known limitations.
