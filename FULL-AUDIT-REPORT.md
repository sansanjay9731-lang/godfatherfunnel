# Godfather Funnel AI — Full SEO/AEO Audit Report

**Site:** https://www.godfatherfunnelai.com
**Date:** April 12, 2026
**Pages in Sitemap:** 1,293
**Tech Stack:** Next.js 16.2.2, React 19, Tailwind 4, Framer Motion 12, Vercel

---

## SEO Health Score: 58/100

| Category | Weight | Score | Weighted |
|----------|--------|-------|----------|
| Technical SEO | 25% | 45/100 | 11.25 |
| Content Quality | 25% | 72/100 | 18.00 |
| On-Page SEO | 20% | 55/100 | 11.00 |
| Schema / Structured Data | 10% | 50/100 | 5.00 |
| Performance (CWV) | 10% | 55/100 | 5.50 |
| Images | 5% | 40/100 | 2.00 |
| AI Search Readiness | 5% | 72/100 | 3.60 |
| **TOTAL** | **100%** | | **56.35 → 58** |

---

## Executive Summary

### Top 5 Critical Issues

1. **ALL 1,293 pages have canonical pointing to homepage** — Google may deindex everything except `/`
2. **Organization schema @type mismatch** — layout.tsx says `ProfessionalService` but @id says `#organization`, breaking entity linking sitewide
3. **`sameAs: []` empty array** on every page — zero social/external identity signals in structured data
4. **Comparison pages missing `datePublished`** in Article schema — will fail rich results validation
5. **Hero h1 + CTA hidden behind `opacity: 0`** until JS loads — users see blank screen for 1-3s on slow connections

### Top 5 Quick Wins

1. Remove `alternates: { canonical: "/" }` from layout.tsx (1-line fix, saves all 1,293 pages)
2. Populate `sameAs` array in layout.tsx Organization schema (copy from schema-helpers.ts)
3. Add `<link rel="preconnect" href="https://images.unsplash.com" />` to layout.tsx
4. Add `priority` prop to Hero component images
5. Fix provider URL on pSEO pages: `godfatherfunnelai.com` → `www.godfatherfunnelai.com`

---

## 1. Technical SEO (Score: 45/100)

### CRITICAL

| Issue | Details | File |
|-------|---------|------|
| **Canonical tag disaster** | ALL pages inherit `canonical: "/"` from root layout → every page tells Google it's a duplicate of the homepage | `app/layout.tsx:24` |

### HIGH

| Issue | Details |
|-------|---------|
| Missing security headers | No X-Frame-Options, Content-Security-Policy, X-Content-Type-Options, Referrer-Policy (only HSTS present) |
| Sitemap lastmod fake | 91% of URLs (1,181/1,293) share identical timestamp `2026-04-11T11:11:18.568Z` — Google may ignore all lastmod signals |
| Future-dated blog posts | Blog dates go up to Dec 2026 — looks like freshness manipulation |
| 1 duplicate sitemap URL | `why-dermatologists-need-aeo` appears twice (legacy + generated data) |

### MEDIUM

| Issue | Details |
|-------|---------|
| 1 comparison page missing from sitemap | 22 defined in code, 21 in sitemap |
| No privacy/terms pages | Important for agency credibility |

### LOW

| Issue | Details |
|-------|---------|
| priority/changefreq in sitemap | Google ignores both — remove for cleaner XML |
| Missing AI crawlers in robots.txt | Add Amazonbot, Meta-ExternalAgent, Applebot-Extended, cohere-ai |

### PASSING

- ✅ All 12 spot-checked pages return 200
- ✅ non-www redirects to www (307)
- ✅ HSTS enabled (max-age=63072000)
- ✅ robots.txt properly configured for 7 AI crawlers
- ✅ Sitemap XML format valid, under 50K limit
- ✅ /llms.txt correctly excluded from sitemap

---

## 2. Content Quality (Score: 72/100)

### Word Counts (Healthy)

| Page Type | Words | Verdict |
|-----------|-------|---------|
| Homepage | 2,366 | Good |
| Niche (/dermatologists) | 2,218 | Good |
| pSEO (/ai-marketing/dermatologists/mumbai) | 1,686 | Acceptable |
| Blog (AEO guide) | 2,271 | Good |
| Compare (AEO vs SEO) | 1,872 | Good |
| About | 1,625 | Good |

