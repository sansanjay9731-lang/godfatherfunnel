import type { NextConfig } from "next";

// Old city slugs that were removed (UK, Australia, India) → redirect to closest US equivalent
const removedCityRedirects: { old: string; new: string }[] = [
  // UK cities
  { old: "london", new: "new-york" },
  { old: "manchester", new: "chicago" },
  { old: "birmingham", new: "philadelphia" },
  { old: "edinburgh", new: "boston" },
  // Australia cities
  { old: "sydney", new: "los-angeles" },
  { old: "melbourne", new: "san-francisco" },
  { old: "brisbane", new: "austin" },
  { old: "perth", new: "denver" },
  // Indian cities (any that may still be cached)
  { old: "dehradun", new: "denver" },
  { old: "mumbai", new: "new-york" },
  { old: "delhi", new: "new-york" },
  { old: "bangalore", new: "san-francisco" },
  { old: "hyderabad", new: "houston" },
  { old: "chennai", new: "los-angeles" },
  { old: "kolkata", new: "chicago" },
  { old: "pune", new: "austin" },
  { old: "ahmedabad", new: "dallas" },
  { old: "jaipur", new: "phoenix" },
  { old: "lucknow", new: "nashville" },
  { old: "chandigarh", new: "denver" },
  { old: "kochi", new: "miami" },
  { old: "gurgaon", new: "dallas" },
  { old: "noida", new: "dallas" },
  { old: "indore", new: "charlotte" },
  { old: "bhopal", new: "charlotte" },
  { old: "nagpur", new: "tampa" },
  { old: "vadodara", new: "tampa" },
  { old: "surat", new: "houston" },
  { old: "visakhapatnam", new: "miami" },
  { old: "coimbatore", new: "portland" },
  { old: "thiruvananthapuram", new: "portland" },
  { old: "patna", new: "minneapolis" },
  { old: "ranchi", new: "salt-lake-city" },
  { old: "guwahati", new: "salt-lake-city" },
  { old: "bhubaneswar", new: "raleigh" },
  { old: "mysore", new: "scottsdale" },
  { old: "mangalore", new: "scottsdale" },
  { old: "nashik", new: "san-antonio" },
];

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    const redirects: {
      source: string;
      destination: string;
      permanent: boolean;
    }[] = [];

    // Redirect all old city slugs for every niche
    for (const { old: oldCity, new: newCity } of removedCityRedirects) {
      redirects.push({
        source: `/ai-marketing/:niche/${oldCity}`,
        destination: `/ai-marketing/:niche/${newCity}`,
        permanent: true, // 301
      });
    }

    // Niche renames: ca-firms → accounting-firms
    redirects.push(
      {
        source: "/ca-firms",
        destination: "/accounting-firms",
        permanent: true,
      },
      {
        source: "/ai-marketing/ca-firms/:city",
        destination: "/ai-marketing/accounting-firms/:city",
        permanent: true,
      },
      {
        source: "/citations/ca-firms",
        destination: "/citations/accounting-firms",
        permanent: true,
      },
      {
        source: "/blog/ca-firms-ai-marketing-complete-guide",
        destination: "/blog/accounting-firms-ai-marketing-complete-guide",
        permanent: true,
      },
      {
        source: "/blog/ca-firms-case-study-ai-marketing",
        destination: "/blog/accounting-firms-case-study-ai-marketing",
        permanent: true,
      },
      {
        source: "/blog/why-ca-firms-need-aeo",
        destination: "/blog/why-accounting-firms-need-aeo",
        permanent: true,
      },
      {
        source: "/blog/schema-markup-for-ca-firms",
        destination: "/blog/schema-markup-for-accounting-firms",
        permanent: true,
      }
    );

    // Niche renames: coaching-institutes → test-prep
    redirects.push(
      {
        source: "/coaching-institutes",
        destination: "/test-prep",
        permanent: true,
      },
      {
        source: "/ai-marketing/coaching-institutes/:city",
        destination: "/ai-marketing/test-prep/:city",
        permanent: true,
      },
      {
        source: "/citations/coaching-institutes",
        destination: "/citations/test-prep",
        permanent: true,
      }
    );

    return redirects;
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
