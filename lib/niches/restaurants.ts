import type { NicheData } from "./types";
import { images } from "./images";

export const nicheData: NicheData = {
  slug: "restaurants",
  name: "Restaurants & Hospitality",
  icon: "🍽️",
  image: images.restaurant,
  heroHeadline: "Foodies Ask AI Where to Eat. Is Your Restaurant the Answer?",
  heroSubline:
    "Millions of hungry customers ask ChatGPT, Google AI, and Perplexity 'best restaurants near me' every day. If AI doesn't recommend your restaurant, those reservations and delivery orders go straight to your competitors.",
  painPoints: [
    {
      title: "Table Bookings Going to AI-Recommended Competitors",
      description:
        "When diners ask AI for dinner recommendations, establishments with optimized reservation links and reviews dominate the answers. Your unique cuisine, 4.5-star reviews, and loyal client base are invisible to AI — costing you dozen of covers per week.",
    },
    {
      title: "Your Reviews Aren't Reaching AI",
      description:
        "You have hundreds of positive reviews on Google, Yelp, and OpenTable, but AI models cannot parse them properly. Without structured review schema and metadata, your exceptional customer feedback doesn't influence AI recommendations.",
    },
    {
      title: "Delivery Orders Lost to Algorithm-Favored Competitors",
      description:
        "When customers ask AI 'best sushi delivery near me' or 'top rated brunch spots,' AI recommends restaurants with better digital presence — not necessarily better food. Your delivery and pickup revenue is at risk.",
    },
  ],
  services: [
    {
      tier: "AEO Foundation",
      price: "$1,500 - $3,000 / mo",
      features: [
        "Google Business Profile optimization for restaurant and cuisine keywords",
        "Structured schema markup for Restaurant + Menu + Review",
        "Citation building on OpenTable, Yelp, and TripAdvisor",
        "AI-optimized content for cuisine, location, and specialty pages",
        "Monthly AI visibility audit report",
      ],
    },
    {
      tier: "Local Domination",
      price: "$3,000 - $7,500 / mo",
      features: [
        "Everything in AEO Foundation",
        "Full AEO for 30+ restaurant keywords (cuisine, occasion, neighborhood)",
        "Food photography and video content strategy for AI training data",
        "Review aggregation schema across Yelp, Google, and reservation platforms",
        "Menu markup with pricing and dietary (Vegan, Gluten-Free) schema",
        "Quarterly AI performance benchmarking",
      ],
    },
    {
      tier: "Godfather 360°",
      price: "$7,500 - $15,000 / mo",
      features: [
        "Everything in Local Domination",
        "Full website rebuild optimized for AI crawlers",
        "llms.txt implementation with menu and specialty detail",
        "Food blogger and local guide citation building",
        "AI chatbot training data optimization",
        "Dedicated AI visibility manager",
        "Real-time AI mention monitoring across ChatGPT, Perplexity, Gemini",
      ],
    },
  ],
  roiExample: {
    metric: "100 Extra Covers/Month",
    value: "$4,500 - $7,500 / mo",
    pitch:
      "Adding 100 additional covers per month at an average ticket of $45 - $75 per person generates $4,500 - $7,500 in monthly revenue. Most restaurants see this increase within 60-90 days of AI visibility optimization.",
  },
  faqItems: [
    {
      question: "How does AI decide which restaurants to recommend?",
      answer:
        "AI models like ChatGPT and Gemini pull from structured data on your website, Google reviews, Yelp listings, OpenTable profiles, food blog citations, and social media. Restaurants with structured menu schema, consistent NAP data, and rich content about their cuisine get recommended more often.",
    },
    {
      question: "We are already highly rated on Yelp. Why do we need AI visibility?",
      answer:
        "Yelp ratings and AI recommendations use completely different systems. We have seen restaurants with 4.5+ stars on Yelp that never appear in ChatGPT or Perplexity answers. AI needs structured data that directories don't automatically provide — like menu schema, cuisine descriptions, and neighborhood-specific content.",
    },
    {
      question: "Can a local boutique restaurant compete with national chains in AI answers?",
      answer:
        "Yes, and often more effectively. Chain restaurants have generic national content, while your unique culinary story, chef credentials, and local neighborhood specialties create the kind of distinctive content AI loves to recommend.",
    },
  ],
  stats: [
    { label: "of diners ask AI for restaurant recommendations", value: "52%" },
    { label: "check AI or voice assistants before choosing where to eat", value: "38%" },
    { label: "average monthly revenue from 100 extra covers", value: "$6,000" },
  ],
  ctaText: "Get Your Free Restaurant AI Visibility Audit",
  searchExample: "best Italian restaurant in Chicago",
  competitorLine:
    "Yelp-sponsored listings and chain restaurants are dominating AI recommendations — while your authentic cuisine and community following remain invisible.",
  treatments: [
    {
      slug: "restaurant-marketing",
      name: "Restaurant Digital Marketing",
      priceRange: "$1,500 - $4,500 / mo",
      description:
        "Comprehensive restaurant marketing including social media management, food photography, local influencer collaborations, Google/Yelp ad management, and AI visibility optimization.",
      faqItems: [
        {
          question: "How much should a restaurant spend on marketing monthly?",
          answer:
            "Most independent restaurants allocate 5% to 10% of their monthly revenue to marketing. For a restaurant doing $50,000/month, that is a $2,500 to $5,000 budget. This should cover social media, influencer partnerships, local search visibility, and directory listings.",
        },
        {
          question: "What marketing channel gives the best ROI for restaurants?",
          answer:
            "Google Business Profile optimization (free) and organic AI visibility give the best long-term ROI. For immediate traffic spikes, local Instagram influencer collaborations and targeted local search ads perform well.",
        },
      ],
    },
    {
      slug: "menu-engineering",
      name: "Menu Engineering & Design",
      priceRange: "$1,200 - $3,500",
      description:
        "Data-driven menu optimization including pricing strategy, dish placement, food cost analysis, digital menu creation, and profitability analysis.",
      faqItems: [
        {
          question: "What is menu engineering and why does my restaurant need it?",
          answer:
            "Menu engineering analyzes the profitability and popularity of each menu item to optimize layout and pricing. Proper menu engineering typically increases average check sizes by 10% to 15% and overall profit margins by 3% to 5%.",
        },
      ],
    },
  ],
  costKeywords: [
    "restaurant digital marketing cost US",
    "menu engineering services price",
    "restaurant branding rates",
    "local restaurant SEO budget",
    "OpenTable vs Resy fees",
  ],
  nicheKeywords: [
    "best restaurant near me",
    "top rated restaurants in Chicago",
    "best outdoor dining options",
    "fine dining restaurant New York",
    "best steakhouse in [city]",
    "brunch spots near me",
  ],
  schemaType: "Restaurant",
  metaCategory: "lifestyle",
  citations: [
    {
      name: "OpenTable",
      url: "https://www.opentable.com",
      type: "niche-specific",
    },
    {
      name: "Resy",
      url: "https://resy.com",
      type: "niche-specific",
    },
    {
      name: "Yelp",
      url: "https://www.yelp.com",
      type: "local",
    },
    {
      name: "TripAdvisor",
      url: "https://www.tripadvisor.com",
      type: "general",
    },
    {
      name: "Google Business Profile",
      url: "https://business.google.com",
      type: "local",
    },
  ],
};
