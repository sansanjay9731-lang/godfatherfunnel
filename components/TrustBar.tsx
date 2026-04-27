"use client";
import { motion } from "framer-motion";

const trustItems = [
  { value: "150+", label: "Businesses AI-Optimized" },
  { value: "6", label: "Industries We Dominate" },
  { value: "30 Days", label: "Avg. Time to AI Visibility" },
  { value: "4.9★", label: "Client Satisfaction" },
];

export default function TrustBar() {
  return (
    <section className="py-10 bg-[#08080d] border-y border-white/5">
      <div className="max-w-6xl mx-auto px-4">
        {/* Trust stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {trustItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-2xl font-black text-white">{item.value}</div>
              <div className="text-xs text-gray-500 mt-1">{item.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Featured in logos (text-based for now) */}
        <div className="flex flex-wrap items-center justify-center gap-8 opacity-40">
          {[
            "Forbes",
            "TechCrunch",
            "Wired",
            "Bloomberg",
            "Business Insider",
          ].map((name) => (
            <span
              key={name}
              className="text-sm font-semibold text-gray-400 tracking-wider uppercase"
            >
              {name}
            </span>
          ))}
        </div>
        <p className="text-center text-[10px] text-gray-600 mt-3">
          As featured in leading business publications
        </p>
      </div>
    </section>
  );
}
