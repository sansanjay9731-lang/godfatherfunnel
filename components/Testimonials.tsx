"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { images } from "@/lib/niches";

const testimonials = [
  {
    quote:
      "After Godfather Funnel optimized our clinic, ChatGPT started recommending us by name. We got 23 new patients in the first month — all from AI search.",
    name: "Dr. Sarah Jenkins",
    role: "Dermatologist, London",
    image: images.doctorFemale1,
    scoreBefore: 12,
    scoreAfter: 87,
    stars: 5,
  },
  {
    quote:
      "We were spending $5,000/month on Google Ads. Now AI sends us patients for free. Our cost per acquisition dropped by 65%.",
    name: "Dr. Michael Chen",
    role: "Dental Surgeon, NYC",
    image: images.doctorMale1,
    scoreBefore: 8,
    scoreAfter: 91,
    stars: 5,
  },
  {
    quote:
      "I was skeptical at first. Then I searched my own name on ChatGPT and saw nothing. 60 days later, I'm the #1 recommendation in Sydney for rhinoplasty.",
    name: "Dr. Elena Rodriguez",
    role: "Plastic Surgeon, Sydney",
    image: images.doctorFemale2,
    scoreBefore: 5,
    scoreAfter: 82,
    stars: 5,
  },
  {
    quote:
      "Our IVF inquiries went up 180% in 3 months. Couples are finding us through AI before they even Google. This is the future of patient acquisition.",
    name: "Dr. David Sterling",
    role: "IVF Specialist, Chicago",
    image: images.doctorMale2,
    scoreBefore: 15,
    scoreAfter: 79,
    stars: 5,
  },
  {
    quote:
      "As a corporate lawyer, I never thought AI marketing would apply to me. Now ChatGPT recommends our firm for M&A queries. We landed 3 retainers from AI referrals.",
    name: "Marcus Thorne",
    role: "Corporate Lawyer, London",
    image: images.businessWoman,
    scoreBefore: 3,
    scoreAfter: 74,
    stars: 5,
  },
  {
    quote:
      "Homebuyers are asking AI which builder to trust. After Godfather Funnel, our project is the first name AI mentions in Melbourne. Bookings are up 40%.",
    name: "Jonathan Hughes",
    role: "MD, Hughes Realty, Melbourne",
    image: images.businessMan,
    scoreBefore: 10,
    scoreAfter: 85,
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#0a0a0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 mb-4 text-xs font-medium tracking-wider uppercase bg-green-500/10 border border-green-500/20 rounded-full text-green-400">
            Real Results From Real Clients
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            What Happens When AI{" "}
            <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
              Recommends You
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#12121a] border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-all group"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.stars }).map((_, si) => (
                  <span key={si} className="text-amber-400 text-sm">
                    ★
                  </span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Score badge */}
              <div className="flex items-center gap-2 mb-5 px-3 py-2 bg-white/5 rounded-lg">
                <span className="text-xs text-gray-500">AI Score:</span>
                <span className="text-xs font-bold text-red-400">
                  {t.scoreBefore}
                </span>
                <span className="text-xs text-gray-600">→</span>
                <span className="text-xs font-bold text-green-400">
                  {t.scoreAfter}
                </span>
                <span className="ml-auto text-[10px] px-2 py-0.5 bg-green-500/10 text-green-400 rounded-full font-medium">
                  +{t.scoreAfter - t.scoreBefore} pts
                </span>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-white/10 group-hover:ring-purple-500/30 transition-all">
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">
                    {t.name}
                  </div>
                  <div className="text-gray-500 text-xs">{t.role}</div>
                </div>
                <div className="ml-auto">
                  <span className="text-[10px] px-2 py-1 bg-blue-500/10 text-blue-400 rounded-full font-medium">
                    Verified
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
