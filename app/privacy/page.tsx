import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Godfather Funnel AI",
  description: "Privacy policy and data collection practices for Godfather Funnel AI.",
  robots: { index: true },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] py-24 text-gray-300">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl sm:text-5xl font-black text-white mb-8">
          Privacy <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Policy</span>
        </h1>
        <div className="space-y-8 text-sm leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-white mb-4">1. Information We Collect</h2>
            <p>
              We collect information you provide directly to us, such as when you create an account, use our AI auditing tools, or communicate with us. This may include your name, email address, phone number, and business details.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-bold text-white mb-4">2. How We Use Your Information</h2>
            <p>
              We use the information we collect to provide, maintain, and improve our services, to process transactions, and to communicate with you about your account and our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">3. Cookies and Tracking</h2>
            <p>
              We use cookies and similar tracking technologies to track the activity on our Service and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-bold text-white mb-4">4. GDPR & CCPA Compliance</h2>
            <p>
              If you are a resident of the European Economic Area (EEA) or California, you have certain data protection rights, including the right to access, update, or delete the information we have on you. Please contact us to exercise these rights.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">5. Contact Information</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at contact@godfatherfunnelai.com.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
