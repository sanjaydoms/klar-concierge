import { describe, expect, it } from "vitest";
import { compareDestinations } from "@/services/comparison/engine";
import { emptyBrief } from "@/types/brief";

describe("comparison dimensions are real comparatives, not score dumps", () => {
  it("every decided dimension explains itself against the loser", () => {
    const result = compareDestinations(["japan", "south-korea"], {
      ...emptyBrief(""),
      travelMonth: 10,
      travellerType: "family",
      childrenAges: [7, 14],
      durationNights: 8,
      interests: ["food", "culture"],
    });
    if ("error" in result) throw new Error(result.error);
    for (const dim of result.dimensions) {
      if (dim.winnerSlug === "tie" || dim.key === "watchouts") continue;
      expect(dim.reason.length, `${dim.key} reason`).toBeGreaterThan(40);
      // Contrastive: the verdict must name both sides, not just the winner.
      expect(dim.reason, `${dim.key} mentions both destinations`).toMatch(/Japan/);
      expect(dim.reason, `${dim.key} mentions both destinations`).toMatch(/South Korea/);
    }
  });

  it("values are sentences with context, not bare scores", () => {
    const result = compareDestinations(["georgia", "australia"], {
      ...emptyBrief(""),
      travelMonth: 5,
      durationNights: 7,
    });
    if ("error" in result) throw new Error(result.error);
    const flight = result.dimensions.find((d) => d.key === "flight")!;
    for (const value of Object.values(flight.values)) {
      expect(value).toMatch(/hop|overnight|long-haul/);
    }
  });

  it("shows no seniors row for a couple, and shows it for multi-generational trips", () => {
    const couple = compareDestinations(["maldives", "mauritius"], {
      ...emptyBrief(""),
      travellerType: "couple",
    });
    if ("error" in couple) throw new Error(couple.error);
    expect(couple.dimensions.find((d) => d.key === "seniors")).toBeUndefined();
    expect(couple.dimensions.find((d) => d.key === "romance")).toBeDefined();

    const multiGen = compareDestinations(["maldives", "mauritius"], {
      ...emptyBrief(""),
      travellerType: "multi-generational",
    });
    if ("error" in multiGen) throw new Error(multiGen.error);
    expect(multiGen.dimensions.find((d) => d.key === "seniors")).toBeDefined();
  });

  it("always ends with the honest trade-off row", () => {
    const result = compareDestinations(["vietnam", "sri-lanka"]);
    if ("error" in result) throw new Error(result.error);
    const last = result.dimensions[result.dimensions.length - 1];
    expect(last.key).toBe("watchouts");
    expect(last.winnerSlug).toBe("tie");
  });
});
