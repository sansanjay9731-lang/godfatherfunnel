import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ — AEO, AI Marketing & How It Works | Godfather Funnel AI",
  description:
    "Everything you need to know about Answer Engine Optimization, AI marketing, schema markup, and how Godfather Funnel AI makes ChatGPT recommend your business. 14 expert answers.",
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return children;
}
