import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "How Klar Concierge turns a conversation into a holiday decision — with honest trade-offs and optional Klar expert handover.",
};

const STAGES = [
  {
    title: "1. Tell us about your holiday",
    copy: "Start with anything — a destination, a month, a feeling, or 'Japan or Korea?'. Klar Concierge asks one useful question at a time and never repeats what you've already said.",
  },
  {
    title: "2. Confirm your trip brief",
    copy: "Your preferences become a clear, editable summary. Change anything before recommendations.",
  },
  {
    title: "3. Compare honest directions",
    copy: "Klar's destination intelligence proposes up to three directions — Best Match, Best for Your Taste, Something Special — each with reasons, a trade-off and a confidence level. If only two options are genuinely strong, we say so instead of padding the list.",
  },
  {
    title: "4. Shape the itinerary",
    copy: "See a practical morning-afternoon-evening plan grounded in real attractions, with weather alternatives and notes for children, seniors and accessibility.",
  },
  {
    title: "5. Optional Klar expert handover",
    copy: "When you're ready, send the complete plan to Klar's travel team with your consent. They verify visas and operational details, and handle every commercial arrangement. Until then, nothing personal leaves your session.",
  },
];

export default function HowItWorksPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <h1 className="text-3xl font-bold text-brand">How Klar Concierge works</h1>
      <p className="mt-3 text-foreground/70">
        A calm, guided way to decide — grounded in Klar&rsquo;s travel intelligence.
      </p>
      <ol className="mt-10 space-y-6">
        {STAGES.map((s) => (
          <li key={s.title} className="card">
            <h2 className="font-semibold text-brand">{s.title}</h2>
            <p className="mt-2 text-sm text-foreground/70">{s.copy}</p>
          </li>
        ))}
      </ol>
      <div className="mt-10 rounded-2xl bg-surface-muted p-6">
        <h2 className="font-semibold text-brand">What Klar Concierge is not</h2>
        <p className="mt-2 text-sm text-foreground/70">
          It doesn&rsquo;t show live prices, availability or bookings, and it never guesses
          visa rules — dynamic facts are verified by Klar&rsquo;s team or official sources.
          It prepares a decision; Klar&rsquo;s people handle the rest.
        </p>
      </div>
      <div className="mt-10">
        <Link href="/concierge" className="btn-primary">Plan My Holiday</Link>
      </div>
    </div>
  );
}
