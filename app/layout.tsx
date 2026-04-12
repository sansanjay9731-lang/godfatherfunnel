import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABar from "@/components/CTABar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Godfather Funnel AI — Make AI Recommend You by Name",
  description:
    "AEO + 360° marketing for dermatologists, dentists, plastic surgeons, IVF clinics, lawyers & real estate. Get AI to recommend YOU by name.",
  metadataBase: new URL("https://www.godfatherfunnelai.com"),
  openGraph: {
    title: "Godfather Funnel AI — Make AI Recommend You by Name",
    description:
      "Your competitors are AI-recommended. You're invisible. We fix that in 30 days.",
    url: "https://www.godfatherfunnelai.com",
    siteName: "Godfather Funnel AI",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Godfather Funnel AI — India's #1 AEO & AI Marketing Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Godfather Funnel AI — Make AI Recommend You by Name",
    description:
      "Your competitors are AI-recommended. You're invisible. We fix that in 30 days.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
      </head>
      <body className="min-h-full flex flex-col bg-[#0a0a0f] text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://www.godfatherfunnelai.com/#organization",
              name: "Godfather Funnel AI",
              url: "https://www.godfatherfunnelai.com",
              logo: "https://www.godfatherfunnelai.com/logo.png",
              description:
                "India's premier AEO and AI marketing agency. We make AI recommend your business by name.",
              foundingDate: "2026",
              slogan: "Make AI Recommend You by Name",
              telephone: "+91 98765 43210",
              areaServed: { "@type": "Country", name: "India" },
              address: {
                "@type": "PostalAddress",
                addressCountry: "IN",
              },
              email: "contact@godfatherfunnelai.com",
              knowsAbout: [
                "Answer Engine Optimization",
                "AI Marketing",
                "Schema Markup",
                "Structured Data",
                "ChatGPT Optimization",
                "Google AI Overviews",
                "Perplexity Optimization",
                "Local SEO",
                "Healthcare Marketing",
                "Legal Marketing",
              ],
              sameAs: [
                "https://www.linkedin.com/company/godfatherfunnelai",
                "https://twitter.com/godfatherfunnel",
                "https://www.instagram.com/godfatherfunnelai",
                "https://www.youtube.com/@godfatherfunnelai",
              ],
            }),
          }}
        />
        <Navbar />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
        <CTABar />
      </body>
    </html>
  );
}
