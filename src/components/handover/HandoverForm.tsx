"use client";

import { useState } from "react";
import { loadLeadContact } from "@/lib/leadContact";

export type HandoverValues = {
  name: string;
  phone: string;
  email: string;
  city?: string;
  preferredContactChannel: "phone" | "email" | "whatsapp";
  preferredContactTime?: string;
  additionalNotes?: string;
  consent: boolean;
};

/**
 * Shown only when CRM handover is enabled. Details go straight to the Klar
 * CRM — Klar Concierge never stores them.
 */
export function HandoverForm({
  destinationName,
  busy,
  onBack,
  onSubmit,
}: {
  destinationName: string;
  busy: boolean;
  onBack: () => void;
  onSubmit: (values: HandoverValues) => void;
}) {
  // Details shared at the welcome step (stored only in this browser)
  // pre-fill the enquiry — one glance to confirm instead of retyping.
  const [values, setValues] = useState<HandoverValues>(() => {
    const saved = typeof window !== "undefined" ? loadLeadContact() : undefined;
    return {
      name: saved?.name ?? "",
      phone: saved?.phone ?? "",
      email: saved?.email ?? "",
      city: saved?.city ?? "",
      preferredContactChannel: "whatsapp",
      preferredContactTime: "",
      additionalNotes: "",
      consent: Boolean(saved?.consent),
    };
  });
  const [errors, setErrors] = useState<Partial<Record<keyof HandoverValues, string>>>({});

  function validate(): boolean {
    const next: typeof errors = {};
    if (values.name.trim().length < 2) next.name = "Please tell us your name.";
    if (!/^[+\d][\d\s-]{7,15}$/.test(values.phone.trim())) next.phone = "Please enter a valid mobile number.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) next.email = "Please enter a valid email address.";
    if (!values.consent) next.consent = "Consent is required so a Klar expert can contact you.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  return (
    <section aria-labelledby="handover-heading">
      <h1 id="handover-heading" className="text-2xl font-bold text-brand sm:text-3xl">
        Hand your {destinationName} plan to a Klar expert
      </h1>
      <p className="mt-2 text-sm text-foreground/60">
        Your plan and contact details go directly to Klar&rsquo;s travel team, who will call
        you to finalise the holiday. Klar Concierge doesn&rsquo;t keep your personal details.
      </p>

      <form
        className="mt-6 space-y-4"
        noValidate
        onSubmit={(e) => {
          e.preventDefault();
          if (validate()) onSubmit(values);
        }}
      >
        <div>
          <label className="field-label" htmlFor="ho-name">Name</label>
          <input
            id="ho-name"
            className="field-input"
            autoComplete="name"
            value={values.name}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "ho-name-error" : undefined}
            onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
          />
          {errors.name ? <p id="ho-name-error" className="mt-1 text-xs text-danger">{errors.name}</p> : null}
        </div>
        <div>
          <label className="field-label" htmlFor="ho-phone">Mobile number</label>
          <input
            id="ho-phone"
            className="field-input"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            placeholder="+91…"
            value={values.phone}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "ho-phone-error" : undefined}
            onChange={(e) => setValues((v) => ({ ...v, phone: e.target.value }))}
          />
          {errors.phone ? <p id="ho-phone-error" className="mt-1 text-xs text-danger">{errors.phone}</p> : null}
        </div>
        <div>
          <label className="field-label" htmlFor="ho-email">Email</label>
          <input
            id="ho-email"
            className="field-input"
            type="email"
            autoComplete="email"
            inputMode="email"
            value={values.email}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "ho-email-error" : undefined}
            onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
          />
          {errors.email ? <p id="ho-email-error" className="mt-1 text-xs text-danger">{errors.email}</p> : null}
        </div>
        <div>
          <label className="field-label" htmlFor="ho-city">
            City <span className="font-normal text-foreground/50">(optional)</span>
          </label>
          <input
            id="ho-city"
            className="field-input"
            autoComplete="address-level2"
            value={values.city ?? ""}
            onChange={(e) => setValues((v) => ({ ...v, city: e.target.value }))}
          />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="field-label" htmlFor="ho-channel">How should Klar contact you?</label>
            <select
              id="ho-channel"
              className="field-input"
              value={values.preferredContactChannel}
              onChange={(e) =>
                setValues((v) => ({
                  ...v,
                  preferredContactChannel: e.target.value as HandoverValues["preferredContactChannel"],
                }))
              }
            >
              <option value="whatsapp">WhatsApp</option>
              <option value="phone">Phone call</option>
              <option value="email">Email</option>
            </select>
          </div>
          <div>
            <label className="field-label" htmlFor="ho-time">Best time to reach you</label>
            <input
              id="ho-time"
              className="field-input"
              placeholder="e.g. weekday evenings"
              value={values.preferredContactTime}
              onChange={(e) => setValues((v) => ({ ...v, preferredContactTime: e.target.value }))}
            />
          </div>
        </div>
        <div>
          <label className="field-label" htmlFor="ho-notes">Anything else Klar should know?</label>
          <textarea
            id="ho-notes"
            className="field-input"
            rows={3}
            value={values.additionalNotes}
            onChange={(e) => setValues((v) => ({ ...v, additionalNotes: e.target.value }))}
          />
        </div>

        <div className="rounded-lg bg-surface-muted p-4">
          <label className="flex items-start gap-3 text-sm">
            <input
              type="checkbox"
              className="mt-0.5 h-5 w-5 rounded border-line"
              checked={values.consent}
              aria-invalid={Boolean(errors.consent)}
              aria-describedby={errors.consent ? "ho-consent-error" : undefined}
              onChange={(e) => setValues((v) => ({ ...v, consent: e.target.checked }))}
            />
            <span>
              I agree that my plan and contact details are sent to Klar Travels so a travel
              expert can contact me about this enquiry. See the{" "}
              <a href="/privacy" className="text-brand underline" target="_blank">privacy note</a>.
            </span>
          </label>
          {errors.consent ? (
            <p id="ho-consent-error" className="mt-2 text-xs text-danger">{errors.consent}</p>
          ) : null}
        </div>

        <div className="flex flex-wrap gap-3">
          <button type="button" className="btn-secondary" onClick={onBack} disabled={busy}>
            ← Back to itinerary
          </button>
          <button type="submit" className="btn-primary" disabled={busy}>
            {busy ? "Sending to Klar…" : "Send My Plan to Klar"}
          </button>
        </div>
      </form>
    </section>
  );
}
