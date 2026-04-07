import { NextRequest, NextResponse } from "next/server";
import {
  checkSchema,
  checkMetaDescription,
  checkTitle,
  checkRobotsTxt,
  checkFAQMarkup,
  checkHTTPS,
  checkLlmsTxt,
  calculateGrade,
} from "@/lib/audit-checks";

export async function POST(req: NextRequest) {
  try {
    const { url } = await req.json();

    if (!url || typeof url !== "string") {
      return NextResponse.json({ error: "URL is required" }, { status: 400 });
    }

    // Normalize URL
    let targetUrl = url.trim();
    if (!targetUrl.startsWith("http")) {
      targetUrl = "https://" + targetUrl;
    }

    const origin = new URL(targetUrl).origin;

    // Fetch page, robots.txt, and llms.txt in parallel
    const [pageRes, robotsRes, llmsRes] = await Promise.all([
      fetch(targetUrl, {
        headers: { "User-Agent": "GodfatherFunnel-Audit/1.0" },
        signal: AbortSignal.timeout(10000),
      }).catch(() => null),
      fetch(`${origin}/robots.txt`, {
        signal: AbortSignal.timeout(5000),
      }).catch(() => null),
      fetch(`${origin}/llms.txt`, {
        signal: AbortSignal.timeout(5000),
      }).catch(() => null),
    ]);

    const html = pageRes ? await pageRes.text() : "";
    const robotsTxt =
      robotsRes && robotsRes.ok ? await robotsRes.text() : null;
    const llmsTxt = llmsRes && llmsRes.ok ? await llmsRes.text() : null;

    // Run all checks
    const checks = [
      checkSchema(html),
      checkRobotsTxt(robotsTxt),
      checkLlmsTxt(llmsTxt),
      checkMetaDescription(html),
      checkTitle(html),
      checkFAQMarkup(html),
      checkHTTPS(targetUrl),
    ];

    const score = checks.reduce((sum, c) => sum + c.points, 0);
    const grade = calculateGrade(score);

    return NextResponse.json({
      url: targetUrl,
      score,
      grade,
      checks,
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to audit. Check the URL and try again." },
      { status: 500 }
    );
  }
}
