import type { NicheData } from "./types";
import { images } from "./images";

export const nicheData: NicheData = {
  slug: "restaurants",
  name: "Restaurants",
  icon: "🍽️",
  image: images.restaurant,
  heroHeadline: "Foodies Ask AI Where to Eat. Is Your Restaurant the Answer?",
  heroSubline:
    "Millions of hungry customers ask ChatGPT, Google AI, and Perplexity 'best restaurants near me' every day. If AI doesn't recommend your restaurant, those table bookings and delivery orders go straight to your Zomato-promoted competitors.",
  painPoints: [
    {
      title: "Table Bookings Going to Zomato-Promoted Restaurants",
      description:
        "When diners ask AI for restaurant recommendations, Zomato Gold partners and high-rated chains dominate the answers. Your authentic cuisine, 4.5-star reviews, and loyal customer base are invisible to AI — costing you 50+ covers per month.",
    },
    {
      title: "Your Reviews Aren't Reaching AI",
      description:
        "You have 500+ positive reviews on Zomato and Google, but AI models can't read them properly. Without structured data and review schema, your exceptional customer feedback doesn't influence AI recommendations at all.",
    },
    {
      title: "Delivery Orders Lost to Algorithm-Favored Competitors",
      description:
        "When customers ask AI 'best biryani delivery near me' or 'top rated restaurants for dinner,' AI recommends restaurants with better digital presence — not necessarily better food. Your $2-500k monthly delivery revenue is at risk.",
    },
  ],
  services: [
    {
      tier: "AI Foundation",
      price: "$15,000 - $30,000",
      features: [
        "Google Business Profile optimization for restaurant keywords",
        "Structured schema markup for Restaurant + Menu + Review",
        "Citation building on Zomato, Swiggy, Dineout, and EazyDiner",
        "AI-optimized content for cuisine, location, and specialty pages",
        "Monthly AI visibility audit report",
      ],
    },
    {
      tier: "AI Growth",
      price: "$50,000 - $1,00,000",
      features: [
        "Everything in AI Foundation",
        "Full AEO for 30+ restaurant keywords (cuisine, occasion, location)",
        "Food photography + video content strategy for AI training data",
        "Review aggregation schema across Zomato, Google, and Swiggy",
        "Menu markup with pricing and dietary schema",
        "Quarterly AI performance benchmarking",
      ],
    },
    {
      tier: "AI Dominance",
      price: "$1,50,000 - $3,00,000",
      features: [
        "Everything in AI Growth",
        "Full website rebuild optimized for AI crawlers",
        "llms.txt implementation with menu and speciality detail",
        "Food blogger and influencer citation building",
        "AI chatbot training data optimization",
        "Dedicated AI visibility manager",
        "Real-time AI mention monitoring across ChatGPT, Perplexity, Gemini",
      ],
    },
  ],
  roiExample: {
    metric: "50 Extra Covers/Month",
    value: "$2.5-500k revenue",
    pitch:
      "Just 50 additional covers per month at an average check of $500-1,000 per person generates $2.5-500k in monthly revenue. Most restaurants see this increase within 60-90 days of AI visibility optimization.",
  },
  faqItems: [
    {
      question: "How does AI decide which restaurants to recommend?",
      answer:
        "AI models like ChatGPT and Gemini pull from structured data on your website, Zomato and Swiggy listings, Google reviews, food blogger content, and social media. Restaurants with structured menu schema, consistent NAP data across platforms, and rich content about their cuisine get recommended more often.",
    },
    {
      question: "I'm already top-rated on Zomato. Why do I need AI visibility?",
      answer:
        "Zomato ratings and AI recommendations use completely different systems. We've seen restaurants with 4.5+ Zomato ratings that never appear in ChatGPT or Perplexity answers. AI needs structured data that Zomato doesn't provide — like menu schema, cuisine descriptions, and location-specific content.",
    },
    {
      question: "Can a standalone restaurant compete with chains in AI answers?",
      answer:
        "Yes, and often more effectively. Chain restaurants have generic content, while your unique cuisine story, chef credentials, and local specialties create the kind of distinctive content AI loves to recommend. Standalone restaurants with proper AEO regularly outperform chains in AI recommendations.",
    },
    {
      question: "How quickly will I see more customers from AI recommendations?",
      answer:
        "Most restaurants see increased visibility within 30-45 days and measurable foot traffic increase within 60-90 days. Weekend and festival periods show the fastest results as AI recommendation queries spike during these times.",
    },
  ],
  stats: [
    { label: "of diners ask AI for restaurant recommendations", value: "52%" },
    { label: "check AI or voice assistants before choosing where to eat", value: "38%" },
    { label: "average monthly revenue from 50 extra covers", value: "$350k" },
  ],
  ctaText: "Get Your Free Restaurant AI Visibility Audit",
  searchExample: "best biryani restaurant in Chicago",
  competitorLine:
    "Zomato Gold partners and chain restaurants are dominating AI recommendations — while your authentic cuisine and loyal customer following remain invisible to the foodies who would love your food.",
  treatments: [
    {
      slug: "restaurant-franchise-cost",
      name: "Restaurant Franchise Setup",
      priceRange: "$20,00,000 - $1,00,00,000",
      description:
        "Complete restaurant franchise consultation including brand selection, franchise agreement review, location scouting, kitchen setup, staffing, and launch marketing for Indian and international food brands.",
      faqItems: [
        {
          question: "What is the cost of opening a restaurant franchise globally?",
          answer:
            "Restaurant franchise costs vary widely: QSR brands like Subway cost $20-4000k, mid-range brands like Barbeque Nation $5000k-1Cr, and premium international brands $1-3Cr. This includes franchise fee ($5-2500k), interior setup, kitchen equipment, and working capital for 3-6 months.",
        },
        {
          question: "What is the typical ROI timeline for a restaurant franchise?",
          answer:
            "Most restaurant franchises break even in 18-36 months. QSR franchises with lower investment often break even in 12-18 months. ROI depends on location footfall, operational efficiency, and local market demand. A good franchise consultant helps you model realistic projections.",
        },
      ],
    },
    {
      slug: "cloud-kitchen-setup-cost",
      name: "Cloud Kitchen Setup",
      priceRange: "$5,00,000 - $25,00,000",
      description:
        "End-to-end cloud kitchen setup including location selection, kitchen design, equipment procurement, Swiggy/Zomato onboarding, menu engineering, and digital marketing for delivery-only restaurant concepts.",
      faqItems: [
        {
          question: "What is the cost of setting up a cloud kitchen globally?",
          answer:
            "A basic cloud kitchen costs $5-1000k (single brand, 200-400 sq ft). Multi-brand cloud kitchens cost $15-2500k. Costs include rent deposit ($1-300k), kitchen equipment ($3-800k), FSSAI license, Swiggy/Zomato onboarding, and 3 months working capital. Shared cloud kitchen spaces start at $50K-100k/month.",
        },
        {
          question: "Is a cloud kitchen more profitable than a dine-in restaurant?",
          answer:
            "Cloud kitchens have 15-25% lower overhead (no dine-in space, fewer staff) but pay 25-35% commission to aggregators. Net margins are similar at 15-20%, but cloud kitchens require lower investment and break even faster (8-14 months vs 18-36 months for dine-in).",
        },
        {
          question: "How many orders per day does a cloud kitchen need to be profitable?",
          answer:
            "A single-brand cloud kitchen needs 40-60 orders/day at an average order value of $300-400 to be profitable. Multi-brand kitchens running 3-4 brands from the same space need 80-120 combined orders. Proper Swiggy/Zomato optimization and AI visibility can accelerate reaching these numbers.",
        },
      ],
    },
    {
      slug: "restaurant-marketing-cost",
      name: "Restaurant Marketing",
      priceRange: "$25,000 - $2,00,000/month",
      description:
        "Comprehensive restaurant marketing including social media management, food photography, influencer collaborations, Zomato/Swiggy ad management, Google Ads, and AI visibility optimization.",
      faqItems: [
        {
          question: "How much should a restaurant spend on marketing monthly?",
          answer:
            "Restaurants should allocate 5-10% of monthly revenue to marketing. For a restaurant doing $1000k/month revenue, that's $50K-100k. This covers social media ($15-30K), Zomato/Swiggy promotions ($10-20K), influencer collaborations ($10-30K), and Google/Meta ads ($15-30K).",
        },
        {
          question: "What marketing channel gives the best ROI for restaurants?",
          answer:
            "Google Business Profile optimization (free) and AI visibility give the best long-term ROI. For immediate results, Zomato promoted listings and Instagram influencer collaborations work well. Food bloggers with 10K-50K followers typically charge $5-15K per post and generate 20-50 direct customers.",
        },
      ],
    },
    {
      slug: "menu-engineering-cost",
      name: "Menu Engineering & Design",
      priceRange: "$15,000 - $75,000",
      description:
        "Data-driven menu optimization including pricing strategy, dish placement, food costing analysis, menu design, digital menu creation, and profitability analysis per dish category.",
      faqItems: [
        {
          question: "What is menu engineering and why does my restaurant need it?",
          answer:
            "Menu engineering analyzes each dish's profitability and popularity to optimize layout, pricing, and item mix. Proper menu engineering increases average check size by 10-15% and overall profit margins by 5-8%. It costs $15-75K one-time and typically pays for itself within the first month.",
        },
        {
          question: "How often should a restaurant re-engineer its menu?",
          answer:
            "Re-engineer your menu every 6-12 months based on sales data. Seasonal menus should be reviewed quarterly. Each review should analyze food cost percentages, contribution margins, sales mix, and customer feedback. Many restaurants lose $1-300k annually by keeping unprofitable dishes on their menu.",
        },
      ],
    },
    {
      slug: "food-delivery-optimization-cost",
      name: "Food Delivery Optimization",
      priceRange: "$20,000 - $1,00,000",
      description:
        "Optimization of Swiggy, Zomato, and direct delivery channels including listing optimization, photography, packaging design, delivery menu curation, and commission negotiation strategy.",
      faqItems: [
        {
          question: "How can I increase my restaurant's delivery orders?",
          answer:
            "Key strategies: optimize Swiggy/Zomato listing with professional food photos (increases clicks by 30-40%), create delivery-specific menu items that travel well, maintain 4.2+ ratings, run targeted promotions during low hours, and build a direct ordering channel to save 25-35% commissions.",
        },
        {
          question: "How do I reduce Swiggy/Zomato commission costs?",
          answer:
            "Negotiate commission rates (possible after 200+ orders/month), build a direct ordering website/app (saves 25-35%), create combo meals that increase average order value, and use AI visibility to drive customers to your direct channel. A 10% shift from aggregators to direct orders saves $50K-200k/month.",
        },
      ],
    },
    {
      slug: "restaurant-branding-cost",
      name: "Restaurant Branding",
      priceRange: "$50,000 - $5,00,000",
      description:
        "Complete restaurant brand development including naming, logo design, interior concept, brand story, visual identity, packaging design, uniform design, and brand guideline documentation.",
      faqItems: [
        {
          question: "What is the cost of branding a new restaurant globally?",
          answer:
            "Basic branding (logo, menu design, social media templates) costs $50K-150k. Premium branding (full visual identity, interior concept, packaging, uniforms) costs $1.5-500k. Chain/franchise-level branding with brand manuals costs $3-500k. Good branding typically increases average check size by 10-20%.",
        },
        {
          question: "Can rebranding help an existing restaurant increase revenue?",
          answer:
            "Yes. Restaurant rebranding typically increases revenue by 15-30% through higher perceived value, better social media shareability, and stronger AI/search visibility. A rebrand costs $1-300k and shows results within 2-3 months through increased foot traffic and higher average order values.",
        },
        {
          question: "How does restaurant branding affect AI recommendations?",
          answer:
            "AI recommends restaurants with clear, distinct identities. Strong branding creates consistent mentions across reviews, social media, and food blogs — all of which AI uses to form recommendations. A well-branded restaurant with a clear cuisine focus gets recommended 3x more than generic multi-cuisine restaurants.",
        },
      ],
    },
  ],
  costKeywords: [
    "restaurant franchise cost India",
    "cloud kitchen setup cost",
    "restaurant marketing budget",
    "menu engineering cost",
    "food delivery optimization",
  ],
  nicheKeywords: [
    "best restaurant near me",
    "top rated restaurants in Chicago",
    "best biryani delivery",
    "fine dining restaurant New York",
    "best vegetarian restaurant",
    "restaurant for birthday party near me",
  ],
  schemaType: "Restaurant",
  metaCategory: "lifestyle",
  citations: [
    {
      name: "Zomato",
      url: "https://www.zomato.com",
      type: "niche-specific",
    },
    {
      name: "Swiggy",
      url: "https://www.swiggy.com",
      type: "niche-specific",
    },
    {
      name: "Dineout",
      url: "https://www.dineout.co.in",
      type: "niche-specific",
    },
    {
      name: "EazyDiner",
      url: "https://www.eazydiner.com",
      type: "niche-specific",
    },
    {
      name: "Google Business Profile",
      url: "https://business.google.com",
      type: "local",
    },
    {
      name: "TripAdvisor",
      url: "https://www.tripadvisor.in",
      type: "general",
    },
  ],
};
