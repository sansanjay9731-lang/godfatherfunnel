import type { NicheData } from "./types";
import { images } from "./images";

export const nicheData: NicheData = {
  slug: "veterinary",
  name: "Veterinary Clinics",
  icon: "🐾",
  image: images.veterinary,
  heroHeadline: "Pet Parents Ask AI for Vets. Is Your Clinic AI-Recommended?",
  heroSubline:
    "India's 30 million+ pet parents are asking ChatGPT and Google AI to find the best vet near them. If your clinic doesn't show up in those AI answers, emergency visits, vaccinations, and wellness plans are going to Cessna Lifeline and chain vet hospitals.",
  painPoints: [
    {
      title: "Pet Parents Asking ChatGPT for Vet Recommendations",
      description:
        "When a pet owner's dog is limping or cat stops eating, they ask AI first. Chain clinics like Cessna Lifeline and Mars Petcare hospitals dominate AI answers — your 15+ years of compassionate care and thousands of happy pet families are invisible.",
    },
    {
      title: "Emergency Vet Visits Going to Chain Hospitals",
      description:
        "Emergency cases are the highest-value visits ($5,000-50,000+). When panicked pet parents ask AI 'emergency vet near me at midnight,' only clinics with structured 24/7 data show up. Your emergency services and ICU capabilities don't reach them when it matters most.",
    },
    {
      title: "Pet Insurance & Wellness Plan Revenue Lost",
      description:
        "The booming pet wellness market — insurance-covered treatments, annual wellness packages, pet grooming subscriptions — is growing 25% yearly. AI recommends clinics with comprehensive, structured service listings. Without AI visibility, this recurring revenue goes to competitors.",
    },
  ],
  services: [
    {
      tier: "AI Foundation",
      price: "$15,000 - $25,000",
      features: [
        "Google Business Profile optimization for veterinary keywords",
        "Structured schema markup for VeterinaryCare + AnimalShelter",
        "Citation building on Zocdoc Vets, Yelp, and PetBacker",
        "AI-optimized content for top 10 veterinary services",
        "Monthly AI visibility audit report",
      ],
    },
    {
      tier: "AI Growth",
      price: "$40,000 - $75,000",
      features: [
        "Everything in AI Foundation",
        "Full AEO for 25+ veterinary keywords (emergency, vaccination, surgery)",
        "Pet care content strategy for AI training data",
        "Review aggregation schema across Google, Zocdoc, and social",
        "Competitor displacement strategy against chain vet hospitals",
        "Quarterly AI performance benchmarking",
      ],
    },
    {
      tier: "AI Dominance",
      price: "$1,000 - $2,000",
      features: [
        "Everything in AI Growth",
        "Full website rebuild optimized for AI crawlers",
        "llms.txt implementation with species and service detail",
        "Pet influencer and blogger citation building",
        "AI chatbot training data optimization",
        "Dedicated AI visibility manager",
        "Real-time AI mention monitoring across ChatGPT, Perplexity, Gemini",
      ],
    },
  ],
  roiExample: {
    metric: "15 New Pet Patients/Month",
    value: "$75K-150k",
    pitch:
      "Just 15 new pet patients per month at $5,000-10,000 in first-visit value (consultation + vaccination + diagnostics) generates $75K-150k monthly. Each pet patient returns 4-6 times per year, creating $3-600k in annual recurring revenue per monthly cohort.",
  },
  faqItems: [
    {
      question: "How does AI recommend veterinary clinics?",
      answer:
        "AI models pull from Google Business Profile data, pet care directories, customer reviews, website content, and social media. Vet clinics with structured schema showing services (surgery, dental, emergency), species treated (dogs, cats, birds, exotic), operating hours, and doctor credentials get recommended far more often.",
    },
    {
      question: "I have loyal pet parent clients. Why do I need AI visibility?",
      answer:
        "Your existing clients are loyal, but India adds 2-3 million new pet parents every year. These first-time pet owners have no referral network — they rely entirely on AI and online search. Without AI visibility, every new pet parent in your area goes to a competitor by default.",
    },
    {
      question: "Can a small vet clinic compete with Cessna Lifeline in AI?",
      answer:
        "Absolutely. Chain hospitals have broad but generic content. For specific queries like 'best vet for Persian cats in Koramangala' or 'exotic bird vet near me,' specialized local clinics with proper AEO outperform chains. Your species expertise and personalized care are AI differentiators.",
    },
    {
      question: "How quickly will I see new pet patient inquiries?",
      answer:
        "Most vet clinics see increased AI visibility within 30-45 days and measurable patient increases within 60-90 days. Adoption season (October-December) and vaccination season show the fastest spikes. Emergency visibility improvements often show results within 2-3 weeks.",
    },
  ],
  stats: [
    { label: "of pet parents search online for vet recommendations", value: "71%" },
    { label: "ask AI or voice assistants when their pet has an emergency", value: "53%" },
    { label: "annual spending per pet parent on vet care globally", value: "$25K" },
  ],
  ctaText: "Get Your Free Veterinary AI Visibility Audit",
  searchExample: "best veterinary clinic near me open now",
  competitorLine:
    "Cessna Lifeline, CGS Hospital, and chain vet clinics are dominating AI recommendations — while your compassionate care, specialized expertise, and thousands of happy pet families remain invisible to the pet parents in your neighborhood.",
  treatments: [
    {
      slug: "pet-vaccination-cost",
      name: "Pet Vaccination",
      priceRange: "$500 - $3,000/vaccine",
      description:
        "Complete vaccination programs for dogs, cats, and other pets including core vaccines (rabies, DHPP, FVRCP), non-core vaccines (leptospirosis, kennel cough), and puppy/kitten vaccination schedules.",
      faqItems: [
        {
          question: "What is the cost of pet vaccination globally?",
          answer:
            "Dog vaccination costs $500-1,500 per shot. Annual 9-in-1 costs $1,000-2,000. Rabies vaccination costs $500-1,000. Cat vaccination (FVRCP + Rabies) costs $800-2,000 per shot. Complete puppy vaccination schedule (6 weeks to 16 weeks) costs $3,000-8,000 for all required doses.",
        },
        {
          question: "What is the puppy vaccination schedule globally?",
          answer:
            "Puppies need vaccines at 6-8 weeks (first DHPP), 10-12 weeks (second DHPP + Lepto), 14-16 weeks (third DHPP + Rabies), and annual boosters thereafter. Your vet will create a personalized schedule based on breed, health status, and local disease prevalence. Missing or delaying vaccines puts your puppy at serious risk.",
        },
        {
          question: "Are annual boosters really necessary for adult dogs?",
          answer:
            "Yes. Core vaccines (Rabies, DHPP) need annual or triennial boosters depending on the vaccine type. Rabies is legally mandatory globally. Leptospirosis boosters are essential in monsoon-prone areas. Your vet will recommend a cost-effective booster schedule based on your pet's risk profile.",
        },
      ],
    },
    {
      slug: "pet-surgery-cost",
      name: "Pet Surgery",
      priceRange: "$5,000 - $1,000",
      description:
        "Comprehensive surgical services including soft tissue surgery, orthopedic surgery, tumor removal, foreign body removal, caesarean section, and emergency surgical interventions with modern anesthesia.",
      faqItems: [
        {
          question: "What does pet surgery cost globally?",
          answer:
            "Pet surgery costs vary widely: spaying/neutering $3,000-8,000, tumor removal $5,000-25,000, fracture repair $10,000-40,000, foreign body removal $8,000-20,000, ACL repair $15,000-50,000, and caesarean section $8,000-20,000. Emergency surgeries cost 30-50% more due to after-hours care.",
        },
        {
          question: "How do I prepare my pet for surgery?",
          answer:
            "Typical preparation: fast your pet for 8-12 hours before surgery (water okay until 4 hours before), bring previous medical records, inform vet of all medications, and prepare a quiet recovery space at home. Your vet will do pre-surgical bloodwork ($1,000-3,000) to ensure your pet is safe for anesthesia.",
        },
      ],
    },
    {
      slug: "pet-dental-cleaning-cost",
      name: "Pet Dental Cleaning",
      priceRange: "$3,000 - $15,000",
      description:
        "Professional pet dental care including ultrasonic scaling, polishing, tooth extraction, dental X-rays, and oral health assessment under safe anesthesia protocols.",
      faqItems: [
        {
          question: "What does pet dental cleaning cost globally?",
          answer:
            "Basic dental scaling and polishing costs $3,000-6,000 under anesthesia. Dental cleaning with extractions costs $5,000-15,000 depending on the number of teeth removed. Dental X-rays add $1,000-3,000. Most vets recommend professional dental cleaning annually for dogs over 3 years old.",
        },
        {
          question: "Why does pet dental cleaning require anesthesia?",
          answer:
            "Unlike humans, pets won't hold still for thorough cleaning below the gumline where bacteria cause the most damage. Anesthesia allows complete subgingival cleaning, dental X-rays, and extractions if needed — all without stress or pain for your pet. Modern veterinary anesthesia is very safe with proper pre-anesthetic evaluation.",
        },
      ],
    },
    {
      slug: "pet-grooming-cost",
      name: "Pet Grooming",
      priceRange: "$500 - $5,000",
      description:
        "Professional pet grooming services including bathing, haircut and styling, nail trimming, ear cleaning, teeth brushing, de-shedding treatment, and breed-specific grooming.",
      faqItems: [
        {
          question: "What does pet grooming cost globally?",
          answer:
            "Basic grooming (bath + nail trim + ear cleaning) costs $500-1,500 for small dogs and $1,000-2,500 for large breeds. Full grooming with haircut costs $1,000-3,500. Breed-specific styling (Poodle, Shih Tzu, Cocker Spaniel) costs $2,000-5,000. Cat grooming costs $800-2,500. Spa packages with de-shedding cost $1,500-4,000.",
        },
        {
          question: "How often should I get my pet groomed?",
          answer:
            "Grooming frequency depends on breed: long-haired breeds (Shih Tzu, Lhasa Apso) every 4-6 weeks, medium-coated breeds every 6-8 weeks, and short-haired breeds every 8-12 weeks. Nail trimming every 2-3 weeks. Regular grooming prevents matting, skin infections, and allows early detection of lumps or parasites.",
        },
      ],
    },
    {
      slug: "pet-neutering-cost",
      name: "Pet Neutering/Spaying",
      priceRange: "$3,000 - $10,000",
      description:
        "Safe spaying and neutering procedures for dogs and cats including pre-surgical assessment, surgery, pain management, post-operative care, and follow-up visit with e-collar and recovery guidance.",
      faqItems: [
        {
          question: "What is the cost of neutering/spaying a pet globally?",
          answer:
            "Dog neutering (male) costs $3,000-6,000, spaying (female) costs $5,000-10,000. Cat neutering costs $2,000-4,000, spaying costs $3,000-7,000. Costs include anesthesia, surgery, pain medication, and one follow-up visit. Laparoscopic spaying costs $8,000-15,000 but offers faster recovery.",
        },
        {
          question: "At what age should I get my pet neutered/spayed?",
          answer:
            "Dogs: 6-9 months for small breeds, 12-18 months for large breeds (to allow proper growth). Cats: 5-6 months. Early neutering reduces cancer risks by up to 90% and prevents behavioral issues like marking and aggression. Your vet will recommend the ideal timing based on breed and health status.",
        },
        {
          question: "What is the recovery time after neutering/spaying?",
          answer:
            "Male neutering recovery: 5-7 days. Female spaying recovery: 10-14 days. Keep your pet calm, prevent licking with an e-collar, and restrict jumping/running for 10-14 days. Stitches are removed at 10-14 days (or dissolve on their own with absorbable sutures). Most pets return to normal behavior within a week.",
        },
      ],
    },
    {
      slug: "emergency-vet-visit-cost",
      name: "Emergency Veterinary Care",
      priceRange: "$2,000 - $50,000+",
      description:
        "24/7 emergency veterinary services including trauma care, poisoning treatment, bloat/GDV surgery, bite wound management, seizure management, and intensive care with oxygen therapy and IV fluids.",
      faqItems: [
        {
          question: "What does an emergency vet visit cost globally?",
          answer:
            "Emergency consultation costs $1,000-3,000 (after-hours premium). Common emergency costs: poisoning treatment $3,000-10,000, bite wound care $2,000-8,000, fracture stabilization $5,000-15,000, bloat/GDV surgery $15,000-50,000, and ICU care $3,000-8,000/day. Having a regular vet with emergency access saves 20-30% vs standalone emergency hospitals.",
        },
        {
          question: "How do I know if my pet needs emergency vet care?",
          answer:
            "Rush to emergency if your pet shows: difficulty breathing, severe bleeding, inability to urinate for 12+ hours, suspected poisoning, bloated abdomen (especially large dogs), seizures lasting more than 2 minutes, trauma from accident or fall, or collapse/unconsciousness. When in doubt, call your vet — it's always better to be safe.",
        },
        {
          question: "Should I keep a first-aid kit for my pet?",
          answer:
            "Yes. A pet first-aid kit should include: gauze rolls and bandages, antiseptic wipes, hydrogen peroxide (for vet-directed vomiting induction only), digital thermometer, tick removal tool, your vet's emergency number, and activated charcoal (for poisoning, vet-directed only). Cost: $500-1,500 to assemble. Your vet can help you prepare one.",
        },
      ],
    },
  ],
  costKeywords: [
    "pet vaccination cost India",
    "veterinary surgery charges",
    "dog grooming cost near me",
    "emergency vet charges India",
    "pet neutering cost",
  ],
  nicheKeywords: [
    "best vet clinic near me",
    "24 hour vet near me",
    "dog vaccination schedule India",
    "pet hospital emergency",
    "veterinary doctor near me",
    "cat vet specialist near me",
  ],
  schemaType: "VeterinaryCare",
  metaCategory: "lifestyle",
  citations: [
    {
      name: "Zocdoc Vets",
      url: "https://www.practo.com",
      type: "niche-specific",
    },
    {
      name: "Yelp",
      url: "https://www.justdial.com",
      type: "general",
    },
    {
      name: "PetBacker India",
      url: "https://www.petbacker.com",
      type: "niche-specific",
    },
    {
      name: "Google Business Profile",
      url: "https://business.google.com",
      type: "local",
    },
    {
      name: "Supertails",
      url: "https://supertails.com",
      type: "niche-specific",
    },
  ],
};
