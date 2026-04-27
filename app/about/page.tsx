import Image from "next/image";
import Link from "next/link";
import { images } from "@/lib/niches";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Godfather Funnel AI — #1 AEO & AI Marketing Agency",
  description:
    "Godfather Funnel AI is Global's premier Answer Engine Optimization agency. We make AI assistants like ChatGPT, Google AI, and Perplexity recommend your business by name. 150+ businesses optimized across 6 premium industries.",
};

const milestones = [
  { year: "2026", event: "Founded with a mission: make AI recommend businesses by name" },
  { year: "2026 Q1", event: "First 50 businesses AI-optimized across healthcare and legal" },
  { year: "2026 Q2", event: "Launched free AI Visibility Audit tool — 1000+ audits completed" },
  { year: "2026 Q3", event: "Expanded to 6 industries, 150+ active clients" },
  { year: "2026 Q4", event: "Published Global's first State of AI Visibility Report" },
];

const values = [
  { title: "AI-First Thinking", desc: "Every strategy starts with the question: will AI recommend this business? If not, we fix it before anything else." },
  { title: "Measurable Results", desc: "We track AI visibility scores, not vanity metrics. Every client gets monthly reports showing exactly where AI mentions them." },
  { title: "Industry Expertise", desc: "We don't do generic marketing. We specialize in premium industries where one client acquisition pays for months of our work." },
  { title: "Radical Transparency", desc: "Our free audit tool shows businesses exactly what AI sees. No smoke, no mirrors — just data." },
];

const team = [
  { name: "Alex Sterling", role: "Founder & AI Strategy Lead", bio: "Former Google engineer who realized that the future of client acquisition isn't search rankings — it's AI recommendations. Built AI visibility systems for 100+ businesses before founding Godfather Funnel AI.", image: images.teamMale1 },
  { name: "Sarah Jenkins", role: "Technical SEO & Schema Architect", bio: "Schema markup specialist with 8 years in technical SEO. Makes search engines AND AI systems understand your business through structured data, llms.txt, and AI crawler optimization.", image: images.teamFemale1 },
  { name: "Marcus Thorne", role: "Growth & Performance Marketing", bio: "Managed $5M+ in ad spend across Google, Meta, and YouTube. Specializes in ROI-focused campaigns for premium niches where one client acquisition matters more than 1000 clicks.", image: images.teamMale2 },
  { name: "Elena Rodriguez", role: "Content & AEO Lead", bio: "Creates content that AI cites. Specializes in turning complex professional expertise into AI-recommendation-ready authority content across healthcare, legal, and real estate.", image: images.teamFemale2 },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] py-24">
      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "About Godfather Funnel AI",
            url: "https://www.godfatherfunnelai.com/about",
            mainEntity: {
              "@id": "https://www.godfatherfunnelai.com/#organization",
            },
          }),
        }}
      />

      <div className="max-w-5xl mx-auto px-4">
        {/* Hero */}
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-1.5 mb-4 text-xs font-medium tracking-wider uppercase bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400">
            About Us
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white">
            We Make AI{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Recommend You by Name
            </span>
          </h1>
          <p className="mt-6 text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Godfather Funnel AI is Global&apos;s premier Answer Engine Optimization (AEO)
            agency. While other agencies optimize for Google rankings, we optimize
            for AI recommendations — ensuring ChatGPT, Google AI Overviews, and
            Perplexity recommend your business by name.
          </p>
        </div>

        {/* The Problem We Solve */}
        <div className="bg-[#12121a] border border-white/5 rounded-2xl p-8 sm:p-12 mb-16">
          <h2 className="text-2xl font-black text-white mb-6">
            The Problem We Solve
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold text-red-400 mb-3">
                The Old Way (Broken)
              </h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 shrink-0">✕</span>
                  Spend $20,000 - $50,000/month on Google Ads and traditional SEO
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 shrink-0">✕</span>
                  Get on page 1 of Google — but AI still doesn&apos;t know you exist
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 shrink-0">✕</span>
                  73% of consumers under 35 now use AI instead of Google
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 shrink-0">✕</span>
                  Your competitors get AI-recommended, you don&apos;t
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-green-400 mb-3">
                The Godfather Way (Working)
              </h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-green-400 shrink-0">✓</span>
                  Optimize for AI recommendations + Google rankings simultaneously
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 shrink-0">✓</span>
                  Schema markup, llms.txt, and AI crawler access
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 shrink-0">✓</span>
                  Within 30-90 days, AI recommends you by name
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 shrink-0">✓</span>
                  One client acquisition pays for months of investment
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-16">
          <h2 className="text-2xl font-black text-white mb-8 text-center">
            What We Believe
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <div key={i} className="bg-[#12121a] border border-white/5 rounded-2xl p-6">
                <h3 className="text-base font-bold text-white mb-2">{v.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h2 className="text-2xl font-black text-white mb-8 text-center">
            Our Journey
          </h2>
          <div className="space-y-4">
            {milestones.map((m, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="shrink-0 w-20 text-right">
                  <span className="text-xs font-bold text-purple-400">{m.year}</span>
                </div>
                <div className="w-3 h-3 rounded-full bg-purple-500 mt-1 shrink-0 ring-4 ring-purple-500/20" />
                <p className="text-sm text-gray-300">{m.event}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mb-16">
          <h2 className="text-2xl font-black text-white mb-8 text-center">
            The Team Behind Your AI Domination
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {team.map((member, i) => (
              <div key={i} className="bg-[#12121a] border border-white/5 rounded-2xl p-6 flex gap-4">
                <div className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">{member.name}</h3>
                  <p className="text-xs text-purple-400 font-medium">{member.role}</p>
                  <p className="text-xs text-gray-400 mt-2 leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Numbers */}
        <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-purple-500/20 rounded-2xl p-8 sm:p-12 mb-16">
          <h2 className="text-2xl font-black text-white mb-8 text-center">
            By the Numbers
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "150+", label: "Businesses AI-Optimized" },
              { value: "6", label: "Premium Industries" },
              { value: "4.9★", label: "Client Satisfaction" },
              { value: "30 Days", label: "Avg. Time to AI Visibility" },
            ].map((s, i) => (
              <div key={i}>
                <div className="text-3xl font-black bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  {s.value}
                </div>
                <div className="text-xs text-gray-400 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">
            Ready to Be AI-Recommended?
          </h2>
          <p className="text-gray-400 mb-6">
            Get your free AI visibility report in 30 seconds.
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
