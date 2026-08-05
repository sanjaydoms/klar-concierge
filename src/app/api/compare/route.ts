import { NextResponse } from "next/server";
import { z } from "zod";
import { compareDestinations } from "@/services/comparison/engine";
import { getSessionStore } from "@/repositories/sessions";
import { clientKey, rateLimit } from "@/lib/rateLimit";
import { config } from "@/lib/config";
import { track } from "@/services/analytics";
import type { TravelBrief } from "@/types/brief";

export const runtime = "nodejs";

const bodySchema = z.object({
  slugs: z.array(z.string().max(80)).min(2).max(3),
  sessionId: z.string().uuid().optional(),
  month: z.number().int().min(1).max(12).optional(),
  brief: z.record(z.unknown()).optional(),
});

export async function POST(request: Request) {
  const limit = rateLimit(clientKey(request, "plan"), config.rateLimitPlanPerMinute);
  if (!limit.allowed) {
    return NextResponse.json({ error: "Too many requests." }, { status: 429 });
  }

  let parsed: z.infer<typeof bodySchema>;
  try {
    parsed = bodySchema.parse(await request.json());
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  let brief: Partial<TravelBrief> | undefined = parsed.brief as Partial<TravelBrief> | undefined;
  if (parsed.sessionId) {
    const session = await getSessionStore().get(parsed.sessionId);
    if (session) brief = { ...session.brief, ...brief };
  }
  if (parsed.month) brief = { ...brief, travelMonth: parsed.month };

  await track("comparison_started", { count: parsed.slugs.length });
  const result = compareDestinations(parsed.slugs, brief);
  if ("error" in result) {
    return NextResponse.json({ error: result.error }, { status: 400 });
  }
  await track("comparison_completed");
  return NextResponse.json(result);
}
