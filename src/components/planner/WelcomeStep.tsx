"use client";

import { useState } from "react";
import type { ThemeChip } from "./Planner";
import { markWelcomeSkipped, saveLeadContact } from "@/lib/leadContact";

/**
 * The trust-based onboarding step: choose a theme (planning, not a form),
 * then politely share contact details, then straight into the existing
 * conversation. No modals, no popups — one continuous experience. A quiet
 * skip link keeps consent genuinely voluntary.
 */
export function WelcomeStep({
  themes,
  initialTheme,
  onStart,
  onSkip,
}: {
  themes: ThemeChip[];
  /** Pre-selected theme from /concierge?theme=… deep links. */
  initialTheme?: ThemeChip;
  onStart: (theme: ThemeChip) => void;
  onSkip: () => void;
}) {
  const [theme, setTheme] = useState<ThemeChip | null>(initialTheme ?? null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function skip() {
    markWelcomeSkipped();
    onSkip();
  }

  function start() {
    const next: Record<string, string> = {};
    if (name.trim().length < 2) next.name = "Please tell us your name.";
    if (!/^[+\d][\d\s-]{7,15}$/.test(phone.trim())) next.phone = "Please enter a valid mobile number.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) next.email = "Please enter a valid email address.";
    if (!consent) next.consent = "Please confirm so we can contact you about this enquiry.";
    setErrors(next);
    if (Object.keys(next).length > 0 || !theme) return;
    saveLeadContact({
      name: name.trim(),
      phone: phone.trim(),
      email: email.trim(),
      city: city.trim() || undefined,
      consent: true,
      themeKey: theme.key,
      capturedAt: new Date().toISOString(),
    });
    onStart(theme);
  }

  return (
    <section aria-labelledby="welcome-heading">
      <h1 id="welcome-heading" className="text-2xl font-bold text-brand sm:text-3xl">
        Let&rsquo;s Plan Your Perfect Holiday
      </h1>
      <p className="mt-2 text-sm text-foreground/60">
        Tell us a little about yourself and we&rsquo;ll create a personalised holiday plan in
        under two minutes.
      </p>

      {theme === null ? (
        <fieldset className="mt-6">
          <legend className="text-sm font-medium text-foreground/70">
            First — what kind of holiday is calling you?
          </legend>
          <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
            {themes.map((t) => (
              <button
                key={t.key}
                type="button"
                className="rounded-xl border border-line bg-surface px-3 py-2.5 text-left transition hover:border-brand hover:bg-brand-soft"
                onClick={() => setTheme(t)}
              >
                <span className="block text-lg" aria-hidden>{t.emoji}</span>
                <span className="block text-sm font-semibold text-brand">{t.label}</span>
                <span className="mt-0.5 block text-xs leading-snug text-foreground/55">{t.tagline}</span>
              </button>
            ))}
          </div>
        </fieldset>
      ) : (
        <div className="mt-6">
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-brand-soft px-3 py-1 text-sm font-medium text-brand">
              {theme.emoji} {theme.label} holiday
            </span>
            <button type="button" className="text-xs text-foreground/55 underline-offset-2 hover:underline" onClick={() => setTheme(null)}>
              change
            </button>
          </div>

          <h2 className="mt-5 text-lg font-semibold text-brand">
            Tell us where to send your personalised holiday plan
          </h2>
          <p className="mt-1 text-sm text-foreground/60">
            We&rsquo;ll save your personalised holiday plan and use these details only to send
            your travel recommendations and assist with this enquiry.
          </p>

          <form
            className="mt-4 grid gap-4 sm:grid-cols-2"
            noValidate
            onSubmit={(e) => {
              e.preventDefault();
              start();
            }}
          >
            <div>
              <label className="field-label" htmlFor="wl-name">Full name</label>
              <input id="wl-name" className="field-input" autoComplete="name" value={name}
                aria-invalid={Boolean(errors.name)} onChange={(e) => setName(e.target.value)} />
              {errors.name ? <p className="mt-1 text-xs text-danger">{errors.name}</p> : null}
            </div>
            <div>
              <label className="field-label" htmlFor="wl-phone">Mobile number</label>
              <input id="wl-phone" className="field-input" type="tel" inputMode="tel" autoComplete="tel"
                placeholder="+91…" value={phone} aria-invalid={Boolean(errors.phone)}
                onChange={(e) => setPhone(e.target.value)} />
              {errors.phone ? <p className="mt-1 text-xs text-danger">{errors.phone}</p> : null}
            </div>
            <div>
              <label className="field-label" htmlFor="wl-email">Email address</label>
              <input id="wl-email" className="field-input" type="email" inputMode="email" autoComplete="email"
                value={email} aria-invalid={Boolean(errors.email)} onChange={(e) => setEmail(e.target.value)} />
              {errors.email ? <p className="mt-1 text-xs text-danger">{errors.email}</p> : null}
            </div>
            <div>
              <label className="field-label" htmlFor="wl-city">City <span className="font-normal text-foreground/50">(optional)</span></label>
              <input id="wl-city" className="field-input" autoComplete="address-level2" value={city}
                onChange={(e) => setCity(e.target.value)} />
            </div>

            <div className="sm:col-span-2">
              <label className="flex items-start gap-3 text-sm">
                <input type="checkbox" className="mt-0.5 h-5 w-5 rounded border-line" checked={consent}
                  aria-invalid={Boolean(errors.consent)} onChange={(e) => setConsent(e.target.checked)} />
                <span>I agree to be contacted by Klar regarding this holiday enquiry.</span>
              </label>
              {errors.consent ? <p className="mt-1 text-xs text-danger">{errors.consent}</p> : null}
            </div>

            <div className="sm:col-span-2">
              <button type="submit" className="btn-primary w-full sm:w-auto">
                Start Planning
              </button>
            </div>
          </form>

          <ul className="mt-5 space-y-1 text-xs text-foreground/55">
            <li>✓ Personalised holiday recommendations</li>
            <li>✓ No spam. Only updates about this enquiry.</li>
            <li>✓ Your information is never sold or shared.</li>
          </ul>
        </div>
      )}

      <p className="mt-6 text-xs text-foreground/45">
        <button type="button" className="underline-offset-2 hover:underline" onClick={skip}>
          Continue without sharing details
        </button>
      </p>
    </section>
  );
}
