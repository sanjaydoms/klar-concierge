import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How Klar Travels handles the information you share with Klar Concierge.",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <h1 className="text-3xl font-bold text-brand">Privacy</h1>
      <div className="mt-6 space-y-5 text-sm leading-relaxed text-foreground/75">
        <p>
          Klar Concierge is built to know as little about you as possible while still being
          genuinely useful.
        </p>
        <p>
          <strong className="text-brand">While you plan:</strong> your conversation and trip
          preferences live in an anonymous, temporary planning session with a strict expiry
          (about two hours of inactivity). Sessions never contain your name, phone number or
          email. You can delete your session at any time with &ldquo;Start over.&rdquo;
        </p>
        <p>
          <strong className="text-brand">If you hand over to a Klar expert:</strong> with your
          explicit consent, your plan and contact details are sent directly to Klar
          Travels&rsquo; customer system, which owns the relationship from that point. After a
          successful handover, Klar Concierge deletes your planning session — this
          application keeps no copy of your personal details.
        </p>
        <p>
          <strong className="text-brand">Analytics:</strong> we count anonymous product steps
          like &ldquo;plan started&rdquo; or &ldquo;comparison completed&rdquo; — never names,
          contact details, conversation content, dietary needs or accessibility information.
        </p>
        <p>
          We never ask for passport, payment or government-ID details anywhere in Klar
          Concierge.
        </p>
        <p>
          Questions or deletion requests relating to an enquiry already with Klar&rsquo;s
          team: contact Klar Travels directly.
        </p>
      </div>
    </div>
  );
}
