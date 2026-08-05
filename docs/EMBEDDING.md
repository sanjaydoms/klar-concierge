# Embedding Klar Concierge in klartravels.com

Klar Concierge is designed to live inside the Klar Travels portal in two ways:
a compact **chat box** and a full **planner tab**. Both are plain iframes — no
SDK, no script tag, no shared cookies.

## 1. Chat box (floating widget or side panel)

Use the dedicated `/embed` route. It renders only the conversation planner —
no header, footer or navigation — and fills whatever size the iframe gives it.

```html
<iframe
  src="https://klar-concierge-virid.vercel.app/embed"
  title="Klar Concierge — plan your holiday"
  style="width: 100%; height: 100%; border: 0; border-radius: 16px;"
  allow="clipboard-write"
  loading="lazy"
></iframe>
```

A typical floating-widget container on the portal side:

```html
<div style="position: fixed; right: 24px; bottom: 24px; width: 400px; height: 620px;
            max-height: 80vh; box-shadow: 0 12px 40px rgba(8,43,103,.25);
            border-radius: 16px; overflow: hidden; z-index: 1000;">
  <!-- iframe from above goes here -->
</div>
```

## 2. Full planner tab

Point a portal tab (e.g. "Plan My Holiday") at any full page — they all render
inside an iframe too:

| Portal tab | URL |
| --- | --- |
| Plan a holiday | `/concierge` |
| Discover ideas | `/concierge/discover` |
| Destination encyclopedia | `/destinations` |
| Compare destinations | `/concierge/compare` |

Or skip the iframe entirely and open the URLs in the same window — the app is
fully standalone and carries Klar branding.

## Security model

- The Content-Security-Policy allows framing **only** from
  `https://klartravels.com` and `https://*.klartravels.com` (plus the app
  itself). Any other site attempting to iframe the app is blocked by the
  browser. To add another portal origin, edit `FRAME_ANCESTORS` in
  `next.config.mjs`.
- Sessions are anonymous and stored in the visitor's browser
  (`localStorage`), scoped to the concierge origin. No PII is persisted;
  contact details flow only to the CRM at handover.
- No authentication is required or supported — the portal handles login;
  the concierge treats every visitor the same.

## Sizing guidance

- Chat box: minimum 320 × 480 px; comfortable at 400 × 620 px.
- Full tab: give the iframe `width: 100%; height: 100vh` minus the portal
  header; the app is responsive from 320 px up.
