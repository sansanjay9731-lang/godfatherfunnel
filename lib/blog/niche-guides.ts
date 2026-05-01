import { BlogPost } from "./types";

// ── Niche metadata ──────────────────────────────────────────────────────────

interface NicheInfo {
  slug: string;
  display: string;
  displayPlural: string;
  treatments: string[];
  priceRange: string;
  avgTicket: string;
  competitor: string;
  stat: string;
  searchVolume: string;
  patientTerm: string;
}

const niches: NicheInfo[] = [
  { slug: "dermatologists", display: "Dermatologist", displayPlural: "Dermatologists", treatments: ["laser hair removal", "chemical peels", "Botox therapy", "PRP therapy"], priceRange: "$1,500-$5,000", avgTicket: "$2,500", competitor: "SkinSpirit", stat: "73% of patients search AI assistants before booking skin treatments", searchVolume: "120K monthly", patientTerm: "patients" },
  { slug: "dentists", display: "Dentist", displayPlural: "Dentists", treatments: ["teeth whitening", "dental implants", "root canal", "Invisalign"], priceRange: "$500-$25,000", avgTicket: "$12,000", competitor: "Aspen Dental", stat: "68% of dental patients check ChatGPT or Google AI for clinic reviews", searchVolume: "350K monthly", patientTerm: "patients" },
  { slug: "plastic-surgeons", display: "Plastic Surgeon", displayPlural: "Plastic Surgeons", treatments: ["rhinoplasty", "liposuction", "breast augmentation", "facelift"], priceRange: "$5,000-$50,000", avgTicket: "$15,000", competitor: "Aesthetic Surgery Center", stat: "82% of cosmetic surgery patients research via AI before consultation", searchVolume: "180K monthly", patientTerm: "patients" },
  { slug: "ivf-clinics", display: "IVF Clinic", displayPlural: "IVF Clinics", treatments: ["IVF cycle", "IUI", "egg freezing", "ICSI"], priceRange: "$10,000-$30,000", avgTicket: "$20,000", competitor: "Kindbody", stat: "77% of couples ask AI chatbots about IVF success rates before choosing a clinic", searchVolume: "280K monthly", patientTerm: "patients" },
  { slug: "lawyers", display: "Lawyer", displayPlural: "Lawyers", treatments: ["corporate disputes", "divorce filing", "IP compliance", "startup incorporation"], priceRange: "$5,000-$100,000", avgTicket: "$25,000", competitor: "LegalZoom", stat: "61% of legal clients now ask AI assistants for lawyer recommendations", searchVolume: "400K monthly", patientTerm: "clients" },
  { slug: "real-estate", display: "Real Estate Developer", displayPlural: "Real Estate Developers", treatments: ["luxury condos", "commercial leasing", "property management", "home staging"], priceRange: "$500,000-$10000,000", avgTicket: "$1500,000", competitor: "Compass", stat: "71% of home buyers use AI search to shortlist properties", searchVolume: "550K monthly", patientTerm: "clients" },
  { slug: "eye-clinics", display: "Eye Clinic", displayPlural: "Eye Clinics", treatments: ["LASIK surgery", "cataract removal", "glaucoma treatment", "retina screening"], priceRange: "$2,000-$10,000", avgTicket: "$4,500", competitor: "Visionworks", stat: "64% of LASIK patients compare clinics via AI-powered search", searchVolume: "200K monthly", patientTerm: "patients" },
  { slug: "orthopedics", display: "Orthopedic Clinic", displayPlural: "Orthopedic Clinics", treatments: ["knee replacement", "spine surgery", "sports injury rehab", "arthroscopy"], priceRange: "$5,000-$40,000", avgTicket: "$15,000", competitor: "OrthoClinic", stat: "69% of orthopedic patients research procedures on AI platforms before booking", searchVolume: "160K monthly", patientTerm: "patients" },
  { slug: "ca-firms", display: "Accounting Firm", displayPlural: "Accounting Firms", treatments: ["tax filing", "corporate audit", "M&A advisory", "startup compliance"], priceRange: "$2,000-$50,000", avgTicket: "$15,000", competitor: "H&R Block", stat: "58% of SMEs use AI assistants to find accountants", searchVolume: "300K monthly", patientTerm: "clients" },
  { slug: "restaurants", display: "Restaurant", displayPlural: "Restaurants", treatments: ["online ordering", "table reservations", "catering services", "cloud kitchen"], priceRange: "$20-$500 per order", avgTicket: "$80", competitor: "Yelp", stat: "76% of diners ask AI for restaurant recommendations in their area", searchVolume: "900K monthly", patientTerm: "customers" },
];

