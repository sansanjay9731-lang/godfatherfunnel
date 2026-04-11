"use client";
import { useState } from "react";
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
  legal: "Legal",
  lifestyle: "Lifestyle",
  education: "Education",
  finance: "Finance",
};

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-black bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              GODFATHER
            </span>
            <span className="text-xs text-gray-400 uppercase tracking-widest">
              Funnel AI
            </span>
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-6">
            <div className="relative group">
              <button className="text-gray-300 hover:text-white text-sm transition">
                Industries ▾
              </button>
              {/* Mega menu */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[600px] bg-[#12121a] border border-white/10 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-6">
                <div className="grid grid-cols-3 gap-6">
                  {Object.entries(nichesByCategory).map(([cat, items]) => (
                    <div key={cat}>
                      <div className="text-[10px] uppercase tracking-wider text-gray-500 font-semibold mb-2">
                        {categoryLabels[cat] || cat}
                      </div>
                      {items.map((n) => (
                        <Link
                          key={n.slug}
                          href={`/${n.slug}`}
                          className="block px-2 py-1.5 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded transition"
                        >
                          {n.icon} {n.name}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <Link href="/about" className="text-gray-300 hover:text-white text-sm transition">
              About
            </Link>
            <Link href="/services" className="text-gray-300 hover:text-white text-sm transition">
              Services
            </Link>
            <Link href="/blog" className="text-gray-300 hover:text-white text-sm transition">
              Blog
            </Link>
            <Link href="/resources" className="text-gray-300 hover:text-white text-sm transition">
              Resources
            </Link>
            <Link
              href="/audit"
              className="px-5 py-2 text-sm font-semibold bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:shadow-lg hover:shadow-purple-500/25 transition-all"
            >
              Free AI Audit
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-gray-300"
            onClick={() => setOpen(!open)}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#0a0a0f] border-t border-white/5 px-4 py-4 space-y-4 max-h-[80vh] overflow-y-auto">
          {Object.entries(nichesByCategory).map(([cat, items]) => (
            <div key={cat}>
              <div className="text-[10px] uppercase tracking-wider text-gray-500 font-semibold mb-1">
                {categoryLabels[cat] || cat}
              </div>
              {items.map((n) => (
                <Link
                  key={n.slug}
                  href={`/${n.slug}`}
                  className="block py-1.5 text-gray-300 hover:text-white text-sm"
                  onClick={() => setOpen(false)}
                >
                  {n.icon} {n.name}
                </Link>
              ))}
            </div>
          ))}
          <div className="pt-2 border-t border-white/5 space-y-2">
            <Link href="/about" className="block py-2 text-gray-300 hover:text-white text-sm" onClick={() => setOpen(false)}>About</Link>
            <Link href="/services" className="block py-2 text-gray-300 hover:text-white text-sm" onClick={() => setOpen(false)}>Services</Link>
            <Link href="/blog" className="block py-2 text-gray-300 hover:text-white text-sm" onClick={() => setOpen(false)}>Blog</Link>
            <Link href="/resources" className="block py-2 text-gray-300 hover:text-white text-sm" onClick={() => setOpen(false)}>Resources</Link>
            <Link
              href="/audit"
              className="block mt-4 text-center px-5 py-2 text-sm font-semibold bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full"
              onClick={() => setOpen(false)}
            >
              Free AI Audit
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
