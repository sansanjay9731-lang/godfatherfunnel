"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { images } from "@/lib/niches";

interface HeroProps {
  headline: string;
  subline: string;
  ctaText: string;
  ctaHref?: string;
  searchExample?: string;
}

const floatingAvatars = [
  { src: images.doctorFemale1, top: "15%", left: "5%", delay: 0 },
  { src: images.doctorMale1, top: "25%", right: "8%", delay: 0.3 },
  { src: images.businessWoman, bottom: "30%", left: "8%", delay: 0.6 },
  { src: images.businessMan, bottom: "20%", right: "5%", delay: 0.9 },
];

export default function Hero({
  headline,
  subline,
  ctaText,
  ctaHref = "/audit",
  searchExample,
}: HeroProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Grid pattern background */}
      <div className="absolute inset-0 bg-[#0a0a0f]">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/8 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/8 rounded-full blur-[150px] animate-pulse" />
      </div>

      {/* Floating doctor/professional avatars (desktop only) */}
      {floatingAvatars.map((avatar, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: avatar.delay + 0.5 }}
          className="absolute hidden lg:block"
          style={{
            top: avatar.top,
            left: avatar.left,
            right: avatar.right,
            bottom: avatar.bottom,
          }}
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: avatar.delay,
            }}
            className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-white/10 shadow-lg shadow-purple-500/10"
          >
            <Image
              src={avatar.src}
              alt=""
              width={56}
              height={56}
              priority
              className="object-cover w-full h-full"
            />
          </motion.div>
        </motion.div>
      ))}

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-xs font-medium tracking-wider uppercase bg-white/5 border border-white/10 rounded-full text-blue-400">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            150+ businesses AI-optimized
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black leading-tight">
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              {headline}
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            {subline}
          </p>
        </div>

        {/* ChatGPT-style demo */}
        {searchExample && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 max-w-2xl mx-auto"
          >
            <div className="bg-[#12121a]/80 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-left shadow-2xl shadow-purple-500/5">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <span className="text-xs text-gray-500 font-mono">
                  ChatGPT
                </span>
                <span className="ml-auto text-[10px] px-2 py-0.5 bg-white/5 rounded-full text-gray-500">
                  Live Preview
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
                  <div className="flex items-center gap-2 text-sm px-3 py-2 bg-red-500/5 border border-red-500/10 rounded-lg">
                    <span className="text-red-400">✕</span>
                    <span className="text-red-400/80 font-medium">
                      You? Not found.
                    </span>
                    <span className="text-red-400/50 text-xs">
                      — Invisible to AI
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={ctaHref}
            className="group px-8 py-4 text-base font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:shadow-xl hover:shadow-purple-500/25 hover:scale-105 transition-all duration-300"
          >
            {ctaText}
            <span className="inline-block ml-1 transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
          <Link
            href="#services"
            className="px-8 py-4 text-base font-medium text-gray-300 border border-white/10 rounded-full hover:bg-white/5 transition-all"
          >
            See How It Works
          </Link>
        </div>
      </div>
    </section>
  );
}
