import type { Metadata } from "next";
import { Planner } from "@/components/planner/Planner";
import { THEMES } from "@/services/ktie/themes";

export const metadata: Metadata = {
  title: "Klar Concierge",
  description: "Plan your holiday with Klar Travels' AI concierge.",
  robots: { index: false }, // the embed shell is for the portal iframe, not search
};

/**
 * Chat-box embed for klartravels.com. No header, footer or page chrome —
 * just the planner, sized to fill whatever iframe the portal gives it.
 * Embed with:
 *   <iframe src="https://<host>/embed" title="Klar Concierge" style="width:100%;height:100%;border:0"></iframe>
 */
const themeChips = THEMES.map((t) => ({ key: t.key, label: t.label, emoji: t.emoji, tagline: t.tagline }));

export default function EmbedPage() {
  return (
    <div className="mx-auto max-w-3xl px-3 py-4 sm:px-5">
      <Planner themes={themeChips} />
    </div>
  );
}
