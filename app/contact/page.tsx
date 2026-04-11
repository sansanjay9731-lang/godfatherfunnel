import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Godfather Funnel AI — Get Your Free AI Visibility Audit",
  description:
    "Contact India's #1 AEO & AI marketing agency. Get a free AI visibility audit, book a strategy call, or ask us anything about making AI recommend your business.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contact Godfather Funnel AI",
            url: "https://www.godfatherfunnelai.com/contact",
            mainEntity: {
              "@id": "https://www.godfatherfunnelai.com/#organization",
            },
          }),
        }}
      />

      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 mb-4 text-xs font-medium tracking-wider uppercase bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400">
            Get In Touch
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white">
            Let&apos;s Make AI{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Recommend You
            </span>
          </h1>
          <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">
            Start with a free audit, book a strategy call, or just ask us anything.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Quick Actions */}
          <div className="space-y-6">
            <Link
              href="/audit"
              className="block bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-purple-500/20 rounded-2xl p-6 hover:border-purple-500/40 transition-colors"
            >
              <h2 className="text-lg font-bold text-white mb-2">
                Free AI Visibility Audit
              </h2>
              <p className="text-sm text-gray-400">
                Enter your website URL and get your AI visibility score in 30
                seconds. See exactly what ChatGPT, Google AI, and Perplexity see
                about your business.
              </p>
              <span className="inline-block mt-3 text-sm font-semibold text-purple-400">
                Start Audit →
              </span>
            </Link>

            <div className="bg-[#12121a] border border-white/5 rounded-2xl p-6">
              <h2 className="text-lg font-bold text-white mb-2">
                Book a Strategy Call
              </h2>
              <p className="text-sm text-gray-400 mb-3">
                30-minute call with our AI strategy team. We&apos;ll review your
                audit results, analyze your competitors, and build a custom AEO
                plan for your business.
              </p>
              <p className="text-sm text-purple-400 font-semibold">
                Email us to schedule →
              </p>
            </div>

            <div className="bg-[#12121a] border border-white/5 rounded-2xl p-6">
              <h2 className="text-lg font-bold text-white mb-2">
                WhatsApp Us
              </h2>
              <p className="text-sm text-gray-400">
                Quick questions? Send us a message on WhatsApp for fastest
                response.
              </p>
              <p className="text-sm text-green-400 mt-2 font-semibold">
                +91 98765 43210
              </p>
            </div>
          </div>

          {/* Contact Details */}
          <div className="bg-[#12121a] border border-white/5 rounded-2xl p-8">
            <h2 className="text-xl font-bold text-white mb-6">
              Contact Information
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                  Email
                </h3>
                <p className="text-sm text-gray-300">
                  contact@godfatherfunnelai.com
                </p>
              </div>
              <div>
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                  Phone / WhatsApp
                </h3>
                <p className="text-sm text-gray-300">+91 98765 43210</p>
              </div>
              <div>
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                  Website
                </h3>
                <p className="text-sm text-gray-300">godfatherfunnelai.com</p>
              </div>
              <div>
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                  Industries We Serve
                </h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  {[
                    "Dermatologists",
                    "Dentists",
                    "Plastic Surgeons",
                    "IVF Clinics",
                    "Lawyers",
                    "Real Estate",
                  ].map((n) => (
                    <span
                      key={n}
                      className="text-xs px-2.5 py-1 bg-white/5 border border-white/10 rounded-full text-gray-400"
                    >
                      {n}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                  Response Time
                </h3>
                <p className="text-sm text-gray-300">
                  We respond within 2 hours during business hours (Mon-Sat, 9am-7pm IST).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
