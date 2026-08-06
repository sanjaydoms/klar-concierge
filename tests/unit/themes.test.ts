import { describe, expect, it } from "vitest";
import { bestMonthsForTheme, getTheme, THEMES, topDestinationsForTheme } from "@/services/ktie/themes";
import { startWithTheme } from "@/services/conversation/engine";
import { getSessionStore } from "@/repositories/sessions";

describe("holiday themes (discovery layer)", () => {
  it("covers the blueprint's twelve themes, data-driven", () => {
    expect(THEMES).toHaveLength(12);
    for (const key of ["romance", "family", "luxury", "adventure", "beach", "nature", "wellness", "cruises", "snow", "food", "culture", "wildlife"]) {
      expect(getTheme(key), key).toBeDefined();
    }
  });

  it("every theme has an opening question, intro and at least 3 FAQs", () => {
    for (const t of THEMES) {
      expect(t.openingQuestion.length, t.key).toBeGreaterThan(20);
      expect(t.openingQuestion, t.key).toContain("?");
      expect(t.intro.length, t.key).toBeGreaterThan(80);
      expect(t.faq.length, t.key).toBeGreaterThanOrEqual(3);
    }
  });

  it("ranks destinations from KTIE scores — themes surface what they promise", () => {
    const beach = topDestinationsForTheme(getTheme("beach")!).map((d) => d.slug);
    expect(beach.length).toBe(6);
    // Beach list must contain destinations with genuinely top beach scores
    expect(beach.some((s) => ["maldives", "seychelles", "mauritius", "andaman-islands", "goa", "phuket", "langkawi", "krabi", "bali", "zanzibar"].includes(s))).toBe(true);
    const snow = topDestinationsForTheme(getTheme("snow")!).map((d) => d.slug);
    expect(snow.some((s) => ["switzerland", "himachal-pradesh", "kashmir", "austria", "iceland", "norway", "japan", "almaty", "canada"].includes(s))).toBe(true);
  });

  it("computes best months deterministically for every theme", () => {
    for (const t of THEMES) {
      const months = bestMonthsForTheme(t);
      expect(months, t.key).toHaveLength(3);
    }
  });

  it("starting with a theme seeds the brief and asks the tailored question", async () => {
    const session = await getSessionStore().create();
    const result = startWithTheme(session, "family");
    expect(result).toBeDefined();
    expect(session.brief.travellerType).toBe("family");
    expect(result!.assistantMessage.toLowerCase()).toContain("how old are the children");
  });

  it("cruises theme is honestly expert-led and records the interest", async () => {
    const theme = getTheme("cruises")!;
    expect(theme.expertLed).toBe(true);
    const session = await getSessionStore().create();
    startWithTheme(session, "cruises");
    expect(session.brief.decisionPriorities).toContain("cruise");
  });

  it("rejects unknown themes", async () => {
    const session = await getSessionStore().create();
    expect(startWithTheme(session, "time-travel")).toBeUndefined();
  });
});
