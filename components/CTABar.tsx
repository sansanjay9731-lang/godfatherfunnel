"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function CTABar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#0a0a0f]/90 backdrop-blur-xl border-t border-white/5 py-3 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <p className="text-sm text-gray-300 hidden sm:block">
          Your competitors are AI-recommended. <span className="text-red-400 font-semibold">You&apos;re not.</span>
        </p>
        <Link
          href="/audit"
          className="px-6 py-2.5 text-sm font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:shadow-lg hover:shadow-purple-500/25 transition-all mx-auto sm:mx-0"
        >
          Get Free AI Audit →
        </Link>
      </div>
    </div>
  );
}
