const BASE = "https://www.godfatherfunnelai.com";

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${BASE}/#organization`,
    name: "Godfather Funnel AI",
    url: BASE,
    logo: `${BASE}/logo.png`,
    description: "India's #1 AEO & AI Marketing Agency. We make AI recommend your business by name.",
    foundingDate: "2026",
    areaServed: { "@type": "Country", name: "India" },
    knowsAbout: [
      "Answer Engine Optimization",
      "AI Marketing",
      "Schema Markup",
      "ChatGPT Optimization",
      "Google AI Overviews",
      "Perplexity Optimization",
      "Local SEO",
      "Healthcare Marketing",
      "Legal Marketing",
      "Real Estate Marketing",
    ],
    sameAs: [
      "https://www.linkedin.com/company/godfatherfunnelai",
      "https://twitter.com/godfatherfunnel",
      "https://www.instagram.com/godfatherfunnelai",
      "https://www.youtube.com/@godfatherfunnelai",
    ],
  };
}

export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Godfather Funnel AI",
    url: BASE,
    description: "India's #1 AEO & AI Marketing Agency. We make AI recommend your business by name.",
    publisher: { "@id": `${BASE}/#organization` },
    potentialAction: {
      "@type": "SearchAction",
      target: `${BASE}/audit?url={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateFAQSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function generateArticleSchema(post: {
  title: string;
  description: string;
  slug: string;
  publishDate: string;
  readTime?: string;
  author?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.publishDate,
    dateModified: post.publishDate,
    url: `${BASE}/blog/${post.slug}`,
    author: {
      "@type": "Person",
      name: post.author || "Godfather Funnel AI Team",
      url: `${BASE}/about`,
    },
    publisher: { "@id": `${BASE}/#organization` },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BASE}/blog/${post.slug}`,
    },
  };
}

export function generateServiceSchema(opts: {
  name: string;
  description: string;
  niche?: string;
  city?: string;
  schemaType?: string;
}) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    provider: { "@id": `${BASE}/#organization` },
    serviceType: "AI Marketing & Answer Engine Optimization",
  };
  if (opts.city) {
    schema.areaServed = { "@type": "City", name: opts.city };
  }
  return schema;
}

export function generateProfessionalServiceSchema(opts: {
  nicheName: string;
  nicheSlug: string;
  schemaType: string;
  city?: string;
  services: { tier: string; features: string[] }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `Godfather Funnel AI — ${opts.nicheName} Marketing`,
    url: opts.city
      ? `${BASE}/ai-marketing/${opts.nicheSlug}/${opts.city.toLowerCase().replace(/\s+/g, "-")}`
      : `${BASE}/${opts.nicheSlug}`,
    provider: { "@id": `${BASE}/#organization` },
    areaServed: opts.city
      ? { "@type": "City", name: opts.city }
      : { "@type": "Country", name: "India" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `AEO Services for ${opts.nicheName}`,
      itemListElement: opts.services.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.tier,
          description: s.features.join(", "),
        },
      })),
    },
  };
}

export function generateLocalBusinessSchema(opts: {
  nicheName: string;
  schemaType: string;
  city: string;
  state: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": opts.schemaType,
    name: `Best ${opts.nicheName} AI Marketing in ${opts.city}`,
    description: `AI Marketing & AEO services for ${opts.nicheName.toLowerCase()} in ${opts.city}, ${opts.state}. Get recommended by ChatGPT, Google AI & Perplexity.`,
    areaServed: {
      "@type": "City",
      name: opts.city,
      containedInPlace: { "@type": "State", name: opts.state },
    },
    provider: { "@id": `${BASE}/#organization` },
  };
}

export function generateComparisonSchema(opts: {
  title: string;
  description: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.title,
    description: opts.description,
    url: `${BASE}/compare/${opts.slug}`,
    author: { "@id": `${BASE}/#organization` },
    publisher: { "@id": `${BASE}/#organization` },
  };
}

export function generateCollectionSchema(opts: {
  name: string;
  description: string;
  url: string;
  items: { name: string; url: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: opts.name,
    description: opts.description,
    url: opts.url,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: opts.items.map((item, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: item.name,
        url: item.url,
      })),
    },
  };
}

export function generateTreatmentSchema(opts: {
  treatmentName: string;
  nicheName: string;
  city: string;
  priceRange: string;
  description: string;
  nicheSlug: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${opts.treatmentName} AI Marketing in ${opts.city}`,
    description: opts.description,
    url: `${BASE}/ai-marketing/${opts.nicheSlug}/${opts.slug}`,
    provider: { "@id": `${BASE}/#organization` },
    areaServed: { "@type": "City", name: opts.city },
    serviceType: `${opts.treatmentName} Marketing & AEO Optimization`,
  };
}
