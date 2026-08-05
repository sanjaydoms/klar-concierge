import type { Metadata } from "next";
import { getEligibleDestinations } from "@/repositories/knowledge";
import { CompareTool } from "@/components/comparison/CompareTool";

export const metadata: Metadata = {
  title: "Compare Destinations",
  description:
    "Compare two or three destinations side by side — season, family fit, food, flight fatigue and honest trade-offs.",
};

export default function ComparePage() {
  const options = getEligibleDestinations()
    .map((d) => ({ slug: d.slug, name: d.name, country: d.countryName }))
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="mx-auto max-w-content px-4 py-14 sm:px-6">
      <h1 className="text-3xl font-bold text-brand">Compare destinations</h1>
      <p className="mt-3 max-w-2xl text-foreground/70">
        Torn between two places? Pick up to three destinations and a month, and Klar&rsquo;s
        intelligence will call it honestly — dimension by dimension.
      </p>
      <div className="mt-8">
        <CompareTool options={options} />
      </div>
    </div>
  );
}
