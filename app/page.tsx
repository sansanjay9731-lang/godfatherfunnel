import Hero from "@/components/Hero";
import NicheCard from "@/components/NicheCard";
import StatsBar from "@/components/StatsBar";
import TrustBar from "@/components/TrustBar";
import BeforeAfter from "@/components/BeforeAfter";
import Testimonials from "@/components/Testimonials";
import TeamSection from "@/components/TeamSection";
import { niches } from "@/lib/niche-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Godfather Funnel AI — India's #1 AEO & AI Marketing Agency | Make AI Recommend You",
  description:
    "We make ChatGPT, Google AI & Perplexity recommend your business by name. AEO + 360° marketing for dermatologists, dentists, plastic surgeons, IVF clinics, lawyers & real estate. 150+ businesses optimized. Free AI audit.",
};

const globalStats = [
  { label: "Of consumers under 35 use AI to find services", value: "73%" },
  { label: "Businesses invisible to AI search", value: "92%" },
  { label: "Revenue lost to AI-recommended competitors", value: "₹4.2Cr+" },
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Godfather Funnel AI",
            url: "https://godfatherfunnelai.com",
            description:
              "India's #1 AEO & AI Marketing Agency. We make AI recommend your business by name.",
            publisher: {
              "@type": "Organization",
              name: "Godfather Funnel AI",
              url: "https://godfatherfunnelai.com",
              foundingDate: "2026",
              areaServed: { "@type": "Country", name: "India" },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                ratingCount: "87",
                bestRating: "5",
              },
            },
            potentialAction: {
              "@type": "SearchAction",
              target: "https://godfatherfunnelai.com/audit?url={search_term_string}",
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />
      <Hero
        headline="Your Competitors Are AI-Recommended. You're Invisible."
        subline="When clients ask ChatGPT, Google AI, or Perplexity for the best doctor, lawyer, or builder — AI gives names. If yours isn't one of them, you don't exist. We fix that."
        ctaText="Get Your Free AI Visibility Audit"
        searchExample="best dermatologist near me"
      />

      <TrustBar />
      <StatsBar stats={globalStats} />

      {/* Niche selector */}
      <section className="py-24 bg-[#0a0a0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 mb-4 text-xs font-medium tracking-wider uppercase bg-white/5 border border-white/10 rounded-full text-gray-400">
              Industry-Specific Solutions
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              We Dominate AI For{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Premium Industries
              </span>
            </h2>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              Select your industry to see exactly how we make AI recommend you
              by name.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {niches.map((n, i) => (
              <NicheCard
                key={n.slug}
                slug={n.slug}
                icon={n.icon}
                name={n.name}
                image={n.image}
                headline={n.heroSubline.slice(0, 120) + "..."}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      <BeforeAfter />

      {/* How it works */}
      <section className="py-24 bg-[#0a0a0f] border-y border-white/5">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="inline-block px-4 py-1.5 mb-4 text-xs font-medium tracking-wider uppercase bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400">
            Our 3-Step Process
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-16">
            How{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Godfather Funnel
            </span>{" "}
            Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                step: "01",
                title: "We Audit Your AI Invisibility",
                desc: "We check if ChatGPT, Perplexity, Google AI, and voice assistants know you exist. Spoiler: they probably don't.",
                icon: "🔍",
              },
              {
                step: "02",
                title: "We Make AI Understand You",
                desc: "Schema markup, structured data, llms.txt, AI-optimized content — we feed AI everything it needs to recommend you.",
                icon: "⚡",
              },
              {
                step: "03",
                title: "AI Recommends You by Name",
                desc: "Within 30-90 days, when clients ask AI for the best in your field — YOUR name comes up first.",
                icon: "🏆",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="text-left bg-[#12121a] border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-3xl font-black bg-gradient-to-r from-blue-400/30 to-purple-500/30 bg-clip-text text-transparent">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <TeamSection />

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-b from-[#0a0a0f] to-[#0f0a1a] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-5xl font-black text-white mb-6">
            Stop Losing Clients to AI.
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Start Being Recommended.
            </span>
          </h2>
          <p className="text-gray-400 mb-8 text-lg">
            Get a free AI visibility report. See exactly where you stand vs your
            competitors in AI search. Takes 30 seconds.
          </p>
          <a
            href="/audit"
            className="inline-block px-10 py-5 text-lg font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:shadow-2xl hover:shadow-purple-500/25 hover:scale-105 transition-all duration-300"
          >
            Get Your Free AI Audit Now →
          </a>
          <p className="mt-4 text-xs text-gray-500">
            No credit card required. Results in 30 seconds.
          </p>
        </div>
      </section>
    </>
  );
}
