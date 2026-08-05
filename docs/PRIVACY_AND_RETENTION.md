# Privacy and Retention

## What the application stores
| Data | Where | Lifetime |
| --- | --- | --- |
| Conversation + trip preferences | Anonymous TTL session (no PII) | 120 min inactivity, or user deletion, or successful handover |
| Idempotency key → CRM reference | Idempotency store | 24 h |
| Analytics events | Allow-listed counters, PII-key-stripped | Provider-dependent (default: in-memory) |

## What it never stores
Names, phone numbers, emails, transcripts tied to identity, passport/payment/
government-ID data, PII in logs or analytics. There is no customer database
and no internal screen that could display customer PII.

## Handover flow
PII exists only in the `POST /api/crm/handover` request: consent-gated,
validated, sent to the CRM, never written to disk here. On success the
session (brief + transcript) is deleted; the CRM owns the relationship.
On failure nothing is retained beyond redacted failure telemetry.

## User controls
"Start over" deletes the session immediately; sessions self-expire; the
privacy page states exactly this model in customer language.
