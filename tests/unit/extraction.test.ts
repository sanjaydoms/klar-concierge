import { describe, expect, it } from "vitest";
import { extractBriefPatch, FallbackAIProvider } from "@/services/ai/fallbackExtractor";
import { emptyBrief } from "@/types/brief";

const FAMILY_PROMPT =
  "We are a family of four from Hyderabad looking for a relaxed seven-night holiday in December. Our children are 6 and 10, and we enjoy food, easy sightseeing and fun activities.";

describe("deterministic brief extraction", () => {
  it("extracts the classic family prompt fully", () => {
    const patch = extractBriefPatch(FAMILY_PROMPT);
    expect(patch.travelMonth).toBe(12);
    expect(patch.durationNights).toBe(7);
    expect(patch.travellerType).toBe("family");
    expect(patch.childrenAges).toEqual([6, 10]);
    expect(patch.originCity).toBe("Hyderabad");
    expect(patch.pace).toBe("relaxed");
    expect(patch.interests).toContain("food");
  });

  it("extracts honeymoon, budget and month", () => {
    const patch = extractBriefPatch("Planning a luxury honeymoon in May for 5 nights, we love beaches");
    expect(patch.travellerType).toBe("honeymoon");
    expect(patch.budgetBand).toBe("luxury");
    expect(patch.travelMonth).toBe(5);
    expect(patch.durationNights).toBe(5);
    expect(patch.occasion).toBe("honeymoon");
  });

  it("detects multi-generational parties", () => {
    const patch = extractBriefPatch("Travelling with my parents and our kids aged 7 and 12 in October");
    expect(patch.travellerType).toBe("multi-generational");
    expect(patch.seniorTravellers).toBe(2);
    expect(patch.childrenAges).toEqual([7, 12]);
  });

  it("extracts destination exclusions from 'different from' phrasing", () => {
    const patch = extractBriefPatch("I want somewhere different from Dubai and Thailand in January");
    expect(patch.excludedDestinations).toContain("dubai");
    expect(patch.travelMonth).toBe(1);
  });

  it("extracts climate preferences and crowd tolerance", () => {
    const patch = extractBriefPatch("Please avoid humidity and we hate crowds");
    expect(patch.climatePreferences).toContain("avoid-humidity");
    expect(patch.crowdTolerance).toBe("low");
  });

  it("extracts short-flight tolerance and dietary needs", () => {
    const patch = extractBriefPatch("Short flight only please, and we need pure veg food");
    expect(patch.flightTolerance).toBe("short");
    expect(patch.dietaryPreferences).toContain("vegetarian");
  });

  it("extracts accessibility needs", () => {
    const patch = extractBriefPatch("My mother uses a wheelchair, where is less tiring for my parents?");
    expect(patch.accessibilityNeeds).toContain("wheelchair access");
  });

  it("parses toddler and year-old phrasing", () => {
    const patch = extractBriefPatch("Travelling with our 3-year-old in March for a week");
    expect(patch.childrenAges).toEqual([3]);
    expect(patch.durationNights).toBe(7);
  });
});

describe("intent detection", () => {
  const provider = new FallbackAIProvider();

  it("detects comparison intent with two known destinations", async () => {
    const result = await provider.extractBrief({
      message: "Japan or South Korea in October for a family?",
      currentBrief: emptyBrief(),
    });
    expect(result.detectedIntent).toBe("compare-destinations");
    expect(result.comparisonSlugs).toContain("japan");
    expect(result.comparisonSlugs).toContain("south-korea");
  });

  it("routes price and booking requests out of scope", async () => {
    const result = await provider.extractBrief({
      message: "How much does a Bali package cost and can you book it?",
      currentBrief: emptyBrief(),
    });
    expect(result.detectedIntent).toBe("out-of-scope");
  });

  it("detects undecided travellers", async () => {
    const result = await provider.extractBrief({
      message: "No idea where to go, surprise me",
      currentBrief: emptyBrief(),
    });
    expect(result.detectedIntent).toBe("undecided");
  });

  it("asks a sensible follow-up for a missing field", async () => {
    const question = await provider.composeFollowUp({ brief: emptyBrief(), missingField: "travelMonth" });
    expect(question.toLowerCase()).toContain("month");
  });
});
