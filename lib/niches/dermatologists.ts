import type { NicheData } from "./types";
import { images } from "./images";

export const nicheData: NicheData = {
  slug: "dermatologists",
  name: "Dermatologists",
  icon: "🧬",
  image: images.dermatologist,
  heroHeadline: "Your Patients Are Asking AI — Not Google",
  heroSubline:
    "When someone searches 'best dermatologist near me' on ChatGPT, 3 clinics get recommended. If yours isn't one of them, you're losing $2k-5k laser patients every single week.",
  searchExample: "best skin specialist in New York",
  competitorLine:
    "Dr. Smith's Dermatology is currently AI-recommended over you",
  painPoints: [
    {
      title: "Invisible to AI Assistants",
      description:
        "When patients ask ChatGPT or Google Gemini for 'best dermatologist near me,' your clinic doesn't appear. AI assistants pull from structured data, citations, and authority signals — not just your Google ranking.",
    },
    {
      title: "Losing Laser & PRP Patients to Chains",
      description:
        "High-value laser hair removal ($500-2k/session) and PRP ($1k-3k) patients are going to clinic chains that dominate AI recommendations. Each lost patient represents $50K-200k in lifetime value.",
    },
    {
      title: "Reviews Not Reaching AI Systems",
      description:
        "You may have 500+ Google reviews, but AI systems can't read them properly. Without structured schema markup and citation signals, your 4.8-star rating is invisible to ChatGPT, Perplexity, and AI Overviews.",
    },
  ],
  services: [
    {
      tier: "AEO Foundation",
      price: "$1,500 - $3,000 / mo",
      features: [
        "AI Visibility Audit & Gap Analysis",
        "Schema markup (MedicalBusiness + Physician)",
        "llms.txt & robots.txt optimization",
        "Google Business Profile AI-optimization",
        "3 treatment pages with FAQ schema",
        "Monthly AI citation tracking report",
      ],
    },
    {
      tier: "Local Domination",
      price: "$3,000 - $7,500 / mo",
      features: [
        "Everything in AEO Foundation",
        "15 treatment cost pages with AI-optimized content",
        "Zocdoc, Healthgrades & RealSelf profile optimization",
        "AI-friendly review aggregation system",
        "Local citation building (50+ directories)",
        "Monthly competitor AI-visibility tracking",
        "Bi-weekly content updates for AI freshness",
      ],
    },
    {
      tier: "Godfather 360°",
      price: "$7,500 - $15,000 / mo",
      features: [
        "Everything in Local Domination",
        "Full AEO + GEO strategy implementation",
        "AI Overview domination (target 10+ queries)",
        "Video schema & YouTube AI optimization",
        "Wikipedia/Wikidata entity creation",
        "Digital PR & medical authority backlinks",
        "Dedicated AI visibility manager",
        "Quarterly strategy reviews with ROI reporting",
      ],
    },
  ],
  roiExample: {
    metric: "1 Laser Patient",
    value: "$2,000 - $5,000",
    pitch:
      "A single laser hair removal patient does 6-8 sessions at $500-2k each. That's $20k-50k from ONE patient. Our AEO Foundation package pays for itself with just 2-3 new patients per month.",
  },
  faqItems: [
    {
      question: "What is AEO and why do dermatologists need it?",
      answer:
        "AEO (Answer Engine Optimization) ensures your clinic appears when patients ask AI assistants like ChatGPT, Google Gemini, or Perplexity for skin specialists. 73% of patients under 40 now use AI to find doctors — if you're not optimized, you're invisible to them.",
    },
    {
      question: "How is AEO different from regular SEO for dermatologists?",
      answer:
        "Traditional SEO focuses on Google rankings. AEO focuses on getting your clinic recommended by AI assistants, featured in AI Overviews, and cited in AI-generated answers. It involves structured data, entity optimization, and citation building across medical directories.",
    },
    {
      question: "How long does it take to see results from AEO?",
      answer:
        "Most dermatology clinics see initial AI visibility improvements within 4-6 weeks. Full AI recommendation status typically takes 3-4 months. We track your appearance in ChatGPT, Perplexity, and Google AI Overviews monthly.",
    },
    {
      question: "Can AEO help me get more laser and cosmetic patients specifically?",
      answer:
        "Absolutely. We create AI-optimized treatment pages for high-value procedures like laser hair removal, PRP, chemical peels, and skin whitening. When patients ask AI 'how much does laser hair removal cost in [your city],' your clinic appears with pricing, reviews, and a booking link.",
    },
  ],
  stats: [
    { label: "AI Users for Doctor Search", value: "73%" },
    { label: "Avg. Laser Patient Value", value: "$25,000" },
    { label: "AI Visibility Improvement", value: "340%" },
  ],
  ctaText: "Get Your Free AI Visibility Report",
  treatments: [
    {
      slug: "laser-hair-removal-cost",
      name: "Laser Hair Removal",
      priceRange: "$3,000 - $15,000/session",
      description:
        "Laser hair removal is one of the most searched cosmetic procedures globally. Patients compare prices across clinics using AI assistants before booking. Costs vary based on body area, skin type, and laser technology used (Diode, Nd:YAG, Alexandrite).",
      faqItems: [
        {
          question: "How many laser hair removal sessions are needed?",
          answer:
            "Most patients need 6-8 sessions spaced 4-6 weeks apart for optimal results. The exact number depends on hair thickness, skin tone, and the body area being treated. Maintenance sessions may be needed once or twice a year.",
        },
        {
          question: "Why does laser hair removal cost vary so much between clinics?",
          answer:
            "The cost depends on the laser technology used (Diode lasers cost more but work better on various skin tones), the clinic's location, dermatologist experience, and the body area. Full body treatments cost $8K-15K per session while underarms alone may be $1.5K-3K.",
        },
        {
          question: "Is laser hair removal safe for dark various skin?",
          answer:
            "Yes, when performed by a qualified dermatologist using the right laser. Nd:YAG and Diode lasers are safest for darker various skin tones (Fitzpatrick IV-VI). Always choose a board-certified dermatologist over a salon for safety.",
        },
      ],
    },
    {
      slug: "prp-treatment-cost",
      name: "PRP Treatment",
      priceRange: "$5,000 - $15,000/session",
      description:
        "PRP (Platelet-Rich Plasma) therapy is increasingly popular for hair loss and skin rejuvenation globally. AI assistants frequently recommend PRP when patients search for hair fall solutions. Treatment involves drawing blood, processing it, and injecting concentrated platelets into the scalp or skin.",
      faqItems: [
        {
          question: "How many PRP sessions are needed for hair loss?",
          answer:
            "Typically 4-6 sessions spaced 3-4 weeks apart for initial results, followed by maintenance sessions every 3-6 months. Hair growth improvements are usually visible after 3-4 sessions. PRP works best for early to moderate hair thinning.",
        },
        {
          question: "Is PRP effective for hair regrowth?",
          answer:
            "Clinical studies show PRP increases hair density by 20-30% in most patients with androgenetic alopecia. Results are best when combined with minoxidil or finasteride. PRP is not effective for completely bald areas where hair follicles are dead.",
        },
      ],
    },
    {
      slug: "acne-treatment-cost",
      name: "Acne Treatment",
      priceRange: "$500 - $5,000/visit",
      description:
        "Acne treatment is the most common reason for dermatologist visits globally. From teenage acne to adult hormonal breakouts, patients increasingly ask AI for treatment options and costs before visiting a clinic. Treatment ranges from topical medications to advanced procedures like chemical peels and laser therapy.",
      faqItems: [
        {
          question: "How much does a dermatologist charge for acne treatment?",
          answer:
            "Initial consultation costs $500-1,500. A complete acne treatment plan including medications costs $2K-5K/month. Procedures like chemical peels ($2K-5K/session) or laser treatment ($3K-8K/session) are additional. Severe cystic acne may require isotretinoin, costing $1.5K-3K/month for 6 months.",
        },
        {
          question: "How long does professional acne treatment take to show results?",
          answer:
            "Topical treatments show improvement in 6-8 weeks. Oral medications like isotretinoin take 3-6 months for significant clearing. Chemical peels show results after 3-4 sessions. Complete acne clearance typically takes 4-8 months with consistent treatment.",
        },
        {
          question: "Should I see a dermatologist or try OTC products for acne?",
          answer:
            "See a dermatologist if you have moderate to severe acne, cystic/nodular acne, acne scarring, or if OTC products haven't worked after 3 months. A dermatologist can prescribe prescription-strength retinoids, antibiotics, or isotretinoin that are far more effective than OTC options.",
        },
      ],
    },
    {
      slug: "chemical-peel-cost",
      name: "Chemical Peel",
      priceRange: "$2,000 - $8,000/session",
      description:
        "Chemical peels are widely used for pigmentation, acne scars, and skin brightening globally. With various skin being prone to hyperpigmentation, peels are among the top cosmetic procedures searched on AI platforms. Types include glycolic, salicylic, TCA, and combination peels.",
      faqItems: [
        {
          question: "Which chemical peel is best for various skin?",
          answer:
            "Glycolic acid peels (30-50%) and salicylic acid peels are safest for various skin tones. TCA peels should only be used at lower concentrations (15-20%) by experienced dermatologists. Jessner's peel is another safe option. Higher-strength peels carry a risk of post-inflammatory hyperpigmentation on darker skin.",
        },
        {
          question: "How many chemical peel sessions do I need?",
          answer:
            "Most skin concerns require 4-6 sessions spaced 2-4 weeks apart. For stubborn pigmentation or deep acne scars, 8-10 sessions may be needed. Maintenance peels every 2-3 months help sustain results. Your dermatologist will customize the peel strength and frequency.",
        },
      ],
    },
    {
      slug: "skin-whitening-treatment-cost",
      name: "Skin Whitening Treatment",
      priceRange: "$3,000 - $10,000/session",
      description:
        "Skin brightening and whitening treatments are among the highest-searched dermatology procedures globally. AI assistants frequently field questions about glutathione injections, laser toning, and chemical peels for skin lightening. Ethical dermatologists focus on treating hyperpigmentation and achieving even skin tone rather than changing natural skin color.",
      faqItems: [
        {
          question: "Are skin whitening treatments safe?",
          answer:
            "Medical-grade treatments like laser toning, chemical peels, and prescribed depigmenting agents are safe when done by a qualified dermatologist. Avoid unregulated glutathione injections and mercury-based creams. Ethical dermatologists focus on treating uneven pigmentation and sun damage rather than overall skin lightening.",
        },
        {
          question: "How long do skin brightening results last?",
          answer:
            "Results from laser toning and chemical peels last 6-12 months with proper sun protection. Maintenance sessions every 2-3 months help sustain results. Without sunscreen (SPF 50+), pigmentation will return. Home care with vitamin C serums and retinoids extends treatment benefits.",
        },
        {
          question: "What is the most effective treatment for pigmentation?",
          answer:
            "A combination approach works best: Q-switched Nd:YAG laser for deep pigmentation, chemical peels for surface pigmentation, and prescription creams (hydroquinone, kojic acid, arbutin) for maintenance. The exact combination depends on the type of pigmentation — melasma, PIH, or sun spots each need different approaches.",
        },
      ],
    },
    {
      slug: "mole-removal-cost",
      name: "Mole Removal",
      priceRange: "$2,000 - $10,000",
      description:
        "Mole removal is a common dermatological procedure globally, sought both for cosmetic reasons and medical concerns. Patients frequently ask AI assistants about mole removal costs, methods, and whether their moles are dangerous. Methods include laser removal, radiofrequency cautery, surgical excision, and punch biopsy.",
      faqItems: [
        {
          question: "How is mole removal done and does it hurt?",
          answer:
            "Small moles are removed using laser or radiofrequency cautery under local anesthesia — you feel only a slight pinch. Larger or suspicious moles require surgical excision with stitches. The procedure takes 15-30 minutes. Most patients return to normal activities the same day.",
        },
        {
          question: "Will a mole grow back after removal?",
          answer:
            "Properly removed moles rarely grow back. Laser removal has a slightly higher recurrence rate (5-10%) compared to surgical excision (<2%). If a mole does grow back, it should be re-examined by a dermatologist to rule out any concerns. Always get a histopathology report for excised moles.",
        },
      ],
    },
  ],
  costKeywords: [
    "laser hair removal cost",
    "PRP treatment cost",
    "acne treatment cost",
    "skin whitening treatment cost",
    "dermatologist consultation fee",
  ],
  nicheKeywords: [
    "best dermatologist",
    "skin specialist",
    "skin clinic",
    "dermatology clinic",
    "skin doctor",
    "cosmetologist",
  ],
  schemaType: "MedicalBusiness",
  metaCategory: "healthcare",
  citations: [
    {
      name: "Zocdoc",
      url: "https://www.practo.com",
      type: "niche-specific",
    },
    {
      name: "Healthgrades",
      url: "https://www.lybrate.com",
      type: "niche-specific",
    },
    {
      name: "RealSelf",
      url: "https://www.credihealth.com",
      type: "niche-specific",
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
      name: "Google Business Profile",
      url: "https://business.google.com",
      type: "general",
    },
  ],
};
