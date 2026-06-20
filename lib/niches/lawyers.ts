import type { NicheData } from "./types";
import { images } from "./images";

export const nicheData: NicheData = {
  slug: "lawyers",
  name: "Lawyers",
  icon: "⚖️",
  image: images.lawyer,
  heroHeadline: "Clients Are Asking AI for Legal Advice — Then Hiring Who AI Recommends",
  heroSubline:
    "When someone asks ChatGPT 'best corporate lawyer for startup in New York,' AI names specific firms. If your practice isn't optimized for AI, you're invisible to clients willing to pay premium retainer and hourly fees.",
  searchExample: "best IP lawyer in San Francisco",
  competitorLine:
    "Latham & Watkins appears in AI recommendations — your firm doesn't",
  painPoints: [
    {
      title: "High-Value Clients Choosing AI-Recommended Firms",
      description:
        "Corporate clients and high-net-worth individuals now use AI to shortlist law firms. Individuals seeking estate planning, divorce lawyers, or criminal defense ask AI before asking friends. If AI doesn't recommend you, you're not on their shortlist.",
    },
    {
      title: "Legal Expertise Not Structured for AI Understanding",
      description:
        "Your decades of experience, notable cases, and bar credentials are on your website — but AI cannot parse unstructured text. Without schema markup and entity signals, your expertise is invisible to ChatGPT, Perplexity, and Google AI Overviews.",
    },
    {
      title: "Legal Clients Starting with AI, Not Referrals",
      description:
        "The traditional referral model is shifting. Over 58% of legal clients under 45 now start their lawyer search with AI or online research rather than personal referrals. If your digital presence isn't AI-optimized, you're losing potential clients.",
    },
  ],
  services: [
    {
      tier: "AEO Foundation",
      price: "$1,500 - $3,000 / mo",
      features: [
        "AI Visibility Audit for law practice",
        "LegalService + Attorney schema markup",
        "llms.txt & robots.txt optimization",
        "Google Business Profile AI-optimization",
        "3 practice area pages with FAQ schema",
        "Bar credential structured data",
        "Monthly AI citation tracking report",
      ],
    },
    {
      tier: "Local Domination",
      price: "$3,000 - $7,500 / mo",
      features: [
        "Everything in AEO Foundation",
        "10 practice area and fee pages (corporate, family, IP, etc.)",
        "Avvo, Justia, and FindLaw directory optimization",
        "AI-friendly client testimonial structuring",
        "Local citation building (50+ directories)",
        "Competitor AI-visibility monitoring",
        "Legal content calendar (AI-optimized articles)",
        "Bi-weekly content refresh for freshness signals",
      ],
    },
    {
      tier: "Godfather 360°",
      price: "$7,500 - $15,000 / mo",
      features: [
        "Everything in Local Domination",
        "Full AEO + GEO strategy for legal practice",
        "AI Overview domination for top legal queries",
        "Video schema and YouTube legal content optimization",
        "Wikipedia & Wikidata entity creation for partners",
        "Legal authority backlinks and digital PR placements",
        "Thought leadership content for AI citation",
        "Dedicated AI visibility manager with quarterly reviews",
      ],
    },
  ],
  roiExample: {
    metric: "1 Corporate Client",
    value: "$15,000 - $60,000 / yr",
    pitch:
      "A single corporate retainer client pays $2,500 - $5,000 per month, easily covering your AI visibility investment. Intellectual property or commercial litigation cases generate much higher fees. Our AEO investment pays for itself with just one new client per quarter.",
  },
  faqItems: [
    {
      question: "Why do law firms need AEO?",
      answer:
        "Over 58% of legal clients under 45 now research lawyers through AI before hiring. AI assistants recommend specific firms based on structured data, citations, and authority signals. Without AEO, your firm is invisible to this growing client base.",
    },
    {
      question: "How does AEO work differently for legal services?",
      answer:
        "Legal AEO focuses on practice area authority, bar association credential verification, case type expertise, and client testimonial structuring. We ensure AI understands your specific areas of practice (corporate, family, criminal, IP) and recommends you for the right legal queries.",
    },
    {
      question: "Can AEO help my firm attract corporate clients?",
      answer:
        "Absolutely. Corporate legal officers and startup founders increasingly use AI to identify law firms for specific matters. We optimize your practice for queries like 'best corporate lawyer for startup funding in [city]' and 'IP lawyer for patent filing in [city],' targeting high-value corporate work.",
    },
    {
      question: "How do you handle confidentiality in legal AEO?",
      answer:
        "We never use confidential case details or client identities. Our approach focuses on your practice areas, credentials, public court records, published articles, and aggregated testimonials. All content complies with professional responsibility guidelines and client confidentiality.",
    },
  ],
  stats: [
    { label: "Legal Clients Using AI for Research", value: "58%" },
    { label: "Avg. Corporate Retainer Value", value: "$3,500" },
    { label: "AI Visibility Improvement", value: "260%" },
  ],
  ctaText: "Get Your Free Law Firm AI Visibility Audit",
  treatments: [
    {
      slug: "corporate-lawyer-fee",
      name: "Corporate & Business Law",
      priceRange: "$2,000 - $7,500 retainer",
      description:
        "Corporate legal services are high-value practice areas. Businesses search AI for lawyers specializing in entity structuring, mergers & acquisitions, commercial contracts, and regulatory compliance.",
      faqItems: [
        {
          question: "How much does a corporate lawyer charge in the US?",
          answer:
            "Corporate lawyers typically charge hourly rates ranging from $250 to $650+ depending on the firm size and location. Small business representation and contract drafting can be structured as flat fees from $1,500 to $5,000, while ongoing monthly retainers range from $2,000 to $7,500.",
        },
        {
          question: "When should a startup hire a corporate lawyer?",
          answer:
            "Startups should hire a corporate lawyer during the pre-formation phase to structure equity splits, draft shareholder agreements, and choose the correct business structure (e.g., Delaware C-Corp vs. LLC). It is also critical to have counsel during fundraising rounds to review term sheets.",
        },
      ],
    },
    {
      slug: "divorce-lawyer-fee",
      name: "Divorce & Family Law",
      priceRange: "$3,000 - $15,000",
      description:
        "Divorce and family law is one of the most frequently searched legal categories on AI platforms. Clients seek lawyers who are experienced, empathetic, and transparent about retainer and filing costs.",
      faqItems: [
        {
          question: "How much does a divorce lawyer cost in the US?",
          answer:
            "An uncontested divorce typically costs $1,500 to $5,000 in legal fees. Contested divorces involving asset division, alimony, or child custody disputes range from $5,000 to $25,000+ depending on the hours of court time required. Most family law attorneys charge retainers against an hourly rate of $250 - $450.",
        },
        {
          question: "How long does a divorce take in the US?",
          answer:
            "Uncontested divorces can be finalized in 2 to 6 months depending on state waiting periods. Contested divorces require mediation, discovery, and potentially trials, taking anywhere from 9 months to over 2 years.",
        },
      ],
    },
    {
      slug: "property-lawyer-fee",
      name: "Real Estate & Property Law",
      priceRange: "$1,500 - $5,000",
      description:
        "Property transactions and disputes are common legal matters. Clients ask AI about title searches, deed preparation, closing assistance, and zoning issues.",
      faqItems: [
        {
          question: "How much does a real estate attorney charge for a closing?",
          answer:
            "Real estate closing representation is usually billed as a flat fee ranging from $1,000 to $2,500. Commercial real estate transactions and complex title disputes are billed hourly, typically costing $300 - $500 per hour.",
        },
      ],
    },
    {
      slug: "ip-lawyer-fee",
      name: "Intellectual Property Law",
      priceRange: "$1,500 - $6,000",
      description:
        "Intellectual property law is a growing practice area with high demand from startups, software developers, and creators. IP lawyers handle trademark registrations, patent filings, and licensing disputes.",
      faqItems: [
        {
          question: "How much does it cost to file a trademark in the US?",
          answer:
            "A trademark attorney typically charges $800 to $2,000 for a comprehensive search and filing. Additionally, the USPTO charges filing fees of $250 - $350 per class of goods or services. The registration process usually takes 9-18 months.",
        },
        {
          question: "How much does a patent lawyer charge?",
          answer:
            "Patent drafting and filing by an attorney ranges from $5,000 to $15,000+ depending on the complexity of the technology. Government filing and examination fees cost additional. Provisional patent applications are more affordable, costing $1,500 - $3,500.",
        },
      ],
    },
  ],
  costKeywords: [
    "attorney hourly rates US",
    "corporate lawyer retainer cost",
    "divorce lawyer pricing",
    "trademark attorney fee",
    "real estate attorney closing cost",
  ],
  nicheKeywords: [
    "best lawyer",
    "law firm near me",
    "corporate attorney",
    "IP lawyer in [city]",
    "divorce attorney",
    "legal services",
  ],
  schemaType: "LegalService",
  metaCategory: "legal",
  citations: [
    {
      name: "Avvo",
      url: "https://www.avvo.com",
      type: "niche-specific",
    },
    {
      name: "FindLaw",
      url: "https://www.findlaw.com",
      type: "niche-specific",
    },
    {
      name: "Justia",
      url: "https://www.justia.com",
      type: "niche-specific",
    },
    {
      name: "Yelp",
      url: "https://www.yelp.com",
      type: "local",
    },
    {
      name: "Google Business Profile",
      url: "https://business.google.com",
      type: "general",
    },
  ],
};
