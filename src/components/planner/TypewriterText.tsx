"use client";

import { useEffect, useState } from "react";

/**
 * Progressive reveal for assistant replies — the same text, delivered with
 * life. Screen readers get the complete text immediately (the animation is
 * aria-hidden), and prefers-reduced-motion users see it instantly.
 */
export function TypewriterText({ content }: { content: string }) {
  const [shown, setShown] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(content.length);
      return;
    }
    setShown(0);
    const step = Math.max(2, Math.round(content.length / 45));
    const id = window.setInterval(() => {
      setShown((n) => {
        if (n + step >= content.length) {
          window.clearInterval(id);
          return content.length;
        }
        return n + step;
      });
    }, 24);
    return () => window.clearInterval(id);
  }, [content]);

  return (
    <>
      <span className="sr-only">{content}</span>
      <span aria-hidden>{content.slice(0, shown)}</span>
    </>
  );
}
