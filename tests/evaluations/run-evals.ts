/**
 * Evaluation runner:
 *   npm run eval           → full scenario suite
 *   npm run eval:critical  → release-blocking subset (exit 1 on any failure)
 *
 * All evaluations run against the deterministic engine (the AI-unavailable
 * path) so results are reproducible and hallucination-free by construction.
 */
import { generateScenarios, type Scenario } from "./scenarios";
import { recommendDirections } from "../../src/services/recommendations/engine";
import { composeItinerary } from "../../src/services/itinerary/composer";
import { compareDestinations } from "../../src/services/comparison/engine";
import { FallbackAIProvider } from "../../src/services/ai/fallbackExtractor";
import {
  getAllDestinations,
  getAttractions,
  getDestination,
  getEligibleDestinations,
} from "../../src/repositories/knowledge";
import { destinationEligibility } from "../../src/services/ktie/eligibility";
import { createCRMProvider, PlaceholderCRMProvider } from "../../src/services/crm/providers";
import { sanitiseProps } from "../../src/services/analytics";
import { getSessionStore } from "../../src/repositories/sessions";
import { getIdempotencyStore } from "../../src/repositories/idempotency";
import { emptyBrief } from "../../src/types/brief";

const criticalOnly = process.argv.includes("--critical");
const provider = new FallbackAIProvider();
const eligibleSlugs = new Set(getEligibleDestinations().map((d) => d.slug));

type Failure = { id: string; reason: string };
const failures: Failure[] = [];
let passed = 0;

function assert(scenario: Scenario, condition: boolean, reason: string) {
  if (condition) return;
  failures.push({ id: scenario.id, reason });
}

