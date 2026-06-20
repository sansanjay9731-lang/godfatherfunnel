import type { NicheData } from "./types";
import { images } from "./images";

export const nicheData: NicheData = {
  slug: "pediatricians",
  name: "Pediatricians",
  icon: "👶",
  image: images.pediatrician,
  heroHeadline: "Parents Ask AI Which Pediatrician to Trust. What Does AI Say About You?",
  heroSubline:
    "New parents at 2 AM ask ChatGPT 'best pediatrician near me' or 'baby fever what to do'. If AI recommends another doctor, that family — worth thousands in lifetime care — goes to your competitor.",
  painPoints: [
    {
      title: "New Parents Asking AI for Pediatrician Recommendations",
      description:
        "First-time parents are anxious and research-obsessed. They ask AI 'best pediatrician in [city]' or 'top child specialist near me' before choosing a doctor. If you're not in AI's top 3 recommendations, you lose that family for years.",
    },
    {
      title: "Vaccination & Well-Child Queries Answered by Competitors",
      description:
        "Parents search 'baby immunization schedule' and 'well-child visit costs' constantly. AI cites clinics that have structured care and pricing data. If your schedules and details aren't AI-readable, competitors capture these patients.",
    },
    {
      title: "Emergency Pediatric Visits Lost to AI-Visible Doctors",
      description:
        "When a child has a sudden fever at midnight, panicked parents ask AI 'pediatrician near me open now'. AI recommends doctors with structured after-hours availability data. Without it, you're invisible during critical decision moments.",
    },
  ],
  services: [
    {
      tier: "AEO Foundation",
      price: "$1,500 - $3,000 / mo",
      features: [
        "AI search audit for pediatric queries in your city",
        "Google Business Profile optimization with pediatric specializations",
        "Immunization schedule & well-child checkup structured data",
        "5 parent-guide pages for AI readability",
        "Basic Zocdoc and Google Maps optimization",
      ],
    },
    {
      tier: "Local Domination",
      price: "$3,000 - $7,500 / mo",
      features: [
        "Everything in AEO Foundation",
        "20+ content pages (age-wise guides, common conditions, vaccination FAQs)",
        "Doctor credential and fellowship schema markup",
        "Citation building on Zocdoc, Healthgrades, and WebMD",
        "Parent community content strategy",
        "Monthly AI ranking and citation reports",
      ],
    },
    {
      tier: "Godfather 360°",
      price: "$7,500 - $15,000 / mo",
      features: [
        "Complete AI ecosystem ownership for pediatrics in your city",
        "50+ programmatic pages (condition + age + treatment combos)",
        "Video content optimization for parent queries",
        "Wikipedia and medical knowledge panel strategy",
        "Quarterly AI search share reports",
        "Dedicated AEO manager",
        "New parent funnel optimization from AI discovery to first visit",
      ],
    },
  ],
  roiExample: {
    metric: "20 New Families/Month",
    value: "$6,000 - $15,000 / mo",
    pitch:
      "Each new family visits 6-10 times in the first year (well-child visits, immunizations, acute illness). 20 new families per month generates thousands in recurring revenue, compounding as those families stay for 5-15 years.",
  },
  faqItems: [
    {
      question: "How do parents use AI to find pediatricians?",
      answer:
        "Parents ask ChatGPT, Google AI, and Perplexity questions like 'best pediatrician in Seattle', 'baby vaccine schedule', or 'child fever when to go to ER'. AI gives direct recommendations with reasons, and parents trust these over basic list pages.",
    },
    {
      question: "Our practice is stable. Why do we need AI visibility?",
      answer:
        "Even stable practices lose patients to attrition (families moving, children aging out of pediatric care). AI visibility ensures a steady pipeline of newborn patients. Additionally, it establishes you as the premium child care authority in your city.",
    },
    {
      question: "Is AEO relevant for pediatricians with hospital affiliations?",
      answer:
        "Absolutely. Parents search for individual doctors, not just hospital names. AI recommends specific pediatricians. Personal AI visibility attracts patients who choose their doctor first, then look at hospital networks.",
    },
  ],
  stats: [
    { label: "New Parents Using AI for Doctor Recommendations", value: "71%" },
    { label: "Lifetime Value of One Pediatric Family", value: "$12,000" },
    { label: "Pediatricians Missing from AI Answers", value: "83%" },
  ],
  ctaText: "Get Your Free AI Visibility Audit — See What Parents Find When They Ask AI About Pediatricians",
  searchExample: "best pediatrician near me",
  competitorLine: "Pediatric Associates and local children's health systems dominate AI recommendations",
  treatments: [
    {
      slug: "child-vaccination-cost",
      name: "Immunizations & Vaccinations",
      priceRange: "$100 - $250 / dose",
      description:
        "Vaccinations are critical in early childhood. While usually covered by health insurance under the ACA, self-pay pricing and schedule queries are highly searched by parents planning pediatric care.",
      faqItems: [
        {
          question: "What is the immunization schedule for babies in the US?",
          answer:
            "The American Academy of Pediatrics (AAP) and CDC recommend immunizations starting at birth (HepB), followed by DTaP, Rotavirus, Hib, PCV13, and IPV at 2, 4, and 6 months. MMR and Varicella are administered starting at 12 months.",
        },
        {
          question: "Are child vaccines covered by insurance in the US?",
          answer:
            "Yes, under the Affordable Care Act (ACA), most private health insurance plans cover all standard childhood immunizations at 100% with no copay. For uninsured children, the Vaccines for Children (VFC) program provides vaccines at no cost through enrolled clinics.",
        },
      ],
    },
    {
      slug: "newborn-checkup-cost",
      name: "Newborn Well-Child Visits",
      priceRange: "$150 - $300",
      description:
        "Newborn checkups in the first month are critical. Parents actively search for trusted local pediatricians during this window, presenting a high-value client acquisition opportunity.",
      faqItems: [
        {
          question: "What does a newborn checkup include?",
          answer:
            "A newborn checkup includes measurements (weight, length, head circumference), physical exam, developmental milestones review, feeding assessment, and maternal depression screening. The first visit typically occurs 3-5 days after birth.",
        },
        {
          question: "How often does a baby need well-child visits?",
          answer:
            "The AAP recommends well-child visits at 3-5 days, 1 month, 2 months, 4 months, 6 months, 9 months, 12 months, 15 months, 18 months, 24 months, 30 months, and then annually.",
        },
      ],
    },
    {
      slug: "pediatric-allergy-testing",
      name: "Pediatric Allergy Testing",
      priceRange: "$300 - $800",
      description:
        "Childhood food and environmental allergies are highly common. Parents search AI for testing methods, costs, and specialist recommendations.",
      faqItems: [
        {
          question: "What is the cost of allergy testing for children?",
          answer:
            "A pediatric skin prick test typically costs $300 to $600. Blood testing (specific IgE panels) ranges from $400 to $800. These tests are generally covered by insurance if deemed medically necessary.",
        },
      ],
    },
  ],
  costKeywords: [
    "pediatrician visit cost without insurance",
    "well-child checkup price US",
    "baby vaccination out of pocket cost",
    "pediatric allergy testing cost",
    "newborn doctor visit fee",
  ],
  nicheKeywords: [
    "best pediatrician near me",
    "pediatric clinic in [city]",
    "AAP pediatrician search",
    "newborn well-child checkup",
    "child doctor near me",
  ],
  schemaType: "Physician",
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
      name: "WebMD Care",
      url: "https://doctor.webmd.com",
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
  ],
};
