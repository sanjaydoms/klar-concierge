import { config } from "@/lib/config";
import { getAllDestinations, knowledgeGeneratedAt } from "@/repositories/knowledge";
import { THEMES } from "@/services/ktie/themes";

export const dynamic = "force-static";

/**
 * llms.txt — a machine-readable index of this site for AI assistants and
 * crawlers (https://llmstxt.org). Generated from the same Git-managed
 * knowledge the planner uses, so it never claims more than we know.
 */
export function GET(): Response {
  const base = config.appUrl.replace(/\/$/, "");
  const destinations = getAllDestinations();

  const byRegion = new Map<string, typeof destinations>();
  for (const d of destinations) {
    const list = byRegion.get(d.region) ?? [];
    list.push(d);
    byRegion.set(d.region, list);
  }

  const lines: string[] = [
    "# Klar Concierge — Klar Travels Destination Intelligence",
    "",
    "> AI holiday-planning concierge by Klar Travels (klartravels.com). " +
      `Human-reviewed destination intelligence for ${destinations.length} destinations: ` +
      "month-by-month seasons, attractions, food practicality for Indian travellers, " +
      "and honest trade-offs. Recommendations are deterministic and evidence-gated — " +
      "never invented. Prices, availability, visas and bookings are handled by Klar " +
      "Travels' human experts, not this site.",
    "",
    `Knowledge snapshot: ${knowledgeGeneratedAt()}`,
    "",
    "## Core pages",
    "",
    `- [Plan a holiday](${base}/concierge): conversational planner`,
    `- [Destination encyclopedia](${base}/destinations): all destination guides`,
    `- [Discover collections](${base}/concierge/discover): seasonal and traveller-type ideas`,
    `- [Compare destinations](${base}/concierge/compare): deterministic side-by-side comparison`,
    `- [How it works](${base}/concierge/how-it-works): scope and honesty rules`,
    "",
    "## Holiday types",
    "",
    ...THEMES.map((t) => `- [${t.label} holidays](${base}/holidays/${t.key}): ${t.tagline}`),
    "",
    "## Destination guides",
    "",
  ];

  for (const [region, list] of [...byRegion.entries()].sort((a, b) => a[0].localeCompare(b[0]))) {
    lines.push(`### ${region}`, "");
    for (const d of [...list].sort((a, b) => a.name.localeCompare(b.name))) {
      lines.push(`- [${d.name}](${base}/destinations/${d.slug}): ${d.positioningLine}`);
    }
    lines.push("");
  }

  lines.push(
    "## Honesty contract",
    "",
    "- Every fact on this site comes from Klar's reviewed knowledge base with named sources and review dates.",
    "- Visa rules, entry requirements, prices and availability are deliberately absent — they change too fast to publish.",
    "- If Klar doesn't know a destination deeply enough, it says so instead of guessing.",
    "",
  );

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
