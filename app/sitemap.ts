import type { MetadataRoute } from "next";
import { niches } from "@/lib/niche-data";
import { blogPosts, comparisonTopics, targetCities, nicheKeywords } from "@/lib/seo-data";

const BASE = "https://godfatherfunnelai.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE}/audit`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/case-studies`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
  ];

  // Niche pages
  const nichePages: MetadataRoute.Sitemap = niches.map((n) => ({
    url: `${BASE}/${n.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  // Blog posts
  const blogPages: MetadataRoute.Sitemap = blogPosts.map((p) => ({
    url: `${BASE}/blog/${p.slug}`,
    lastModified: p.publishDate,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Comparison pages
  const comparisonPages: MetadataRoute.Sitemap = comparisonTopics.map((c) => ({
    url: `${BASE}/compare/${c.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // City + niche pSEO pages (top 8 cities x 6 niches = 48 pages)
  const topCities = targetCities.slice(0, 8);
  const pSEOPages: MetadataRoute.Sitemap = [];
  for (const niche of niches) {
    for (const city of topCities) {
      const citySlug = city.toLowerCase().replace(/\s+/g, "-");
      pSEOPages.push({
        url: `${BASE}/ai-marketing/${niche.slug}/${citySlug}`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.7,
      });
    }
  }

  return [...staticPages, ...nichePages, ...blogPages, ...comparisonPages, ...pSEOPages];
}
