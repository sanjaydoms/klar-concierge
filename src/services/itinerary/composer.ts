import type { TravelBrief } from "@/types/brief";
import type { AttractionIntelligence, DestinationIntelligence } from "@/types/knowledge";
import type { ItineraryBlock, ItineraryDay } from "@/types/recommendation";
import { getAttractions } from "@/repositories/knowledge";

function dayPace(
  briefPace: TravelBrief["pace"],
  dayIndex: number,
  totalDays: number,
): ItineraryDay["pace"] {
  if (briefPace === "relaxed") return dayIndex % 3 === 2 ? "balanced" : "light";
  if (briefPace === "active") return dayIndex % 4 === 3 ? "balanced" : "active";
  if (dayIndex === 0 || dayIndex === totalDays - 1) return "light";
  return dayIndex % 3 === 0 ? "light" : "balanced";
}

function toBlock(a: AttractionIntelligence, optional = false): ItineraryBlock {
  return {
    title: a.name,
    description: a.summary,
    category: a.category,
    optional,
    attractionId: a.id,
  };
}

function suitableFor(a: AttractionIntelligence, brief: TravelBrief): boolean {
  const hasToddler = brief.childrenAges.some((c) => c <= 4);
  const seniors = brief.seniorTravellers > 0 || brief.travellerType === "senior";
  const accessibility = brief.accessibilityNeeds.length > 0;

  if (a.minimumAge && brief.childrenAges.some((c) => c < a.minimumAge!)) return false;
  if (hasToddler && a.physicalIntensity === "high") return false;
  if (seniors && a.physicalIntensity === "high" && a.category !== "experience") return false;
  if (accessibility && a.physicalIntensity === "high") return false;
  if (a.unsuitableFor.some((u) => {
    const t = u.toLowerCase();
    if (accessibility && (t.includes("mobility") || t.includes("wheelchair"))) return true;
    if (hasToddler && t.includes("toddler")) return true;
    return false;
  })) return false;
  return true;
}

function interestRank(a: AttractionIntelligence, brief: TravelBrief): number {
  let rank = 0;
  const map: Record<string, string[]> = {
    beach: ["beach"], food: ["food"], culture: ["culture", "religious", "museum"],
    history: ["culture", "museum", "landmark"], nature: ["nature"], adventure: ["adventure"],
    shopping: ["shopping"], themeparks: ["theme-park"], relaxation: ["wellness", "beach"],
    nightlife: ["nightlife"], wildlife: ["nature"], romance: ["experience", "beach"],
  };
  for (const interest of brief.interests) {
    if (map[interest]?.includes(a.category)) rank += 10;
  }
  for (const dislike of brief.dislikes) {
    if (map[dislike]?.includes(a.category)) rank -= 15;
  }
  if (brief.childrenAges.length > 0 && a.idealFor.includes("children")) rank += 6;
  if ((brief.seniorTravellers > 0 || brief.travellerType === "senior") && a.idealFor.includes("seniors")) rank += 6;
  if (brief.travellerType === "honeymoon" && (a.idealFor.includes("honeymoon") || a.idealFor.includes("couple"))) rank += 6;
  return rank;
}

/**
 * Deterministic, attraction-grounded itinerary draft with morning/afternoon/
 * evening structure. Never claims reservations or availability.
 */
