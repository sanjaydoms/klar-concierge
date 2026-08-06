import { describe, expect, it } from "vitest";
import { extractBriefPatch } from "@/services/ai/fallbackExtractor";
import { recommendDirections } from "@/services/recommendations/engine";
import { getAllDestinations, getDestination } from "@/repositories/knowledge";
import { emptyBrief } from "@/types/brief";
import { processChatTurn } from "@/services/conversation/engine";
import { getSessionStore } from "@/repositories/sessions";

describe("domestic India understanding", () => {
  it("has a real domestic knowledge pack", () => {
    const indian = getAllDestinations().filter((d) => d.countryIso2 === "IN");
    expect(indian.length).toBeGreaterThanOrEqual(8);
    expect(getDestination("goa")).toBeDefined();
    expect(getDestination("kerala")).toBeDefined();
  });

  it('extracts domestic scope from natural phrasings', () => {
    expect(extractBriefPatch("suggest some domestic tours").travelScope).toBe("domestic");
    expect(extractBriefPatch("we want a holiday in India").travelScope).toBe("domestic");
    expect(extractBriefPatch("somewhere within India in December").travelScope).toBe("domestic");
    expect(extractBriefPatch("we want to go abroad this time").travelScope).toBe("international");
    // "from India" is an origin statement, not a domestic wish
    expect(extractBriefPatch("travelling from India to Bali").travelScope).toBeUndefined();
  });

  it('reads "holiday in Goa" as a destination wish, not a departure city', () => {
    const patch = extractBriefPatch("We want a relaxed holiday in Goa for 4 nights");
    expect(patch.originCity).toBeUndefined();
    expect(patch.destinationPreferences).toContain("goa");
  });

  it('still extracts origin from "from Mumbai" phrasing', () => {
    const patch = extractBriefPatch("Family of four from Mumbai, thinking of Goa");
    expect(patch.originCity).toBe("Mumbai");
    expect(patch.destinationPreferences).toContain("goa");
  });

  it("recommends only Indian destinations when scope is domestic", () => {
    const result = recommendDirections({
      ...emptyBrief(""),
      travelScope: "domestic",
      travelMonth: 12,
      durationNights: 5,
      travellerType: "family",
    });
    expect(result.recommendations.length).toBeGreaterThan(0);
    for (const rec of result.recommendations) {
      expect(getDestination(rec.destinationSlug)?.countryIso2, rec.destinationSlug).toBe("IN");
    }
  });

  it("recommends no Indian destinations when scope is international", () => {
    const result = recommendDirections({
      ...emptyBrief(""),
      travelScope: "international",
      travelMonth: 12,
      durationNights: 7,
      travellerType: "couple",
    });
    expect(result.recommendations.length).toBeGreaterThan(0);
    for (const rec of result.recommendations) {
      expect(getDestination(rec.destinationSlug)?.countryIso2, rec.destinationSlug).not.toBe("IN");
    }
  });

  it("acknowledges a domestic ask in conversation", async () => {
    const session = await getSessionStore().create();
    const turn = await processChatTurn(
      session,
      "Suggest domestic tours for a family, 5 nights in December, we love beaches",
    );
    expect(session.brief.travelScope).toBe("domestic");
    expect(turn.assistantMessage).toContain("within India");
  });
});
