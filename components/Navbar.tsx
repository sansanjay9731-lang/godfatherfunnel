"use client";
import { useState } from "react";
import Link from "next/link";
import { niches } from "@/lib/niche-data";

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
              <div className="absolute top-full left-0 mt-2 w-56 bg-[#12121a] border border-white/10 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {niches.map((n) => (
                  <Link
                    key={n.slug}
                    href={`/${n.slug}`}
                    className="block px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/5 first:rounded-t-xl last:rounded-b-xl transition"
                  >
                    {n.icon} {n.name}
                  </Link>
                ))}
              </div>
            </div>
            <Link href="/blog" className="text-gray-300 hover:text-white text-sm transition">
              Blog
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
        <div className="md:hidden bg-[#0a0a0f] border-t border-white/5 px-4 py-4 space-y-2">
          {niches.map((n) => (
            <Link
              key={n.slug}
              href={`/${n.slug}`}
              className="block py-2 text-gray-300 hover:text-white text-sm"
              onClick={() => setOpen(false)}
            >
              {n.icon} {n.name}
            </Link>
          ))}
          <Link
            href="/audit"
            className="block mt-4 text-center px-5 py-2 text-sm font-semibold bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full"
            onClick={() => setOpen(false)}
          >
            Free AI Audit
          </Link>
        </div>
      )}
    </nav>
  );
}
