import type { NicheData } from "./types";
import { images } from "./images";

export const nicheData: NicheData = {
  slug: "pediatricians",
  name: "Pediatricians",
  icon: "👶",
  image: images.pediatrician,
  heroHeadline: "Parents Ask AI Which Pediatrician to Trust. What Does AI Say About You?",
  heroSubline:
    "New parents at 2 AM ask ChatGPT 'best pediatrician near me' or 'baby fever what to do'. If AI recommends another doctor, that family — worth $50K-200k over their child's first 5 years — goes to your competitor.",
  painPoints: [
    {
      title: "New Parents Asking AI for Baby Doctor Recommendations",
      description:
        "First-time parents are anxious and research-obsessed. They ask AI 'best pediatrician in Indiranagar' or 'top child specialist near me' before choosing a doctor. If you're not in AI's top 3 recommendations, you lose that family for years.",
    },
    {
      title: "Vaccination Queries Answered by Competitor Clinics",
      description:
        "Parents search 'baby vaccination schedule' and 'vaccination cost for babies' constantly. AI cites clinics that have structured vaccination data. If your vaccination schedule and pricing aren't AI-readable, competitors capture these high-retention patients.",
    },
    {
      title: "Emergency Pediatric Visits Lost to AI-Visible Doctors",
      description:
        "When a child has sudden fever at midnight, panicked parents ask AI 'pediatrician near me open now'. AI recommends doctors with structured availability data. Without it, you're invisible during the most critical decision moments.",
    },
  ],
  services: [
    {
      tier: "AI Visibility Starter",
      price: "$20,000 - $40,000",
      features: [
        "AI search audit for pediatric queries in your city",
        "Google Business Profile optimization with specializations",
        "Vaccination schedule & cost structured data",
        "5 parent-guide pages for AI readability",
        "Basic Zocdoc & Google Maps optimization",
      ],
    },
    {
      tier: "AI Authority Builder",
      price: "$50,000 - $1,000",
      features: [
        "Full AEO strategy for pediatric practice",
        "20+ content pages (age-wise guides, common conditions, vaccination FAQs)",
        "Doctor credential & fellowship schema",
        "Citation building on Zocdoc, Healthgrades, 1mg",
        "Parent community content strategy",
        "Monthly AI ranking reports",
      ],
    },
    {
      tier: "AI Dominance Package",
      price: "$150,000 - $3,000",
      features: [
        "Complete AI ecosystem ownership for pediatrics in your city",
        "50+ programmatic pages (condition + age + treatment combos)",
        "Video content optimization for parent queries",
        "Wikipedia & medical knowledge panel strategy",
        "Quarterly AI search share reports",
        "Dedicated AEO manager",
        "New parent funnel from AI discovery to first visit",
      ],
    },
  ],
  roiExample: {
    metric: "20 New Families/Month",
    value: "$100k - $200k",
    pitch:
      "Each new family visits 8-12 times in the first year alone (vaccinations, check-ups, illness). 20 new families per month means $1-200k in monthly revenue, compounding as those families stay for 5-10 years.",
  },
  faqItems: [
    {
      question: "How do parents use AI to find pediatricians?",
      answer:
        "Parents ask ChatGPT, Google AI, and Perplexity questions like 'best pediatrician in HSR Layout', 'baby vaccination schedule India', or 'child fever when to see doctor'. AI gives direct recommendations with reasons, and parents trust these more than random Google listings.",
    },
    {
      question: "Our practice is full. Why do we need AI visibility?",
      answer:
        "Even full practices lose patients to attrition (families moving, children growing up). AI visibility ensures a steady pipeline of new families. Plus, AI-recommended doctors can charge premium consultation fees — $800-1,500 instead of $500.",
    },
    {
      question: "Is AEO relevant for pediatricians with hospital affiliations?",
      answer:
        "Absolutely. Parents search for individual doctors, not hospitals. AI recommends specific pediatricians. Even hospital-affiliated doctors need personal AI visibility to attract patients who choose doctors first, then the hospital.",
    },
    {
      question: "How does AEO help with vaccination-related queries?",
      answer:
        "Vaccination queries are the #1 pediatric search category. We structure your vaccination schedule, pricing, and availability so AI cites your clinic when parents ask about vaccine costs, schedules, or side effects. This captures high-retention families.",
    },
  ],
  stats: [
    { label: "New Parents Using AI for Doctor Recommendations", value: "71%" },
    { label: "Lifetime Value of One Pediatric Family", value: "$50K-200k" },
    { label: "Pediatricians Missing from AI Answers", value: "83%" },
  ],
  ctaText: "Get Your Free AI Visibility Audit — See What Parents Find When They Ask AI About Pediatricians",
  searchExample: "best pediatrician near me",
  competitorLine: "Rainbow Children's and Cloudnine dominate AI recommendations for pediatric care",
  treatments: [
    {
      slug: "child-vaccination-cost",
      name: "Child Vaccination Cost",
      priceRange: "$500 - $5,000/vaccine",
      description:
        "Vaccination is the #1 reason parents visit a pediatrician and the most searched pediatric query. Parents compare costs across clinics using AI, making structured vaccination data critical for patient acquisition.",
      faqItems: [
        {
          question: "What is the average child vaccination cost globally?",
          answer:
            "Individual vaccines cost $500 to $5,000. BCG: $500-800, Pentavalent: $1,000-2,500, PCV: $3,000-4,500, Rotavirus: $1,000-1,500, MMR: $500-1,000. Complete vaccination for 0-5 years costs $15,000-40,000 at private clinics.",
        },
        {
          question: "What is the IAP vaccination schedule for babies?",
          answer:
            "The IAP (Indian Academy of Pediatrics) schedule includes BCG, OPV, Hepatitis B at birth; DTwP/DTaP, IPV, Hib, Rotavirus, PCV at 6/10/14 weeks; Measles at 9 months; and boosters at 15-18 months. Your pediatrician will provide a personalized schedule.",
        },
        {
          question: "Are government vaccines different from private clinic vaccines?",
          answer:
            "Government provides free essential vaccines (BCG, OPV, Pentavalent, MR, JE). Private clinics offer additional recommended vaccines (PCV, Rotavirus, Varicella, Hepatitis A) and often use acellular versions with fewer side effects. Total private cost: $25K-40K for 0-5 years.",
        },
      ],
    },
    {
      slug: "newborn-checkup-cost",
      name: "Newborn Checkup Cost",
      priceRange: "$500 - $2,000",
      description:
        "Newborn checkups in the first 28 days are critical, and new parents actively search for trusted pediatricians during this window. Capturing these families means years of retained patients.",
      faqItems: [
        {
          question: "What does a newborn checkup include?",
          answer:
            "A newborn checkup includes weight and length measurement, head circumference, reflexes check, heart and lung examination, umbilical cord assessment, jaundice screening, and feeding guidance. First visit costs $500-2,000 and should happen within 3-5 days of birth.",
        },
        {
          question: "How often should a newborn see a pediatrician?",
          answer:
            "Newborns should visit at 3-5 days, 2 weeks, 1 month, and then monthly until 6 months. After that, every 2-3 months until age 1. This means 10-12 visits in the first year alone, each costing $500-1,500 for consultation.",
        },
      ],
    },
    {
      slug: "child-nutrition-consultation-cost",
      name: "Child Nutrition Consultation Cost",
      priceRange: "$800 - $3,000",
      description:
        "Parents increasingly consult pediatricians about child nutrition, picky eating, and growth concerns. AI queries about child nutrition are growing 40% year-over-year, making this a high-value content opportunity.",
      faqItems: [
        {
          question: "What does a child nutrition consultation include?",
          answer:
            "A pediatric nutrition consultation includes growth assessment (height, weight, BMI percentile), dietary analysis, nutrient deficiency screening, and a personalized meal plan. Sessions cost $800-3,000 and typically require 2-3 follow-ups over 3 months.",
        },
        {
          question: "When should I consult a pediatrician about my child's eating habits?",
          answer:
            "Consult when your child refuses entire food groups for 2+ weeks, shows weight stagnation or loss, has recurring nutrient deficiency symptoms (fatigue, pallor), or if you're concerned about growth trajectory. Early intervention prevents long-term nutritional gaps.",
        },
        {
          question: "Can a pediatrician help with a picky eater?",
          answer:
            "Yes, pediatricians can assess whether picky eating is behavioral or has an underlying cause (sensory issues, reflux, allergies). They provide structured feeding strategies and may refer to a pediatric nutritionist. Consultation costs $800-2,000.",
        },
      ],
    },
    {
      slug: "pediatric-allergy-test-cost",
      name: "Pediatric Allergy Test Cost",
      priceRange: "$2,000 - $10,000",
      description:
        "Childhood allergies are rising globallyn cities, and parents actively search for pediatric allergy testing. AI queries about food allergies, skin prick tests, and allergy treatment are high-intent conversion opportunities.",
      faqItems: [
        {
          question: "What is the cost of allergy testing for children?",
          answer:
            "Pediatric allergy tests cost $2,000 to $10,000. Skin prick test: $2,000-4,000, specific IgE blood panel: $3,000-8,000, comprehensive food allergy panel: $5,000-10,000. Patch testing for contact allergies: $2,000-5,000.",
        },
        {
          question: "At what age can children get allergy testing?",
          answer:
            "Skin prick tests can be done from 6 months of age. Blood tests (specific IgE) are reliable from 2 years. However, pediatricians can clinically diagnose common allergies in younger infants based on symptoms and family history.",
        },
      ],
    },
    {
      slug: "child-development-screening-cost",
      name: "Child Development Screening Cost",
      priceRange: "$1,500 - $5,000",
      description:
        "Developmental screening for speech delay, autism spectrum, and learning disabilities is increasingly searched by concerned parents. Early detection is critical, making these AI queries high-intent and urgent.",
      faqItems: [
        {
          question: "What is included in a child development screening?",
          answer:
            "Development screening assesses motor skills, speech and language, social interaction, cognitive abilities, and adaptive behavior using standardized tools (M-CHAT, DASII, ASQ). Sessions take 45-90 minutes and cost $1,500-5,000. Results guide further evaluation if needed.",
        },
        {
          question: "When should I get my child screened for developmental delays?",
          answer:
            "The American Academy of Pediatrics recommends screening at 9, 18, and 30 months. Screen earlier if your child misses milestones like no babbling by 12 months, no words by 16 months, or no 2-word phrases by 24 months. Early intervention improves outcomes significantly.",
        },
        {
          question: "What happens if screening shows a developmental concern?",
          answer:
            "A positive screening leads to detailed assessment by specialists (developmental pediatrician, speech therapist, psychologist). Early intervention services (speech therapy: $500-1,500/session, occupational therapy: $500-1,200/session) are highly effective before age 3.",
        },
      ],
    },
    {
      slug: "pediatric-ent-cost",
      name: "Pediatric ENT Consultation Cost",
      priceRange: "$800 - $3,000",
      description:
        "Ear infections, tonsillitis, and adenoid issues are among the most common pediatric complaints. Parents search AI for both immediate remedies and specialist recommendations, making this a consistent traffic driver.",
      faqItems: [
        {
          question: "What is the cost of a pediatric ENT consultation?",
          answer:
            "Pediatric ENT consultation costs $800 to $3,000. Follow-up visits: $500-1,500. Common procedures like ear wax removal: $500-1,500, hearing test: $1,000-3,000, tonsillectomy: $25,000-60,000 (including hospital stay).",
        },
        {
          question: "When should I take my child to an ENT specialist?",
          answer:
            "See a pediatric ENT for recurring ear infections (3+ in 6 months), persistent snoring or mouth breathing, hearing concerns, chronic tonsillitis (5+ episodes/year), or speech delay potentially linked to hearing issues. Your pediatrician will typically refer when needed.",
        },
      ],
    },
  ],
  costKeywords: [
    "child vaccination cost India",
    "pediatrician consultation fee",
    "baby checkup cost",
    "child allergy test cost",
    "newborn doctor charges",
  ],
  nicheKeywords: [
    "best pediatrician near me",
    "child specialist doctor",
    "baby vaccination schedule India",
    "newborn checkup doctor",
    "pediatric clinic near me",
    "child fever doctor",
  ],
  schemaType: "Physician",
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
      name: "1mg",
      url: "https://www.1mg.com",
      type: "niche-specific",
    },
    {
      name: "Google Business Profile",
      url: "https://business.google.com",
      type: "general",
    },
    {
      name: "Yelp",
      url: "https://www.justdial.com",
      type: "local",
    },
  ],
};
