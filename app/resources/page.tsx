import { getAllResources } from "@/lib/resources";
import { generateBreadcrumbSchema, generateCollectionSchema } from "@/lib/schema-helpers";
import SchemaScript from "@/components/SchemaScript";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free AEO & AI Marketing Resources | Godfather Funnel AI",
  description:
    "Free guides, templates, checklists, and tools to make your business AI-visible. Schema markup templates, llms.txt guides, NAP toolkit, and more.",
};

const BASE = "https://www.godfatherfunnelai.com";

export default function ResourcesPage() {
  const resources = getAllResources();
  const categoryLabels: Record<string, string> = {
    checklist: "Checklists",
    template: "Templates",
    guide: "Guides",
    tool: "Tools",
  };

  const grouped = resources.reduce(
    (acc, r) => {
      if (!acc[r.category]) acc[r.category] = [];
      acc[r.category].push(r);
      return acc;
    },
    {} as Record<string, typeof resources>,
  );

  return (
    <>
      <SchemaScript
        data={[
          generateBreadcrumbSchema([
            { name: "Home", url: BASE },
            { name: "Resources", url: `${BASE}/resources` },
          ]),
          generateCollectionSchema({
            name: "AEO & AI Marketing Resources",
            description: "Free resources for AI visibility optimization",
            url: `${BASE}/resources`,
            items: resources.map((r) => ({
              name: r.title,
              url: `${BASE}/resources/${r.slug}`,
            })),
          }),
        ]}
      />

      <section className="pt-32 pb-16 bg-[#0a0a0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 mb-4 text-xs font-medium tracking-wider uppercase bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400">
              Free Resources
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
              AI Marketing{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Resources & Tools
              </span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Everything you need to make your business AI-visible. Free templates,
              guides, checklists, and tools.
            </p>
          </div>

          {Object.entries(grouped).map(([category, items]) => (
            <div key={category} className="mb-16">
              <h2 className="text-2xl font-bold text-white mb-6">
                {categoryLabels[category] || category}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((r) => (
                  <a
                    key={r.slug}
                    href={`/resources/${r.slug}`}
                    className="block p-6 bg-[#12121a] border border-white/5 rounded-2xl hover:border-white/10 hover:bg-[#16161f] transition-all group"
                  >
                    <span className="text-3xl mb-3 block">{r.icon}</span>
                    <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors mb-2">
                      {r.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {r.description}
                    </p>
                    <span className="inline-block mt-4 text-xs font-medium text-blue-400 uppercase tracking-wider">
                      {r.category} →
                    </span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-[#0a0a0f] to-[#0f0a1a]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-white mb-4">
            Want a Personalized AI Audit?
          </h2>
          <p className="text-gray-400 mb-8">
            Our free tool checks your website across 7 AI visibility factors and
            gives you an instant score.
          </p>
          <a
            href="/audit"
            className="inline-block px-10 py-5 text-lg font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:shadow-2xl hover:shadow-purple-500/25 hover:scale-105 transition-all duration-300"
          >
            Get Your Free AI Audit →
          </a>
        </div>
      </section>
    </>
  );
}
