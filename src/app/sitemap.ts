import type { MetadataRoute } from "next";
import { SITE_URL } from "@/config/site";
import { publishedCaseStudies } from "@/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: SITE_URL, lastModified: now, changeFrequency: "monthly", priority: 1 },
    // Only published Case Studies are listed.
    ...publishedCaseStudies().map((c) => ({
      url: `${SITE_URL}/proyectos/${c.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
