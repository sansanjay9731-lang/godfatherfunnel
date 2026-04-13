"use client";
import { useState } from "react";

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/5 last:border-0">
      <button
        className="w-full flex items-center justify-between py-4 text-left"
        onClick={() => setOpen(!open)}
      >
        <span className="text-sm font-medium text-white pr-4">{q}</span>
        <span className="text-gray-500 shrink-0 text-lg">
          {open ? "−" : "+"}
        </span>
      </button>
      {open && (
        <p className="pb-4 text-sm text-gray-400 leading-relaxed">{a}</p>
      )}
    </div>
  );
}

export default function FAQAccordion({
  categories,
}: {
  categories: { category: string; items: { q: string; a: string }[] }[];
}) {
  return (
    <div className="space-y-10">
      {categories.map((category, i) => (
        <div key={i}>
          <h2 className="text-sm font-semibold text-purple-400 uppercase tracking-wider mb-4">
            {category.category}
          </h2>
          <div className="bg-[#12121a] border border-white/5 rounded-2xl px-6">
            {category.items.map((item, j) => (
              <FAQItem key={j} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
