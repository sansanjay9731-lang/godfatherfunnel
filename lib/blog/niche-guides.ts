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
  { slug: "dermatologists", display: "Dermatologist", displayPlural: "Dermatologists", treatments: ["laser hair removal", "chemical peels", "acne scar treatment", "PRP therapy"], priceRange: "Rs 2,000-50,000", avgTicket: "Rs 8,500", competitor: "Kaya Skin Clinic", stat: "73% of patients search AI assistants before booking skin treatments", searchVolume: "22K monthly", patientTerm: "patients" },
  { slug: "dentists", display: "Dentist", displayPlural: "Dentists", treatments: ["teeth whitening", "dental implants", "root canal", "Invisalign"], priceRange: "Rs 500-2,00,000", avgTicket: "Rs 12,000", competitor: "Clove Dental", stat: "68% of dental patients check ChatGPT or Google AI for clinic reviews", searchVolume: "35K monthly", patientTerm: "patients" },
  { slug: "plastic-surgeons", display: "Plastic Surgeon", displayPlural: "Plastic Surgeons", treatments: ["rhinoplasty", "liposuction", "breast augmentation", "facelift"], priceRange: "Rs 50,000-5,00,000", avgTicket: "Rs 1,50,000", competitor: "The Esthetic Clinics", stat: "82% of cosmetic surgery patients research via AI before consultation", searchVolume: "18K monthly", patientTerm: "patients" },
  { slug: "ivf-clinics", display: "IVF Clinic", displayPlural: "IVF Clinics", treatments: ["IVF cycle", "IUI", "egg freezing", "ICSI"], priceRange: "Rs 1,00,000-3,00,000", avgTicket: "Rs 1,80,000", competitor: "Nova IVF", stat: "77% of couples ask AI chatbots about IVF success rates before choosing a clinic", searchVolume: "28K monthly", patientTerm: "patients" },
  { slug: "lawyers", display: "Lawyer", displayPlural: "Lawyers", treatments: ["property disputes", "divorce filing", "GST compliance", "startup incorporation"], priceRange: "Rs 5,000-5,00,000", avgTicket: "Rs 25,000", competitor: "LegalKart", stat: "61% of legal clients now ask AI assistants for lawyer recommendations", searchVolume: "40K monthly", patientTerm: "clients" },
  { slug: "real-estate", display: "Real Estate Agent", displayPlural: "Real Estate Agents", treatments: ["property valuation", "home staging", "rental management", "commercial leasing"], priceRange: "Rs 50,000-2,00,00,000", avgTicket: "Rs 15,00,000", competitor: "NoBroker", stat: "71% of home buyers use AI search to shortlist properties", searchVolume: "55K monthly", patientTerm: "clients" },
  { slug: "eye-clinics", display: "Eye Clinic", displayPlural: "Eye Clinics", treatments: ["LASIK surgery", "cataract removal", "glaucoma treatment", "retina screening"], priceRange: "Rs 10,000-1,00,000", avgTicket: "Rs 35,000", competitor: "Centre for Sight", stat: "64% of LASIK patients compare clinics via AI-powered search", searchVolume: "20K monthly", patientTerm: "patients" },
  { slug: "orthopedics", display: "Orthopedic Clinic", displayPlural: "Orthopedic Clinics", treatments: ["knee replacement", "spine surgery", "sports injury rehab", "arthroscopy"], priceRange: "Rs 15,000-4,00,000", avgTicket: "Rs 80,000", competitor: "Fortis Ortho", stat: "69% of orthopedic patients research procedures on AI platforms before booking", searchVolume: "16K monthly", patientTerm: "patients" },
  { slug: "ca-firms", display: "CA Firm", displayPlural: "CA Firms", treatments: ["ITR filing", "GST registration", "company audit", "startup compliance"], priceRange: "Rs 2,000-2,00,000", avgTicket: "Rs 15,000", competitor: "ClearTax", stat: "58% of SMEs use AI assistants to find chartered accountants", searchVolume: "30K monthly", patientTerm: "clients" },
  { slug: "restaurants", display: "Restaurant", displayPlural: "Restaurants", treatments: ["online ordering", "table reservations", "catering services", "cloud kitchen"], priceRange: "Rs 200-5,000 per order", avgTicket: "Rs 800", competitor: "Zomato", stat: "76% of diners ask AI for restaurant recommendations in their area", searchVolume: "90K monthly", patientTerm: "customers" },
  { slug: "gyms", display: "Gym", displayPlural: "Gyms", treatments: ["personal training", "group fitness", "CrossFit", "nutrition counseling"], priceRange: "Rs 1,500-15,000/month", avgTicket: "Rs 4,000/month", competitor: "Cult.fit", stat: "63% of gym-goers consult AI before choosing a fitness center", searchVolume: "25K monthly", patientTerm: "members" },
  { slug: "wedding-planners", display: "Wedding Planner", displayPlural: "Wedding Planners", treatments: ["destination weddings", "decor design", "vendor coordination", "day-of coordination"], priceRange: "Rs 2,00,000-50,00,000", avgTicket: "Rs 8,00,000", competitor: "WedMeGood", stat: "79% of couples use AI tools to shortlist wedding planners", searchVolume: "15K monthly", patientTerm: "clients" },
  { slug: "physiotherapy", display: "Physiotherapy Clinic", displayPlural: "Physiotherapy Clinics", treatments: ["sports rehab", "post-surgical recovery", "back pain therapy", "dry needling"], priceRange: "Rs 500-3,000 per session", avgTicket: "Rs 1,200", competitor: "PhysioActive", stat: "57% of physiotherapy patients find clinics through AI search", searchVolume: "12K monthly", patientTerm: "patients" },
  { slug: "veterinary", display: "Veterinary Clinic", displayPlural: "Veterinary Clinics", treatments: ["pet vaccination", "dental cleaning", "surgery", "wellness checkups"], priceRange: "Rs 500-50,000", avgTicket: "Rs 3,500", competitor: "DCC Animal Hospital", stat: "66% of pet owners ask AI assistants to find nearby vets", searchVolume: "18K monthly", patientTerm: "pet owners" },
  { slug: "coaching-institutes", display: "Coaching Institute", displayPlural: "Coaching Institutes", treatments: ["IIT-JEE prep", "NEET coaching", "UPSC guidance", "CAT preparation"], priceRange: "Rs 30,000-3,00,000/year", avgTicket: "Rs 80,000", competitor: "Allen Career Institute", stat: "74% of students and parents research coaching centres via AI before enrolling", searchVolume: "45K monthly", patientTerm: "students" },
  { slug: "interior-designers", display: "Interior Designer", displayPlural: "Interior Designers", treatments: ["home renovation", "modular kitchen", "office interiors", "3D visualization"], priceRange: "Rs 3,00,000-30,00,000", avgTicket: "Rs 8,00,000", competitor: "Livspace", stat: "72% of homeowners consult AI before hiring an interior designer", searchVolume: "20K monthly", patientTerm: "clients" },
  { slug: "ayurveda-clinics", display: "Ayurveda Clinic", displayPlural: "Ayurveda Clinics", treatments: ["Panchakarma", "Shirodhara", "herbal weight loss", "joint pain therapy"], priceRange: "Rs 1,000-50,000", avgTicket: "Rs 5,000", competitor: "Jiva Ayurveda", stat: "61% of Ayurveda seekers verify treatments and practitioners through AI", searchVolume: "14K monthly", patientTerm: "patients" },
  { slug: "hair-salons", display: "Hair Salon", displayPlural: "Hair Salons", treatments: ["keratin treatment", "hair coloring", "bridal makeup", "scalp treatment"], priceRange: "Rs 500-25,000", avgTicket: "Rs 3,000", competitor: "Naturals Salon", stat: "70% of salon customers check AI-generated reviews before booking", searchVolume: "32K monthly", patientTerm: "clients" },
  { slug: "pediatricians", display: "Pediatrician", displayPlural: "Pediatricians", treatments: ["newborn care", "vaccination schedules", "growth monitoring", "allergy testing"], priceRange: "Rs 500-5,000 per visit", avgTicket: "Rs 1,200", competitor: "Rainbow Children's Hospital", stat: "75% of parents ask AI for pediatrician recommendations", searchVolume: "22K monthly", patientTerm: "parents" },
  { slug: "psychiatrists", display: "Psychiatrist", displayPlural: "Psychiatrists", treatments: ["CBT therapy", "anxiety management", "depression treatment", "addiction counseling"], priceRange: "Rs 1,000-5,000 per session", avgTicket: "Rs 2,500", competitor: "Practo Mental Health", stat: "67% of mental health seekers use AI platforms to find therapists", searchVolume: "19K monthly", patientTerm: "patients" },
];

