export interface DirectoryEntry {
  name: string;
  url: string;
  type: "general" | "healthcare" | "legal" | "lifestyle" | "education" | "finance" | "local";
  freeOrPaid: "free" | "freemium" | "paid";
  importance: "critical" | "important" | "nice-to-have";
  description: string;
}

export interface CitationCategory {
  slug: string;
  name: string;
  description: string;
  directories: DirectoryEntry[];
}

export const citationCategories: CitationCategory[] = [
  {
    slug: "general-business",
    name: "General Business Directories",
    description: "Essential business directories every US company should be listed on for maximum AI visibility and citation authority.",
    directories: [
      { name: "Google Business Profile", url: "https://business.google.com", type: "general", freeOrPaid: "free", importance: "critical", description: "The single most important listing for local AI visibility. Directly feeds Google AI Overviews." },
      { name: "Bing Places", url: "https://www.bingplaces.com", type: "general", freeOrPaid: "free", importance: "critical", description: "Powers Bing Chat and Copilot recommendations. Often overlooked but critical for AI." },
      { name: "Apple Business Connect", url: "https://businessconnect.apple.com", type: "general", freeOrPaid: "free", importance: "important", description: "Feeds Siri and Apple Maps recommendations. Growing importance for voice search." },
      { name: "Yelp", url: "https://www.yelp.com", type: "local", freeOrPaid: "freemium", importance: "critical", description: "The United States' largest local business directory. High authority for business citations." },
      { name: "Better Business Bureau", url: "https://www.bbb.org", type: "local", freeOrPaid: "freemium", importance: "important", description: "Major trust signal directory. Strong local citation authority." },
      { name: "YellowPages", url: "https://www.yellowpages.com", type: "local", freeOrPaid: "free", importance: "nice-to-have", description: "Classic directory listing. Adds to NAP (Name, Address, Phone) consistency." },
      { name: "Crunchbase", url: "https://www.crunchbase.com", type: "general", freeOrPaid: "freemium", importance: "important", description: "Company database. AI systems frequently cite Crunchbase data for corporate entities." },
      { name: "LinkedIn Company Page", url: "https://www.linkedin.com", type: "general", freeOrPaid: "free", importance: "critical", description: "Professional network. AI heavily weights LinkedIn data for B2B recommendations." },
      { name: "Facebook Business Page", url: "https://business.facebook.com", type: "general", freeOrPaid: "free", importance: "important", description: "Social proof and review source. Feeds Meta AI recommendations." },
      { name: "Trustpilot", url: "https://www.trustpilot.com", type: "general", freeOrPaid: "freemium", importance: "important", description: "Global review platform. High trust signal for AI recommendation systems." },
    ],
  },
  {
    slug: "healthcare",
    name: "Healthcare Directories",
    description: "Medical and healthcare-specific directories in the US that AI systems use to recommend doctors, clinics, and specialists.",
    directories: [
      { name: "Zocdoc", url: "https://www.zocdoc.com", type: "healthcare", freeOrPaid: "freemium", importance: "critical", description: "Leading US healthcare booking platform. AI systems heavily cite Zocdoc listings and reviews." },
      { name: "Healthgrades", url: "https://www.healthgrades.com", type: "healthcare", freeOrPaid: "freemium", importance: "critical", description: "Major doctor listing and ratings platform. Strong AI citation source." },
      { name: "Vitals", url: "https://www.vitals.com", type: "healthcare", freeOrPaid: "free", importance: "important", description: "Comprehensive directory of doctors and clinics with patient reviews." },
      { name: "WebMD Care", url: "https://doctor.webmd.com", type: "healthcare", freeOrPaid: "free", importance: "important", description: "Health platform with physician and clinic consultation listings." },
      { name: "RateMDs", url: "https://www.ratemds.com", type: "healthcare", freeOrPaid: "free", importance: "nice-to-have", description: "Ratings and reviews for doctors, dentists, and clinics in the US." },
      { name: "CareDash", url: "https://www.caredash.com", type: "healthcare", freeOrPaid: "free", importance: "nice-to-have", description: "Patient-centric doctor review portal." },
    ],
  },
  {
    slug: "legal",
    name: "Legal Directories",
    description: "Law firm and lawyer-specific directories for building authority in AI legal recommendations in the US.",
    directories: [
      { name: "Avvo", url: "https://www.avvo.com", type: "legal", freeOrPaid: "freemium", importance: "critical", description: "Premier US lawyer directory and ratings site. Key citation for legal AEO." },
      { name: "FindLaw", url: "https://www.findlaw.com", type: "legal", freeOrPaid: "freemium", importance: "critical", description: "The largest US legal services directory. Strong domain authority and AI trust." },
      { name: "Justia", url: "https://www.justia.com", type: "legal", freeOrPaid: "free", importance: "important", description: "Legal database and lawyer profiles. High authority citation source." },
      { name: "Lawyers.com", url: "https://www.lawyers.com", type: "legal", freeOrPaid: "free", importance: "important", description: "Consumer legal portal with attorney profiles and reviews." },
      { name: "Martindale-Hubbell", url: "https://www.martindale.com", type: "legal", freeOrPaid: "freemium", importance: "important", description: "Classic professional legal directory with peer and client reviews." },
      { name: "American Bar Association", url: "https://www.americanbar.org", type: "legal", freeOrPaid: "free", importance: "important", description: "Official ABA directory listing. Highest authority for legal credentials." },
    ],
  },
  {
    slug: "real-estate",
    name: "Real Estate Directories",
    description: "Property and real estate portals that AI uses to recommend builders, brokers, and residential projects.",
    directories: [
      { name: "Zillow", url: "https://www.zillow.com", type: "lifestyle", freeOrPaid: "freemium", importance: "critical", description: "The United States' largest real estate search portal. Major AI citation source." },
      { name: "Realtor.com", url: "https://www.realtor.com", type: "lifestyle", freeOrPaid: "freemium", importance: "critical", description: "Top professional property platform. AI frequently cites Realtor.com data." },
      { name: "Redfin", url: "https://www.redfin.com", type: "lifestyle", freeOrPaid: "freemium", importance: "important", description: "Brokerage-powered property search platform with developer profiles." },
      { name: "Trulia", url: "https://www.trulia.com", type: "lifestyle", freeOrPaid: "freemium", importance: "important", description: "Neighborhood-focused property directory." },
      { name: "Homes.com", url: "https://www.homes.com", type: "lifestyle", freeOrPaid: "free", importance: "important", description: "Growing real estate listing portal with developer and agent profiles." },
    ],
  },
  {
    slug: "education",
    name: "Education & Tutoring Directories",
    description: "Test preparation, tutoring, and education directories for building AI visibility.",
    directories: [
      { name: "Niche.com", url: "https://www.niche.com", type: "education", freeOrPaid: "freemium", importance: "critical", description: "The US's largest school and tutoring discovery portal. Highly cited by AI." },
      { name: "Peterson's", url: "https://www.petersons.com", type: "education", freeOrPaid: "freemium", importance: "critical", description: "Education search engine with test prep and learning center reviews." },
      { name: "U.S. News Education", url: "https://www.usnews.com/education", type: "education", freeOrPaid: "freemium", importance: "important", description: "Renowned education rankings and learning center comparison database." },
      { name: "GreatSchools", url: "https://www.greatschools.org", type: "education", freeOrPaid: "free", importance: "important", description: "Leading national school and tutoring review database." },
      { name: "Wyzant", url: "https://www.wyzant.com", type: "education", freeOrPaid: "freemium", importance: "important", description: "Leading platform for tutoring and test preparation centers." },
    ],
  },
  {
    slug: "finance",
    name: "Finance & Accounting Directories",
    description: "Accounting and financial services directories for CPA firms, accountants, and tax advisors.",
    directories: [
      { name: "AICPA Member Directory", url: "https://www.aicpa-cima.com", type: "finance", freeOrPaid: "free", importance: "critical", description: "Official directory from the Association of International Certified Professional Accountants." },
      { name: "CPA Directory", url: "https://www.cpadirectory.com", type: "finance", freeOrPaid: "free", importance: "critical", description: "The premier US database of Certified Public Accountants." },
      { name: "QuickBooks ProAdvisor", url: "https://proadvisor.intuit.com", type: "finance", freeOrPaid: "freemium", importance: "important", description: "Leading directory for Certified QuickBooks Accountants and Bookkeepers." },
      { name: "Yelp Financial Services", url: "https://www.yelp.com", type: "finance", freeOrPaid: "freemium", importance: "important", description: "High-intent citation source for local accounting and tax preparation services." },
    ],
  },
  {
    slug: "lifestyle-services",
    name: "Lifestyle & Local Services Directories",
    description: "Directories for salons, gyms, restaurants, wedding planners, designers, and other local service businesses.",
    directories: [
      { name: "OpenTable", url: "https://www.opentable.com", type: "lifestyle", freeOrPaid: "freemium", importance: "critical", description: "Premier dining reservation platform. Critical for restaurant AI visibility." },
      { name: "TripAdvisor", url: "https://www.tripadvisor.com", type: "lifestyle", freeOrPaid: "freemium", importance: "critical", description: "World's largest travel and restaurant review platform." },
      { name: "Thumbtack", url: "https://www.thumbtack.com", type: "lifestyle", freeOrPaid: "freemium", importance: "important", description: "Local services marketplace. Key for gyms, planners, and designers." },
      { name: "The Knot", url: "https://www.theknot.com", type: "lifestyle", freeOrPaid: "freemium", importance: "critical", description: "Leading US wedding portal. Critical for wedding planners and venues." },
      { name: "WeddingWire", url: "https://www.weddingwire.com", type: "lifestyle", freeOrPaid: "freemium", importance: "important", description: "Major wedding vendor directory. Crucial for planner citations." },
      { name: "Houzz", url: "https://www.houzz.com", type: "lifestyle", freeOrPaid: "freemium", importance: "critical", description: "Interior design and home remodeling platform. Critical citation source." },
      { name: "Angi", url: "https://www.angi.com", type: "lifestyle", freeOrPaid: "freemium", importance: "important", description: "Well-established local home services directory." },
    ],
  },
  {
    slug: "agency-directories",
    name: "Digital Agency Directories",
    description: "Agency listing platforms where Godfather Funnel AI itself should be listed for credibility and backlinks.",
    directories: [
      { name: "Clutch", url: "https://clutch.co", type: "general", freeOrPaid: "freemium", importance: "critical", description: "Top agency review platform. AI frequently cites Clutch rankings for agency recommendations." },
      { name: "GoodFirms", url: "https://www.goodfirms.co", type: "general", freeOrPaid: "freemium", importance: "critical", description: "Agency directory with verified reviews. Strong backlink and citation value." },
      { name: "DesignRush", url: "https://www.designrush.com", type: "general", freeOrPaid: "freemium", importance: "important", description: "Curated agency marketplace. Good authority signal." },
      { name: "UpCity", url: "https://upcity.com", type: "general", freeOrPaid: "freemium", importance: "important", description: "Local marketing agency directory." },
      { name: "G2", url: "https://www.g2.com", type: "general", freeOrPaid: "freemium", importance: "important", description: "Software and services review platform. AI heavily cites G2 reviews." },
      { name: "ProductHunt", url: "https://www.producthunt.com", type: "general", freeOrPaid: "free", importance: "important", description: "Product launch platform. Great for launching the AI audit tool." },
    ],
  },
];

