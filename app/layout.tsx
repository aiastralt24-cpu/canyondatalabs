import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Canyon Data Labs — Turn Enterprise Data Into Decisions",
    template: "%s — Canyon Data Labs",
  },
  description: SITE.description,
  openGraph: {
    type: "website",
    siteName: SITE.name,
    title: "Canyon Data Labs — Turn Enterprise Data Into Decisions",
    description: SITE.description,
    url: SITE.url,
  },
  twitter: {
    card: "summary_large_image",
    title: "Canyon Data Labs — Turn Enterprise Data Into Decisions",
    description: SITE.description,
  },
  robots: { index: true, follow: true },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE.name,
  description: SITE.description,
  url: SITE.url,
  email: SITE.email,
  foundingLocation: { "@type": "Place", name: "Ahmedabad, India" },
  areaServed: ["India", "Gulf", "Emerging Markets"],
  knowsAbout: [
    "Enterprise Intelligence",
    "Sales & Distribution Analytics",
    "Supply Chain & S&OP",
    "Procurement Intelligence",
    "SFA",
    "CRM",
    "DMS",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500&family=DM+Mono:wght@300;400&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </head>
      <body>
        <Nav />
        <main className="page-main">{children}</main>
        <Footer />
        <StickyCTA />
      </body>
    </html>
  );
}
