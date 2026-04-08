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
  metadataBase: new URL("https://godfatherfunnelai.com"),
  openGraph: {
    title: "Godfather Funnel AI — Make AI Recommend You by Name",
    description:
      "Your competitors are AI-recommended. You're invisible. We fix that in 30 days.",
    url: "https://godfatherfunnelai.com",
    siteName: "Godfather Funnel AI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Godfather Funnel AI — Make AI Recommend You by Name",
    description:
      "Your competitors are AI-recommended. You're invisible. We fix that in 30 days.",
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
      <body className="min-h-full flex flex-col bg-[#0a0a0f] text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Godfather Funnel AI",
              url: "https://godfatherfunnelai.com",
              description:
                "India's premier AEO and AI marketing agency. We make AI recommend your business by name.",
              foundingDate: "2026",
              areaServed: { "@type": "Country", name: "India" },
              serviceType: [
                "Answer Engine Optimization",
                "AI Marketing",
                "Schema Markup",
                "Digital Marketing",
              ],
              sameAs: [],
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
