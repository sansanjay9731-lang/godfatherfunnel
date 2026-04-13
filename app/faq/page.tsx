import Link from "next/link";
import FAQAccordion from "@/components/FAQAccordion";

const faqs = [
  {
    category: "About AEO",
    items: [
      {
        q: "What is AEO (Answer Engine Optimization)?",
        a: "AEO is the practice of optimizing your business's digital presence so that AI assistants like ChatGPT, Google AI Overviews, and Perplexity recommend your business by name. Unlike traditional SEO which focuses on Google search rankings, AEO focuses on getting cited by AI systems that increasingly guide consumer decisions.",
      },
      {
        q: "How is AEO different from SEO?",
        a: "SEO optimizes for Google's 10 blue links. AEO optimizes for AI recommendations. SEO targets keywords; AEO targets entities and structured data. SEO competes with 10 results on page 1; AEO competes for 2-3 AI recommendation slots. You need both, but AEO delivers higher-trust recommendations.",
      },
      {
        q: "Why do businesses need AEO in 2026?",
        a: "73% of consumers under 35 now use AI assistants instead of Google to find services. When someone asks ChatGPT 'best dermatologist in Mumbai', AI names 2-3 clinics. If you're not one of them, you're losing patients to competitors who are. AEO ensures AI knows you exist and recommends you.",
      },
    ],
  },
  {
    category: "About Godfather Funnel AI",
    items: [
      {
        q: "What does Godfather Funnel AI do?",
        a: "We are India's premier AEO (Answer Engine Optimization) and AI marketing agency. We make AI assistants like ChatGPT, Google AI Overviews, and Perplexity recommend your business by name. We specialize in 6 premium industries: dermatologists, dentists, plastic surgeons, IVF clinics, lawyers, and real estate developers.",
      },
      {
        q: "Which industries do you specialize in?",
        a: "We focus exclusively on 6 premium industries where one client acquisition justifies the investment: dermatologists, dentists, plastic surgeons, IVF clinics, lawyers (corporate/IP/real estate), and real estate developers. These niches have high client lifetime values, making AI marketing ROI extremely favorable.",
      },
      {
        q: "How is Godfather Funnel AI different from a regular SEO agency?",
        a: "A traditional SEO agency can get you Google rankings but cannot get you AI-recommended. We do both. We optimize structured data (schema, llms.txt, AI crawler access) that regular agencies don't even know about. Ask your current agency: 'Am I showing up in ChatGPT?' If they don't know what that means, you need us.",
      },
      {
        q: "What is the AI Visibility Audit?",
        a: "Our free AI Visibility Audit scans your website in 30 seconds and scores it 0-100 on how visible it is to AI systems. We check schema markup, meta descriptions, robots.txt AI crawler access, llms.txt presence, FAQ structure, HTTPS, and more. It shows you exactly what AI sees — and what it doesn't.",
      },
    ],
  },
  {
    category: "Process & Results",
    items: [
      {
        q: "How long does it take to get AI-recommended?",
        a: "Most clients see initial AI visibility improvements within 30 days. Full AI recommendation (being named by ChatGPT, Google AI, Perplexity) typically takes 30-90 days depending on your existing digital presence, competition level, and industry. Businesses with strong Google profiles and reviews see faster results.",
      },
      {
        q: "How do you measure AI visibility?",
        a: "We track AI mentions across ChatGPT, Google AI Overviews, and Perplexity for your target queries. Every month, you get a report showing: which AI systems mention you, for which queries, how you rank vs competitors, and your overall AI Visibility Score (0-100). No vanity metrics — just actionable data.",
      },
      {
        q: "What is the ROI of AEO?",
        a: "For premium niches, one client acquisition often pays for 3-6 months of AEO investment. A single dental implant patient is worth ₹1-3L. One IVF patient is worth ₹2-5L. One corporate law retainer is worth ₹5-15L. When AI recommends you by name, these clients come to you directly — no ad spend, no competition.",
      },
      {
        q: "Do I still need Google Ads if I do AEO?",
        a: "We recommend running Google Ads in parallel during months 1-3 while AEO builds. By month 4-6, AEO typically delivers enough organic AI traffic to reduce ad spend. By month 12, most clients have reduced Google Ads spend by 40-60% while getting more leads through AI recommendations.",
      },
    ],
  },
  {
    category: "Technical",
    items: [
      {
        q: "What is schema markup and why does it matter for AI?",
        a: "Schema markup is structured data code added to your website that helps search engines AND AI systems understand your business. It tells AI: this is a medical practice, these are the services offered, this is the location, these are the ratings. Without schema, AI has to guess — and usually guesses wrong or ignores you entirely.",
      },
      {
        q: "What is llms.txt?",
        a: "llms.txt is a file (similar to robots.txt) that provides AI language models with a structured, human-readable description of your business. It tells ChatGPT, Claude, and other AI systems exactly what your business does, what makes it unique, and why it should be recommended. It's like a resume that AI reads before deciding whether to recommend you.",
      },
      {
        q: "Do you work with my existing website or build a new one?",
        a: "Both. If your existing website is well-built, we add AEO optimization layers on top (schema, llms.txt, content optimization). If your website is outdated or poorly structured, we can build a new AEO-optimized website. Either way, the goal is the same: make AI recommend you by name.",
      },
    ],
  },
];

export default function FAQPage() {
  const allFaqs = faqs.flatMap((c) => c.items);

  return (
    <div className="min-h-screen bg-[#0a0a0f] py-24">
      {/* Server-rendered JSON-LD — visible to all crawlers */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: allFaqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: f.a,
              },
            })),
          }),
        }}
      />

      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 mb-4 text-xs font-medium tracking-wider uppercase bg-yellow-500/10 border border-yellow-500/20 rounded-full text-yellow-400">
            FAQ
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Questions
            </span>
          </h1>
          <p className="mt-6 text-lg text-gray-400">
            Everything you need to know about AEO, AI marketing, and how we make
            AI recommend your business.
          </p>
        </div>

        <FAQAccordion categories={faqs} />

        <div className="text-center mt-16">
          <h2 className="text-2xl font-black text-white mb-4">
            Still Have Questions?
          </h2>
          <p className="text-gray-400 mb-6">
            Start with a free AI audit or reach out directly.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/audit"
              className="px-8 py-4 text-base font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:shadow-2xl hover:shadow-purple-500/25 hover:scale-105 transition-all duration-300"
            >
              Free AI Audit →
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 text-base font-bold border border-white/10 text-white rounded-full hover:bg-white/5 transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