async function runScenario(s: Scenario): Promise<void> {
  const before = failures.length;
  try {
    if (s.kind === "recommend" || (s.kind === "itinerary" && s.brief)) {
      const brief = { ...s.brief! };
      if (brief.excludedDestinations.includes("__ALL__")) {
        brief.excludedDestinations = getAllDestinations().map((d) => d.slug);
      }

      if (s.kind === "itinerary") {
        const dest = getDestination(String(s.params!.slug))!;
        const days = composeItinerary(dest, brief);
        const nights = Number(s.params!.nights);
        const expected = Math.max(dest.minimumNights, Math.min(dest.maximumNights, nights)) + 1;
        assert(s, days.length === expected, `expected ${expected} days, got ${days.length}`);
        const ids = days.flatMap((d) => [...d.morning, ...d.afternoon, ...d.evening]).map((b) => b.attractionId).filter(Boolean);
        assert(s, new Set(ids).size === ids.length, "attraction repeated");
        const text = JSON.stringify(days).toLowerCase();
        assert(s, !text.includes("booked") && !text.includes("reserved"), "claims a booking");
        assert(s, days.every((d) => d.morning.length + d.afternoon.length + d.evening.length <= 5), "day overloaded");
      } else {
        const result = recommendDirections(brief);
        const slugs = result.recommendations.map((r) => r.destinationSlug);

        switch (s.check) {
          case "recommend-basic":
          case "recommend-eligible-only":
          case "recommend-no-crash": {
            assert(s, new Set(slugs).size === slugs.length, "duplicate destination");
            assert(s, slugs.every((x) => eligibleSlugs.has(x)), "non-eligible destination returned");
            for (const rec of result.recommendations) {
              assert(s, rec.reasons.length >= 1 && rec.tradeOff.length > 0, `${rec.destinationSlug} unexplained`);
              if (brief.travelMonth) {
                const m = getDestination(rec.destinationSlug)!.monthlyIntelligence.find((mi) => mi.month === brief.travelMonth)!;
                assert(s, m.seasonScore >= 45, `${rec.destinationSlug} out of season (${m.seasonScore})`);
              }
              if (brief.childrenAges.some((a) => a <= 4)) {
                assert(s, getDestination(rec.destinationSlug)!.suitability.toddlers >= 55, `${rec.destinationSlug} weak for toddlers`);
              }
            }
            assert(s, result.recommendations.length > 0 || Boolean(result.limitedOptionsMessage), "empty without explanation");
            break;
          }
          case "recommend-duration": {
            for (const rec of result.recommendations) {
              const d = getDestination(rec.destinationSlug)!;
              assert(s, Number(s.params!.nights) >= d.minimumNights - 1, `${d.slug} needs more nights than available`);
            }
            break;
          }
          case "recommend-interest": {
            if (result.recommendations.length > 0) {
              const taste = result.recommendations.find((r) => r.direction === "best-for-taste") ?? result.recommendations[0];
              const strength = getDestination(taste.destinationSlug)!.interests[String(s.params!.interest)] ?? 0;
              assert(s, strength >= 40, `taste pick weak for ${s.params!.interest} (${strength})`);
            }
            break;
          }
          case "recommend-accessibility": {
            for (const rec of result.recommendations) {
              assert(s, getDestination(rec.destinationSlug)!.travelPracticality.accessibilityScore >= 50, `${rec.destinationSlug} poor accessibility`);
            }
            break;
          }
          case "recommend-short-flight": {
            for (const rec of result.recommendations) {
              assert(s, getDestination(rec.destinationSlug)!.travelPracticality.averageFlightHoursFromIndia <= 8, `${rec.destinationSlug} is long-haul`);
            }
            break;
          }
          case "recommend-no-humid": {
            for (const rec of result.recommendations) {
              const m = getDestination(rec.destinationSlug)!.monthlyIntelligence.find((mi) => mi.month === brief.travelMonth)!;
              assert(s, m.humidity !== "high", `${rec.destinationSlug} humid in month ${brief.travelMonth}`);
            }
            break;
          }
          case "recommend-excludes": {
            assert(s, !slugs.includes(String(s.params!.slug)), `excluded ${s.params!.slug} returned`);
            break;
          }
          case "recommend-honest-limited": {
            assert(s, result.recommendations.length <= 3, "over-returned");
            for (const rec of result.recommendations) {
              const d = getDestination(rec.destinationSlug)!;
              assert(s, d.minimumNights - 1 <= (brief.durationNights ?? 99), `${d.slug} impossible for duration`);
            }
            break;
          }
          case "recommend-honest-empty": {
            assert(s, result.recommendations.length === 0, "returned recs despite full exclusion");
            assert(s, Boolean(result.limitedOptionsMessage), "no honest guidance message");
            break;
          }
          default:
            assert(s, false, `unknown check ${s.check}`);
        }
      }
    } else if (s.kind === "extract") {
      const out = await provider.extractBrief({ message: s.message!, currentBrief: emptyBrief() });
      switch (s.check) {
        case "extract-fields": {
          for (const [key, value] of Object.entries(s.params ?? {})) {
            assert(s, JSON.stringify(out.briefPatch[key as keyof typeof out.briefPatch]) === JSON.stringify(value), `${key} not extracted as ${value}`);
          }
          break;
        }
        case "extract-exclusion":
          assert(s, (out.briefPatch.excludedDestinations ?? []).includes(String(s.params!.excluded)), "exclusion missed");
          break;
        case "extract-veg":
          assert(s, (out.briefPatch.dietaryPreferences ?? []).includes("vegetarian"), "vegetarian missed");
          assert(s, out.briefPatch.flightTolerance === "short", "short flight missed");
          break;
        case "extract-climate":
          assert(s, (out.briefPatch.climatePreferences ?? []).includes("avoid-humidity"), "humidity missed");
          assert(s, out.briefPatch.crowdTolerance === "low", "crowd tolerance missed");
          break;
        case "extract-compare":
          assert(s, out.detectedIntent === "compare-destinations" && out.comparisonSlugs.length >= 2, "comparison intent missed");
          break;
        case "extract-undecided":
          assert(s, out.detectedIntent === "undecided", "undecided intent missed");
          break;
        case "extract-outofscope":
          assert(s, out.detectedIntent === "out-of-scope", `expected out-of-scope, got ${out.detectedIntent}`);
          break;
        default:
          assert(s, false, `unknown check ${s.check}`);
      }
    } else if (s.kind === "compare") {
      const result = compareDestinations(s.compareSlugs!, s.brief);
      assert(s, !("error" in result), "comparison errored");
      if (!("error" in result)) {
        assert(s, s.compareSlugs!.includes(result.finalRecommendationSlug), "winner not among inputs");
        assert(s, result.dimensions.length >= 8, "too few dimensions");
        assert(s, result.decisionSummary.length > 20, "no decision summary");
        const again = compareDestinations(s.compareSlugs!, s.brief);
        assert(s, JSON.stringify(again) === JSON.stringify(result), "non-deterministic");
      }
    } else if (s.kind === "adversarial") {
      switch (s.check) {
        case "gate-stale": {
          const d = getAllDestinations()[0];
          const staleDate = new Date(Date.parse(d.nextReviewAt) + 200 * 24 * 3600_000);
          assert(s, !destinationEligibility(d, getAttractions(d.slug), staleDate).eligible, "stale record passed the gate");
          break;
        }
        case "crm-disabled-truthful": {
          const result = await new PlaceholderCRMProvider().submitLead(
            { source: "klar-concierge", idempotencyKey: "x", customer: { name: "T", phone: "+911234567890", email: "t@e.com", preferredContactChannel: "phone", consent: true, consentTimestamp: "" }, tripBrief: emptyBrief(), selectedDestinationSlug: "bali", itinerary: [], conversationSummary: "" },
            { idempotencyKey: "x" },
          );
          assert(s, !result.success && result.status === "disabled" && !result.crmReferenceId, "placeholder faked success");
          break;
        }
        case "crm-factory-throws": {
          let threw = false;
          try {
            createCRMProvider({ crmEnabled: true, crmProvider: "webhook", crmWebhookUrl: "", crmWebhookToken: "", crmTimeoutMs: 1 });
          } catch {
            threw = true;
          }
          assert(s, threw, "misconfigured CRM did not throw");
          break;
        }
        case "idempotency-dedupe": {
          const store = getIdempotencyStore();
          await store.set("eval-key", "REF-1");
          assert(s, (await store.get("eval-key")) === "REF-1", "idempotency record lost");
          break;
        }
        case "analytics-redacts": {
          const clean = sanitiseProps({ destination: "bali", customerName: "X", email: "a@b.c" });
          assert(s, JSON.stringify(clean) === JSON.stringify({ destination: "bali" }), "analytics leaked PII keys");
          break;
        }
        case "session-ttl": {
          const store = getSessionStore();
          const session = await store.create();
          session.expiresAt = new Date(Date.now() - 1).toISOString();
          const read = await store.get(session.id);
          assert(s, read === null || Date.parse(read.expiresAt) >= Date.now(), "expired session readable");
          break;
        }
        default:
          assert(s, false, `unknown check ${s.check}`);
      }
    }
  } catch (e) {
    assert(s, false, `crashed: ${e instanceof Error ? e.message : String(e)}`);
  }
  if (failures.length === before) passed++;
}

async function main() {
  const all = generateScenarios();
  const scenarios = criticalOnly ? all.filter((s) => s.critical) : all;
  console.log(`Running ${scenarios.length} evaluation scenarios${criticalOnly ? " (critical subset)" : ""} of ${all.length} total…`);

  for (const s of scenarios) await runScenario(s);

  console.log(`\n${passed}/${scenarios.length} scenarios passed.`);
  if (failures.length > 0) {
    console.error(`\n${failures.length} FAILURES:`);
    for (const f of failures.slice(0, 40)) console.error(`  ✗ ${f.id}: ${f.reason}`);
    if (failures.length > 40) console.error(`  … and ${failures.length - 40} more`);
    process.exit(1);
  }
  console.log("All scenarios passed. ✓");
}

void main();
