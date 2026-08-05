import { describe, expect, it } from "vitest";
import { compareDestinations } from "@/services/comparison/engine";
import { emptyBrief } from "@/types/brief";

describe("destination comparison", () => {
  it("compares Japan vs South Korea for an October family", () => {
    const result = compareDestinations(["japan", "south-korea"], {
      ...emptyBrief(""),
      travelMonth: 10,
      travellerType: "family",
      childrenAges: [7, 14],
      durationNights: 8,
    });
    expect("error" in result).toBe(false);
    if ("error" in result) return;
    expect(result.decisionSummary.length).toBeGreaterThan(20);
    expect(result.dimensions.length).toBeGreaterThanOrEqual(8);
    expect(["japan", "south-korea"]).toContain(result.finalRecommendationSlug);
    expect(result.conditions.join(" ")).toContain("Visa");
    expect(result.alternativeIfPrioritiesChange.length).toBeGreaterThan(0);
  });

  it("is deterministic", () => {
    const brief = { ...emptyBrief(""), travelMonth: 12, travellerType: "couple" as const };
    const a = compareDestinations(["maldives", "mauritius"], brief);
    const b = compareDestinations(["maldives", "mauritius"], brief);
    expect(JSON.stringify(a)).toEqual(JSON.stringify(b));
  });

  it("supports three-way comparison", () => {
    const result = compareDestinations(["bangkok", "phuket", "krabi"], {
      ...emptyBrief(""),
      travelMonth: 1,
    });
    if ("error" in result) throw new Error(result.error);
    expect(result.slugs).toHaveLength(3);
    for (const dim of result.dimensions) {
      expect(Object.keys(dim.values)).toHaveLength(3);
    }
  });

  it("rejects invalid slug counts and unknown slugs", () => {
    expect("error" in compareDestinations(["japan"])).toBe(true);
    expect("error" in compareDestinations(["japan", "narnia"])).toBe(true);
  });

  it("reflects the month in seasonal dimensions", () => {
    const dec = compareDestinations(["dubai", "bali"], { ...emptyBrief(""), travelMonth: 12 });
    if ("error" in dec) throw new Error(dec.error);
    const season = dec.dimensions.find((d) => d.key === "season")!;
    expect(season.winnerSlug).toBe("dubai"); // Bali's wet season vs Dubai's peak
  });
});
