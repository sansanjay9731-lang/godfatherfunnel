import type { NicheData } from "./types";
import { images } from "./images";

export const nicheData: NicheData = {
  slug: "orthopedics",
  name: "Orthopedics",
  icon: "🦴",
  image: images.orthopedics,
  heroHeadline: "Joint Pain Patients Ask AI First. Does AI Know Your Clinic?",
  heroSubline:
    "Every month, thousands of knee replacement, spine surgery, and sports injury patients ask ChatGPT and Google AI for the best orthopedic surgeon near them. If your clinic isn't in those answers, you're losing $2-500k procedures to hospital chains.",
  painPoints: [
    {
      title: "$2-500k Knee Replacement Patients Lost to Chains",
      description:
        "Patients researching knee replacement surgery ask AI for recommendations. Fortis, Apollo, and Max dominate those answers — your 20+ years of experience and 5,000+ successful surgeries are invisible to AI.",
    },
    {
      title: "Sports Injury Patients Choosing Hospital Brands",
      description:
        "Young athletes and weekend warriors with ACL tears, rotator cuff injuries, and fractures are choosing chain hospitals because AI recommends them first. Your arthroscopy expertise never shows up.",
    },
    {
      title: "Your Credentials Are Invisible to AI",
      description:
        "Your MS Ortho, fellowship training abroad, and conference presentations mean nothing if AI can't find structured data about your specializations, success rates, and patient outcomes.",
    },
  ],
  services: [
    {
      tier: "AI Foundation",
      price: "$25,000 - $50,000",
      features: [
        "Google Business Profile optimization for orthopedic keywords",
        "Structured schema markup for MedicalBusiness + Physician",
        "Citation building on Practo, Lybrate, and Credihealth",
        "AI-optimized content for top 10 orthopedic procedures",
        "Monthly AI visibility audit report",
      ],
    },
    {
      tier: "AI Growth",
      price: "$75,000 - $1,50,000",
      features: [
        "Everything in AI Foundation",
        "Full AEO (Answer Engine Optimization) for 30+ procedure keywords",
        "Video content strategy for YouTube and AI training data",
        "Patient testimonial schema and review aggregation",
        "Competitor displacement strategy against Fortis/Apollo",
        "Quarterly AI performance benchmarking",
      ],
    },
    {
      tier: "AI Dominance",
      price: "$2,00,000 - $4,00,000",
      features: [
        "Everything in AI Growth",
        "Full website rebuild optimized for AI crawlers",
        "llms.txt implementation with procedure-level detail",
        "Medical journal citation building and digital PR",
        "AI chatbot training data optimization",
        "Dedicated AI visibility manager",
        "Real-time AI mention monitoring across ChatGPT, Perplexity, Gemini",
      ],
    },
  ],
  roiExample: {
    metric: "1 Knee Replacement",
    value: "$2-500k",
    pitch:
      "A single knee replacement surgery covers 4-20 months of your AI visibility investment. Most orthopedic clinics see 3-5 additional high-value patients per month within 90 days.",
  },
  faqItems: [
    {
      question: "How does AI recommend orthopedic surgeons to patients?",
      answer:
        "AI models like ChatGPT and Google Gemini pull from structured data on your website, medical directories like Practo and Lybrate, patient reviews, and published medical content. If your clinic lacks structured schema markup and citations on these platforms, AI literally cannot recommend you — even if you're the best surgeon in your city.",
    },
    {
      question: "How long before I see more patients from AI recommendations?",
      answer:
        "Most orthopedic clinics see measurable improvement within 60-90 days. Citation building and schema markup start working within 30 days, while content optimization and AEO strategies compound over 2-3 months. High-value procedures like joint replacements typically show ROI within the first quarter.",
    },
    {
      question: "I already have a good Google ranking. Do I still need this?",
      answer:
        "Google ranking and AI recommendation are completely different systems. We've seen surgeons who rank #1 on Google but don't appear in ChatGPT or Perplexity answers at all. AI pulls from different data sources and uses different ranking signals than traditional SEO. You need both.",
    },
    {
      question: "Can you help me outrank Fortis and Apollo in AI answers?",
      answer:
        "Yes. Large hospital chains have brand recognition but often lack procedure-specific, surgeon-specific structured data. An independent orthopedic surgeon with proper AEO can absolutely displace chain hospitals in AI recommendations for specific procedures and locations.",
    },
  ],
  stats: [
    { label: "of joint replacement patients research online first", value: "78%" },
    { label: "ask AI for doctor recommendations before booking", value: "43%" },
    { label: "average value of a single knee replacement patient", value: "$350k" },
  ],
  ctaText: "Get Your Free Orthopedic AI Visibility Audit",
  searchExample: "best orthopedic surgeon in New York",
  competitorLine:
    "Fortis and Apollo Ortho are dominating AI recommendations — while your 20+ years of surgical expertise stays invisible to the patients who need you most.",
  treatments: [
    {
      slug: "knee-replacement-cost",
      name: "Knee Replacement Surgery",
      priceRange: "$1,50,000 - $5,00,000",
      description:
        "Total and partial knee replacement surgery for patients with severe osteoarthritis, rheumatoid arthritis, or post-traumatic joint damage. Includes pre-op assessment, implant selection, surgery, and post-op rehabilitation.",
      faqItems: [
        {
          question: "What is the average cost of knee replacement surgery globally?",
          answer:
            "Knee replacement surgery globally costs between $150k and $500k depending on the city, hospital type, implant brand (imported vs domestic), and whether it's a total or partial replacement. Metro cities like New York and London tend to be 20-30% higher than tier-2 cities.",
        },
        {
          question: "How long is the recovery after knee replacement?",
          answer:
            "Most patients can walk with support within 2-3 days after surgery. Full recovery takes 3-6 months with regular physiotherapy. You can return to desk work in 4-6 weeks and light physical activity in 3 months.",
        },
        {
          question: "Is robotic knee replacement worth the extra cost?",
          answer:
            "Robotic-assisted knee replacement costs $50K-150k more but offers greater precision in implant alignment, potentially faster recovery, and better long-term outcomes. It's especially beneficial for younger, active patients.",
        },
      ],
    },
    {
      slug: "hip-replacement-cost",
      name: "Hip Replacement Surgery",
      priceRange: "$2,00,000 - $6,00,000",
      description:
        "Total hip replacement (arthroplasty) for patients with hip arthritis, avascular necrosis, or hip fractures. Includes ceramic, metal, and polyethylene implant options with minimally invasive surgical techniques.",
      faqItems: [
        {
          question: "What is the cost of hip replacement surgery globally?",
          answer:
            "Hip replacement surgery globally ranges from $200k to $600k. The cost varies based on implant material (ceramic-on-ceramic is premium), surgical approach (anterior vs posterior), hospital category, and city. Bilateral hip replacement costs approximately 1.7x a single procedure.",
        },
        {
          question: "How long do hip replacement implants last?",
          answer:
            "Modern hip implants last 20-25 years on average. Ceramic implants can last 30+ years. Your surgeon will recommend the best implant type based on your age, activity level, and bone quality.",
        },
      ],
    },
    {
      slug: "spine-surgery-cost",
      name: "Spine Surgery",
      priceRange: "$2,50,000 - $8,00,000",
      description:
        "Comprehensive spine surgery including discectomy, laminectomy, spinal fusion, and disc replacement for conditions like herniated discs, spinal stenosis, spondylolisthesis, and spinal cord compression.",
      faqItems: [
        {
          question: "What is the cost of spine surgery globally?",
          answer:
            "Spine surgery globally costs between $250k and $800k depending on the procedure type. A simple microdiscectomy costs $2.5-350k, while complex spinal fusion with instrumentation can cost $5-800k. Endoscopic procedures are typically 20% cheaper.",
        },
        {
          question: "When is spine surgery necessary vs physiotherapy?",
          answer:
            "Surgery is recommended when conservative treatment (physiotherapy, medication, injections) fails after 6-12 weeks, or in emergencies like cauda equina syndrome. About 80% of back pain cases resolve with non-surgical treatment. Your orthopedic surgeon will guide the decision based on MRI findings and symptom severity.",
        },
        {
          question: "What is the success rate of spine surgery?",
          answer:
            "Success rates vary by procedure: microdiscectomy has 85-95% success, spinal fusion 70-90%, and disc replacement 85-90%. Success depends on proper patient selection, surgeon expertise, and post-operative rehabilitation compliance.",
        },
      ],
    },
    {
      slug: "acl-surgery-cost",
      name: "ACL Reconstruction Surgery",
      priceRange: "$1,00,000 - $3,00,000",
      description:
        "Arthroscopic ACL reconstruction using hamstring or patellar tendon graft for athletes and active individuals with complete ACL tears. Includes pre-op conditioning, surgery, and structured sports rehabilitation program.",
      faqItems: [
        {
          question: "What is the cost of ACL surgery globally?",
          answer:
            "ACL reconstruction surgery globally costs between $100k and $300k. The cost includes arthroscopic surgery, graft preparation, implants (titanium screws/endobuttons), hospital stay (2-3 days), and initial rehabilitation. Using allograft (donor tissue) costs $50K-100k more.",
        },
        {
          question: "How long before I can play sports after ACL surgery?",
          answer:
            "Return to sports typically takes 9-12 months. You'll begin walking in 1-2 weeks, light jogging at 4-5 months, and sport-specific training at 6-8 months. Full competitive sports clearance requires passing functional tests at 9-12 months post-surgery.",
        },
      ],
    },
    {
      slug: "fracture-treatment-cost",
      name: "Fracture Treatment & Fixation",
      priceRange: "$20,000 - $2,50,000",
      description:
        "Complete fracture management including closed reduction with casting, open reduction internal fixation (ORIF) with plates and screws, intramedullary nailing, and external fixation for all types of fractures.",
      faqItems: [
        {
          question: "What is the cost of fracture treatment globally?",
          answer:
            "Simple fractures treated with casting cost $5K-20K. Surgical fixation (ORIF) costs $50K-250k depending on the bone, fracture complexity, and implant type. Femur fractures requiring intramedullary nailing cost $1.5-250k, while wrist fractures with plating cost $50K-100k.",
        },
        {
          question: "How do I know if my fracture needs surgery?",
          answer:
            "Surgery is needed for displaced fractures, open fractures, fractures involving joints, fractures that won't heal with casting alone, and multiple fractures. Your orthopedic surgeon will evaluate X-rays and CT scans to determine the best treatment approach.",
        },
        {
          question: "Will the plates and screws need to be removed later?",
          answer:
            "Modern titanium implants can be left permanently in most cases. Removal is considered after 12-18 months if the implant causes discomfort, is in a weight-bearing area, or in young patients. Implant removal costs $30K-80K.",
        },
      ],
    },
    {
      slug: "arthroscopy-cost",
      name: "Arthroscopy (Keyhole Surgery)",
      priceRange: "$60,000 - $2,00,000",
      description:
        "Minimally invasive arthroscopic surgery for knee, shoulder, ankle, and hip joints. Used for meniscus repair, cartilage restoration, rotator cuff repair, loose body removal, and diagnostic evaluation.",
      faqItems: [
        {
          question: "What is the cost of arthroscopy globally?",
          answer:
            "Knee arthroscopy costs $60K-150k, shoulder arthroscopy $80K-200k, and hip arthroscopy $1-200k. Diagnostic arthroscopy alone costs $40K-60K. The cost depends on whether it's a diagnostic or therapeutic procedure and the complexity of repair needed.",
        },
        {
          question: "What is the recovery time after arthroscopy?",
          answer:
            "Arthroscopy recovery is much faster than open surgery. Most patients go home the same day, walk within 1-2 days, and return to desk work in 1-2 weeks. Full recovery for sports takes 6-12 weeks for meniscus repair and 4-6 months for rotator cuff repair.",
        },
      ],
    },
  ],
  costKeywords: [
    "knee replacement cost India",
    "orthopedic surgeon fees",
    "hip replacement surgery price",
    "ACL surgery cost in New York",
    "spine surgery cost India",
  ],
  nicheKeywords: [
    "best orthopedic surgeon near me",
    "joint replacement specialist India",
    "sports injury doctor",
    "knee pain treatment",
    "spine specialist near me",
    "orthopedic hospital in New York",
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
      name: "Credihealth",
      url: "https://www.credihealth.com",
      type: "niche-specific",
    },
    {
      name: "Justdial",
      url: "https://www.justdial.com",
      type: "general",
    },
    {
      name: "Google Business Profile",
      url: "https://business.google.com",
      type: "local",
    },
  ],
};
