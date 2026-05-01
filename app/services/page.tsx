import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services — AEO, AI Marketing & 360° Digital | Godfather Funnel AI",
  description:
    "From Answer Engine Optimization to schema markup, Google Ads to reputation management — we offer end-to-end AI marketing services for dermatologists, dentists, plastic surgeons, IVF clinics, lawyers, and real estate developers across the US.",
};

const services = [
  {
    name: "Answer Engine Optimization (AEO)",
    tag: "Core Service",
    desc: "We optimize your digital presence so AI assistants like ChatGPT, Google AI Overviews, and Perplexity recommend your business by name. This includes structured data, schema markup, llms.txt, AI crawler optimization, and authority content creation.",
    features: [
      "AI Visibility Audit & Score",
      "Schema.org markup (Organization, Service, FAQ, MedicalBusiness)",
      "llms.txt implementation",
      "AI crawler allowlisting (GPTBot, ClaudeBot, PerplexityBot)",
      "Authority content optimized for AI citation",
      "Monthly AI mention tracking across ChatGPT, Perplexity, Google AI",
    ],
  },
  {
    name: "Google Business Profile Optimization",
    tag: "Local SEO",
    desc: "Your GBP is the single most important asset for local AI recommendations. We optimize every field, manage reviews, post weekly updates, and ensure Google's AI surfaces your profile for relevant queries.",
    features: [
      "Complete profile optimization (all 50+ fields)",
      "Review generation & response strategy",
      "Weekly Google Posts with AI-optimized content",
      "Photo optimization with geo-tags",
      "Q&A seeding with target keywords",
      "Local citation building (50+ directories)",
    ],
  },
  {
    name: "Programmatic SEO",
    tag: "Scale",
    desc: "We build hundreds of hyper-targeted landing pages that capture long-tail search traffic and AI citations. Every page is schema-enriched and designed to convert.",
    features: [
      "City + niche landing pages (e.g., 'best dermatologist in New York')",
      "Treatment + city pages (e.g., 'dental implant cost in New York')",
      "Comparison pages (e.g., 'AEO vs SEO')",
      "Dynamic FAQ generation per page",
      "Internal linking architecture",
      "Automated sitemap updates",
    ],
  },
  {
    name: "Performance Marketing (Google + Meta Ads)",
    tag: "Paid",
    desc: "ROI-focused ad campaigns across Google Search, Google Maps, Meta (Facebook/Instagram), and YouTube. We specialize in high-value niches where one client acquisition justifies the ad spend.",
    features: [
      "Google Search & Maps Ads",
      "Meta (Facebook + Instagram) Ads",
      "YouTube pre-roll campaigns",
      "Retargeting & lookalike audiences",
      "Landing page A/B testing",
      "Monthly ROI reporting with cost-per-lead tracking",
    ],
  },
  {
    name: "Reputation & Review Management",
    tag: "Trust",
    desc: "AI systems heavily weight reviews and ratings. We build and manage your online reputation across Google, Zocdoc, Yelp, and niche-specific platforms to maximize AI trust signals.",
    features: [
      "Review generation campaigns",
      "Negative review response strategy",
      "Review schema markup (AggregateRating)",
      "Multi-platform monitoring (Google, Zocdoc, Yelp)",
      "Testimonial collection & display",
      "Trust badge implementation",
    ],
  },
  {
    name: "360° Digital Marketing",
    tag: "Full Service",
    desc: "End-to-end digital marketing that combines AEO with traditional channels. Social media, email marketing, content strategy, and website optimization — all working together to make you the obvious choice for both humans and AI.",
    features: [
      "Social media management (LinkedIn, Instagram, YouTube)",
      "Email marketing & nurture sequences",
      "Content marketing (blogs, videos, infographics)",
      "Website design & CRO",
      "WhatsApp Business automation",
      "Monthly strategy calls & reporting",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Godfather Funnel AI",
            url: "https://www.godfatherfunnelai.com/services",
            description:
              "the US's premier AEO and AI marketing agency offering Answer Engine Optimization, schema markup, programmatic SEO, Google & Meta Ads, reputation management, and 360° digital marketing for premium businesses.",
            provider: {
              "@id": "https://www.godfatherfunnelai.com/#organization",
            },
            areaServed: { "@type": "Country", name: "the US" },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "AI Marketing Services",
              itemListElement: services.map((s, i) => ({
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: s.name,
                  description: s.desc,
                },
                position: i + 1,
              })),
            },
          }),
        }}
      />

      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 mb-4 text-xs font-medium tracking-wider uppercase bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400">
            What We Do
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white">
            AI Marketing Services That{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Actually Work
            </span>
          </h1>
          <p className="mt-6 text-lg text-gray-400 max-w-3xl mx-auto">
            Every service is designed around one goal: making AI recommend your
            business by name. From schema markup to Google Ads, everything works
            together.
          </p>
        </div>

        <div className="space-y-8">
          {services.map((s, i) => (
            <div
              key={i}
              className="bg-[#12121a] border border-white/5 rounded-2xl p-8 hover:border-purple-500/20 transition-colors"
            >
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <h2 className="text-xl font-bold text-white">{s.name}</h2>
                <span className="px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider bg-purple-500/10 text-purple-400 rounded-full border border-purple-500/20">
                  {s.tag}
                </span>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed mb-6">
                {s.desc}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {s.features.map((f, j) => (
                  <div key={j} className="flex items-start gap-2 text-sm">
                    <span className="text-green-400 shrink-0 mt-0.5">+</span>
                    <span className="text-gray-300">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <h2 className="text-2xl font-black text-white mb-4">
            Not Sure What You Need?
          </h2>
          <p className="text-gray-400 mb-6">
            Start with a free AI visibility audit. We&apos;ll tell you exactly
            what&apos;s missing.
          </p>
          <Link
            href="/audit"
            className="inline-block px-10 py-5 text-lg font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:shadow-2xl hover:shadow-purple-500/25 hover:scale-105 transition-all duration-300"
          >
            Get Free AI Audit →
          </Link>
        </div>
      </div>
    </div>
  );
}
