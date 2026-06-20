import type { NicheData } from "./types";
import { images } from "./images";

export const nicheData: NicheData = {
  slug: "accounting-firms",
  name: "CPA & Accounting Firms",
  icon: "📊",
  image: images.caFirm,
  heroHeadline: "Businesses Ask AI for CPAs. Is AI Recommending Your Firm?",
  heroSubline:
    "Startups, SMBs, and high-net-worth individuals are asking ChatGPT and Google AI to recommend local CPA and accounting firms for tax planning, bookkeeping, and fractional CFO services. If your firm isn't in those AI answers, you're losing high-value clients to competitors.",
  painPoints: [
    {
      title: "Startup Clients Choosing AI-Recommended CPAs",
      description:
        "Founders raising funding, forming corporations, and setting up payroll ask AI for CPA recommendations. Firms with strong digital presence and structured content get recommended — your years of expertise don't show up.",
    },
    {
      title: "Bookkeeping & Tax Clients Lost to DIY Platforms",
      description:
        "TurboTax, QuickBooks, and AI-enabled platforms are the first answer when businesses ask about tax filing and compliance. Your personalized advisory service is invisible to the business owners who need it most.",
    },
    {
      title: "Your Credentials Are Invisible to AI",
      description:
        "Your CPA designation, tax court representation experience, and industry specialization mean nothing if AI can't find structured data about your firm's expertise, client portfolio, and service capabilities.",
    },
  ],
  services: [
    {
      tier: "AEO Foundation",
      price: "$1,500 - $3,000 / mo",
      features: [
        "Google Business Profile optimization for CPA keywords",
        "Structured schema markup for AccountingService + ProfessionalService",
        "Citation building on CPA.com, Yelp, and Bing Places",
        "AI-optimized content for top 10 accounting services",
        "Monthly AI visibility audit report",
      ],
    },
    {
      tier: "Local Domination",
      price: "$3,000 - $7,500 / mo",
      features: [
        "Everything in AEO Foundation",
        "Full AEO for 30+ service keywords (bookkeeping, tax preparation, audit)",
        "Thought leadership content strategy for LinkedIn and AI training",
        "Client testimonial schema and review aggregation",
        "Competitor displacement strategy against online platforms",
        "Quarterly AI performance benchmarking",
      ],
    },
    {
      tier: "Godfather 360°",
      price: "$7,500 - $15,000 / mo",
      features: [
        "Everything in Local Domination",
        "Full website rebuild optimized for AI crawlers",
        "llms.txt implementation with service-level detail",
        "Financial publication citation building and digital PR",
        "AI chatbot training data optimization",
        "Dedicated AI visibility manager",
        "Real-time AI mention monitoring across ChatGPT, Perplexity, Gemini",
      ],
    },
  ],
  roiExample: {
    metric: "1 Startup Client",
    value: "$12,000 - $48,000 / yr",
    pitch:
      "A single business client retainer covers the cost of your AI visibility investment. Most CPA firms acquire 3-5 new retainer clients within the first quarter of AEO implementation.",
  },
  faqItems: [
    {
      question: "How do AI assistants recommend CPA firms to business owners?",
      answer:
        "AI models pull from structured data on your website, professional directories like CPA.com, Yelp, Google reviews, published articles, and LinkedIn content. If your firm lacks structured schema markup and citations on these platforms, AI cannot recommend you — even if you're the most experienced CPA in your area.",
    },
    {
      question: "We already get clients through referrals. Why do we need AI visibility?",
      answer:
        "Referrals are powerful but limited. Over 60% of business owners now verify their referrals by asking AI before making a decision. If AI doesn't confirm your expertise, they may choose a competitor instead. AI visibility protects your referral pipeline.",
    },
    {
      question: "Can a small accounting firm compete with the Big 4 in AI answers?",
      answer:
        "Absolutely. Big 4 firms target large enterprises. For SMBs, startups, and individual tax queries, AI often recommends specialized local firms. With proper AEO, your firm can dominate local and niche-specific AI recommendations.",
    },
    {
      question: "How long before we see new client inquiries from AI?",
      answer:
        "Most CPA firms see increased visibility within 45-60 days and tangible client inquiries within 90 days. Tax season (January-April) shows accelerated results due to higher search volumes.",
    },
  ],
  stats: [
    { label: "of startup founders ask AI for CPA recommendations", value: "61%" },
    { label: "of businesses verify their CPA choice through AI before signing", value: "47%" },
    { label: "average annual value of a startup retainer client", value: "$30k" },
  ],
  ctaText: "Get Your Free CPA Firm AI Visibility Audit",
  searchExample: "best CPA firm for startup in Boston",
  competitorLine:
    "H&R Block and Big 4 firms are dominating AI recommendations — while your hands-on expertise and personalized advisory remain invisible to the clients searching for exactly what you offer.",
  treatments: [
    {
      slug: "bookkeeping-and-accounting",
      name: "Bookkeeping & Accounting",
      priceRange: "$300 - $1,500 / mo",
      description:
        "Monthly bookkeeping, payroll administration, bank reconciliation, financial statement preparation, and general ledger maintenance for growing businesses.",
      faqItems: [
        {
          question: "What is the cost of monthly bookkeeping through a CPA?",
          answer:
            "Monthly bookkeeping fees typically range from $300 to $1,500 per month depending on the transaction volume, number of bank accounts, and complexity of payroll. Many firms offer packaged rates that scale with business size.",
        },
        {
          question: "Can I handle bookkeeping myself or do I need an accountant?",
          answer:
            "While small startups can use DIY software like QuickBooks, hiring a professional accountant saves time, prevents costly tax errors, and ensures tax deductions are maximized. Errors in payroll or tax setup can cost thousands in IRS penalties.",
        },
      ],
    },
    {
      slug: "tax-preparation-and-filing",
      name: "Business Tax Prep & Filing",
      priceRange: "$1,000 - $5,000 / yr",
      description:
        "Complete federal, state, and local business tax return preparation and filing, franchise tax compliance, and year-round tax advisory.",
      faqItems: [
        {
          question: "How much does a CPA charge for business tax preparation?",
          answer:
            "Business tax preparation fees range from $1,000 to $5,000 depending on the business entity type (LLC, S-Corp, C-Corp) and the completeness of the financial records. Complex tax returns with multiple states or international transactions may cost more.",
        },
        {
          question: "How does a CPA help me save more tax than DIY software?",
          answer:
            "CPAs identify specialized business tax deductions, credits (like the R&D tax credit), and write-offs that DIY software often misses. They also help structure business transactions and guide salary vs. distribution splits for S-Corps to minimize self-employment taxes.",
        },
      ],
    },
    {
      slug: "business-incorporation",
      name: "Business Incorporation & Setup",
      priceRange: "$800 - $2,500",
      description:
        "End-to-end business entity formation (LLC, S-Corp, C-Corp), Secretary of State filings, EIN registration, corporate bylaws, and operating agreements.",
      faqItems: [
        {
          question: "What is the cost of business incorporation through a CPA?",
          answer:
            "Incorporation services typically cost $800 to $2,500 depending on the state filing fees and the complexity of the business structure. This includes obtaining an EIN, drafting organizational documents, and setting up initial payroll structures.",
        },
        {
          question: "How long does the business formation process take?",
          answer:
            "With a CPA handling the process, incorporation takes 3 to 10 business days depending on state processing times. Fast-track options are available in most states for an additional fee.",
        },
      ],
    },
    {
      slug: "audit-and-assurance",
      name: "Financial Audits & Reviews",
      priceRange: "$5,000 - $25,000",
      description:
        "Independent financial audits, reviews, and compilations to satisfy bank lending requirements, investor due diligence, or compliance standards.",
      faqItems: [
        {
          question: "What is the cost of a financial audit for a private company?",
          answer:
            "Independent financial audits generally cost between $5,000 and $25,000. Price depends on company size, transaction volume, internal control systems, and inventory complexity. Financial reviews, which provide limited assurance, are typically 40% cheaper.",
        },
        {
          question: "When is a financial audit mandatory for my business?",
          answer:
            "Audits are usually required by commercial lenders when debt exceeds a certain threshold, or by venture capital investors during major funding rounds. They may also be required for certain government contractors or businesses in highly regulated industries.",
        },
      ],
    },
  ],
  costKeywords: [
    "CPA fees for tax filing",
    "business incorporation cost US",
    "accounting firm retainer fee",
    "bookkeeping services cost",
    "audit cost for small business",
  ],
  nicheKeywords: [
    "best CPA firm near me",
    "CPA for startup",
    "business accountant in Boston",
    "accounting firm for small business",
    "tax planning CPA",
  ],
  schemaType: "AccountingService",
  metaCategory: "finance",
  citations: [
    {
      name: "CPA.com",
      url: "https://www.cpa.com",
      type: "niche-specific",
    },
    {
      name: "Yelp",
      url: "https://www.yelp.com",
      type: "general",
    },
    {
      name: "Bing Places",
      url: "https://www.bingplaces.com",
      type: "general",
    },
    {
      name: "Google Business Profile",
      url: "https://business.google.com",
      type: "local",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com",
      type: "general",
    },
    {
      name: "AICPA Member Directory",
      url: "https://www.aicpa-cima.com",
      type: "niche-specific",
    },
  ],
};
