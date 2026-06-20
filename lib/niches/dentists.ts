import type { NicheData } from "./types";
import { images } from "./images";

export const nicheData: NicheData = {
  slug: "dentists",
  name: "Dentists",
  icon: "🦷",
  image: images.dentist,
  heroHeadline: "Patients Are Asking AI for Dentists. Are You the Answer?",
  heroSubline:
    "When someone asks ChatGPT 'best dentist for implants near me,' only 3 clinics get recommended. If your practice isn't optimized for AI, you're losing high-value implant patients to competitors.",
  searchExample: "best dentist for implants in Los Angeles",
  competitorLine:
    "Aspen Dental is currently AI-recommended over your practice",
  painPoints: [
    {
      title: "$5,000 Implant Patients Going Elsewhere",
      description:
        "Full-mouth dental implants and cosmetic cases cost thousands of dollars per patient. These high-value patients now ask AI assistants for recommendations before calling any clinic. If AI doesn't mention you, they book with the clinic it does recommend.",
    },
    {
      title: "Zero Presence in AI Search Results",
      description:
        "Your clinic may rank on Google page 1, but AI assistants like ChatGPT and Perplexity use different signals — structured data, citations, and entity authority. Without AEO, your Google ranking means nothing to AI.",
    },
    {
      title: "Emergency Patients Lost to AI-Visible Competitors",
      description:
        "When someone has a dental emergency at 10 PM, they ask AI 'dentist open near me now.' AI recommends clinics with structured hours, emergency availability schema, and strong citation profiles. Missing these signals means losing urgent-care revenue.",
    },
  ],
  services: [
    {
      tier: "AEO Foundation",
      price: "$1,500 - $3,000 / mo",
      features: [
        "AI Visibility Audit for dental practice",
        "Dentist schema markup (Dentist + MedicalOrganization)",
        "llms.txt & robots.txt optimization",
        "Google Business Profile AI-optimization",
        "3 treatment cost pages with FAQ schema",
        "Monthly AI citation tracking report",
      ],
    },
    {
      tier: "Local Domination",
      price: "$3,000 - $7,500 / mo",
      features: [
        "Everything in AEO Foundation",
        "12 treatment cost pages (implants, RCT, braces, etc.)",
        "Zocdoc, Healthgrades & DentistFind profile optimization",
        "AI-friendly patient review aggregation",
        "Local citation building (50+ directories)",
        "Competitor AI-visibility monitoring",
        "Bi-weekly content refresh for AI freshness signals",
      ],
    },
    {
      tier: "Godfather 360°",
      price: "$7,500 - $15,000 / mo",
      features: [
        "Everything in Local Domination",
        "Full AEO + GEO strategy for dental practice",
        "AI Overview domination for implant & cosmetic queries",
        "Video schema & YouTube dental content optimization",
        "Wikipedia/Wikidata entity creation for lead dentist",
        "Medical authority backlinks & digital PR",
        "Dedicated AI visibility manager",
        "Quarterly ROI reviews & strategy sessions",
      ],
    },
  ],
  roiExample: {
    metric: "1 Implant Patient",
    value: "$3,500 - $7,500",
    pitch:
      "A single dental implant patient is worth $3,500 - $7,500. Full-mouth reconstruction can go up to $30,000+. Our AEO Foundation package pays for itself with just ONE new implant patient per month.",
  },
  faqItems: [
    {
      question: "Why do dental clinics need AEO?",
      answer:
        "Over 65% of patients under 45 now ask AI assistants for dentist recommendations. AI pulls from structured data, medical directories, and citation signals — not just Google rankings. Without AEO, your practice is invisible to this growing patient base.",
    },
    {
      question: "How does AEO help attract implant patients specifically?",
      answer:
        "We create AI-optimized pages targeting 'dental implant cost in [city]' with structured pricing, procedure details, and FAQ schema. When patients ask AI about implant costs, your clinic appears with transparent pricing and credentials, building trust before they even call.",
    },
    {
      question: "Can AEO work alongside my existing dental marketing?",
      answer:
        "Absolutely. AEO complements your existing SEO, Google Ads, and social media. It adds a new patient acquisition channel that your competitors likely aren't using yet. Early adopters in dental AEO see the biggest advantage.",
    },
    {
      question: "How do you track AI visibility results for dentists?",
      answer:
        "We monitor your clinic's appearance in ChatGPT, Google Gemini, Perplexity, and Google AI Overviews for 50+ dental queries monthly. You get a dashboard showing which queries mention your practice, competitor comparisons, and month-over-month improvement trends.",
    },
  ],
  stats: [
    { label: "Patients Using AI for Dentist Search", value: "65%" },
    { label: "Avg. Implant Patient Value", value: "$4,500" },
    { label: "AI Visibility Improvement", value: "290%" },
  ],
  ctaText: "Get Your Free Dental AI Visibility Report",
  treatments: [
    {
      slug: "dental-implant-cost",
      name: "Dental Implants",
      priceRange: "$3,500 - $6,000",
      description:
        "Dental implants are the highest-value procedure in dentistry, and patients extensively research costs using AI before choosing a clinic. Prices vary based on implant brand (Straumann, Nobel Biocare, Zimmer), bone grafting needs, and whether it's a single implant or full-mouth reconstruction.",
      faqItems: [
        {
          question: "Why do dental implant costs vary so much across the US?",
          answer:
            "The biggest cost factor is the implant brand and components (implant body, abutment, and crown) which range from $3,500 to $6,000 per tooth. Additional factors include bone grafting ($500 - $2,500 extra), sinus lift if needed, and whether any extractions are required. Specialist oral surgeons or periodontists typically charge more than general dentists.",
        },
        {
          question: "How long do dental implants last?",
          answer:
            "High-quality dental implants last 20-25 years or even a lifetime with proper care. The crown on top may need replacement every 10-15 years. Success rates are above 95% when placed by an experienced implantologist. Regular dental checkups and good oral hygiene are essential.",
        },
        {
          question: "Is dental implant surgery painful?",
          answer:
            "The procedure is done under local anesthesia, so you feel no pain during surgery. Post-operative discomfort is manageable with prescribed painkillers for 2-3 days. Most patients return to work the next day. The entire process from implant placement to final crown takes 3-6 months.",
        },
      ],
    },
    {
      slug: "root-canal-cost",
      name: "Root Canal Treatment",
      priceRange: "$800 - $1,800",
      description:
        "Root canal treatment (RCT) is one of the most common dental procedures. Patients often ask AI about costs, pain levels, and whether to save vs. extract a tooth. Price depends on the tooth (front vs. molar), number of canals, and whether an endodontist performs the procedure.",
      faqItems: [
        {
          question: "How much does a root canal cost for a molar tooth?",
          answer:
            "Molar root canals cost $1,000 - $1,800 due to having 3-4 canals (vs. 1-2 for front teeth at $700 - $1,100). The crown required after RCT costs $1,000 - $2,500 additional depending on the material chosen (PFM, zirconia, or e.max).",
        },
        {
          question: "Is root canal treatment painful?",
          answer:
            "Modern root canals are virtually painless thanks to effective local anesthesia. The procedure takes 30-60 minutes per session (1-2 sessions needed). Post-treatment sensitivity for 2-3 days is normal and managed with over-the-counter painkillers.",
        },
      ],
    },
    {
      slug: "teeth-whitening-cost",
      name: "Teeth Whitening",
      priceRange: "$300 - $1,000",
      description:
        "Professional teeth whitening is a high-demand cosmetic dental procedure. AI assistants commonly recommend in-office whitening over DIY kits for safety and effectiveness. Options include ZOOM whitening, laser whitening, and custom take-home trays.",
      faqItems: [
        {
          question: "How long does professional teeth whitening last?",
          answer:
            "In-office whitening results last 6 months to 2 years depending on diet and habits. Coffee, tea, red wine, and tobacco stain teeth faster. Using custom take-home maintenance trays ($150 - $400) extends results. Most patients need a touch-up session every 12 months.",
        },
        {
          question: "Is teeth whitening safe?",
          answer:
            "Professional whitening supervised by a dentist is completely safe. Dentists use controlled concentrations of hydrogen peroxide (25-40%) with gum protection. Temporary sensitivity for 24-48 hours is normal. Avoid unregulated over-the-counter products which can damage enamel.",
        },
        {
          question: "What is the difference between ZOOM and laser whitening?",
          answer:
            "ZOOM whitening uses a special LED light to activate the whitening gel over three 15-minute cycles in one visit. Laser whitening uses a targeted diode laser for faster activation. Both achieve 5-8 shades of improvement. ZOOM is widely available and typically more affordable.",
        },
      ],
    },
    {
      slug: "braces-cost",
      name: "Dental Braces",
      priceRange: "$3,000 - $7,500",
      description:
        "Orthodontic braces are one of the most researched dental treatments on AI platforms, with patients comparing metal, ceramic, and clear aligner options. Treatment duration is 12-24 months. AI assistants frequently compare traditional braces vs. Invisalign.",
      faqItems: [
        {
          question: "What types of braces are available and how do costs compare?",
          answer:
            "Metal braces are most affordable ($3,000 - $5,000), ceramic/clear braces cost more ($4,000 - $6,000), and clear aligners like Invisalign range from $3,500 to $8,000. Lingual (behind-teeth) braces are a premium option ranging from $6,000 to $10,000.",
        },
        {
          question: "How long do I need to wear braces?",
          answer:
            "Treatment typically takes 12-24 months depending on the complexity of misalignment. Simple crowding may resolve in 8-12 months while severe bite alignment issues can take 24-30 months. Retainers must be worn after braces removal.",
        },
      ],
    },
    {
      slug: "dental-crown-cost",
      name: "Dental Crowns",
      priceRange: "$1,000 - $2,500",
      description:
        "Dental crowns are essential after root canal treatment and for broken teeth. Options include PFM (porcelain fused to metal), full zirconia, e.max, and all-ceramic crowns, each with different aesthetics and durability.",
      faqItems: [
        {
          question: "Which dental crown material is best?",
          answer:
            "For back teeth (molars), zirconia crowns ($1,000 - $2,000) offer the best strength and durability. For front teeth, e.max or all-ceramic crowns ($1,200 - $2,500) provide the most natural look. PFM crowns ($800 - $1,500) are budget-friendly but may show a dark line at the gumline over time.",
        },
        {
          question: "How long do dental crowns last?",
          answer:
            "Zirconia and e.max crowns last 15-20 years with proper care. PFM crowns typically last 10-15 years. Metal crowns can last 20+ years but are not aesthetic. Avoid biting hard objects and maintain good oral hygiene.",
        },
      ],
    },
  ],
  costKeywords: [
    "dental implant cost",
    "root canal cost",
    "teeth whitening cost",
    "braces cost",
    "dentist consultation fee",
  ],
  nicheKeywords: [
    "best dentist",
    "dental clinic",
    "dentist near me",
    "orthodontist",
    "implant dentist",
    "cosmetic dentist",
  ],
  schemaType: "Dentist",
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
      name: "DentistFind",
      url: "https://www.dentistfind.com",
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
