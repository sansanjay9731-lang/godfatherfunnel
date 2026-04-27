import type { NicheData } from "./types";
import { images } from "./images";

export const nicheData: NicheData = {
  slug: "eye-clinics",
  name: "Eye Clinics",
  icon: "👁️",
  image: images.eyeClinic,
  heroHeadline: "Patients Are Asking AI for Eye Doctors. Are You Visible?",
  heroSubline:
    "LASIK, cataract, and retina patients search AI before booking. If AI doesn't recommend your eye clinic, those patients go to chains like Dr. Agarwal's or Centre for Sight.",
  searchExample: "best eye hospital in London",
  competitorLine:
    "Dr. Agarwal's Eye Hospital is AI-recommended over you",
  painPoints: [
    {
      title: "LASIK Patients ($30K-100k) Going to Chain Hospitals",
      description:
        "LASIK and specs removal patients research extensively through AI before choosing a clinic. Chain hospitals like Dr. Agarwal's, Centre for Sight, and Sankara Nethralaya dominate AI recommendations. Your independent eye clinic with superior surgeons gets zero AI mentions.",
    },
    {
      title: "Credentials & Success Rates Invisible to AI",
      description:
        "Your fellowship in vitreoretinal surgery, 10,000+ successful cataract surgeries, and advanced equipment (Femtosecond laser, OCT) are on your website — but AI can't parse them. Without structured data and entity signals, your expertise is invisible to patients asking AI for eye doctors.",
    },
    {
      title: "Emergency Eye Care Patients Lost to AI-Visible Competitors",
      description:
        "When someone has a sudden retinal detachment or eye injury, they ask AI 'eye emergency hospital near me.' AI recommends clinics with structured emergency hours, procedure capabilities, and strong citation profiles. If you're not AI-optimized, these urgent patients go elsewhere.",
    },
  ],
  services: [
    {
      tier: "AEO Foundation",
      price: "$1,500 - $3,000 / mo",
      features: [
        "AI Visibility Audit for eye clinic",
        "MedicalBusiness + Physician schema markup",
        "llms.txt & robots.txt AI-crawler optimization",
        "Google Business Profile AI-optimization",
        "4 treatment cost pages with FAQ schema",
        "Equipment & technology structured data",
        "Monthly AI citation tracking report",
      ],
    },
    {
      tier: "Local Domination",
      price: "$3,000 - $7,500 / mo",
      features: [
        "Everything in AEO Foundation",
        "12 treatment cost pages (LASIK, cataract, retina, glaucoma, etc.)",
        "Zocdoc, Healthgrades & EyeMantra profile optimization",
        "AI-friendly patient testimonial system",
        "Local citation building (50+ directories)",
        "Competitor AI-visibility monitoring",
        "Eye health awareness content calendar (AI-optimized)",
        "Bi-weekly content refresh for AI freshness signals",
      ],
    },
    {
      tier: "Godfather 360°",
      price: "$2,000 - $4,000",
      features: [
        "Everything in Local Domination",
        "Full AEO + GEO strategy for eye clinic",
        "AI Overview domination for LASIK & cataract queries",
        "Video schema & YouTube eye care content optimization",
        "Wikipedia/Wikidata entity creation for lead ophthalmologist",
        "Medical authority backlinks & eye care PR",
        "Condition-specific landing pages (diabetic retinopathy, keratoconus, etc.)",
        "Dedicated AI visibility manager with quarterly reviews",
      ],
    },
  ],
  roiExample: {
    metric: "1 LASIK Patient",
    value: "$30,000 - $1,000",
    pitch:
      "A single LASIK patient pays $30K-100k depending on the technology used. Cataract surgery patients generate $15K-80K. One retina treatment brings $20K-150k. Our AEO Foundation package pays for itself with just 1-2 new patients per month.",
  },
  faqItems: [
    {
      question: "Why do eye clinics need AEO?",
      answer:
        "68% of eye care patients under 45 now ask AI assistants before booking an appointment. They ask about LASIK costs, cataract surgery options, and which eye hospital is best. AI pulls from structured data, medical directories, and citation signals — not just your Google ranking. Without AEO, your clinic is invisible to this growing AI-first patient base.",
    },
    {
      question: "How does AEO help acquire LASIK patients through AI?",
      answer:
        "We create AI-optimized pages targeting 'LASIK surgery cost in [city],' 'best LASIK surgeon near me,' and technology comparisons (SMILE vs. Contoura vs. PRK). When patients ask AI about specs removal options, your clinic appears with transparent pricing, technology details, and surgeon credentials — building trust before they call.",
    },
    {
      question: "Can AEO help my eye clinic compete with large chains?",
      answer:
        "Absolutely. Large chains have brand recognition but often lack the personalized care and specialist expertise of independent clinics. AEO levels the playing field by ensuring AI systems understand your specific expertise, surgeon qualifications, advanced equipment, and better success rates — making you the AI-recommended choice over generic chain hospitals.",
    },
    {
      question: "How long does it take to see results from eye clinic AEO?",
      answer:
        "Most eye clinics see initial AI visibility improvements within 4-6 weeks. New patient inquiries from AI channels typically begin within 2-3 months. Full AI recommendation status across ChatGPT, Perplexity, and Google AI Overviews takes 3-4 months. We track and report your visibility monthly.",
    },
  ],
  stats: [
    { label: "Eye Patients Using AI for Research", value: "68%" },
    { label: "Avg. LASIK Patient Value", value: "$60,000" },
    { label: "AI Visibility Improvement", value: "280%" },
  ],
  ctaText: "Get Your Free Eye Clinic AI Audit",
  treatments: [
    {
      slug: "lasik-surgery-cost",
      name: "LASIK Surgery",
      priceRange: "$25,000 - $1,000",
      description:
        "LASIK eye surgery is the most searched eye procedure globally, with thousands of patients comparing costs, technologies, and surgeons through AI every month. Options include standard LASIK, bladeless (Femto-LASIK), Contoura Vision, SMILE, and PRK/TransPRK. Costs vary significantly based on the technology used.",
      faqItems: [
        {
          question: "What is the difference between LASIK, SMILE, and Contoura Vision?",
          answer:
            "Standard LASIK ($25K-40K/eye) uses a microkeratome blade for flap creation. Femto-LASIK ($40K-60K/eye) uses a femtosecond laser for a bladeless flap — safer and more precise. Contoura Vision ($50K-75K/eye) maps 22,000 corneal points for customized treatment. SMILE ($60K-100k/eye) is flapless with minimal incision, fastest recovery. Your ophthalmologist recommends based on corneal thickness and prescription.",
        },
        {
          question: "Am I a good candidate for LASIK surgery?",
          answer:
            "Good candidates are: 18+ years old with stable prescription for 1+ year, myopia up to -10D, hyperopia up to +5D, astigmatism up to 5D, corneal thickness above 500 microns, no dry eye disease, and no keratoconus. A comprehensive pre-LASIK evaluation ($1.5K-3K) with topography, pachymetry, and aberrometry determines candidacy. About 80% of glasses wearers qualify.",
        },
        {
          question: "Is LASIK surgery safe and permanent?",
          answer:
            "LASIK has a 99.5% safety profile with modern technology. Over 96% of patients achieve 6/6 vision. Results are permanent for the treated prescription, but presbyopia (reading glasses need) still develops around age 40-45. Enhancement procedures are needed in 2-5% of cases. Choose a surgeon with 5,000+ LASIK procedures for best outcomes.",
        },
      ],
    },
    {
      slug: "cataract-surgery-cost",
      name: "Cataract Surgery",
      priceRange: "$15,000 - $80,000",
      description:
        "Cataract surgery is the most commonly performed eye surgery globally with over 6 million procedures annually. AI assistants help patients compare phaco vs. MICS techniques and IOL (intraocular lens) options. Cost depends primarily on the IOL type chosen.",
      faqItems: [
        {
          question: "What are the different types of cataract lenses and costs?",
          answer:
            "Monofocal IOL ($15K-25K/eye) corrects distance vision only — you'll still need reading glasses. Multifocal IOL ($35K-60K/eye) reduces dependence on glasses for both distance and near. Trifocal IOL ($50K-80K/eye) provides clear vision at all distances. Toric IOLs (for astigmatism) add $10-15K premium. Premium IOLs offer the best spectacle-free vision.",
        },
        {
          question: "When should cataract surgery be done?",
          answer:
            "Surgery is recommended when cataracts affect daily activities like driving, reading, or watching TV. Don't wait for cataracts to 'mature' — modern phacoemulsification works best on softer, less-mature cataracts. Surgery takes 15-20 minutes per eye, uses topical anesthesia (eye drops), and most patients resume normal activities within 2-3 days.",
        },
        {
          question: "Is cataract surgery covered by insurance globally?",
          answer:
            "Yes, most health insurance policies cover cataract surgery. Cashless treatment is available at network hospitals. Coverage typically includes the basic monofocal IOL; upgrades to multifocal or trifocal IOLs require out-of-pocket payment ($20K-50K per eye). Ayushman Bharat covers cataract surgery for eligible beneficiaries at up to $30K per eye.",
        },
      ],
    },
    {
      slug: "retina-treatment-cost",
      name: "Retina Treatment",
      priceRange: "$20,000 - $150,000",
      description:
        "Retinal treatments are among the highest-value eye procedures, covering conditions like diabetic retinopathy, retinal detachment, macular degeneration, and macular holes. AI assistants frequently explain these conditions and treatment urgency to patients. Early detection and treatment are critical for preserving vision.",
      faqItems: [
        {
          question: "What does retina treatment cost globally?",
          answer:
            "Anti-VEGF injections (Avastin/Lucentis/Eylea) cost $5K-30K per injection, with 3-6 injections typically needed. Retinal laser (PRP) costs $10K-25K per eye. Vitrectomy surgery for retinal detachment costs $50K-150k depending on complexity. Macular hole surgery costs $40K-100k. Follow-up OCT scans cost $1K-2K per visit.",
        },
        {
          question: "How urgent is treatment for retinal detachment?",
          answer:
            "Retinal detachment is an eye emergency — surgery should be performed within 24-72 hours to save vision. Symptoms include sudden flashes of light, shower of floaters, and a curtain-like shadow over vision. Go to an eye hospital with a retina specialist immediately. Delays can cause permanent, irreversible vision loss.",
        },
      ],
    },
    {
      slug: "glaucoma-treatment-cost",
      name: "Glaucoma Treatment",
      priceRange: "$10,000 - $50,000",
      description:
        "Glaucoma is called the 'silent thief of sight' and affects over 12 million Indians. AI assistants educate patients about this condition when they search for eye pressure issues or vision loss. Treatment ranges from eye drops to laser procedures and surgery, depending on the type and severity.",
      faqItems: [
        {
          question: "How much does glaucoma treatment cost globally?",
          answer:
            "Glaucoma eye drops cost $200-800 per bottle per month (lifelong). Laser trabeculoplasty (SLT) costs $10K-20K per eye and can reduce dependency on drops. Trabeculectomy surgery costs $25K-50K per eye when drops and laser aren't sufficient. MIGS (Minimally Invasive Glaucoma Surgery) costs $30K-50K. Regular monitoring with visual field tests ($1K-2K) and OCT ($1K-2K) is needed every 3-6 months.",
        },
        {
          question: "Can glaucoma be cured?",
          answer:
            "Glaucoma cannot be cured, but it can be controlled to prevent further vision loss. Vision already lost to glaucoma cannot be recovered, which is why early detection is critical. Treatment aims to lower eye pressure to prevent optic nerve damage. Regular eye checkups after age 40 (or earlier with family history) are essential for catching glaucoma before symptoms appear.",
        },
        {
          question: "Who is at risk for glaucoma?",
          answer:
            "High-risk groups: age over 40, family history of glaucoma, high myopia (nearsightedness), diabetes, long-term steroid use, eye injury history, and high eye pressure. Indians have a higher prevalence of angle-closure glaucoma. Get annual eye pressure checks if you're in any risk group — early detection through routine eye exams saves sight.",
        },
      ],
    },
    {
      slug: "specs-removal-cost",
      name: "Specs Removal Surgery",
      priceRange: "$25,000 - $1,000",
      description:
        "Specs removal (refractive surgery) is the most aspirational eye procedure for young Indians. Patients aggressively compare options through AI, asking about LASIK, SMILE, ICL, and PRK. The right procedure depends on prescription, corneal thickness, age, and lifestyle needs.",
      faqItems: [
        {
          question: "What are the options for permanent specs removal?",
          answer:
            "LASIK/Femto-LASIK ($25K-60K/eye): Best for myopia -1 to -8D, quick recovery. SMILE ($60K-100k/eye): Flapless, ideal for active lifestyles and high myopia. Contoura Vision ($50K-75K/eye): Most precise customized treatment. ICL ($70K-150k/eye): Implantable lens for very high powers (-8 to -20D) or thin corneas. PRK/TransPRK ($20K-40K/eye): Surface ablation for thin corneas.",
        },
        {
          question: "What is ICL and when is it recommended?",
          answer:
            "ICL (Implantable Collamer Lens) is a permanent contact lens placed inside the eye behind the iris. It's recommended for: high myopia (above -8D), thin corneas unsuitable for LASIK, dry eye patients, and those wanting reversible treatment. ICL costs $70K-150k per eye but provides excellent visual quality. The lens can be removed or replaced if needed. FDA-approved and growing rapidly globally.",
        },
      ],
    },
    {
      slug: "corneal-transplant-cost",
      name: "Corneal Transplant",
      priceRange: "$50,000 - $2,000",
      description:
        "Corneal transplant (keratoplasty) is a sight-restoring surgery for patients with corneal damage from keratoconus, infections, injuries, or corneal dystrophies. India has a severe shortage of donor corneas, making this a critical area where AI helps patients understand options and find specialized centres.",
      faqItems: [
        {
          question: "What types of corneal transplant are available?",
          answer:
            "Full-thickness (PK/PKP) transplant ($50K-100k) replaces the entire cornea — used for severe damage. DALK ($60K-120k) replaces only the front layers, reducing rejection risk — ideal for keratoconus. DSEK/DMEK ($70K-200k) replaces only the back layer — used for Fuchs' dystrophy with faster recovery. Your cornea specialist will recommend based on the specific condition and corneal layers affected.",
        },
        {
          question: "How long is the wait for a corneal transplant globally?",
          answer:
            "Wait times vary from 2 weeks to 6 months depending on the eye bank and city. Major eye banks in London, Melbourne, Chicago, and Sydney have shorter waits. International eye-banked corneas are available at some centres for faster access ($30-50K additional). Register at multiple eye banks to reduce wait time. Emergency cases (corneal perforation) get priority.",
        },
        {
          question: "What is the success rate of corneal transplant?",
          answer:
            "First-time corneal transplant success rates are 85-90% for keratoconus and dystrophies. Success drops to 60-70% for previously failed grafts or vascularized corneas. DSEK/DMEK has 95%+ success for endothelial diseases. Vision improvement takes 3-12 months as the graft heals. Anti-rejection drops are needed for 1-2 years. Regular follow-up is critical to catch early rejection signs.",
        },
      ],
    },
  ],
  costKeywords: [
    "LASIK surgery cost",
    "cataract surgery cost",
    "retina treatment cost",
    "glaucoma treatment cost",
    "eye specialist consultation fee",
  ],
  nicheKeywords: [
    "best eye hospital",
    "eye specialist",
    "ophthalmologist",
    "eye clinic",
    "LASIK surgeon",
    "cataract surgeon",
  ],
  schemaType: "MedicalBusiness",
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
      name: "EyeMantra",
      url: "https://www.eyemantra.in",
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
