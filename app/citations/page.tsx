import { getAllCitationCategories } from "@/lib/citations";
import { generateBreadcrumbSchema, generateCollectionSchema, generateFAQSchema } from "@/lib/schema-helpers";
import SchemaScript from "@/components/SchemaScript";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Citation Directory: Business Listing Guide for AI Search | Godfather Funnel AI",
  description:
    "Complete AI citation directory of 70+ sources. Legal directory citations for AI search, citation building for doctors, and real estate directories that ChatGPT & Google AI use.",
};

const BASE = "https://www.godfatherfunnelai.com";

export default function CitationsPage() {
  const categories = getAllCitationCategories();
  const totalDirectories = categories.reduce((sum, c) => sum + c.directories.length, 0);

  const faqs = [
    {
      question: "What is an AI citation directory?",
      answer: "An AI citation directory is a trusted database, listing, or platform that AI engines (like ChatGPT, Google AI Overviews, and Perplexity) scrape and cross-reference to verify a business's existence, authority, and relevance. Being listed on these directories increases your chances of being recommended by AI."
    },
    {
      question: "How to build citations for doctors",
      answer: "Citation building for doctors requires claiming profiles on major healthcare directories like Healthgrades, WebMD, Zocdoc, and Vitals. You must ensure your Name, Address, and Phone number (NAP), along with your NPI number and specialties, are perfectly consistent across all platforms. AI relies heavily on this consistency to recommend medical practices."
    },
    {
      question: "What are the best citation directories for AI search?",
      answer: "The best citation directories depend on your industry. General platforms include Google Business Profile, Apple Maps, and Yelp. For legal directory citations for AI search, Avvo, FindLaw, and Martindale-Hubbell are critical. For healthcare, WebMD and Healthgrades lead."
    }
  ];

  return (
    <>
      <SchemaScript
        data={[
          generateBreadcrumbSchema([
            { name: "Home", url: BASE },
            { name: "AI Citation Directory", url: `${BASE}/citations` },
          ]),
          generateCollectionSchema({
            name: "AI Citation Directory",
            description: "Complete directory listing guide for AI visibility",
            url: `${BASE}/citations`,
            items: categories.map((c) => ({
              name: c.name,
              url: `${BASE}/citations#${c.slug}`,
            })),
          }),
          generateFAQSchema(faqs),
        ]}
      />

      <section className="pt-32 pb-16 bg-[#0a0a0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 mb-4 text-xs font-medium tracking-wider uppercase bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400">
              {totalDirectories}+ Directories
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
              The Complete{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                AI Citation Directory
              </span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-6">
              AI systems cross-reference multiple sources to decide who to recommend.
              The more quality directories you're listed on, the more likely AI
              recommends you.
            </p>
            <div className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700/50 max-w-3xl mx-auto text-left">
              <h2 className="text-xl font-bold text-white mb-2">Targeted Industry Strategies</h2>
              <p className="text-gray-300 text-sm leading-relaxed">
                Whether you need <strong className="text-blue-400">citation building for doctors</strong> on platforms like WebMD and Healthgrades, or <strong className="text-blue-400">legal directory citations for AI search</strong> via FindLaw and Avvo, precise consistency is crucial. AI models use these specialized niche directories to understand exactly who the top authorities are in every local market.
              </p>
            </div>
          </div>

          {/* Quick nav */}
          <div className="flex flex-wrap gap-3 justify-center mb-16">
            {categories.map((c) => (
              <a
                key={c.slug}
                href={`#${c.slug}`}
                className="px-4 py-2 text-sm bg-[#12121a] border border-white/5 rounded-full text-gray-400 hover:text-white hover:border-white/10 transition-all"
              >
                {c.name}
              </a>
            ))}
          </div>

          {categories.map((category) => (
            <div key={category.slug} id={category.slug} className="mb-16 scroll-mt-24">
              <h2 className="text-2xl font-bold text-white mb-2">{category.name}</h2>
              <p className="text-gray-400 mb-6">{category.description}</p>

              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="py-3 px-4 text-sm font-semibold text-gray-300">Directory</th>
                      <th className="py-3 px-4 text-sm font-semibold text-gray-300">Type</th>
                      <th className="py-3 px-4 text-sm font-semibold text-gray-300">Cost</th>
                      <th className="py-3 px-4 text-sm font-semibold text-gray-300">Priority</th>
                      <th className="py-3 px-4 text-sm font-semibold text-gray-300 hidden md:table-cell">Why It Matters</th>
                    </tr>
                  </thead>
                  <tbody>
                    {category.directories.map((dir) => (
                      <tr
                        key={dir.name}
                        className="border-b border-white/5 hover:bg-[#12121a] transition-colors"
                      >
                        <td className="py-3 px-4">
                          <span className="text-white font-medium">{dir.name}</span>
                        </td>
                        <td className="py-3 px-4">
                          <span className="text-xs text-gray-400 capitalize">{dir.type}</span>
                        </td>
                        <td className="py-3 px-4">
                          <span
                            className={`text-xs px-2 py-1 rounded-full ${
                              dir.freeOrPaid === "free"
                                ? "bg-green-500/10 text-green-400"
                                : dir.freeOrPaid === "freemium"
                                  ? "bg-yellow-500/10 text-yellow-400"
                                  : "bg-red-500/10 text-red-400"
                            }`}
                          >
                            {dir.freeOrPaid}
                          </span>
                        </td>
                        <td className="py-3 px-4">
                          <span
                            className={`text-xs px-2 py-1 rounded-full ${
                              dir.importance === "critical"
                                ? "bg-red-500/10 text-red-400"
                                : dir.importance === "important"
                                  ? "bg-blue-500/10 text-blue-400"
                                  : "bg-gray-500/10 text-gray-400"
                            }`}
                          >
                            {dir.importance}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-sm text-gray-400 hidden md:table-cell max-w-xs">
                          {dir.description}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-[#0a0a0f] to-[#0f0a1a]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-white mb-4">
            We Handle All Citation Submissions for You
          </h2>
          <p className="text-gray-400 mb-8">
            Our team submits your business to all relevant directories with
            consistent NAP data, proper categories, and optimized descriptions.
          </p>
          <a
            href="/audit"
            className="inline-block px-10 py-5 text-lg font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:shadow-2xl hover:shadow-purple-500/25 hover:scale-105 transition-all duration-300"
          >
            Start With a Free AI Audit →
          </a>
        </div>
      </section>
    </>
  );
}
