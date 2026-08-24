import type { MetadataRoute } from "next";
import { niches } from "@/lib/niches";
import { getAllCities } from "@/lib/cities";
import { getAllBlogPosts } from "@/lib/blog";
import { getAllComparisons } from "@/lib/comparisons";
import { getAllResources } from "@/lib/resources";

const BASE = "https://www.godfatherfunnelai.com";

// Stable launch date — only update when content materially changes
const SITE_LAUNCH = "2024-12-01";
const SPRINT_DATE = "2026-07-18"; // Date of our major content sprint

// Cap any date to today to prevent future-dated manipulation signals
function capToToday(dateStr: string): string {
  const today = new Date().toISOString().split("T")[0];
  return dateStr > today ? today : dateStr;
}

// Tier priority for city pages — signals to Google which to crawl first
function cityPriority(tier: number): number {
  if (tier === 1) return 0.9;
  if (tier === 2) return 0.8;
  return 0.6;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const allCities = getAllCities();
  const comparisons = getAllComparisons();
  const resources = getAllResources();

  // Static pages — real stable dates, not new Date()
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: SPRINT_DATE, priority: 1.0 },
    { url: `${BASE}/audit`, lastModified: SPRINT_DATE, priority: 1.0 },
    { url: `${BASE}/about`, lastModified: "2025-03-01", priority: 0.7 },
    { url: `${BASE}/services`, lastModified: SPRINT_DATE, priority: 0.9 },
    { url: `${BASE}/case-studies`, lastModified: "2025-06-01", priority: 0.8 },
    { url: `${BASE}/faq`, lastModified: SPRINT_DATE, priority: 0.8 },
    { url: `${BASE}/contact`, lastModified: "2025-01-01", priority: 0.6 },
    { url: `${BASE}/blog`, lastModified: SPRINT_DATE, priority: 0.9 },
    { url: `${BASE}/citations`, lastModified: SPRINT_DATE, priority: 0.8 },
    { url: `${BASE}/resources`, lastModified: "2025-04-01", priority: 0.7 },
    { url: `${BASE}/privacy`, lastModified: "2025-07-01", priority: 0.3 },
    { url: `${BASE}/terms`, lastModified: "2025-07-01", priority: 0.3 },
  ];

  // Niche landing pages (21) — high priority, recently updated
  const nichePages: MetadataRoute.Sitemap = niches.map((n) => ({
    url: `${BASE}/${n.slug}`,
    lastModified: SPRINT_DATE,
    priority: 1.0,
  }));

  // City + niche pSEO pages — prioritized by city tier
  const cityNichePages: MetadataRoute.Sitemap = [];
  for (const niche of niches) {
    for (const city of allCities) {
      cityNichePages.push({
        url: `${BASE}/ai-marketing/${niche.slug}/${city.slug}`,
        lastModified: SPRINT_DATE,
        priority: cityPriority(city.tier),
      });
    }
  }

  // Blog posts — use actual publish dates, capped to today
  const blogPosts = getAllBlogPosts();
  // Deduplicate by slug to prevent duplicate sitemap entries
  const seenSlugs = new Set<string>();
  const blogPages: MetadataRoute.Sitemap = blogPosts
    .filter((p) => {
      if (seenSlugs.has(p.slug)) return false;
      seenSlugs.add(p.slug);
      return true;
    })
    .map((p) => ({
      url: `${BASE}/blog/${p.slug}`,
      lastModified: capToToday(p.publishDate),
      priority: 0.8,
    }));

  // Comparison pages (23)
  const comparisonPages: MetadataRoute.Sitemap = comparisons.map((c) => ({
    url: `${BASE}/compare/${c.slug}`,
    lastModified: SPRINT_DATE,
    priority: 0.8,
  }));

  // Resource pages
  const resourcePages: MetadataRoute.Sitemap = resources.map((r) => ({
    url: `${BASE}/resources/${r.slug}`,
    lastModified: "2025-04-01",
    priority: 0.5,
  }));

  // Citation pages (21 niche-specific)
  const citationPages: MetadataRoute.Sitemap = niches.map((n) => ({
    url: `${BASE}/citations/${n.slug}`,
    lastModified: SPRINT_DATE,
    priority: 0.7,
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