### HIGH

| Issue | Details |
|-------|---------|
| Zero source citations | "73% of consumers under 35" — according to whom? Every stat is unsourced |
| Case studies appear fabricated | Dr. Priya Sharma, SmileCraft Dental, FertilityFirst — no external verification possible |
| Stock team photos | An AEO agency with stock photos kills credibility |
| "Founded 2026" + "150+ businesses" | Strains credibility — full team + case studies in year one |

### MEDIUM

| Issue | Details |
|-------|---------|
| pSEO doorway page risk | 1,100 city+niche pages may be templates with only city name swapped — needs 60%+ unique content |
| Blog content stored as plain string | Rendered via `.split("\n")` — no semantic HTML tags for sections |
| No author attribution | Blog posts have no named author with credentials |

### PASSING

- ✅ H1 tags present on all pages checked
- ✅ Content depth is solid (1,600-2,400 words per page)
- ✅ Q&A format used extensively
- ✅ Comparison content well-structured with pros/cons

---

## 3. On-Page SEO (Score: 55/100)

### CRITICAL

| Issue | Details |
|-------|---------|
| Canonical tags broken | (See Technical SEO #1 — affects all pages) |

### HIGH

| Issue | Details |
|-------|---------|
| No physical address in schema | Only `addressCountry: "IN"` — no city, street, PIN, state |
| No founder Person schema | "Arjun Verma, Founder" on About page but no structured data linking to Organization |
| No telephone in schema | Phone visible in footer but not in structured data |

### MEDIUM

| Issue | Details |
|-------|---------|
| og-image.png missing | Referenced in metadata but doesn't exist in /public → 404 on social shares |
| Homepage thin for AI crawlers | Most content in Client Components — AI crawlers may only see ~200-300 words |

### PASSING

- ✅ Title tags unique per page
- ✅ Meta descriptions present
- ✅ OpenGraph tags configured
- ✅ Internal linking strategy implemented

---

## 4. Schema / Structured Data (Score: 50/100)

### CRITICAL

| Issue | Details | File |
|-------|---------|------|
| **@type mismatch** | layout.tsx uses `ProfessionalService` with `@id: /#organization` — every other page references this @id expecting `Organization` | `app/layout.tsx` |
| **Comparison Article missing datePublished** | No datePublished or dateModified — required for Article rich results | `lib/schema-helpers.ts` |

### HIGH

| Issue | Details | File |
|-------|---------|------|
| `sameAs: []` empty | schema-helpers.ts has real URLs but layout.tsx hardcodes empty array | `app/layout.tsx:90` |
| Article author/publisher bare @id | Blog + comparison pages use `{"@id": "/#organization"}` without inline name/logo — fails Google validation | `app/blog/[slug]/page.tsx`, `lib/schema-helpers.ts` |
| FAQPage rich results restricted | Since Aug 2023, only government/healthcare authorities get FAQ rich results — won't hurt, but won't help either | All pages with FAQ schema |

### MEDIUM

| Issue | Details | File |
|-------|---------|------|
| Provider URL inconsistency | pSEO pages use `godfatherfunnelai.com` (no www), rest uses `www.` — breaks entity consolidation | `app/ai-marketing/[niche]/[city]/page.tsx:66` |
| Missing BreadcrumbList on pSEO | Visual breadcrumbs exist but no JSON-LD | `app/ai-marketing/[niche]/[city]/page.tsx` |
| Duplicate Organization definitions | schema-helpers.ts and layout.tsx define conflicting Organization schemas | Both files |
| No AggregateRating | Claimed in codebase comments but never implemented | — |

### LOW

| Issue | Details |
|-------|---------|
| FAQ page JSON-LD client-side | `"use client"` means non-JS crawlers may miss it |
| dateModified = datePublished on blog | Should update when content changes |
| No wordCount/articleSection on articles | Recommended for Article schema |

---

## 5. Performance / Core Web Vitals (Score: 55/100)

### Estimated CWV

| Metric | Estimated | Target | Status |
|--------|-----------|--------|--------|
| LCP | 2.0-3.0s | ≤2.5s | ⚠️ BORDERLINE |
| INP | 100-200ms | ≤200ms | ⚠️ BORDERLINE |
| CLS | 0.05-0.15 | ≤0.1 | ⚠️ BORDERLINE |

**Estimated Lighthouse Score: 55-70/100**

### CRITICAL

| Issue | Details |
|-------|---------|
| 13/16 components are Client Components | framer-motion in 7 components = ~150-250KB JS bundle |
| Hero content hidden behind opacity:0 | h1, subline, CTA all invisible until JS hydrates — blank dark screen for 1-3s on slow connections |

### HIGH

| Issue | Details |
|-------|---------|
| No preconnect for Unsplash | All images load from images.unsplash.com without preconnect hint (+200-400ms) |
| No priority prop on above-fold images | Hero avatars and first NicheCards use default lazy loading |
| All images external | 30+ Unsplash URLs, zero local images, no og-image.png in /public |

### MEDIUM

| Issue | Details |
|-------|---------|
| Geist_Mono font possibly unused | Loaded on every page but may not appear in visible content (~20-40KB) |

### GOOD NEWS

- ✅ pSEO pages are Server Components — should pass CWV easily
- ✅ No third-party analytics/tracking scripts yet
- ✅ Vercel handles Brotli compression and CDN caching automatically
- ✅ next/font self-hosts Geist (no external Google Fonts requests)
- ✅ Homepage loads fast: 157KB, 0.14s TTFB

---

## 6. Images (Score: 40/100)

### HIGH

| Issue | Details |
|-------|---------|
| All images from Unsplash | No local assets — dependent on third-party for all visual content |
| og-image.png is 404 | Referenced everywhere but doesn't exist |
| No priority on above-fold images | LCP candidate has no preload hint |

### MEDIUM

| Issue | Details |
|-------|---------|
| Double compression | Unsplash q=80 + Next.js default q=75 |

### PASSING

- ✅ Using next/image component with width/height
- ✅ Next.js image optimization serves WebP/AVIF

---

## 7. AI Search Readiness (Score: 72/100)

### Scores Breakdown

| Component | Score |
|-----------|-------|
| robots.txt AI rules | 95/100 |
| llms.txt quality | 85/100 |
| Q&A structure | 88/100 |
| Comparison content | 80/100 |
| Entity clarity | 70/100 |
| Brand mention optimization | 68/100 |
| Content citability | 65/100 |
| Factual density | 60/100 |
| E-E-A-T | 54/100 |

### The Irony Problem

**The site teaches AEO but doesn't fully practice it:**
- Tells clients to build external authority → has none itself
- Implements sameAs in helper file → ships empty array on every page
- Creates case studies with unverifiable names
- Claims "India's #1" with zero third-party evidence
- No Clutch, G2, DesignRush, GoodFirms listings
- No press mentions, media coverage, or real social profiles
- Domain is brand new with no external backlinks

---

## Files Requiring Changes (Priority Order)

| # | File | Changes Needed |
|---|------|----------------|
| 1 | `app/layout.tsx` | Remove canonical "/", fix @type to Organization, populate sameAs, add preconnect, add telephone, improve address |
| 2 | `app/ai-marketing/[niche]/[city]/page.tsx` | Fix provider URL (add www.), add BreadcrumbList schema |
| 3 | `lib/schema-helpers.ts` | Fix generateComparisonSchema() — add datePublished, author, publisher with full objects |
| 4 | `app/blog/[slug]/page.tsx` | Fix author/publisher to full objects instead of bare @id |
| 5 | `components/Hero.tsx` | Make h1 SSR-visible (remove opacity:0 initial state or use CSS animations) |
| 6 | `app/sitemap.ts` | Fix lastmod (use real dates or omit), cap future dates |
| 7 | `lib/blog/niche-guides.ts` | Clamp getPublishDate() to Math.min(computed, today) |
| 8 | `lib/blog/index.ts` | Deduplicate getAllBlogPosts() by slug |
| 9 | `app/faq/page.tsx` | Move JSON-LD to server component |
| 10 | `public/` | Add og-image.png (1200x630), download critical Unsplash images locally |
