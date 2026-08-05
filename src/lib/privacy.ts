/** PII redaction helpers — used before any telemetry or logging. */

export function maskEmail(email: string): string {
  const [local, domain] = email.split("@");
  if (!domain) return "***";
  return `${local.slice(0, 1)}***@${domain.slice(0, 1)}***`;
}

export function maskPhone(phone: string): string {
  return phone.length <= 2 ? "**" : `${"*".repeat(Math.max(0, phone.length - 2))}${phone.slice(-2)}`;
}

/** Strip customer PII from any error/telemetry object before recording. */
export function redactForTelemetry(input: Record<string, unknown>): Record<string, unknown> {
  const PII_KEYS = ["name", "phone", "email", "customer", "additionalNotes", "preferredContactTime"];
  const out: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(input)) {
    if (PII_KEYS.some((k) => key.toLowerCase().includes(k.toLowerCase()))) continue;
    if (value && typeof value === "object" && !Array.isArray(value)) {
      out[key] = redactForTelemetry(value as Record<string, unknown>);
    } else {
      out[key] = value;
    }
  }
  return out;
}
