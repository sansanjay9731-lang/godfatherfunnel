import Hero from "@/components/Hero";
import NicheCard from "@/components/NicheCard";
import StatsBar from "@/components/StatsBar";
import { niches } from "@/lib/niche-data";

const globalStats = [
  { label: "Of consumers under 35 use AI to find services", value: "73%" },
  { label: "Businesses invisible to AI search", value: "92%" },
  { label: "Revenue lost to AI-recommended competitors", value: "₹4.2Cr+" },
];

export default function Home() {
  return (
    <>
      <Hero
        headline="Your Competitors Are AI-Recommended. You're Invisible."
        subline="When clients ask ChatGPT, Google AI, or Perplexity for the best doctor, lawyer, or builder — AI gives names. If yours isn't one of them, you don't exist. We fix that."
        ctaText="Get Your Free AI Visibility Audit"
        searchExample="best dermatologist near me"
      />

      <StatsBar stats={globalStats} />

      <section className="py-24 bg-[#0a0a0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              We Dominate AI For{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Premium Industries
              </span>
            </h2>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              Select your industry to see exactly how we make AI recommend you
              by name.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {niches.map((n, i) => (
              <NicheCard
                key={n.slug}
                slug={n.slug}
                icon={n.icon}
                name={n.name}
                headline={n.heroSubline.slice(0, 100) + "..."}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 bg-[#06060a] border-y border-white/5">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-16">
            How{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Godfather Funnel
            </span>{" "}
            Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                step: "01",
                title: "We Audit Your AI Invisibility",
                desc: "We check if ChatGPT, Perplexity, Google AI, and voice assistants know you exist. Spoiler: they probably don't.",
              },
              {
                step: "02",
                title: "We Make AI Understand You",
                desc: "Schema markup, structured data, llms.txt, AI-optimized content — we feed AI everything it needs to recommend you.",
              },
              {
                step: "03",
                title: "AI Recommends You by Name",
                desc: "Within 30-90 days, when clients ask AI for the best in your field — YOUR name comes up first.",
              },
            ].map((item) => (
              <div key={item.step} className="text-left">
                <div className="text-5xl font-black bg-gradient-to-r from-blue-400/20 to-purple-500/20 bg-clip-text text-transparent mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#0a0a0f]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-12">
            What Happens When AI{" "}
            <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
              Recommends You
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                quote:
                  "After Godfather Funnel optimized our clinic, ChatGPT started recommending us by name. We got 23 new patients in the first month — all from AI search.",
                name: "Dr. Priya S.",
                role: "Dermatologist, Mumbai",
              },
              {
                quote:
                  "We were spending ₹2L/month on Google Ads. Now AI sends us patients for free. Our cost per acquisition dropped by 65%.",
                name: "Dr. Rahul M.",
                role: "Dental Surgeon, Delhi",
              },
            ].map((t, i) => (
              <div
                key={i}
                className="bg-[#12121a] border border-white/5 rounded-2xl p-8 text-left"
              >
                <p className="text-gray-300 text-sm leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-4">
                  <div className="text-white font-semibold text-sm">
                    {t.name}
                  </div>
                  <div className="text-gray-500 text-xs">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-b from-[#0a0a0f] to-[#0f0a1a]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-5xl font-black text-white mb-6">
            Stop Losing Clients to AI.
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Start Being Recommended.
            </span>
          </h2>
          <p className="text-gray-400 mb-8 text-lg">
            Get a free AI visibility report. See exactly where you stand vs your
            competitors in AI search. Takes 30 seconds.
          </p>
          <a
            href="/audit"
            className="inline-block px-10 py-5 text-lg font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:shadow-2xl hover:shadow-purple-500/25 hover:scale-105 transition-all duration-300"
          >
            Get Your Free AI Audit Now →
          </a>
        </div>
      </section>
    </>
  );
}
