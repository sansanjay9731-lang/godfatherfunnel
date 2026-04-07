"use client";
import { motion } from "framer-motion";
import Link from "next/link";

interface NicheCardProps {
  slug: string;
  icon: string;
  name: string;
  headline: string;
  index: number;
}

export default function NicheCard({
  slug,
  icon,
  name,
  headline,
  index,
}: NicheCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/${slug}`} className="group block">
        <div className="relative bg-[#12121a] border border-white/5 rounded-2xl p-8 hover:border-purple-500/30 hover:shadow-xl hover:shadow-purple-500/5 transition-all duration-300">
          <div className="text-4xl mb-4">{icon}</div>
          <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition">
            {name}
          </h3>
          <p className="mt-2 text-sm text-gray-400 leading-relaxed">
            {headline}
          </p>
          <div className="mt-4 text-sm font-medium text-blue-400 group-hover:text-blue-300 transition">
            Learn more →
          </div>
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </Link>
    </motion.div>
  );
}
