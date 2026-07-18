import type { MetadataRoute } from "next";
import { niches } from "@/lib/niches";
import { getAllCities } from "@/lib/cities";
import { getAllBlogPosts } from "@/lib/blog";
import { getAllComparisons } from "@/lib/comparisons";
import { getAllResources } from "@/lib/resources";

const BASE = "https://www.godfatherfunnelai.com";

// Stable launch date — only update when content materially changes
const SITE_LAUNCH = "2024-12-01";

// Cap any date to today to prevent future-dated manipulation signals
function capToToday(dateStr: string): string {
  const today = new Date().toISOString().split("T")[0];
  return dateStr > today ? today : dateStr;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const allCities = getAllCities();
  const comparisons = getAllComparisons();
  const resources = getAllResources();

  // Static pages — real stable dates, not new Date()
  // Google ignores changeFrequency + priority — removed for cleaner XML
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: "2025-07-01" },
    { url: `${BASE}/audit`, lastModified: "2025-07-01" },
    { url: `${BASE}/about`, lastModified: "2025-03-01" },
    { url: `${BASE}/services`, lastModified: "2025-03-01" },
    { url: `${BASE}/case-studies`, lastModified: "2025-06-01" },
    { url: `${BASE}/faq`, lastModified: "2025-03-01" },
    { url: `${BASE}/contact`, lastModified: "2025-01-01" },
    { url: `${BASE}/blog`, lastModified: "2025-07-01" },
    { url: `${BASE}/citations`, lastModified: "2025-04-01" },
    { url: `${BASE}/resources`, lastModified: "2025-04-01" },
    { url: `${BASE}/privacy`, lastModified: "2025-07-01" },
    { url: `${BASE}/terms`, lastModified: "2025-07-01" },
  ];

  // Niche landing pages (20) — use stable launch date
  const nichePages: MetadataRoute.Sitemap = niches.map((n) => ({
    url: `${BASE}/${n.slug}`,
    lastModified: SITE_LAUNCH,
  }));

  // City + niche pSEO pages — omit lastmod (no real date to use)
  const cityNichePages: MetadataRoute.Sitemap = [];
  for (const niche of niches) {
    for (const city of allCities) {
      cityNichePages.push({
        url: `${BASE}/ai-marketing/${niche.slug}/${city.slug}`,
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
