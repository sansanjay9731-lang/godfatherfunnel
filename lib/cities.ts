export interface CityData {
  name: string;
  slug: string;
  tier: 1 | 2 | 3;
  state: string;
  stateCode: string;
  country: "USA" | "UK" | "Australia";
  population: string;
  knownFor: string;
}

export const cities: CityData[] = [
  // USA - Tier 1
  { name: "New York", slug: "new-york", tier: 1, state: "New York", stateCode: "NY", country: "USA", population: "8.3M", knownFor: "global financial hub, legal capital, world-class healthcare" },
  { name: "Los Angeles", slug: "los-angeles", tier: 1, state: "California", stateCode: "CA", country: "USA", population: "3.8M", knownFor: "entertainment, healthcare innovation, luxury real estate" },
  { name: "Chicago", slug: "chicago", tier: 1, state: "Illinois", stateCode: "IL", country: "USA", population: "2.6M", knownFor: "financial services, legal hub, medical centers" },
  { name: "Houston", slug: "houston", tier: 1, state: "Texas", stateCode: "TX", country: "USA", population: "2.3M", knownFor: "energy capital, Texas Medical Center, legal hub" },
  { name: "Miami", slug: "miami", tier: 1, state: "Florida", stateCode: "FL", country: "USA", population: "450K", knownFor: "plastic surgery capital, luxury real estate, tourism" },
  { name: "San Francisco", slug: "san-francisco", tier: 1, state: "California", stateCode: "CA", country: "USA", population: "800K", knownFor: "tech capital, innovation, premium services" },
  { name: "Austin", slug: "austin", tier: 1, state: "Texas", stateCode: "TX", country: "USA", population: "1M", knownFor: "growing tech hub, real estate boom" },
  
  // UK - Tier 1
  { name: "London", slug: "london", tier: 1, state: "Greater London", stateCode: "LDN", country: "UK", population: "8.9M", knownFor: "global financial center, Harley Street medical, legal hub" },
  { name: "Manchester", slug: "manchester", tier: 1, state: "Greater Manchester", stateCode: "MAN", country: "UK", population: "550K", knownFor: "media city, healthcare research, industrial heritage" },
  { name: "Birmingham", slug: "birmingham", tier: 1, state: "West Midlands", stateCode: "BHX", country: "UK", population: "1.1M", knownFor: "commercial hub, major healthcare centers" },
  { name: "Edinburgh", slug: "edinburgh", tier: 1, state: "Scotland", stateCode: "EDI", country: "UK", population: "500K", knownFor: "financial services, tourism, education" },

  // Australia - Tier 1
  { name: "Sydney", slug: "sydney", tier: 1, state: "New South Wales", stateCode: "NSW", country: "Australia", population: "5.3M", knownFor: "financial hub, luxury real estate, premium healthcare" },
  { name: "Melbourne", slug: "melbourne", tier: 1, state: "Victoria", stateCode: "VIC", country: "Australia", population: "5M", knownFor: "culture capital, medical research, education" },
  { name: "Brisbane", slug: "brisbane", tier: 1, state: "Queensland", stateCode: "QLD", country: "Australia", population: "2.5M", knownFor: "growing business hub, healthcare excellence" },
  { name: "Perth", slug: "perth", tier: 1, state: "Western Australia", stateCode: "WA", country: "Australia", population: "2M", knownFor: "mining hub, growing professional services" },
];


export function getAllCities(): CityData[] {
  return cities;
}

export function getCitiesByCountry(country: CityData["country"]): CityData[] {
  return cities.filter((c) => c.country === country);
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

