# Analytics

PII-free product analytics behind `AnalyticsProvider`
(src/services/analytics). Default `none` (in-memory counters); `console` for
development. The app never requires an analytics vendor to function.

## Allowed events (allow-listed)
concierge_page_view, planner_started, planner_message_sent, brief_completed,
recommendations_viewed, recommendation_selected, comparison_started,
comparison_completed, itinerary_viewed, crm_handover_started,
crm_handover_succeeded, crm_handover_failed, session_restarted.

## Guarantees
Unknown events are dropped. Properties are sanitised: keys containing
name/phone/email/message/prompt/transcript/notes/accessibility/dietary/
customer/payload fragments are removed; strings >120 chars are removed.
Covered by unit tests and the critical evaluation suite.
