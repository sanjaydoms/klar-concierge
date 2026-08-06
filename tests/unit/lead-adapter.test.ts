import { describe, expect, it } from "vitest";
import { getLeadAdapter, planReference, PlaceholderLeadAdapter } from "@/services/leads/adapter";
import { composeItinerary } from "@/services/itinerary/composer";
import { getDestination } from "@/repositories/knowledge";
import { emptyBrief } from "@/types/brief";

describe("lead capture adapter (CRM placeholder)", () => {
  it("issues a stable, human-friendly plan reference per session", async () => {
    const adapter = new PlaceholderLeadAdapter();
    const a = await adapter.capture({ sessionId: "11111111-1111-4111-8111-111111111111" });
    const b = await adapter.capture({ sessionId: "11111111-1111-4111-8111-111111111111" });
    const c = await adapter.capture({ sessionId: "22222222-2222-4222-8222-222222222222" });
    expect(a.referenceId).toBe(b.referenceId);
    expect(a.referenceId).not.toBe(c.referenceId);
    expect(a.referenceId).toMatch(/^KLAR-[A-Z0-9]{4,6}$/);
    // The placeholder is honest about not delivering to a CRM.
    expect(a.delivered).toBe(false);
  });

  it("planReference never embeds the raw session id", () => {
    const sessionId = "33333333-3333-4333-8333-333333333333";
    expect(planReference(sessionId)).not.toContain(sessionId.slice(0, 8));
  });

  it("the factory returns the placeholder until a CRM adapter exists", () => {
    expect(getLeadAdapter().id).toBe("placeholder");
  });
});

describe("itinerary refinement (change a day)", () => {
  it("excluding a day's attractions regenerates it with different picks, earlier days unchanged", () => {
    const destination = getDestination("japan")!;
    const brief = { ...emptyBrief("test"), durationNights: 7 };
    const original = composeItinerary(destination, brief);

    const targetDay = original.find((d) =>
      [...d.morning, ...d.afternoon, ...d.evening].some((b) => b.attractionId),
    )!;
    const excludeIds = [...targetDay.morning, ...targetDay.afternoon, ...targetDay.evening]
      .map((b) => b.attractionId)
      .filter((id): id is string => Boolean(id));

    const refined = composeItinerary(destination, brief, { excludeAttractionIds: excludeIds });

    // Same shape, none of the swapped-out attractions anywhere.
    expect(refined).toHaveLength(original.length);
    const refinedIds = refined
      .flatMap((d) => [...d.morning, ...d.afternoon, ...d.evening])
      .map((b) => b.attractionId)
      .filter(Boolean);
    for (const id of excludeIds) {
      expect(refinedIds).not.toContain(id);
    }
    // Days before the changed one keep their titles (deterministic prefix).
    for (const day of refined) {
      if (day.day >= targetDay.day) break;
      expect(day.title).toBe(original[day.day - 1].title);
    }
  });

  it("pace override produces a visibly more relaxed plan", () => {
    const destination = getDestination("japan")!;
    const brief = { ...emptyBrief("test"), durationNights: 7 };
    const relaxed = composeItinerary(destination, { ...brief, pace: "relaxed" as const });
    const lightDays = relaxed.filter((d) => d.pace === "light").length;
    expect(lightDays).toBeGreaterThanOrEqual(3);
  });
});