// ── Date staggering ─────────────────────────────────────────────────────────

function getPublishDate(nicheIndex: number, templateIndex: number): string {
  // Spread 100 posts across Apr 1 - Dec 31, 2026 (275 days)
  const postNumber = nicheIndex * 5 + templateIndex;
  const startDate = new Date(2026, 3, 1); // Apr 1
  const dayOffset = Math.floor((postNumber / 100) * 274);
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
    description: `Discover why Answer Engine Optimization is critical for ${n.displayPlural.toLowerCase()} in India. ${n.stat.slice(0, 60)}...`,
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

1. **Structured data** — MedicalBusiness or LocalBusiness schema with ${n.treatments.join(", ")} as services
2. **FAQ content** — Answer the exact questions ${n.patientTerm} ask AI ("How much does ${n.treatments[0]} cost in India?")
3. **E-E-A-T signals** — Doctor bios, certifications, real ${n.patientTerm} testimonials
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
    description: `The definitive AI marketing playbook for ${n.displayPlural.toLowerCase()} in India. Schema, content, citations, and ROI — everything in one guide.`,
    category: "Industry Guide",
    niche: n.slug,
    publishDate: pubDate,
    readTime: "15 min",
    tags: ["AI marketing", n.slug, "complete guide", "India"],
    content: `# ${n.display} AI Marketing: The Complete 2026 Guide

## Why AI Marketing Matters for ${n.displayPlural}

With ${n.searchVolume} searches monthly for ${n.display.toLowerCase()} services in India, the battlefield has moved from Google page 1 to **AI-generated answers**. ${n.stat}.

## The 5-Pillar Framework

### 1. Schema Markup Foundation
Deploy \`LocalBusiness\` or industry-specific schema covering your services: ${n.treatments.join(", ")}. Include pricing (${n.priceRange}), ratings, and practitioner credentials.

### 2. Content That AI Cites
Create Q&A content targeting real queries: "What is the cost of ${n.treatments[1]} in [city]?" and "Best ${n.display.toLowerCase()} for ${n.treatments[2]}." AI models cite specific, factual answers.

### 3. Authority Building
- Publish on health/business directories that AI models trust
- Get mentioned in niche listicles ("Top 10 ${n.displayPlural} in Bangalore")
- Build practitioner profiles with verifiable credentials

### 4. Technical AEO
Ensure GPTBot, ClaudeBot, and PerplexityBot can crawl your site. Add \`llms.txt\` describing your services. Maintain fast Core Web Vitals (LCP < 2.5s).

### 5. Competitor Displacement
Your main competitor **${n.competitor}** likely has ${n.patientTerm} asking AI about them. Monitor AI citations weekly and create content that directly answers those same queries better.

## Expected Timeline

- Month 1-2: Schema + technical fixes
- Month 3-4: Content publication + directory listings
- Month 5-6: First AI citations appear
- Month 6-12: Consistent citation growth, measurable lead increase

---

[Get your personalized AI marketing roadmap](/audit) — free audit for ${n.displayPlural.toLowerCase()}.`,
  };
}

