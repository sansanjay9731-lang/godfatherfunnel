import { notFound } from "next/navigation";
import { niches, getNicheBySlug } from "@/lib/niches";
import type { Metadata } from "next";
import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import ServiceTiers from "@/components/ServiceTiers";
import ROICalculator from "@/components/ROICalculator";
import StatsBar from "@/components/StatsBar";
import FAQ from "@/components/FAQ";
import BeforeAfter from "@/components/BeforeAfter";
import TrustBar from "@/components/TrustBar";
import Testimonials from "@/components/Testimonials";

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
    title: `${niche.name} AI Marketing — Godfather Funnel AI`,
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://www.godfatherfunnelai.com" },
              { "@type": "ListItem", position: 2, name: niche.name, item: `https://www.godfatherfunnelai.com/${niche.slug}` },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: `AI Marketing & AEO for ${niche.name}`,
            description: `Answer Engine Optimization and 360° AI marketing services for ${niche.name.toLowerCase()}. We make ChatGPT, Google AI, and Perplexity recommend your practice by name.`,
            provider: {
              "@id": "https://www.godfatherfunnelai.com/#organization",
            },
            url: `https://www.godfatherfunnelai.com/${niche.slug}`,
            areaServed: { "@type": "Country", name: "India" },
            serviceType: ["Answer Engine Optimization", "AI Marketing", "Digital Marketing"],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: niche.faqItems.map((f) => ({
              "@type": "Question",
              name: f.question,
              acceptedAnswer: { "@type": "Answer", text: f.answer },
            })),
          }),
        }}
      />
      <Hero
        headline={niche.heroHeadline}
        subline={niche.heroSubline}
        ctaText={niche.ctaText}
        searchExample={niche.searchExample}
      />

      <TrustBar />
      <StatsBar stats={niche.stats} />
      <PainPoints points={niche.painPoints} />
      <BeforeAfter />
      <ServiceTiers services={niche.services} />
      <ROICalculator roi={niche.roiExample} />
      <Testimonials />
      <FAQ items={niche.faqItems} />

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-b from-[#06060a] to-[#0f0a1a] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative max-w-3xl mx-auto px-4 text-center">
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
          <p className="mt-4 text-xs text-gray-500">
            No credit card required. Results in 30 seconds.
          </p>
        </div>
      </section>
    </>
  );
}
