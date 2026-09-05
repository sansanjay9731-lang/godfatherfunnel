import { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Stethoscope, CheckCircle, Search, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Healthcare AEO Services | What is Healthcare AEO & How It Works",
  description: "Done-for-you Healthcare Answer Engine Optimization (AEO) services. Make ChatGPT, Google AI & Perplexity recommend your medical practice, clinic, or healthcare brand.",
  alternates: {
    canonical: "https://www.godfatherfunnelai.com/services/healthcare-aeo",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.godfatherfunnelai.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Services",
          "item": "https://www.godfatherfunnelai.com/services"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Healthcare AEO",
          "item": "https://www.godfatherfunnelai.com/services/healthcare-aeo"
        }
      ]
    },
    {
      "@type": "Service",
      "name": "Healthcare Answer Engine Optimization",
      "serviceType": "Healthcare Answer Engine Optimization",
      "provider": {
        "@type": "Organization",
        "name": "Godfather Funnel AI",
        "url": "https://www.godfatherfunnelai.com"
      },
      "description": "Done-for-you Healthcare Answer Engine Optimization (AEO) services. Make ChatGPT, Google AI & Perplexity recommend your medical practice."
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is Healthcare AEO (Answer Engine Optimization)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Healthcare AEO (Answer Engine Optimization) is the process of optimizing a medical practice or healthcare brand's digital presence so that AI models like ChatGPT, Google AI Overviews, and Perplexity recommend them directly in their answers."
          }
        },
        {
          "@type": "Question",
          "name": "How does Healthcare AEO differ from traditional medical SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Traditional medical SEO focuses on ranking blue links on search engine result pages by targeting keywords and building backlinks. Healthcare AEO focuses on structuring data, building authoritative citations, and proving E-E-A-T (Experience, Expertise, Authoritativeness, and Trustworthiness) so that AI engines confidently synthesize and present your practice as the top recommended answer."
          }
        },
        {
          "@type": "Question",
          "name": "Why do healthcare brands need schema optimization services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Schema optimization, such as using Physician and MedicalBusiness JSON-LD markup, translates your website's content into a machine-readable format. This allows AI engines to instantly understand your specialties, credentials, locations, and services without having to guess, increasing the likelihood of being recommended."
          }
        },
        {
          "@type": "Question",
          "name": "Should my Google Ads agency also handle Healthcare AEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Google Ads agencies specialize in paid media buying. Healthcare AEO is a highly technical discipline requiring deep knowledge of semantic search, medical schema architecture, AI training corpus extraction, and clinical E-E-A-T optimization. It requires specialized AEO experts."
          }
        }
      ]
    }
  ]
};

