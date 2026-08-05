import { NextResponse } from "next/server";
import { getAttractions, getDestination } from "@/repositories/knowledge";

export const runtime = "nodejs";

/** Public destination profile — customer-safe fields only. */
export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const destination = getDestination(slug);
  if (!destination) {
    return NextResponse.json({ error: "Destination not found." }, { status: 404 });
  }
  const attractions = getAttractions(slug).map((a) => ({
    id: a.id,
    name: a.name,
    category: a.category,
    summary: a.summary,
    idealFor: a.idealFor,
    physicalIntensity: a.physicalIntensity,
    typicalDurationHours: a.typicalDurationHours,
  }));
  return NextResponse.json({
    destination: {
      slug: destination.slug,
      name: destination.name,
      country: destination.countryName,
      region: destination.region,
      summary: destination.summary,
      positioningLine: destination.positioningLine,
      idealTraveller: destination.idealTraveller,
      minimumNights: destination.minimumNights,
      idealNights: destination.idealNights,
      maximumNights: destination.maximumNights,
      monthlyIntelligence: destination.monthlyIntelligence,
      tradeOffs: destination.tradeOffs,
      whoShouldAvoid: destination.whoShouldAvoid,
      packingConsiderations: destination.packingConsiderations,
    },
    attractions,
  });
}
