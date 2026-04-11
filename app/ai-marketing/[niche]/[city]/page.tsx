import { notFound } from "next/navigation";
import { niches, getNicheBySlug } from "@/lib/niches";
import { getAllCities } from "@/lib/cities";
import Link from "next/link";
import type { Metadata } from "next";

const allCities = getAllCities();
const topCities = allCities.filter((c) => c.tier === 1);

function cityFromSlug(slug: string): { name: string; slug: string } | undefined {
  return allCities.find((c) => c.slug === slug);
}

export function generateStaticParams() {
  const params: { niche: string; city: string }[] = [];
  for (const n of niches) {
    for (const c of allCities) {
      params.push({ niche: n.slug, city: c.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ niche: string; city: string }>;
}): Promise<Metadata> {
  const { niche: nicheSlug, city: citySlug } = await params;
  const niche = getNicheBySlug(nicheSlug);
  const city = cityFromSlug(citySlug);
  if (!niche || !city) return {};
  return {
    title: `AI Marketing for ${niche.name} in ${city.name} — Godfather Funnel AI`,
    description: `Get AI to recommend your ${niche.name.toLowerCase().replace(/s$/, "")} practice in ${city.name}. AEO + 360° marketing. Free AI visibility audit.`,
  };
}

export default async function CityNichePage({
  params,
}: {
  params: Promise<{ niche: string; city: string }>;
}) {
  const { niche: nicheSlug, city: citySlug } = await params;
  const niche = getNicheBySlug(nicheSlug);
  const city = cityFromSlug(citySlug);
  if (!niche || !city) notFound();

  const cityName = city.name;
  const nicheLabel = niche.name.toLowerCase().replace(/s$/, "");

  return (
    <div className="min-h-screen bg-[#0a0a0f] py-24">
      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: `AI Marketing for ${niche.name} in ${cityName}`,
            description: `AEO and AI visibility optimization for ${niche.name.toLowerCase()} in ${cityName}`,
            provider: {
              "@type": "Organization",
              name: "Godfather Funnel AI",
              url: "https://godfatherfunnelai.com",
            },
            areaServed: {
              "@type": "City",
              name: cityName,
              containedInPlace: { "@type": "Country", name: "India" },
            },
          }),
        }}
      />

      <div className="max-w-4xl mx-auto px-4">
        {/* Breadcrumb */}
        <div className="flex flex-wrap items-center gap-2 text-xs text-gray-500 mb-8">
          <Link href="/" className="hover:text-white transition">Home</Link>
          <span>/</span>
          <Link href={`/${niche.slug}`} className="hover:text-white transition">{niche.name}</Link>
          <span>/</span>
          <span className="text-gray-400">{cityName}</span>
        </div>

        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight">
            AI Marketing for{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              {niche.name} in {cityName}
            </span>
          </h1>
          <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">
            When patients in {cityName} ask ChatGPT &ldquo;best {nicheLabel} near me&rdquo;,
            AI recommends 2-3 names. We make sure yours is one of them.
          </p>
        </div>

        {/* The Problem */}
        <div className="bg-[#12121a] border border-red-500/10 rounded-2xl p-8 mb-8">
          <h2 className="text-xl font-bold text-white mb-4">
            The Problem in {cityName}
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            Right now, when someone in {cityName} searches for a {nicheLabel} on
            ChatGPT, Google AI, or Perplexity — your competitors get recommended
            and you don&apos;t. This means:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {niche.painPoints.map((p, i) => (
              <div key={i} className="bg-white/5 rounded-xl p-4">
                <div className="text-red-400 font-bold text-sm mb-1">{p.title}</div>
                <p className="text-gray-500 text-xs">{p.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* What We Do */}
        <div className="bg-[#12121a] border border-white/5 rounded-2xl p-8 mb-8">
          <h2 className="text-xl font-bold text-white mb-4">
            What We Do for {niche.name} in {cityName}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              `AI Visibility Audit for your ${cityName} practice`,
              `${niche.name.replace(/s$/, "")} schema markup implementation`,
              `llms.txt + AI crawler optimization`,
              `Google Business Profile optimization for ${cityName}`,
              `"Best ${nicheLabel} in ${cityName}" content creation`,
              `AI citation monitoring and monthly reports`,
              `Review generation and management`,
              `Local directory listings (50+ ${cityName} directories)`,
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2 text-sm">
                <span className="text-green-400 mt-0.5 shrink-0">✓</span>
                <span className="text-gray-300">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ROI */}
        <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-purple-500/20 rounded-2xl p-8 mb-8 text-center">
          <h2 className="text-xl font-bold text-white mb-2">
            The ROI for {niche.name} in {cityName}
          </h2>
          <div className="flex items-center justify-center gap-4 my-6">
            <div className="text-center">
              <div className="text-2xl font-black text-green-400">{niche.roiExample.value}</div>
              <div className="text-xs text-gray-500">{niche.roiExample.metric}</div>
            </div>
            <div className="text-2xl text-gray-600">=</div>
            <div className="text-center">
              <div className="text-2xl font-black text-purple-400">2-6 Months</div>
              <div className="text-xs text-gray-500">Marketing Investment</div>
            </div>
          </div>
          <p className="text-gray-400 text-sm">{niche.roiExample.pitch}</p>
        </div>

        {/* FAQ */}
        <div className="bg-[#12121a] border border-white/5 rounded-2xl p-8 mb-8">
          <h2 className="text-xl font-bold text-white mb-6">
            FAQs: AI Marketing for {niche.name} in {cityName}
          </h2>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: `How long does it take for AI to recommend my ${nicheLabel} practice in ${cityName}?`,
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: `Most ${niche.name.toLowerCase()} in ${cityName} see initial AI visibility within 30-60 days. Full optimization typically takes 90 days.`,
                    },
                  },
                  {
                    "@type": "Question",
                    name: `How much does AI marketing cost for ${niche.name.toLowerCase()} in ${cityName}?`,
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: `Our plans for ${niche.name.toLowerCase()} start at ${niche.services[0].price}. ${niche.roiExample.pitch}`,
                    },
                  },
                  {
                    "@type": "Question",
                    name: `Do you work with ${niche.name.toLowerCase()} only in ${cityName}?`,
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: `We work with ${niche.name.toLowerCase()} across India, but have specific expertise in ${cityName}'s competitive landscape.`,
                    },
                  },
                ],
              }),
            }}
          />
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-semibold text-white">
                How long does it take for AI to recommend my practice in {cityName}?
              </h3>
              <p className="text-xs text-gray-400 mt-1">
                Most {niche.name.toLowerCase()} in {cityName} see initial AI visibility within 30-60 days. Full optimization typically takes 90 days.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white">
                How much does AI marketing cost for {niche.name.toLowerCase()} in {cityName}?
              </h3>
              <p className="text-xs text-gray-400 mt-1">
                Our plans start at {niche.services[0].price}. {niche.roiExample.pitch}
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white">
                Do you work with {niche.name.toLowerCase()} only in {cityName}?
              </h3>
              <p className="text-xs text-gray-400 mt-1">
                We work with {niche.name.toLowerCase()} across India, but have specific expertise in {cityName}&apos;s competitive landscape.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center py-12">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">
            Ready to Dominate AI in {cityName}?
          </h2>
          <p className="text-gray-400 mb-6">
            Get your free AI visibility report in 30 seconds.
          </p>
          <Link
            href="/audit"
            className="inline-block px-10 py-5 text-lg font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:shadow-2xl hover:shadow-purple-500/25 hover:scale-105 transition-all duration-300"
          >
            {niche.ctaText} →
          </Link>
        </div>

        {/* Other cities */}
        <div className="border-t border-white/5 pt-8">
          <h3 className="text-sm font-semibold text-gray-400 mb-4">
            {niche.name} AI Marketing in Other Cities
          </h3>
          <div className="flex flex-wrap gap-2">
            {topCities
              .filter((c) => c.slug !== city.slug)
              .map((c) => (
                <Link
                  key={c.slug}
                  href={`/ai-marketing/${niche.slug}/${c.slug}`}
                  className="text-xs px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-gray-400 hover:text-white hover:border-purple-500/30 transition"
                >
                  {c.name}
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