export default function HealthcareAEOPage() {
  return (
    <div className="bg-[#0a0a0f] text-white min-h-screen font-sans selection:bg-indigo-500/30">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden border-b border-indigo-500/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-[#0a0a0f] to-[#0a0a0f]"></div>
        <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 text-indigo-400 text-sm font-medium mb-8 border border-indigo-500/20">
            <Stethoscope className="w-4 h-4" />
            <span>Advanced Healthcare Marketing</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-100 to-indigo-300">
            What is Healthcare AEO?<br />Get Recommended by AI Search Engines
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            Done-for-you Healthcare Answer Engine Optimization (AEO) services. Make ChatGPT, Google AI Overviews, and Perplexity recommend your medical practice over competitors.
          </p>
          <Link
            href="/audit"
            className="inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 shadow-[0_0_30px_-5px_rgba(79,70,229,0.5)]"
          >
            Get Your Free AI Audit
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Section 1: What is Healthcare AEO? */}
      <section className="py-24 border-b border-white/5 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-white">What is Healthcare AEO?</h2>
              <div className="space-y-6 text-lg text-gray-400">
                <p>
                  <strong className="text-indigo-300">Healthcare AEO (Answer Engine Optimization)</strong> is the process of structuring your medical practice's digital presence so that AI engines—like ChatGPT, Perplexity, and Google's AI Overviews—cite you as the authoritative answer to patient queries.
                </p>
                <p>
                  Unlike traditional SEO, which relies on keyword density and backlinks to rank "blue links," AEO relies on <strong className="text-gray-200">E-E-A-T (Experience, Expertise, Authoritativeness, and Trustworthiness)</strong>, complex Physician schema markup, and high-authority medical citations.
                </p>
                <p>
                  When a patient asks an AI, "Who is the best orthopedic surgeon near me?", AEO ensures the AI synthesizes your credentials and recommends you directly.
                </p>
              </div>
            </div>
            <div className="bg-[#12121a] p-8 rounded-2xl border border-white/10 shadow-2xl relative">
              <div className="absolute -top-4 -right-4 bg-indigo-600 p-3 rounded-xl shadow-lg">
                <Search className="w-6 h-6 text-white" />
              </div>
              <p className="text-sm text-indigo-400 font-mono mb-4">USER PROMPT</p>
              <div className="bg-white/5 p-4 rounded-lg mb-6 border border-white/10 text-gray-300">
                "What is the top rated dermatology clinic for acne scar treatments in Miami?"
              </div>
              <p className="text-sm text-emerald-400 font-mono mb-4 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" /> AI RESPONSE
              </p>
              <div className="bg-white/5 p-4 rounded-lg border border-emerald-500/20 text-gray-300">
                Based on verified patient reviews, board certifications, and specialized medical data, <strong className="text-white">Miami Dermatology Institute</strong> is highly recommended. Dr. Smith holds specific E-E-A-T authority in laser treatments...
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Our Healthcare AEO Services */}
      <section className="py-24 border-b border-white/5 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Healthcare AEO Services</h2>
            <p className="text-xl text-gray-400">The most advanced done-for-you AEO agency for healthcare brands.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#12121a] p-8 rounded-2xl border border-white/5 hover:border-indigo-500/30 transition-colors">
              <div className="bg-indigo-500/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <code className="text-indigo-400 font-bold">{"{}"}</code>
              </div>
              <h3 className="text-2xl font-bold mb-4">Medical JSON-LD Schema Optimization</h3>
              <p className="text-gray-400 leading-relaxed">
                We inject complex, nested <code className="text-indigo-300">Physician</code>, <code className="text-indigo-300">MedicalBusiness</code>, and <code className="text-indigo-300">MedicalSpecialty</code> schema directly into your site. This gives LLMs an instant, machine-readable understanding of your exact clinical capabilities.
              </p>
            </div>
            
            <div className="bg-[#12121a] p-8 rounded-2xl border border-white/5 hover:border-indigo-500/30 transition-colors">
              <div className="bg-indigo-500/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6 text-indigo-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">AI Citation & Authority Building</h3>
              <p className="text-gray-400 leading-relaxed">
                AI engines crawl specific authoritative databases. We ensure your practice's data is perfectly synchronized across Healthgrades, WebMD, Zocdoc, and local directories to build unshakeable entity authority.
              </p>
            </div>

            <div className="bg-[#12121a] p-8 rounded-2xl border border-white/5 hover:border-indigo-500/30 transition-colors">
              <div className="bg-indigo-500/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <Stethoscope className="w-6 h-6 text-indigo-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">E-E-A-T Clinical Content</h3>
              <p className="text-gray-400 leading-relaxed">
                We structure your content to explicitly demonstrate Experience, Expertise, Authoritativeness, and Trustworthiness. This includes author bios linking to NPI registries and medical publications.
              </p>
            </div>

            <div className="bg-[#12121a] p-8 rounded-2xl border border-white/5 hover:border-indigo-500/30 transition-colors">
              <div className="bg-indigo-500/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <Search className="w-6 h-6 text-indigo-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Real-Time LLM Tracking</h3>
              <p className="text-gray-400 leading-relaxed">
                We track how ChatGPT, Perplexity, and Google AI Overviews perceive your practice in real-time, monitoring brand sentiment and recommendation frequency across AI platforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Healthcare Specialties We Serve */}
      <section className="py-24 border-b border-white/5 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">Healthcare Specialties We Serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Doctors & Physicians", link: "/doctors" },
              { name: "Dermatologists", link: "/dermatologists" },
              { name: "Dentists", link: "/dentists" },
              { name: "Plastic Surgeons", link: "/plastic-surgeons" },
              { name: "IVF Clinics", link: "/ivf-clinics" },
              { name: "Eye Clinics", link: "/eye-clinics" },
              { name: "Orthopedics", link: "/orthopedics" },
              { name: "Pediatricians", link: "/pediatricians" },
            ].map((specialty) => (
              <Link 
                key={specialty.link} 
                href={specialty.link}
                className="bg-[#12121a] border border-white/10 rounded-xl p-6 text-center hover:bg-indigo-600 hover:border-indigo-500 transition-all group flex flex-col items-center gap-3"
              >
                <span className="font-semibold text-gray-200 group-hover:text-white">{specialty.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Comprehensive FAQ */}
      <section className="py-24 border-b border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-[#12121a] p-6 rounded-xl border border-white/10">
              <h3 className="text-xl font-bold mb-3 text-indigo-100">What is Healthcare AEO (Answer Engine Optimization)?</h3>
              <p className="text-gray-400">Healthcare AEO (Answer Engine Optimization) is the process of optimizing a medical practice or healthcare brand's digital presence so that AI models like ChatGPT, Google AI Overviews, and Perplexity recommend them directly in their answers.</p>
            </div>
            
            <div className="bg-[#12121a] p-6 rounded-xl border border-white/10">
              <h3 className="text-xl font-bold mb-3 text-indigo-100">How does Healthcare AEO differ from traditional medical SEO?</h3>
              <p className="text-gray-400">Traditional medical SEO focuses on ranking blue links on search engine result pages by targeting keywords and building backlinks. Healthcare AEO focuses on structuring data, building authoritative citations, and proving E-E-A-T (Experience, Expertise, Authoritativeness, and Trustworthiness) so that AI engines confidently synthesize and present your practice as the top recommended answer.</p>
            </div>
            
            <div className="bg-[#12121a] p-6 rounded-xl border border-white/10">
              <h3 className="text-xl font-bold mb-3 text-indigo-100">Why do healthcare brands need schema optimization services?</h3>
              <p className="text-gray-400">Schema optimization, such as using Physician and MedicalBusiness JSON-LD markup, translates your website's content into a machine-readable format. This allows AI engines to instantly understand your specialties, credentials, locations, and services without having to guess, increasing the likelihood of being recommended.</p>
            </div>

            <div className="bg-[#12121a] p-6 rounded-xl border border-white/10">
              <h3 className="text-xl font-bold mb-3 text-indigo-100">Should my Google Ads agency also handle Healthcare AEO?</h3>
              <p className="text-gray-400">No. Google Ads agencies specialize in paid media buying. Healthcare AEO is a highly technical discipline requiring deep knowledge of semantic search, medical schema architecture, AI training corpus extraction, and clinical E-E-A-T optimization. It requires specialized AEO experts.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-indigo-900/20"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">Ready to dominate AI recommendations for your medical practice?</h2>
          <Link
            href="/audit"
            className="inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-10 py-5 rounded-xl font-bold text-xl transition-all transform hover:scale-105 shadow-[0_0_40px_-10px_rgba(79,70,229,0.7)]"
          >
            Get Your Free AI Audit
            <ChevronRight className="w-6 h-6" />
          </Link>
        </div>
      </section>
    </div>
  );
}