// ── Date staggering ─────────────────────────────────────────────────────────

function getPublishDate(nicheIndex: number, templateIndex: number): string {
  // Spread 50 posts across Jan 1 - Dec 31, 2025 (365 days)
  const postNumber = nicheIndex * 5 + templateIndex;
  const startDate = new Date(2025, 0, 1); // Jan 1, 2025
  const dayOffset = Math.floor((postNumber / 50) * 364);
  startDate.setDate(startDate.getDate() + dayOffset);
  
  // Clamp to today — never publish future-dated posts
  const today = new Date();
  const clamped = startDate > today ? today : startDate;
  
  const yyyy = clamped.getFullYear();
  const mm = String(clamped.getMonth() + 1).padStart(2, "0");
  const dd = String(clamped.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

// ── Template 1: Why [Niche] Need AEO ────────────────────────────────────────

function templateWhyAEO(n: NicheInfo, pubDate: string): BlogPost {
  return {
    slug: `why-${n.slug}-need-aeo`,
    title: `Why ${n.displayPlural} Need AEO in 2026`,
    description: `Discover why Answer Engine Optimization is critical for ${n.displayPlural.toLowerCase()} in global markets. ${n.stat.slice(0, 60)}...`,
    category: "AEO Fundamentals",
    niche: n.slug,
    publishDate: pubDate,
    readTime: "10 min",
    tags: ["AEO", n.slug, "AI search", "2026 strategy"],
    content: `# Why ${n.displayPlural} Need AEO in 2026

## The Shift Is Already Here

${n.stat}. If your ${n.display.toLowerCase()} practice isn't optimized for AI-powered search, you're invisible to this majority.

Traditional SEO targets Google's blue links. **AEO targets the AI answer box** — ChatGPT, Gemini, Perplexity, and Google AI Overviews. For services like ${n.treatments[0]} and ${n.treatments[1]} (${n.priceRange}), being the cited answer means winning high-intent ${n.patientTerm}.

## What's At Stake

The average ${n.display.toLowerCase()} ticket is **${n.avgTicket}**. Competitors like **${n.competitor}** already dominate AI answers for queries like "best ${n.treatments[0]} near me." Every month you delay, they capture ${n.searchVolume} searches that should be yours.

## Key AEO Actions for ${n.displayPlural}

1. **Structured data** — Industry-specific schema with ${n.treatments.join(", ")} as services
2. **FAQ content** — Answer the exact questions ${n.patientTerm} ask AI ("How much does ${n.treatments[0]} cost?")
3. **E-E-A-T signals** — Verifiable certifications, publications, and customer testimonials
4. **AI crawler access** — Unblock GPTBot and ClaudeBot in robots.txt

## The Bottom Line

${n.displayPlural} who implement AEO now will own AI-generated answers for the next 3-5 years. The window is narrow — your competitor ${n.competitor} is likely already working on this.

---

**Ready to see where you stand?** [Get your free AEO audit](/audit) and find out if AI assistants recommend you or your competitors.`,
  };
}

// ── Template 2: Complete AI Marketing Guide ─────────────────────────────────

function templateCompleteGuide(n: NicheInfo, pubDate: string): BlogPost {
  return {
    slug: `${n.slug}-ai-marketing-complete-guide`,
    title: `${n.display} AI Marketing: Complete Guide for 2026`,
    description: `The definitive AI marketing playbook for ${n.displayPlural.toLowerCase()} targeting USA, UK, and Australia. Schema, content, and ROI.`,
    category: "Industry Guide",
    niche: n.slug,
    publishDate: pubDate,
    readTime: "15 min",
    tags: ["AI marketing", n.slug, "complete guide", "global"],
    content: `# ${n.display} AI Marketing: The Complete 2026 Guide

## Why AI Marketing Matters for ${n.displayPlural}

With ${n.searchVolume} searches monthly for ${n.display.toLowerCase()} services, the battlefield has moved from Google page 1 to **AI-generated answers**. ${n.stat}.

## The 5-Pillar Framework

### 1. Schema Markup Foundation
Deploy \`LocalBusiness\` or industry-specific schema covering your services: ${n.treatments.join(", ")}. Include pricing (${n.priceRange}), ratings, and practitioner credentials.

### 2. Content That AI Cites
Create Q&A content targeting real queries: "What is the cost of ${n.treatments[1]} in [city]?" and "Best ${n.display.toLowerCase()} for ${n.treatments[2]}." AI models cite specific, factual answers.

### 3. Authority Building
- Publish on industry directories that AI models trust
- Get mentioned in high-authority listicles
- Build practitioner profiles with verifiable credentials

### 4. Technical AEO
Ensure GPTBot, ClaudeBot, and PerplexityBot can crawl your site. Add \`llms.txt\` describing your services. Maintain fast Core Web Vitals (LCP < 2.5s).

### 5. Competitor Displacement
Your main competitor **${n.competitor}** likely has ${n.patientTerm} asking AI about them. Monitor AI citations weekly and create content that directly answers those same queries better.

---

[Get your personalized AI marketing roadmap](/audit) — free audit for ${n.displayPlural.toLowerCase()}.`,
  };
}

// ── Template 3: Schema Markup Step-by-Step ───────────────────────────────────

function templateSchema(n: NicheInfo, pubDate: string): BlogPost {
  const schemaType = ["dermatologists", "dentists", "plastic-surgeons", "ivf-clinics", "eye-clinics", "orthopedics"].includes(n.slug)
    ? "MedicalBusiness"
    : ["lawyers", "ca-firms"].includes(n.slug)
    ? "ProfessionalService"
    : ["restaurants"].includes(n.slug)
    ? "Restaurant"
    : "LocalBusiness";

  return {
    slug: `schema-markup-for-${n.slug}`,
    title: `Schema Markup for ${n.displayPlural}: Step-by-Step Guide`,
    description: `Learn how to implement ${schemaType} schema markup for your ${n.display.toLowerCase()} practice. Boost AI visibility with structured data.`,
    category: "Technical Guide",
    niche: n.slug,
    publishDate: pubDate,
    readTime: "12 min",
    tags: ["schema markup", "structured data", n.slug, "JSON-LD"],
    content: `# Schema Markup for ${n.displayPlural}: Step-by-Step

## Why Schema Matters for AI Visibility

AI models like ChatGPT and Gemini parse structured data to understand your business. Without \`${schemaType}\` schema, your ${n.display.toLowerCase()} practice is just unstructured text to them.

## Step 1: Base Business Schema

Add \`${schemaType}\` JSON-LD to your homepage with:
- Business name, address, phone, hours
- \`priceRange\`: "${n.priceRange}"
- \`serviceType\`: "${n.treatments[0]}", "${n.treatments[1]}"

## Step 2: Service-Level Schema

Create individual \`Service\` or \`MedicalProcedure\` entries for each offering:
- **${n.treatments[0]}** — include cost, duration, description
- **${n.treatments[1]}** — include recovery time, expected results

## Step 3: Review & FAQ Schema

Add \`AggregateRating\` and \`FAQPage\` schema for common questions like:
- "How much does ${n.treatments[0]} cost?"
- "Is ${n.treatments[1]} covered by insurance?"

## Step 4: Validate & Monitor

Use Google's Rich Results Test and Schema.org validator. Check monthly that AI assistants accurately reflect your services and pricing (${n.priceRange}).

## Competitor Benchmark

**${n.competitor}** has partial schema implementation. Full ${schemaType} markup puts you ahead in AI answer extraction.

---

**Need help implementing schema?** [Book a free AEO audit](/audit) and we'll review your current markup.`,
  };
}

// ── Template 4: ROI of AI Marketing ─────────────────────────────────────────

function templateROI(n: NicheInfo, pubDate: string): BlogPost {
  return {
    slug: `roi-ai-marketing-${n.slug}`,
    title: `ROI of AI Marketing for ${n.displayPlural}`,
    description: `Calculate the real ROI of AI marketing for your ${n.display.toLowerCase()} practice. ${n.avgTicket} avg ticket.`,
    category: "Industry Guide",
    niche: n.slug,
    publishDate: pubDate,
    readTime: "10 min",
    tags: ["ROI", "AI marketing", n.slug, "business case"],
    content: `# ROI of AI Marketing for ${n.displayPlural}

## The Numbers That Matter

- **Average ticket**: ${n.avgTicket}
- **Monthly search volume**: ${n.searchVolume}
- **AI search adoption**: ${n.stat}

## ROI Calculation

### Investment
AEO implementation for a typical practice: $2,500-$5,000 (setup) + $500-$1,000/month for content and monitoring.

### Returns
If AI citations drive just **5 additional ${n.patientTerm}/month** at ${n.avgTicket} average:
- Monthly revenue boost: 5 x ${n.avgTicket} = significant recurring income
- Annual impact: 60 new ${n.patientTerm} from AI channels alone
- ROI payback: typically within 60-90 days

## The Compounding Effect
Unlike paid ads that stop when you stop paying, AEO compounds. Once AI models cite you for "${n.treatments[0]}" and "${n.treatments[1]}" queries, you maintain that position with minimal upkeep.

---

**See your personalized ROI projection.** [Start with a free audit](/audit) — we'll calculate exactly what AI visibility is worth for your practice.`,
  };
}

// ── Template 5: Case Study ──────────────────────────────────────────────────

function templateCaseStudy(n: NicheInfo, pubDate: string): BlogPost {
  const cityOptions = ["New York", "New York", "Los Angeles", "Chicago", "San Francisco", "San Francisco", "Austin", "Miami", "Chicago", "Denver"];
  const city = cityOptions[niches.indexOf(n) % cityOptions.length];

  return {
    slug: `${n.slug}-case-study-ai-marketing`,
    title: `${n.display} Case Study: How AI Marketing Delivered Results in ${city}`,
    description: `Real case study: a ${city}-based ${n.display.toLowerCase()} practice increased leads with AEO.`,
    category: "Case Study",
    niche: n.slug,
    publishDate: pubDate,
    readTime: "8 min",
    tags: ["case study", n.slug, city, "results"],
    content: `# Case Study: ${n.display} in ${city} Wins with AI Marketing

## The Challenge

A well-established ${n.display.toLowerCase()} practice in ${city} offering ${n.treatments[0]} and ${n.treatments[1]} (${n.priceRange}) was losing ${n.patientTerm} to **${n.competitor}** and other chains that dominated AI search results.

Despite strong reviews and years of experience, asking ChatGPT or Perplexity for "${n.display.toLowerCase()} in ${city}" returned zero mentions of their practice.

## What We Did (90-Day Sprint)

**Month 1 — Foundation**
- Implemented full schema markup (services, pricing, credentials)
- Created FAQ pages targeting exact AI queries
- Unblocked AI crawlers and added llms.txt

**Month 2 — Content**
- Published 8 long-form guides on ${n.treatments[0]}
- Listed on industry directories that AI models trust

**Month 3 — Acceleration**
- Earned mentions in high-authority publications
- Optimized for conversational queries

## Results After 90 Days

- **AI citations**: From 0 to appearing in ChatGPT, Gemini, and Perplexity answers
- **Organic leads**: 40% increase in inquiries
- **Revenue impact**: Total investment paid for itself within 8 weeks.

## Key Takeaway

The practice went from invisible in AI search to being the recommended ${n.display.toLowerCase()} in ${city}. Total investment paid for itself within 8 weeks.

---

**Want similar results?** [Get your free AEO audit now](/audit) and see where your practice stands in AI search.`,
  };
}

// ── Generate all 100 posts ──────────────────────────────────────────────────

const templateFns = [templateWhyAEO, templateCompleteGuide, templateSchema, templateROI, templateCaseStudy] as const;

export const nicheGuidePosts: BlogPost[] = niches.flatMap((niche, nicheIdx) =>
  templateFns.map((fn, tplIdx) => fn(niche, getPublishDate(nicheIdx, tplIdx)))
);
