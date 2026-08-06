import { NextResponse } from "next/server";
import { z } from "zod";
import { recommendDirections } from "@/services/recommendations/engine";
import { composeItinerary } from "@/services/itinerary/composer";
import { getDestination } from "@/repositories/knowledge";
import { destinationEligibility } from "@/services/ktie/eligibility";
import { getAttractions } from "@/repositories/knowledge";
import { getSessionStore } from "@/repositories/sessions";
import { clientKey, rateLimit } from "@/lib/rateLimit";
import { config } from "@/lib/config";
import { track } from "@/services/analytics";

export const runtime = "nodejs";

const bodySchema = z.object({
  sessionId: z.string().uuid(),
  destinationSlug: z.string().max(80).optional(),
  /** Lightweight itinerary refinement — the only three edits travellers need. */
  refine: z
    .object({
      pace: z.enum(["relaxed", "active"]).optional(),
      changeDay: z.number().int().min(1).max(60).optional(),
    })
    .optional(),
});

/**
 * Without destinationSlug → three differentiated directions (or an honest
 * shorter list). With destinationSlug → attraction-grounded draft itinerary,
 * and the selection is recorded on the session.
 */
export async function POST(request: Request) {
  const limit = rateLimit(clientKey(request, "plan"), config.rateLimitPlanPerMinute);
  if (!limit.allowed) {
    return NextResponse.json(
      { error: "Too many requests. Please wait a moment." },
      { status: 429, headers: { "Retry-After": String(limit.retryAfterSeconds) } },
    );
  }

  let parsed: z.infer<typeof bodySchema>;
  try {
    parsed = bodySchema.parse(await request.json());
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const store = getSessionStore();
  const session = await store.get(parsed.sessionId);
  if (!session) {
    return NextResponse.json(
      { error: "Session expired. Start a new plan — it only takes a minute." },
      { status: 410 },
    );
  }

  try {
    if (parsed.destinationSlug) {
      const destination = getDestination(parsed.destinationSlug);
      if (!destination) {
        return NextResponse.json({ error: "Unknown destination." }, { status: 404 });
      }
      const eligibility = destinationEligibility(destination, getAttractions(destination.slug));
      if (!eligibility.eligible) {
        return NextResponse.json(
          { error: "This destination isn't ready for recommendations yet." },
          { status: 422 },
        );
      }

      // Refinements accumulate on the session; choosing a new destination
      // starts clean.
      if (session.selectedDestinationSlug !== destination.slug) {
        session.itineraryExclusions = [];
      }
      if (parsed.refine?.pace) {
        session.brief.pace = parsed.refine.pace;
      }
      if (parsed.refine?.changeDay) {
        const current = composeItinerary(destination, session.brief, {
          excludeAttractionIds: session.itineraryExclusions,
        });
        const day = current.find((d) => d.day === parsed.refine!.changeDay);
        const swappedOut = day
          ? [...day.morning, ...day.afternoon, ...day.evening]
              .map((b) => b.attractionId)
              .filter((id): id is string => Boolean(id))
          : [];
        session.itineraryExclusions = [
          ...(session.itineraryExclusions ?? []),
          ...swappedOut,
        ];
      }

      const itinerary = composeItinerary(destination, session.brief, {
        excludeAttractionIds: session.itineraryExclusions,
      });
      session.selectedDestinationSlug = destination.slug;
      await store.save(session);
      await track("recommendation_selected", { destination: destination.slug });
      await track("itinerary_viewed", { destination: destination.slug });
      return NextResponse.json({ itinerary, destinationName: destination.name });
    }

    const result = recommendDirections(session.brief);
    await track("recommendations_viewed", { count: result.recommendations.length });
    return NextResponse.json(result);
  } catch {
    return NextResponse.json(
      { error: "We couldn't prepare your plan just now. Please try again." },
      { status: 500 },
    );
  }
}
