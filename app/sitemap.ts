import type { MetadataRoute } from "next";
import { niches } from "@/lib/niches";
import { getAllCities } from "@/lib/cities";
import { getAllBlogPosts } from "@/lib/blog";
import { getAllComparisons } from "@/lib/comparisons";
import { getAllResources } from "@/lib/resources";

const BASE = "https://www.godfatherfunnelai.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const allCities = getAllCities();
  const comparisons = getAllComparisons();
  const resources = getAllResources();

  const now = new Date().toISOString();

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE}/audit`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/case-studies`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/citations`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/resources`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];

  // Niche landing pages (20)
  const nichePages: MetadataRoute.Sitemap = niches.map((n) => ({
    url: `${BASE}/${n.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  // City + niche pSEO pages (20 niches x 25 cities = 500)
  const cityNichePages: MetadataRoute.Sitemap = [];
  for (const niche of niches) {
    for (const city of allCities) {
      cityNichePages.push({
        url: `${BASE}/ai-marketing/${niche.slug}/${city.slug}`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.7,
      });
    }
  }

  // Blog posts — use actual publish dates
  const blogPosts = getAllBlogPosts();
  const blogPages: MetadataRoute.Sitemap = blogPosts.map((p) => ({
    url: `${BASE}/blog/${p.slug}`,
    lastModified: p.publishDate,
  }));

  // Comparison pages (22)
  const comparisonPages: MetadataRoute.Sitemap = comparisons.map((c) => ({
    url: `${BASE}/compare/${c.slug}`,
  }));

  // Resource pages (10)
  const resourcePages: MetadataRoute.Sitemap = resources.map((r) => ({
    url: `${BASE}/resources/${r.slug}`,
  }));

  // Citation pages (20 niche-specific)
  const citationPages: MetadataRoute.Sitemap = niches.map((n) => ({
    url: `${BASE}/citations/${n.slug}`,
  }));

  return [
    ...staticPages,
    ...nichePages,
    ...cityNichePages,
    ...blogPages,
    ...comparisonPages,
    ...resourcePages,
    ...citationPages,
  ];
}
