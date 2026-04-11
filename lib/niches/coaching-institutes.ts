import type { NicheData } from "./types";
import { images } from "./images";

export const nicheData: NicheData = {
  slug: "coaching-institutes",
  name: "Coaching Institutes",
  icon: "📚",
  image: images.coaching,
  heroHeadline: "Students Ask AI Which Coaching to Join. Does AI Recommend You?",
  heroSubline:
    "Every year, lakhs of IIT, NEET, and UPSC aspirants ask ChatGPT and Perplexity for the best coaching institutes. If AI doesn't mention your name, you're losing ₹1-3L admissions to competitors who show up first.",
  painPoints: [
    {
      title: "Students Choose AI-Recommended Coaching",
      description:
        "When a student asks ChatGPT 'best IIT coaching in Kota', AI recommends 3-5 institutes. Each admission is worth ₹1-3L. If you're not in that list, you're invisible to the next generation of aspirants.",
    },
    {
      title: "Online Coaching Is Eating Your Market",
      description:
        "Unacademy, BYJU'S, and PW dominate AI answers for coaching queries. Even if your offline results are better, AI doesn't know that unless your digital presence proves it.",
    },
    {
      title: "Your Results Are Invisible to AI",
      description:
        "You may have produced 500+ IIT selections, but if that data isn't structured for AI to read, ChatGPT will never cite your institute. Your toppers exist in PDFs, not in AI's knowledge.",
    },
  ],
  services: [
    {
      tier: "AI Visibility Starter",
      price: "₹15,000 - ₹30,000",
      features: [
        "AI search audit for your coaching brand",
        "Google Business Profile optimization",
        "Structured results data for AI readability",
        "5 FAQ pages targeting student queries",
        "Basic schema markup implementation",
      ],
    },
    {
      tier: "AI Authority Builder",
      price: "₹50,000 - ₹1,00,000",
      features: [
        "Full AEO strategy for coaching niche",
        "25+ content pages (exam guides, fee comparisons, hostel info)",
        "Topper testimonial schema & video optimization",
        "Citation building on Shiksha, Collegedunia, Careers360",
        "Monthly AI ranking reports",
        "Competitor displacement strategy",
      ],
    },
    {
      tier: "AI Dominance Package",
      price: "₹1,50,000 - ₹3,00,000",
      features: [
        "Complete AI ecosystem ownership for your city + niche",
        "100+ programmatic pages (city + exam combos)",
        "AI-optimized YouTube & social strategy",
        "Wikipedia & knowledge panel strategy",
        "Quarterly AI search share reports",
        "Dedicated AEO manager",
        "Student journey funnel optimization",
      ],
    },
  ],
  roiExample: {
    metric: "50 New Admissions",
    value: "₹50L - ₹1.5Cr",
    pitch:
      "If AI recommends your institute to just 50 more students per year, that's ₹50L to ₹1.5Cr in additional revenue — from a one-time AEO investment.",
  },
  faqItems: [
    {
      question: "How do students use AI to choose coaching institutes?",
      answer:
        "Students ask ChatGPT, Perplexity, and Google AI questions like 'best IIT coaching in Kota', 'NEET coaching fees comparison', or 'which coaching has best results'. AI gives direct recommendations based on structured data, reviews, and citations it finds online.",
    },
    {
      question: "Can AI really impact our admissions?",
      answer:
        "Absolutely. 73% of Gen-Z students use AI tools for research before making education decisions. If a parent asks ChatGPT 'best NEET coaching near me' and your institute isn't mentioned, that ₹1-3L admission goes to whoever AI recommends.",
    },
    {
      question: "We already rank on Google. Why do we need AEO?",
      answer:
        "Google rankings and AI recommendations are different. ChatGPT doesn't scrape Google results — it uses its own training data and real-time citations. Many institutes that rank #1 on Google are completely absent from AI answers.",
    },
    {
      question: "How long before we see results?",
      answer:
        "Initial AI visibility improvements appear within 4-6 weeks. Full citation building and authority establishment takes 3-6 months. Most coaching institutes see measurable admission increases within one admission cycle.",
    },
  ],
  stats: [
    { label: "Students Using AI for Coaching Research", value: "73%" },
    { label: "Average Coaching Fee (IIT/NEET)", value: "₹1-3L" },
    { label: "Institutes Missing from AI Answers", value: "85%" },
  ],
  ctaText: "Get Your Free AI Visibility Audit — See What Students Find When They Ask AI About You",
  searchExample: "best IIT coaching in Kota",
  competitorLine: "Allen and FIITJEE dominate AI recommendations for coaching",
  treatments: [
    {
      slug: "iit-coaching-fee",
      name: "IIT Coaching Fee",
      priceRange: "₹80,000 - ₹3,00,000/year",
      description:
        "IIT-JEE coaching is the highest-revenue segment in Indian education. Parents and students compare fees across institutes using AI, making it critical to have structured, accurate fee data that AI can cite.",
      faqItems: [
        {
          question: "What is the average IIT coaching fee in India?",
          answer:
            "IIT coaching fees range from ₹80,000 to ₹3,00,000 per year depending on the institute, city, and program type (classroom vs online). Top Kota institutes charge ₹1.5-2.5L for 2-year programs.",
        },
        {
          question: "Do coaching institutes offer scholarships?",
          answer:
            "Yes, most reputed institutes offer merit-based scholarships ranging from 25% to 100% fee waiver based on entrance test performance. Some also offer need-based financial assistance.",
        },
        {
          question: "Is online IIT coaching cheaper than offline?",
          answer:
            "Online IIT coaching typically costs 40-60% less than offline programs. However, the gap is narrowing as online platforms add more features. Fees range from ₹50,000 to ₹1,50,000 for online programs.",
        },
      ],
    },
    {
      slug: "neet-coaching-fee",
      name: "NEET Coaching Fee",
      priceRange: "₹70,000 - ₹2,50,000/year",
      description:
        "With 20L+ NEET aspirants annually, parents actively search AI for the best coaching institute with top results and reasonable fees. Being AI-recommended is worth crores in admissions.",
      faqItems: [
        {
          question: "What is the average NEET coaching fee?",
          answer:
            "NEET coaching fees range from ₹70,000 to ₹2,50,000 per year. Kota-based institutes charge ₹1-2L, while metro city institutes charge ₹1.5-2.5L. Integrated school+coaching programs can go up to ₹3L.",
        },
        {
          question: "Which city is best for NEET coaching?",
          answer:
            "Kota remains the top destination, but Hyderabad, Delhi, Chennai, and Pune have strong NEET coaching ecosystems. AI recommendations vary by city, so local AEO optimization matters.",
        },
      ],
    },
    {
      slug: "upsc-coaching-fee",
      name: "UPSC Coaching Fee",
      priceRange: "₹50,000 - ₹2,00,000",
      description:
        "UPSC aspirants spend 2-3 years preparing, and choosing the right coaching is their first major decision. AI tools are increasingly used to compare Delhi-based and online UPSC coaching options.",
      faqItems: [
        {
          question: "What is the average UPSC coaching fee in Delhi?",
          answer:
            "UPSC coaching fees in Delhi range from ₹50,000 to ₹2,00,000 for general studies. Optional subject coaching costs an additional ₹20,000-60,000. Top institutes like Vajiram and Vision IAS charge ₹1-1.5L.",
        },
        {
          question: "Is online UPSC coaching effective?",
          answer:
            "Online UPSC coaching has proven equally effective, with several toppers crediting online platforms. Fees are 30-50% lower, ranging from ₹30,000 to ₹1,00,000 for comprehensive programs.",
        },
        {
          question: "How long does UPSC coaching take?",
          answer:
            "Most UPSC coaching programs run for 9-12 months for Prelims + Mains. Test series and interview preparation are usually separate. Many aspirants take 1-2 additional years for revision and optional subjects.",
        },
      ],
    },
    {
      slug: "cat-coaching-fee",
      name: "CAT Coaching Fee",
      priceRange: "₹30,000 - ₹1,50,000",
      description:
        "MBA aspirants compare CAT coaching institutes extensively using AI. With IIM placements reaching ₹30L+, the ROI of good coaching is massive — and so is your opportunity to capture these leads.",
      faqItems: [
        {
          question: "What is the average CAT coaching fee?",
          answer:
            "CAT coaching fees range from ₹30,000 to ₹1,50,000. Classroom programs cost ₹50,000-1,50,000, while online programs range from ₹15,000-70,000. Top names like TIME and IMS charge ₹40,000-80,000.",
        },
        {
          question: "Is CAT coaching necessary for IIM admission?",
          answer:
            "While self-study is possible, 80%+ of IIM converts credit coaching for structured preparation, mock tests, and strategy guidance. The investment of ₹50K-1L is marginal compared to ₹20-30L MBA placements.",
        },
      ],
    },
    {
      slug: "gate-coaching-fee",
      name: "GATE Coaching Fee",
      priceRange: "₹25,000 - ₹1,00,000",
      description:
        "GATE aspirants seek coaching for IIT M.Tech admissions and PSU jobs. With growing competition, students rely on AI to find the best coaching, especially for their specific engineering branch.",
      faqItems: [
        {
          question: "What is the average GATE coaching fee?",
          answer:
            "GATE coaching fees range from ₹25,000 to ₹1,00,000 depending on the branch and mode. Online programs cost ₹15,000-50,000, while classroom coaching costs ₹40,000-1,00,000. Made Easy and ACE Academy are among the top names.",
        },
        {
          question: "Which branches have the most GATE coaching demand?",
          answer:
            "CS/IT, ECE, EE, ME, and Civil have the highest coaching demand. CS/IT coaching tends to be most expensive due to high demand and limited seats in IIT M.Tech programs.",
        },
      ],
    },
    {
      slug: "spoken-english-course-fee",
      name: "Spoken English Course Fee",
      priceRange: "₹5,000 - ₹50,000",
      description:
        "Spoken English and communication skills courses attract massive search volume from students, working professionals, and parents. AI tools frequently recommend specific institutes for English learning.",
      faqItems: [
        {
          question: "What is the average spoken English course fee?",
          answer:
            "Spoken English course fees range from ₹5,000 to ₹50,000 depending on duration and institute reputation. Basic 3-month courses cost ₹5,000-15,000, while advanced 6-month programs with IELTS prep cost ₹20,000-50,000.",
        },
        {
          question: "How long does it take to become fluent in English?",
          answer:
            "With structured coaching, most students see significant improvement in 3-6 months. Full fluency with confidence typically takes 6-12 months of consistent practice combined with coaching.",
        },
        {
          question: "Is online spoken English coaching effective?",
          answer:
            "Yes, online spoken English coaching with live classes and personal feedback is highly effective. Platforms offer 1-on-1 sessions from ₹200-500 per class, making it affordable and flexible.",
        },
      ],
    },
  ],
  costKeywords: [
    "IIT coaching fees",
    "NEET coaching cost",
    "UPSC coaching fees in Delhi",
    "best coaching institute fees",
    "online coaching vs offline coaching cost",
  ],
  nicheKeywords: [
    "best coaching institute",
    "top IIT coaching",
    "NEET coaching near me",
    "UPSC coaching Delhi",
    "coaching institute reviews",
    "coaching institute results",
  ],
  schemaType: "EducationalOrganization",
  metaCategory: "education",
  citations: [
    {
      name: "Shiksha",
      url: "https://www.shiksha.com",
      type: "niche-specific",
    },
    {
      name: "Collegedunia",
      url: "https://www.collegedunia.com",
      type: "niche-specific",
    },
    {
      name: "Careers360",
      url: "https://www.careers360.com",
      type: "niche-specific",
    },
    {
      name: "Google Business Profile",
      url: "https://business.google.com",
      type: "general",
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
  ],
};
