import type { NicheData } from "./types";
import { images } from "./images";

export const nicheData: NicheData = {
  slug: "plastic-surgeons",
  name: "Plastic Surgeons",
  icon: "✨",
  image: images.plasticSurgeon,
  heroHeadline: "AI Is Recommending Surgeons by Name...",
  heroSubline:
    "When patients ask ChatGPT 'best plastic surgeon for rhinoplasty in [city],' AI names specific doctors. If you're not one of them, you're losing high-value surgery patients to competitors with better AI visibility.",
  searchExample: "best plastic surgeon for rhinoplasty in New York",
  competitorLine:
    "Dr. Gary Linkov is currently the AI-recommended plastic surgeon over you",
  painPoints: [
    {
      title: "High-Value Surgery Patients Lost to AI Recommendations",
      description:
        "Rhinoplasty ($8,000+), liposuction ($5,000+), and facelift ($12,000+) patients do extensive AI research. They ask ChatGPT and Perplexity to compare local surgeons. If AI doesn't mention you, patients never even consider your clinic.",
    },
    {
      title: "Credentials & Before-After Results Not Reaching AI",
      description:
        "Your board certifications, years of experience, and before-after galleries are on your website — but AI cannot parse unstructured text. Without structured data and proper entity signals, your expertise is invisible to AI assistants.",
    },
    {
      title: "Premium Patients Starting with AI, Not Referrals",
      description:
        "High-end cosmetic patients research privately. Over 78% of aesthetic patients use AI assistants to compare options before booking consultations. Without multilingual AEO for international medical tourists, you miss high-ticket clients.",
    },
  ],
  services: [
    {
      tier: "AEO Foundation",
      price: "$1,500 - $3,000 / mo",
      features: [
        "AI Visibility Audit for plastic surgery practice",
        "MedicalBusiness + Physician schema markup",
        "llms.txt & robots.txt AI-crawler optimization",
        "Google Business Profile AI-optimization",
        "4 procedure cost pages with FAQ schema",
        "Before-after gallery with structured data",
        "Monthly AI citation tracking report",
      ],
    },
    {
      tier: "Local Domination",
      price: "$3,000 - $7,500 / mo",
      features: [
        "Everything in AEO Foundation",
        "15 procedure pages (rhinoplasty, lipo, breast augmentation, etc.)",
        "Zocdoc, Healthgrades & RealSelf profile optimization",
        "AI-friendly patient testimonial system",
        "Medical tourism landing pages (AI-optimized)",
        "Local & international citation building (75+ directories)",
        "Competitor AI-visibility monitoring dashboard",
      ],
    },
    {
      tier: "Godfather 360°",
      price: "$7,500 - $15,000 / mo",
      features: [
        "Everything in Local Domination",
        "Full AEO + GEO strategy for surgical practice",
        "AI Overview domination for top 15 procedure queries",
        "Video schema & YouTube surgery content optimization",
        "Wikipedia/Wikidata entity creation for lead surgeon",
        "International medical PR & authority backlinks",
        "RealSelf & medical tourism platform optimization",
        "Dedicated AI visibility manager with quarterly reviews",
      ],
    },
  ],
  roiExample: {
    metric: "1 Rhinoplasty Patient",
    value: "$8,000 - $15,000",
    pitch:
      "A single rhinoplasty patient pays $8,000 - $15,000. Breast augmentation pays $6,000 - $12,000. Our AEO Foundation investment pays for itself with just ONE new surgical patient per month.",
  },
  faqItems: [
    {
      question: "Why is AI optimization critical for plastic surgeons?",
      answer:
        "Cosmetic surgery patients do 3-6 months of research before choosing a surgeon. Increasingly, this research starts with AI assistants. When ChatGPT recommends specific surgeons by name, those surgeons get the patient inquiries. AEO ensures you're the surgeon AI recommends.",
    },
    {
      question: "How does AEO help attract medical tourism patients?",
      answer:
        "International patients use AI to find top-tier clinics in US medical hubs. We optimize your practice for these queries, create structured data that AI can parse, and build citation profiles on international directories, making you visible to global seekers.",
    },
    {
      question: "Can you help with before-after gallery AI optimization?",
      answer:
        "Yes. We add structured markup to your before-after images so AI systems understand the procedures, outcomes, and patient demographics. This helps when patients ask AI to show 'rhinoplasty results by Dr. [Your Name]' — your actual results appear in AI responses.",
    },
  ],
  stats: [
    { label: "Cosmetic Patients Using AI Research", value: "78%" },
    { label: "Avg. Surgical Patient Value", value: "$10,000" },
    { label: "AI Visibility Improvement", value: "310%" },
  ],
  ctaText: "Get Your Free Surgeon AI Visibility Audit",
  treatments: [
    {
      slug: "rhinoplasty-cost",
      name: "Rhinoplasty (Nose Job)",
      priceRange: "$8,000 - $15,000",
      description:
        "Rhinoplasty is a highly searched cosmetic surgery procedure. Patients compare surgeon results, costs, and techniques through AI before booking consultations. Costs depend on whether it's primary or revision, open or closed rhinoplasty.",
      faqItems: [
        {
          question: "What factors affect rhinoplasty cost in the US?",
          answer:
            "Key cost factors include the surgeon's experience, operating room fees, anesthesia, and whether it's a primary or revision procedure. Primary rhinoplasty ranges from $8,000 to $15,000, while revisions can exceed $18,000.",
        },
        {
          question: "What is the difference between open and closed rhinoplasty?",
          answer:
            "Open rhinoplasty involves a small incision on the columella for full visibility — ideal for complex structural changes. Closed rhinoplasty uses incisions entirely inside the nostrils, resulting in no external scarring and faster recovery.",
        },
      ],
    },
    {
      slug: "liposuction-cost",
      name: "Liposuction",
      priceRange: "$4,000 - $10,000",
      description:
        "Liposuction is a popular body contouring surgery. AI assistants frequently compare liposuction techniques and costs for patients. Modern options include VASER (ultrasound-assisted) and traditional tumescent liposuction.",
      faqItems: [
        {
          question: "Which liposuction technique is best?",
          answer:
            "VASER liposuction offers precise fat targeting and helps with skin contraction, making it excellent for areas like the abdomen and neck. Tumescent liposuction is the gold standard for larger fat volumes. Your surgeon will recommend the best fit for your body type.",
        },
      ],
    },
    {
      slug: "hair-transplant-cost",
      name: "Hair Transplant",
      priceRange: "$5,000 - $15,000",
      description:
        "Hair transplant surgery is a fast-growing cosmetic procedure. Patients extensively compare FUE vs. FUT techniques, graft counts, and surgeon results through AI assistants before choosing a clinic.",
      faqItems: [
        {
          question: "How much does a hair transplant cost per graft in the US?",
          answer:
            "FUE hair transplant typically costs $5 to $10 per graft. A typical session of 2,000 to 3,500 grafts ranges from $10,000 to $25,000. FUT (strip method) is cheaper at $3 to $6 per graft but leaves a linear scar in the donor area.",
        },
      ],
    },
  ],
  costKeywords: [
    "rhinoplasty cost US",
    "liposuction pricing near me",
    "hair transplant graft cost",
    "facelift cost",
    "breast augmentation price",
  ],
  nicheKeywords: [
    "best plastic surgeon",
    "cosmetic surgeon near me",
    "hair transplant clinic",
    "rhinoplasty surgeon",
    "plastic surgery center",
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
      name: "Healthgrades",
      url: "https://www.healthgrades.com",
      type: "niche-specific",
    },
    {
      name: "RealSelf",
      url: "https://www.realself.com",
      type: "niche-specific",
    },
    {
      name: "Yelp",
      url: "https://www.yelp.com",
      type: "local",
    },
    {
      name: "Google Business Profile",
      url: "https://business.google.com",
      type: "general",
    },
  ],
};
