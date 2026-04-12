# Godfather Funnel AI — Prioritized Action Plan

**Current Score: 58/100 → Target: 85/100**

---

## CRITICAL (Fix Today — Blocking Indexing)

### 1. Fix Canonical Tags (ALL 1,293 pages affected)
**Impact:** Without this fix, Google may deindex every page except the homepage.

**File:** `app/layout.tsx:23-25`
**Action:** Remove the `alternates.canonical` from the root layout metadata. Let Next.js auto-generate canonicals from the page URL, or set canonical per-page.

```diff
- alternates: {
-   canonical: "/",
- },
```

Each page that needs a custom canonical should set it in its own `generateMetadata()`.

---

### 2. Fix Organization Schema Identity
**Impact:** Entity linking broken across all pages.

**File:** `app/layout.tsx` (Organization JSON-LD block)
**Action:** Change `@type` from `ProfessionalService` to `Organization`, populate `sameAs`, add `telephone`, improve `address`.

---

### 3. Fix Empty sameAs Array
**Impact:** Zero social identity signals on every page.

**File:** `app/layout.tsx:90`
**Action:** Replace `sameAs: []` with actual social URLs from `lib/schema-helpers.ts`.

---

### 4. Add datePublished to Comparison Article Schema
**Impact:** All 22 comparison pages fail Article rich results validation.

**File:** `lib/schema-helpers.ts` → `generateComparisonSchema()`
**Action:** Add `datePublished`, `dateModified`, `image`, and full `author`/`publisher` objects.

---

## HIGH (Fix This Week)

### 5. Fix Blog Article Author/Publisher
**File:** `app/blog/[slug]/page.tsx`
**Action:** Replace bare `@id` references with full Organization objects including `name` and `logo`.

### 6. Fix Provider URL on pSEO Pages
**File:** `app/ai-marketing/[niche]/[city]/page.tsx:66`
**Action:** Change `https://godfatherfunnelai.com` → `https://www.godfatherfunnelai.com`

### 7. Fix Hero Visibility (CWV)
**File:** `components/Hero.tsx`
**Action:** Remove `opacity: 0` initial states from framer-motion on the h1, subline, and CTA. Use CSS animations or make the text SSR-visible by default.

### 8. Add Preconnect for Unsplash
**File:** `app/layout.tsx`
**Action:** Add `<link rel="preconnect" href="https://images.unsplash.com" />` in the head.

### 9. Add Image Priority Props
**Files:** `components/Hero.tsx`, `components/NicheCard.tsx`
**Action:** Add `priority={true}` to above-the-fold images.

### 10. Fix Sitemap Lastmod
**File:** `app/sitemap.ts`
**Action:** Stop using `new Date().toISOString()` for all pages. Use actual content dates or omit lastmod.

### 11. Cap Future Blog Dates
**File:** `lib/blog/niche-guides.ts`
**Action:** Clamp `getPublishDate()` to `Math.min(computed, today)`.

### 12. Deduplicate Blog Posts in Sitemap
**File:** `lib/blog/index.ts`
**Action:** Add dedup by slug in `getAllBlogPosts()`.

### 13. Create og-image.png
**File:** `public/og-image.png`
**Action:** Create a 1200x630 branded OG image. Currently returns 404 on all social shares.

---

## MEDIUM (Fix This Month)

### 14. Add BreadcrumbList Schema to pSEO Pages
**File:** `app/ai-marketing/[niche]/[city]/page.tsx`

### 15. Add Security Headers
**File:** `next.config.ts` (or Vercel headers config)
**Action:** Add X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy.

### 16. Add Physical Address to Schema
**File:** `app/layout.tsx`
**Action:** Add city, state, PIN code to PostalAddress.

### 17. Add Founder Person Schema
**File:** `app/layout.tsx` or `app/about/page.tsx`
**Action:** Add Person schema for founder linked to Organization via `founder` property.

### 18. Add Telephone to Schema
**File:** `app/layout.tsx`
**Action:** Add `telephone` field to Organization schema.

### 19. Improve pSEO Content Uniqueness
**File:** `app/ai-marketing/[niche]/[city]/page.tsx`
**Action:** Add city-specific stats, local competitor mentions, regional pricing to avoid doorway page penalty.

### 20. Source All Statistics
**Action:** Add "According to [Source, Year]" attribution to every stat on the site.

### 21. Move FAQ JSON-LD to Server Component
**File:** `app/faq/page.tsx`

### 22. Add Privacy & Terms Pages
**Action:** Create `/privacy` and `/terms` pages.

---

## LOW (Backlog)

### 23. Remove priority/changefreq from Sitemap
### 24. Add Amazonbot, Meta-ExternalAgent, Applebot-Extended to robots.txt
### 25. Remove Geist_Mono Font (if unused)
### 26. Reduce framer-motion Usage (replace with CSS animations)
### 27. Self-host Critical Images (download from Unsplash to /public)
### 28. Add wordCount/articleSection to Article Schema
### 29. Create Real Social Media Profiles (LinkedIn, Twitter, Instagram, YouTube)
### 30. Get Listed on Agency Directories (Clutch, G2, DesignRush, GoodFirms)

---

## Estimated Score After Fixes

| Phase | Actions | Estimated Score |
|-------|---------|-----------------|
| Current | — | 58/100 |
| After Critical fixes (1-4) | Canonical, Schema identity, sameAs, comparison dates | 70/100 |
| After High fixes (5-13) | Blog schema, pSEO URL, CWV, sitemap, og-image | 80/100 |
| After Medium fixes (14-22) | Breadcrumbs, security, address, content quality | 88/100 |
| After Low fixes (23-30) | Polish, external authority | 92/100 |
