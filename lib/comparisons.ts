export interface ComparisonTopic {
  slug: string;
  title: string;
  description: string;
  left: { name: string; pros: string[]; cons: string[] };
  right: { name: string; pros: string[]; cons: string[] };
  verdict: string;
  faqItems: { question: string; answer: string }[];
}

export const comparisonTopics: ComparisonTopic[] = [
  {
    slug: "aeo-vs-seo",
    title: "AEO vs SEO: Which Should You Invest In?",
    description: "Answer Engine Optimization vs Search Engine Optimization — what's the difference, why you need both, and which delivers better ROI in 2026.",
    left: { name: "SEO", pros: ["Established methodology with 20+ years of data", "Drives consistent organic traffic via Google", "Large talent pool and tool ecosystem", "Works for all business types"], cons: ["Takes 6-12 months to show results", "Only gets you links, not direct recommendations", "Increasingly disrupted by AI Overviews", "10 spots on page 1 = fierce competition"] },
    right: { name: "AEO", pros: ["Direct AI recommendations by name", "Results in 30-90 days", "Only 2-3 businesses recommended per query", "Growing as AI adoption increases exponentially"], cons: ["Newer discipline with less established playbook", "Fewer specialized practitioners", "AI algorithms change frequently", "Measurement tools still maturing"] },
    verdict: "You need both. SEO drives traditional search traffic while AEO ensures AI recommends you. But if you had to pick one today, AEO has higher ROI because competition is still low — 92% of businesses haven't started.",
    faqItems: [
      { question: "Can I do AEO without SEO?", answer: "Technically yes, but they share foundational elements like schema markup and quality content. Doing both together creates a multiplier effect." },
      { question: "Which is more affordable?", answer: "AEO typically costs ₹25K-75K/month while comprehensive SEO runs ₹50K-2L/month. AEO has faster ROI because AI recommendations drive direct action." },
      { question: "Will SEO become obsolete?", answer: "No, but it's evolving. Google still drives massive traffic via traditional results. However, AI Overviews are capturing an increasing share of clicks." },
    ],
  },
  {
    slug: "chatgpt-vs-google-for-finding-doctors",
    title: "ChatGPT vs Google for Finding Doctors: How Patients Search in 2026",
    description: "How patients discover healthcare providers is shifting from Google to AI. Here's how ChatGPT and Google compare for medical recommendations.",
    left: { name: "Google Search", pros: ["Shows map with nearby options", "Display reviews and ratings inline", "Supports Google Ads for immediate visibility", "Established patient behavior"], cons: ["10 blue links require clicking and comparing", "Ads clutter results", "Algorithm changes frequently", "Patients must evaluate multiple options themselves"] },
    right: { name: "ChatGPT", pros: ["Direct name recommendations with reasoning", "Synthesizes reviews, credentials, and data", "Conversational follow-up questions", "Growing rapidly among under-35 patients"], cons: ["Can't verify real-time availability", "May have outdated information", "No map/directions integration", "Can hallucinate or recommend non-existent clinics"] },
    verdict: "73% of patients under 35 now start with AI before Google. Smart healthcare businesses optimize for both, but the trend clearly favors AI. Within 2-3 years, AI-first search will be the norm for healthcare.",
    faqItems: [
      { question: "Do patients actually trust ChatGPT for doctor recommendations?", answer: "Yes, especially younger patients. They view AI as unbiased compared to paid Google Ads. Trust is growing as AI accuracy improves." },
      { question: "How do I appear in both?", answer: "Schema markup, Google Business Profile optimization, and quality content work for both. Add llms.txt and AI crawler access for ChatGPT specifically." },
    ],
  },
  {
    slug: "traditional-marketing-vs-ai-marketing",
    title: "Traditional Marketing vs AI Marketing: The ROI Comparison",
    description: "Billboards, newspaper ads, and TV spots vs AI visibility optimization. Which delivers better ROI for Indian businesses in 2026?",
    left: { name: "Traditional Marketing", pros: ["High brand awareness in local area", "Tangible presence (billboards, newspaper)", "Works for older demographics", "No technical setup required"], cons: ["Extremely expensive (₹1-10L/month for billboards)", "Zero targeting — everyone sees it", "Cannot track ROI accurately", "Declining effectiveness among under-40 audience"] },
    right: { name: "AI Marketing (AEO)", pros: ["Laser-targeted — only reaches people actively searching", "10-50x lower cost per lead", "Measurable ROI with exact attribution", "Growing audience as AI adoption increases"], cons: ["Requires technical implementation", "Not visible to non-AI users", "Needs ongoing optimization", "Newer discipline — fewer case studies"] },
    verdict: "For every ₹1L spent on billboards, AI marketing delivers 10-50x more qualified leads. Traditional marketing still has a role for brand awareness, but for lead generation, AI marketing is objectively superior.",
    faqItems: [
      { question: "Should I stop all traditional marketing?", answer: "Not necessarily. Brand awareness still matters. But shift 70-80% of your budget to digital and AI marketing for measurable ROI." },
      { question: "What about word-of-mouth?", answer: "Word-of-mouth is being replaced by AI-of-mouth. When AI recommends you, it's like thousands of trusted friends recommending you simultaneously." },
    ],
  },
  {
    slug: "google-ads-vs-aeo",
    title: "Google Ads vs AEO: Paying for Clicks vs Being Recommended",
    description: "Google Ads costs ₹50-500 per click. AEO gets you organically recommended by AI. Here's the full ROI comparison.",
    left: { name: "Google Ads", pros: ["Instant visibility from day 1", "Precise targeting by keyword and location", "Scalable — increase budget to increase leads", "Detailed analytics and conversion tracking"], cons: ["₹50-500 per click (healthcare especially expensive)", "Traffic stops immediately when budget runs out", "Click fraud wastes 20-30% of budget", "Ad fatigue — CTR declines over time"] },
    right: { name: "AEO", pros: ["Zero cost per AI recommendation", "Builds compounding authority over time", "Higher trust — AI recommendations not seen as ads", "Works 24/7 without ongoing spend"], cons: ["Takes 30-90 days to see results", "Cannot scale instantly like ads", "Less control over exact messaging", "Requires technical optimization skills"] },
    verdict: "Google Ads is a faucet — turn it on, leads flow; turn it off, they stop. AEO is an investment — it takes time to build but creates a permanent asset. Best strategy: use Ads for immediate leads while building AEO for long-term dominance.",
    faqItems: [
      { question: "What's the cost comparison?", answer: "Google Ads for 'dermatologist in Mumbai': ₹200-500/click, needing 50-100 clicks per patient = ₹10K-50K per patient. AEO: ₹25K-75K/month, delivering 5-15 patients = ₹2K-15K per patient." },
      { question: "Can I use both together?", answer: "Absolutely. Use Google Ads for immediate lead generation while AEO builds your organic AI presence. Over 6-12 months, reduce ad spend as organic AI recommendations increase." },
    ],
  },
  {
    slug: "seo-agency-vs-ai-marketing-agency",
    title: "SEO Agency vs AI Marketing Agency: What's the Difference?",
    description: "Traditional SEO agencies focus on Google rankings. AI marketing agencies focus on AI recommendations. Here's why the distinction matters.",
    left: { name: "Traditional SEO Agency", pros: ["Well-established methodologies", "Focus on Google rankings", "Large talent pool available", "Proven track record over 15+ years"], cons: ["Don't understand AI recommendation systems", "No expertise in schema for AI", "Don't set up llms.txt or AI crawler access", "Still optimizing for 2020 Google, not 2026 AI"] },
    right: { name: "AI Marketing Agency (AEO)", pros: ["Specialized in AI recommendation optimization", "Schema markup expertise for AI systems", "Set up llms.txt, robots.txt for AI crawlers", "Understand ChatGPT, Perplexity, Google AI Overviews"], cons: ["Fewer agencies available", "Newer discipline", "May not cover traditional SEO", "Industry still defining best practices"] },
    verdict: "The best choice is an agency that does both. But if your traditional SEO agency says 'AEO isn't real' or 'schema doesn't matter,' you need to switch. The future of search is AI-first.",
    faqItems: [
      { question: "How do I know if my SEO agency understands AEO?", answer: "Ask them: Do you set up llms.txt? Do you optimize for ChatGPT? Do you monitor AI citations? If they don't know what these are, they're behind." },
      { question: "Should I fire my SEO agency?", answer: "Not necessarily. Ask them to add AEO to their services. If they can't or won't, then consider an AI marketing agency that also covers SEO." },
    ],
  },
  {
    slug: "practo-vs-own-website",
    title: "Practo vs Own Website: Where Should Doctors Invest?",
    description: "Practo charges ₹5K-25K/month for listings. Your own website costs less and builds permanent authority. Here's the comparison.",
    left: { name: "Practo", pros: ["Instant visibility on India's top health platform", "Built-in appointment booking", "Patient reviews on trusted platform", "No technical setup needed"], cons: ["₹5K-25K/month recurring cost", "You don't own the platform or patients", "Competing with every other doctor on Practo", "No control over your listing's prominence"] },
    right: { name: "Own Website + AEO", pros: ["You own your digital presence forever", "Schema markup feeds AI directly", "No per-lead or per-click charges", "Build long-term brand authority"], cons: ["Requires initial setup investment", "Needs ongoing content and optimization", "Takes time to build review authority", "Technical skills needed for schema/AEO"] },
    verdict: "Do both, but prioritize your own website. Practo is a rental — you pay monthly and compete with every doctor. Your website + AEO is an asset you own that feeds AI systems directly.",
    faqItems: [
      { question: "Can I use Practo AND my own website?", answer: "Absolutely. List on Practo for the platform traffic, but invest in your own website for long-term AI visibility. Ensure NAP consistency across both." },
      { question: "Does Practo help with AI visibility?", answer: "Partially. Practo listings do get cited by AI, but your own website with proper schema gives you much more control over how AI represents you." },
    ],
  },
  {
    slug: "justdial-vs-ai-visibility",
    title: "JustDial vs AI Visibility: Which Drives More Business?",
    description: "JustDial has been India's go-to directory for decades. But AI is changing how people discover businesses. Here's the comparison.",
    left: { name: "JustDial", pros: ["Massive Indian user base", "Phone-based lead generation", "Trusted brand in India", "Good for local discovery"], cons: ["Spam leads are common", "Expensive premium listings", "Declining usage among younger demographics", "No AI recommendation benefit"] },
    right: { name: "AI Visibility (AEO)", pros: ["Higher quality leads — people asking AI have specific intent", "No spam — AI gives your name directly", "Growing audience rapidly", "Builds compounding authority"], cons: ["Requires technical setup", "Takes 30-90 days to show results", "Newer approach", "Needs ongoing optimization"] },
    verdict: "Keep your JustDial listing for NAP consistency, but invest in AI visibility for the future. JustDial's audience is aging. AI's audience is growing exponentially.",
    faqItems: [
      { question: "Should I cancel JustDial?", answer: "Don't cancel — keep the free listing for citation value. But don't pay for premium JustDial placement. Redirect that budget to AEO." },
    ],
  },
  {
    slug: "google-maps-vs-chatgpt-recommendations",
    title: "Google Maps vs ChatGPT: How People Find Local Businesses",
    description: "Google Maps shows you options on a map. ChatGPT tells you exactly who to go to. Which drives more business?",
    left: { name: "Google Maps", pros: ["Visual map with directions", "Real-time reviews and ratings", "Click-to-call functionality", "Proximity-based results"], cons: ["Shows 3+ options — patient must choose", "Paid promotions dilute organic results", "Requires scrolling and comparing", "Declining as AI becomes first touchpoint"] },
    right: { name: "ChatGPT Recommendations", pros: ["Direct name recommendation with reasoning", "Higher conversion — no comparison needed", "Growing rapidly in usage", "Builds trust through AI endorsement"], cons: ["No real-time map or directions", "Can't verify current availability", "Smaller current user base", "May have outdated info"] },
    verdict: "Optimize for both. Google Maps is still huge for 'near me' searches. But ChatGPT recommendations have 3-5x higher conversion because the patient gets a direct recommendation, not a list to compare.",
    faqItems: [
      { question: "How do I appear on both?", answer: "Google Business Profile optimization helps both. Add schema markup and llms.txt for ChatGPT. Consistent NAP data across both is critical." },
    ],
  },
  {
    slug: "facebook-ads-vs-ai-organic",
    title: "Facebook/Meta Ads vs AI Organic: Where Should You Spend?",
    description: "Meta Ads reach billions but cost keeps rising. AI organic recommendations are free and growing. Here's the ROI comparison.",
    left: { name: "Facebook/Meta Ads", pros: ["Massive audience reach", "Precise demographic targeting", "Visual ad formats (video, carousel)", "Retargeting capabilities"], cons: ["CPM increasing 20-30% year over year", "Ad fatigue requires constant creative refresh", "Privacy changes reducing targeting accuracy", "No lasting benefit — traffic stops when budget stops"] },
    right: { name: "AI Organic (AEO)", pros: ["Zero ongoing ad spend", "Higher trust than paid ads", "Compounding returns over time", "Reaches people with buying intent"], cons: ["Slower initial results", "Requires technical optimization", "Less control over audience targeting", "Cannot scale instantly"] },
    verdict: "Use Meta Ads for awareness and retargeting. Use AEO for high-intent lead generation. The best businesses do both, but AEO delivers better long-term ROI.",
    faqItems: [
      { question: "What budget split do you recommend?", answer: "Start with 60% Ads / 40% AEO. As AI visibility builds, shift to 30% Ads / 70% AEO over 6-12 months." },
    ],
  },
  {
    slug: "linkedin-vs-ai-for-b2b",
    title: "LinkedIn vs AI for B2B Lead Generation",
    description: "LinkedIn is the gold standard for B2B. But AI is becoming the new way businesses find service providers. Here's the comparison.",
    left: { name: "LinkedIn", pros: ["Professional audience with business intent", "InMail and connection requests", "Content marketing through posts/articles", "Company page with follower building"], cons: ["Expensive ads (₹500-2000/click for B2B)", "Organic reach declining", "Time-intensive outreach", "Spam fatigue among users"] },
    right: { name: "AI Recommendations (AEO)", pros: ["Decision-makers ask AI for service provider recommendations", "Zero cost per recommendation", "Higher credibility than cold outreach", "Works 24/7 globally"], cons: ["Less control over targeting", "Takes time to build AI authority", "Can't do direct outreach", "Measurement still evolving"] },
    verdict: "LinkedIn is essential for personal branding and networking. AI recommendations are essential for inbound lead generation. Use LinkedIn for outbound, AEO for inbound.",
    faqItems: [
      { question: "Which generates higher quality leads?", answer: "AI recommendations generate higher quality leads because the person already has buying intent and trusts the AI's recommendation. LinkedIn leads need more nurturing." },
    ],
  },
  {
    slug: "whatsapp-marketing-vs-ai-marketing",
    title: "WhatsApp Marketing vs AI Marketing: Direct Messaging vs Direct Recommendations",
    description: "WhatsApp marketing sends your message to contacts. AI marketing gets AI to send their recommendation of you. Here's how they compare.",
    left: { name: "WhatsApp Marketing", pros: ["98% open rate — highest of any channel", "Direct, personal communication", "Rich media support", "Free with WhatsApp Business"], cons: ["Requires existing contact list", "Spam risk — can get your number banned", "Not scalable without Business API", "Broadcast limits for free accounts"] },
    right: { name: "AI Marketing (AEO)", pros: ["Reaches people you've never contacted", "Scales infinitely without list building", "AI endorsement carries trust", "Works even while you sleep"], cons: ["Cannot send personalized messages", "Less control over timing", "Requires technical optimization", "Results take 30-90 days"] },
    verdict: "Use WhatsApp for existing patient/client communication and review requests. Use AEO to bring new patients/clients who've never heard of you. They're complementary, not competitive.",
    faqItems: [
      { question: "Can AI drive WhatsApp leads?", answer: "Yes! AI recommendations often lead to website visits where WhatsApp chat widgets capture leads. AI brings them to you, WhatsApp converts them." },
    ],
  },
  {
    slug: "instagram-vs-ai-marketing",
    title: "Instagram Marketing vs AI Marketing for Business",
    description: "Instagram builds visual brand presence. AI marketing gets direct recommendations. Which works better for lead generation?",
    left: { name: "Instagram Marketing", pros: ["Visual storytelling", "Reels reach massive audiences", "Story and DM engagement", "Influencer collaboration"], cons: ["Organic reach declining heavily", "Requires constant content creation", "Difficult to attribute leads to Instagram", "Algorithm changes frequently"] },
    right: { name: "AI Marketing (AEO)", pros: ["Direct lead generation — not just awareness", "Measurable recommendation presence", "No content creation fatigue", "Higher intent audience"], cons: ["No visual component", "Cannot build community", "Less emotional connection", "Requires technical skills"] },
    verdict: "Instagram is for brand building and community. AI marketing is for lead generation. Use Instagram to build trust and authority signals that AI systems then use to recommend you.",
    faqItems: [
      { question: "Does Instagram content help AI visibility?", answer: "Indirectly yes. Active Instagram with engagement signals authority. AI systems may consider social presence when deciding recommendations." },
    ],
  },
  {
    slug: "email-marketing-vs-ai-marketing",
    title: "Email Marketing vs AI Marketing: Nurturing vs Acquiring",
    description: "Email nurtures existing leads. AI acquires new ones. Here's how to use both for maximum business growth.",
    left: { name: "Email Marketing", pros: ["Highest ROI channel (₹1 spent = ₹42 return)", "Nurtures leads over time", "Automated sequences save time", "Owned audience — not platform-dependent"], cons: ["Requires existing email list", "Open rates declining (15-25% average)", "Spam filter challenges", "Cannot acquire new leads alone"] },
    right: { name: "AI Marketing (AEO)", pros: ["Acquires completely new leads", "No list building required", "AI recommendation = warm lead from start", "Growing channel with increasing ROI"], cons: ["Cannot nurture leads", "Less personalization", "No direct communication channel", "Takes time to build presence"] },
    verdict: "Perfect combination: AEO brings new leads → Email nurtures them → Conversion. They're the best pair in marketing. AEO fills the top of funnel, email converts the bottom.",
    faqItems: [
      { question: "What's the ideal funnel?", answer: "AI recommends your business → Prospect visits your site → Free audit captures email → 5-email nurture sequence → Booked call → Client." },
    ],
  },
  {
    slug: "youtube-vs-ai-for-education",
    title: "YouTube vs AI for Patient/Client Education",
    description: "YouTube videos build trust and authority. AI citations build recommendation presence. How do they work together?",
    left: { name: "YouTube", pros: ["Video builds deep trust", "Second largest search engine", "Evergreen content lasts years", "Google owns YouTube — helps Google rankings"], cons: ["High production effort", "Competitive — millions of videos", "Slow subscriber growth", "Monetization requires 1K+ subscribers"] },
    right: { name: "AI Recommendations (AEO)", pros: ["Zero production effort per recommendation", "AI cites you automatically", "Higher conversion — direct recommendation", "Works across all AI platforms"], cons: ["No video content creation", "Cannot demonstrate expertise visually", "Less emotional connection", "AI may summarize rather than link"] },
    verdict: "YouTube builds the authority that AI systems use to recommend you. Create educational videos that demonstrate expertise, then ensure your website and schema feed this authority to AI systems. YouTube + AEO = unstoppable combination.",
    faqItems: [
      { question: "Does YouTube help AI visibility?", answer: "Yes! YouTube videos with proper titles, descriptions, and tags create additional authority signals. Some AI systems even reference YouTube content in recommendations." },
    ],
  },
  {
    slug: "old-seo-vs-new-seo",
    title: "Old SEO (2020) vs New SEO (2026): What's Changed?",
    description: "SEO in 2020 was about backlinks and keywords. SEO in 2026 is about AI visibility and structured data. Here's what changed.",
    left: { name: "Old SEO (2020)", pros: ["Keyword stuffing worked somewhat", "Backlink quantity mattered most", "Meta keywords had some value", "Simple: rank #1, get traffic"], cons: ["Google Panda/Penguin killed spammy tactics", "No AI to optimize for", "Limited structured data adoption", "Focused only on Google"] },
    right: { name: "New SEO (2026)", pros: ["AI-first optimization", "Schema markup is critical", "Quality over quantity for backlinks", "Multi-platform: Google + ChatGPT + Perplexity"], cons: ["More technically complex", "Requires understanding multiple AI systems", "Constantly evolving", "Harder to game"] },
    verdict: "If your SEO strategy hasn't changed since 2020, you're playing a different game. New SEO requires schema markup, llms.txt, AI crawler access, and structured FAQ content — none of which mattered in 2020.",
    faqItems: [
      { question: "Are backlinks still important?", answer: "Yes, but quality over quantity. One link from a medical journal beats 100 directory links. And backlinks now also signal authority to AI systems, not just Google." },
      { question: "What's the biggest change?", answer: "The biggest change is that ranking #1 on Google is no longer enough. You now need to also be recommended by ChatGPT, Perplexity, and Google AI Overviews. That requires schema, structured data, and AI-specific optimization." },
    ],
  },
  {
    slug: "paid-directories-vs-aeo",
    title: "Paid Directory Listings vs AEO: Where's the Better Investment?",
    description: "Business owners spend lakhs on paid directories annually. AEO delivers better ROI for a fraction of the cost.",
    left: { name: "Paid Directories", pros: ["Immediate listing visibility", "Some provide lead generation", "Good for NAP consistency", "Established trust signals"], cons: ["₹5K-50K/month per directory", "Multiple directories = multiple subscriptions", "Traffic declines year over year", "No AI recommendation benefit"] },
    right: { name: "AEO", pros: ["One investment covers all AI platforms", "Direct recommendations not just listings", "Growing traffic and relevance", "Permanent authority building"], cons: ["Takes time for results", "Requires technical expertise", "Fewer immediate leads", "Needs ongoing optimization"] },
    verdict: "Keep free directory listings for citations. Cancel expensive paid listings. Redirect that budget to AEO for 5-10x better ROI. The future is AI recommendations, not directory listings.",
    faqItems: [
      { question: "Should I stay on Practo, JustDial, etc?", answer: "Keep free listings — they help with NAP consistency and citation authority. But don't pay premium rates. Invest in AEO instead." },
    ],
  },
  {
    slug: "print-media-vs-ai-marketing",
    title: "Print Media vs AI Marketing: Newspaper Ads vs AI Recommendations",
    description: "Newspaper ads cost ₹50K-5L per insertion. AI marketing costs ₹25K-75K per month and reaches a targeted audience. The comparison.",
    left: { name: "Print Media", pros: ["High perceived credibility", "Reaches older demographic", "Tangible — can be saved/shared", "Good for event announcements"], cons: ["₹50K-5L per ad insertion", "Zero targeting — reaches everyone", "Cannot track ROI", "Newspaper readership declining 5% annually"] },
    right: { name: "AI Marketing (AEO)", pros: ["Only reaches people actively searching for your service", "₹25K-75K/month covers all AI platforms", "Fully trackable ROI", "Growing audience 30%+ year over year"], cons: ["No physical presence", "Doesn't reach non-digital audience", "Requires internet access", "Technical setup needed"] },
    verdict: "For every ₹1 spent, AI marketing delivers 20-100x more qualified leads than print. Print may still work for event announcements, but for ongoing lead generation, it's not even close.",
    faqItems: [
      { question: "My competitors still advertise in newspapers. Should I?", answer: "Let them waste money. Every rupee they spend on print is a rupee not spent on AI visibility. Use AEO to dominate the channels where patients/clients actually search." },
    ],
  },
  {
    slug: "influencer-marketing-vs-ai-presence",
    title: "Influencer Marketing vs AI Presence: Borrowed vs Owned Authority",
    description: "Influencer collaborations cost ₹10K-5L per post but the effect fades. AI presence is permanent. Here's the comparison.",
    left: { name: "Influencer Marketing", pros: ["Immediate audience access", "Trust transfer from influencer", "Visual/video content creation", "Can go viral"], cons: ["₹10K-5L per collaboration", "Effect fades within days", "Influencer reputation risk", "Audience may not be your target"] },
    right: { name: "AI Presence (AEO)", pros: ["Permanent recommendation presence", "Zero cost per recommendation", "Your own authority, not borrowed", "Always-on, not campaign-based"], cons: ["Slower to build", "No viral potential", "Cannot leverage personality/charisma", "Requires technical optimization"] },
    verdict: "Influencer marketing creates spikes. AI presence creates a permanent foundation. Use occasional influencer collaborations for awareness, but invest consistently in AEO for sustainable growth.",
    faqItems: [
      { question: "Can influencer content help AI visibility?", answer: "Yes! Influencer mentions create web mentions and backlinks that AI systems detect. Use influencer content as one input to your broader AEO strategy." },
    ],
  },
  // Niche-specific comparisons
  {
    slug: "aeo-vs-seo-for-healthcare",
    title: "AEO vs SEO for Healthcare: Which Gets More Patients?",
    description: "Healthcare SEO is expensive and competitive. Healthcare AEO is a blue ocean opportunity. Here's the comparison for doctors and clinics.",
    left: { name: "Healthcare SEO", pros: ["Established methodology", "Google Maps visibility", "Content marketing for conditions", "Link building from medical sites"], cons: ["Healthcare keywords cost ₹200-500/click in ads", "6-12 months for organic results", "Highly competitive — chains dominate", "Google's medical content policy is strict"] },
    right: { name: "Healthcare AEO", pros: ["AI recommends specific doctors by name", "Schema markup for medical credentials", "Patient reviews feed AI directly", "30-90 day results vs 6-12 months"], cons: ["Newer discipline for healthcare", "Fewer healthcare AEO specialists", "AI may cite incorrect medical info", "Need to monitor AI accuracy"] },
    verdict: "Healthcare is the highest-ROI niche for AEO. One AI-recommended patient (₹15K-5L per procedure) pays for months of AEO investment. And 73% of patients under 35 now use AI first.",
    faqItems: [
      { question: "Is AEO safe for healthcare marketing?", answer: "Yes, when done ethically. We focus on structured data and factual credentials — not making medical claims. AI then accurately represents your practice." },
      { question: "What about YMYL compliance?", answer: "Google's YMYL (Your Money Your Life) standards apply to both SEO and AEO. We ensure all content meets E-E-A-T guidelines with proper credentials and citations." },
    ],
  },
  {
    slug: "aeo-vs-seo-for-lawyers",
    title: "AEO vs SEO for Law Firms: Getting Corporate Clients from AI",
    description: "Law firm SEO is saturated. AEO for lawyers is wide open. Here's why AI marketing is the future of legal client acquisition.",
    left: { name: "Legal SEO", pros: ["Established for law firms", "Google Local Service Ads available", "Content marketing for legal topics", "Directory links from legal sites"], cons: ["Most competitive niche in SEO", "'Lawyer near me' keywords cost ₹300-1000/click", "Big firms dominate rankings", "Takes 12+ months for new firms"] },
    right: { name: "Legal AEO", pros: ["AI recommends specific firms and lawyers", "Corporate clients use AI to shortlist", "Practice-area specific recommendations", "Much less competition than SEO"], cons: ["Fewer legal AEO specialists", "Bar council advertising rules apply", "Limited case study content allowed", "AI may not understand legal specializations"] },
    verdict: "For lawyers, AEO is a massive arbitrage opportunity. Most law firms haven't even started. One corporate retainer (₹2-10L) pays for an entire year of AEO investment.",
    faqItems: [
      { question: "Does AEO comply with bar council rules?", answer: "Yes. We focus on factual information — credentials, practice areas, location. No solicitation or misleading claims. All content follows bar council advertising guidelines." },
    ],
  },
  {
    slug: "aeo-vs-seo-for-real-estate",
    title: "AEO vs SEO for Real Estate: Selling ₹1Cr Properties Through AI",
    description: "Real estate SEO competes with 99acres and MagicBricks. AEO puts your project name directly in AI's mouth.",
    left: { name: "Real Estate SEO", pros: ["99acres and MagicBricks rank for everything", "Google Maps shows property locations", "Content about localities works", "Builder reputation pages rank well"], cons: ["Impossible to outrank property portals", "₹100-300/click for real estate keywords", "Projects have limited listing period", "Heavy competition from aggregators"] },
    right: { name: "Real Estate AEO", pros: ["AI recommends specific builders by name", "Buyers ask AI about builder reliability", "RERA data can be structured for AI", "Locality authority builds AI presence"], cons: ["Project-specific optimization has limited shelf life", "Fewer real estate AEO case studies", "Buyer journey is very long (3-6 months)", "AI may cite property portals over your site"] },
    verdict: "For real estate, AEO is transformative. When a buyer asks AI 'Is [builder] reliable?', your structured data determines the answer. One sale (₹50L-2Cr) pays for years of marketing.",
    faqItems: [
      { question: "Can AEO help sell specific projects?", answer: "Yes! We create project-specific pages with schema markup, RERA data, and locality content that AI systems cite when recommending projects in that area." },
    ],
  },
];

export function getAllComparisons(): ComparisonTopic[] {
  return comparisonTopics;
}

export function getComparisonBySlug(slug: string): ComparisonTopic | undefined {
  return comparisonTopics.find((c) => c.slug === slug);
}
