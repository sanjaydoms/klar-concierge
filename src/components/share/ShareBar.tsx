"use client";

import { useState } from "react";

/**
 * Share actions for plans and comparisons: WhatsApp (the family decision
 * channel), copy-link, and print-to-PDF. `path` is app-relative; the absolute
 * URL is built from the visitor's own origin so links always match the
 * deployment they came from.
 */
export function ShareBar({ path, message }: { path: string; message: string }) {
  const [copied, setCopied] = useState(false);

  function absoluteUrl(): string {
    return `${window.location.origin}${path}`;
  }

  return (
    <div className="mt-6 flex flex-wrap items-center gap-2 print:hidden" aria-label="Share this plan">
      <a
        className="btn-secondary text-sm"
        href="#share-whatsapp"
        onClick={(e) => {
          e.preventDefault();
          window.open(
            `https://wa.me/?text=${encodeURIComponent(`${message}\n${absoluteUrl()}`)}`,
            "_blank",
            "noopener,noreferrer",
          );
        }}
      >
        Share on WhatsApp
      </a>
      <button
        type="button"
        className="btn-secondary text-sm"
        onClick={() => {
          void navigator.clipboard
            .writeText(absoluteUrl())
            .then(() => {
              setCopied(true);
              setTimeout(() => setCopied(false), 2000);
            })
            .catch(() => window.prompt("Copy this link:", absoluteUrl()));
        }}
      >
        {copied ? "Link copied ✓" : "Copy link"}
      </button>
      <button type="button" className="btn-secondary text-sm" onClick={() => window.print()}>
        Download PDF
      </button>
    </div>
  );
}
