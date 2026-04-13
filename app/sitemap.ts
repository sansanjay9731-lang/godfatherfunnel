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

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE },
    { url: `${BASE}/audit` },
    { url: `${BASE}/about` },
    { url: `${BASE}/services` },
    { url: `${BASE}/case-studies` },
    { url: `${BASE}/faq` },
    { url: `${BASE}/contact` },
    { url: `${BASE}/blog` },
    { url: `${BASE}/citations` },
    { url: `${BASE}/resources` },
  ];

  // Niche landing pages (20)
  const nichePages: MetadataRoute.Sitemap = niches.map((n) => ({
    url: `${BASE}/${n.slug}`,
  }));

  // City + niche pSEO pages (20 niches x 55 cities = 1,100)
  const cityNichePages: MetadataRoute.Sitemap = [];
  for (const niche of niches) {
    for (const city of allCities) {
      cityNichePages.push({
        url: `${BASE}/ai-marketing/${niche.slug}/${city.slug}`,
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
