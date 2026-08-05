# Conversation Engine

## Behaviour contract
One question at a time · never re-ask known facts · natural acknowledgements ·
comparisons honoured mid-flow · "I don't know" and "surprise me" supported ·
out-of-scope requests (prices, bookings, visa guarantees) redirected honestly ·
brief summarised before recommendations · concise, non-advertising language.

## Pipeline
1. `POST /api/chat` finds or creates an anonymous session (TTL 120 min).
2. `AIProvider.extractBrief` produces a `briefPatch` + intent. The OpenAI
   provider (optional) merges over the deterministic extractor; any failure
   falls back silently, so the planner never depends on the AI.
3. The patch merges into the session brief (arrays are unioned; known facts
   are never overwritten by "unknown").
4. Intent routing: `compare-destinations` → comparison suggestion with slugs;
   `out-of-scope` → honest scope reply; `undecided` → gentle narrowing;
   otherwise → the single most useful follow-up question, or brief-complete.

## Deterministic extraction coverage
Months, date words, durations (nights/days/weeks, digits and words), adults,
children ages (lists, "3-year-old", "toddler"), seniors ("my parents"),
traveller types (incl. multi-generational), pace, budget bands, 14 interest
categories, 22 Indian origin cities, dietary needs (veg/vegan/halal/jain),
accessibility phrases, climate preferences (avoid humidity/heat/cold/rain,
want snow), crowd tolerance, short-flight tolerance, destination mentions and
exclusions ("somewhere different from Dubai and Thailand").

## Session behaviour
Anonymous UUID sessions, TTL-refreshed on activity, recoverable after page
refresh (`GET /api/chat/session/:id` + client-side id), deletable ("Start
over"), and deleted automatically after successful CRM handover. No PII ever
enters a session.