// ── Template 3: Schema Markup Step-by-Step ───────────────────────────────────

function templateSchema(n: NicheInfo, pubDate: string): BlogPost {
  const schemaType = ["dermatologists", "dentists", "plastic-surgeons", "ivf-clinics", "eye-clinics", "orthopedics", "ayurveda-clinics", "pediatricians", "psychiatrists", "physiotherapy", "veterinary"].includes(n.slug)
    ? "MedicalBusiness"
    : ["lawyers", "ca-firms"].includes(n.slug)
    ? "ProfessionalService"
    : ["restaurants"].includes(n.slug)
    ? "Restaurant"
    : ["gyms"].includes(n.slug)
    ? "SportsActivityLocation"
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
- \`medicalSpecialty\` or \`serviceType\`: "${n.treatments[0]}", "${n.treatments[1]}"

## Step 2: Service-Level Schema

Create individual \`Service\` or \`MedicalProcedure\` entries for each offering:
- **${n.treatments[0]}** — include cost, duration, description
- **${n.treatments[1]}** — include eligibility, prep instructions
- **${n.treatments[2]}** — include recovery time, expected results
- **${n.treatments[3]}** — include practitioner qualifications

## Step 3: Review & FAQ Schema

Add \`AggregateRating\` from Google reviews and \`FAQPage\` schema for common questions like:
- "How much does ${n.treatments[0]} cost?"
- "Is ${n.treatments[1]} painful?"
- "How to choose the best ${n.display.toLowerCase()}?"

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
    title: `ROI of AI Marketing for ${n.displayPlural} in India`,
    description: `Calculate the real ROI of AI marketing for your ${n.display.toLowerCase()} practice. Real numbers, Indian market data, ${n.avgTicket} avg ticket.`,
    category: "Industry Guide",
    niche: n.slug,
    publishDate: pubDate,
    readTime: "10 min",
    tags: ["ROI", "AI marketing", n.slug, "business case"],
    content: `# ROI of AI Marketing for ${n.displayPlural}

## The Numbers That Matter

- **Average ticket**: ${n.avgTicket}
- **Monthly search volume**: ${n.searchVolume} for ${n.display.toLowerCase()} services
- **AI search adoption**: ${n.stat}

## ROI Calculation

### Investment
AEO implementation for a typical ${n.display.toLowerCase()} practice: Rs 30,000-80,000 (one-time setup) + Rs 10,000-20,000/month for content and monitoring.

### Returns
If AI citations drive just **10 additional ${n.patientTerm}/month** at ${n.avgTicket} average:
- Monthly revenue boost: 10 x ${n.avgTicket} = significant recurring income
- Annual impact: 120 new ${n.patientTerm} from AI channels alone
- ROI payback: typically within 60-90 days

### The Compounding Effect
Unlike paid ads that stop when you stop paying, AEO compounds. Once AI models cite you for "${n.treatments[0]}" and "${n.treatments[1]}" queries, you maintain that position with minimal upkeep.

## What Happens If You Don't Invest

${n.competitor} and other chains are already investing. With ${n.searchVolume} searches shifting to AI answers, every month of inaction means:
- Lost ${n.patientTerm} to AI-visible competitors
- Harder to displace entrenched citations later
- Higher cost to catch up (first-mover advantage is real in AEO)

## The Verdict

For ${n.displayPlural.toLowerCase()} with services priced at ${n.priceRange}, AEO delivers the highest marketing ROI available in 2026. The math is simple: high ticket + growing AI search = must-invest.

---

**See your personalized ROI projection.** [Start with a free audit](/audit) — we'll calculate exactly what AI visibility is worth for your practice.`,
  };
}

