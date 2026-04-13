import type { BlogPost } from "./types";
import { nicheGuidePosts } from "./niche-guides";
// Import from seo-data for existing blog posts until new ones are generated
import { blogPosts as legacyPosts } from "@/lib/seo-data";

export type { BlogPost } from "./types";

// Combine all blog sources, deduplicated by slug (later entries win)
export function getAllBlogPosts(): BlogPost[] {
  const all = [...legacyPosts, ...nicheGuidePosts];
  const seen = new Map<string, BlogPost>();
  for (const post of all) {
    seen.set(post.slug, post);
  }
  return Array.from(seen.values());
}

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return getAllBlogPosts().find((p) => p.slug === slug);
}

export function getBlogPostsByNiche(niche: string): BlogPost[] {
  return getAllBlogPosts().filter((p) => p.niche === niche || p.niche === "all");
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  return getAllBlogPosts().filter((p) => p.category === category);
}