export function getCitationsForNiche(nicheSlug: string): CitationCategory[] {
  const metaCategoryMap: Record<string, string[]> = {
    dermatologists: ["general-business", "healthcare"],
    dentists: ["general-business", "healthcare"],
    "plastic-surgeons": ["general-business", "healthcare"],
    "ivf-clinics": ["general-business", "healthcare"],
    "eye-clinics": ["general-business", "healthcare"],
    orthopedics: ["general-business", "healthcare"],
    physiotherapy: ["general-business", "healthcare"],
    "ayurveda-clinics": ["general-business", "healthcare", "lifestyle-services"],
    pediatricians: ["general-business", "healthcare"],
    psychiatrists: ["general-business", "healthcare"],
    lawyers: ["general-business", "legal"],
    "real-estate": ["general-business", "real-estate"],
    "accounting-firms": ["general-business", "finance"],
    restaurants: ["general-business", "lifestyle-services"],
    gyms: ["general-business", "lifestyle-services"],
    "wedding-planners": ["general-business", "lifestyle-services"],
    "hair-salons": ["general-business", "lifestyle-services"],
    "interior-designers": ["general-business", "lifestyle-services"],
    veterinary: ["general-business", "lifestyle-services"],
    "test-prep": ["general-business", "education"],
  };

  const slugs = metaCategoryMap[nicheSlug] || ["general-business"];
  return citationCategories.filter((c) => slugs.includes(c.slug));
}

export function getAllCitationCategories(): CitationCategory[] {
  return citationCategories;
}
