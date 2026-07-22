import type { NicheData } from "./types";
import { images } from "./images";

export const nicheData: NicheData = {
  slug: "doctors",
  name: "Physicians & Medical Practices",
  icon: "🩺",
  image: images.dermatologist,
  heroHeadline: "AI Marketing for Doctors: Get Recommended by Answer Engines",
  heroSubline:
    "When patients ask ChatGPT or Google AI for the best local physician, will your practice be the answer? Dominate AEO and bypass traditional SEO to get found by patients who matter most.",
  searchExample: "best physician for primary care near me",
  competitorLine:
    "Large hospital networks are currently AI-recommended over your practice",
  painPoints: [
    {
      title: "Losing Local Patients to AI-Visible Competitors",
      description:
        "Patients are switching to AI for medical advice and local practice recommendations. If your practice isn't optimized for answer engines, you don't appear in the 2-3 results AI recommends — and you don't get the call.",
    },
    {
      title: "Zero AI Citations & Schema Markup",
      description:
        "Google AI requires rigorous E-E-A-T and specific Physician/MedicalBusiness JSON-LD schema to trust and recommend you. Most independent practices have none of this structured data in place.",
    },
    {
      title: "High Cost-Per-Acquisition on Google Ads",
      description:
        "Bidding on 'doctor near me' or 'primary care physician' is becoming prohibitively expensive, while organic AI recommendations carry the highest trust signals and zero incremental cost per patient.",
    },
  ],
  services: [
    {
      tier: "Physician AEO Starter",
      price: "Free Audit",
      features: [
        "AI Recommendation Check",
        "Schema Markup Analysis",
        "Local Citation Gap Report",
        "Competitor AI Visibility Audit",
      ],
    },
    {
      tier: "Medical Schema Core",
      price: "$1,500/mo",
      features: [
        "Physician & MedicalBusiness JSON-LD",
        "LocalBusiness Optimization",
        "Review Sentiment Sync",
        "E-E-A-T Content Strategy",
        "Monthly GSC Reporting",
      ],
    },
    {
      tier: "Full AEO Growth",
      price: "$3,500/mo",
      features: [
        "Everything in Core",
        "AI Citation Building (50+ directories)",
        "Blog & FAQ Content (AEO-optimized)",
        "ChatGPT & Perplexity Monitoring",
        "Dedicated Account Manager",
      ],
    },
  ],
  roiExample: {
    metric: "New Patient Inquiries",
    value: "+140%",
    pitch:
      "Medical practices that implement our AEO system see a massive increase in high-intent patient inquiries driven directly by AI recommendations — patients who have already decided they need a physician before they even call.",
  },
  faqItems: [
    {
      question: "Why do physicians need Answer Engine Optimization (AEO)?",
      answer:
        "Patients no longer just search Google — they ask AI assistants like ChatGPT specific symptom and specialist questions. AEO ensures your practice is cited as the authoritative answer, putting you in front of high-intent patients at the moment they decide to seek care.",
    },
    {
      question: "What schema markup do physicians need for AI visibility?",
      answer:
        "Doctors need MedicalBusiness, Physician, and MedicalSpecialty schema correctly nested with their NPI number, board certifications, and accepted insurance. This structured data allows AI to confidently verify your credentials and include you in recommendations.",
    },
    {
      question: "How long does it take to see results from medical AEO?",
      answer:
        "Most physician practices see initial improvements in AI citation mentions within 30-60 days. Full optimization — including structured data indexing, citation building, and E-E-A-T content — typically takes 90 days to deliver measurable new patient inquiries.",
    },
    {
      question: "Do you work with solo physicians or only large practices?",
      answer:
        "We work with both. Solo practitioners benefit most from our Physician AEO Starter package, while multi-location groups and hospital systems use our Full AEO Growth plan to dominate AI recommendations across every service area.",
    },
  ],
  stats: [
    { label: "Patients using AI for health decisions", value: "72%" },
    { label: "Trust in AI medical recommendations", value: "65%" },
    { label: "Increase in E-E-A-T scores after AEO", value: "3x" },
    { label: "Avg. new patients per month after 90 days", value: "+18" },
  ],
  ctaText: "Get Your Free Physician AI Audit",
  treatments: [
    {
      slug: "primary-care",
      name: "Primary Care AEO",
      priceRange: "$1,500–$3,500/mo",
      description:
        "Optimize your primary care practice for AI recommendations and local search.",
      faqItems: [
        {
          question: "How does AEO help primary care physicians?",
          answer:
            "AEO ensures that when patients ask AI for a primary care physician in your city, your practice is cited first — before they ever open a browser.",
        },
      ],
    },
    {
      slug: "specialist-care",
      name: "Specialist Practice AEO",
      priceRange: "$2,000–$4,000/mo",
      description:
        "Get recommended by AI for specialist queries — cardiologist, neurologist, orthopedic surgeon, and more.",
      faqItems: [
        {
          question: "Can AI AEO work for specialist physicians?",
          answer:
            "Yes — specialist queries are highly specific, which means AI recommendations carry even higher conversion rates. We build specialty-specific schema and citation profiles.",
        },
      ],
    },
  ],
  costKeywords: [
    "ai marketing for doctors cost",
    "physician aeo pricing",
    "medical practice ai visibility",
  ],
  nicheKeywords: [
    "ai marketing for doctors",
    "physician aeo",
    "medical practice ai recommendations",
    "doctor schema markup",
    "how to get recommended by chatgpt doctor",
  ],
  schemaType: "MedicalBusiness",
  metaCategory: "healthcare",
  citations: [
    { name: "Healthgrades", url: "https://www.healthgrades.com", type: "niche-specific" },
    { name: "Zocdoc", url: "https://www.zocdoc.com", type: "niche-specific" },
    { name: "Vitals", url: "https://www.vitals.com", type: "niche-specific" },
    { name: "WebMD", url: "https://www.webmd.com", type: "niche-specific" },
    { name: "Google Business Profile", url: "https://business.google.com", type: "general" },
    { name: "Yelp Health", url: "https://www.yelp.com/category/physicians", type: "general" },
  ],
};
