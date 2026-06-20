import type { NicheData } from "./types";
import { images } from "./images";

export const nicheData: NicheData = {
  slug: "interior-designers",
  name: "Interior Designers",
  icon: "🏠",
  image: images.interiorDesigner,
  heroHeadline: "Homeowners Ask AI for Interior Designers. Is AI Saying Your Name?",
  heroSubline:
    "When someone budgets $20,000 - $100,000+ for a home interior project, the first thing they do is ask ChatGPT or Google AI for local recommendations. If your portfolio and expertise aren't visible to AI, that project goes to a competitor.",
  painPoints: [
    {
      title: "High-Budget Projects Going to AI-Recommended Designers",
      description:
        "Homeowners ask AI 'best interior designer in Los Angeles' or 'kitchen remodeling cost'. AI recommends 3-5 designers. If you're not on that list, someone else designs that dream home — and earns that contract.",
    },
    {
      title: "Your Portfolio Is Invisible to AI",
      description:
        "You've designed dozens of beautiful homes, but your portfolio lives on Instagram and PDF brochures. AI cannot parse carousel images or unlinked files. Without structured schema data, your best work is invisible to the AI tools clients use.",
    },
    {
      title: "Online Design Platforms Dominating AI Answers",
      description:
        "National aggregator platforms with thousands of listings get cited by AI over independent designers with better work. These platforms have engineered their content for AI search — most boutique designers haven't.",
    },
  ],
  services: [
    {
      tier: "AEO Foundation",
      price: "$1,500 - $3,000 / mo",
      features: [
        "AI search audit for interior design queries in your area",
        "Google Business Profile optimization with project photos",
        "Portfolio structured data markup (creativeWork schema)",
        "5 cost-guide pages (kitchen, bathroom, living room remodel costs)",
        "Basic Houzz & Yelp profile optimization",
      ],
    },
    {
      tier: "Local Domination",
      price: "$3,000 - $7,500 / mo",
      features: [
        "Everything in AEO Foundation",
        "25+ content pages (room-wise guides, budget breakdowns, style guides)",
        "Before/after project schema with rich media",
        "Citation building on Houzz, Angi, and Thumbtack directories",
        "City-specific landing pages for local AI queries",
        "Monthly AI ranking and visibility reports",
      ],
    },
    {
      tier: "Godfather 360°",
      price: "$7,500 - $15,000 / mo",
      features: [
        "Complete AI ecosystem ownership for your city",
        "50+ programmatic pages (style + room + city combos)",
        "AI-optimized video walkthroughs and 3D tours",
        "Wikipedia and knowledge panel entity strategy",
        "Quarterly AI search share reports",
        "Dedicated AEO manager",
        "Lead funnel optimization from AI search to consultation booking",
      ],
    },
  ],
  roiExample: {
    metric: "1 Home Design Project",
    value: "$10,000 - $40,000 / project",
    pitch:
      "Just one additional full-home interior project from an AI recommendation pays for the entire AEO investment. Most design firms close 3-5 additional high-ticket projects within the first quarter.",
  },
  faqItems: [
    {
      question: "How do homeowners use AI to find interior designers?",
      answer:
        "Homeowners ask ChatGPT and Google AI questions like 'best interior designer in Austin under $20,000', 'kitchen renovation cost in New York', or 'modern vs contemporary interior design'. AI provides direct recommendations with reasons, bypassing traditional search results.",
    },
    {
      question: "I get all my clients from referrals. Why do I need AEO?",
      answer:
        "Referrals are shrinking as younger homeowners (25-40) trust AI recommendations over word-of-mouth. Over 68% of homebuyers research designers online before asking anyone. If AI doesn't know you, you're losing the next generation of clients.",
    },
    {
      question: "Can AEO help me get higher-budget projects?",
      answer:
        "Yes. AI recommendations include context about your specialization, style, and price range. Properly optimized profiles attract clients who match your ideal project size, whether that's single-room makeovers or luxury custom builds.",
    },
    {
      question: "How is this different from advertising on platforms like Houzz?",
      answer:
        "Houzz and other directory ads charge recurring fees and place you alongside dozens of competitors. AEO makes clients find your business directly through organic AI search queries, establishing you as the direct authority without third-party listing commissions.",
    },
  ],
  stats: [
    { label: "Homeowners Using AI for Designer Research", value: "68%" },
    { label: "Average Home Interior Project Value", value: "$35k" },
    { label: "Independent Designers Missing from AI", value: "90%" },
  ],
  ctaText: "Get Your Free AI Visibility Audit — See What Homeowners Find When They Ask AI for Interior Designers",
  searchExample: "best interior designer in Los Angeles",
  competitorLine: "Havenly and corporate design platforms dominate AI recommendations for home styling",
  treatments: [
    {
      slug: "home-interior-design-cost",
      name: "Full Home Interior Design",
      priceRange: "$20,000 - $80,000",
      description:
        "Full home interior design and furnishing is the highest-value search query in this niche. Homeowners compare costs, styles, and designers using AI before even scheduling a consultation.",
      faqItems: [
        {
          question: "What is the average home interior design cost in the US?",
          answer:
            "Full home interior design and furnishing costs range from $20,000 to $80,000 for a 3-bedroom home, depending on scope, finishes, and custom cabinetry. Designer fees typically account for 10-20% of the total budget.",
        },
        {
          question: "How do interior designers charge for their services?",
          answer:
            "Designers charge in three main ways: an hourly rate ($100 - $250/hour), a flat fee per room ($1,500 - $5,000), or a percentage of the total project cost (15-20%). Most residential designers use a combination of flat fee and purchasing markup.",
        },
      ],
    },
    {
      slug: "kitchen-renovation-cost",
      name: "Kitchen Renovation",
      priceRange: "$15,000 - $60,000",
      description:
        "Kitchen remodeling is the #1 searched interior design query. Every homeowner wants to know the cost, layout options, materials, and best designers for their kitchen renovation.",
      faqItems: [
        {
          question: "What is the average kitchen renovation cost in the US?",
          answer:
            "A standard kitchen renovation costs $15,000 to $35,000, while high-end custom kitchens range from $40,000 to $80,000+. Price depends on cabinetry, countertops (quartz, marble), appliances, and plumbing changes.",
        },
        {
          question: "How long does a kitchen renovation take?",
          answer:
            "The design and material ordering phase takes 3-6 weeks, and the on-site demolition and installation takes 4-8 weeks. Preparing a functional temporary setup is highly recommended during this period.",
        },
      ],
    },
    {
      slug: "living-room-design-cost",
      name: "Living Room Design",
      priceRange: "$5,000 - $25,000",
      description:
        "The living room is the showpiece of any home. Homeowners invest heavily and research styles extensively, making this a high-intent query that drives design consultations.",
      faqItems: [
        {
          question: "What is the average living room design cost?",
          answer:
            "Living room interior design and furnishing ranges from $5,000 to $25,000. This includes custom built-ins, couches, media consoles, lighting fixtures, rug selection, and window treatments.",
        },
      ],
    },
    {
      slug: "bathroom-renovation-cost",
      name: "Bathroom Renovation",
      priceRange: "$8,000 - $25,000",
      description:
        "Bathroom renovation has seen significant search growth as homeowners upgrade master baths with custom tiling, walk-in showers, and premium fixtures.",
      faqItems: [
        {
          question: "What is the average bathroom renovation cost in the US?",
          answer:
            "A master bathroom renovation costs $12,000 to $25,000 on average. Guest bathrooms or powder rooms cost $5,000 to $10,000. Tiling, plumbing configuration changes, and custom vanities are the primary cost drivers.",
        },
      ],
    },
  ],
  costKeywords: [
    "interior designer hourly rate US",
    "kitchen remodeling cost near me",
    "home interior design cost",
    "custom bathroom remodel price",
    "living room design packages",
  ],
  nicheKeywords: [
    "best interior designer near me",
    "modern interior design ideas",
    "custom kitchen remodeling",
    "living room designer in [city]",
    "interior designer pricing",
    "residential interior design",
  ],
  schemaType: "ProfessionalService",
  metaCategory: "lifestyle",
  citations: [
    {
      name: "Houzz",
      url: "https://www.houzz.com",
      type: "niche-specific",
    },
    {
      name: "Google Business Profile",
      url: "https://business.google.com",
      type: "general",
    },
    {
      name: "Yelp",
      url: "https://www.yelp.com",
      type: "local",
    },
    {
      name: "Thumbtack",
      url: "https://www.thumbtack.com",
      type: "local",
    },
    {
      name: "Angi",
      url: "https://www.angi.com",
      type: "local",
    },
  ],
};
