export interface AuditResult {
  url: string;
  score: number;
  checks: {
    name: string;
    status: "pass" | "fail" | "warn";
    detail: string;
    points: number;
  }[];
  grade: string;
}

export function calculateGrade(score: number): string {
  if (score >= 80) return "A";
  if (score >= 60) return "B";
  if (score >= 40) return "C";
  if (score >= 20) return "D";
  return "F";
}

export function checkSchema(html: string) {
  const hasJsonLd = html.includes("application/ld+json");
  const schemaTypes: string[] = [];

  if (hasJsonLd) {
    const matches = html.matchAll(/"@type"\s*:\s*"([^"]+)"/g);
    for (const m of matches) schemaTypes.push(m[1]);
  }

  return {
    name: "Schema Markup (JSON-LD)",
    status: hasJsonLd ? ("pass" as const) : ("fail" as const),
    detail: hasJsonLd
      ? `Found: ${schemaTypes.join(", ") || "JSON-LD present"}`
      : "No structured data found. AI cannot understand your business.",
    points: hasJsonLd ? 20 : 0,
  };
}

export function checkMetaDescription(html: string) {
  const hasDesc = /meta\s+name=["']description["'][^>]*content=["']([^"']+)["']/i.test(html);
  const match = html.match(/meta\s+name=["']description["'][^>]*content=["']([^"']+)["']/i);
  const length = match ? match[1].length : 0;

  return {
    name: "Meta Description",
    status: hasDesc && length > 50 ? ("pass" as const) : hasDesc ? ("warn" as const) : ("fail" as const),
    detail: hasDesc
      ? `Found (${length} chars)${length < 120 ? " — consider expanding to 120-160 chars" : ""}`
      : "Missing meta description. AI and search engines have no summary of your page.",
    points: hasDesc ? (length > 50 ? 15 : 8) : 0,
  };
}

export function checkTitle(html: string) {
  const match = html.match(/<title[^>]*>([^<]+)<\/title>/i);
  const title = match ? match[1].trim() : "";

  return {
    name: "Page Title",
    status: title ? ("pass" as const) : ("fail" as const),
    detail: title
      ? `"${title.slice(0, 60)}${title.length > 60 ? "..." : ""}" (${title.length} chars)`
      : "No page title found.",
    points: title ? 10 : 0,
  };
}

export function checkRobotsTxt(robotsTxt: string | null) {
  if (!robotsTxt) {
    return {
      name: "robots.txt",
      status: "fail" as const,
      detail: "No robots.txt found. Search engines and AI crawlers have no instructions.",
      points: 0,
    };
  }

  const blocksAI =
    /disallow.*GPTBot|disallow.*ChatGPT|disallow.*ClaudeBot|disallow.*PerplexityBot|disallow.*Anthropic/i.test(
      robotsTxt
    );

  return {
    name: "AI Crawler Access (robots.txt)",
    status: blocksAI ? ("fail" as const) : ("pass" as const),
    detail: blocksAI
      ? "BLOCKING AI crawlers! GPTBot/ClaudeBot/PerplexityBot are disallowed. AI literally cannot see your site."
      : "AI crawlers are not blocked. Good — they can read your site.",
    points: blocksAI ? 0 : 20,
  };
}

export function checkFAQMarkup(html: string) {
  const hasFAQ =
    html.includes('"FAQPage"') || html.includes('"@type":"FAQPage"');

  return {
    name: "FAQ Schema",
    status: hasFAQ ? ("pass" as const) : ("fail" as const),
    detail: hasFAQ
      ? "FAQPage schema found. AI can read and cite your FAQs."
      : "No FAQ schema. Adding FAQs with markup dramatically improves AI citations.",
    points: hasFAQ ? 15 : 0,
  };
}

export function checkHTTPS(url: string) {
  const isHttps = url.startsWith("https://");

  return {
    name: "HTTPS Security",
    status: isHttps ? ("pass" as const) : ("fail" as const),
    detail: isHttps
      ? "Site uses HTTPS. Good for trust and rankings."
      : "Site does not use HTTPS. This hurts trust, rankings, and AI visibility.",
    points: isHttps ? 10 : 0,
  };
}

export function checkLlmsTxt(llmsTxt: string | null) {
  return {
    name: "llms.txt (AI Instruction File)",
    status: llmsTxt ? ("pass" as const) : ("fail" as const),
    detail: llmsTxt
      ? "llms.txt found! AI systems can read your business instructions."
      : "No llms.txt file. This file tells AI exactly who you are and what you do.",
    points: llmsTxt ? 10 : 0,
  };
}
