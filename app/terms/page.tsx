import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Godfather Funnel AI",
  description: "Terms of service for Godfather Funnel AI.",
  robots: { index: true },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] py-24 text-gray-300">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl sm:text-5xl font-black text-white mb-8">
          Terms of <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Service</span>
        </h1>
        <div className="space-y-8 text-sm leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-white mb-4">1. Services Description</h2>
            <p>
              Godfather Funnel AI provides Answer Engine Optimization (AEO) and related AI marketing services. By accessing or using our services, you agree to be bound by these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">2. Payment Terms</h2>
            <p>
              Fees for our services are billed as agreed upon in your specific service agreement. All payments are non-refundable unless otherwise specified in writing.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">3. Limitation of Liability</h2>
            <p>
              In no event shall Godfather Funnel AI, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-bold text-white mb-4">4. Governing Law</h2>
            <p>
              These Terms shall be governed and construed in accordance with the laws of the State of New York, United States, without regard to its conflict of law provisions.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
