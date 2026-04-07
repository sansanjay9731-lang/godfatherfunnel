"use client";
import { motion } from "framer-motion";
import Link from "next/link";

interface HeroProps {
  headline: string;
  subline: string;
  ctaText: string;
  ctaHref?: string;
  searchExample?: string;
}

export default function Hero({
  headline,
  subline,
  ctaText,
  ctaHref = "/audit",
  searchExample,
}: HeroProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-[#0a0a0f]">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[128px] animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-4 py-1.5 mb-6 text-xs font-medium tracking-wider uppercase bg-white/5 border border-white/10 rounded-full text-blue-400">
            AI is changing how clients find you
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black leading-tight">
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              {headline}
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            {subline}
          </p>
        </motion.div>

        {/* ChatGPT-style demo */}
        {searchExample && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 max-w-2xl mx-auto"
          >
            <div className="bg-[#12121a] border border-white/10 rounded-2xl p-6 text-left">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <span className="text-xs text-gray-500 font-mono">
                  ChatGPT
                </span>
              </div>
              <p className="text-sm text-gray-400 mb-3">
                User: &ldquo;{searchExample}&rdquo;
              </p>
              <div className="bg-white/5 rounded-xl p-4">
                <p className="text-sm text-gray-300 leading-relaxed">
                  <span className="text-blue-400 font-semibold">
                    AI Response:
                  </span>{" "}
                  Based on patient reviews and credentials, I recommend these
                  top-rated options:
                </p>
                <div className="mt-3 space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-green-400">1.</span>
                    <span className="text-white font-medium">
                      Dr. Competitor A
                    </span>
                    <span className="text-gray-500">— 4.9★, 500+ reviews</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-green-400">2.</span>
                    <span className="text-white font-medium">
                      Dr. Competitor B
                    </span>
                    <span className="text-gray-500">— 4.8★, 300+ reviews</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-red-400">3.</span>
                    <span className="text-red-400/70 font-medium">
                      You? Not found.
                    </span>
                    <span className="text-red-400/50">— Invisible to AI</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href={ctaHref}
            className="px-8 py-4 text-base font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:shadow-xl hover:shadow-purple-500/25 hover:scale-105 transition-all duration-300"
          >
            {ctaText}
          </Link>
          <Link
            href="#services"
            className="px-8 py-4 text-base font-medium text-gray-300 border border-white/10 rounded-full hover:bg-white/5 transition-all"
          >
            See How It Works
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
