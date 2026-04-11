import { notFound } from "next/navigation";
import { getAllComparisons, getComparisonBySlug } from "@/lib/comparisons";
import { generateBreadcrumbSchema, generateFAQSchema, generateComparisonSchema } from "@/lib/schema-helpers";
import SchemaScript from "@/components/SchemaScript";
import Link from "next/link";
import type { Metadata } from "next";

const allComparisons = getAllComparisons();

export function generateStaticParams() {
  return allComparisons.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const topic = getComparisonBySlug(slug);
  if (!topic) return {};
  return {
    title: `${topic.title} — Godfather Funnel AI`,
    description: topic.description,
  };
}

export default async function ComparePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const topic = getComparisonBySlug(slug);
  if (!topic) notFound();

  const BASE = "https://www.godfatherfunnelai.com";

  return (
    <div className="min-h-screen bg-[#0a0a0f] py-24">
      <SchemaScript
        data={[
          generateBreadcrumbSchema([
            { name: "Home", url: BASE },
            { name: "Compare", url: `${BASE}/compare` },
            { name: topic.title, url: `${BASE}/compare/${topic.slug}` },
          ]),
          generateComparisonSchema({
            title: topic.title,
            description: topic.description,
            slug: topic.slug,
          }),
          ...(topic.faqItems.length > 0
            ? [generateFAQSchema(topic.faqItems)]
            : []),
        ]}
      />

      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-wrap items-center gap-2 text-xs text-gray-500 mb-8">
          <Link href="/" className="hover:text-white transition">Home</Link>
          <span>/</span>
          <span className="text-gray-400">Compare</span>
          <span>/</span>
          <span className="text-gray-400">{topic.title}</span>
        </div>

        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-5xl font-black text-white">
            {topic.title}
          </h1>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">{topic.description}</p>
        </div>

        {/* Comparison grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-[#12121a] border border-blue-500/20 rounded-2xl overflow-hidden">
            <div className="px-6 py-4 bg-blue-500/10 border-b border-blue-500/10">
              <h2 className="font-bold text-blue-400">{topic.left.name}</h2>
            </div>
            <div className="p-6">
              <h3 className="text-xs uppercase tracking-wider text-green-400 font-semibold mb-3">Pros</h3>
              <div className="space-y-2 mb-6">
                {topic.left.pros.map((p, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm">
                    <span className="text-green-400 mt-0.5 shrink-0">+</span>
                    <span className="text-gray-300">{p}</span>
                  </div>
                ))}
              </div>
              <h3 className="text-xs uppercase tracking-wider text-red-400 font-semibold mb-3">Cons</h3>
              <div className="space-y-2">
                {topic.left.cons.map((p, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm">
                    <span className="text-red-400 mt-0.5 shrink-0">-</span>
                    <span className="text-gray-300">{p}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-[#12121a] border border-purple-500/20 rounded-2xl overflow-hidden">
            <div className="px-6 py-4 bg-purple-500/10 border-b border-purple-500/10">
              <h2 className="font-bold text-purple-400">{topic.right.name}</h2>
            </div>
            <div className="p-6">
              <h3 className="text-xs uppercase tracking-wider text-green-400 font-semibold mb-3">Pros</h3>
              <div className="space-y-2 mb-6">
                {topic.right.pros.map((p, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm">
                    <span className="text-green-400 mt-0.5 shrink-0">+</span>
                    <span className="text-gray-300">{p}</span>
                  </div>
                ))}
              </div>
              <h3 className="text-xs uppercase tracking-wider text-red-400 font-semibold mb-3">Cons</h3>
              <div className="space-y-2">
                {topic.right.cons.map((p, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm">
                    <span className="text-red-400 mt-0.5 shrink-0">-</span>
                    <span className="text-gray-300">{p}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Verdict */}
        <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/5 border border-green-500/20 rounded-2xl p-8 mb-12">
          <h2 className="text-lg font-bold text-green-400 mb-3">Our Verdict</h2>
          <p className="text-gray-300 text-sm leading-relaxed">
            {topic.verdict}
          </p>
        </div>

        {/* FAQ */}
        {topic.faqItems.length > 0 && (
          <div className="bg-[#12121a] border border-white/5 rounded-2xl p-8 mb-12">
            <h2 className="text-xl font-bold text-white mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {topic.faqItems.map((faq, i) => (
                <div key={i}>
                  <h3 className="text-sm font-semibold text-white mb-2">{faq.question}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        )}

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
            {allComparisons
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
