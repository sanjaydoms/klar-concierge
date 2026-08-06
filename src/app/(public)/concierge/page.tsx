import type { Metadata } from "next";
import { Planner } from "@/components/planner/Planner";
import { THEMES } from "@/services/ktie/themes";

export const metadata: Metadata = {
  title: "Plan a Holiday",
  description:
    "Tell Klar about the holiday you have in mind and receive three personalised destination directions with a draft itinerary.",
};

const themeChips = THEMES.map((t) => ({ key: t.key, label: t.label, emoji: t.emoji, tagline: t.tagline }));

export default function ConciergePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12">
      <Planner themes={themeChips} />
    </div>
  );
}
