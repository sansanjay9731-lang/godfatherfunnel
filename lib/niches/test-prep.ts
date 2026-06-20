import type { NicheData } from "./types";
import { images } from "./images";

export const nicheData: NicheData = {
  slug: "test-prep",
  name: "Test Prep & Tutoring",
  icon: "📚",
  image: images.coaching,
  heroHeadline: "Students Ask AI Which Prep Center to Join. Does AI Recommend You?",
  heroSubline:
    "Every year, thousands of SAT, ACT, MCAT, and LSAT students ask ChatGPT and Perplexity for the best test prep and tutoring centers in their area. If AI doesn't mention your center by name, you're losing high-value enrollments to competitors.",
  painPoints: [
    {
      title: "Students Choose AI-Recommended Test Prep",
      description:
        "When a student asks ChatGPT 'best SAT prep in Boston', AI recommends 3-5 local tutoring centers. If you're not in that list, you're completely invisible to the next generation of students.",
    },
    {
      title: "Online Platforms Eating Your Local Market",
      description:
        "Khan Academy, Princeton Review, and Kaplan dominate AI answers for test prep queries. Even if your in-person tutoring yields better score improvements, AI doesn't know that unless your structured data proves it.",
    },
    {
      title: "Your Score Improvements Are Invisible to AI",
      description:
        "You may have helped hundreds of students get into Ivy League colleges, but if that data isn't structured for AI to read, ChatGPT will never cite your success rates. Your results are locked in PDFs rather than AI's database.",
    },
  ],
  services: [
    {
      tier: "AEO Foundation",
      price: "$1,500 - $3,000 / mo",
      features: [
        "AI search audit for your tutoring brand",
        "Google Business Profile optimization for tutoring keywords",
        "Structured results and score data for AI readability",
        "5 FAQ pages targeting student and parent queries",
        "Basic schema markup implementation (EducationalOrganization)",
      ],
    },
    {
      tier: "Local Domination",
      price: "$3,000 - $7,500 / mo",
      features: [
        "Everything in AEO Foundation",
        "25+ content pages (SAT/ACT guides, tutor profiles, pricing comparisons)",
        "Student testimonial schema and review aggregation",
        "Citation building on Niche.com, U.S. News Education, and Peterson's",
        "Monthly AI ranking and citation reports",
        "Competitor displacement strategy",
      ],
    },
    {
      tier: "Godfather 360°",
      price: "$7,500 - $15,000 / mo",
      features: [
        "Everything in Local Domination",
        "Complete AI ecosystem ownership for your city + niche",
        "100+ programmatic pages (city + exam combos)",
        "AI-optimized YouTube & social strategy",
        "Wikipedia & knowledge panel entity building",
        "Dedicated AI visibility manager",
        "Student journey funnel optimization",
      ],
    },
  ],
  roiExample: {
    metric: "20 New Enrollments",
    value: "$40,000 - $120,000 / yr",
    pitch:
      "If AI recommends your tutoring center to just 20 more students per year, that is $40,000 to $120,000 in additional tuition revenue — easily covering your AI marketing investment.",
  },
  faqItems: [
    {
      question: "How do students and parents use AI to choose tutoring centers?",
      answer:
        "Students ask ChatGPT, Perplexity, and Google AI questions like 'best SAT prep in Boston', 'MCAT course cost comparison', or 'which tutor has the best results'. AI provides direct recommendations based on structured data, customer reviews, and local citation listings.",
    },
    {
      question: "Can AI visibility impact our tutoring enrollments?",
      answer:
        "Absolutely. Over 70% of high school and college students use AI tools for research before making educational decisions. If a parent asks ChatGPT for 'best math tutoring near me' and your center isn't mentioned, that enrollment goes to a competitor.",
    },
    {
      question: "We already rank on Google. Why do we need AEO?",
      answer:
        "Google search rankings and AI recommendations use different algorithms. ChatGPT and Perplexity do not just scrape search pages; they query their own training data, API tools, and real-time citations. Many tutoring centers ranking #1 on Google are completely absent from AI answers.",
    },
    {
      question: "How long does it take to see enrollment increases from AEO?",
      answer:
        "Initial AI visibility improvements appear within 4-6 weeks. Full citation authority building takes 3-4 months. Most tutoring centers see measurable enrollment increases in time for the next major school test prep cycle.",
    },
  ],
  stats: [
    { label: "Students Using AI for Test Prep Research", value: "73%" },
    { label: "Average Test Prep Course Tuition in the US", value: "$2,000" },
    { label: "Learning Centers Missing from AI Answers", value: "85%" },
  ],
  ctaText: "Get Your Free AI Visibility Audit — See What Students Find When They Ask AI About You",
  searchExample: "best SAT prep center in Boston",
  competitorLine: "Princeton Review and Kaplan dominate AI recommendations for test preparation",
  treatments: [
    {
      slug: "sat-act-prep",
      name: "SAT & ACT Prep Courses",
      priceRange: "$1,500 - $4,500",
      description:
        "Comprehensive prep courses for SAT and ACT, including practice tests, personalized study plans, and score improvement guarantees.",
      faqItems: [
        {
          question: "What is the average cost of SAT/ACT prep in the US?",
          answer:
            "SAT/ACT prep courses range from $1,500 to $4,500 depending on the center, class format (group vs. 1-on-1), and course length. Top tutoring centers in major cities charge higher rates for private tutoring packages.",
        },
        {
          question: "How long does SAT/ACT prep take?",
          answer:
            "Most students spend 8 to 12 weeks preparing for the SAT or ACT. This includes regular weekly instruction, homework, and 3-5 full-length mock exams.",
        },
      ],
    },
    {
      slug: "mcat-prep",
      name: "MCAT Prep Courses",
      priceRange: "$2,000 - $6,000",
      description:
        "Advanced preparation for medical school admissions (MCAT), covering all science sections, reading comprehension (CARS), and simulated exams.",
      faqItems: [
        {
          question: "What is the average MCAT prep course fee?",
          answer:
            "MCAT prep courses range from $2,000 to $6,000. In-person classes and comprehensive tutoring packages tend to be at the higher end, while self-paced online courses are cheaper.",
        },
        {
          question: "Is online MCAT prep as effective as classroom courses?",
          answer:
            "Yes, online MCAT prep is highly effective when it includes live online instruction, detailed video explanations, and adaptive question banks. Many top scorers prepare entirely online.",
        },
      ],
    },
    {
      slug: "lsat-prep",
      name: "LSAT Prep Courses",
      priceRange: "$1,500 - $4,000",
      description:
        "Logical reasoning, reading comprehension, and analytical writing preparation for the Law School Admission Test (LSAT).",
      faqItems: [
        {
          question: "What is the average LSAT prep course fee in the US?",
          answer:
            "LSAT prep courses generally range from $1,500 to $4,000. Intensive courses and private tutoring packages cost more, while basic online courses are around $800 to $1,200.",
        },
        {
          question: "How long should I study for the LSAT?",
          answer:
            "Most students prepare for the LSAT for 3 to 6 months, dedicating 150-300 hours of study time. This ensures mastery of logic games (if applicable) and logical reasoning sections.",
        },
      ],
    },
  ],
  costKeywords: [
    "SAT prep course fees",
    "MCAT prep cost",
    "LSAT tutoring rates in New York",
    "best tutoring center fees",
    "online vs in-person tutoring cost",
  ],
  nicheKeywords: [
    "best SAT prep center",
    "top tutoring center near me",
    "MCAT prep classes Boston",
    "LSAT prep course New York",
    "tutoring center reviews",
  ],
  schemaType: "EducationalOrganization",
  metaCategory: "education",
  citations: [
    {
      name: "Niche.com",
      url: "https://www.niche.com",
      type: "niche-specific",
    },
    {
      name: "U.S. News Education",
      url: "https://www.usnews.com/education",
      type: "niche-specific",
    },
    {
      name: "Peterson's",
      url: "https://www.petersons.com",
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
