/**
 * In-memory fixed-window rate limiter.
 *
 * Phase 1 note: on serverless platforms each instance keeps its own window, so
 * this is a soft limit. Swap the store for Redis/Upstash before scaling out.
 */
type Window = { count: number; resetAt: number };

const windows = new Map<string, Window>();

// Memory bound: expired windows are swept opportunistically so a scanner
// cycling spoofed keys cannot grow the map without limit.
const MAX_WINDOWS = 50_000;

function sweep(now: number) {
  for (const [key, w] of windows) {
    if (w.resetAt <= now) windows.delete(key);
  }
}

export function rateLimit(
  key: string,
  limitPerMinute: number,
): { allowed: boolean; retryAfterSeconds: number } {
  const now = Date.now();
  if (windows.size > MAX_WINDOWS) sweep(now);
  const current = windows.get(key);
  if (!current || current.resetAt <= now) {
    windows.set(key, { count: 1, resetAt: now + 60_000 });
    return { allowed: true, retryAfterSeconds: 0 };
  }
  if (current.count >= limitPerMinute) {
    return { allowed: false, retryAfterSeconds: Math.ceil((current.resetAt - now) / 1000) };
  }
  current.count += 1;
  return { allowed: true, retryAfterSeconds: 0 };
}

export function clientKey(request: Request, scope: string): string {
  // Prefer the platform-set client IP (Vercel sets x-real-ip and sanitises
  // x-forwarded-for at its edge). The first XFF entry is the fallback.
  const real = request.headers.get("x-real-ip");
  const forwarded = request.headers.get("x-forwarded-for");
  const ip = real?.trim() || (forwarded ? forwarded.split(",")[0].trim() : "local");
  return `${scope}:${ip}`;
}
