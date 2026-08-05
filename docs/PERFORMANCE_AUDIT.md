# Performance Audit

## Measured at build (Next.js production output)
- Shared first-load JS: ~102 kB (largest route /concierge: ~114 kB)
- All public content pages are statically prerendered; only APIs and the
  planner's data calls are dynamic
- Knowledge is compiled to a single server-side JSON import — no runtime
  filesystem or network reads; engines respond in milliseconds (evals run
  288 scenarios in ~1s)
- No third-party scripts, no external fonts, no blocking beacons
- The logo is the only image; served optimised via next/image

## Honestly not measured
Lighthouse scores have not been run in this environment and are therefore not
claimed. Given static prerendering, ~100 kB JS and zero third-party requests,
the 90+ target is credible but must be verified on the production deployment —
tracked in KNOWN_LIMITATIONS.md with the exact command
(`npx lighthouse https://<domain>/ --preset=desktop` and mobile).
