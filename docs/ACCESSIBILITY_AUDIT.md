# Accessibility Audit

## Implemented
- Semantic landmarks and heading order on every page
- Labels tied to every form control; error messages linked via
  aria-describedby with aria-invalid
- aria-live="polite" conversation log; aria-current on the stage indicator
- aria-pressed on chip toggles; aria-expanded on "Why this?" disclosures
- Visible :focus-visible outline globally; keyboard-only flow e2e-tested
- 44px minimum touch targets (buttons, chips, inputs)
- prefers-reduced-motion disables animations/smooth-scroll
- Colour never carries meaning alone (✓ markers accompany green wins)
- Brand palette meets WCAG AA contrast for text on its surfaces

## Verified
Keyboard reachability and focus visibility are part of the Playwright suite
(desktop + 320px). No custom controls without native equivalents exist.

## Outstanding (honest)
Full screen-reader walkthrough (NVDA/VoiceOver) and a formal WCAG 2.2 AA
certification pass have not been performed — tracked in KNOWN_LIMITATIONS.md.
