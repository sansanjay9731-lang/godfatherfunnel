import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies — Real AI Visibility Results | Godfather Funnel AI",
  description:
    "See how we made AI recommend dermatologists, dentists, IVF clinics, lawyers, and real estate developers by name. Real results from India's #1 AEO agency.",
};

const caseStudies = [
  {
    niche: "Dermatologist",
    location: "Mumbai",
    name: "Dr. Priya Sharma Skin Clinic",
    challenge:
      "Despite being one of Mumbai's top dermatologists with 15+ years experience and 4.8 Google rating, Dr. Sharma was completely invisible to AI. When patients asked ChatGPT 'best dermatologist in Mumbai', her clinic wasn't mentioned.",
    solution: [
      "Implemented comprehensive schema markup (MedicalBusiness, Physician, MedicalProcedure)",
      "Created llms.txt with clinic credentials, specializations, and differentiators",
      "Built 12 treatment-specific landing pages with FAQ schema",
      "Optimized Google Business Profile with 200+ reviews and weekly posts",
      "Created authority content: 8 blog posts on skin treatments cited by AI",
    ],
    results: [
      { metric: "AI Visibility Score", before: "8/100", after: "91/100" },
      { metric: "ChatGPT Mentions", before: "0", after: "Named in top 3" },
      { metric: "Monthly Leads", before: "12", after: "47" },
      { metric: "Revenue Impact", before: "—", after: "+₹8.5L/month" },
    ],
    timeline: "45 days",
  },
  {
    niche: "Dentist",
    location: "Delhi",
    name: "SmileCraft Dental Studio",
    challenge:
      "A premium dental implant clinic in South Delhi competing against 50+ clinics. Google Ads cost ₹350 per click with 2% conversion. AI search showed zero mentions of the clinic.",
    solution: [
      "Full AEO audit and schema implementation (Dentist, MedicalProcedure, PriceRange)",
      "Built 'dental implant cost in Delhi' landing page — now ranks #2 on Google AND gets cited by AI",
      "Created comparison content: 'dental implants vs bridges' with AI-optimized structure",
      "Submitted to 30+ dental directories with consistent NAP data",
      "Weekly Google Posts showcasing before/after results",
    ],
    results: [
      { metric: "AI Visibility Score", before: "15/100", after: "87/100" },
      { metric: "Google AI Overview", before: "Not featured", after: "Featured" },
      { metric: "Cost per Lead", before: "₹4,200", after: "₹800" },
      { metric: "Monthly Implant Inquiries", before: "8", after: "31" },
    ],
    timeline: "60 days",
  },
  {
    niche: "IVF Clinic",
    location: "Bangalore",
    name: "FertilityFirst IVF Centre",
    challenge:
      "IVF is one of the highest-value niches — one patient is worth ₹2-5L. The clinic had a website but zero structured data, no AI crawler access, and was invisible in AI search despite excellent success rates.",
    solution: [
      "Comprehensive MedicalBusiness schema with success rates, procedures, and physician credentials",
      "Created 'IVF cost in Bangalore' and 'best IVF clinic in Bangalore' optimized pages",
      "Built authority content hub: 6 articles on IVF process, success rates, and costs",
      "Implemented review aggregation schema (4.7 rating, 320+ reviews)",
      "AI crawler optimization: llms.txt, robots.txt allowlisting, structured FAQ content",
    ],
    results: [
      { metric: "AI Visibility Score", before: "5/100", after: "82/100" },
      { metric: "Perplexity Citations", before: "0", after: "Cited regularly" },
      { metric: "Monthly Consultations", before: "15", after: "42" },
      { metric: "Revenue Impact", before: "—", after: "+₹25L/month" },
    ],
    timeline: "90 days",
  },
  {
    niche: "Lawyer",
    location: "Hyderabad",
    name: "Advocate Rajan & Associates",
    challenge:
      "A corporate law firm with 20 years of experience but no digital presence beyond a basic website. When AI was asked about 'best corporate lawyers in Hyderabad', they didn't exist in the AI knowledge base.",
    solution: [
      "LegalService and Attorney schema markup with practice areas and qualifications",
      "Created practice-area landing pages: corporate law, IP law, real estate law",
      "Built comprehensive FAQ schema targeting 'how to choose a corporate lawyer' queries",
      "Submitted to 20+ legal directories (LegalKart, Vakil Search, LawRato)",
      "Published 4 thought leadership articles on corporate law topics",
    ],
    results: [
      { metric: "AI Visibility Score", before: "3/100", after: "78/100" },
      { metric: "ChatGPT Mentions", before: "0", after: "Named for corporate law" },
      { metric: "Monthly Inquiries", before: "5", after: "22" },
      { metric: "Client Value", before: "—", after: "3 new retainer clients (₹15L+)" },
    ],
    timeline: "75 days",
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Godfather Funnel AI Case Studies",
            description:
              "Real results from India's premier AEO agency. See how we made AI recommend dermatologists, dentists, IVF clinics, and lawyers by name.",
            url: "https://godfatherfunnelai.com/case-studies",
            publisher: {
              "@type": "Organization",
              name: "Godfather Funnel AI",
              url: "https://godfatherfunnelai.com",
            },
          }),
        }}
      />

      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 mb-4 text-xs font-medium tracking-wider uppercase bg-green-500/10 border border-green-500/20 rounded-full text-green-400">
            Proof It Works
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white">
            Real Businesses.{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Real AI Results.
            </span>
          </h1>
          <p className="mt-6 text-lg text-gray-400 max-w-3xl mx-auto">
            These businesses went from AI-invisible to AI-recommended. Here&apos;s
            exactly how we did it — and the revenue impact.
          </p>
        </div>

        <div className="space-y-12">
          {caseStudies.map((cs, i) => (
            <div
              key={i}
              className="bg-[#12121a] border border-white/5 rounded-2xl overflow-hidden"
            >
              <div className="px-8 py-4 bg-gradient-to-r from-blue-500/5 to-purple-500/5 border-b border-white/5 flex flex-wrap items-center justify-between gap-2">
                <div>
                  <h2 className="text-lg font-bold text-white">{cs.name}</h2>
                  <p className="text-xs text-gray-400">
                    {cs.niche} &middot; {cs.location}
                  </p>
                </div>
                <span className="text-xs font-semibold text-green-400 bg-green-500/10 px-3 py-1 rounded-full border border-green-500/20">
                  Results in {cs.timeline}
                </span>
              </div>

              <div className="p-8 space-y-6">
                <div>
                  <h3 className="text-sm font-semibold text-red-400 uppercase tracking-wider mb-2">
                    Challenge
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {cs.challenge}
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-2">
                    What We Did
                  </h3>
                  <ul className="space-y-1.5">
                    {cs.solution.map((s, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2 text-sm text-gray-300"
                      >
                        <span className="text-blue-400 shrink-0">+</span>
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-green-400 uppercase tracking-wider mb-3">
                    Results
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {cs.results.map((r, j) => (
                      <div
                        key={j}
                        className="bg-[#0a0a0f] rounded-xl p-4 text-center"
                      >
                        <div className="text-[10px] text-gray-500 uppercase tracking-wider mb-2">
                          {r.metric}
                        </div>
                        <div className="text-xs text-red-400 line-through mb-1">
                          {r.before}
                        </div>
                        <div className="text-lg font-black text-green-400">
                          {r.after}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <h2 className="text-2xl font-black text-white mb-4">
            Want Results Like These?
          </h2>
          <p className="text-gray-400 mb-6">
            Start with a free audit. See your AI visibility score in 30 seconds.
          </p>
          <Link
            href="/audit"
            className="inline-block px-10 py-5 text-lg font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:shadow-2xl hover:shadow-purple-500/25 hover:scale-105 transition-all duration-300"
          >
            Get Free AI Audit →
          </Link>
        </div>
      </div>
    </div>
  );
}
