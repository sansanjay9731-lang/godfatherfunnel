import { cities } from "./cities";

const BASE = "https://www.godfatherfunnelai.com";

export interface InternalLink {
  title: string;
  url: string;
  description?: string;
}

export function getRelatedCityPages(nicheSlug: string, currentCitySlug: string, limit = 6): InternalLink[] {
  return cities
    .filter((c) => c.slug !== currentCitySlug)
    .sort((a, b) => a.tier - b.tier)
    .slice(0, limit)
    .map((c) => ({
      title: `AI Marketing for ${nicheSlug.replace(/-/g, " ")} in ${c.name}`,
      url: `/ai-marketing/${nicheSlug}/${c.slug}`,
      description: `AEO services in ${c.name}, ${c.state}`,
    }));
}

export function getRelatedNichePages(citySlug: string, currentNicheSlug: string, allNicheSlugs: string[], limit = 5): InternalLink[] {
  const city = cities.find((c) => c.slug === citySlug);
  const cityName = city?.name || citySlug;
  return allNicheSlugs
    .filter((s) => s !== currentNicheSlug)
    .slice(0, limit)
    .map((s) => ({
      title: `AI Marketing for ${s.replace(/-/g, " ")} in ${cityName}`,
      url: `/ai-marketing/${s}/${citySlug}`,
    }));
}

export function getRelatedTreatmentPages(
  nicheSlug: string,
  citySlug: string,
  treatments: { slug: string; name: string }[],
  currentTreatmentSlug?: string,
  limit = 4
): InternalLink[] {
  const city = cities.find((c) => c.slug === citySlug);
  const cityName = city?.name || citySlug;
  return treatments
    .filter((t) => t.slug !== currentTreatmentSlug)
    .slice(0, limit)
    .map((t) => ({
      title: `${t.name} in ${cityName}`,
      url: `/ai-marketing/${nicheSlug}/${t.slug}-in-${citySlug}`,
    }));
}

export function getBreadcrumbItems(opts: {
  niche?: { slug: string; name: string };
  city?: { slug: string; name: string };
  treatment?: { slug: string; name: string };
  page?: { name: string; url: string };
}): { name: string; url: string }[] {
  const items: { name: string; url: string }[] = [
    { name: "Home", url: BASE },
  ];
  if (opts.niche) {
    items.push({ name: opts.niche.name, url: `${BASE}/${opts.niche.slug}` });
  }
  if (opts.city && opts.niche) {
    items.push({
      name: `${opts.niche.name} in ${opts.city.name}`,
      url: `${BASE}/ai-marketing/${opts.niche.slug}/${opts.city.slug}`,
    });
  }
  if (opts.treatment && opts.city && opts.niche) {
    items.push({
      name: `${opts.treatment.name} in ${opts.city.name}`,
      url: `${BASE}/ai-marketing/${opts.niche.slug}/${opts.treatment.slug}-in-${opts.city.slug}`,
    });
  }
  if (opts.page) {
    items.push(opts.page);
  }
  return items;
}

export function getNicheLandingLink(nicheSlug: string, nicheName: string): InternalLink {
  return {
    title: `${nicheName} AI Marketing`,
    url: `/${nicheSlug}`,
    description: `Complete AEO services for ${nicheName.toLowerCase()}`,
  };
}

export function getAuditLink(): InternalLink {
  return {
    title: "Free AI Visibility Audit",
    url: "/audit",
    description: "Check if AI recommends your business — takes 30 seconds",
  };
}
