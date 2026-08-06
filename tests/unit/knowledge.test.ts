import { describe, expect, it } from "vitest";
import {
  getAllDestinations,
  getAttractions,
  getCountries,
  getCountry,
  getEligibleDestinations,
} from "@/repositories/knowledge";
import { destinationEligibility } from "@/services/ktie/eligibility";
import { buildDiscoverCollections } from "@/services/ktie/discover";

describe("KTIE knowledge base", () => {
  it("ships 30 Tier-1 destinations and a near-complete country registry", () => {
    expect(getAllDestinations().length).toBeGreaterThanOrEqual(30);
    expect(getCountries().length).toBeGreaterThanOrEqual(190);
  });

  it("every destination has complete evidence", () => {
    for (const d of getAllDestinations()) {
      expect(d.monthlyIntelligence, d.slug).toHaveLength(12);
      expect(d.tradeOffs.length, d.slug).toBeGreaterThan(0);
      expect(d.whoShouldAvoid.length, d.slug).toBeGreaterThan(0);
      expect(d.sources.length, d.slug).toBeGreaterThan(0);
      expect(d.minimumNights).toBeLessThanOrEqual(d.idealNights);
      expect(d.idealNights).toBeLessThanOrEqual(d.maximumNights);
      expect(getAttractions(d.slug).length, d.slug).toBeGreaterThanOrEqual(5);
    }
  });

  it("all 30 destinations pass the eligibility gate", () => {
    expect(getEligibleDestinations().length).toBeGreaterThanOrEqual(30);
  });

  it("the eligibility gate rejects incomplete records", () => {
    const d = { ...getAllDestinations()[0], status: "skeleton" as const };
    const result = destinationEligibility(d, getAttractions(d.slug));
    expect(result.eligible).toBe(false);
    expect(result.reasons.join(" ")).toContain("verified");

    const noAttractions = destinationEligibility(getAllDestinations()[0], []);
    expect(noAttractions.eligible).toBe(false);
  });

  it("stale records fail the gate after the grace period", () => {
    const d = getAllDestinations()[0];
    const farFuture = new Date(Date.parse(d.nextReviewAt) + 200 * 24 * 3600_000);
    const result = destinationEligibility(d, getAttractions(d.slug), farFuture);
    expect(result.eligible).toBe(false);
  });

  it("country registry marks unresearched countries as skeletons, not fabrications", () => {
    const somalia = getCountry("SO");
    expect(somalia).toBeDefined();
    expect(somalia!.status).toBe("skeleton");
    expect(somalia!.travellerFit).toBeUndefined();
    const singapore = getCountry("SG");
    expect(singapore!.status).toBe("reviewed");
  });

  it("builds all thirteen discovery collections from eligible destinations only", () => {
    const collections = buildDiscoverCollections(12);
    expect(collections).toHaveLength(13);
    const eligible = new Set(getEligibleDestinations().map((d) => d.slug));
    for (const c of collections) {
      expect(c.destinations.length).toBeGreaterThan(0);
      for (const d of c.destinations) expect(eligible.has(d.slug)).toBe(true);
    }
  });
});
