import Link from "next/link";
import { niches } from "@/lib/niche-data";

export default function Footer() {
  return (
    <footer className="bg-[#06060a] border-t border-white/5 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <h3 className="text-xl font-black bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              GODFATHER FUNNEL AI
            </h3>
            <p className="mt-3 text-sm text-gray-400 leading-relaxed">
              We make AI recommend you by name. AEO + 360° marketing for
              premium businesses.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Industries
            </h4>
            <div className="space-y-2">
              {niches.map((n) => (
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

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Services
            </h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p>AEO Optimization</p>
              <p>AI Visibility Audits</p>
              <p>Schema & Structured Data</p>
              <p>Programmatic SEO</p>
              <p>Google & Meta Ads</p>
              <p>Reputation Management</p>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Get Started
            </h4>
            <Link
              href="/audit"
              className="inline-block px-6 py-3 text-sm font-semibold bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:shadow-lg hover:shadow-purple-500/25 transition-all"
            >
              Free AI Audit
            </Link>
            <p className="mt-4 text-sm text-gray-400">
              contact@godfatherfunnelai.com
            </p>
            <p className="text-sm text-gray-400">+91 98765 43210</p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} Godfather Funnel. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
