import type { NicheData } from "./types";
import { images } from "./images";

export const nicheData: NicheData = {
  slug: "ca-firms",
  name: "CA Firms",
  icon: "📊",
  image: images.caFirm,
  heroHeadline: "Businesses Ask AI for CAs. Is AI Recommending Your Firm?",
  heroSubline:
    "Startups, MSMEs, and HNIs are asking ChatGPT and Google AI to recommend chartered accountants for GST filing, company registration, and tax planning. If your CA firm isn't in those AI answers, you're losing $50K-200k annual retainer clients to competitors.",
  painPoints: [
    {
      title: "Startup Clients Choosing AI-Recommended CAs",
      description:
        "Founders raising funding, registering companies, and filing compliance ask AI for CA recommendations. Firms with strong digital presence and structured content get recommended — your 15+ years of expertise and 500+ clients don't show up.",
    },
    {
      title: "GST & ITR Clients Lost to Online Platforms",
      description:
        "ClearTax, Zoho Books, and AI assistants are the first answer when businesses ask about GST registration, ITR filing, and compliance. Your personalized advisory service is invisible to the business owners who need it most.",
    },
    {
      title: "Your Credentials Are Invisible to AI",
      description:
        "Your FCA designation, DISA certification, years of ITAT experience, and industry specialization mean nothing if AI can't find structured data about your firm's expertise, client portfolio, and service capabilities.",
    },
  ],
  services: [
    {
      tier: "AI Foundation",
      price: "$15,000 - $30,000",
      features: [
        "Google Business Profile optimization for CA firm keywords",
        "Structured schema markup for AccountingService + ProfessionalService",
        "Citation building on CAclubindia, Yelp, and Bing Places",
        "AI-optimized content for top 10 CA services",
        "Monthly AI visibility audit report",
      ],
    },
    {
      tier: "AI Growth",
      price: "$50,000 - $1,000",
      features: [
        "Everything in AI Foundation",
        "Full AEO for 30+ service keywords (GST, ITR, audit, registration)",
        "Thought leadership content strategy for LinkedIn and AI training",
        "Client testimonial schema and review aggregation",
        "Competitor displacement strategy against Big 4 and online platforms",
        "Quarterly AI performance benchmarking",
      ],
    },
    {
      tier: "AI Dominance",
      price: "$150,000 - $3,000",
      features: [
        "Everything in AI Growth",
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
    value: "$50K-200k/year retainer",
    pitch:
      "A single startup retainer client covers 2-12 months of your AI visibility investment. Most CA firms acquire 5-10 new retainer clients within the first quarter of AEO implementation.",
  },
  faqItems: [
    {
      question: "How does AI recommend CA firms to business owners?",
      answer:
        "AI models pull from structured data on your website, professional directories like CAclubindia and Yelp, Google reviews, published articles, and LinkedIn content. If your firm lacks structured schema markup and citations on these platforms, AI cannot recommend you — even if you're the most experienced CA in your area.",
    },
    {
      question: "We already get clients through referrals. Why do we need AI visibility?",
      answer:
        "Referrals are powerful but limited. 67% of business owners now verify their referral by asking AI before making a decision. If AI doesn't confirm your expertise, they may choose a competitor instead. AI visibility protects your referral pipeline and opens a completely new client acquisition channel.",
    },
    {
      question: "Can a small CA firm compete with Deloitte and KPMG in AI answers?",
      answer:
        "Absolutely. Big 4 firms target large enterprises. For SME, startup, and individual tax queries, AI often recommends specialized local firms. With proper AEO, your firm can dominate local and niche-specific AI recommendations that Big 4 firms don't even target.",
    },
    {
      question: "How long before we see new client inquiries from AI?",
      answer:
        "Most CA firms see increased visibility within 45-60 days and tangible client inquiries within 90 days. Tax season (January-March) and company registration peaks (March-April) show accelerated results due to higher search volumes.",
    },
  ],
  stats: [
    { label: "of startup founders ask AI for CA recommendations", value: "61%" },
    { label: "of businesses verify their CA choice through AI before signing", value: "47%" },
    { label: "average annual value of a startup retainer client", value: "$120k" },
  ],
  ctaText: "Get Your Free CA Firm AI Visibility Audit",
  searchExample: "best CA firm for startup in Sydney",
  competitorLine:
    "ClearTax and Big 4 firms are dominating AI recommendations — while your decades of hands-on expertise and personalized advisory remain invisible to the clients searching for exactly what you offer.",
  treatments: [
    {
      slug: "gst-registration-cost",
      name: "GST Registration & Filing",
      priceRange: "$2,000 - $15,000",
      description:
        "Complete GST registration, monthly/quarterly return filing (GSTR-1, GSTR-3B), annual return filing, GST audit, and GST compliance advisory for businesses of all sizes.",
      faqItems: [
        {
          question: "What is the cost of GST registration through a CA?",
          answer:
            "GST registration through a CA costs $2,000-5,000 as a one-time fee. Monthly GST filing (GSTR-1 + GSTR-3B) costs $1,500-5,000/month depending on transaction volume. Annual return filing costs $5,000-15,000. Many CAs offer bundled packages for all GST services.",
        },
        {
          question: "Can I file GST returns myself or do I need a CA?",
          answer:
            "While you can file GST returns on the portal yourself, a CA ensures compliance accuracy, proper input tax credit claims, and protection during audits. Errors in GST filing can result in penalties of $50-200 per day. Most businesses save more in correct ITC claims than they spend on CA fees.",
        },
      ],
    },
    {
      slug: "company-registration-cost",
      name: "Company Registration",
      priceRange: "$8,000 - $25,000",
      description:
        "End-to-end company registration including Private Limited, LLP, OPC, and Section 8 company incorporation with MCA, DIN, DSC, and all statutory registrations.",
      faqItems: [
        {
          question: "What is the cost of Private Limited Company registration globally?",
          answer:
            "Private Limited Company registration costs $8,000-25,000 including government fees ($3,000-7,000), DSC ($1,500-2,000), DIN, name approval, and CA professional fees. LLP registration costs $6,000-15,000. OPC registration costs $7,000-18,000. These are one-time costs excluding annual compliance.",
        },
        {
          question: "How long does company registration take?",
          answer:
            "With a CA handling the process, company registration takes 7-15 business days from document submission to Certificate of Incorporation. SPICe+ form has streamlined the process. Your CA will also handle PAN, TAN, GST, and bank account opening simultaneously.",
        },
        {
          question: "What ongoing compliance costs should I budget for after registration?",
          answer:
            "Annual compliance for a Private Limited Company includes: annual return filing ($5,000-10,000), income tax return ($5,000-15,000), statutory audit if applicable ($15,000-50,000), GST compliance ($18,000-60,000/year), and board meeting minutes. Budget $50,000-1,50,000/year for a CA retainer covering all compliance.",
        },
      ],
    },
    {
      slug: "income-tax-filing-cost",
      name: "Income Tax Filing & Planning",
      priceRange: "$1,500 - $50,000",
      description:
        "Comprehensive income tax services including ITR filing for individuals, HUFs, firms, and companies, tax planning and optimization, capital gains computation, NRI taxation, and income tax assessment representation.",
      faqItems: [
        {
          question: "What does a CA charge for income tax filing?",
          answer:
            "Individual ITR filing costs $1,500-5,000 for salaried persons and $3,000-10,000 for business owners. Company ITR filing costs $10,000-50,000 depending on turnover and complexity. Tax planning consultation is usually $5,000-15,000 and often saves multiples of the fee in tax.",
        },
        {
          question: "How can a CA help me save more tax than filing myself?",
          answer:
            "CAs identify deductions and exemptions you might miss — Section 80C/80D/80G optimizations, HRA calculations, capital gains indexation, business expense claims, and advance tax planning. On average, professional tax planning saves individuals $20,000-1,000 per year beyond DIY filing.",
        },
      ],
    },
    {
      slug: "audit-service-cost",
      name: "Statutory & Tax Audit",
      priceRange: "$15,000 - $2,000",
      description:
        "Statutory audit under Companies Act, tax audit under Section 44AB, GST audit, internal audit, concurrent audit, and stock audit services for businesses of all sizes.",
      faqItems: [
        {
          question: "What is the cost of statutory audit globally?",
          answer:
            "Statutory audit fees range from $15,000-50,000 for small companies to $50,000-2,000 for medium companies. Fees depend on company turnover, transaction volume, number of branches, and complexity. Tax audit (44AB) typically costs $10,000-30,000 additionally.",
        },
        {
          question: "When is audit mandatory for my business?",
          answer:
            "Tax audit is mandatory if business turnover exceeds $1 crore ($10 crore for digital transactions). Statutory audit is mandatory for all companies regardless of size. GST audit was mandatory for turnover above $5 crore (now self-certification). Your CA will advise on all applicable audit requirements.",
        },
      ],
    },
    {
      slug: "trademark-registration-cost",
      name: "Trademark Registration",
      priceRange: "$5,000 - $20,000",
      description:
        "Complete trademark registration services including trademark search, application filing, response to examination reports, trademark opposition handling, and renewal services.",
      faqItems: [
        {
          question: "What is the cost of trademark registration through a CA?",
          answer:
            "Trademark registration costs $5,000-20,000 including government fees ($4,500 for companies, $4,500 for individuals with e-filing) and professional fees. Multi-class registration costs additional per class. The process takes 12-18 months for completion.",
        },
        {
          question: "Why should I register my trademark through a CA instead of online portals?",
          answer:
            "A CA ensures proper trademark search to avoid conflicts, correct classification under Nice Classification, stronger application that withstands examination, and professional handling of objections. DIY applications have a 40% higher rejection rate due to classification and description errors.",
        },
      ],
    },
    {
      slug: "import-export-license-cost",
      name: "Import Export License (IEC)",
      priceRange: "$3,000 - $10,000",
      description:
        "Import Export Code (IEC) registration with DGFT, RCMC registration, export incentive advisory, MEIS/RoDTEP claims, customs duty optimization, and foreign trade compliance.",
      faqItems: [
        {
          question: "What is the cost of IEC registration?",
          answer:
            "IEC registration costs $3,000-10,000 including DGFT government fees ($500) and CA professional fees. The process takes 3-7 working days. Your CA will also advise on RCMC, export incentives, GST on exports (LUT/bond), and foreign exchange compliance under FEMA.",
        },
        {
          question: "Do I need a CA for IEC or can I apply myself?",
          answer:
            "While IEC can be applied online, a CA ensures correct HSN classification, proper bank account linkage, RCMC registration for export benefits, and compliance with FEMA regulations. CAs also help claim export incentives like RoDTEP that most new exporters miss, which alone can save 1-5% of FOB value.",
        },
        {
          question: "What additional registrations do I need after IEC?",
          answer:
            "After IEC, you may need: RCMC from Export Promotion Council (for incentives), AD Code registration with customs, LUT/bond for GST-free exports, FSSAI for food exports, and product-specific certifications. A CA provides a complete compliance checklist for your specific export product.",
        },
      ],
    },
  ],
  costKeywords: [
    "CA fees for GST filing",
    "company registration cost India",
    "income tax filing charges CA",
    "CA firm fees for startup",
    "audit cost for small company",
  ],
  nicheKeywords: [
    "best CA firm near me",
    "chartered accountant for startup",
    "GST consultant in Sydney",
    "CA for company registration",
    "tax planning CA India",
    "CA firm for small business",
  ],
  schemaType: "AccountingService",
  metaCategory: "finance",
  citations: [
    {
      name: "CAclubindia",
      url: "https://www.caclubindia.com",
      type: "niche-specific",
    },
    {
      name: "Yelp",
      url: "https://www.justdial.com",
      type: "general",
    },
    {
      name: "Bing Places",
      url: "https://www.sulekha.com",
      type: "general",
    },
    {
      name: "Google Business Profile",
      url: "https://business.google.com",
      type: "local",
    },
    {
      name: "IndiaMART",
      url: "https://www.indiamart.com",
      type: "general",
    },
    {
      name: "ICAI Member Directory",
      url: "https://www.icai.org",
      type: "niche-specific",
    },
  ],
};
