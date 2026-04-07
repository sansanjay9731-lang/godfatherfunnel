"use client";
import { motion } from "framer-motion";

interface Stat {
  label: string;
  value: string;
}

export default function StatsBar({ stats }: { stats: Stat[] }) {
  return (
    <section className="py-16 bg-[#06060a] border-y border-white/5">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-center"
            >
              <div className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="mt-2 text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
