"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AuditCheck {
  name: string;
  status: "pass" | "fail" | "warn";
  detail: string;
  points: number;
}

interface AuditData {
  url: string;
  score: number;
  grade: string;
  checks: AuditCheck[];
}

export default function AuditPage() {
  const [url, setUrl] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AuditData | null>(null);
  const [error, setError] = useState("");
  const [step, setStep] = useState<"form" | "loading" | "results">("form");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url || !email) return;

    setLoading(true);
    setError("");
    setStep("loading");

    try {
      const res = await fetch("/api/audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });

      const data = await res.json();

      if (data.error) {
        setError(data.error);
        setStep("form");
      } else {
        setResult(data);
        setStep("results");
      }
    } catch {
      setError("Something went wrong. Please try again.");
      setStep("form");
    } finally {
      setLoading(false);
    }
  };

  const gradeColors: Record<string, string> = {
    A: "from-green-400 to-emerald-500",
    B: "from-blue-400 to-cyan-500",
    C: "from-yellow-400 to-amber-500",
    D: "from-orange-400 to-red-500",
    F: "from-red-500 to-red-700",
  };

  const statusIcons: Record<string, string> = {
    pass: "✅",
    fail: "❌",
    warn: "⚠️",
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] py-24">
      <div className="max-w-3xl mx-auto px-4">
        <AnimatePresence mode="wait">
          {/* STEP 1: Form */}
          {step === "form" && (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <div className="text-center mb-12">
                <div className="inline-block px-4 py-1.5 mb-4 text-xs font-medium tracking-wider uppercase bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400">
                  Free AI Visibility Audit
                </div>
                <h1 className="text-3xl sm:text-5xl font-black text-white mb-4">
                  Is AI Recommending{" "}
                  <span className="bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
                    Your Competitors
                  </span>{" "}
                  Over You?
                </h1>
                <p className="text-gray-400 text-lg max-w-xl mx-auto">
                  Enter your website URL and we&apos;ll check your AI visibility
                  score in 30 seconds. See exactly what AI sees (or doesn&apos;t
                  see) about your business.
                </p>
              </div>

              <form
                onSubmit={handleSubmit}
                className="bg-[#12121a] border border-white/10 rounded-2xl p-8 space-y-5"
              >
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Your Website URL *
                  </label>
                  <input
                    type="text"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="example.com"
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Dr. Sharma"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="doctor@clinic.com"
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                  />
                </div>

                {error && (
                  <p className="text-red-400 text-sm">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 text-base font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:shadow-lg hover:shadow-purple-500/25 transition-all disabled:opacity-50"
                >
                  Scan My AI Visibility →
                </button>

                <p className="text-xs text-gray-500 text-center">
                  Free audit. No credit card required. Results in 30 seconds.
                </p>
              </form>
            </motion.div>
          )}

          {/* STEP 2: Loading */}
          {step === "loading" && (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-32"
            >
              <div className="inline-block mb-8">
                <div className="w-20 h-20 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">
                Scanning AI Visibility...
              </h2>
              <div className="space-y-3 text-sm text-gray-400 max-w-md mx-auto">
                {[
                  "Checking schema markup...",
                  "Analyzing robots.txt for AI crawlers...",
                  "Looking for llms.txt...",
                  "Evaluating meta data...",
                  "Checking FAQ structured data...",
                ].map((text, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.6 }}
                  >
                    {text}
                  </motion.p>
                ))}
              </div>
            </motion.div>
          )}

          {/* STEP 3: Results */}
          {step === "results" && result && (
            <motion.div
              key="results"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="text-center mb-12">
                <h1 className="text-3xl sm:text-4xl font-black text-white mb-2">
                  Your AI Visibility Report
                </h1>
                <p className="text-gray-400">{result.url}</p>
              </div>

              {/* Score Card */}
              <div className="bg-[#12121a] border border-white/10 rounded-2xl p-8 mb-8 text-center">
                <div className="text-sm text-gray-400 mb-2 uppercase tracking-wider">
                  AI Visibility Score
                </div>
                <div
                  className={`text-8xl font-black bg-gradient-to-r ${gradeColors[result.grade] || gradeColors.F} bg-clip-text text-transparent`}
                >
                  {result.score}
                </div>
                <div className="text-lg text-gray-300 mt-2">
                  Grade:{" "}
                  <span
                    className={`font-bold bg-gradient-to-r ${gradeColors[result.grade] || gradeColors.F} bg-clip-text text-transparent`}
                  >
                    {result.grade}
                  </span>{" "}
                  / 100
                </div>

                {result.score < 60 && (
                  <div className="mt-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
                    <p className="text-red-400 text-sm font-medium">
                      {result.score < 30
                        ? "Critical: AI cannot see your business. Your competitors are being recommended instead of you."
                        : "Warning: Significant gaps in AI visibility. You're losing clients to AI-optimized competitors."}
                    </p>
                  </div>
                )}
              </div>

              {/* Individual Checks */}
              <div className="space-y-3 mb-8">
                {result.checks.map((check, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className={`bg-[#12121a] border rounded-xl p-5 ${
                      check.status === "pass"
                        ? "border-green-500/20"
                        : check.status === "warn"
                          ? "border-yellow-500/20"
                          : "border-red-500/20"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-lg mt-0.5">
                        {statusIcons[check.status]}
                      </span>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="text-sm font-semibold text-white">
                            {check.name}
                          </h3>
                          <span className="text-xs text-gray-500">
                            {check.points}/
                            {check.name.includes("Schema")
                              ? "20"
                              : check.name.includes("robots") ||
                                  check.name.includes("AI Crawler")
                                ? "20"
                                : check.name.includes("Meta")
                                  ? "15"
                                  : check.name.includes("FAQ")
                                    ? "15"
                                    : "10"}{" "}
                            pts
                          </span>
                        </div>
                        <p className="text-xs text-gray-400 mt-1">
                          {check.detail}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-purple-500/20 rounded-2xl p-8 text-center">
                <h3 className="text-xl font-bold text-white mb-2">
                  Want to Fix This in 30 Days?
                </h3>
                <p className="text-gray-400 text-sm mb-6">
                  Book a free 15-minute strategy call. We&apos;ll show you
                  exactly how to make AI recommend you by name.
                </p>
                <a
                  href="https://calendly.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-4 text-base font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:shadow-xl hover:shadow-purple-500/25 transition-all"
                >
                  Book Free Strategy Call →
                </a>
                <p className="mt-4 text-xs text-gray-500">
                  No commitment. No sales pressure. Just actionable insights.
                </p>
              </div>

              {/* Restart */}
              <div className="text-center mt-8">
                <button
                  onClick={() => {
                    setResult(null);
                    setStep("form");
                    setUrl("");
                  }}
                  className="text-sm text-gray-400 hover:text-white transition"
                >
                  ← Audit another website
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
