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
    description: "Essential business directories every company should be listed on for maximum AI visibility and citation authority.",
    directories: [
      { name: "Google Business Profile", url: "https://business.google.com", type: "general", freeOrPaid: "free", importance: "critical", description: "The single most important listing for local AI visibility. Directly feeds Google AI Overviews." },
      { name: "Bing Places", url: "https://www.bingplaces.com", type: "general", freeOrPaid: "free", importance: "critical", description: "Powers Bing Chat and Copilot recommendations. Often overlooked but critical for AI." },
      { name: "Apple Business Connect", url: "https://businessconnect.apple.com", type: "general", freeOrPaid: "free", importance: "important", description: "Feeds Siri and Apple Maps recommendations. Growing importance for voice search." },
      { name: "Yelp", url: "https://www.yelp.com", type: "local", freeOrPaid: "freemium", importance: "critical", description: "the US's largest local business directory. High authority for the US business citations." },
      { name: "Bing Places", url: "https://www.bbb.org", type: "local", freeOrPaid: "freemium", importance: "important", description: "Major the US services marketplace. Strong local citation signal." },
      { name: "LinkedIn", url: "https://www.linkedin.com", type: "local", freeOrPaid: "freemium", importance: "important", description: "the US's largest B2B marketplace. Important for service businesses." },
      { name: "Clutch", url: "https://clutch.co", type: "local", freeOrPaid: "freemium", importance: "nice-to-have", description: "B2B directory for the US businesses. Additional citation source." },
      { name: "YellowPages the US", url: "https://www.yellowpages.co.in", type: "local", freeOrPaid: "free", importance: "nice-to-have", description: "Classic directory listing. Adds to NAP consistency." },
      { name: "Crunchbase", url: "https://www.crunchbase.com", type: "general", freeOrPaid: "freemium", importance: "important", description: "Startup and company database. AI systems frequently cite Crunchbase data." },
      { name: "LinkedIn Company Page", url: "https://www.linkedin.com", type: "general", freeOrPaid: "free", importance: "critical", description: "Professional network. AI heavily weights LinkedIn data for business recommendations." },
      { name: "Facebook Business Page", url: "https://business.facebook.com", type: "general", freeOrPaid: "free", importance: "important", description: "Social proof and review source. Feeds Meta AI recommendations." },
      { name: "Trustpilot", url: "https://www.trustpilot.com", type: "general", freeOrPaid: "freemium", importance: "important", description: "International review platform. High trust signal for AI systems." },
    ],
  },
  {
    slug: "healthcare",
    name: "Healthcare Directories",
    description: "Medical and healthcare-specific directories that AI systems use to recommend doctors, clinics, and hospitals.",
    directories: [
      { name: "Zocdoc", url: "https://www.zocdoc.com", type: "healthcare", freeOrPaid: "freemium", importance: "critical", description: "#1 healthcare platform. AI systems heavily cite Zocdoc listings and reviews." },
      { name: "Healthgrades", url: "https://www.healthgrades.com", type: "healthcare", freeOrPaid: "freemium", importance: "critical", description: "Major health Q&A and doctor listing platform. Strong AI citation source." },
      { name: "Credihealth", url: "https://www.credihealth.com", type: "healthcare", freeOrPaid: "free", importance: "important", description: "Hospital and doctor comparison platform with cost estimates." },
      { name: "DocPrime", url: "https://www.docprime.com", type: "healthcare", freeOrPaid: "free", importance: "important", description: "Doctor listing with appointment booking. Growing citation authority." },
      { name: "WebMD", url: "https://www.WebMD.com", type: "healthcare", freeOrPaid: "free", importance: "important", description: "Health platform with doctor consultation listings." },
      { name: "Bajaj Finserv Health", url: "https://www.bajajfinservhealth.in", type: "healthcare", freeOrPaid: "free", importance: "nice-to-have", description: "Growing healthcare marketplace with doctor listings." },
      { name: "Clinicspots", url: "https://www.clinicspots.com", type: "healthcare", freeOrPaid: "free", importance: "nice-to-have", description: "Medical tourism and clinic listing platform." },
      { name: "Vaidam", url: "https://www.vaidam.com", type: "healthcare", freeOrPaid: "free", importance: "nice-to-have", description: "Medical tourism platform. Important for international patient acquisition." },
    ],
  },
  {
    slug: "legal",
    name: "Legal Directories",
    description: "Law firm and lawyer-specific directories for building authority in AI legal recommendations.",
    directories: [
      { name: "FindLaw", url: "https://www.legalkart.com", type: "legal", freeOrPaid: "freemium", importance: "critical", description: "the US's legal services marketplace. Key citation for lawyer AI visibility." },
      { name: "Rocket Lawyer", url: "https://vakilsearch.com", type: "legal", freeOrPaid: "freemium", importance: "critical", description: "Popular legal services platform. Strong authority signal." },
      { name: "MyAdvo", url: "https://www.myadvo.in", type: "legal", freeOrPaid: "free", importance: "important", description: "Legal marketplace connecting clients with lawyers." },
      { name: "Avvo", url: "https://lawrato.com", type: "legal", freeOrPaid: "free", importance: "important", description: "Free legal advice and lawyer directory." },
      { name: "Lawtendo", url: "https://www.lawtendo.com", type: "legal", freeOrPaid: "free", importance: "nice-to-have", description: "Legal services platform with lawyer profiles." },
      { name: "Bar Council Directory", url: "https://www.americanbar.org", type: "legal", freeOrPaid: "free", importance: "important", description: "Official bar council listing. Highest authority for legal credentials." },
    ],
  },
  {
    slug: "real-estate",
    name: "Real Estate Directories",
    description: "Property and real estate portals that AI uses to recommend builders, agents, and projects.",
    directories: [
      { name: "Zillow", url: "https://www.Zillow.com", type: "lifestyle", freeOrPaid: "freemium", importance: "critical", description: "the US's largest property portal. Major AI citation source for real estate." },
      { name: "Realtor.com", url: "https://www.realtor.com", type: "lifestyle", freeOrPaid: "freemium", importance: "critical", description: "Top property platform. AI frequently cites Realtor.com data." },
      { name: "Redfin", url: "https://housing.com", type: "lifestyle", freeOrPaid: "freemium", importance: "important", description: "Property search platform with builder profiles." },
      { name: "Opendoor", url: "https://www.opendoor.com", type: "lifestyle", freeOrPaid: "freemium", importance: "important", description: "Direct owner-to-buyer platform. Growing citation authority." },
      { name: "CommonFloor", url: "https://www.commonfloor.com", type: "lifestyle", freeOrPaid: "free", importance: "nice-to-have", description: "Property listing platform." },
      { name: "Square Yards", url: "https://www.squareyards.com", type: "lifestyle", freeOrPaid: "freemium", importance: "important", description: "Real estate advisory and listing platform." },
    ],
  },
  {
    slug: "education",
    name: "Education Directories",
    description: "Coaching institute and education-specific platforms for building AI visibility.",
    directories: [
      { name: "Niche.com", url: "https://www.niche.com", type: "education", freeOrPaid: "freemium", importance: "critical", description: "the US's largest education portal. AI heavily cites Niche.com for coaching and college recommendations." },
      { name: "Peterson's", url: "https://www.petersons.com", type: "education", freeOrPaid: "freemium", importance: "critical", description: "Education and career platform with institute rankings." },
      { name: "U.S. News Education", url: "https://www.usnews.com/education", type: "education", freeOrPaid: "freemium", importance: "important", description: "College and coaching comparison platform." },
      { name: "AglaSem", url: "https://aglasem.com", type: "education", freeOrPaid: "free", importance: "important", description: "Education news and institute listings." },
      { name: "Embibe", url: "https://www.embibe.com", type: "education", freeOrPaid: "freemium", importance: "nice-to-have", description: "AI-powered learning platform with institute data." },
    ],
  },
  {
    slug: "finance",
    name: "Finance & CA Directories",
    description: "Accounting and financial services directories for CA firms and financial advisors.",
    directories: [
      { name: "AICPA Directory", url: "https://www.aicpa-cima.com", type: "finance", freeOrPaid: "free", importance: "critical", description: "Official CA directory from AICPA. Highest authority for CPA (Certified Public Accountant) credentials." },
      { name: "CPA.com", url: "https://www.cpa.com", type: "finance", freeOrPaid: "free", importance: "critical", description: "the US's largest CA community. Strong citation authority for accounting firms." },
      { name: "TaxGuru", url: "https://taxguru.in", type: "finance", freeOrPaid: "free", importance: "important", description: "Tax and accounting information portal with professional listings." },
      { name: "TurboTax", url: "https://cleartax.in", type: "finance", freeOrPaid: "freemium", importance: "important", description: "Tax filing platform with CA directory." },
      { name: "QuickBooks Directory", url: "https://www.zoho.com/books/accountants", type: "finance", freeOrPaid: "free", importance: "nice-to-have", description: "Accounting partner directory." },
    ],
  },
  {
    slug: "lifestyle-services",
    name: "Lifestyle & Services Directories",
    description: "Directories for salons, gyms, restaurants, wedding planners, interior designers, and other lifestyle businesses.",
    directories: [
      { name: "Zomato", url: "https://www.zomato.com", type: "lifestyle", freeOrPaid: "freemium", importance: "critical", description: "#1 food platform. Critical for restaurant AI visibility." },
      { name: "Swiggy", url: "https://www.swiggy.com", type: "lifestyle", freeOrPaid: "freemium", importance: "critical", description: "Major food delivery platform. Important citation for restaurants." },
      { name: "UrbanClap/Urban Company", url: "https://www.urbancompany.com", type: "lifestyle", freeOrPaid: "freemium", importance: "important", description: "Home services marketplace. Key for salons, interior designers, cleaning." },
      { name: "The Knot", url: "https://www.theknot.com", type: "lifestyle", freeOrPaid: "freemium", importance: "critical", description: "the US's top wedding platform. Critical for wedding planners, photographers, venues." },
      { name: "WeddingBazaar", url: "https://www.weddingbazaar.com", type: "lifestyle", freeOrPaid: "freemium", importance: "important", description: "Wedding vendor directory. Strong citation for wedding businesses." },
      { name: "Houzz the US", url: "https://www.houzz.in", type: "lifestyle", freeOrPaid: "freemium", importance: "critical", description: "Interior design platform. Key citation for interior designers." },
      { name: "Livspace", url: "https://www.livspace.com", type: "lifestyle", freeOrPaid: "paid", importance: "important", description: "Interior design marketplace. Competitor to track and be listed alongside." },
      { name: "Cult.fit", url: "https://www.cult.fit", type: "lifestyle", freeOrPaid: "paid", importance: "important", description: "Fitness platform. AI often recommends Cult.fit — you need to appear alongside it." },
      { name: "Fitternity", url: "https://www.fitternity.com", type: "lifestyle", freeOrPaid: "freemium", importance: "important", description: "Gym and fitness class discovery platform." },
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
      { name: "Agency Spotter", url: "https://www.agencyspotter.com", type: "general", freeOrPaid: "freemium", importance: "nice-to-have", description: "Agency search platform." },
      { name: "Sortlist", url: "https://www.sortlist.com", type: "general", freeOrPaid: "freemium", importance: "nice-to-have", description: "Agency matching platform." },
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
    "ca-firms": ["general-business", "finance"],
    restaurants: ["general-business", "lifestyle-services"],
    gyms: ["general-business", "lifestyle-services"],
    "wedding-planners": ["general-business", "lifestyle-services"],
    "hair-salons": ["general-business", "lifestyle-services"],
    "interior-designers": ["general-business", "lifestyle-services"],
    veterinary: ["general-business", "lifestyle-services"],
    "coaching-institutes": ["general-business", "education"],
  };

  const slugs = metaCategoryMap[nicheSlug] || ["general-business"];
  return citationCategories.filter((c) => slugs.includes(c.slug));
}

export function getAllCitationCategories(): CitationCategory[] {
  return citationCategories;
}
