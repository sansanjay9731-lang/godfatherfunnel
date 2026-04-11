import type { NicheData } from "./types";
import { images } from "./images";

export const nicheData: NicheData = {
  slug: "hair-salons",
  name: "Hair Salons",
  icon: "💇",
  image: images.hairSalon,
  heroHeadline: "Clients Ask AI for Salons. Is Your Salon AI-Recommended?",
  heroSubline:
    "When someone is about to spend ₹5K-15K on keratin or smoothening, they ask ChatGPT which salon to trust. If AI recommends Naturals, Jawed Habib, or Green Trends instead of you, that client is gone.",
  painPoints: [
    {
      title: "Keratin & Smoothening Clients Going Elsewhere",
      description:
        "High-value clients spending ₹5,000-15,000 on keratin treatments and hair smoothening ask AI 'best salon for keratin near me'. If your salon isn't mentioned, these premium bookings go to the salon AI does recommend.",
    },
    {
      title: "Bridal Package Bookings Lost to Competitors",
      description:
        "Bridal makeup and hair packages worth ₹15K-50K are increasingly booked after AI research. Brides-to-be ask AI for the best bridal salon in their city. One missed bridal booking is ₹15K-50K in lost revenue.",
    },
    {
      title: "Walk-In Traffic Declining Steadily",
      description:
        "Walk-in salon visits have dropped 35% as clients pre-research on AI before choosing where to go. Even loyal clients check AI for new options. If your salon doesn't show up, even regulars may switch.",
    },
  ],
  services: [
    {
      tier: "AI Visibility Starter",
      price: "₹10,000 - ₹20,000",
      features: [
        "AI search audit for salon queries in your city",
        "Google Business Profile optimization with photos",
        "Service menu structured data markup",
        "5 treatment cost pages for AI readability",
        "Basic review management strategy",
      ],
    },
    {
      tier: "AI Authority Builder",
      price: "₹30,000 - ₹60,000",
      features: [
        "Full AEO strategy for salon niche",
        "15+ content pages (treatment guides, before/after, hair care tips)",
        "Stylist credential & portfolio schema",
        "Citation building on UrbanClap, Justdial, Google Maps",
        "Instagram content optimization for AI discovery",
        "Monthly AI ranking reports",
      ],
    },
    {
      tier: "AI Dominance Package",
      price: "₹75,000 - ₹1,50,000",
      features: [
        "Complete AI ecosystem ownership for salons in your area",
        "30+ programmatic pages (treatment + area combos)",
        "Bridal & occasion-specific AI landing pages",
        "Video testimonial optimization for AI",
        "Quarterly AI search share reports",
        "Dedicated AEO manager",
        "Online booking funnel from AI discovery to appointment",
      ],
    },
  ],
  roiExample: {
    metric: "30 New Clients/Month",
    value: "₹1.5L - ₹3L",
    pitch:
      "30 new clients per month with an average ticket of ₹3,000-8,000 generates ₹1.5-3L in additional monthly revenue. That's ₹18-36L annually from AI-driven discovery alone.",
  },
  faqItems: [
    {
      question: "How do salon clients use AI to choose where to go?",
      answer:
        "Clients ask ChatGPT and Google AI questions like 'best keratin treatment salon in Koramangala', 'hair smoothening cost near me', or 'top bridal salon in Mumbai'. AI gives 3-5 recommendations with reasons. If your salon isn't listed, you lose that client.",
    },
    {
      question: "We have 500+ Google reviews. Isn't that enough?",
      answer:
        "Google reviews help with Google Maps, but ChatGPT and Perplexity use different signals — structured service data, expert credentials, content authority, and citation presence. A 4.8-star salon with no structured data often loses to a 4.2-star salon that's AI-optimized.",
    },
    {
      question: "Can AEO help our salon stand out against franchise chains?",
      answer:
        "Absolutely. AI values authentic expertise and personalized service data. Independent salons with well-structured content about their stylists, techniques, and specializations often outrank chain salons in AI answers because they provide more specific, trustworthy information.",
    },
    {
      question: "How quickly will we see more bookings?",
      answer:
        "Most salons see increased enquiries within 3-4 weeks of AI optimization. Full booking pipeline impact typically shows within 2-3 months as AI models update their recommendations and more clients discover your salon through AI search.",
    },
  ],
  stats: [
    { label: "Salon Clients Researching via AI Before Booking", value: "62%" },
    { label: "Average High-Value Salon Service", value: "₹5K-15K" },
    { label: "Independent Salons Missing from AI", value: "87%" },
  ],
  ctaText: "Get Your Free AI Visibility Audit — See What Clients Find When They Ask AI for Salons",
  searchExample: "best salon for keratin treatment near me",
  competitorLine: "Naturals, Jawed Habib, and Green Trends dominate AI recommendations for hair salons",
  treatments: [
    {
      slug: "keratin-treatment-cost",
      name: "Keratin Treatment Cost",
      priceRange: "₹3,000 - ₹15,000",
      description:
        "Keratin treatment is the highest-value recurring salon service. Clients research extensively before committing, making it the #1 AI-searched salon treatment. Being recommended here drives premium bookings.",
      faqItems: [
        {
          question: "What is the average keratin treatment cost in India?",
          answer:
            "Keratin treatment costs ₹3,000 to ₹15,000 depending on hair length, product brand, and salon tier. Short hair: ₹3,000-5,000, medium: ₹5,000-8,000, long: ₹8,000-15,000. Premium brands like GKhair and Kerasilk cost 30-50% more than standard keratin.",
        },
        {
          question: "How long does keratin treatment last?",
          answer:
            "Professional keratin treatment lasts 3-6 months. Longevity depends on hair washing frequency, product quality, and aftercare. Using sulfate-free shampoo extends results by 4-8 weeks. Most clients re-do every 4-5 months, making it a reliable recurring revenue stream.",
        },
        {
          question: "Is keratin treatment safe for all hair types?",
          answer:
            "Keratin is safe for most hair types but not recommended for chemically damaged or extremely thin hair. Formaldehyde-free keratin options (₹5K-12K) are available for sensitive scalps. A consultation is always recommended before the treatment.",
        },
      ],
    },
    {
      slug: "hair-smoothening-cost",
      name: "Hair Smoothening Cost",
      priceRange: "₹4,000 - ₹12,000",
      description:
        "Hair smoothening (permanent straightening) is a top-searched service. Clients compare salons on price, technique, and results, making AI visibility critical for capturing these high-intent bookings.",
      faqItems: [
        {
          question: "What is the average hair smoothening cost?",
          answer:
            "Hair smoothening costs ₹4,000 to ₹12,000 in India. Basic cysteine smoothening: ₹4,000-6,000, advanced protein smoothening: ₹6,000-9,000, premium Japanese straightening: ₹8,000-12,000. Prices vary by hair length and density.",
        },
        {
          question: "What is the difference between keratin and smoothening?",
          answer:
            "Keratin reduces frizz while maintaining natural texture (lasts 3-6 months, ₹3K-15K). Smoothening permanently straightens hair by breaking bonds (lasts until new growth, ₹4K-12K). Keratin is less damaging; smoothening gives straighter results.",
        },
      ],
    },
    {
      slug: "hair-coloring-cost",
      name: "Hair Coloring Cost",
      priceRange: "₹1,500 - ₹10,000",
      description:
        "Hair coloring — from global color to balayage and highlights — is a high-frequency service that clients choose based on stylist expertise. AI recommendations drive trial visits that convert to regular clients.",
      faqItems: [
        {
          question: "What is the average hair coloring cost in India?",
          answer:
            "Hair coloring costs ₹1,500 to ₹10,000. Global color: ₹1,500-4,000, highlights: ₹3,000-6,000, balayage: ₹5,000-10,000, fashion colors (pink, blue): ₹4,000-8,000. Premium salon brands like Wella and L'Oreal Professionnel add ₹1,000-2,000 to the base price.",
        },
        {
          question: "How do I choose the right hair color?",
          answer:
            "The right hair color depends on skin undertone, maintenance commitment, and lifestyle. Warm skin tones suit caramel and honey shades; cool tones suit ash and platinum. A professional colorist consultation (usually free at good salons) helps determine the best option.",
        },
        {
          question: "How often do I need to recolor my hair?",
          answer:
            "Root touch-ups are needed every 4-6 weeks (₹1,000-2,500). Global color refreshes every 6-8 weeks. Balayage requires maintenance every 3-4 months, making it a lower-maintenance option despite higher initial cost.",
        },
      ],
    },
    {
      slug: "bridal-makeup-cost",
      name: "Bridal Makeup & Hair Cost",
      priceRange: "₹10,000 - ₹50,000",
      description:
        "Bridal packages are the highest-value single-event service for salons. Brides research extensively using AI, checking portfolios, pricing, and reviews. One bridal booking often leads to the entire wedding party.",
      faqItems: [
        {
          question: "What is the average bridal makeup cost in India?",
          answer:
            "Bridal makeup costs ₹10,000 to ₹50,000. Basic bridal makeup: ₹10K-15K, professional airbrush bridal: ₹15K-25K, celebrity/premium bridal: ₹25K-50K. Packages including mehendi look, reception look, and hair styling cost ₹25K-75K.",
        },
        {
          question: "What does a bridal makeup package include?",
          answer:
            "A standard bridal package includes pre-bridal facial, HD/airbrush makeup, hairstyling with accessories, draping assistance, and touch-up kit. Premium packages add pre-bridal skin prep (₹5K-10K extra), trial session, and on-location service.",
        },
      ],
    },
    {
      slug: "hair-spa-cost",
      name: "Hair Spa Cost",
      priceRange: "₹800 - ₹3,500",
      description:
        "Hair spa is a high-frequency, accessible service that introduces new clients to your salon. It's a gateway treatment — clients who come for a hair spa often upgrade to coloring, keratin, or smoothening.",
      faqItems: [
        {
          question: "What is the average hair spa cost?",
          answer:
            "Hair spa costs ₹800 to ₹3,500 per session. Basic cream bath: ₹800-1,200, deep conditioning spa: ₹1,200-2,000, premium scalp + hair treatment: ₹2,000-3,500. Most salons offer packages of 4-6 sessions at 15-20% discount.",
        },
        {
          question: "How often should I get a hair spa?",
          answer:
            "For general maintenance, once a month is ideal. Chemically treated or damaged hair benefits from bi-weekly sessions. Regular hair spa clients spend ₹12,000-36,000 annually, making it a steady revenue stream for salons.",
        },
      ],
    },
    {
      slug: "hair-extensions-cost",
      name: "Hair Extensions Cost",
      priceRange: "₹5,000 - ₹30,000",
      description:
        "Hair extensions — clip-in, tape-in, and bonded — are a premium service with high margins. Clients willing to spend ₹10K-30K on extensions are high-value and often become repeat customers.",
      faqItems: [
        {
          question: "What is the average hair extension cost in India?",
          answer:
            "Hair extensions cost ₹5,000 to ₹30,000 depending on type and quality. Clip-in extensions: ₹3,000-8,000, tape-in: ₹8,000-15,000, micro-ring/bonded: ₹15,000-30,000. Human hair extensions cost 2-3x more than synthetic but last longer.",
        },
        {
          question: "How long do hair extensions last?",
          answer:
            "Clip-in extensions last 6-12 months with care. Tape-in extensions need replacement every 6-8 weeks (₹3K-5K per maintenance visit). Bonded extensions last 3-4 months. Maintenance appointments create recurring revenue for the salon.",
        },
        {
          question: "Do hair extensions damage natural hair?",
          answer:
            "When applied and maintained properly by an experienced stylist, modern hair extensions cause minimal damage. Tape-in and micro-ring methods are gentlest. Improper application or neglected maintenance can cause breakage, which is why clients should choose experienced salons.",
        },
      ],
    },
  ],
  costKeywords: [
    "keratin treatment cost",
    "hair smoothening price",
    "bridal makeup cost India",
    "hair coloring price near me",
    "hair spa cost",
  ],
  nicheKeywords: [
    "best salon near me",
    "keratin treatment salon",
    "bridal makeup artist",
    "hair smoothening salon",
    "top hair salon in Bangalore",
    "hair coloring salon near me",
  ],
  schemaType: "HealthAndBeautyBusiness",
  metaCategory: "lifestyle",
  citations: [
    {
      name: "Urban Company",
      url: "https://www.urbancompany.com",
      type: "niche-specific",
    },
    {
      name: "Google Business Profile",
      url: "https://business.google.com",
      type: "general",
    },
    {
      name: "Justdial",
      url: "https://www.justdial.com",
      type: "local",
    },
    {
      name: "WedMeGood",
      url: "https://www.wedmegood.com",
      type: "niche-specific",
    },
    {
      name: "BookMyShow (Events)",
      url: "https://www.bookmyshow.com",
      type: "general",
    },
  ],
};
