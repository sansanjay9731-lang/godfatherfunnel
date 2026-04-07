"use client";
import { motion } from "framer-motion";
import Link from "next/link";

interface Service {
  tier: string;
  price: string;
  features: string[];
}

export default function ServiceTiers({ services }: { services: Service[] }) {
  const tierColors = [
    "from-blue-500/20 to-blue-600/5 border-blue-500/20",
    "from-purple-500/20 to-purple-600/5 border-purple-500/20",
    "from-amber-500/20 to-amber-600/5 border-amber-500/20",
  ];

  const badgeColors = [
    "bg-blue-500/10 text-blue-400",
    "bg-purple-500/10 text-purple-400",
    "bg-amber-500/10 text-amber-400",
  ];

  return (
    <section id="services" className="py-24 bg-[#0a0a0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Choose Your Level of{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              AI Domination
            </span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            From foundational AI visibility to complete market domination — pick
            the tier that matches your ambition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={s.tier}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`relative bg-gradient-to-b ${tierColors[i]} border rounded-2xl p-8 ${i === 2 ? "ring-2 ring-amber-500/30" : ""}`}
            >
              {i === 2 && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 text-xs font-bold bg-amber-500 text-black rounded-full">
                  MOST POPULAR
                </div>
              )}
              <div
                className={`inline-block px-3 py-1 text-xs font-semibold rounded-full mb-4 ${badgeColors[i]}`}
              >
                {s.tier}
              </div>
              <div className="text-2xl font-black text-white">{s.price}</div>

              <ul className="mt-6 space-y-3">
                {s.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <span className="text-green-400 mt-0.5 shrink-0">✓</span>
                    <span className="text-gray-300">{f}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/audit"
                className={`mt-8 block text-center px-6 py-3 text-sm font-semibold rounded-full transition-all ${
                  i === 2
                    ? "bg-gradient-to-r from-amber-500 to-orange-500 text-black hover:shadow-lg hover:shadow-amber-500/25"
                    : "bg-white/5 text-white border border-white/10 hover:bg-white/10"
                }`}
              >
                Get Started
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
