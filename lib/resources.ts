export interface Resource {
  slug: string;
  title: string;
  description: string;
  icon: string;
  category: "tool" | "guide" | "template" | "checklist";
  content: string;
}

export const resources: Resource[] = [
  {
    slug: "ai-visibility-checklist",
    title: "The 2026 AI Visibility Checklist",
    description: "25-point checklist to ensure your business is fully optimized for AI recommendations across ChatGPT, Google AI, and Perplexity.",
    icon: "✅",
    category: "checklist",
    content: `## Your Complete AI Visibility Checklist

Use this checklist to audit your business's AI readiness. Score yourself honestly — each item directly affects whether AI recommends you.

### Foundation (Must-Have)
1. **Google Business Profile** — Complete with all fields, correct categories, 10+ photos
2. **Schema Markup (JSON-LD)** — Business type schema on every page
3. **robots.txt** — Allows GPTBot, ClaudeBot, PerplexityBot
4. **llms.txt** — AI-readable business description at your website root
5. **HTTPS** — Secure site (not HTTP)
6. **Mobile-Friendly** — Passes Google Mobile-Friendly Test

### Content & Structure
7. **FAQ Page** — Minimum 10 questions with FAQPage schema
8. **Service Pages** — One per service, not all on one page
9. **About Page** — Team credentials, certifications, experience
10. **Location Page** — Address, map, LocalBusiness schema
11. **Blog** — Minimum 1 post per month on industry topics
12. **Clear Heading Hierarchy** — H1 → H2 → H3 on every page

### Reviews & Reputation
13. **Google Reviews** — 50+ reviews with 4.5+ rating
14. **AggregateRating Schema** — Review markup on key pages
15. **Directory Listings** — Present on 20+ relevant directories
16. **NAP Consistency** — Same Name/Address/Phone everywhere
17. **Review Responses** — Reply to all reviews within 48 hours

### Technical
18. **Page Speed** — Under 3 seconds on mobile
19. **Meta Descriptions** — 120-160 characters on every page
20. **Canonical URLs** — Set correctly on all pages
21. **XML Sitemap** — Submitted to Google Search Console
22. **Internal Linking** — Related pages linked from every page

### Advanced
23. **Video Content** — At least 1 YouTube video per month
24. **Social Media Profiles** — Linked from website
25. **PR Mentions** — At least 1 authoritative publication mention

## Scoring
- **20-25 items:** AI-Optimized — you're likely being recommended
- **15-19:** Good foundation — some gaps to fill
- **10-14:** Significant gaps — competitors likely beat you
- **Under 10:** AI-Invisible — urgent action needed

**[Get your automated AI score →](/audit)**`,
  },
  {
    slug: "schema-markup-templates",
    title: "Schema Markup Templates for Every Business Type",
    description: "Copy-paste JSON-LD schema templates for healthcare, legal, real estate, education, restaurants, and more.",
    icon: "📋",
    category: "template",
    content: `## Schema Markup Templates

Ready-to-use JSON-LD schema templates for Indian businesses. Copy, customize with your details, and add to your website.

### Healthcare — MedicalBusiness
\`\`\`json
{
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "name": "Your Clinic Name",
  "description": "Brief description of your practice",
  "url": "https://yoursite.com",
  "telephone": "+91-XXXXXXXXXX",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Your Street Address",
    "addressLocality": "City",
    "addressRegion": "State",
    "postalCode": "XXXXXX",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "XX.XXXX",
    "longitude": "XX.XXXX"
  },
  "openingHours": "Mo-Sa 09:00-21:00",
  "medicalSpecialty": "Your Specialty",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "150"
  }
}
\`\`\`

### Legal — LegalService
\`\`\`json
{
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": "Your Law Firm",
  "description": "Practice areas and expertise",
  "url": "https://yoursite.com",
  "telephone": "+91-XXXXXXXXXX",
  "address": { ... },
  "knowsAbout": ["Corporate Law", "Criminal Law", "Family Law"],
  "areaServed": { "@type": "City", "name": "Your City" }
}
\`\`\`

### Restaurant
\`\`\`json
{
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "name": "Your Restaurant",
  "servesCuisine": ["Indian", "Chinese"],
  "priceRange": "₹₹",
  "menu": "https://yoursite.com/menu",
  "acceptsReservations": true,
  "aggregateRating": { ... }
}
\`\`\`

### FAQPage (Universal)
\`\`\`json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Your question here?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Your answer here."
      }
    }
  ]
}
\`\`\`

### How to Add Schema to Your Website

1. **WordPress:** Use Rank Math or Yoast SEO plugin → Add custom JSON-LD
2. **Wix/Squarespace:** Use custom code block in page settings
3. **Next.js/React:** Add as \`<script type="application/ld+json">\` in your component
4. **HTML:** Add before closing \`</head>\` tag

### Test Your Schema
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Schema.org Validator](https://validator.schema.org/)

**[Need help implementing? Get a free audit →](/audit)**`,
  },
  {
    slug: "llms-txt-templates",
    title: "llms.txt Templates for Every Industry",
    description: "Ready-to-use llms.txt templates for healthcare, legal, real estate, education, and lifestyle businesses in India.",
    icon: "📄",
    category: "template",
    content: `## llms.txt Templates

llms.txt is a file at your website root that tells AI systems who you are. Here are templates for every industry.

### Healthcare Clinic
\`\`\`
# [Your Clinic Name]

## About
[Your Clinic] is a [specialty] clinic in [City], [State] with [X] years of experience. Led by Dr. [Name], [Qualification], we specialize in [treatments].

## Location
[Full Address]
[City], [State] [PIN]
India

## Services
- [Service 1]
- [Service 2]
- [Service 3]
- [Service 4]

## Doctors
- Dr. [Name] — [Specialty], [Qualification], [Years] years experience
- Dr. [Name] — [Specialty], [Qualification], [Years] years experience

## Credentials
- [Board Certification]
- [Hospital Affiliation]
- [Awards]
- [Number of procedures completed]

## Contact
Phone: +91-XXXXXXXXXX
Email: info@yourdomain.com
Website: https://yourdomain.com

## Key Facts
- [Google Rating] star rating on Google ([X] reviews)
- [X]+ successful procedures
- Established in [Year]
\`\`\`

### Law Firm
\`\`\`
# [Your Law Firm]

## About
[Firm Name] is a [type] law firm in [City] specializing in [practice areas]. Founded in [year], we have handled [X]+ cases with a [X]% success rate.

## Practice Areas
- Corporate & Commercial Law
- Criminal Defense
- Family Law & Divorce
- Intellectual Property
- Real Estate & Property
- Tax Law

## Partners
- Adv. [Name] — [Specialization], [Bar Council Reg], [Years] years
- Adv. [Name] — [Specialization], [Bar Council Reg], [Years] years

## Contact
Phone: +91-XXXXXXXXXX
Website: https://yourdomain.com
\`\`\`

### Restaurant
\`\`\`
# [Your Restaurant]

## About
[Restaurant Name] is a [cuisine] restaurant in [Location], [City]. Known for [specialty dishes], we serve [X] guests daily with a [rating] star rating.

## Cuisine
[Cuisine types]

## Highlights
- [Signature dish]
- [Award or recognition]
- [Unique feature — rooftop, live music, etc.]

## Hours
[Opening hours]

## Contact
Phone: +91-XXXXXXXXXX
Address: [Full address]
Reservations: https://yourdomain.com/reserve
\`\`\`

### Setup Instructions

1. Create a file called \`llms.txt\` at your website root
2. Copy the relevant template above
3. Replace all bracketed text with your actual information
4. Upload to yoursite.com/llms.txt
5. Verify by visiting https://yourdomain.com/llms.txt in your browser

**[Get help setting this up →](/audit)**`,
  },
  {
    slug: "ai-audit-diy-guide",
    title: "DIY AI Visibility Audit Guide",
    description: "Step-by-step guide to manually audit your business's AI visibility across ChatGPT, Google AI, Perplexity, and voice assistants.",
    icon: "🔍",
    category: "guide",
    content: `## How to Audit Your AI Visibility (DIY Guide)

Follow these 7 steps to check if AI recommends your business.

### Step 1: Search Yourself on ChatGPT
Open ChatGPT and search:
- "Best [your service] in [your city]"
- "Recommend a [your profession] in [your area]"
- "[Your business name] reviews"

**Score: Are you mentioned? Named specifically? Recommended?**

### Step 2: Check Google AI Overviews
Search on Google:
- "Best [your service] near me"
- "[Your service] in [your city]"

Look for the AI Overview box at the top. **Are you mentioned?**

### Step 3: Search on Perplexity
Go to perplexity.ai and search:
- "Who is the best [your profession] in [your city]?"
- "Top [your service] providers in [your area]"

**Does Perplexity cite your website?**

### Step 4: Check Your Schema Markup
1. Go to [Google Rich Results Test](https://search.google.com/test/rich-results)
2. Enter your website URL
3. Check if it detects: LocalBusiness, FAQPage, AggregateRating

**Score: How many schema types are detected?**

### Step 5: Check AI Crawler Access
1. Visit yoursite.com/robots.txt
2. Look for blocks on: GPTBot, ChatGPT-User, ClaudeBot, PerplexityBot

**If any are blocked, AI literally cannot see your website.**

### Step 6: Check llms.txt
Visit yoursite.com/llms.txt

**Does it exist? Is it complete?**

### Step 7: Check Directory Consistency
Search your business on:
- Google Business Profile
- Practo / JustDial / relevant directories
- Your own website

**Is the Name, Address, Phone (NAP) identical everywhere?**

## Scoring
Award yourself 1-10 points for each step:
- **60-70:** AI-Optimized — you're in great shape
- **40-59:** Decent foundation — key gaps to address
- **20-39:** Significant issues — competitors are ahead
- **Under 20:** AI-Invisible — urgent optimization needed

**[Want an automated score? Use our free tool →](/audit)**`,
  },
  {
    slug: "healthcare-marketing-guide",
    title: "The Complete Healthcare Marketing Guide for 2026",
    description: "Everything doctors, clinics, and hospitals need to know about marketing in the AI age. From SEO to AEO to social media.",
    icon: "🏥",
    category: "guide",
    content: `## Healthcare Marketing in 2026: The Complete Guide

### The New Patient Journey
1. Patient has a health concern
2. Asks ChatGPT/Google AI for recommendations
3. AI recommends 2-3 specific doctors/clinics
4. Patient visits those clinics' websites
5. Reads reviews and credentials
6. Books an appointment

**If you're not in step 2, you're invisible.**

### The 5 Pillars of Healthcare Marketing

#### 1. AI Visibility (AEO)
- Schema markup (MedicalBusiness, Physician, MedicalProcedure)
- llms.txt file with practice details
- AI crawler access in robots.txt
- Structured FAQ content with FAQPage schema

#### 2. Google Presence
- Google Business Profile (complete, verified)
- Google Maps optimization
- Google Ads for high-intent keywords
- Google Reviews (50+ with 4.5+ rating)

#### 3. Content Marketing
- Condition/treatment pages (one per condition)
- Blog posts answering patient questions
- Doctor profile pages with credentials
- Before/after galleries (where applicable)

#### 4. Social Media
- Instagram Reels (educational content, patient stories)
- YouTube (procedure explanations, doctor introductions)
- LinkedIn (for referral network building)
- WhatsApp Business (patient communication)

#### 5. Reputation Management
- Automated review requests (WhatsApp/SMS post-appointment)
- Review response strategy (respond within 24 hours)
- Directory listings (Practo, Lybrate, Google, 20+ directories)
- NAP consistency across all platforms

### Budget Allocation for Doctors
| Channel | Monthly Budget | Expected ROI |
|---------|---------------|-------------|
| AEO | ₹25K-75K | 5-15 new patients |
| Google Ads | ₹20K-50K | 10-30 leads |
| Content | ₹10K-20K | Long-term authority |
| Social Media | ₹5K-15K | Brand awareness |
| **Total** | **₹60K-1.6L** | **15-45 new patients** |

### Common Mistakes
1. No schema markup on website
2. Blocking AI crawlers in robots.txt
3. No llms.txt file
4. All services on one page instead of dedicated pages
5. Not responding to Google reviews

**[Check your clinic's AI score →](/audit)**`,
  },
  {
    slug: "legal-marketing-guide",
    title: "Law Firm Marketing Guide for the AI Age",
    description: "How lawyers and law firms can use AI marketing, SEO, and AEO to acquire corporate clients and high-value cases.",
    icon: "⚖️",
    category: "guide",
    content: `## Law Firm Marketing in 2026

### The New Client Acquisition Funnel
Corporate clients and individuals now ask AI for lawyer recommendations before calling anyone. The firm that AI recommends gets the first call.

### Key Strategies for Law Firms

#### Practice Area Pages
Create dedicated pages for each practice area with:
- LegalService schema markup
- FAQ schema with common questions
- Case study highlights (within confidentiality limits)
- Lawyer profiles for that practice area

#### Thought Leadership Content
- Blog posts on legal topics (weekly)
- LinkedIn articles (biweekly)
- Webinar and speaking engagements
- Published opinions on legal developments

#### Directory & Citation Strategy
Critical directories: Bar Council, LegalKart, Vakil Search, Google Business Profile
Important: LawRato, MyAdvo, LinkedIn, Justdial

#### AI-Specific Optimization
- LegalService schema with practice areas
- llms.txt with firm credentials and specializations
- FAQ pages for common legal questions
- Case results pages (anonymized) with schema

### Ethical Considerations
All marketing must comply with:
- Bar Council of India advertising rules
- State bar council guidelines
- No solicitation or misleading claims
- Confidentiality of client matters

**[Check your firm's AI visibility →](/audit)**`,
  },
  {
    slug: "real-estate-marketing-guide",
    title: "Real Estate AI Marketing Guide for Builders & Agents",
    description: "How builders, developers, and real estate agents can use AI to sell properties worth ₹50L-2Cr+ in 2026.",
    icon: "🏢",
    category: "guide",
    content: `## Real Estate Marketing in the AI Age

### The ₹1Cr Decision Starts with AI
Homebuyers spend 3-6 months researching. In 2026, their first research tool is AI.

### Project-Level Marketing Strategy

#### For Each Project
1. Dedicated landing page with RealEstateAgent schema
2. RERA number prominently displayed and structured
3. Configuration and pricing pages
4. Locality guide content
5. Virtual tour links
6. Construction progress updates

#### Locality Authority
Build content around the localities where you build:
- "[Locality] Real Estate Guide 2026"
- "Infrastructure Near [Project]"
- "Price Trends in [Locality]"
- "Schools and Hospitals Near [Project]"

#### AI Optimization for Real Estate
- RealEstateAgent/Project schema markup
- Builder reliability structured data
- RERA compliance data in schema
- Customer review aggregation
- Price comparison content

### Why AI Matters More for Real Estate
- One sale = ₹50L-2Cr+ (highest of any industry)
- Buyers research for months (AI is used throughout)
- Trust is critical — AI validation matters
- Competitors are NOT optimized yet (massive opportunity)

**[Check your project's AI visibility →](/audit)**`,
  },
  {
    slug: "nap-consistency-toolkit",
    title: "NAP Consistency Audit Toolkit",
    description: "Tools and templates to ensure your business Name, Address, and Phone number are consistent across all directories and platforms.",
    icon: "📍",
    category: "tool",
    content: `## NAP Consistency: The Foundation of AI Visibility

### What is NAP?
**N**ame, **A**ddress, **P**hone — the three pieces of information that must be identical across every online presence.

### Why NAP Consistency Matters for AI
AI systems cross-reference multiple sources to verify business information. If your name is slightly different on Google vs Practo vs your website, AI may:
- Think they're different businesses
- Lower your trust score
- Not recommend you at all

### Common NAP Mistakes
| What's Wrong | Example | Fix |
|-------------|---------|-----|
| Name variations | "Dr. Sharma's Clinic" vs "Sharma Skin Care" | Pick ONE exact name |
| Address format | "2nd Floor, MG Road" vs "2/F, Mahatma Gandhi Rd" | Use ONE exact format |
| Phone format | "9876543210" vs "+91-98765-43210" | Use +91-XXXXX-XXXXX |
| Old address | Moved 2 years ago, old address on 3 directories | Update ALL directories |

### NAP Audit Steps

#### Step 1: Define Your Master NAP
Write your exact business name, full address, and phone number. This is your "master" version.

#### Step 2: Check These Platforms
- Google Business Profile
- Your website (header, footer, contact page)
- Practo / Lybrate / relevant directories
- JustDial
- Sulekha
- Social media profiles
- Email signatures
- Business cards and print materials

#### Step 3: Fix Inconsistencies
Update every platform to match your master NAP exactly. Even small differences matter.

#### Step 4: Monitor Monthly
Set a monthly reminder to check your top 10 listings for NAP accuracy.

### NAP Template
\`\`\`
Business Name: [Exact Legal Name]
Address Line 1: [Street Address]
Address Line 2: [Floor/Suite/Building]
City: [City]
State: [State]
PIN: [XXXXXX]
Country: India
Phone: +91-XXXXX-XXXXX
Email: [primary@email.com]
Website: https://[yourdomain.com]
\`\`\`

**[Check your NAP with our AI audit →](/audit)**`,
  },
  {
    slug: "google-business-profile-guide",
    title: "Google Business Profile Optimization Guide",
    description: "Complete guide to optimizing your Google Business Profile for both Google Maps and AI visibility.",
    icon: "📍",
    category: "guide",
    content: `## Google Business Profile: Your Most Important Online Asset

### Why GBP Is Critical for AI
Google Business Profile (GBP) feeds directly into:
- Google Maps results
- Google AI Overviews
- Google Assistant voice search
- Third-party AI systems that scrape Google data

A complete, optimized GBP is the single highest-impact action for AI visibility.

### Complete GBP Optimization Checklist

#### Basic Information
- Business name (exact, no keyword stuffing)
- Category (primary + 5 additional)
- Address (exact, verified)
- Phone number
- Website URL
- Hours of operation (including holidays)

#### Visual Content
- Logo (high quality)
- Cover photo
- 10+ interior/exterior photos
- Team/staff photos
- Product/service photos
- Video (virtual tour if possible)

#### Services & Products
- List every service with description
- Add pricing where possible
- Group services by category

#### Q&A Section
- Seed 10+ common questions yourself
- Answer them with detailed, helpful responses
- This feeds directly into AI systems

#### Posts
- Weekly updates (minimum)
- Mix: offers, events, updates, tips
- Include photos in every post
- Call to action in every post

#### Reviews
- Target: 100+ reviews with 4.5+ rating
- Respond to EVERY review within 24 hours
- Professional, helpful responses to negative reviews
- Set up automated review request system

### Advanced GBP Tips
1. Use UTM parameters in your website URL to track GBP traffic
2. Add booking links for appointment-based businesses
3. Complete the "From the business" description (750 characters max)
4. Add attributes (wheelchair accessible, free Wi-Fi, etc.)
5. Upload photos regularly (Google favors active profiles)

**[Check your GBP optimization score →](/audit)**`,
  },
  {
    slug: "voice-search-optimization",
    title: "Voice Search Optimization Guide for Indian Businesses",
    description: "How to optimize your business for Alexa, Google Assistant, and Siri voice search recommendations in India.",
    icon: "🎤",
    category: "guide",
    content: `## Voice Search Optimization for Indian Businesses

### The Rise of Voice in India
- 200M+ Indian users use voice assistants monthly
- Hindi and regional language voice search growing 50%+ YoY
- "Near me" voice searches up 150% since 2024
- Voice commerce expected to reach $40B in India by 2027

### How Voice Search Works
When someone asks "Hey Google, find me a dentist nearby," the assistant:
1. Checks Google Business Profile for nearby businesses
2. Reads the FAQ schema on your website
3. Uses AggregateRating data to rank options
4. Returns ONE recommendation (not 10 links)

### Optimization Strategies

#### 1. FAQ Content for Voice
Write FAQ answers as complete spoken sentences:
- Bad: "Dr. Sharma, 15 years, MG Road"
- Good: "Dr. Sharma's Dental Clinic on MG Road has been serving patients for 15 years with a 4.9-star rating on Google."

#### 2. SpeakableSpecification Schema
Add this to your key pages to tell voice assistants which content to read aloud.

#### 3. Conversational Keywords
Target long-tail, conversational queries:
- "Who is the best dermatologist near me?"
- "How much does a dental implant cost in Mumbai?"
- "Which IVF clinic has the highest success rate?"

#### 4. Google Business Profile
Critical for voice — it's the primary data source for Google Assistant.

#### 5. Hindi/Regional Content
Consider adding FAQ content in Hindi and your regional language. Voice search in regional languages is growing fastest.

### Voice Search Keywords by Industry
- Healthcare: "doctor near me," "clinic open now," "[treatment] cost"
- Legal: "lawyer for [case type]," "legal help near me"
- Restaurants: "best [cuisine] restaurant near me," "restaurants open late"
- Real Estate: "flats for sale in [area]," "3BHK price in [locality]"

**[Check your voice search readiness →](/audit)**`,
  },
];

export function getAllResources(): Resource[] {
  return resources;
}

export function getResourceBySlug(slug: string): Resource | undefined {
  return resources.find((r) => r.slug === slug);
}
