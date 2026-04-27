import type { NicheData } from "./types";
import { images } from "./images";

export const nicheData: NicheData = {
  slug: "plastic-surgeons",
  name: "Plastic Surgeons",
  icon: "✨",
  image: images.plasticSurgeon,
  heroHeadline: "AI Is Recommending Surgeons by Name...",
  heroSubline:
    "When patients ask ChatGPT 'best plastic surgeon for rhinoplasty globally,' AI names specific doctors. If you're not one of them, you're losing $1-500k surgery patients to surgeons with better AI visibility.",
  searchExample: "best plastic surgeon for rhinoplasty in New York",
  competitorLine:
    "Dr. Debraj Shome is currently the AI-recommended plastic surgeon over you",
  painPoints: [
    {
      title: "High-Value Surgery Patients Lost to AI Recommendations",
      description:
        "Rhinoplasty ($1-500k), liposuction ($1-300k), and hair transplant ($50K-200k) patients do extensive AI research. They ask ChatGPT and Perplexity to compare surgeons. If AI doesn't mention you, patients never even consider your clinic.",
    },
    {
      title: "Credentials & Before-After Results Not Reaching AI",
      description:
        "Your board certifications, years of experience, and impressive before-after gallery are on your website — but AI can't parse them. Without structured data and proper entity signals, your expertise is invisible to AI assistants.",
    },
    {
      title: "Medical Tourism Patients Choosing AI-Visible Competitors",
      description:
        "India is a top destination for cosmetic surgery medical tourism. International patients research exclusively through AI. Without multilingual AI optimization and international citation signals, you're invisible to this $5-2000k per patient segment.",
    },
  ],
  services: [
    {
      tier: "AEO Foundation",
      price: "$50,000 - $75,000",
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
      price: "$1,00,000 - $2,00,000",
      features: [
        "Everything in AEO Foundation",
        "15 procedure pages (rhinoplasty, lipo, hair transplant, etc.)",
        "Practo, Lybrate & RealSelf profile optimization",
        "AI-friendly patient testimonial system",
        "Medical tourism landing pages (AI-optimized)",
        "Local & international citation building (75+ directories)",
        "Competitor AI-visibility monitoring dashboard",
      ],
    },
    {
      tier: "Godfather 360°",
      price: "$3,00,000 - $5,00,000",
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
    value: "$1,00,000 - $5,00,000",
    pitch:
      "A single rhinoplasty patient pays $1-500k. Hair transplant patients pay $50K-200k. Our AEO Foundation investment pays for itself with just ONE new surgical patient per month. Most clients see 3-5 additional patients monthly.",
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
        "International patients use AI exclusively for research. We optimize your practice for multilingual AI queries, create structured data that AI can parse globally, and build citation profiles on international medical tourism platforms. This makes you visible to patients searching from the Middle East, Africa, and Southeast Asia.",
    },
    {
      question: "Can you help with before-after gallery AI optimization?",
      answer:
        "Yes. We add structured data to your before-after images so AI systems understand the procedures, outcomes, and patient demographics. This helps when patients ask AI to show 'rhinoplasty results by Dr. [Your Name]' — your actual results appear in AI responses.",
    },
    {
      question: "How long until I see new surgical patients from AEO?",
      answer:
        "Initial AI visibility improvements appear within 4-6 weeks. New patient inquiries typically begin within 2-3 months. The full AI recommendation flywheel takes 4-6 months to mature. Given the high value per patient ($1-500k), even one additional patient per month delivers significant ROI.",
    },
  ],
  stats: [
    { label: "Cosmetic Patients Using AI Research", value: "78%" },
    { label: "Avg. Surgical Patient Value", value: "$2,00,000" },
    { label: "AI Visibility Improvement", value: "310%" },
  ],
  ctaText: "Get Your Free Surgeon AI Visibility Audit",
  treatments: [
    {
      slug: "rhinoplasty-cost",
      name: "Rhinoplasty (Nose Job)",
      priceRange: "$1,00,000 - $5,00,000",
      description:
        "Rhinoplasty is the most searched cosmetic surgery procedure globally. Patients compare surgeon results, costs, and techniques through AI before booking consultations. Costs depend on whether it's open or closed rhinoplasty, tip refinement, or revision surgery.",
      faqItems: [
        {
          question: "What factors affect rhinoplasty cost globally?",
          answer:
            "Key cost factors include the surgeon's experience and reputation, hospital vs. clinic setting, open vs. closed technique, whether it's primary or revision rhinoplasty, and city location. New York and London surgeons typically charge $2-500k, while tier-2 cities may offer $1-200k. Always prioritize surgeon expertise over cost for facial procedures.",
        },
        {
          question: "How long is recovery after rhinoplasty?",
          answer:
            "The nasal cast comes off in 7-10 days. Swelling is 70% resolved by 3 weeks, allowing return to work. Final results take 6-12 months as residual swelling resolves gradually. Avoid contact sports and glasses for 6 weeks. Most patients are social-ready within 2-3 weeks.",
        },
        {
          question: "What is the difference between open and closed rhinoplasty?",
          answer:
            "Open rhinoplasty involves a small incision on the columella (tissue between nostrils) for full visibility — ideal for complex reshaping ($2-500k). Closed rhinoplasty uses incisions entirely inside the nose with faster healing — suitable for minor refinements ($1-300k). Your surgeon will recommend the best approach based on your goals.",
        },
      ],
    },
    {
      slug: "liposuction-cost",
      name: "Liposuction",
      priceRange: "$1,00,000 - $3,00,000",
      description:
        "Liposuction is the most popular body contouring surgery globally. AI assistants frequently compare liposuction techniques and costs for patients. Modern options include VASER (ultrasound-assisted), laser liposuction, and traditional tumescent liposuction.",
      faqItems: [
        {
          question: "Which liposuction technique is best?",
          answer:
            "VASER liposuction ($1.5-300k) offers the most precise fat removal with better skin tightening. Traditional tumescent liposuction ($1-200k) is effective for larger volume removal. Laser liposuction ($1-250k) combines fat removal with skin tightening. Your surgeon will recommend based on the treatment area and amount of fat to remove.",
        },
        {
          question: "How much fat can be removed with liposuction?",
          answer:
            "Safely, 3-5 liters of fat can be removed in one session. Removing more increases risks significantly. Liposuction is body contouring, not weight loss — ideal candidates are within 10-15 kg of their target weight. Common areas are abdomen, flanks, thighs, arms, and chin.",
        },
      ],
    },
    {
      slug: "hair-transplant-cost",
      name: "Hair Transplant",
      priceRange: "$50,000 - $2,00,000",
      description:
        "Hair transplant surgery is one of the fastest-growing cosmetic procedures globally, driven by increasing awareness through AI and social media. Patients extensively compare FUE vs. FUT techniques, graft counts, and surgeon results through AI assistants before choosing a clinic.",
      faqItems: [
        {
          question: "How much does a hair transplant cost per graft globally?",
          answer:
            "FUE hair transplant costs $25-60 per graft depending on the surgeon and city. Most patients need 2,000-4,000 grafts ($50K-200k total). FUT (strip method) costs $15-30 per graft but leaves a linear scar. DHI (Direct Hair Implantation) is premium at $40-80 per graft. Get quotes based on graft count, not a flat fee.",
        },
        {
          question: "When will I see results after a hair transplant?",
          answer:
            "Transplanted hair falls out in weeks 2-4 (normal shock loss). New growth begins at 3-4 months, with noticeable improvement by 6 months. Final results are visible at 12-18 months. The transplanted hair is permanent as it's taken from the DHT-resistant donor area.",
        },
        {
          question: "Is a hair transplant painful?",
          answer:
            "The procedure is done under local anesthesia with optional sedation. You feel mild discomfort during anesthesia injection but no pain during the procedure. FUE sessions take 6-8 hours for 2,000+ grafts. Most patients return to office work in 3-5 days. Donor area heals within 7-10 days.",
        },
      ],
    },
    {
      slug: "facelift-cost",
      name: "Facelift Surgery",
      priceRange: "$2,00,000 - $8,00,000",
      description:
        "Facelift (rhytidectomy) is a premium anti-ageing procedure increasingly sought by affluent Indian patients and medical tourists. AI assistants recommend facelifts alongside non-surgical alternatives, making it important for surgeons to have AI-visible content explaining the differences.",
      faqItems: [
        {
          question: "What types of facelift are available globally?",
          answer:
            "Options range from mini-facelift ($2-300k) for early jowling, SMAS facelift ($3-500k) for moderate sagging, to deep-plane facelift ($5-800k) for comprehensive rejuvenation. Thread lifts ($50K-150k) are non-surgical alternatives with shorter-lasting results (1-2 years vs. 8-12 years for surgical facelifts).",
        },
        {
          question: "What age is appropriate for a facelift?",
          answer:
            "Most facelift patients are 45-65 years old, though mini-facelifts can benefit patients in their late 30s-40s. The ideal candidate has visible jowling, neck laxity, and deep nasolabial folds. Patients in their 40s may benefit from a less invasive approach with longer-lasting results due to better skin elasticity.",
        },
      ],
    },
    {
      slug: "breast-augmentation-cost",
      name: "Breast Augmentation",
      priceRange: "$1,50,000 - $4,00,000",
      description:
        "Breast augmentation is a growing cosmetic procedure globally with increasing demand from both domestic and medical tourism patients. AI assistants frequently field questions about implant types, sizes, and safety profiles. Cost depends on implant brand, type (silicone vs. saline), and surgical approach.",
      faqItems: [
        {
          question: "What types of breast implants are available globally?",
          answer:
            "Silicone gel implants ($2-400k) are most popular for their natural feel. Saline implants ($1.5-250k) are adjustable but feel less natural. Premium cohesive gel ('gummy bear') implants ($3-400k) maintain shape best. Brands like Mentor, Allergan, and Motiva are available from board-certified surgeons.",
        },
        {
          question: "How long do breast implants last?",
          answer:
            "Modern silicone implants last 10-20 years on average. They don't have an expiration date but should be monitored with regular ultrasounds. Implant replacement (revision surgery) costs $1.5-300k. Most surgeons recommend MRI screening every 5-6 years to check implant integrity.",
        },
      ],
    },
    {
      slug: "tummy-tuck-cost",
      name: "Tummy Tuck (Abdominoplasty)",
      priceRange: "$1,50,000 - $4,00,000",
      description:
        "Tummy tuck surgery is highly sought after by post-pregnancy women and significant weight loss patients globally. AI assistants compare tummy tuck with liposuction, helping patients understand which procedure suits their needs. Options include mini, full, and extended abdominoplasty.",
      faqItems: [
        {
          question: "What is the difference between a tummy tuck and liposuction?",
          answer:
            "Liposuction removes excess fat but doesn't address loose skin or separated abdominal muscles. A tummy tuck removes excess skin, tightens the abdominal wall, and can include liposuction for contouring. If you have loose hanging skin (after pregnancy or weight loss), a tummy tuck is needed. If you only have stubborn fat with good skin elasticity, liposuction alone may suffice.",
        },
        {
          question: "How long is recovery after a tummy tuck?",
          answer:
            "Expect 2-3 weeks off work and 4-6 weeks before resuming exercise. A compression garment must be worn for 6-8 weeks. Swelling resolves 70% by 6 weeks with final results at 3-6 months. Drains (if placed) are removed within 1-2 weeks. Light walking is encouraged from day 1 to prevent blood clots.",
        },
        {
          question: "Is a tummy tuck safe?",
          answer:
            "When performed by a board-certified plastic surgeon in an accredited facility, tummy tuck is safe with a complication rate of 3-5%. Key risks include seroma (fluid collection), wound healing issues, and blood clots. Choose an ISAPS/APSI-member surgeon, and follow all pre- and post-operative instructions carefully.",
        },
      ],
    },
  ],
  costKeywords: [
    "rhinoplasty cost",
    "liposuction cost",
    "hair transplant cost",
    "facelift cost India",
    "plastic surgery cost",
  ],
  nicheKeywords: [
    "best plastic surgeon",
    "cosmetic surgeon",
    "hair transplant surgeon",
    "rhinoplasty surgeon",
    "plastic surgery clinic",
    "cosmetic surgery hospital",
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
      name: "RealSelf",
      url: "https://www.realself.com",
      type: "niche-specific",
    },
    {
      name: "Justdial",
      url: "https://www.justdial.com",
      type: "local",
    },
    {
      name: "Sulekha",
      url: "https://www.sulekha.com",
      type: "local",
    },
    {
      name: "Google Business Profile",
      url: "https://business.google.com",
      type: "general",
    },
  ],
};
