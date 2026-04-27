import Link from "next/link";
import { niches } from "@/lib/niches";

const nichesByCategory: Record<string, typeof niches> = {};
for (const n of niches) {
  const cat = n.metaCategory;
  if (!nichesByCategory[cat]) nichesByCategory[cat] = [];
  nichesByCategory[cat].push(n);
}

const categoryLabels: Record<string, string> = {
  healthcare: "Healthcare",
  legal: "Legal & Finance",
  lifestyle: "Lifestyle",
  education: "Education",
  finance: "Finance",
};

export default function Footer() {
  return (
    <footer className="bg-[#06060a] border-t border-white/5 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-black bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              GODFATHER FUNNEL AI
            </h3>
            <p className="mt-3 text-sm text-gray-400 leading-relaxed">
              We make AI recommend you by name. AEO + 360° marketing for
              premium businesses across 20 industries.
            </p>
            <p className="mt-4 text-sm text-gray-400">
              contact@godfatherfunnelai.com
            </p>
            <p className="text-sm text-gray-400">+44 20 7946 0000</p>
          </div>

          {/* Industries by category */}
          {Object.entries(nichesByCategory).map(([cat, items]) => (
            <div key={cat}>
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                {categoryLabels[cat] || cat}
              </h4>
              <div className="space-y-2">
                {items.map((n) => (
                  <Link
                    key={n.slug}
                    href={`/${n.slug}`}
                    className="block text-sm text-gray-400 hover:text-white transition"
                  >
                    {n.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          {/* Company + Resources */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Company
            </h4>
            <div className="space-y-2">
              <Link href="/about" className="block text-sm text-gray-400 hover:text-white transition">About Us</Link>
              <Link href="/services" className="block text-sm text-gray-400 hover:text-white transition">Services</Link>
              <Link href="/case-studies" className="block text-sm text-gray-400 hover:text-white transition">Case Studies</Link>
              <Link href="/blog" className="block text-sm text-gray-400 hover:text-white transition">Blog</Link>
              <Link href="/resources" className="block text-sm text-gray-400 hover:text-white transition">Resources</Link>
              <Link href="/citations" className="block text-sm text-gray-400 hover:text-white transition">Citation Guide</Link>
              <Link href="/faq" className="block text-sm text-gray-400 hover:text-white transition">FAQ</Link>
              <Link href="/contact" className="block text-sm text-gray-400 hover:text-white transition">Contact</Link>
            </div>
            <div className="mt-6">
              <Link
                href="/audit"
                className="inline-block px-6 py-3 text-sm font-semibold bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:shadow-lg hover:shadow-purple-500/25 transition-all"
              >
                Free AI Audit
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} Godfather Funnel AI. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
