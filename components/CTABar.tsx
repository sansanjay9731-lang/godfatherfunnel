"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function CTABar() {
  const [visible, setVisible] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sentinel = document.createElement("div");
    sentinel.style.position = "absolute";
    sentinel.style.top = "600px";
    sentinel.style.height = "1px";
    sentinel.style.width = "1px";
    sentinel.style.pointerEvents = "none";
    document.body.appendChild(sentinel);

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting && entry.boundingClientRect.top < 0),
      { threshold: 0 }
    );
    observer.observe(sentinel);

    return () => {
      observer.disconnect();
      sentinel.remove();
    };
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
