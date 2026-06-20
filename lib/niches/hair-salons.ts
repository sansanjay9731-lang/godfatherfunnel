import type { NicheData } from "./types";
import { images } from "./images";

export const nicheData: NicheData = {
  slug: "hair-salons",
  name: "Hair Salons",
  icon: "💇",
  image: images.hairSalon,
  heroHeadline: "Clients Ask AI for Salons. Is Your Salon AI-Recommended?",
  heroSubline:
    "When someone is about to spend hundreds on balayage, keratin, or extensions, they ask ChatGPT which local salons to trust. If AI recommends major franchises instead of your boutique salon, that client is gone.",
  painPoints: [
    {
      title: "Keratin & Color Clients Going Elsewhere",
      description:
        "High-value clients looking for premium services like balayage ($250+) and keratin treatments ($300+) ask AI 'best salon for hair color near me'. If your salon isn't mentioned, these bookings go to the competitor AI does recommend.",
    },
    {
      title: "Bridal Package Bookings Lost to Competitors",
      description:
        "Bridal makeup and hair packages worth $500 - $2,500 are increasingly booked after AI research. Brides-to-be ask AI for the best bridal salons in their city. One missed bridal booking represents significant lost revenue.",
    },
    {
      title: "Walk-In Traffic Declining Steadily",
      description:
        "Traditional walk-in bookings are dropping as clients pre-research on AI before choosing where to go. Even loyal clients ask AI for new options. If your salon doesn't show up, you risk losing regulars.",
    },
  ],
  services: [
    {
      tier: "AEO Foundation",
      price: "$1,500 - $3,000 / mo",
      features: [
        "AI search audit for salon queries in your city",
        "Google Business Profile optimization with photos and services",
        "Service menu structured data markup (Service schema)",
        "5 treatment cost pages with FAQ schema for AI readability",
        "Basic review aggregation and management strategy",
      ],
    },
    {
      tier: "Local Domination",
      price: "$3,000 - $7,500 / mo",
      features: [
        "Everything in AEO Foundation",
        "15+ content pages (treatment guides, before/after, hair care tips)",
        "Stylist credential and portfolio schema markup",
        "Citation building on StyleSeat, Mindbody, Yelp, and Google Maps",
        "Instagram content optimization for AI search crawlers",
        "Monthly AI ranking and visibility reports",
      ],
    },
    {
      tier: "Godfather 360°",
      price: "$7,500 - $15,000 / mo",
      features: [
        "Complete AI ecosystem ownership for salons in your metro area",
        "30+ programmatic pages (treatment + neighborhood combos)",
        "Bridal and special occasion AI landing pages",
        "Video testimonial schema and AI optimization",
        "Local citation domination & digital PR",
        "Dedicated AEO manager",
        "Online booking funnel optimization from AI search discovery",
      ],
    },
  ],
  roiExample: {
    metric: "30 New Clients/Month",
    value: "$4,500 - $9,000 / mo",
    pitch:
      "Acquiring 30 new clients per month with an average ticket of $150 - $300 generates $4,500 - $9,000 in additional monthly revenue. Over a year, this compounds into a highly profitable recurring client base.",
  },
  faqItems: [
    {
      question: "How do salon clients use AI to choose where to go?",
      answer:
        "Clients ask ChatGPT and Google AI questions like 'best salon for balayage in Boston', 'keratin treatment cost near me', or 'top bridal makeup artist in New York'. AI gives 3-5 recommendations with reasons. If your salon isn't listed, you lose that client.",
    },
    {
      question: "We have 500+ Google reviews. Isn't that enough?",
      answer:
        "Google reviews help with Google Maps, but ChatGPT and Perplexity use different signals — structured service menu data, stylist credentials, content authority, and citation presence. An AI-optimized salon with structured data consistently wins recommendations over larger competitors without it.",
    },
    {
      question: "Can AEO help our boutique salon stand out against franchises?",
      answer:
        "Absolutely. AI values authentic expertise and localized data. Independent salons with well-structured content about their stylists, specific color techniques, and brand specializations often outrank major franchises in AI answers.",
    },
    {
      question: "How quickly will we see more bookings?",
      answer:
        "Most salons see increased search appearances within 3-4 weeks. Full booking pipeline impact typically shows within 60-90 days as AI models update their recommendations and index your newly optimized pages.",
    },
  ],
  stats: [
    { label: "Salon Clients Researching via AI Before Booking", value: "62%" },
    { label: "Average High-Value Salon Service Ticket", value: "$200" },
    { label: "Independent Salons Missing from AI", value: "87%" },
  ],
  ctaText: "Get Your Free AI Visibility Audit — See What Clients Find When They Ask AI for Salons",
  searchExample: "best salon for keratin treatment near me",
  competitorLine: "Drybar and local franchise salons dominate AI recommendations for hair services",
  treatments: [
    {
      slug: "keratin-treatment-cost",
      name: "Keratin Treatment Cost",
      priceRange: "$250 - $500",
      description:
        "Keratin treatment is a high-value recurring service. Clients research extensively before committing, making it the #1 AI-searched salon treatment. Being recommended here drives premium bookings.",
      faqItems: [
        {
          question: "What is the average keratin treatment cost in the US?",
          answer:
            "Keratin treatment costs $250 to $500 depending on hair length, density, and salon location. Short hair is typically $250 - $350, medium hair is $350 - $450, and long hair ranges from $450 to $600. Premium brands like Kerasilk or Brazilian Blowout cost more.",
        },
        {
          question: "How long does a keratin treatment last?",
          answer:
            "Professional keratin treatments last 3-6 months depending on hair washing frequency and maintenance. Using sulfate-free shampoo extends results by 4-8 weeks. Most clients book a re-treatment every 4 months.",
        },
      ],
    },
    {
      slug: "hair-coloring-cost",
      name: "Hair Coloring & Highlights",
      priceRange: "$150 - $450",
      description:
        "Hair coloring — from single-process color to balayage and highlights — is a high-frequency service. AI recommendations drive trial visits that convert to regular clients.",
      faqItems: [
        {
          question: "What is the average hair coloring cost in the US?",
          answer:
            "Hair coloring costs $150 to $450. Single-process color is $100 - $150, partial highlights are $150 - $250, and full balayage or ombre ranges from $250 to $450. Fashion colors or corrective work can cost more depending on the time required.",
        },
        {
          question: "How often do I need to recolor my hair?",
          answer:
            "Single-process root touch-ups are needed every 4-6 weeks ($80 - $120). Balayage or highlight refreshes are lower-maintenance, typically required every 12-16 weeks.",
        },
      ],
    },
    {
      slug: "bridal-makeup-cost",
      name: "Bridal Makeup & Hair",
      priceRange: "$300 - $1,200",
      description:
        "Bridal packages are the highest-value single-event service for salons. Brides research extensively using AI. One bridal booking often leads to the entire wedding party.",
      faqItems: [
        {
          question: "What is the average bridal makeup cost in the US?",
          answer:
            "Bridal hair and makeup packages range from $300 to $1,200. Basic bridal packages are $300 - $500, while premium packages including a trial session, airbrush makeup, and on-site day-of styling cost $800 - $1,200. Travel fees may apply for on-location services.",
        },
        {
          question: "What does a bridal makeup package include?",
          answer:
            "A standard bridal package includes the wedding day hair design, professional makeup (HD or airbrush), lash application, and a pre-wedding consultation. Premium packages add trial runs and touch-up services.",
        },
      ],
    },
  ],
  costKeywords: [
    "keratin treatment cost US",
    "hair coloring price near me",
    "bridal makeup package cost",
    "balayage highlights cost",
    "hair extensions price",
  ],
  nicheKeywords: [
    "best salon near me",
    "keratin treatment salon",
    "bridal makeup artist",
    "best hair colorist",
    "top hair salon in [city]",
    "balayage salon near me",
  ],
  schemaType: "HealthAndBeautyBusiness",
  metaCategory: "lifestyle",
  citations: [
    {
      name: "StyleSeat",
      url: "https://www.styleseat.com",
      type: "niche-specific",
    },
    {
      name: "Mindbody",
      url: "https://www.mindbodyonline.com",
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
      name: "The Knot",
      url: "https://www.theknot.com",
      type: "niche-specific",
    },
  ],
};
