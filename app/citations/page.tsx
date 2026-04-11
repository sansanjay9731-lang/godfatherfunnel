import { getAllCitationCategories } from "@/lib/citations";
import { generateBreadcrumbSchema, generateCollectionSchema } from "@/lib/schema-helpers";
import SchemaScript from "@/components/SchemaScript";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Citation & Directory Guide — Where to List Your Business for AI Visibility | Godfather Funnel AI",
  description:
    "Complete directory of 70+ citation sources organized by industry. Healthcare, legal, real estate, education, lifestyle directories that AI uses to recommend businesses.",
};

const BASE = "https://www.godfatherfunnelai.com";

export default function CitationsPage() {
  const categories = getAllCitationCategories();
  const totalDirectories = categories.reduce((sum, c) => sum + c.directories.length, 0);

  return (
    <>
      <SchemaScript
        data={[
          generateBreadcrumbSchema([
            { name: "Home", url: BASE },
            { name: "Citations & Directories", url: `${BASE}/citations` },
          ]),
          generateCollectionSchema({
            name: "Business Citation & Directory Guide",
            description: "Complete directory listing guide for AI visibility",
            url: `${BASE}/citations`,
            items: categories.map((c) => ({
              name: c.name,
              url: `${BASE}/citations#${c.slug}`,
            })),
          }),
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
                Citation & Directory Guide
              </span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              AI systems cross-reference multiple sources to decide who to recommend.
              The more quality directories you&apos;re listed on, the more likely AI
              recommends you.
            </p>
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
