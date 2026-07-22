import type { NextConfig } from "next";

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
      },
      {
        source: "/blog/roi-ai-marketing-ca-firms",
        destination: "/blog/roi-ai-marketing-accounting-firms",
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
      },
      {
        source: "/blog/coaching-institutes-ai-marketing-complete-guide",
        destination: "/blog/test-prep-ai-marketing-complete-guide",
        permanent: true,
      },
      {
        source: "/blog/coaching-institutes-case-study-ai-marketing",
        destination: "/blog/test-prep-case-study-ai-marketing",
        permanent: true,
      },
      {
        source: "/blog/why-coaching-institutes-need-aeo",
        destination: "/blog/why-test-prep-need-aeo",
        permanent: true,
      },
      {
        source: "/blog/schema-markup-for-coaching-institutes",
        destination: "/blog/schema-markup-for-test-prep",
        permanent: true,
      },
      {
        source: "/blog/roi-ai-marketing-coaching-institutes",
        destination: "/blog/roi-ai-marketing-test-prep",
        permanent: true,
      }
    );

    // Compare renames: justdial/practo → yelp/zocdoc
    redirects.push(
      {
        source: "/compare/justdial-vs-ai-visibility",
        destination: "/compare/yelp-vs-ai-visibility",
        permanent: true,
      },
      {
        source: "/compare/practo-vs-own-website",
        destination: "/compare/zocdoc-vs-own-website",
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
