import type { NicheData } from "./types";
import { images } from "./images";

export const nicheData: NicheData = {
  slug: "ayurveda-clinics",
  name: "Wellness & Integrative Medicine",
  icon: "🌿",
  image: images.ayurveda,
  heroHeadline: "Patients Ask AI for Integrative & Holistic Wellness. Does AI Recommend Your Clinic?",
  heroSubline:
    "From Functional Medicine to Acupuncture, patients now ask ChatGPT and Perplexity for the best wellness and integrative clinics. If AI recommends Canyon Ranch or Parsley Health instead of you, those high-value patients go to your competitors.",
  painPoints: [
    {
      title: "Holistic Patients Going to Corporate Chains",
      description:
        "When someone searches 'best integrative medicine doctor near me', AI recommends Parsley Health, One Medical, and Canyon Ranch. Your private practice with 10+ years of experience gets zero mentions because AI can't verify your credentials or reviews.",
    },
    {
      title: "Wellness Seekers Lost to Competitors",
      description:
        "The US's $30 billion integrative wellness market is booming. Patients use AI to design custom wellness regimens. If your clinic isn't AI-visible, they book with the competitor whose services AI can read and parse.",
    },
    {
      title: "High-Value Patients Relying on AI Discovery",
      description:
        "Patients looking for holistic packages (weight loss, bio-identical hormones, chronic pain) spend $2,000 to $10,000+ out-of-pocket. They rely entirely on AI research. One AI recommendation can mean $20,000+ in annual patient lifetime value.",
    },
  ],
  services: [
    {
      tier: "AEO Foundation",
      price: "$1,500 - $3,000 / mo",
      features: [
        "AI search audit for wellness & integrative medicine queries",
        "Google Business Profile AI-optimization",
        "Treatment-wise schema markup (Acupuncture, Functional Medicine)",
        "3 treatment cost pages for AI readability",
        "Local Yelp & Zocdoc profile optimization",
      ],
    },
    {
      tier: "Local Domination",
      price: "$3,000 - $7,500 / mo",
      features: [
        "Everything in AEO Foundation",
        "12 treatment cost pages (functional medicine, chiropractic, etc.)",
        "Zocdoc, Healthgrades & WebMD profile optimization",
        "AI-friendly patient review aggregation",
        "Local citation building (50+ directories)",
        "Competitor AI-visibility monitoring",
        "Bi-weekly content updates for search freshness signals",
      ],
    },
    {
      tier: "Godfather 360°",
      price: "$7,500 - $15,000 / mo",
      features: [
        "Everything in Local Domination",
        "Full AEO + GEO strategy for integrative medicine",
        "AI Overview domination for wellness & acupuncture queries",
        "Video schema & YouTube wellness content optimization",
        "Wikipedia/Wikidata entity creation for lead practitioner",
        "Medical authority backlinks & digital PR",
        "Dedicated AI visibility manager",
        "Quarterly ROI reviews & strategy sessions",
      ],
    },
  ],
  roiExample: {
    metric: "10 New Retainer Patients/Month",
    value: "$5,000 - $15,000",
    pitch:
      "10 additional holistic health patients per month — each worth $3,000-$5,000 in lifetime value — generates $30,000-$50,000 in new revenue. A single long-term functional medicine patient can pay for years of AEO.",
  },
  faqItems: [
    {
      question: "How do patients find wellness clinics through AI?",
      answer:
        "Patients ask AI questions like 'best functional medicine doctor in Austin', 'holistic treatment for gut health', or 'acupuncture near me'. AI recommends clinics based on structured schema, local reviews, and medical credentials it finds online.",
    },
    {
      question: "Can integrative medicine practices really benefit from AEO?",
      answer:
        "Yes. Holistic health is experiencing massive demand. Over 60% of wellness seekers research options through AI. Clinics optimized for AI report a substantial increase in direct self-pay enquiries.",
    },
    {
      question: "We rely on word-of-mouth. Why invest in AI visibility?",
      answer:
        "Word-of-mouth is local and slow. AI expands your visibility to patients actively searching for specialized care in your region. A single patient seeking long-term wellness therapy easily offsets your AEO investment.",
    },
    {
      question: "How does AEO work for complementary and alternative medicine?",
      answer:
        "AEO structures your clinical expertise, practitioner credentials, patient outcomes, and pricing into formats AI can read. We ensure your board certifications, state licenses, and clinical reviews are indexed correctly.",
    },
  ],
  stats: [
    { label: "Wellness Seekers Using AI for Healthcare Research", value: "60%" },
    { label: "US Integrative & Wellness Market Size", value: "$30.8 Billion" },
    { label: "Wellness Clinics Missing from AI Answers", value: "85%" },
  ],
  ctaText: "Get Your Free AI Visibility Audit — See What Patients Find When They Ask AI for Wellness Clinics",
  searchExample: "best functional medicine doctor in Seattle",
  competitorLine: "Parsley Health and local chains dominate AI recommendations for integrative medicine",
  treatments: [
    {
      slug: "functional-medicine-consultation-cost",
      name: "Functional Medicine Consultation Cost",
      priceRange: "$250 - $600",
      description:
        "Initial functional medicine consultation includes comprehensive history and lab review. Patients compare practitioners using AI, making it essential to be cited.",
      faqItems: [
        {
          question: "What is the average cost of a functional medicine consultation?",
          answer:
            "Initial consultations cost between $250 and $600 depending on location and practitioner credentials. Follow-up sessions typically range from $150 to $300. This is usually self-pay, though some lab tests may be covered by insurance.",
        },
        {
          question: "Why does functional medicine cost more than conventional visits?",
          answer:
            "Functional medicine doctors spend 60-90 minutes with you, performing deep-dive analyses of genetics, gut microbiome, toxins, and hormones. This detailed intake and customized treatment plan justify the premium self-pay rate.",
        },
      ],
    },
    {
      slug: "acupuncture-session-cost",
      name: "Acupuncture Session Cost",
      priceRange: "$100 - $200",
      description:
        "Acupuncture is highly searched for pain management and stress. Being AI-visible for acupuncture queries builds your patient pipeline.",
      faqItems: [
        {
          question: "What is the average cost of acupuncture?",
          answer:
            "A single session ranges from $100 to $200. An initial consultation with treatment may cost $150 to $250. Most patients require 6 to 12 sessions for chronic conditions.",
        },
        {
          question: "Is acupuncture covered by insurance in the US?",
          answer:
            "Many major US health insurance providers now cover acupuncture for specific conditions like chronic low back pain, migraines, and neck pain. Check if your provider is in-network.",
        },
      ],
    },
    {
      slug: "chiropractic-adjustment-cost",
      name: "Chiropractic Adjustment Cost",
      priceRange: "$80 - $150/session",
      description:
        "Chiropractic adjustments are extremely common. High local search volume makes it a key target for patient acquisition.",
      faqItems: [
        {
          question: "What does a chiropractic adjustment cost?",
          answer:
            "A single adjustment session ranges from $80 to $150. Initial exams involving X-rays can cost $150 to $300. Packages of 10-12 adjustments often provide savings.",
        },
        {
          question: "How many chiropractic sessions are typically needed?",
          answer:
            "For acute pain relief, 4 to 12 sessions over a few weeks are common. For long-term wellness maintenance, patients visit once or twice a month.",
        },
      ],
    },
    {
      slug: "massage-therapy-cost",
      name: "Massage Therapy Cost",
      priceRange: "$100 - $180/session",
      description:
        "Therapeutic massage (deep tissue, myofascial release) is a gateway to integrative care. High search volume drives clinic inquiries.",
      faqItems: [
        {
          question: "What is the average cost of medical massage therapy?",
          answer:
            "A 60-minute therapeutic massage costs $100 to $180 depending on the spa/clinic and therapist experience. 90-minute sessions range from $140 to $250.",
        },
      ],
    },
    {
      slug: "holistic-detox-program-cost",
      name: "Holistic Detox Program Cost",
      priceRange: "$1,500 - $4,500",
      description:
        "Holistic detox combining custom diet plans, supplements, and infrared sauna sessions is a highly sought-after package.",
      faqItems: [
        {
          question: "What does a clinical holistic detox include?",
          answer:
            "A clinical detox program includes physician supervision, advanced lab testing, customized supplementation, nutritional counseling, and supportive therapies like lymphatic drainage. Programs run 14 to 30 days and cost $1,500 to $4,500.",
        },
      ],
    },
    {
      slug: "bioidentical-hormone-therapy-cost",
      name: "Bioidentical Hormone Replacement Therapy Cost",
      priceRange: "$1,500 - $3,500/year",
      description:
        "BHRT for menopause or anti-aging is a high-demand query among health-conscious US consumers. It is a highly lucrative treatment.",
      faqItems: [
        {
          question: "What is the annual cost of bioidentical hormone therapy?",
          answer:
            "BHRT costs $1,500 to $3,500 annually. This includes hormone level blood/saliva testing, doctor visits, and the compounded hormones themselves. It is typically not covered by insurance.",
        },
      ],
    },
  ],
  costKeywords: [
    "functional medicine consultation cost",
    "acupuncture session price",
    "chiropractor adjustment cost",
    "massage therapy cost",
    "holistic detox program cost",
  ],
  nicheKeywords: [
    "best functional medicine doctor near me",
    "integrative medicine clinic",
    "acupuncture near me",
    "holistic doctor near me",
    "alternative medicine clinic",
  ],
  schemaType: "MedicalBusiness",
  metaCategory: "healthcare",
  citations: [
    {
      name: "Zocdoc",
      url: "https://www.zocdoc.com",
      type: "niche-specific",
    },
    {
      name: "WebMD",
      url: "https://www.WebMD.com",
      type: "niche-specific",
    },
    {
      name: "Healthgrades",
      url: "https://www.healthgrades.com",
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
      name: "NCCIH (NIH)",
      url: "https://www.nccih.nih.gov",
      type: "niche-specific",
    },
  ],
};
