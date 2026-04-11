import type { NicheData } from "./types";
import { images } from "./images";

export const nicheData: NicheData = {
  slug: "physiotherapy",
  name: "Physiotherapy",
  icon: "🏃",
  image: images.physiotherapy,
  heroHeadline:
    "Recovery Starts with AI. Are Patients Finding Your Physio Clinic?",
  heroSubline:
    "Post-surgery rehab patients, sports injury sufferers, and chronic pain patients are asking AI for the best physiotherapist near them. If your clinic isn't in those AI answers, they're walking into PhysioFirst and Portea — not your expert hands.",
  painPoints: [
    {
      title: "Post-Surgery Rehab Patients Going to Chain Physio Centers",
      description:
        "Patients recovering from knee replacement, ACL surgery, and spine operations ask AI for physiotherapy recommendations. Chain clinics like PhysioFirst and Portea dominate AI answers — your specialized rehabilitation expertise and MPT credentials are invisible.",
    },
    {
      title: "Sports Injury Patients Lost to Online Platforms",
      description:
        "Young athletes with ACL tears, rotator cuff injuries, and muscle strains are choosing AI-recommended chain clinics and online physio platforms. Your sports-specific rehab protocols and return-to-sport expertise never show up in AI recommendations.",
    },
    {
      title: "Elderly Patients Choosing AI-Recommended Clinics",
      description:
        "Families searching for physiotherapy for their elderly parents — stroke rehabilitation, arthritis management, fall prevention — trust AI recommendations. Your geriatric specialization and home-visit services remain invisible to the families who need them most.",
    },
  ],
  services: [
    {
      tier: "AI Foundation",
      price: "₹15,000 - ₹30,000",
      features: [
        "Google Business Profile optimization for physiotherapy keywords",
        "Structured schema markup for MedicalBusiness + PhysicalTherapy",
        "Citation building on Practo, Lybrate, and PhysiotherapyIndia",
        "AI-optimized content for top 10 physiotherapy conditions",
        "Monthly AI visibility audit report",
      ],
    },
    {
      tier: "AI Growth",
      price: "₹40,000 - ₹80,000",
      features: [
        "Everything in AI Foundation",
        "Full AEO for 25+ physiotherapy keywords (rehab, sports, chronic pain)",
        "Patient recovery story content strategy for AI training data",
        "Review aggregation schema across Practo, Google, and Lybrate",
        "Competitor displacement strategy against chain physio centers",
        "Quarterly AI performance benchmarking",
      ],
    },
    {
      tier: "AI Dominance",
      price: "₹1,00,000 - ₹2,00,000",
      features: [
        "Everything in AI Growth",
        "Full website rebuild optimized for AI crawlers",
        "llms.txt implementation with condition and treatment detail",
        "Medical publication and health blog citation building",
        "AI chatbot training data optimization",
        "Dedicated AI visibility manager",
        "Real-time AI mention monitoring across ChatGPT, Perplexity, Gemini",
      ],
    },
  ],
  roiExample: {
    metric: "10 Regular Patients/Month",
    value: "₹50K-1L",
    pitch:
      "Just 10 new regular patients per month at ₹500-1,000 per session, attending 8-12 sessions each, generates ₹50K-1L in monthly revenue. Post-surgical rehab patients alone generate ₹15-25K each over their treatment course.",
  },
  faqItems: [
    {
      question: "How does AI recommend physiotherapy clinics to patients?",
      answer:
        "AI models pull from medical directories like Practo and Lybrate, Google reviews, your website content, and health-related publications. Clinics with structured schema showing specializations (sports rehab, neuro physio, geriatric care), therapist credentials, and treatment protocols get recommended significantly more often.",
    },
    {
      question: "I get patient referrals from orthopedic surgeons. Why do I need AI visibility?",
      answer:
        "Surgeon referrals are valuable but patients increasingly verify referrals using AI. If AI doesn't confirm your expertise, patients may choose a competitor. Additionally, AI visibility opens direct patient channels — patients with chronic pain, sports injuries, and wellness needs search directly without surgeon referrals.",
    },
    {
      question: "Can a solo physiotherapy clinic compete with chains like PhysioFirst?",
      answer:
        "Yes. Chain clinics have generic protocols while your clinic offers personalized, condition-specific treatment. For queries like 'best physiotherapist for ACL rehab in Pune' or 'stroke rehabilitation at home,' specialized clinics with proper AEO consistently outperform chains that offer one-size-fits-all programs.",
    },
    {
      question: "How quickly will I see more patient inquiries?",
      answer:
        "Most physiotherapy clinics see increased AI visibility within 30-45 days and measurable patient inquiry increases within 60-90 days. Post-surgery rehabilitation seasons (after elective surgery peaks) and sports seasons show the fastest results.",
    },
  ],
  stats: [
    { label: "of patients research physiotherapists online before visiting", value: "65%" },
    { label: "ask AI or voice assistants for physio recommendations", value: "41%" },
    { label: "average revenue per rehab patient (full course)", value: "₹18K" },
  ],
  ctaText: "Get Your Free Physiotherapy AI Visibility Audit",
  searchExample: "best physiotherapist near me for knee pain",
  competitorLine:
    "PhysioFirst, Portea, and chain rehab centers are dominating AI recommendations — while your MPT-qualified therapists, specialized rehab protocols, and personalized care remain invisible to patients searching for exactly what you offer.",
  treatments: [
    {
      slug: "physiotherapy-session-cost",
      name: "Physiotherapy Sessions",
      priceRange: "₹500 - ₹2,000/session",
      description:
        "Standard physiotherapy sessions including assessment, manual therapy, electrotherapy modalities, therapeutic exercises, and home exercise program design for various musculoskeletal and neurological conditions.",
      faqItems: [
        {
          question: "What is the cost of physiotherapy sessions in India?",
          answer:
            "Physiotherapy sessions cost ₹500-1,000 at independent clinics, ₹1,000-2,000 at hospital-based centers, and ₹800-1,500 for home visits. Most conditions require 10-15 sessions over 4-6 weeks. Many clinics offer package deals: 10 sessions for ₹4,000-12,000 (saving 15-20% over individual rates).",
        },
        {
          question: "How many physiotherapy sessions will I need?",
          answer:
            "Session count depends on the condition: back pain (8-12 sessions), post-surgery rehab (15-20 sessions), frozen shoulder (12-15 sessions), sports injury (10-20 sessions). Your physiotherapist will assess and provide a treatment plan with expected milestones after the first session.",
        },
      ],
    },
    {
      slug: "sports-rehab-cost",
      name: "Sports Rehabilitation",
      priceRange: "₹1,000 - ₹3,000/session",
      description:
        "Specialized sports rehabilitation programs including ACL/MCL rehab, rotator cuff recovery, hamstring injury rehab, sports-specific conditioning, and return-to-sport assessment protocols.",
      faqItems: [
        {
          question: "What does sports rehabilitation cost in India?",
          answer:
            "Sports rehab costs ₹1,000-3,000 per session due to specialized equipment and expertise required. A full ACL rehab program (6-9 months, 40-60 sessions) costs ₹40,000-1,20,000. Many sports physio clinics offer athlete packages at ₹15,000-30,000/month for unlimited sessions during recovery.",
        },
        {
          question: "How is sports physiotherapy different from regular physiotherapy?",
          answer:
            "Sports physiotherapy focuses on returning athletes to peak performance — not just pain relief. It includes sport-specific movement analysis, performance testing, progressive loading protocols, and injury prevention strategies. Sports physios use advanced techniques like dry needling, kinesiology taping, and functional movement screening.",
        },
        {
          question: "When can I return to sports after an injury?",
          answer:
            "Return-to-sport timelines: muscle strains (4-8 weeks), ankle sprains (6-12 weeks), ACL reconstruction (9-12 months), shoulder dislocation (3-6 months). Your sports physiotherapist will use objective criteria — strength testing, hop tests, and sport-specific drills — to clear you safely, not arbitrary timelines.",
        },
      ],
    },
    {
      slug: "back-pain-treatment-cost",
      name: "Back Pain Treatment",
      priceRange: "₹500 - ₹1,500/session",
      description:
        "Comprehensive back pain management including spinal mobilization, core strengthening, ergonomic assessment, posture correction, McKenzie method, and prevention programs for office workers.",
      faqItems: [
        {
          question: "What does physiotherapy for back pain cost?",
          answer:
            "Back pain physiotherapy costs ₹500-1,500 per session. A typical course of 10-15 sessions costs ₹5,000-15,000. Chronic back pain may require 15-20 sessions. Many clinics offer corporate packages for office workers at ₹3,000-5,000/person for ergonomic assessment + 6-session treatment program.",
        },
        {
          question: "Is physiotherapy effective for disc problems?",
          answer:
            "Yes. Studies show 80-90% of disc bulge and herniation cases respond well to physiotherapy, avoiding surgery. McKenzie method, spinal decompression therapy, and core stabilization exercises have strong evidence. Most patients see significant improvement within 6-8 weeks of consistent physiotherapy.",
        },
      ],
    },
    {
      slug: "neck-pain-treatment-cost",
      name: "Neck Pain Treatment",
      priceRange: "₹500 - ₹1,500/session",
      description:
        "Specialized neck pain treatment including cervical mobilization, dry needling, postural correction, ergonomic workplace assessment, and prevention programs for tech neck and cervical spondylosis.",
      faqItems: [
        {
          question: "What does neck pain physiotherapy cost?",
          answer:
            "Neck pain physiotherapy costs ₹500-1,500 per session. Most cases require 8-12 sessions over 3-4 weeks. Cervical spondylosis may need 15-20 sessions. Many clinics include a free ergonomic assessment with neck pain treatment packages to prevent recurrence.",
        },
        {
          question: "Can physiotherapy cure cervical spondylosis permanently?",
          answer:
            "While spondylosis (age-related wear) can't be reversed, physiotherapy effectively manages symptoms and prevents progression. 85% of patients achieve pain-free status with proper therapy. Ongoing maintenance exercises (10 minutes daily) and ergonomic corrections prevent relapse. Most patients need only occasional follow-up sessions.",
        },
      ],
    },
    {
      slug: "knee-physio-cost",
      name: "Knee Physiotherapy",
      priceRange: "₹500 - ₹2,000/session",
      description:
        "Comprehensive knee rehabilitation including post-surgical rehab (TKR, ACL, meniscus), osteoarthritis management, patellar tracking correction, and pre-surgery conditioning programs.",
      faqItems: [
        {
          question: "What is the cost of knee physiotherapy in India?",
          answer:
            "Knee physiotherapy costs ₹500-2,000 per session. Post-knee replacement rehab (20-30 sessions over 3 months) costs ₹10,000-40,000. ACL rehab (40-60 sessions over 6-9 months) costs ₹20,000-80,000. Osteoarthritis management programs cost ₹5,000-15,000 for initial 10-session course.",
        },
        {
          question: "How long is physiotherapy needed after knee replacement?",
          answer:
            "Post-knee replacement physiotherapy starts in hospital (day 1-3), continues with intensive rehab for 6-8 weeks (3-5 sessions/week), then maintenance for 3-6 months (1-2 sessions/week). Total: 30-50 sessions over 3-6 months. Early, consistent physiotherapy is critical for achieving full range of motion.",
        },
        {
          question: "Can physiotherapy avoid knee replacement surgery?",
          answer:
            "For Grade 1-2 osteoarthritis, physiotherapy combined with weight management can delay or prevent surgery by 5-10 years. Quadriceps strengthening, balance training, and pain management techniques significantly improve function. Grade 3-4 arthritis usually requires surgery, but pre-surgery physiotherapy (prehab) improves post-surgical outcomes.",
        },
      ],
    },
    {
      slug: "stroke-rehab-cost",
      name: "Stroke Rehabilitation",
      priceRange: "₹1,000 - ₹3,000/session",
      description:
        "Specialized neurological rehabilitation for stroke survivors including mobility restoration, balance training, gait re-education, upper limb function recovery, and home modification guidance.",
      faqItems: [
        {
          question: "What does stroke rehabilitation cost in India?",
          answer:
            "Stroke rehab costs ₹1,000-3,000 per session. Intensive stroke rehab programs (daily sessions for 4-12 weeks) cost ₹50,000-2,00,000. Home-based stroke rehab costs ₹1,500-3,000 per visit. Many neurological physio centers offer monthly packages at ₹20,000-40,000 for 15-20 sessions.",
        },
        {
          question: "How long does stroke rehabilitation take?",
          answer:
            "Stroke recovery is fastest in the first 3-6 months (the 'golden period') but continues for 1-2 years. Initial intensive rehab is 4-12 weeks of daily therapy. Most patients achieve 80% of their recovery in the first 6 months. Early intervention within 48 hours of stroke significantly improves outcomes.",
        },
        {
          question: "Should stroke rehab be at a clinic or at home?",
          answer:
            "Both. Initial rehabilitation is best at a specialized clinic with equipment (parallel bars, treadmill, electrical stimulation). Once basic mobility is achieved, home-based physio ensures real-world functional recovery and family caregiver training. Many clinics offer hybrid programs combining clinic and home sessions.",
        },
      ],
    },
  ],
  costKeywords: [
    "physiotherapy session cost India",
    "sports rehab charges",
    "back pain treatment cost",
    "physiotherapy for knee pain price",
    "stroke rehabilitation cost",
  ],
  nicheKeywords: [
    "best physiotherapist near me",
    "sports injury physio clinic",
    "physiotherapy for back pain",
    "post surgery rehabilitation center",
    "physiotherapy at home",
    "knee pain physiotherapy near me",
  ],
  schemaType: "MedicalBusiness",
  metaCategory: "healthcare",
  citations: [
    {
      name: "Practo",
      url: "https://www.practo.com",
      type: "niche-specific",
    },
    {
      name: "Lybrate",
      url: "https://www.lybrate.com",
      type: "niche-specific",
    },
    {
      name: "PhysioTimes India",
      url: "https://www.physiotimes.com",
      type: "niche-specific",
    },
    {
      name: "Google Business Profile",
      url: "https://business.google.com",
      type: "local",
    },
    {
      name: "Justdial",
      url: "https://www.justdial.com",
      type: "general",
    },
  ],
};
