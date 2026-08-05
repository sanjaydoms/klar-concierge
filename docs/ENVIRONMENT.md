# Environment

All variables are optional — the full decision engine runs with none set.

| Variable | Default | Purpose |
| --- | --- | --- |
| NEXT_PUBLIC_APP_URL | http://localhost:3002 | Canonical URL for metadata |
| OPENAI_API_KEY / OPENAI_MODEL | — / gpt-5-mini | Optional extraction model; deterministic fallback otherwise |
| ENABLE_AI_PERSONALISATION | true | Master switch for the AI provider |
| SESSION_TTL_MINUTES | 120 | Anonymous session lifetime |
| CRM_ENABLED | false | Handover activation |
| CRM_PROVIDER | placeholder | placeholder \| webhook |
| CRM_WEBHOOK_URL / CRM_WEBHOOK_TOKEN | — | Required only when provider=webhook |
| CRM_TIMEOUT_MS | 8000 | Webhook timeout |
| ANALYTICS_PROVIDER | none | none \| console |
| RATE_LIMIT_CHAT_PER_MINUTE | 20 | Per-client chat limit |
| RATE_LIMIT_PLAN_PER_MINUTE | 10 | Per-client plan/compare limit |
| RATE_LIMIT_CRM_PER_MINUTE | 5 | Per-client handover limit |
| LOG_LEVEL | info | Log verbosity |

There are deliberately no supplier, inventory, pricing, booking, payment or
authentication variables.