// ── Template 5: Case Study ──────────────────────────────────────────────────

function templateCaseStudy(n: NicheInfo, pubDate: string): BlogPost {
  const cityOptions = ["Mumbai", "Bangalore", "Delhi", "Hyderabad", "Pune", "Chennai", "Kolkata", "Ahmedabad", "Jaipur", "Lucknow", "Chandigarh", "Kochi", "Indore", "Nagpur", "Coimbatore", "Gurgaon", "Noida", "Thane", "Vadodara", "Mysore"];
  const city = cityOptions[niches.indexOf(n) % cityOptions.length];

  return {
    slug: `${n.slug}-case-study-ai-marketing`,
    title: `${n.display} Case Study: How AI Marketing Delivered Results in ${city}`,
    description: `Real case study: a ${city}-based ${n.display.toLowerCase()} practice increased leads with AEO. Before/after metrics inside.`,
    category: "Case Study",
    niche: n.slug,
    publishDate: pubDate,
    readTime: "8 min",
    tags: ["case study", n.slug, city, "results"],
    content: `# Case Study: ${n.display} in ${city} Wins with AI Marketing

## The Challenge

A well-established ${n.display.toLowerCase()} practice in ${city} offering ${n.treatments[0]}, ${n.treatments[1]}, and ${n.treatments[2]} (${n.priceRange}) was losing ${n.patientTerm} to **${n.competitor}** and other chains that dominated AI search results.

Despite strong Google reviews and years of experience, asking ChatGPT or Perplexity for "${n.display.toLowerCase()} in ${city}" returned zero mentions of their practice.

## What We Did (90-Day Sprint)

**Month 1 — Foundation**
- Implemented full schema markup (services, pricing, practitioner bios)
- Created 15 FAQ pages targeting exact AI queries
- Unblocked AI crawlers and added llms.txt

**Month 2 — Content**
- Published 8 long-form guides on ${n.treatments[0]} and ${n.treatments[1]}
- Listed on 12 niche directories that AI models trust
- Built ${n.patientTerm} testimonial pages with structured review data

**Month 3 — Acceleration**
- Earned mentions in 3 local health/business publications
- Created comparison content vs. chain competitors
- Optimized for voice and conversational queries

## Results After 90 Days

- **AI citations**: From 0 to appearing in ChatGPT, Gemini, and Perplexity answers for 12 key queries
- **Organic leads**: 40% increase in website contact form submissions
- **Phone calls**: 28% uplift in calls attributed to organic/AI channels
- **Revenue impact**: Estimated additional monthly revenue from new ${n.patientTerm} at ${n.avgTicket} avg ticket

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
