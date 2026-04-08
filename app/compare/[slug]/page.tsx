import { notFound } from "next/navigation";
import { comparisonTopics } from "@/lib/seo-data";
import Link from "next/link";
import type { Metadata } from "next";

export function generateStaticParams() {
  return comparisonTopics.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const topic = comparisonTopics.find((c) => c.slug === slug);
  if (!topic) return {};
  return {
    title: `${topic.title} — Godfather Funnel AI`,
    description: topic.desc,
  };
}

const comparisonContent: Record<string, { left: { name: string; points: string[] }; right: { name: string; points: string[] }; verdict: string }> = {
  "aeo-vs-seo": {
    left: {
      name: "SEO (Search Engine Optimization)",
      points: [
        "Optimizes for Google search result pages",
        "Goal: rank in top 10 blue links",
        "Key factor: backlinks + content quality",
        "Competition: 10 spots on page 1",
        "Timeline: 3-12 months",
        "User clicks through to your website",
        "Established practice since 1990s",
      ],
    },
    right: {
      name: "AEO (Answer Engine Optimization)",
      points: [
        "Optimizes for AI recommendations (ChatGPT, Google AI, Perplexity)",
        "Goal: get recommended by name by AI",
        "Key factor: structured data + schema + authority",
        "Competition: 2-3 names per query",
        "Timeline: 30-90 days for initial visibility",
        "User may never visit your website — AI sends them directly",
        "Emerging practice, massive first-mover advantage",
      ],
    },
    verdict:
      "You need both. SEO captures traditional search traffic. AEO ensures AI recommends you. But with 73% of young consumers using AI to find services, AEO is becoming the higher-impact channel. Start with AEO for quick wins, build SEO for long-term authority.",
  },
  "chatgpt-vs-google-for-finding-doctors": {
    left: {
      name: "Google Search",
      points: [
        "Shows 10 links — patient must click and compare",
        "Influenced by ads — paid results appear first",
        "Map pack shows 3 nearby options",
        "Patient reads multiple websites before deciding",
        "SEO determines who appears",
        "Takes 15-30 minutes to research",
      ],
    },
    right: {
      name: "ChatGPT / AI Search",
      points: [
        "Names 2-3 specific doctors directly",
        "No ads — purely based on data and authority",
        "Considers reviews, credentials, and structured data",
        "Patient gets a curated recommendation immediately",
        "AEO determines who gets mentioned",
        "Takes 30 seconds to get a recommendation",
      ],
    },
    verdict:
      "Patients are shifting from Google to AI. The key difference: Google gives options, AI gives recommendations. Being one of 10 Google links is valuable. Being one of 3 AI recommendations is game-changing. Optimize for both, but don't ignore the AI shift.",
  },
  "traditional-marketing-vs-ai-marketing": {
    left: {
      name: "Traditional Marketing",
      points: [
        "Billboards, newspaper ads, pamphlets",
        "High cost, low measurability",
        "Broad reach, low targeting",
        "One-time visibility per ad spend",
        "Declining effectiveness with younger demographics",
        "No digital footprint for AI to reference",
      ],
    },
    right: {
      name: "AI Marketing (AEO + Digital)",
      points: [
        "AI recommendations, schema, structured data",
        "Measurable ROI — track every lead",
        "Hyper-targeted to people actively searching",
        "Compounds over time — builds digital authority",
        "Growing effectiveness as AI adoption increases",
        "Creates permanent digital presence AI cites forever",
      ],
    },
    verdict:
      "Traditional marketing still has a place for brand awareness, but for patient/client acquisition, AI marketing delivers 5-10x better ROI. Every rupee spent on AI optimization builds compounding digital authority. A billboard disappears tomorrow; AI visibility compounds forever.",
  },
  "google-ads-vs-aeo": {
    left: {
      name: "Google Ads",
      points: [
        "Instant visibility — start getting clicks today",
        "Pay per click: ₹50-500 per click depending on niche",
        "Stops working the moment you stop paying",
        "Increasingly expensive as competition grows",
        "Many users skip ads (ad blindness)",
        "Good for immediate lead generation",
      ],
    },
    right: {
      name: "AEO (Answer Engine Optimization)",
      points: [
        "Takes 30-90 days for initial visibility",
        "Fixed monthly investment regardless of traffic",
        "Builds compounding authority — keeps working forever",
        "No competition inflation — structured data is binary",
        "AI recommendations have highest trust rating",
        "Good for long-term sustainable growth",
      ],
    },
    verdict:
      "Use Google Ads for immediate leads while building AEO for long-term growth. The ideal strategy: run ads in months 1-3 while AEO builds. By month 4-6, AEO delivers organic AI traffic and you can reduce ad spend. By month 12, AEO is your primary acquisition channel.",
  },
  "seo-agency-vs-ai-marketing-agency": {
    left: {
      name: "Traditional SEO Agency",
      points: [
        "Focuses on Google rankings and backlinks",
        "May not understand AI systems at all",
        "Optimizes for keywords and search volume",
        "Standard deliverables: rankings, traffic reports",
        "Often uses outdated techniques",
        "No schema or structured data expertise",
      ],
    },
    right: {
      name: "AI Marketing Agency (like Godfather Funnel AI)",
      points: [
        "Focuses on AI recommendations + Google rankings",
        "Deep expertise in how ChatGPT, Perplexity, Google AI work",
        "Optimizes structured data, schema, llms.txt",
        "Deliverables: AI citation reports, visibility scores",
        "Uses cutting-edge AEO techniques",
        "Full structured data and AI crawler optimization",
      ],
    },
    verdict:
      "A traditional SEO agency can get you Google rankings, but they can't get you AI-recommended. An AI marketing agency does both. Ask your current agency: 'Am I showing up in ChatGPT?' If they don't know what that means, you need an upgrade.",
  },
};

