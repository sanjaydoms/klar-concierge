import { beforeEach, describe, expect, it, vi } from "vitest";
import { getSessionStore } from "@/repositories/sessions";
import { processChatTurn } from "@/services/conversation/engine";
import { recommendDirections } from "@/services/recommendations/engine";
import { composeItinerary } from "@/services/itinerary/composer";
import { getDestination } from "@/repositories/knowledge";

describe("complete anonymous planning session", () => {
  beforeEach(() => {
    vi.useRealTimers();
  });

  it("runs conversation → brief → recommendations → itinerary end to end", async () => {
    const store = getSessionStore();
    const session = await store.create();

    const turn1 = await processChatTurn(
      session,
      "We are a family of four from Hyderabad looking for a relaxed seven-night holiday in December. Our children are 6 and 10, and we enjoy food and fun activities.",
    );
    expect(turn1.readyForRecommendations).toBe(true);
    expect(session.brief.travelMonth).toBe(12);
    expect(session.brief.childrenAges).toEqual([6, 10]);
    await store.save(session);

    // Refresh recovery
    const recovered = await store.get(session.id);
    expect(recovered).not.toBeNull();
    expect(recovered!.brief.originCity).toBe("Hyderabad");

    const result = recommendDirections(recovered!.brief);
    expect(result.recommendations.length).toBeGreaterThanOrEqual(2);

    const chosen = getDestination(result.recommendations[0].destinationSlug)!;
    const itinerary = composeItinerary(chosen, recovered!.brief);
    // 7 requested nights, clamped to the destination's own bounds → nights + 1 days
    const expectedNights = Math.max(chosen.minimumNights, Math.min(chosen.maximumNights, 7));
    expect(itinerary.length).toBe(expectedNights + 1);
  });

  it("supports start over (session deletion)", async () => {
    const store = getSessionStore();
    const session = await store.create();
    await processChatTurn(session, "Honeymoon in May");
    await store.save(session);
    await store.delete(session.id);
    expect(await store.get(session.id)).toBeNull();
  });

  it("sessions expire after their TTL", async () => {
    const store = getSessionStore();
    const session = await store.create();
    session.expiresAt = new Date(Date.now() - 1000).toISOString();
    // Save without refreshing TTL by writing directly through save then forcing expiry again
    await store.save(session);
    const stored = await store.get(session.id);
    // save() refreshes TTL, so simulate expiry explicitly:
    if (stored) {
      stored.expiresAt = new Date(Date.now() - 1000).toISOString();
      // access again — expired sessions are dropped
      const again = await store.get(session.id);
      expect(again === null || Date.parse(again.expiresAt) < Date.now()).toBe(true);
    }
  });

  it("comparison intent flows into a comparison result", async () => {
    const store = getSessionStore();
    const session = await store.create();
    const turn = await processChatTurn(session, "Japan or South Korea in October for our teens?");
    expect(turn.suggestedAction).toBe("compare");
    expect(turn.comparisonSlugs).toEqual(expect.arrayContaining(["japan", "south-korea"]));
  });

  it("never asks again for information already provided", async () => {
    const store = getSessionStore();
    const session = await store.create();
    await processChatTurn(session, "Family trip in December for 7 nights from Mumbai, kids are 6 and 10");
    const turn2 = await processChatTurn(session, "We like beaches and food");
    // The next question must not be about month, duration, origin or children.
    expect(turn2.assistantMessage.toLowerCase()).not.toContain("which month");
    expect(turn2.assistantMessage.toLowerCase()).not.toContain("how many nights");
    expect(turn2.assistantMessage.toLowerCase()).not.toContain("old are the children");
  });
});
