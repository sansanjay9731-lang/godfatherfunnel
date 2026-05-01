export interface NicheData {
  slug: string;
  name: string;
  icon: string;
  image: string;
  heroHeadline: string;
  heroSubline: string;
  painPoints: { title: string; description: string }[];
  services: { tier: string; price: string; features: string[] }[];
  roiExample: { metric: string; value: string; pitch: string };
  faqItems: { question: string; answer: string }[];
  stats: { label: string; value: string }[];
  ctaText: string;
  searchExample: string;
  competitorLine: string;
}

// Curated Unsplash images
export const images = {
  dermatologist:
    "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80",
  dentist:
    "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80",
  plasticSurgeon:
    "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&q=80",
  ivf:
    "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=800&q=80",
  lawyer:
    "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80",
  realEstate:
    "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
  // Testimonial headshots
  doctorMale1:
    "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=200&q=80",
  doctorFemale1:
    "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=200&q=80",
  doctorMale2:
    "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=200&q=80",
  doctorFemale2:
    "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=200&q=80",
  businessMan:
    "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&q=80",
  businessWoman:
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80",
  // Team
  teamMale1:
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80",
  teamFemale1:
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=80",
  teamMale2:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&q=80",
  teamFemale2:
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&q=80",
};

export const niches: NicheData[] = [
  {
    slug: "dermatologists",
    name: "Dermatologists",
    icon: "🧬",
    image: images.dermatologist,
    heroHeadline: "Your Patients Are Asking AI — Not Google",
    heroSubline:
      "When someone searches 'best dermatologist near me' on ChatGPT, 3 clinics get recommended. If you're not one of them, those patients walk into your competitor's door.",
    searchExample: "best skin specialist in New York",
    competitorLine: "Dr. Smith's Dermatology is currently AI-recommended over you",
    painPoints: [
      {
        title: "Invisible to AI",
        description:
          "ChatGPT, Perplexity, and Google AI Overviews recommend your competitors by name. You don't exist in AI search.",
      },
      {
        title: "Losing $5,000+/month in Laser & Botox Patients",
        description:
          "Patients under 35 ask AI before booking. If AI doesn't recommend you, they never find you.",
      },
      {
        title: "Your Reviews Don't Reach AI",
        description:
          "500+ Google reviews mean nothing if your schema markup doesn't feed them to AI systems.",
      },
    ],
    services: [
      {
        tier: "AEO Foundation",
        price: "$1,500-$3,000/mo",
        features: [
          "AI Visibility Audit & Monitoring",
          "MedicalBusiness + Physician Schema",
          "llms.txt + AI Crawler Access",
          "Google Business Profile Optimization",
          "NAP Consistency (50+ the US Directories)",
          "Monthly AI Citation Report",
        ],
      },
      {
        tier: "Local Domination",
        price: "$4,000-$7,500/mo",
        features: [
          "Everything in Foundation",
          "Skin Conditions A-Z Content Hub (50+ Pages)",
          "Before/After Gallery with Schema",
          "Doctor Video Shorts (30s Reels)",
          "AI-Optimized FAQ Pages",
          'Programmatic SEO: "[Treatment] in [City]"',
          "Automated Review Generation",
        ],
      },
      {
        tier: "Godfather 360°",
        price: "$10,000-$25,000/mo",
        features: [
          "Everything in Local Domination",
          "PR in Medical Publications",
          "Wikipedia/Knowledge Panel Strategy",
          "Google + Meta + YouTube Ads",
          "Instagram Management (15 Reels/mo)",
          "WhatsApp/SMS Business Automation",
          "Custom GPT That Recommends You",
          "Voice Search Optimization",
        ],
      },
    ],
    roiExample: {
      metric: "1 Laser Patient",
      value: "$1,500-$5,000",
      pitch: "One laser hair removal or Botox patient pays for your entire monthly marketing fee",
    },
    faqItems: [
      {
        question: "What is AEO and why do dermatologists need it?",
        answer:
          "AEO (Answer Engine Optimization) ensures your clinic appears when patients ask AI assistants like ChatGPT, Google AI, or Perplexity for skin specialists. 73% of patients under 35 now use AI before booking — if you're not optimized, you're invisible to them.",
      },
      {
        question: "How long does it take to show up in AI search?",
        answer:
          "Most clinics see initial AI visibility within 30-60 days. Full optimization with consistent citations typically takes 90 days. We provide monthly reports showing your AI presence growth.",
      },
      {
        question: "I already rank #1 on Google. Do I still need this?",
        answer:
          "Google rankings and AI recommendations are completely different systems. You can be #1 on Google and completely absent from ChatGPT. AI pulls from structured data, schema markup, and authoritative content — not just SEO rankings.",
      },
      {
        question: "What ROI can I expect?",
        answer:
          "One laser/Botox patient ($1.5K-$5K) covers our base fee. Most clinics see 5-15 new AI-sourced patients per month within 90 days — that's $7,500-$75,000 in additional revenue.",
      },
    ],
    stats: [
      { label: "Patients using AI to find doctors", value: "73%" },
      { label: "Avg. revenue per laser patient", value: "$2,500" },
      { label: "AI visibility improvement in 90 days", value: "340%" },
    ],
    ctaText: "Get Your Free AI Visibility Report",
  },
  {
    slug: "dentists",
    name: "Dentists",
    icon: "🦷",
    image: images.dentist,
    heroHeadline: "Patients Are Asking AI for Dentists. Are You the Answer?",
    heroSubline:
      "'Dental implant cost in New York' gets 12,000 searches/month. AI now answers this directly — recommending specific clinics by name. Is yours one of them?",
    searchExample: "best dentist for implants in Chicago",
    competitorLine: "SmileCare Dental is getting recommended by AI over you",
    painPoints: [
      {
        title: "$5,000+ Implant Patients Going to Competitors",
        description:
          "When AI recommends a dentist by name, that's a high-value implant patient you never even had a chance to see.",
      },
      {
        title: "Zero AI Presence",
        description:
          "Your Google reviews, certifications, and years of experience aren't being read by AI systems. You're a ghost.",
      },
      {
        title: "Emergency Patients Lost",
        description:
          "'Emergency dentist near me' is now answered by AI instantly. If you're not in that answer, the patient goes elsewhere in seconds.",
      },
    ],
    services: [
      {
        tier: "AEO Foundation",
        price: "$1,500-$3,000/mo",
        features: [
          "AI Visibility Audit & Monitoring",
          "Dentist + LocalBusiness Schema",
          "llms.txt + AI Crawler Access",
          "Google Business Profile Optimization",
          "NAP Consistency (50+ the US Directories)",
          "Monthly AI Citation Report",
        ],
      },
      {
        tier: "Local Domination",
        price: "$4,000-$8,000/mo",
        features: [
          "Everything in Foundation",
          "One Page Per Treatment (Implants, RCT, Braces, etc.)",
          "Interactive Cost Calculator Tool",
          "Smile Gallery with Before/After Schema",
          "Emergency Dentist SEO",
          'Programmatic SEO: "Best Dentist for [Treatment] in [City]"',
          "Automated Review Request via WhatsApp/SMS",
        ],
      },
      {
        tier: "Godfather 360°",
        price: "$12,000-$30,000/mo",
        features: [
          "Everything in Local Domination",
          "PR & Award Submissions",
          "Knowledge Panel Strategy",
          "Google Ads + Local Service Ads",
          "Instagram Smile Transformations (15/mo)",
          "YouTube Patient Journey Videos",
          "WhatsApp/SMS Business Automation",
          "Voice & AI Search Domination",
        ],
      },
    ],
    roiExample: {
      metric: "1 Implant Patient",
      value: "$5,000-$25,000",
      pitch: "One dental implant patient pays for months of your entire marketing investment",
    },
    faqItems: [
      {
        question: "Why should dentists care about AI search?",
        answer:
          "60% of dental patients research online before booking. AI assistants now provide direct recommendations — not just links. If AI recommends your competitor by name, that patient never sees your clinic.",
      },
      {
        question: "Can you help with emergency dental SEO?",
        answer:
          "Yes. 'Emergency dentist near me' queries are answered instantly by AI. We optimize your presence so you're the AI's top recommendation for dental emergencies in your area.",
      },
      {
        question: "What about my existing Google Ads?",
        answer:
          "Google Ads and AI optimization work together, not against each other. Ads capture intent today; AEO builds your long-term AI presence. We can manage both for maximum patient acquisition.",
      },
      {
        question: "How do you generate more reviews?",
        answer:
          "We set up automated SMS/email review requests sent 2 hours after each appointment. Most clinics see a 3-5x increase in monthly reviews within 60 days.",
      },
    ],
    stats: [
      { label: "Dental searches answered by AI", value: "45%" },
      { label: "Avg. implant patient value", value: "$12,000" },
      { label: "Review increase in 60 days", value: "300%" },
    ],
    ctaText: "Get Your Free Dental AI Audit",
  },
  {
    slug: "plastic-surgeons",
    name: "Plastic Surgeons",
    icon: "✨",
    image: images.plasticSurgeon,
    heroHeadline: "AI Is Recommending Surgeons by Name. Is It Recommending You?",
    heroSubline:
      "Patients researching rhinoplasty, liposuction, or facelifts are asking AI before even Googling. AI recommends 2-3 surgeons in your city. You need to be one of them.",
    searchExample: "best rhinoplasty surgeon in Los Angeles",
    competitorLine: "Dr. Aesthetic Clinic is AI-recommended for plastic surgery in your city",
    painPoints: [
      {
        title: "$15,000-$50,000 Procedures Walking Out the Door",
        description:
          "Each patient AI sends to your competitor is a high-ticket procedure you'll never perform. The math is brutal.",
      },
      {
        title: "Trust Built Over Years, Invisible to AI",
        description:
          "Your board certifications, 1000+ procedures, and patient testimonials aren't structured for AI to read.",
      },
      {
        title: "Before/After Gallery Wasted",
        description:
          "Your incredible transformations have zero schema markup. AI can't see them, can't cite them, can't recommend you based on them.",
      },
    ],
    services: [
      {
        tier: "AEO Foundation",
        price: "$2,500-$5,000/mo",
        features: [
          "AI Visibility Audit & Monitoring",
          "Physician + MedicalProcedure Schema",
          "llms.txt + AI Crawler Access",
          "Google Business Profile Optimization",
          "Medical Directory Listings (50+ the US)",
          "Monthly AI Citation & Competitor Report",
        ],
      },
      {
        tier: "Local Domination",
        price: "$6,000-$15,000/mo",
        features: [
          "Everything in Foundation",
          "Procedure-Specific Landing Pages (15+)",
          "Before/After Gallery with Full Schema",
          "Surgeon Video Consultations Content",
          "AI-Optimized Patient Journey Pages",
          'Programmatic SEO: "[Procedure] Cost in [City]"',
          "VIP Patient Review System",
        ],
      },
      {
        tier: "Godfather 360°",
        price: "$20,000-$50,000/mo",
        features: [
          "Everything in Local Domination",
          "PR in Vogue, Elle, Medical Journals",
          "Wikipedia + Knowledge Panel",
          "Google + Meta + YouTube Ads",
          "Instagram Transformation Reels (20/mo)",
          "Celebrity/Influencer Testimonial Strategy",
          "Custom GPT Recommending Your Practice",
          "International Patient Acquisition",
        ],
      },
    ],
    roiExample: {
      metric: "1 Rhinoplasty Patient",
      value: "$10,000-$25,000",
      pitch: "One rhinoplasty covers months of your marketing investment",
    },
    faqItems: [
      {
        question: "Is AI really affecting plastic surgery patient acquisition?",
        answer:
          "Absolutely. Plastic surgery is one of the most researched medical fields online. Patients spend weeks researching before choosing a surgeon — and AI assistants are now their primary research tool.",
      },
      {
        question: "How do you handle patient privacy with before/after galleries?",
        answer:
          "All before/after content uses proper consent-based workflows. We add schema markup to galleries without exposing patient identity, while maximizing AI and search visibility.",
      },
      {
        question: "Can you help attract international patients?",
        answer:
          "Yes. Medical tourism is significant. We optimize your AI presence for global queries like 'best plastic surgeon for [Procedure]' across multiple languages and AI platforms.",
      },
      {
        question: "What makes this different from regular medical SEO?",
        answer:
          "Traditional SEO gets you Google rankings. AEO gets you directly recommended by name when patients ask AI. It's the difference between being on page 1 and being THE answer.",
      },
    ],
    stats: [
      { label: "Cosmetic patients using AI research", value: "81%" },
      { label: "Avg. procedure value", value: "$15,000" },
      { label: "Patient acquisition cost reduction", value: "60%" },
    ],
    ctaText: "Get Your Free Surgeon AI Audit",
  },
  {
    slug: "ivf-clinics",
    name: "IVF Clinics",
    icon: "🍼",
    image: images.ivf,
    heroHeadline: "Couples Are Asking AI Which IVF Clinic to Trust. What's AI Saying About You?",
    heroSubline:
      "'Best IVF clinic in Los Angeles' is now answered by AI with specific names, success rates, and costs. If your clinic's data isn't being picked up, those couples go elsewhere.",
    searchExample: "best IVF clinic with highest success rate in San Francisco",
    competitorLine: "Top fertility centers are dominating AI recommendations in your city",
    painPoints: [
      {
        title: "$15,000-$30,000 IVF Cycles Lost to AI Competitors",
        description:
          "Each couple AI sends to a competitor is high-value revenue lost. Over a year, that's millions walking out the door.",
      },
      {
        title: "Success Rates Not Visible to AI",
        description:
          "Your 65%+ success rates are on your website but not structured for AI to read and cite. Competitors with lower rates but better AI presence win.",
      },
      {
        title: "Emotional Decision, AI-Influenced",
        description:
          "IVF is an emotionally intense decision. Couples spend months researching. AI is their first stop now.",
      },
    ],
    services: [
      {
        tier: "AEO Foundation",
        price: "$2,500-$5,000/mo",
        features: [
          "AI Visibility Audit & Monitoring",
          "MedicalClinic + Fertility Schema",
          "llms.txt + AI Crawler Access",
          "Google Business Profile Optimization",
          "Fertility Directory Listings",
          "Monthly AI Citation Report",
        ],
      },
      {
        tier: "Local Domination",
        price: "$6,000-$15,000/mo",
        features: [
          "Everything in Foundation",
          "Treatment Journey Content Hub",
          "Success Rate Comparison Pages",
          "Doctor Profile Pages with Full Schema",
          "AI-Optimized Patient Story Videos",
          'Programmatic SEO: "IVF Cost in [City]"',
          "Empathetic Review Generation System",
        ],
      },
      {
        tier: "Godfather 360°",
        price: "$20,000-$50,000/mo",
        features: [
          "Everything in Local Domination",
          "PR in Health Publications",
          "Doctor Wikipedia + Knowledge Panel",
          "Google + Meta Ads",
          "YouTube Patient Journey Series",
          "Instagram Educational Content (15/mo)",
          "WhatsApp/SMS Support Automation",
          "AI Platform Domination (ChatGPT + Perplexity)",
        ],
      },
    ],
    roiExample: {
      metric: "2 IVF Patients/Month",
      value: "$30,000-$60,000",
      pitch: "Two additional IVF cycles per month delivers 10x ROI on your marketing spend",
    },
    faqItems: [
      {
        question: "How does AI affect IVF patient decisions?",
        answer:
          "IVF patients research more than any other medical specialty. They compare clinics, success rates, costs, and doctor credentials. AI assistants now synthesize all this information and make direct recommendations.",
      },
      {
        question: "Can AI show our success rates?",
        answer:
          "Yes, when properly structured with schema markup and authoritative content. We ensure AI systems can read and cite your actual success rates, doctor credentials, and patient outcomes.",
      },
      {
        question: "How do you handle the sensitive nature of fertility marketing?",
        answer:
          "All our content and ads follow platform policies for sensitive categories. We focus on empathetic, educational content that builds trust — not aggressive sales tactics.",
      },
      {
        question: "What about patients searching from other cities?",
        answer:
          "Medical tourism is significant for IVF. We optimize for 'best IVF clinic' and city-specific queries to capture patients willing to travel for the right clinic.",
      },
    ],
    stats: [
      { label: "Couples researching IVF online", value: "89%" },
      { label: "Avg. IVF cycle value", value: "$20,000" },
      { label: "Patient inquiry increase in 90 days", value: "250%" },
    ],
    ctaText: "Get Your Free IVF Clinic AI Audit",
  },
  {
    slug: "lawyers",
    name: "Lawyers",
    icon: "⚖️",
    image: images.lawyer,
    heroHeadline: "When Clients Ask AI for a Lawyer, Does AI Say Your Name?",
    heroSubline:
      "Legal clients are now asking ChatGPT and Google AI for lawyer recommendations. 3 firms get mentioned. If you're not one of them, you're losing high-value cases every single day.",
    searchExample: "best corporate lawyer in New York",
    competitorLine: "Top-tier firms dominate AI recommendations in your practice area",
    painPoints: [
      {
        title: "High-Value Cases Going to AI-Recommended Firms",
        description:
          "When a business owner asks AI for a lawyer, AI gives 2-3 names. If yours isn't there, that major case goes to someone else.",
      },
      {
        title: "Credentials Invisible to AI",
        description:
          "Your bar registration, landmark cases, and decades of experience aren't structured for AI to read.",
      },
      {
        title: "Referral Pipeline Drying Up",
        description:
          "Traditional word-of-mouth is being replaced by AI recommendations. The firms who adapt first will dominate for years.",
      },
    ],
    services: [
      {
        tier: "AEO Foundation",
        price: "$2,000-$4,000/mo",
        features: [
          "AI Visibility Audit & Monitoring",
          "LegalService + Attorney Schema",
          "llms.txt + AI Crawler Access",
          "Google Business Profile Optimization",
          "Legal Directory Listings (50+ the US)",
          "Monthly AI Citation Report",
        ],
      },
      {
        tier: "Local Domination",
        price: "$5,000-$12,000/mo",
        features: [
          "Everything in Foundation",
          "Practice Area Landing Pages (10+)",
          "Case Study Pages with Schema",
          "Lawyer Profile Pages (Full Bio Schema)",
          "AI-Optimized Legal FAQ Content",
          'Programmatic SEO: "[Practice Area] Lawyer in [City]"',
          "Client Review Generation System",
        ],
      },
      {
        tier: "Godfather 360°",
        price: "$15,000-$40,000/mo",
        features: [
          "Everything in Local Domination",
          "PR in Legal Publications & Business Media",
          "Wikipedia + Knowledge Panel",
          "Google Ads for High-Intent Legal Queries",
          "LinkedIn Thought Leadership (12 Posts/mo)",
          "YouTube Legal Explainer Series",
          "Webinar & Speaking Engagement Strategy",
          "AI Platform Domination",
        ],
      },
    ],
    roiExample: {
      metric: "1 Corporate Client",
      value: "$20,000-$100,000+",
      pitch: "One corporate retainer or major case pays for your entire year of marketing",
    },
    faqItems: [
      {
        question: "Do clients really use AI to find lawyers?",
        answer:
          "Yes. 58% of legal clients now start their search online, and AI assistants are increasingly the first touchpoint. Business clients especially use AI to shortlist firms before even making a call.",
      },
      {
        question: "What about confidentiality?",
        answer:
          "We never publish confidential case details. We work with public information, published judgments, and client-approved testimonials. All content follows professional advertising guidelines.",
      },
      {
        question: "I get clients through referrals. Why do I need this?",
        answer:
          "Referrals are still valuable, but even referred clients research you online and ask AI about you before calling. If AI shows no information or recommends a competitor, that referral may not convert.",
      },
      {
        question: "Can you help with specific practice areas?",
        answer:
          "Absolutely. We create targeted AI optimization for each practice area — corporate law, personal injury, family law, IP, real estate, etc. Each gets its own content strategy.",
      },
    ],
    stats: [
      { label: "Legal clients starting search online", value: "58%" },
      { label: "Avg. corporate case value", value: "$50,000" },
      { label: "Client inquiry increase in 90 days", value: "200%" },
    ],
    ctaText: "Get Your Free Legal AI Audit",
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    icon: "🏢",
    image: images.realEstate,
    heroHeadline: "Buyers Ask AI Which Developers to Trust. What's AI Saying About You?",
    heroSubline:
      "When homebuyers ask ChatGPT 'best developers in Austin' or 'is XYZ Real Estate reliable', AI gives a direct answer. If you're not in that answer, millions in sales walk to your competitors.",
    searchExample: "best luxury real estate developers in Miami",
    competitorLine: "Major developers are dominating AI recommendations in your market",
    painPoints: [
      {
        title: "$1M-$10M+ Units Lost to AI-Recommended Developers",
        description:
          "One high-end sale is $1M+. When AI recommends your competitor's project, that's massive revenue lost.",
      },
      {
        title: "Ratings, Awards, Certifications — Invisible to AI",
        description:
          "Your industry certifications, project completions, and awards aren't structured for AI to read and recommend you.",
      },
      {
        title: "Homebuyers Research for Months on AI",
        description:
          "Real estate buyers spend 3-6 months researching. AI is their research assistant. If AI doesn't know you, you lose the entire funnel.",
      },
    ],
    services: [
      {
        tier: "AEO Foundation",
        price: "$2,500-$5,000/mo",
        features: [
          "AI Visibility Audit & Monitoring",
          "RealEstateAgent + Project Schema",
          "llms.txt + AI Crawler Access",
          "Google Business Profile Optimization",
          "Property Portal Optimization (Zillow, REA, etc.)",
          "Monthly AI Citation Report",
        ],
      },
      {
        tier: "Local Domination",
        price: "$6,000-$15,000/mo",
        features: [
          "Everything in Foundation",
          "Project-Specific Landing Pages",
          "Locality Guide Content Hub",
          "Virtual Tour Pages with Schema",
          "AI-Optimized Price & Configuration Pages",
          'Programmatic SEO: "[Type] in [Locality] [City]"',
          "Automated Buyer Review Collection",
        ],
      },
      {
        tier: "Godfather 360°",
        price: "$20,000-$50,000/mo",
        features: [
          "Everything in Local Domination",
          "PR in Major Property & Business Media",
          "Builder Wikipedia + Knowledge Panel",
          "Google + Meta + YouTube Ads",
          "Instagram Project Showcase (20 Reels/mo)",
          "YouTube Project Walkthrough Series",
          "CRM Lead Nurturing Automation",
          "AI Platform Domination Across All Projects",
        ],
      },
    ],
    roiExample: {
      metric: "1 Luxury Unit Sale",
      value: "$1M-$10M+",
      pitch: "One single unit sale pays for years of your entire marketing budget",
    },
    faqItems: [
      {
        question: "How does AI affect real estate sales?",
        answer:
          "Homebuyers now ask AI to compare developers, check reliability, and find the best projects in a locality. AI synthesizes reviews, ratings, and structured data to make direct recommendations.",
      },
      {
        question: "Can you optimize for specific projects?",
        answer:
          "Yes. Each project gets its own AI optimization — unique landing pages, schema markup, locality targeting, and content strategy. We treat each project as its own brand.",
      },
      {
        question: "What about property portals like Zillow?",
        answer:
          "We optimize your presence on both your own website AND property portals. AI pulls from all sources — so consistent, structured data across platforms multiplies your visibility.",
      },
      {
        question: "How do you handle multiple locations?",
        answer:
          "We create city and locality-specific optimization. 'Best luxury condo in Miami' and 'Best developer in Austin' each get targeted content and AI optimization.",
      },
    ],
    stats: [
      { label: "Homebuyers researching via AI", value: "67%" },
      { label: "Avg. deal value", value: "$1.5M" },
      { label: "Lead quality improvement", value: "180%" },
    ],
    ctaText: "Get Your Free Developer AI Audit",
  },
];

export function getNicheBySlug(slug: string): NicheData | undefined {
  return niches.find((n) => n.slug === slug);
}