export default async function ComparePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const topic = comparisonTopics.find((c) => c.slug === slug);
  if (!topic) notFound();
  const data = comparisonContent[slug];
  if (!data) notFound();

  return (
    <div className="min-h-screen bg-[#0a0a0f] py-24">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-wrap items-center gap-2 text-xs text-gray-500 mb-8">
          <Link href="/" className="hover:text-white transition">Home</Link>
          <span>/</span>
          <span className="text-gray-400">Compare</span>
        </div>

        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-5xl font-black text-white">
            {topic.title}
          </h1>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">{topic.desc}</p>
        </div>

        {/* Comparison grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-[#12121a] border border-blue-500/20 rounded-2xl overflow-hidden">
            <div className="px-6 py-4 bg-blue-500/10 border-b border-blue-500/10">
              <h2 className="font-bold text-blue-400">{data.left.name}</h2>
            </div>
            <div className="p-6 space-y-3">
              {data.left.points.map((p, i) => (
                <div key={i} className="flex items-start gap-2 text-sm">
                  <span className="text-blue-400 mt-0.5 shrink-0">•</span>
                  <span className="text-gray-300">{p}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#12121a] border border-purple-500/20 rounded-2xl overflow-hidden">
            <div className="px-6 py-4 bg-purple-500/10 border-b border-purple-500/10">
              <h2 className="font-bold text-purple-400">{data.right.name}</h2>
            </div>
            <div className="p-6 space-y-3">
              {data.right.points.map((p, i) => (
                <div key={i} className="flex items-start gap-2 text-sm">
                  <span className="text-purple-400 mt-0.5 shrink-0">•</span>
                  <span className="text-gray-300">{p}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Verdict */}
        <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/5 border border-green-500/20 rounded-2xl p-8 mb-12">
          <h2 className="text-lg font-bold text-green-400 mb-3">Our Verdict</h2>
          <p className="text-gray-300 text-sm leading-relaxed">
            {data.verdict}
          </p>
        </div>

        {/* CTA */}
        <div className="text-center py-8">
          <Link
            href="/audit"
            className="inline-block px-10 py-5 text-lg font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:shadow-2xl hover:shadow-purple-500/25 hover:scale-105 transition-all duration-300"
          >
            Get Your Free AI Audit →
          </Link>
        </div>

        {/* Other comparisons */}
        <div className="border-t border-white/5 pt-8">
          <h3 className="text-sm font-semibold text-gray-400 mb-4">
            More Comparisons
          </h3>
          <div className="flex flex-wrap gap-2">
            {comparisonTopics
              .filter((c) => c.slug !== slug)
              .map((c) => (
                <Link
                  key={c.slug}
                  href={`/compare/${c.slug}`}
                  className="text-xs px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-gray-400 hover:text-white hover:border-purple-500/30 transition"
                >
                  {c.title}
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
