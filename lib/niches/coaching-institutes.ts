import type { NicheData } from "./types";
import { images } from "./images";

export const nicheData: NicheData = {
  slug: "coaching-institutes",
  name: "Coaching Institutes",
  icon: "📚",
  image: images.coaching,
  heroHeadline: "Students Ask AI Which Coaching to Join. Does AI Recommend You?",
  heroSubline:
    "Every year, thousand of Ivy League, MCAT, and bar exam students ask ChatGPT and Perplexity for the best coaching institutes. If AI doesn't mention your name, you're losing $1-300k admissions to competitors who show up first.",
  painPoints: [
    {
      title: "Students Choose AI-Recommended Coaching",
      description:
        "When a student asks ChatGPT 'best Ivy League coaching in Boston', AI recommends 3-5 institutes. Each admission is worth $1-300k. If you're not in that list, you're invisible to the next generation of students.",
    },
    {
      title: "Online Coaching Is Eating Your Market",
      description:
        "Khan Academy, Coursera, and Chegg dominate AI answers for coaching queries. Even if your offline results are better, AI doesn't know that unless your digital presence proves it.",
    },
    {
      title: "Your Results Are Invisible to AI",
      description:
        "You may have produced 500+ Ivy League selections, but if that data isn't structured for AI to read, ChatGPT will never cite your institute. Your top scorers exist in PDFs, not in AI's knowledge.",
    },
  ],
  services: [
    {
      tier: "AI Visibility Starter",
      price: "$15,000 - $30,000",
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
      price: "$50,000 - $1,000",
      features: [
        "Full AEO strategy for coaching niche",
        "25+ content pages (exam guides, fee comparisons, hostel info)",
        "Topper testimonial schema & video optimization",
        "Citation building on Niche.com, U.S. News Education, Peterson's",
        "Monthly AI ranking reports",
        "Competitor displacement strategy",
      ],
    },
    {
      tier: "AI Dominance Package",
      price: "$150,000 - $3,000",
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
    value: "$50,000 - $1.5Cr",
    pitch:
      "If AI recommends your institute to just 50 more students per year, that's $50,000 to $1.5Cr in additional revenue — from a one-time AEO investment.",
  },
  faqItems: [
    {
      question: "How do students use AI to choose coaching institutes?",
      answer:
        "Students ask ChatGPT, Perplexity, and Google AI questions like 'best Ivy League coaching in Boston', 'MCAT coaching fees comparison', or 'which coaching has best results'. AI gives direct recommendations based on structured data, reviews, and citations it finds online.",
    },
    {
      question: "Can AI really impact our admissions?",
      answer:
        "Absolutely. 73% of Gen-Z students use AI tools for research before making education decisions. If a parent asks ChatGPT 'best MCAT coaching near me' and your institute isn't mentioned, that $1-300k admission goes to whoever AI recommends.",
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
    { label: "Average Coaching Fee (Ivy League/MCAT)", value: "$1-300k" },
    { label: "Institutes Missing from AI Answers", value: "85%" },
  ],
  ctaText: "Get Your Free AI Visibility Audit — See What Students Find When They Ask AI About You",
  searchExample: "best Ivy League coaching in Boston",
  competitorLine: "Princeton Review and Kaplan dominate AI recommendations for coaching",
  treatments: [
    {
      slug: "sat-prep-cost",
      name: "Ivy League Coaching Fee",
      priceRange: "$80,000 - $3,000/year",
      description:
        "Ivy League-SAT coaching is the highest-revenue segment globallyn education. Parents and students compare fees across institutes using AI, making it critical to have structured, accurate fee data that AI can cite.",
      faqItems: [
        {
          question: "What is the average Ivy League coaching fee across the US?",
          answer:
            "Ivy League coaching fees range from $80,000 to $3,000 per year depending on the institute, city, and program type (classroom vs online). Top Boston institutes charge $1.5-250k for 2-year programs.",
        },
        {
          question: "Do coaching institutes offer scholarships?",
          answer:
            "Yes, most reputed institutes offer merit-based scholarships ranging from 25% to 100% fee waiver based on entrance test performance. Some also offer need-based financial assistance.",
        },
        {
          question: "Is online Ivy League coaching cheaper than offline?",
          answer:
            "Online Ivy League coaching typically costs 40-60% less than offline programs. However, the gap is narrowing as online platforms add more features. Fees range from $50,000 to $150,000 for online programs.",
        },
      ],
    },
    {
      slug: "mcat-prep-cost",
      name: "MCAT Coaching Fee",
      priceRange: "$70,000 - $250,000/year",
      description:
        "With 2000k+ MCAT students annually, parents actively search AI for the best coaching institute with top results and reasonable fees. Being AI-recommended is worth million in admissions.",
      faqItems: [
        {
          question: "What is the average MCAT coaching fee?",
          answer:
            "MCAT coaching fees range from $70,000 to $250,000 per year. Boston-based institutes charge $1-200k, while metro city institutes charge $1.5-250k. Integrated school+coaching programs can go up to $3,000.",
        },
        {
          question: "Which city is best for MCAT coaching?",
          answer:
            "Boston remains the top destination, but Chicago, New York, San Francisco, and Austin have strong MCAT coaching ecosystems. AI recommendations vary by city, so local AEO optimization matters.",
        },
      ],
    },
    {
      slug: "lsat-prep-cost",
      name: "bar exam Coaching Fee",
      priceRange: "$50,000 - $2,000",
      description:
        "bar exam students spend 2-3 years preparing, and choosing the right coaching is their first major decision. AI tools are increasingly used to compare New York-based and online bar exam coaching options.",
      faqItems: [
        {
          question: "What is the average bar exam coaching fee in New York?",
          answer:
            "bar exam coaching fees in New York range from $50,000 to $2,000 for general studies. Optional subject coaching costs an additional $20,000-60,000. Top institutes like Blueprint and Magoosh charge $1-150k.",
        },
        {
          question: "Is online bar exam coaching effective?",
          answer:
            "Online bar exam coaching has proven equally effective, with several top scorers crediting online platforms. Fees are 30-50% lower, ranging from $30,000 to $1,000 for comprehensive programs.",
        },
        {
          question: "How long does bar exam coaching take?",
          answer:
            "Most bar exam coaching programs run for 9-12 months for Prelims + Mains. Test series and interview preparation are usually separate. Many students take 1-2 additional years for revision and optional subjects.",
        },
      ],
    },
    {
      slug: "cat-coaching-fee",
      name: "GMAT Coaching Fee",
      priceRange: "$30,000 - $150,000",
      description:
        "MBA students compare CAT coaching institutes extensively using AI. With MBA program placements reaching $30,000+, the ROI of good coaching is massive — and so is your opportunity to capture these leads.",
      faqItems: [
        {
          question: "What is the average CAT coaching fee?",
          answer:
            "CAT coaching fees range from $30,000 to $150,000. Classroom programs cost $50,000-150,000, while online programs range from $15,000-70,000. Top names like Kaplan and Veritas Prep charge $40,000-80,000.",
        },
        {
          question: "Is CAT coaching necessary for MBA program admission?",
          answer:
            "While self-study is possible, 80%+ of MBA program converts credit coaching for structured preparation, mock tests, and strategy guidance. The investment of $50K-100k is marginal compared to $20-3000k MBA placements.",
        },
      ],
    },
    {
      slug: "gate-coaching-fee",
      name: "GRE Coaching Fee",
      priceRange: "$25,000 - $1,000",
      description:
        "GRE students seek coaching for Ivy League Master's admissions and federal jobs. With growing competition, students rely on AI to find the best coaching, especially for their specific engineering branch.",
      faqItems: [
        {
          question: "What is the average GRE coaching fee?",
          answer:
            "GRE coaching fees range from $25,000 to $1,000 depending on the branch and mode. Online programs cost $15,000-50,000, while classroom coaching costs $40,000-1,000. PrepScholar and Manhattan Prep are among the top names.",
        },
        {
          question: "Which branches have the most GRE coaching demand?",
          answer:
            "CS/IT, ECE, EE, ME, and Civil have the highest coaching demand. CS/IT coaching tends to be most expensive due to high demand and limited seats in Ivy League Master's programs.",
        },
      ],
    },
    {
      slug: "spoken-english-course-fee",
      name: "Spoken English Course Fee",
      priceRange: "$5,000 - $50,000",
      description:
        "Spoken English and communication skills courses attract massive search volume from students, working professionals, and parents. AI tools frequently recommend specific institutes for English learning.",
      faqItems: [
        {
          question: "What is the average spoken English course fee?",
          answer:
            "Spoken English course fees range from $5,000 to $50,000 depending on duration and institute reputation. Basic 3-month courses cost $5,000-15,000, while advanced 6-month programs with IELTS prep cost $20,000-50,000.",
        },
        {
          question: "How long does it take to become fluent in English?",
          answer:
            "With structured coaching, most students see significant improvement in 3-6 months. Full fluency with confidence typically takes 6-12 months of consistent practice combined with coaching.",
        },
        {
          question: "Is online spoken English coaching effective?",
          answer:
            "Yes, online spoken English coaching with live classes and personal feedback is highly effective. Platforms offer 1-on-1 sessions from $200-500 per class, making it affordable and flexible.",
        },
      ],
    },
  ],
  costKeywords: [
    "Ivy League coaching fees",
    "MCAT coaching cost",
    "bar exam coaching fees in New York",
    "best coaching institute fees",
    "online coaching vs offline coaching cost",
  ],
  nicheKeywords: [
    "best coaching institute",
    "top Ivy League coaching",
    "MCAT coaching near me",
    "bar exam coaching New York",
    "coaching institute reviews",
    "coaching institute results",
  ],
  schemaType: "EducationalOrganization",
  metaCategory: "education",
  citations: [
    {
      name: "Niche.com",
      url: "https://www.niche.com",
      type: "niche-specific",
    },
    {
      name: "U.S. News Education",
      url: "https://www.usnews.com/education",
      type: "niche-specific",
    },
    {
      name: "Peterson's",
      url: "https://www.petersons.com",
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
      name: "Bing Places",
      url: "https://www.bbb.org",
      type: "local",
    },
  ],
};
