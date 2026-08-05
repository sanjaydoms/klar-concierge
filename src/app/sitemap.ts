import type { MetadataRoute } from "next";
import { config } from "@/lib/config";
import { getAllDestinations } from "@/repositories/knowledge";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = config.appUrl.replace(/\/$/, "");
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/concierge`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/concierge/discover`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/destinations`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/concierge/compare`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/concierge/how-it-works`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/privacy`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/terms`, changeFrequency: "yearly", priority: 0.2 },
  ];
  const destinationRoutes: MetadataRoute.Sitemap = getAllDestinations().map((d) => ({
    url: `${base}/destinations/${d.slug}`,
    lastModified: d.reviewedAt,
    changeFrequency: "monthly",
    priority: 0.8,
  }));
  return [...staticRoutes, ...destinationRoutes];
}
