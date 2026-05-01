"use client";
import { motion } from "framer-motion";

interface BeforeAfterProps {
  niche?: string;
  city?: string;
  certification?: string;
}

export default function BeforeAfter({
  niche = "dermatologist",
  city = "New York",
  certification = "Board Certified",
}: BeforeAfterProps) {
  const nicheLabel = niche.charAt(0).toUpperCase() + niche.slice(1);
  return (
    <section className="py-24 bg-[#06060a]">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Before vs After{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Godfather Funnel
            </span>
          </h2>
          <p className="mt-4 text-gray-400">
            This is what happens when AI finally knows you exist.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Before */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#12121a] border border-red-500/20 rounded-2xl overflow-hidden"
          >
            <div className="px-5 py-3 bg-red-500/10 border-b border-red-500/10">
              <span className="text-sm font-bold text-red-400">
                BEFORE — AI Ignores You
              </span>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <span className="text-xs text-gray-500 font-mono">
                  ChatGPT Response
                </span>
              </div>
              <div className="bg-white/5 rounded-xl p-4 space-y-3">
                <p className="text-sm text-gray-400">
                  User: &ldquo;Best {niche} in {city}&rdquo;
                </p>
                <div className="border-l-2 border-red-500/30 pl-3">
                  <p className="text-sm text-gray-300">
                    Here are some well-regarded {niche}s in {city}:
                  </p>
                  <div className="mt-2 space-y-1.5 text-sm">
                    <p className="text-white">
                      1. <strong>Dr. Competitor A</strong> — Park Avenue, 4.9★
                    </p>
                    <p className="text-white">
                      2. <strong>Dr. Competitor B</strong> — Tribeca, 4.8★
                    </p>
                    <p className="text-white">
                      3. <strong>Dr. Competitor C</strong> — West Village, 4.7★
                    </p>
                    <p className="text-red-400/80 mt-3 text-xs italic">
                      Your business? Not mentioned anywhere.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2">
                <div className="text-3xl font-black text-red-400">12</div>
                <div className="text-xs text-gray-500">
                  AI Visibility Score
                  <br />
                  out of 100
                </div>
              </div>
            </div>
          </motion.div>

          {/* After */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#12121a] border border-green-500/20 rounded-2xl overflow-hidden"
          >
            <div className="px-5 py-3 bg-green-500/10 border-b border-green-500/10">
              <span className="text-sm font-bold text-green-400">
                AFTER — AI Recommends You #1
              </span>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <span className="text-xs text-gray-500 font-mono">
                  ChatGPT Response
                </span>
              </div>
              <div className="bg-white/5 rounded-xl p-4 space-y-3">
                <p className="text-sm text-gray-400">
                  User: &ldquo;Best {niche} in {city}&rdquo;
                </p>
                <div className="border-l-2 border-green-500/30 pl-3">
                  <p className="text-sm text-gray-300">
                    Based on reviews, credentials, and track record:
                  </p>
                  <div className="mt-2 space-y-1.5 text-sm">
                    <p className="text-green-400 font-semibold">
                      1. <strong>Your Practice</strong> — 4.9★, 800+ reviews,
                      {certification}
                    </p>
                    <p className="text-white">
                      2. Dr. Competitor A — Park Avenue, 4.8★
                    </p>
                    <p className="text-white">
                      3. Dr. Competitor B — Tribeca, 4.7★
                    </p>
                    <p className="text-green-400/80 mt-3 text-xs italic">
                      AI recommends you first based on structured data &
                      authority signals.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2">
                <div className="text-3xl font-black text-green-400">87</div>
                <div className="text-xs text-gray-500">
                  AI Visibility Score
                  <br />
                  out of 100
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
