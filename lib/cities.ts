export interface CityData {
  name: string;
  slug: string;
  tier: 1 | 2 | 3;
  state: string;
  stateCode: string;
  country: "USA";
  population: string;
  knownFor: string;
}

export const cities: CityData[] = [
  // Tier 1 — Top US Metros
  { name: "New York", slug: "new-york", tier: 1, state: "New York", stateCode: "NY", country: "USA", population: "8.3M", knownFor: "financial capital, world-class healthcare, legal hub" },
  { name: "Los Angeles", slug: "los-angeles", tier: 1, state: "California", stateCode: "CA", country: "USA", population: "3.8M", knownFor: "entertainment capital, luxury healthcare, cosmetic surgery" },
  { name: "Chicago", slug: "chicago", tier: 1, state: "Illinois", stateCode: "IL", country: "USA", population: "2.7M", knownFor: "financial services, medical centers, legal hub" },
  { name: "Houston", slug: "houston", tier: 1, state: "Texas", stateCode: "TX", country: "USA", population: "2.3M", knownFor: "Texas Medical Center, energy capital, legal hub" },
  { name: "Miami", slug: "miami", tier: 1, state: "Florida", stateCode: "FL", country: "USA", population: "450K", knownFor: "cosmetic surgery capital, luxury real estate, international business" },
  { name: "San Francisco", slug: "san-francisco", tier: 1, state: "California", stateCode: "CA", country: "USA", population: "870K", knownFor: "tech capital, innovation hub, premium professional services" },
  { name: "Dallas", slug: "dallas", tier: 1, state: "Texas", stateCode: "TX", country: "USA", population: "1.3M", knownFor: "corporate headquarters, healthcare systems, real estate" },

  // Tier 2 — Major US Cities
  { name: "Austin", slug: "austin", tier: 2, state: "Texas", stateCode: "TX", country: "USA", population: "1M", knownFor: "fastest-growing tech hub, real estate boom, startup ecosystem" },
  { name: "Seattle", slug: "seattle", tier: 2, state: "Washington", stateCode: "WA", country: "USA", population: "740K", knownFor: "tech giants HQ, biotech, premium healthcare" },
  { name: "Boston", slug: "boston", tier: 2, state: "Massachusetts", stateCode: "MA", country: "USA", population: "675K", knownFor: "world-class hospitals, education, biotech hub" },
  { name: "Atlanta", slug: "atlanta", tier: 2, state: "Georgia", stateCode: "GA", country: "USA", population: "500K", knownFor: "business hub, growing healthcare market, film industry" },
  { name: "Denver", slug: "denver", tier: 2, state: "Colorado", stateCode: "CO", country: "USA", population: "715K", knownFor: "fast-growing market, wellness capital, outdoor lifestyle" },
  { name: "Phoenix", slug: "phoenix", tier: 2, state: "Arizona", stateCode: "AZ", country: "USA", population: "1.6M", knownFor: "retirement destination, medical tourism, real estate growth" },
  { name: "San Diego", slug: "san-diego", tier: 2, state: "California", stateCode: "CA", country: "USA", population: "1.4M", knownFor: "biotech corridor, military healthcare, wellness" },
  { name: "Philadelphia", slug: "philadelphia", tier: 2, state: "Pennsylvania", stateCode: "PA", country: "USA", population: "1.6M", knownFor: "healthcare systems, legal market, higher education" },
  { name: "Nashville", slug: "nashville", tier: 2, state: "Tennessee", stateCode: "TN", country: "USA", population: "690K", knownFor: "healthcare capital of America, growing professional services" },

  // Tier 3 — Fast-Growing US Cities
  { name: "Charlotte", slug: "charlotte", tier: 3, state: "North Carolina", stateCode: "NC", country: "USA", population: "880K", knownFor: "banking capital, growing healthcare, real estate" },
  { name: "Tampa", slug: "tampa", tier: 3, state: "Florida", stateCode: "FL", country: "USA", population: "400K", knownFor: "healthcare hub, retirement services, growing market" },
  { name: "Portland", slug: "portland", tier: 3, state: "Oregon", stateCode: "OR", country: "USA", population: "650K", knownFor: "wellness culture, sustainability, alternative medicine" },
  { name: "Las Vegas", slug: "las-vegas", tier: 3, state: "Nevada", stateCode: "NV", country: "USA", population: "650K", knownFor: "cosmetic surgery, entertainment, hospitality" },
  { name: "Minneapolis", slug: "minneapolis", tier: 3, state: "Minnesota", stateCode: "MN", country: "USA", population: "430K", knownFor: "Mayo Clinic region, corporate headquarters, healthcare" },
  { name: "Salt Lake City", slug: "salt-lake-city", tier: 3, state: "Utah", stateCode: "UT", country: "USA", population: "200K", knownFor: "tech growth corridor, outdoor wellness, growing market" },
  { name: "Scottsdale", slug: "scottsdale", tier: 3, state: "Arizona", stateCode: "AZ", country: "USA", population: "240K", knownFor: "luxury wellness, cosmetic surgery, high-end real estate" },
  { name: "Raleigh", slug: "raleigh", tier: 3, state: "North Carolina", stateCode: "NC", country: "USA", population: "470K", knownFor: "Research Triangle, biotech, healthcare innovation" },
  { name: "San Antonio", slug: "san-antonio", tier: 3, state: "Texas", stateCode: "TX", country: "USA", population: "1.4M", knownFor: "military healthcare, growing professional services" },
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
