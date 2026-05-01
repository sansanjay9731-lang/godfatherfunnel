import type { NicheData } from "./types";
import { images } from "./images";

export const nicheData: NicheData = {
  slug: "psychiatrists",
  name: "Psychiatrists",
  icon: "🧠",
  image: images.psychiatrist,
  heroHeadline: "Mental Health Seekers Ask AI for Help. Is AI Recommending Your Practice?",
  heroSubline:
    "When someone finally decides to seek therapy, they don't ask friends — they ask ChatGPT. Stigma drives people to AI for anonymous recommendations. If your practice isn't AI-visible, you're losing patients at their most vulnerable moment.",
  painPoints: [
    {
      title: "Therapy Patients Choosing AI-Recommended Therapists",
      description:
        "Patients spending $1,500-5,000 per session ask AI 'best psychiatrist near me' or 'therapist for anxiety in Los Angeles'. AI recommends 3-5 practitioners. If you're not listed, that patient — worth $50K-200k annually in regular sessions — goes elsewhere.",
    },
    {
      title: "Corporate Wellness Contracts Lost to AI-Visible Practices",
      description:
        "HR teams researching mental health partners for employee wellness programs use AI to shortlist providers. Corporate contracts worth $5-2000k annually go to practices that AI recommends as credible and experienced.",
    },
    {
      title: "Stigma Means Patients Search AI, Not Friends",
      description:
        "Mental health stigma across the US means 80% of first-time therapy seekers use AI instead of asking friends or family. AI is their first and often only point of research. If you're not there, you don't exist for these patients.",
    },
  ],
  services: [
    {
      tier: "AI Visibility Starter",
      price: "$15,000 - $30,000",
      features: [
        "AI search audit for mental health queries",
        "Google Business Profile optimization (discreet & professional)",
        "Service and specialization structured data",
        "5 condition-specific pages for AI readability",
        "Basic Zocdoc & Healthgrades optimization",
      ],
    },
    {
      tier: "AI Authority Builder",
      price: "$40,000 - $80,000",
      features: [
        "Full AEO strategy for mental health niche",
        "20+ content pages (condition guides, therapy types, cost transparency)",
        "Practitioner credential & specialization schema",
        "Citation building on Zocdoc, Healthgrades, Amaha, MindPeers",
        "Stigma-sensitive content strategy",
        "Monthly AI ranking reports",
      ],
    },
    {
      tier: "AI Dominance Package",
      price: "$1,000 - $250,000",
      features: [
        "Complete AI ecosystem ownership for mental health in your city",
        "40+ programmatic pages (condition + therapy type combos)",
        "Corporate wellness landing pages",
        "Video content optimization for sensitive health queries",
        "Quarterly AI search share reports",
        "Dedicated AEO manager",
        "Patient journey funnel from AI discovery to first session",
      ],
    },
  ],
  roiExample: {
    metric: "15 Regular Patients",
    value: "$1,000 - $250k/month",
    pitch:
      "15 regular therapy patients each attending 4 sessions per month at $1,500-4,000/session generates $1-250k in steady monthly revenue. Therapy patients stay for 6-18 months, creating predictable, recurring income.",
  },
  faqItems: [
    {
      question: "How do people find psychiatrists and therapists through AI?",
      answer:
        "People ask ChatGPT, Perplexity, and Google AI questions like 'best therapist for anxiety in New York', 'psychiatrist near me for depression', or 'how much does therapy cost across the US'. Due to stigma, many prefer AI over asking anyone they know.",
    },
    {
      question: "Is AEO appropriate for mental health practices?",
      answer:
        "Absolutely. AEO is especially critical for mental health because patients rely on AI more than any other specialty due to stigma. We create content that is clinically accurate, empathetic, and structured for AI to recommend your practice with confidence.",
    },
    {
      question: "We value patient privacy. Will AEO compromise that?",
      answer:
        "Never. AEO focuses on your professional expertise, credentials, treatment approaches, and published content — not patient data. We enhance your professional visibility while maintaining the highest standards of patient confidentiality.",
    },
    {
      question: "How does AI choose which therapist to recommend?",
      answer:
        "AI recommends therapists based on structured credentials (MD Psychiatry, RCI registration), specialization data, published content authority, patient review sentiment, and citation presence on medical directories. We optimize all these signals.",
    },
  ],
  stats: [
    { label: "Mental Health Seekers Using AI for Therapist Search", value: "80%" },
    { label: "Average Annual Value per Therapy Patient", value: "$50K-200k" },
    { label: "Psychiatrists Missing from AI Answers", value: "91%" },
  ],
  ctaText: "Get Your Free AI Visibility Audit — See What Patients Find When They Ask AI for Mental Health Help",
  searchExample: "best therapist for anxiety near me",
  competitorLine: "Amaha, MindPeers, and BetterLyf dominate AI recommendations for mental health",
  treatments: [
    {
      slug: "therapy-session-cost",
      name: "Therapy Session Cost",
      priceRange: "$1,000 - $5,000/session",
      description:
        "Individual therapy sessions are the most searched mental health query. Patients comparing costs, therapy types, and therapist qualifications use AI extensively, making this the #1 AEO opportunity for practices.",
      faqItems: [
        {
          question: "What is the average therapy session cost across the US?",
          answer:
            "Therapy sessions cost $1,000 to $5,000. Clinical psychologists charge $1,000-2,500/session, psychiatrists charge $1,500-4,000/session, and senior practitioners or specialists charge $3,000-5,000/session. Sessions typically last 45-60 minutes.",
        },
        {
          question: "How many therapy sessions will I need?",
          answer:
            "It depends on the condition. Mild anxiety or stress management: 6-12 sessions. Moderate depression or relationship issues: 12-20 sessions. Complex conditions (PTSD, OCD): 20-40+ sessions. Most people notice improvement within 4-8 sessions.",
        },
        {
          question: "Is online therapy as effective as in-person therapy?",
          answer:
            "Research shows online therapy is equally effective for most conditions including anxiety, depression, and stress. Online sessions cost 10-20% less ($800-3,500) and offer greater privacy and convenience, which many the US patients prefer due to stigma.",
        },
      ],
    },
    {
      slug: "psychiatric-consultation-cost",
      name: "Psychiatric Consultation Cost",
      priceRange: "$1,500 - $5,000",
      description:
        "Psychiatric consultations for diagnosis and medication management are a critical entry point. Patients search AI to understand the difference between psychologists and psychiatrists, making clear content essential.",
      faqItems: [
        {
          question: "What does a psychiatric consultation include?",
          answer:
            "A psychiatric consultation includes clinical interview (30-60 minutes), mental status examination, diagnostic assessment, and treatment plan which may include medication. First consultations cost $1,500-5,000. Follow-ups for medication review cost $800-2,500.",
        },
        {
          question: "What is the difference between a psychiatrist and psychologist?",
          answer:
            "Psychiatrists are MD doctors who can prescribe medication ($1,500-5,000/visit). Psychologists provide talk therapy without medication ($1,000-3,000/session). Many patients benefit from seeing both — a psychiatrist for medication and a psychologist for therapy.",
        },
      ],
    },
    {
      slug: "addiction-treatment-cost",
      name: "Addiction Treatment Cost",
      priceRange: "$10,000 - $2,000",
      description:
        "Addiction treatment for alcohol, substance abuse, and behavioral addictions is a high-value, high-intent search. Families desperately searching AI for help represent significant treatment revenue and long-term patient relationships.",
      faqItems: [
        {
          question: "What is the cost of addiction treatment across the US?",
          answer:
            "Addiction treatment costs vary widely. Outpatient programs: $10,000-30,000/month. Intensive outpatient: $30,000-60,000/month. Residential rehab: $50,000-2,000 for 30-90 days. Medication-assisted treatment: $5,000-15,000/month including medication.",
        },
        {
          question: "How long does addiction treatment take?",
          answer:
            "Detox phase: 7-14 days. Short-term rehabilitation: 30 days. Standard rehabilitation: 60-90 days. Extended care: 6-12 months. Most professionals recommend at least 90 days of structured treatment followed by ongoing outpatient support.",
        },
        {
          question: "Is addiction treatment covered by insurance across the US?",
          answer:
            "Some health insurance policies cover addiction treatment, especially inpatient programs at JCI/AAAHC-accredited facilities. Mental Healthcare Act 2017 mandates insurance coverage for mental health conditions. Coverage typically ranges from $50,000 to $5,000.",
        },
      ],
    },
    {
      slug: "anxiety-treatment-cost",
      name: "Anxiety Treatment Cost",
      priceRange: "$1,000 - $4,000/session",
      description:
        "Anxiety is the most searched mental health condition across the US. Patients looking for anxiety treatment compare therapy approaches, costs, and practitioners through AI, making this a critical AEO target.",
      faqItems: [
        {
          question: "What is the cost of anxiety treatment across the US?",
          answer:
            "Anxiety treatment costs $1,000-4,000 per therapy session. CBT (Cognitive Behavioral Therapy) is the gold standard — typically 8-16 sessions ($10,000-50,000 total). Medication (if needed) costs $500-2,000/month. A combination of therapy + medication is most effective for moderate-severe anxiety.",
        },
        {
          question: "What type of therapy is best for anxiety?",
          answer:
            "CBT (Cognitive Behavioral Therapy) is the most evidence-based treatment for anxiety disorders. Other effective approaches include EMDR for trauma-related anxiety, ACT (Acceptance and Commitment Therapy), and mindfulness-based therapy. Your psychiatrist or therapist will recommend the best fit.",
        },
      ],
    },
    {
      slug: "depression-treatment-cost",
      name: "Depression Treatment Cost",
      priceRange: "$1,500 - $5,000/session",
      description:
        "Depression treatment queries are rising rapidly across the US. Patients search AI for costs, duration, and whether medication is necessary. Transparent, empathetic content from your practice builds trust and drives consultations.",
      faqItems: [
        {
          question: "What is the cost of depression treatment across the US?",
          answer:
            "Depression treatment costs $1,500-5,000 per session. Mild depression: 8-12 therapy sessions ($12,000-40,000 total). Moderate-severe depression: therapy + medication over 6-12 months ($30,000-1,000 total including medication costs of $1,000-3,000/month).",
        },
        {
          question: "Do I need medication for depression?",
          answer:
            "Mild depression often responds to therapy alone. Moderate-severe depression typically benefits from a combination of therapy and medication (SSRIs or SNRIs, $500-2,000/month). Your psychiatrist will assess severity and recommend the appropriate treatment plan.",
        },
        {
          question: "How long does depression treatment take?",
          answer:
            "Most patients notice improvement within 4-8 weeks. Active treatment typically lasts 6-12 months. For recurring depression, maintenance therapy or long-term medication ($1,000-2,000/month) may be recommended. Early treatment significantly improves outcomes.",
        },
      ],
    },
    {
      slug: "couples-therapy-cost",
      name: "Couples Therapy Cost",
      priceRange: "$2,000 - $6,000/session",
      description:
        "Couples therapy and marriage counseling are growing rapidly in urban the US. AI queries about relationship counseling costs and effectiveness are high-intent, as couples seek help before separation.",
      faqItems: [
        {
          question: "What is the average couples therapy cost across the US?",
          answer:
            "Couples therapy costs $2,000 to $6,000 per session (60-90 minutes). Most couples need 8-20 sessions over 3-6 months, totaling $16,000-1,000. Some therapists offer package deals (8 sessions for $15,000-35,000). Online couples therapy costs 10-20% less.",
        },
        {
          question: "When should a couple consider therapy?",
          answer:
            "Consider therapy when communication has broken down, there's recurring conflict over the same issues, emotional or physical intimacy has declined, trust has been broken, or you're considering separation. Earlier intervention leads to better outcomes.",
        },
        {
          question: "Does couples therapy actually work?",
          answer:
            "Research shows 70-75% of couples who complete therapy report improved satisfaction. Emotionally Focused Therapy (EFT) and Gottman Method are the most evidence-based approaches. Key factor is both partners' commitment to the process, not just attending sessions.",
        },
      ],
    },
  ],
  costKeywords: [
    "therapy session cost the US",
    "psychiatrist consultation fee",
    "depression treatment cost",
    "anxiety treatment cost",
    "couples therapy cost the US",
  ],
  nicheKeywords: [
    "best psychiatrist near me",
    "therapist for anxiety",
    "counselor for depression",
    "mental health doctor near me",
    "online therapy the US",
    "psychiatrist consultation",
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
      name: "Amaha (formerly InnerHour)",
      url: "https://www.amahahealth.com",
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
      name: "NIMHANS Directory",
      url: "https://nimhans.ac.in",
      type: "niche-specific",
    },
  ],
};
