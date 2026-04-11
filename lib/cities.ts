export interface CityData {
  name: string;
  slug: string;
  tier: 1 | 2 | 3;
  state: string;
  stateCode: string;
  population: string;
  knownFor: string;
}

export const cities: CityData[] = [
  // Tier 1
  { name: "Mumbai", slug: "mumbai", tier: 1, state: "Maharashtra", stateCode: "MH", population: "21M", knownFor: "financial capital, Bollywood, healthcare hubs" },
  { name: "Delhi", slug: "delhi", tier: 1, state: "Delhi", stateCode: "DL", population: "19M", knownFor: "political capital, AIIMS, top law firms" },
  { name: "Bangalore", slug: "bangalore", tier: 1, state: "Karnataka", stateCode: "KA", population: "13M", knownFor: "IT capital, startups, premium healthcare" },
  { name: "Hyderabad", slug: "hyderabad", tier: 1, state: "Telangana", stateCode: "TG", population: "10M", knownFor: "pharma city, IT hub, medical tourism" },
  { name: "Chennai", slug: "chennai", tier: 1, state: "Tamil Nadu", stateCode: "TN", population: "11M", knownFor: "medical tourism capital, auto hub" },
  { name: "Kolkata", slug: "kolkata", tier: 1, state: "West Bengal", stateCode: "WB", population: "15M", knownFor: "cultural capital, education hub" },
  { name: "Pune", slug: "pune", tier: 1, state: "Maharashtra", stateCode: "MH", population: "7M", knownFor: "education city, IT hub, real estate boom" },
  { name: "Ahmedabad", slug: "ahmedabad", tier: 1, state: "Gujarat", stateCode: "GJ", population: "8M", knownFor: "textile hub, growing healthcare" },
  // Tier 2
  { name: "Jaipur", slug: "jaipur", tier: 2, state: "Rajasthan", stateCode: "RJ", population: "4M", knownFor: "pink city, tourism, growing medical hub" },
  { name: "Lucknow", slug: "lucknow", tier: 2, state: "Uttar Pradesh", stateCode: "UP", population: "4M", knownFor: "state capital, SGPGI, growing IT" },
  { name: "Chandigarh", slug: "chandigarh", tier: 2, state: "Chandigarh", stateCode: "CH", population: "1.2M", knownFor: "planned city, PGIMER, high income" },
  { name: "Indore", slug: "indore", tier: 2, state: "Madhya Pradesh", stateCode: "MP", population: "3.5M", knownFor: "cleanest city, growing healthcare" },
  { name: "Nagpur", slug: "nagpur", tier: 2, state: "Maharashtra", stateCode: "MH", population: "3M", knownFor: "orange city, central India hub" },
  { name: "Bhopal", slug: "bhopal", tier: 2, state: "Madhya Pradesh", stateCode: "MP", population: "2.5M", knownFor: "city of lakes, AIIMS Bhopal" },
  { name: "Coimbatore", slug: "coimbatore", tier: 2, state: "Tamil Nadu", stateCode: "TN", population: "2.5M", knownFor: "Manchester of South India, medical hub" },
  { name: "Kochi", slug: "kochi", tier: 2, state: "Kerala", stateCode: "KL", population: "2.2M", knownFor: "Queen of Arabian Sea, Ayurveda hub" },
  { name: "Visakhapatnam", slug: "visakhapatnam", tier: 2, state: "Andhra Pradesh", stateCode: "AP", population: "2.5M", knownFor: "port city, growing healthcare" },
  { name: "Surat", slug: "surat", tier: 2, state: "Gujarat", stateCode: "GJ", population: "8M", knownFor: "diamond city, textile hub" },
  { name: "Vadodara", slug: "vadodara", tier: 2, state: "Gujarat", stateCode: "GJ", population: "2.2M", knownFor: "cultural capital of Gujarat" },
  { name: "Noida", slug: "noida", tier: 2, state: "Uttar Pradesh", stateCode: "UP", population: "1.5M", knownFor: "IT hub, real estate boom, NCR" },
  { name: "Gurgaon", slug: "gurgaon", tier: 2, state: "Haryana", stateCode: "HR", population: "1.5M", knownFor: "millennium city, corporate hub, NCR" },
  { name: "Thane", slug: "thane", tier: 2, state: "Maharashtra", stateCode: "MH", population: "2M", knownFor: "city of lakes, Mumbai satellite" },
  { name: "Nashik", slug: "nashik", tier: 2, state: "Maharashtra", stateCode: "MH", population: "2M", knownFor: "wine capital, growing city" },
  { name: "Mysore", slug: "mysore", tier: 2, state: "Karnataka", stateCode: "KA", population: "1.2M", knownFor: "heritage city, Ayurveda, yoga" },
  { name: "Mangalore", slug: "mangalore", tier: 2, state: "Karnataka", stateCode: "KA", population: "700K", knownFor: "port city, education hub" },
  { name: "Trivandrum", slug: "trivandrum", tier: 2, state: "Kerala", stateCode: "KL", population: "1M", knownFor: "state capital, technopark, Ayurveda" },
  { name: "Patna", slug: "patna", tier: 2, state: "Bihar", stateCode: "BR", population: "2.5M", knownFor: "state capital, AIIMS Patna, coaching" },
  { name: "Ranchi", slug: "ranchi", tier: 2, state: "Jharkhand", stateCode: "JH", population: "1.5M", knownFor: "city of waterfalls, growing healthcare" },
  { name: "Dehradun", slug: "dehradun", tier: 2, state: "Uttarakhand", stateCode: "UK", population: "800K", knownFor: "education city, wellness tourism" },
  { name: "Goa", slug: "goa", tier: 2, state: "Goa", stateCode: "GA", population: "600K", knownFor: "tourism capital, wellness retreats" },
  { name: "Faridabad", slug: "faridabad", tier: 2, state: "Haryana", stateCode: "HR", population: "1.8M", knownFor: "industrial city, NCR growth" },
  // Tier 3
  { name: "Ludhiana", slug: "ludhiana", tier: 3, state: "Punjab", stateCode: "PB", population: "1.8M", knownFor: "Manchester of India, industrial hub" },
  { name: "Amritsar", slug: "amritsar", tier: 3, state: "Punjab", stateCode: "PB", population: "1.2M", knownFor: "Golden Temple, food tourism" },
  { name: "Agra", slug: "agra", tier: 3, state: "Uttar Pradesh", stateCode: "UP", population: "2M", knownFor: "Taj Mahal, tourism hub" },
  { name: "Varanasi", slug: "varanasi", tier: 3, state: "Uttar Pradesh", stateCode: "UP", population: "1.5M", knownFor: "spiritual capital, BHU, Ayurveda" },
  { name: "Kanpur", slug: "kanpur", tier: 3, state: "Uttar Pradesh", stateCode: "UP", population: "3M", knownFor: "industrial city, IIT Kanpur" },
  { name: "Raipur", slug: "raipur", tier: 3, state: "Chhattisgarh", stateCode: "CG", population: "1.2M", knownFor: "state capital, growing healthcare" },
  { name: "Bhubaneswar", slug: "bhubaneswar", tier: 3, state: "Odisha", stateCode: "OD", population: "1M", knownFor: "temple city, AIIMS, smart city" },
  { name: "Guwahati", slug: "guwahati", tier: 3, state: "Assam", stateCode: "AS", population: "1.1M", knownFor: "gateway to NE India, growing city" },
  { name: "Jodhpur", slug: "jodhpur", tier: 3, state: "Rajasthan", stateCode: "RJ", population: "1.3M", knownFor: "blue city, AIIMS Jodhpur" },
  { name: "Udaipur", slug: "udaipur", tier: 3, state: "Rajasthan", stateCode: "RJ", population: "600K", knownFor: "city of lakes, wedding destination" },
  { name: "Vijayawada", slug: "vijayawada", tier: 3, state: "Andhra Pradesh", stateCode: "AP", population: "1.5M", knownFor: "business hub, new capital region" },
  { name: "Madurai", slug: "madurai", tier: 3, state: "Tamil Nadu", stateCode: "TN", population: "1.5M", knownFor: "temple city, education, healthcare" },
  { name: "Tiruchirappalli", slug: "tiruchirappalli", tier: 3, state: "Tamil Nadu", stateCode: "TN", population: "1M", knownFor: "rock fort city, education hub" },
  { name: "Salem", slug: "salem", tier: 3, state: "Tamil Nadu", stateCode: "TN", population: "900K", knownFor: "steel city, growing medical" },
  { name: "Jalandhar", slug: "jalandhar", tier: 3, state: "Punjab", stateCode: "PB", population: "900K", knownFor: "sports goods, education" },
  { name: "Meerut", slug: "meerut", tier: 3, state: "Uttar Pradesh", stateCode: "UP", population: "1.5M", knownFor: "sports city, NCR proximity" },
  { name: "Aligarh", slug: "aligarh", tier: 3, state: "Uttar Pradesh", stateCode: "UP", population: "1M", knownFor: "AMU, lock industry" },
  { name: "Hubli", slug: "hubli", tier: 3, state: "Karnataka", stateCode: "KA", population: "1.1M", knownFor: "commercial hub of North Karnataka" },
  { name: "Belgaum", slug: "belgaum", tier: 3, state: "Karnataka", stateCode: "KA", population: "600K", knownFor: "border city, education hub" },
  { name: "Rajkot", slug: "rajkot", tier: 3, state: "Gujarat", stateCode: "GJ", population: "1.6M", knownFor: "industrial city, growing healthcare" },
  { name: "Aurangabad", slug: "aurangabad", tier: 3, state: "Maharashtra", stateCode: "MH", population: "1.4M", knownFor: "Ajanta Ellora, industrial hub" },
  { name: "Kolhapur", slug: "kolhapur", tier: 3, state: "Maharashtra", stateCode: "MH", population: "600K", knownFor: "Mahalakshmi temple, sugar capital" },
  { name: "Siliguri", slug: "siliguri", tier: 3, state: "West Bengal", stateCode: "WB", population: "800K", knownFor: "gateway to NE, tea gardens" },
  { name: "Navi Mumbai", slug: "navi-mumbai", tier: 3, state: "Maharashtra", stateCode: "MH", population: "2M", knownFor: "planned city, IT parks, new airport" },
];

export function getAllCities(): CityData[] {
  return cities;
}

export function getCityBySlug(slug: string): CityData | undefined {
  return cities.find((c) => c.slug === slug);
}

export function getTier1Cities(): CityData[] {
  return cities.filter((c) => c.tier === 1);
}

export function getCitySlugs(): string[] {
  return cities.map((c) => c.slug);
}