export function composeItinerary(
  destination: DestinationIntelligence,
  brief: TravelBrief,
  options?: {
    /**
     * Attractions the traveller asked to swap out ("change this day").
     * Excluding a day's attractions regenerates that day with the next-best
     * picks while earlier days stay identical — deterministic refinement.
     */
    excludeAttractionIds?: string[];
  },
): ItineraryDay[] {
  const requested = brief.durationNights ?? destination.idealNights;
  const nights = Math.max(destination.minimumNights, Math.min(destination.maximumNights, requested));
  const days = nights + 1;

  const hasYoungChildren = brief.childrenAges.some((a) => a <= 10);
  const hasSeniors = brief.seniorTravellers > 0 || brief.travellerType === "senior" || brief.travellerType === "multi-generational";
  const accessibility = brief.accessibilityNeeds.length > 0;
  const excluded = new Set(options?.excludeAttractionIds ?? []);

  const pool = getAttractions(destination.slug)
    .filter((a) => !excluded.has(a.id))
    .filter((a) => suitableFor(a, brief))
    .sort((a, b) => interestRank(b, brief) - interestRank(a, brief));

  const indoorFallbacks = pool.filter((a) => a.indoorOutdoor === "indoor" || a.weatherSensitivity === "low");
  const used = new Set<string>();
  const take = (predicate?: (a: AttractionIntelligence) => boolean): AttractionIntelligence | undefined => {
    const found = pool.find((a) => !used.has(a.id) && (!predicate || predicate(a)));
    if (found) used.add(found.id);
    return found;
  };

  const itinerary: ItineraryDay[] = [];

  for (let i = 0; i < days; i++) {
    const dayNumber = i + 1;
    const pace = dayPace(brief.pace, i, days);
    const childNotes: string[] = [];
    const seniorNotes: string[] = [];
    const accessibilityNotes: string[] = [];
    const practicalNotes: string[] = [];
    let morning: ItineraryBlock[] = [];
    let afternoon: ItineraryBlock[] = [];
    let evening: ItineraryBlock[] = [];
    let title: string;
    let flexibilityOption: string | undefined;
    let weatherAlternative: string | undefined;

    if (i === 0) {
      title = `Welcome to ${destination.name}`;
      morning = [{
        title: `Arrive in ${destination.name}`,
        description: "Airport transfer and check-in. Your Klar expert will confirm flight timings and transfer details.",
      }];
      afternoon = [{
        title: "Settle in gently",
        description: "Rest, a swim or a short stroll near your stay — no schedule on arrival day.",
      }];
      const easyEvening = take((a) => a.category === "food" || a.physicalIntensity === "low");
      evening = easyEvening
        ? [toBlock(easyEvening, true)]
        : [{ title: "Relaxed first dinner", description: "An unhurried meal near your stay to end the travel day.", optional: true }];
      practicalNotes.push("Kept light on purpose after the flight.");
      if (hasYoungChildren) childNotes.push("An early dinner helps children reset after travel.");
    } else if (i === days - 1) {
      title = "Until next time";
      morning = [{
        title: "Free morning",
        description: "Last strolls, a final swim or souvenir shopping before checkout.",
      }];
      afternoon = [{
        title: "Departure",
        description: "Checkout and airport transfer. Your Klar expert will time this around your flight.",
      }];
      evening = [];
      practicalNotes.push("Checkout and transfer timing to be confirmed by your consultant.");
    } else {
      const isRestDay = pace === "light" && i > 1 && i < days - 2 && brief.pace !== "active";
      if (isRestDay) {
        title = "Rest and flexibility day";
        morning = [{ title: "Slow morning", description: "Pool, spa, beach or an unhurried wander — space with no schedule." }];
        const gentle = take((a) => a.physicalIntensity === "low");
        afternoon = gentle ? [toBlock(gentle, true)] : [{ title: "Open afternoon", description: "Keep this free — the best days often plan themselves.", optional: true }];
        evening = [{ title: "Easy evening", description: "Dinner at your own pace near your stay." }];
      } else {
        const main = take((a) => a.physicalIntensity !== "low" || a.category === "theme-park") ?? take();
        const secondary = take((a) => a.physicalIntensity === "low" && a.category !== main?.category);
        const eveningPick = take((a) => a.category === "food" || a.category === "nightlife" || Boolean(a.bestTimeOfDay && /evening|sunset|night/.test(a.bestTimeOfDay)));
        title = main ? main.name : "Explore at leisure";
        morning = main ? [toBlock(main)] : [{ title: "Neighbourhood exploring", description: "Local streets, markets and viewpoints near your base." }];
        afternoon = secondary ? [toBlock(secondary, pace === "light")] : [{ title: "Flexible afternoon", description: "Space to linger where the morning takes you.", optional: true }];
        evening = eveningPick ? [toBlock(eveningPick, true)] : [{ title: "Dinner, local style", description: "Your Klar expert can book a table matched to your tastes.", optional: true }];

        if (main && main.weatherSensitivity === "high") {
          const fallback = indoorFallbacks.find((a) => !used.has(a.id));
          weatherAlternative = fallback
            ? `If the weather turns: ${fallback.name} — ${fallback.summary}`
            : "If the weather turns, swap in an indoor museum, gallery or spa slot.";
        }
        if (main?.bestTimeOfDay) practicalNotes.push(`${main.name}: best ${main.bestTimeOfDay}.`);
        if (main) {
          childNotes.push(...main.childNotes);
          seniorNotes.push(...(hasSeniors ? main.seniorNotes : []));
          accessibilityNotes.push(...(accessibility ? main.accessibilityNotes : []));
        }
      }
      flexibilityOption = "Swap any block for downtime — this plan bends around your energy.";
      if (hasYoungChildren && pace !== "light") childNotes.push("Built-in downtime after lunch works well with children.");
      if (hasSeniors) seniorNotes.push("Use transport between stops rather than long walks where possible.");
    }

    if (accessibility && i === 1) {
      accessibilityNotes.push("Accessibility requirements noted — your Klar expert will confirm step-free options for each activity.");
    }

    itinerary.push({
      day: dayNumber,
      title,
      baseLocation: destination.name,
      pace,
      morning,
      afternoon,
      evening,
      flexibilityOption,
      weatherAlternative,
      childNotes,
      seniorNotes,
      accessibilityNotes,
      practicalNotes,
    });
  }

  return itinerary;
}
