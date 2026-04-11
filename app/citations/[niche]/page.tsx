import { getCitationsForNiche } from "@/lib/citations";
import { generateBreadcrumbSchema, generateCollectionSchema } from "@/lib/schema-helpers";
import SchemaScript from "@/components/SchemaScript";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

const BASE = "https://www.godfatherfunnelai.com";

const nicheNames: Record<string, string> = {
  dermatologists: "Dermatologists",
  dentists: "Dentists",
  "plastic-surgeons": "Plastic Surgeons",
  "ivf-clinics": "IVF Clinics",
  lawyers: "Lawyers",
  "real-estate": "Real Estate",
  "eye-clinics": "Eye Clinics",
  orthopedics: "Orthopedics",
  "ca-firms": "CA Firms",
  restaurants: "Restaurants",
  gyms: "Gyms & Fitness",
  "wedding-planners": "Wedding Planners",
  physiotherapy: "Physiotherapy",
  veterinary: "Veterinary Clinics",
  "coaching-institutes": "Coaching Institutes",
  "interior-designers": "Interior Designers",
  "ayurveda-clinics": "Ayurveda & Wellness",
  "hair-salons": "Hair Salons & Spas",
  pediatricians: "Pediatricians",
  psychiatrists: "Psychiatrists & Therapists",
};

const allNicheSlugs = Object.keys(nicheNames);

export function generateStaticParams() {
  return allNicheSlugs.map((niche) => ({ niche }));
}

export async function generateMetadata(props: {
  params: Promise<{ niche: string }>;
}): Promise<Metadata> {
  const { niche } = await props.params;
  const name = nicheNames[niche];
  if (!name) return {};
  return {
    title: `Citation & Directory Guide for ${name} | Godfather Funnel AI`,
    description: `Complete list of ${allNicheSlugs.length}+ directories where ${name.toLowerCase()} should be listed for maximum AI visibility. Free and paid options with priority rankings.`,
  };
}

export default async function NicheCitationsPage(props: {
  params: Promise<{ niche: string }>;
}) {
  const { niche } = await props.params;
  const name = nicheNames[niche];
  if (!name) notFound();

  const categories = getCitationsForNiche(niche);
  const totalDirs = categories.reduce((sum, c) => sum + c.directories.length, 0);

  return (
    <>
      <SchemaScript
        data={generateBreadcrumbSchema([
          { name: "Home", url: BASE },
          { name: "Citations", url: `${BASE}/citations` },
          { name: `${name} Directories`, url: `${BASE}/citations/${niche}` },
        ])}
      />

      <section className="pt-32 pb-16 bg-[#0a0a0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-4">
            <a
              href="/citations"
              className="text-sm text-gray-500 hover:text-blue-400 transition-colors"
            >
              ← All Directories
            </a>
          </div>

          <div className="mb-16">
            <h1 className="text-3xl sm:text-4xl font-black text-white mb-4">
              Directory & Citation Guide for{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                {name}
              </span>
            </h1>
            <p className="text-gray-400 text-lg">
              {totalDirs} directories where {name.toLowerCase()} should be listed
              for maximum AI visibility. Organized by priority.
            </p>
          </div>

          {categories.map((category) => (
            <div key={category.slug} className="mb-12">
              <h2 className="text-xl font-bold text-white mb-2">{category.name}</h2>
              <p className="text-gray-400 text-sm mb-4">{category.description}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.directories
                  .sort((a, b) => {
                    const order = { critical: 0, important: 1, "nice-to-have": 2 };
                    return order[a.importance] - order[b.importance];
                  })
                  .map((dir) => (
                    <div
                      key={dir.name}
                      className="p-4 bg-[#12121a] border border-white/5 rounded-xl"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-sm font-semibold text-white">{dir.name}</h3>
                        <span
                          className={`text-[10px] px-2 py-0.5 rounded-full shrink-0 ml-2 ${
                            dir.importance === "critical"
                              ? "bg-red-500/10 text-red-400"
                              : dir.importance === "important"
                                ? "bg-blue-500/10 text-blue-400"
                                : "bg-gray-500/10 text-gray-400"
                          }`}
                        >
                          {dir.importance}
                        </span>
                      </div>
                      <p className="text-xs text-gray-400 mb-3">{dir.description}</p>
                      <div className="flex items-center gap-2">
                        <span
                          className={`text-[10px] px-2 py-0.5 rounded-full ${
                            dir.freeOrPaid === "free"
                              ? "bg-green-500/10 text-green-400"
                              : dir.freeOrPaid === "freemium"
                                ? "bg-yellow-500/10 text-yellow-400"
                                : "bg-red-500/10 text-red-400"
                          }`}
                        >
                          {dir.freeOrPaid}
                        </span>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}

          {/* Other niches */}
          <div className="mt-16 pt-8 border-t border-white/5">
            <h2 className="text-lg font-bold text-white mb-4">
              Citation Guides for Other Industries
            </h2>
            <div className="flex flex-wrap gap-2">
              {allNicheSlugs
                .filter((s) => s !== niche)
                .map((s) => (
                  <a
                    key={s}
                    href={`/citations/${s}`}
                    className="px-3 py-1.5 text-xs bg-[#12121a] border border-white/5 rounded-full text-gray-400 hover:text-white hover:border-white/10 transition-all"
                  >
                    {nicheNames[s]}
                  </a>
                ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-[#0a0a0f] to-[#0f0a1a]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-white mb-4">
            We Submit to All {totalDirs}+ Directories for You
          </h2>
          <p className="text-gray-400 mb-8">
            Consistent NAP data, optimized descriptions, and proper categories
            across every directory. Start with a free audit.
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
