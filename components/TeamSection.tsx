"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { images } from "@/lib/niches";

const team = [
  {
    name: "Arjun Verma",
    role: "AI Strategy Lead",
    desc: "Former Google engineer. Built AI visibility systems for 100+ premium businesses.",
    image: images.teamMale1,
  },
  {
    name: "Sneha Iyer",
    role: "Technical SEO Architect",
    desc: "Schema markup specialist. Makes search engines and AI systems understand your business.",
    image: images.teamFemale1,
  },
  {
    name: "Karan Malhotra",
    role: "Growth & Ads Manager",
    desc: "Managed ₹5Cr+ in ad spend. Specializes in ROI-focused campaigns for premium niches.",
    image: images.teamMale2,
  },
  {
    name: "Riya Desai",
    role: "Content & AEO Lead",
    desc: "Creates AI-citation-ready content. Turns complex expertise into AI-recommended authority.",
    image: images.teamFemale2,
  },
];

export default function TeamSection() {
  return (
    <section className="py-24 bg-[#0a0a0f]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 mb-4 text-xs font-medium tracking-wider uppercase bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400">
            The People Behind Your AI Domination
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Meet the{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Godfather Team
            </span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            A team of AI strategists, technical SEOs, and growth hackers
            dedicated to making AI recommend your business.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#12121a] border border-white/5 rounded-2xl p-6 text-center hover:border-purple-500/20 transition-all group"
            >
              <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden ring-2 ring-white/10 group-hover:ring-purple-500/30 transition-all">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="96px"
                />
              </div>
              <h3 className="text-white font-bold text-base">{member.name}</h3>
              <p className="text-purple-400 text-xs font-medium mt-1">
                {member.role}
              </p>
              <p className="text-gray-500 text-xs mt-3 leading-relaxed">
                {member.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
