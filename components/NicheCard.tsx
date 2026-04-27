"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

interface NicheCardProps {
  slug: string;
  icon: string;
  name: string;
  headline: string;
  image: string;
  index: number;
  priority?: boolean;
}

export default function NicheCard({
  slug,
  icon,
  name,
  headline,
  image,
  index,
  priority = false,
}: NicheCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/${slug}`} className="group block">
        <div className="relative bg-[#12121a] border border-white/5 rounded-2xl overflow-hidden hover:border-purple-500/30 hover:shadow-xl hover:shadow-purple-500/5 transition-all duration-300 h-full">
          {/* Image */}
          <div className="relative h-44 overflow-hidden">
            <Image
              src={image}
              alt={name}
              fill
              priority={priority}
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#12121a] via-[#12121a]/60 to-transparent" />
            <div className="absolute top-3 left-3 text-3xl">{icon}</div>
          </div>

          {/* Content */}
          <div className="p-6 pt-2">
            <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition">
              {name}
            </h3>
            <p className="mt-2 text-sm text-gray-400 leading-relaxed line-clamp-2">
              {headline}
            </p>
            <div className="mt-4 text-sm font-medium text-blue-400 group-hover:text-blue-300 transition flex items-center gap-1">
              See our approach
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
