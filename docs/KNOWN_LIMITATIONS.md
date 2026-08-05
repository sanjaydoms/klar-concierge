# Known Limitations (honest)

1. **Knowledge depth is 30 destinations, not the world.** The 196-country
   registry is skeletal by design; only the 30 Tier-1 destinations are
   recommendation-eligible. "Where should I go?" answers are excellent within
   that pack and honestly limited outside it.
2. **Seed verification is editorial, not operational.** Records were compiled
   and stable-fact-reviewed by the knowledge-pack author with tourism-board
   source references, and pass all structural gates. Klar's operations team
   should re-confirm commercial fit (partners, seasonal pricing patterns)
   before major campaigns; next-review dates (2026-11-01) enforce this.
3. **In-memory session/idempotency/rate-limit stores.** Correct on a single
   instance; multi-instance serverless deployments need the Redis
   implementations of the provided interfaces (documented in DEPLOYMENT.md).
4. **Lighthouse not run here.** Bundle sizes and static prerendering are
   documented; actual scores must be measured on the production URL.
5. **Screen-reader walkthrough pending.** Semantics and keyboard support are
   implemented and partially e2e-tested; a formal NVDA/VoiceOver pass and
   real-device iOS/Android QA remain operational steps.
6. **OpenAI extraction is optional and unbenchmarked.** The deterministic
   fallback is fully evaluated (288 scenarios); the LLM path merges over it
   and degrades to it on any failure, but model-specific extraction quality
   has not been separately benchmarked.
7. **CRM handover is scaffolded, not battle-tested against a real vendor.**
   The webhook provider follows the contract (bearer + idempotency + timeout)
   and is unit/eval-tested; an end-to-end test against Klar's actual RMS
   remains for integration week.
8. **Conversation memory is session-scoped by design.** There is no
   cross-session personalisation — a privacy feature, but worth stating.
