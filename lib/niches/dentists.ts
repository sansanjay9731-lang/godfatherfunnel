import type { NicheData } from "./types";
import { images } from "./images";

export const nicheData: NicheData = {
  slug: "dentists",
  name: "Dentists",
  icon: "🦷",
  image: images.dentist,
  heroHeadline: "Patients Are Asking AI for Dentists. Are You the Answer?",
  heroSubline:
    "When someone asks ChatGPT 'best dentist for implants near me,' only 3 clinics get recommended. If your practice isn't optimized for AI, you're losing $50K-200k implant patients every month.",
  searchExample: "best dentist for implants in Sydney",
  competitorLine:
    "Clove Dental is currently AI-recommended over your practice",
  painPoints: [
    {
      title: "$2,000 Implant Patients Going Elsewhere",
      description:
        "Full-mouth dental implants cost $50K-200k per patient. These high-value patients now ask AI assistants for recommendations before calling any clinic. If AI doesn't mention you, they book with the clinic it does recommend.",
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
      price: "$50,000 - $150,000",
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
      price: "$150,000 - $4,000",
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
    value: "$50,000 - $2,000",
    pitch:
      "A single dental implant patient is worth $30K-200k. Full-mouth rehabilitation can go up to $5,000+. Our AEO Foundation package pays for itself with just ONE new implant patient per month.",
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
    { label: "Avg. Implant Patient Value", value: "$1,000" },
    { label: "AI Visibility Improvement", value: "290%" },
  ],
  ctaText: "Get Your Free Dental AI Visibility Report",
  treatments: [
    {
      slug: "dental-implant-cost",
      name: "Dental Implants",
      priceRange: "$30,000 - $2,000",
      description:
        "Dental implants are the highest-value procedure in dentistry, and patients extensively research costs using AI before choosing a clinic. Prices vary based on implant brand (Korean, European, Nobel Biocare), bone grafting needs, and whether it's a single implant or full-mouth rehabilitation.",
      faqItems: [
        {
          question: "Why do dental implant costs vary so much globally?",
          answer:
            "The biggest cost factor is the implant brand — Korean implants ($30K-50K) vs. European brands like Straumann or Nobel Biocare ($80K-200k). Additional factors include bone grafting ($10K-30K extra), sinus lift if needed, and the type of crown (zirconia vs. PFM). Multi-speciality hospitals charge more than standalone clinics.",
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
      priceRange: "$3,000 - $15,000",
      description:
        "Root canal treatment (RCT) is one of the most common dental procedures globally. Patients often ask AI about costs, pain levels, and whether to save vs. extract a tooth. Price depends on the tooth (front vs. molar), number of canals, and whether a microscope is used.",
      faqItems: [
        {
          question: "How much does a root canal cost for a molar tooth?",
          answer:
            "Molar root canals cost $1k-3k due to having 3-4 canals (vs. 1-2 for front teeth at $3K-7K). Using a dental microscope adds $2K-5K but improves success rates. The crown after RCT costs $3K-20K additional depending on material (PFM, zirconia, or e.max).",
        },
        {
          question: "Is root canal treatment painful?",
          answer:
            "Modern root canals are virtually painless thanks to effective local anesthesia. The procedure takes 30-60 minutes per sitting (1-2 sittings needed). Post-treatment sensitivity for 2-3 days is normal and managed with over-the-counter painkillers.",
        },
      ],
    },
    {
      slug: "teeth-whitening-cost",
      name: "Teeth Whitening",
      priceRange: "$5,000 - $25,000",
      description:
        "Professional teeth whitening is a high-demand cosmetic dental procedure globally, especially before weddings and events. AI assistants commonly recommend in-office whitening over DIY kits. Options include ZOOM whitening, laser whitening, and custom take-home trays.",
      faqItems: [
        {
          question: "How long does professional teeth whitening last?",
          answer:
            "In-office whitening results last 6 months to 2 years depending on diet and habits. Coffee, tea, and tobacco stain teeth faster. Using take-home maintenance trays ($3K-5K) extends results. Most patients need a touch-up session every 6-12 months.",
        },
        {
          question: "Is teeth whitening safe for Global patients?",
          answer:
            "Professional whitening supervised by a dentist is completely safe. Dentists use controlled concentrations of hydrogen peroxide (25-40%) with gum protection. Temporary sensitivity for 24-48 hours is normal. Avoid salon or parlour whitening — unregulated products can damage enamel.",
        },
        {
          question: "What is the difference between ZOOM and laser whitening?",
          answer:
            "ZOOM whitening ($10K-20K) uses a special LED light to activate the whitening gel over 3-4 15-minute sessions in one visit. Laser whitening ($15K-25K) uses a diode laser for faster activation. Both achieve 5-8 shade improvement. ZOOM is more widely available and slightly more affordable.",
        },
      ],
    },
    {
      slug: "braces-cost",
      name: "Dental Braces",
      priceRange: "$25,000 - $80,000",
      description:
        "Orthodontic braces are one of the most researched dental treatments on AI platforms, with patients comparing metal, ceramic, and clear aligner options. Treatment duration is 12-24 months. AI assistants frequently compare traditional braces vs. Invisalign for Global patients.",
      faqItems: [
        {
          question: "What types of braces are available and how do costs compare?",
          answer:
            "Metal braces are most affordable ($25K-40K), ceramic/tooth-colored braces cost more ($35K-55K), lingual (behind-teeth) braces are premium ($50K-80K), and clear aligners like Invisalign range from $1,000-300k. For most Global patients, ceramic braces offer the best balance of aesthetics and affordability.",
        },
        {
          question: "How long do I need to wear braces?",
          answer:
            "Treatment typically takes 12-24 months depending on the complexity of misalignment. Simple crowding may resolve in 8-12 months while severe malocclusion can take 24-30 months. Regular monthly adjustments ($500-1K per visit) are needed throughout treatment. Retainers must be worn after braces removal.",
        },
      ],
    },
    {
      slug: "dental-crown-cost",
      name: "Dental Crowns",
      priceRange: "$3,000 - $20,000",
      description:
        "Dental crowns are essential after root canal treatment and for damaged teeth. Patients frequently ask AI about crown materials and pricing. Options include PFM (porcelain fused to metal), full zirconia, e.max, and all-ceramic crowns, each with different aesthetics and durability.",
      faqItems: [
        {
          question: "Which dental crown material is best?",
          answer:
            "For back teeth (molars), zirconia crowns ($8K-15K) offer the best strength and durability. For front teeth, e.max or all-ceramic crowns ($10K-20K) provide the most natural look. PFM crowns ($3K-8K) are budget-friendly but may show a metal line at the gum over time. Your dentist will recommend based on tooth location.",
        },
        {
          question: "How long do dental crowns last?",
          answer:
            "Zirconia and e.max crowns last 15-20 years with proper care. PFM crowns typically last 10-15 years. Metal crowns ($2K-5K) can last 20+ years but are not aesthetic. Avoid biting hard objects and maintain good oral hygiene. Regular dental checkups help detect crown issues early.",
        },
        {
          question: "Is getting a dental crown painful?",
          answer:
            "The procedure is done under local anesthesia and is painless. Tooth preparation takes 30-45 minutes, impressions are taken, and a temporary crown is placed. The permanent crown is fitted in the second visit (5-7 days later). Mild sensitivity for a few days after cementation is normal.",
        },
      ],
    },
    {
      slug: "wisdom-tooth-removal-cost",
      name: "Wisdom Tooth Removal",
      priceRange: "$2,000 - $10,000",
      description:
        "Wisdom tooth extraction is one of the most common dental surgeries globally, especially for impacted third molars. Patients frequently search AI for cost, pain, recovery, and whether extraction is truly necessary. Simple extractions cost less while surgical removal of impacted teeth costs more.",
      faqItems: [
        {
          question: "How much does impacted wisdom tooth removal cost?",
          answer:
            "Simple extraction costs $2K-4K while surgical removal of impacted wisdom teeth costs $5K-10K per tooth. If done under IV sedation or general anesthesia (for anxious patients or multiple teeth), add $1k-3k. Hospital-based extractions cost more than clinic-based procedures.",
        },
        {
          question: "How long is recovery after wisdom tooth removal?",
          answer:
            "Swelling and discomfort peak on days 2-3 and resolve within 5-7 days. Soft diet is recommended for 3-5 days. Most patients return to work in 2-3 days. Complete bone healing of the socket takes 4-6 weeks. Follow your dentist's post-operative instructions carefully to avoid dry socket.",
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
      url: "https://www.practo.com",
      type: "niche-specific",
    },
    {
      name: "Healthgrades",
      url: "https://www.lybrate.com",
      type: "niche-specific",
    },
    {
      name: "DentistFind",
      url: "https://www.dentistfind.com",
      type: "niche-specific",
    },
    {
      name: "Yelp",
      url: "https://www.justdial.com",
      type: "local",
    },
    {
      name: "Google Business Profile",
      url: "https://business.google.com",
      type: "general",
    },
  ],
};
