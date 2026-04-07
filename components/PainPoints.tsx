"use client";
import { motion } from "framer-motion";

interface PainPoint {
  title: string;
  description: string;
}

export default function PainPoints({ points }: { points: PainPoint[] }) {
  return (
    <section className="py-24 bg-[#06060a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-black text-white text-center mb-4">
          The Problem{" "}
          <span className="bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
            You Don&apos;t Know You Have
          </span>
        </h2>
        <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
          While you focus on patients, AI is quietly deciding who gets recommended — and it&apos;s not you.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {points.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-[#12121a] border border-red-500/10 rounded-2xl p-8 hover:border-red-500/20 transition-all"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-red-500/10 text-red-400 text-lg font-bold mb-4">
                {i + 1}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{p.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {p.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
