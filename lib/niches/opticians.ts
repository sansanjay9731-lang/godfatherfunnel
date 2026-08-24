import type { NicheData } from "./types";
import { images } from "./images";

export const nicheData: NicheData = {
  slug: "opticians",
  name: "Opticians & Eye Care Clinics",
  icon: "👓",
  image: images.eyeClinic,
  heroHeadline: "AI Marketing for Opticians: Get Recommended by ChatGPT",
  heroSubline:
    "When patients ask AI for opticians recommendations, only 3 clinics get recommended. If your practice isn't optimized for AI, you're losing high-value patients to competitors.",
  searchExample: "best optician near me for contact lenses",
  competitorLine: "Specsavers is currently AI-recommended over your practice",
  painPoints: [
    {
      title: "Losing Patients to Specsavers/Vision Express AI Recommendations",
      description:
        "AI assistants recommend larger chains because they have massive digital footprints. Without an AI optimization strategy, independent opticians get left out of these high-value recommendations.",
    },
    {
      title: "Zero Schema Markup",
      description:
        "Your clinic's website likely lacks the technical Optician and MedicalOrganization schema markup that AI models like ChatGPT and Perplexity rely on to understand your location, services, and authority.",
    },
    {
      title: "No AEO (Answer Engine Optimization) Strategy",
      description:
        "While you may have traditional SEO, you lack an AEO strategy. When a patient asks 'who has the best contact lens fitting near me', AI isn't pulling your website because your content isn't structured for direct answers.",
    },
  ],
  services: [
    {
      tier: "Free Audit",
      price: "$0",
      features: [
        "Current AI visibility check",
        "Competitor analysis",
        "Schema markup review",
      ],
    },
    {
      tier: "Core AEO",
      price: "$1,200 / mo",
      features: [
        "Optician schema markup implementation",
        "Google Business Profile AI-optimization",
        "llms.txt & robots.txt optimization",
        "Monthly AI citation tracking",
      ],
    },
    {
      tier: "Full AEO Domination",
      price: "$3,000 / mo",
      features: [
        "Everything in Core AEO",
        "Treatment pages structured for AI",
        "Local citation building (50+ directories)",
        "Bi-weekly content refresh for AI freshness",
        "Competitor AI-visibility monitoring",
      ],
    },
  ],
  roiExample: {
    metric: "New Patient Inquiries",
    value: "+120%",
    pitch:
      "Opticians implementing AEO see a 120% increase in new patient inquiries from AI search engines within the first 6 months, easily covering the investment.",
  },
  faqItems: [
    {
      question: "What are AI marketing services for opticians?",
      answer:
        "AI marketing for opticians involves optimizing your digital presence so that AI assistants like ChatGPT, Gemini, and Perplexity recommend your clinic when patients ask for eye care recommendations.",
    },
    {
      question: "What is AEO for opticians?",
      answer:
        "AEO (Answer Engine Optimization) structures your website's content and data to directly answer questions patients ask AI, ensuring your practice is the source of the answer.",
    },
    {
      question: "Do I need schema markup for my optician clinic?",
      answer:
        "Yes, Optician and MedicalOrganization schema markup is essential. It translates your clinic's information into a language AI models understand, increasing your chances of being recommended.",
    },
    {
      question: "How do I get ChatGPT to recommend my eye clinic?",
      answer:
        "To get recommended by ChatGPT, you need a combination of strong local citations, technical schema markup, structured service pages, and authoritative content that AI models use as reference points.",
    },
  ],
  stats: [
    { label: "Patients Using AI Search", value: "45%" },
    { label: "AI Visibility Growth", value: "200%" },
    { label: "Increase in Bookings", value: "85%" },
    { label: "Schema Markup ROI", value: "3x" },
  ],
  ctaText: "Get Your Free Optician AI Audit",
  treatments: [
    {
      slug: "eye-exams",
      name: "Comprehensive Eye Exams",
      priceRange: "$50 - $200",
      description:
        "Thorough eye health evaluations checking for vision acuity and eye diseases.",
      faqItems: [
        {
          question: "How often should I get an eye exam?",
          answer: "It is recommended to have a comprehensive eye exam every 1 to 2 years.",
        },
      ],
    },
    {
      slug: "contact-lens-fitting",
      name: "Contact Lens Fitting",
      priceRange: "$100 - $300",
      description:
        "Specialized measurements and evaluations to ensure comfortable and clear vision with contact lenses.",
      faqItems: [
        {
          question: "Does a contact lens fitting cost extra?",
          answer: "Yes, it involves additional measurements and trial lenses not included in a standard exam.",
        },
      ],
    },
  ],
  costKeywords: [
    "eye exam cost",
    "contact lens fitting cost",
    "designer frames price",
  ],
  nicheKeywords: [
    "optician",
    "eye clinic",
    "optometrist",
    "eye doctor",
    "contact lenses",
  ],
  schemaType: "Optician",
  metaCategory: "healthcare",
  citations: [
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
      name: "American Optometric Association",
      url: "https://www.aoa.org",
      type: "niche-specific",
    },
    {
      name: "Zocdoc",
      url: "https://www.zocdoc.com",
      type: "niche-specific",
    },
  ],
};
