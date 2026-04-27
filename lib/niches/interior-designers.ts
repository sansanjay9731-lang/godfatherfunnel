import type { NicheData } from "./types";
import { images } from "./images";

export const nicheData: NicheData = {
  slug: "interior-designers",
  name: "Interior Designers",
  icon: "🏠",
  image: images.interiorDesigner,
  heroHeadline: "Homeowners Ask AI for Interior Designers. Is AI Saying Your Name?",
  heroSubline:
    "When someone budgets $5-2500k for a home interior, the first thing they do is ask ChatGPT or Google AI for recommendations. If your portfolio and expertise aren't visible to AI, that project goes to a competitor.",
  painPoints: [
    {
      title: "$5-2500k Projects Going to AI-Recommended Designers",
      description:
        "Homeowners ask AI 'best interior designer in Sydney' or 'modular kitchen cost'. AI recommends 3-5 designers. If you're not on that list, someone else designs that dream home — and earns that $10-2500k fee.",
    },
    {
      title: "Your Portfolio Is Invisible to AI",
      description:
        "You've designed 200+ homes, but your portfolio lives on Instagram and Houzz. AI can't parse carousel images or PDF brochures. Without structured data, your best work is invisible to the AI tools clients use.",
    },
    {
      title: "Houzz & Livspace Dominate AI Answers",
      description:
        "Aggregator platforms with thousands of listings get cited by AI over independent designers with better work. Livspace and DesignCafe have engineered their content for AI — most independent designers haven't.",
    },
  ],
  services: [
    {
      tier: "AI Visibility Starter",
      price: "$1,500 - $3,000 / mo",
      features: [
        "AI search audit for interior design queries",
        "Google Business Profile optimization with project photos",
        "Portfolio structured data markup",
        "5 cost-guide pages (modular kitchen, bedroom, etc.)",
        "Basic Houzz & Yelp profile optimization",
      ],
    },
    {
      tier: "AI Authority Builder",
      price: "$3,000 - $7,500 / mo",
      features: [
        "Full AEO strategy for interior design niche",
        "25+ content pages (room-wise guides, budget breakdowns, style guides)",
        "Before/after project schema with rich media",
        "Citation building on Houzz, UrbanClap, Livspace directories",
        "City-specific landing pages for AI queries",
        "Monthly AI ranking reports",
      ],
    },
    {
      tier: "AI Dominance Package",
      price: "$2,000 - $4,000",
      features: [
        "Complete AI ecosystem ownership for your city",
        "50+ programmatic pages (style + room + city combos)",
        "AI-optimized video walkthroughs & 3D tours",
        "Wikipedia & knowledge panel strategy",
        "Quarterly AI search share reports",
        "Dedicated AEO manager",
        "Lead funnel from AI discovery to consultation booking",
      ],
    },
  ],
  roiExample: {
    metric: "1 Home Interior Project",
    value: "$5,000 - $25,000",
    pitch:
      "Just one additional home interior project from AI recommendation pays for the entire AEO investment 5-10x over. Most designers close 3-5 additional projects in the first quarter.",
  },
  faqItems: [
    {
      question: "How do homeowners use AI to find interior designers?",
      answer:
        "Homeowners ask ChatGPT and Google AI questions like 'best interior designer in Austin under $15,000', 'modular kitchen cost globally', or 'modern vs contemporary interior design'. AI provides direct recommendations with reasons, bypassing traditional search.",
    },
    {
      question: "I get all my clients from referrals. Why do I need AEO?",
      answer:
        "Referrals are shrinking as younger homeowners (25-40) trust AI recommendations over friend suggestions. 68% of homebuyers research designers online before asking anyone. If AI doesn't know you, you're losing the next generation of clients.",
    },
    {
      question: "Can AEO help me get higher-budget projects?",
      answer:
        "Yes. AI recommendations include context about your specialization and price range. Properly optimized profiles attract clients who match your ideal project size, whether that's $5,000 apartments or $50,000 villas.",
    },
    {
      question: "How is this different from advertising on Livspace or UrbanClap?",
      answer:
        "Livspace and UrbanClap charge commissions of 10-20% on every project. AEO makes clients find you directly through AI, eliminating the middleman. You own the relationship and keep the full margin.",
    },
  ],
  stats: [
    { label: "Homeowners Using AI for Designer Research", value: "68%" },
    { label: "Average Home Interior Project Value", value: "$8-1500k" },
    { label: "Independent Designers Missing from AI", value: "90%" },
  ],
  ctaText: "Get Your Free AI Visibility Audit — See What Homeowners Find When They Ask AI for Interior Designers",
  searchExample: "best interior designer in Sydney",
  competitorLine: "Livspace and DesignCafe dominate AI recommendations for interior design",
  treatments: [
    {
      slug: "home-interior-design-cost",
      name: "Home Interior Design Cost",
      priceRange: "$5,000 - $25,000",
      description:
        "Full home interior design is the highest-value search query in this niche. Homeowners compare costs, styles, and designers using AI before even scheduling a consultation.",
      faqItems: [
        {
          question: "What is the average home interior design cost globally?",
          answer:
            "Home interior design costs range from $5,000 to $25,000 for a 2-3 BHK apartment. This includes modular furniture, false ceiling, electrical work, painting, and designer fees. Luxury interiors can exceed $40,000.",
        },
        {
          question: "How is interior design cost calculated?",
          answer:
            "Interior design cost is calculated per square foot ($1,500-4,000/sqft) or as a project fee. It includes design consultation ($50K-200k), material cost (60-70% of total), and labor charges (15-20% of total).",
        },
        {
          question: "Can I do home interiors in phases to reduce cost?",
          answer:
            "Yes, many designers offer phased execution — starting with kitchen and living room ($3-500k), then bedrooms ($2-400k each). This spreads the cost over 6-12 months without compromising design cohesion.",
        },
      ],
    },
    {
      slug: "modular-kitchen-cost",
      name: "Modular Kitchen Cost",
      priceRange: "$150,000 - $8,000",
      description:
        "Modular kitchen is the #1 searched interior design query globally. Every homeowner wants to know the cost, materials, and best designers for their kitchen renovation.",
      faqItems: [
        {
          question: "What is the average modular kitchen cost globally?",
          answer:
            "A modular kitchen costs $150,000 to $8,000 depending on size, material, and finish. L-shaped kitchens start at $150k, U-shaped at $250k, and island kitchens at $4,000+. Material choice (plywood, MDF, acrylic) significantly affects pricing.",
        },
        {
          question: "Which material is best for modular kitchen globally?",
          answer:
            "Marine plywood with laminate finish offers the best balance of durability and cost ($1.5-300k). For premium kitchens, acrylic or PU finish on BWR plywood ($3-600k) is recommended. Avoid particle board in humid Global kitchens.",
        },
      ],
    },
    {
      slug: "office-interior-cost",
      name: "Office Interior Cost",
      priceRange: "$3,000 - $20,000",
      description:
        "Office interior design for startups, co-working spaces, and corporate offices is a growing segment. Business owners use AI to find designers who understand commercial space optimization.",
      faqItems: [
        {
          question: "What is the average office interior cost per square foot?",
          answer:
            "Office interior costs range from $1,000 to $3,500 per square foot. Basic fit-outs start at $1,000/sqft, mid-range at $1,500-2,500/sqft, and premium corporate offices at $2,500-3,500/sqft. A 1,000 sqft office typically costs $10-2500k.",
        },
        {
          question: "How long does office interior design take?",
          answer:
            "Design phase takes 2-4 weeks, and execution takes 6-12 weeks for a typical 1,000-3,000 sqft office. Fast-track projects can be completed in 4-6 weeks with modular furniture and prefabricated elements.",
        },
      ],
    },
    {
      slug: "bedroom-design-cost",
      name: "Bedroom Design Cost",
      priceRange: "$1,000 - $5,000",
      description:
        "Bedroom interior design covers wardrobes, bed design, lighting, and false ceiling. It's one of the most searched room-specific queries and a gateway to full-home projects.",
      faqItems: [
        {
          question: "What is the average bedroom interior cost?",
          answer:
            "Bedroom interior design costs $1,000 to $5,000. This includes a sliding wardrobe ($40K-150k), bed with storage ($30K-80K), false ceiling ($20K-50K), and lighting ($10K-30K). Master bedrooms cost 30-50% more than standard bedrooms.",
        },
        {
          question: "What are the trending bedroom design styles globally?",
          answer:
            "Minimalist Japandi, warm contemporary, and luxury modern are trending. Neutral palettes with accent walls, integrated wardrobe systems, and smart lighting are most requested. Budget for trends: $1.5-300k per bedroom.",
        },
      ],
    },
    {
      slug: "living-room-design-cost",
      name: "Living Room Design Cost",
      priceRange: "$150,000 - $6,000",
      description:
        "The living room is the showpiece of any home. Homeowners invest heavily and research extensively, making this a high-intent query that drives consultation bookings.",
      faqItems: [
        {
          question: "What is the average living room interior cost?",
          answer:
            "Living room interior design costs $150,000 to $6,000. This includes TV unit ($30K-100k), sofa set ($40K-200k), false ceiling with lighting ($30K-80K), accent wall ($20K-60K), and flooring upgrade ($50K-150k).",
        },
        {
          question: "How can I make my living room look expensive on a budget?",
          answer:
            "Focus on a statement false ceiling with cove lighting ($25K-40K), one accent wall with textured paint or wallpaper ($10K-25K), and good curtains ($15K-30K). These three elements transform the space without a full renovation.",
        },
        {
          question: "What living room size works best for Global homes?",
          answer:
            "Most Global 2-3 BHK apartments have 150-250 sqft living rooms. Optimal furniture layout for this size includes an L-shaped sofa, a TV unit, and a small dining extension. Interior designers charge $1-300k for this space.",
        },
      ],
    },
    {
      slug: "bathroom-renovation-cost",
      name: "Bathroom Renovation Cost",
      priceRange: "$75,000 - $3,000",
      description:
        "Bathroom renovation has seen explosive search growth as homeowners upgrade old bathrooms with modern fittings, rain showers, and smart toilets. Cost transparency drives AI queries.",
      faqItems: [
        {
          question: "What is the average bathroom renovation cost globally?",
          answer:
            "Bathroom renovation costs $75,000 to $3,000. Basic renovation (tiles + fixtures) starts at $75K. Mid-range with branded fittings costs $1.5-200k. Premium renovation with imported tiles and smart fixtures costs $2-300k+.",
        },
        {
          question: "How long does a bathroom renovation take?",
          answer:
            "A standard bathroom renovation takes 2-4 weeks. This includes demolition (2-3 days), plumbing (3-4 days), waterproofing (2 days), tiling (4-5 days), and fixture installation (2-3 days). Plan for 4-6 weeks if structural changes are involved.",
        },
      ],
    },
  ],
  costKeywords: [
    "interior design cost per square foot",
    "modular kitchen price Global",
    "home interior design cost",
    "bedroom wardrobe cost",
    "bathroom renovation cost Global",
  ],
  nicheKeywords: [
    "best interior designer near me",
    "home interior design ideas",
    "modular kitchen designs",
    "living room interior design",
    "interior designer cost Global",
    "2BHK interior design cost",
  ],
  schemaType: "ProfessionalService",
  metaCategory: "lifestyle",
  citations: [
    {
      name: "Houzz Global",
      url: "https://www.houzz.in",
      type: "niche-specific",
    },
    {
      name: "UrbanClap (Urban Company)",
      url: "https://www.urbancompany.com",
      type: "niche-specific",
    },
    {
      name: "Google Business Profile",
      url: "https://business.google.com",
      type: "general",
    },
    {
      name: "Yelp",
      url: "https://www.justdial.com",
      type: "local",
    },
    {
      name: "Bing Places",
      url: "https://www.sulekha.com",
      type: "local",
    },
    {
      name: "IndiaMART",
      url: "https://www.indiamart.com",
      type: "niche-specific",
    },
  ],
};
