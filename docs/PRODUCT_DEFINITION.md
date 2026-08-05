# Product Definition

**Klar Concierge** — a world-class conversational holiday decision engine by
**Klar Travels**, grounded in a proprietary travel-intelligence system (KTIE).

## The questions it answers
Where should I travel? · What suits my family and my children's ages? · What is
best in my travel month? · Which destination matches my tastes and duration? ·
What are the honest trade-offs? · What should the trip look like day by day? ·
Which of several destinations is the better decision?

## The permanent journey
Natural conversation → structured travel understanding → decision support →
three differentiated directions → comparison when requested → draft itinerary
→ customer selects a direction → optional Klar expert handover through CRM/RMS.

## Explicitly out of scope in this release
Supplier APIs, inventory, availability, prices, quotes, bookings, payments,
refunds, ticketing, vouchers, traveller accounts, consultant dashboards,
customer-data admin screens, and application authentication. None of these
exist in the codebase — future capability is enabled by clean interfaces
(`CRMProvider`, `SessionStore`, `AnalyticsProvider`), not dormant systems.

## Honesty principles
- Only evidence-qualified (eligibility-gated) destinations are recommendable.
- Two honest options beat a forced weak third; zero options come with guidance.
- Every recommendation carries reasons, one trade-off, who-may-not-enjoy,
  what to verify with an expert, and a confidence label.
- Dynamic facts (visas, advisories, closures, prices) are never asserted —
  they are flagged for Klar-expert or official-source verification.
- CRM-disabled mode never fakes a submission or invents a reference.
