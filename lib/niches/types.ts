export interface Treatment {
  slug: string;
  name: string;
  priceRange: string;
  description: string;
  faqItems: { question: string; answer: string }[];
}

export interface CitationDirectory {
  name: string;
  url: string;
  type: "general" | "niche-specific" | "local";
}

export interface NicheData {
  slug: string;
  name: string;
  icon: string;
  image: string;
  heroHeadline: string;
  heroSubline: string;
  painPoints: { title: string; description: string }[];
  services: { tier: string; price: string; features: string[] }[];
  roiExample: { metric: string; value: string; pitch: string };
  faqItems: { question: string; answer: string }[];
  stats: { label: string; value: string }[];
  ctaText: string;
  searchExample: string;
  competitorLine: string;
  treatments: Treatment[];
  costKeywords: string[];
  nicheKeywords: string[];
  schemaType: string;
  metaCategory: "healthcare" | "legal" | "lifestyle" | "education" | "finance";
  citations: CitationDirectory[];
}
