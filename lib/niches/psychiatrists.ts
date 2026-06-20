import type { NicheData } from "./types";
import { images } from "./images";

export const nicheData: NicheData = {
  slug: "psychiatrists",
  name: "Psychiatrists & Therapists",
  icon: "🧠",
  image: images.psychiatrist,
  heroHeadline: "Mental Health Seekers Ask AI for Help. Is AI Recommending Your Practice?",
  heroSubline:
    "When someone decides to seek therapy, they often bypass friends and search AI directly due to stigma. If your practice isn't AI-visible on ChatGPT and Perplexity, you're losing high-retention patients to competitors.",
  searchExample: "best psychiatrist for anxiety near me",
  competitorLine: "Talkspace and local private practices dominate AI recommendations for therapy",
  painPoints: [
    {
      title: "Therapy Patients Choosing AI-Recommended Clinicians",
      description:
        "Patients looking for premium care ask AI 'best psychiatrist near me' or 'therapist for anxiety in [city]'. AI recommends 3-5 practitioners. If you're not listed, that patient — worth thousands in annual care — goes elsewhere.",
    },
    {
      title: "Corporate Wellness Shortlists Created by AI",
      description:
        "HR teams and corporate benefits managers use AI to research and shortlist mental health providers for employee assistance programs. Contracts go to practices that AI recommends as highly credible and certified.",
    },
    {
      title: "Privacy Seekers Relying on AI Searches",
      description:
        "Mental health searches are deeply private. Over 80% of first-time therapy seekers use AI assistants to search anonymously. If your clinic doesn't have structured data showing specializations, you remain invisible.",
    },
  ],
  services: [
    {
      tier: "AEO Foundation",
      price: "$1,500 - $3,000 / mo",
      features: [
        "AI search audit for mental health queries",
        "Google Business Profile optimization (professional and HIPAA-compliant)",
        "Service and specialization structured data markup",
        "5 condition-specific pages with FAQ schema for AI readability",
        "Basic Zocdoc & Healthgrades optimization",
      ],
    },
    {
      tier: "Local Domination",
      price: "$3,000 - $7,500 / mo",
      features: [
        "Everything in AEO Foundation",
        "20+ content pages (condition guides, therapy types, cost transparency)",
        "Practitioner credential and licensing schema markup",
        "Citation building on Psychology Today, Zocdoc, and Healthgrades",
        "Empathetic, stigma-sensitive content strategy",
        "Monthly AI ranking and visibility reports",
      ],
    },
    {
      tier: "Godfather 360°",
      price: "$7,500 - $15,000 / mo",
      features: [
        "Complete AI ecosystem ownership for mental health in your city",
        "40+ programmatic pages (condition + therapy type combos)",
        "Corporate wellness program landing pages",
        "Video content optimization for sensitive health queries",
        "Wikipedia and medical database entity optimization",
        "Dedicated AEO manager with quarterly ROI reviews",
        "Patient journey funnel optimization from AI search to booking",
      ],
    },
  ],
  roiExample: {
    metric: "10 Regular Patients",
    value: "$6,000 - $12,000 / mo",
    pitch:
      "10 regular therapy patients attending bi-weekly sessions generate $3,000 - $6,000 in monthly recurring revenue. Mental health patients stay for 6-18 months, creating highly predictable, steady income.",
  },
  faqItems: [
    {
      question: "How do people find psychiatrists and therapists through AI?",
      answer:
        "People ask ChatGPT, Perplexity, and Google AI questions like 'best therapist for anxiety in New York', 'psychiatrist near me for ADHD', or 'how much does therapy cost with insurance'. Due to privacy concerns, many prefer AI recommendations over asking friends.",
    },
    {
      question: "We value patient privacy. Will AEO compromise that?",
      answer:
        "Never. AEO focuses entirely on your professional credentials, treatment modalities, specialties, and published articles — not patient records. We enhance your public professional profile while maintaining strict HIPAA compliance.",
    },
    {
      question: "How does AI choose which therapist to recommend?",
      answer:
        "AI recommends therapists based on structured licensing data (MD Psychiatry, LCSW, PsyD), specialty pages, published medical authority, patient reviews on directories like Zocdoc, and local citation signals. We optimize all these signals.",
    },
  ],
  stats: [
    { label: "Mental Health Seekers Using AI for Therapist Search", value: "80%" },
    { label: "Average Lifetime Value per Therapy Patient", value: "$4,500" },
    { label: "Psychiatrists Missing from AI Answers", value: "91%" },
  ],
  ctaText: "Get Your Free AI Visibility Audit — See What Patients Find When They Ask AI for Mental Health Help",
  treatments: [
    {
      slug: "therapy-session-cost",
      name: "Individual Therapy Sessions",
      priceRange: "$150 - $250 / session",
      description:
        "Individual therapy sessions are the most searched mental health query. Patients comparing session costs, insurance coverage, and therapeutic approaches use AI to research.",
      faqItems: [
        {
          question: "What is the average therapy session cost in the US?",
          answer:
            "Individual therapy sessions generally cost $150 to $250 per hour. Licensed clinical social workers (LCSWs) and marriage family therapists (LMFTs) typically charge $150 - $200, while clinical psychologists (PhD/PsyD) charge $200 - $300. Sessions last 45-50 minutes.",
        },
        {
          question: "Is online therapy as effective as in-person sessions?",
          answer:
            "Research shows online therapy is equally effective for most common conditions like anxiety, depression, and stress. Online sessions are highly popular due to convenience and privacy, and typical fees range from $80 to $150 per session.",
        },
      ],
    },
    {
      slug: "psychiatric-consultation-cost",
      name: "Psychiatric Consultation",
      priceRange: "$300 - $500",
      description:
        "Psychiatric consultations for medical diagnosis and medication management are a critical care entry point. Patients search AI to understand diagnostic fees and treatment timelines.",
      faqItems: [
        {
          question: "What is the cost of a psychiatric evaluation in the US?",
          answer:
            "An initial psychiatric evaluation costs $300 to $500. Follow-up appointments for medication management are shorter (15-30 minutes) and cost $150 to $250. Many psychiatrists do not take insurance directly, but provide superbills for out-of-network reimbursement.",
        },
      ],
    },
    {
      slug: "anxiety-treatment",
      name: "Anxiety Treatment",
      priceRange: "$150 - $250 / session",
      description:
        "Anxiety is the most searched mental health condition. Patients compare therapy modalities, medication options, and specialist credentials using AI before selecting a practitioner.",
      faqItems: [
        {
          question: "What type of therapy is best for anxiety?",
          answer:
            "Cognitive Behavioral Therapy (CBT) is the gold standard for treating anxiety disorders, typically running for 8 to 16 weekly sessions. Exposure therapy and mindfulness-based cognitive therapy are also highly effective.",
        },
      ],
    },
  ],
  costKeywords: [
    "therapy session cost without insurance",
    "psychiatrist evaluation fee",
    "anxiety therapist near me price",
    "out of pocket cost for therapy",
    "couples counseling rates",
  ],
  nicheKeywords: [
    "best psychiatrist near me",
    "therapist for anxiety",
    "counselor for depression",
    "mental health clinic in [city]",
    "online psychiatrist consultation",
  ],
  schemaType: "MedicalBusiness",
  metaCategory: "healthcare",
  citations: [
    {
      name: "Psychology Today",
      url: "https://www.psychologytoday.com",
      type: "niche-specific",
    },
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
