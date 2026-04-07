import { notFound } from "next/navigation";
import { niches, getNicheBySlug } from "@/lib/niche-data";
import type { Metadata } from "next";
import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import ServiceTiers from "@/components/ServiceTiers";
import ROICalculator from "@/components/ROICalculator";
import StatsBar from "@/components/StatsBar";
import FAQ from "@/components/FAQ";

export function generateStaticParams() {
  return niches.map((n) => ({ niche: n.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ niche: string }>;
}): Promise<Metadata> {
  const { niche: slug } = await params;
  const niche = getNicheBySlug(slug);
  if (!niche) return {};
  return {
    title: `${niche.name} AI Marketing — Godfather Funnel`,
    description: `AEO + 360° marketing for ${niche.name.toLowerCase()}. Get AI to recommend your practice by name. Free AI visibility audit.`,
  };
}

export default async function NichePage({
  params,
}: {
  params: Promise<{ niche: string }>;
}) {
  const { niche: slug } = await params;
  const niche = getNicheBySlug(slug);
  if (!niche) notFound();

  return (
    <>
      <Hero
        headline={niche.heroHeadline}
        subline={niche.heroSubline}
        ctaText={niche.ctaText}
        searchExample={niche.searchExample}
      />

      <StatsBar stats={niche.stats} />
      <PainPoints points={niche.painPoints} />
      <ServiceTiers services={niche.services} />
      <ROICalculator roi={niche.roiExample} />
      <FAQ items={niche.faqItems} />

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-b from-[#06060a] to-[#0f0a1a]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-5xl font-black text-white mb-6">
            Ready to Be AI&apos;s #1
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              {niche.name} Recommendation?
            </span>
          </h2>
          <p className="text-gray-400 mb-8 text-lg">
            Get your free AI visibility report in 30 seconds. See exactly where
            you stand vs competitors.
          </p>
          <a
            href="/audit"
            className="inline-block px-10 py-5 text-lg font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:shadow-2xl hover:shadow-purple-500/25 hover:scale-105 transition-all duration-300"
          >
            {niche.ctaText} →
          </a>
        </div>
      </section>
    </>
  );
}
