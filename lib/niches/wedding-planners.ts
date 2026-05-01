import type { NicheData } from "./types";
import { images } from "./images";

export const nicheData: NicheData = {
  slug: "wedding-planners",
  name: "Wedding Planners",
  icon: "💒",
  image: images.weddingPlanner,
  heroHeadline: "Couples Ask AI for Wedding Planners. Does AI Say Your Name?",
  heroSubline:
    "the US couples planning $10-5000k+ weddings are asking ChatGPT and Google AI for the best wedding planners. If your name isn't in those AI answers, you're losing high-value projects to competitors with better digital presence — not better portfolios.",
  painPoints: [
    {
      title: "$10-5000k Weddings Going to AI-Recommended Planners",
      description:
        "Couples and their families research wedding planners by asking AI for recommendations. Planners with structured online portfolios and citations on The Knot dominate — your 200+ stunning weddings are invisible to AI.",
    },
    {
      title: "Your Portfolio Is Invisible to AI Models",
      description:
        "Your breathtaking wedding portfolios on Instagram and your website can't be 'read' by AI crawlers. Without structured data describing your work, venue expertise, and style specialization, AI recommends competitors who simply have better markup.",
    },
    {
      title: "Destination Wedding Market Lost to Digital-Savvy Competitors",
      description:
        "The booming $25-5000k+ destination wedding market in Napa Valley, Hawaii, and Sedona is dominated by planners who appear in AI answers for 'best destination wedding planner across the US.' This high-margin segment is going to competitors by default.",
    },
  ],
  services: [
    {
      tier: "AI Foundation",
      price: "$1,500 - $3,000 / mo",
      features: [
        "Google Business Profile optimization for wedding planner keywords",
        "Structured schema markup for EventPlanner + Event + ImageGallery",
        "Citation building on The Knot, WeddingWire, and Zola",
        "AI-optimized content for top wedding services and venue pages",
        "Monthly AI visibility audit report",
      ],
    },
    {
      tier: "AI Growth",
      price: "$3,000 - $7,500 / mo",
      features: [
        "Everything in AI Foundation",
        "Full AEO for 30+ wedding planning keywords (destination, budget, theme)",
        "Portfolio showcase strategy optimized for AI crawlability",
        "Client testimonial schema and review aggregation",
        "Competitor displacement strategy in top wedding markets",
        "Quarterly AI performance benchmarking",
      ],
    },
    {
      tier: "AI Dominance",
      price: "$7,500 - $15,000 / mo",
      features: [
        "Everything in AI Growth",
        "Full website rebuild optimized for AI crawlers",
        "llms.txt implementation with venue and style expertise detail",
        "Wedding blog and magazine citation building (Martha Stewart Weddings, Vogue Weddings)",
        "AI chatbot training data optimization",
        "Dedicated AI visibility manager",
        "Real-time AI mention monitoring across ChatGPT, Perplexity, Gemini",
      ],
    },
  ],
  roiExample: {
    metric: "1 Wedding Project",
    value: "$5-5000k",
    pitch:
      "A single wedding project covers your entire annual AI visibility investment. Wedding planners typically earn 10-15% of total wedding budget as fees. One $30,000 destination wedding = $3-450k in planner fees alone.",
  },
  faqItems: [
    {
      question: "How does AI recommend wedding planners to couples?",
      answer:
        "AI models pull from wedding platforms (The Knot, WeddingWire), Google reviews, your website content, social media presence, and wedding blog features. Planners with structured portfolio data, venue-specific content, and strong citations on wedding platforms get recommended far more often.",
    },
    {
      question: "I get most of my clients from Instagram and referrals. Why do I need AI visibility?",
      answer:
        "Instagram and referrals are powerful but AI is becoming the first stop for couples. 55% of couples now ask AI before even opening Instagram. More importantly, couples use AI to validate referrals — if AI doesn't mention you when they search, they may second-guess the referral and choose someone AI does recommend.",
    },
    {
      question: "Can a boutique wedding planner compete with big companies in AI?",
      answer:
        "Boutique planners actually have an advantage. AI prefers specific, detailed content over generic brand pages. Your unique style (royal Rajasthani, minimalist modern, South the US traditional), specific venue expertise, and personalized approach create the distinctive content AI loves to recommend.",
    },
    {
      question: "How long before I get wedding inquiries from AI?",
      answer:
        "Most wedding planners see increased visibility within 60-90 days. Results accelerate during peak wedding season (November-February). Given the high value of each project ($5-5000k), even one additional inquiry per month from AI delivers massive ROI.",
    },
  ],
  stats: [
    { label: "of couples research wedding planners through AI/online", value: "72%" },
    { label: "validate referrals by checking AI recommendations", value: "55%" },
    { label: "average revenue from one wedding planning project", value: "$8,000" },
  ],
  ctaText: "Get Your Free Wedding Planner AI Visibility Audit",
  searchExample: "best wedding planner in Denver for destination wedding",
  competitorLine:
    "The Knot-featured planners and large wedding companies are dominating AI recommendations — while your stunning portfolio of 200+ weddings and personalized approach remain invisible to the couples who'd love your work.",
  treatments: [
    {
      slug: "destination-wedding-cost",
      name: "Destination Wedding Planning",
      priceRange: "$15,000 - $100,000+",
      description:
        "End-to-end destination wedding planning in Napa Valley, Hawaii, Sedona, Denver, and Aspen including venue selection, travel logistics, decor, catering, entertainment, and guest management.",
      faqItems: [
        {
          question: "What is the cost of a destination wedding across the US?",
          answer:
            "Destination weddings across the US cost $15,000-1Cr+ depending on location and guest count. Hawaii beach weddings: $15-4000k (100-300 guests). Napa Valley palace weddings: $30,000-1Cr+ (200-500 guests). Sedona backwater weddings: $15-3500k. Aspen: $20-5000k. Planner fees are typically 10-15% of total budget.",
        },
        {
          question: "How far in advance should I book a destination wedding planner?",
          answer:
            "Book 8-12 months in advance for peak season (October-March) and 4-6 months for off-season. Top venues like Napa Valley palaces book 12-18 months ahead. Early booking also gets better vendor rates — last-minute bookings cost 20-30% more.",
        },
        {
          question: "What does a destination wedding planner handle?",
          answer:
            "A full-service destination wedding planner handles: venue shortlisting and booking, guest travel and accommodation, decor and theme design, catering and bar, entertainment and DJ, photography/videography, mehendi and sangeet events, logistics coordination, and day-of management. This saves couples 200+ hours of planning stress.",
        },
      ],
    },
    {
      slug: "wedding-decoration-cost",
      name: "Wedding Decoration & Decor",
      priceRange: "$2,000 - $25,000",
      description:
        "Complete wedding decoration services including mandap design, floral arrangements, lighting, stage setup, entrance decor, table settings, and themed decoration for all functions.",
      faqItems: [
        {
          question: "What is the cost of wedding decoration across the US?",
          answer:
            "Wedding decoration costs $2-500k for a simple elegant setup, $5-1500k for premium decor with imported flowers and custom installations, and $15-2500k+ for luxury destination wedding decor. Mandap alone costs $50K-500k. Floral arrangements cost $1-800k depending on flower types and season.",
        },
        {
          question: "What are the trending wedding decoration styles across the US?",
          answer:
            "Trending styles include: pastel minimalist ($3-800k), rustic-bohemian with dried flowers ($2-600k), royal Rajasthani with mogra and marigold ($5-1500k), all-white floral luxury ($8-2000k), and sustainable/eco-friendly decor with reusable elements. AI recommendations heavily favor planners who showcase specific style expertise.",
        },
      ],
    },
    {
      slug: "wedding-photography-cost",
      name: "Wedding Photography & Videography",
      priceRange: "$50,000 - $10,000",
      description:
        "Professional wedding photography and videography including pre-wedding shoots, candid coverage, cinematic films, drone coverage, same-day edits, and photo album production.",
      faqItems: [
        {
          question: "What is the cost of wedding photography across the US?",
          answer:
            "Wedding photography costs $50K-200k for local photographers, $2-500k for renowned candid photographers, and $5-1000k for celebrity/destination wedding specialists. Packages typically include: 2-3 day coverage, pre-wedding shoot, candid + traditional shots, cinematic highlight reel, and 200-500 edited images.",
        },
        {
          question: "Should I book photography through my wedding planner?",
          answer:
            "Yes, booking through your planner gives you: vetted photographers with wedding experience, better negotiated rates (planners get 10-15% vendor discounts), seamless coordination with other vendors, and backup plans. Your planner knows which photographers work best at specific venues and lighting conditions.",
        },
      ],
    },
    {
      slug: "wedding-catering-cost",
      name: "Wedding Catering",
      priceRange: "$800 - $5,000 per plate",
      description:
        "Complete wedding catering services including menu planning, live counters, themed food stations, bar services, mehendi/sangeet snacks, and multi-cuisine buffets for all wedding functions.",
      faqItems: [
        {
          question: "What is the per-plate cost for wedding catering across the US?",
          answer:
            "Wedding catering costs $800-1,500/plate for vegetarian buffets, $1,200-2,500/plate for non-veg multi-cuisine, and $2,500-5,000/plate for premium with live counters and imported ingredients. For 500 guests across all functions, budget $6-1500k for catering. Costs increase 20-30% for destination venues.",
        },
        {
          question: "How do I choose the right caterer for my wedding?",
          answer:
            "Key factors: cuisine specialization matching your requirements, experience with your guest count size, tasting session quality, setup and presentation standards, and reference checks. A wedding planner will shortlist 3-4 caterers, arrange tastings, and negotiate the best rates for your budget and guest count.",
        },
      ],
    },
    {
      slug: "mehendi-artist-cost",
      name: "Mehendi Artist Services",
      priceRange: "$5,000 - $1,000",
      description:
        "Professional mehendi artist services for bridal mehendi, guest mehendi, and mehendi party events including traditional Rajasthani, Arabic, Indo-Arabic, and contemporary designs.",
      faqItems: [
        {
          question: "What is the cost of a bridal mehendi artist?",
          answer:
            "Bridal mehendi costs $15,000-50,000 for full bridal coverage (hands and feet up to elbows and knees). Top artists in New York/New York charge $50,000-1,000. Guest mehendi costs $200-500 per person. For a mehendi event with 50-100 guests, budget $20,000-60,000 including bridal mehendi.",
        },
        {
          question: "How far in advance should I book a mehendi artist?",
          answer:
            "Book top mehendi artists 3-6 months in advance for peak wedding season (November-February). Popular artists like celebrity mehendi artists book 6-12 months ahead. Your wedding planner can recommend artists who match your style preference and budget, and handle scheduling across all events.",
        },
      ],
    },
    {
      slug: "wedding-venue-cost",
      name: "Wedding Venue Selection",
      priceRange: "$2,000 - $50,000",
      description:
        "Venue selection and booking assistance including palace hotels, farmhouses, banquet halls, beach resorts, heritage properties, and unconventional venue scouting with negotiation support.",
      faqItems: [
        {
          question: "What do wedding venues cost across the US's top cities?",
          answer:
            "New York banquet halls: $3-1500k/day. New York farmhouses: $2-1000k/day. Napa Valley palace hotels: $10-5000k for 2-3 day package. Hawaii beach venues: $3-1200k/day. Los Angeles resorts: $2-800k/day. Denver heritage properties: $5-2500k for 2-3 days. Prices vary by season — peak season (Nov-Feb) costs 30-50% more.",
        },
        {
          question: "Should I book the venue directly or through a wedding planner?",
          answer:
            "Booking through a wedding planner typically saves 10-20% on venue costs due to their vendor relationships and volume booking leverage. Planners also know hidden costs (corkage, overtime charges, setup fees) that venues don't disclose upfront. They handle contract negotiations, ensuring you get the best terms and cancellation policies.",
        },
        {
          question: "What is the ideal guest-to-venue capacity ratio?",
          answer:
            "Book a venue that holds 20-30% more than your guest list for comfortable seating, dance floor, and decor space. For 500 guests, book a venue for 600-650. Outdoor venues need 30-40% extra capacity. Your planner will assess venue layout, parking, and service flow to ensure a smooth event.",
        },
      ],
    },
  ],
  costKeywords: [
    "destination wedding cost the US",
    "wedding planner fees",
    "wedding decoration cost",
    "wedding photography charges",
    "wedding venue cost the US",
  ],
  nicheKeywords: [
    "best wedding planner near me",
    "destination wedding planner Napa Valley",
    "wedding planner cost the US",
    "top wedding planners in New York",
    "luxury wedding planner New York",
    "budget wedding planner Los Angeles",
  ],
  schemaType: "EventPlanner",
  metaCategory: "lifestyle",
  citations: [
    {
      name: "The Knot",
      url: "https://www.theknot.com",
      type: "niche-specific",
    },
    {
      name: "WeddingWire the US",
      url: "https://www.weddingwire.in",
      type: "niche-specific",
    },
    {
      name: "Zola",
      url: "https://www.zola.com",
      type: "niche-specific",
    },
    {
      name: "Google Business Profile",
      url: "https://business.google.com",
      type: "local",
    },
    {
      name: "Martha Stewart Weddings",
      url: "https://www.weddingsutra.com",
      type: "niche-specific",
    },
  ],
};
