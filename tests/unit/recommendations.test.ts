import { describe, expect, it } from "vitest";
import { hardExclusions, recommendDirections, scoreDestination } from "@/services/recommendations/engine";
import { getAllDestinations, getDestination, getEligibleDestinations } from "@/repositories/knowledge";
import { emptyBrief, type TravelBrief } from "@/types/brief";

function familyBrief(overrides: Partial<TravelBrief> = {}): TravelBrief {
  return {
    ...emptyBrief("family trip"),
    travelMonth: 12,
    durationNights: 7,
    travellerType: "family",
    adults: 2,
    childrenAges: [6, 10],
    pace: "relaxed",
    interests: ["food", "themeparks"],
    ...overrides,
  };
}

describe("recommendation scoring", () => {
  it("produces a full bounded breakdown", () => {
    const singapore = getDestination("singapore")!;
    const score = scoreDestination(singapore, familyBrief());
    for (const [key, value] of Object.entries(score)) {
      expect(value, key).toBeGreaterThanOrEqual(key === "dislikesPenalty" ? 0 : 0);
      expect(value, key).toBeLessThanOrEqual(100);
    }
  });

  it("penalises dislikes", () => {
    const bangkok = getDestination("bangkok")!;
    const withDislike = scoreDestination(bangkok, familyBrief({ dislikes: ["nightlife", "shopping"] }));
    const without = scoreDestination(bangkok, familyBrief());
    expect(withDislike.overall).toBeLessThan(without.overall);
    expect(withDislike.dislikesPenalty).toBeGreaterThan(0);
  });

  it("respects short flight tolerance", () => {
    const australia = getDestination("australia")!;
    const shortPref = scoreDestination(australia, familyBrief({ flightTolerance: "short" }));
    expect(shortPref.flightToleranceFit).toBeLessThanOrEqual(30);
  });
});

describe("hard exclusions", () => {
  it("excludes explicitly excluded destinations", () => {
    const dubai = getDestination("dubai")!;
    const reasons = hardExclusions(dubai, familyBrief({ excludedDestinations: ["dubai"] }));
    expect(reasons).toContain("explicitly-excluded");
  });

  it("excludes out-of-season destinations", () => {
    const dubai = getDestination("dubai")!;
    const reasons = hardExclusions(dubai, familyBrief({ travelMonth: 7 }));
    expect(reasons).toContain("season-below-threshold");
  });

  it("excludes impossible durations", () => {
    const australia = getDestination("australia")!;
    const reasons = hardExclusions(australia, familyBrief({ durationNights: 3 }));
    expect(reasons).toContain("duration-impossible");
  });

  it("excludes humid destinations when humidity must be avoided", () => {
    const singapore = getDestination("singapore")!;
    const reasons = hardExclusions(
      singapore,
      familyBrief({ climatePreferences: ["avoid-humidity"], travelMonth: 6 }),
    );
    expect(reasons).toContain("climate-conflict");
  });
});

describe("three directions", () => {
  it("returns three distinct directions for a mainstream brief", () => {
    const result = recommendDirections(familyBrief());
    expect(result.recommendations).toHaveLength(3);
    expect(result.recommendations.map((r) => r.direction)).toEqual([
      "best-match", "best-for-taste", "something-special",
    ]);
    const slugs = result.recommendations.map((r) => r.destinationSlug);
    expect(new Set(slugs).size).toBe(3);
  });

  it("every recommendation carries reasons, a trade-off and verify items", () => {
    const result = recommendDirections(familyBrief());
    for (const rec of result.recommendations) {
      expect(rec.reasons.length).toBeGreaterThanOrEqual(1);
      expect(rec.tradeOff.length).toBeGreaterThan(0);
      expect(rec.verifyWithExpert.length).toBeGreaterThan(0);
      expect(rec.verifyWithExpert.join(" ")).toContain("Visa");
    }
  });

  it("never recommends an excluded destination", () => {
    const result = recommendDirections(familyBrief({ excludedDestinations: ["dubai", "singapore"] }));
    const slugs = result.recommendations.map((r) => r.destinationSlug);
    expect(slugs).not.toContain("dubai");
    expect(slugs).not.toContain("singapore");
  });

  it("returns an honest shorter list instead of padding when constraints bite", () => {
    // Wheelchair access + avoid humidity + short flight in July leaves very little.
    const result = recommendDirections(
      familyBrief({
        travelMonth: 7,
        accessibilityNeeds: ["wheelchair access"],
        climatePreferences: ["avoid-humidity"],
        flightTolerance: "short",
        durationNights: 5,
      }),
    );
    expect(result.recommendations.length).toBeLessThanOrEqual(3);
    if (result.recommendations.length < 3) {
      expect(result.limitedOptions).toBe(true);
      expect(result.limitedOptionsMessage).toBeTruthy();
    }
  });

  it("reports an honest no-match with guidance when nothing is defensible", () => {
    const result = recommendDirections(
      familyBrief({
        excludedDestinations: getAllDestinations().map((d) => d.slug),
      }),
    );
    expect(result.recommendations).toHaveLength(0);
    expect(result.limitedOptionsMessage).toBeTruthy();
  });

  it("only ever draws from eligibility-gated destinations", () => {
    const eligibleSlugs = new Set(getEligibleDestinations().map((d) => d.slug));
    const result = recommendDirections(familyBrief());
    for (const rec of result.recommendations) {
      expect(eligibleSlugs.has(rec.destinationSlug)).toBe(true);
    }
  });
});
