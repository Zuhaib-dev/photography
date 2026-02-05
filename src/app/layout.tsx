import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NextTopLoader from "nextjs-toploader";
import StructuredData from "@/components/StructuredData";
import SkipToContent from "@/components/SkipToContent";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lenscapes.netlify.app"),
  title: {
    default: "Lenscapes | Photographer Portfolio by Zuhaib Rashid",
    template: "%s | Lenscapes",
  },
  description:
    "Lenscapes is a modern photography portfolio by Zuhaib Rashid — showcasing breathtaking landscapes, portraits, and creative visual storytelling.",
  keywords: [
    "photography portfolio",
    "Zuhaib Rashid",
    "Lenscapes",
    "photo gallery",
    "photographer website",
    "Next.js portfolio",
    "framer motion",
    "modern portfolio",
    "Srinagar photographer",
    "travel photography",
    "landscape photography",
    "portrait photography",
    "creative photography",
    "visual storytelling",
    "nature photography",
    "frontend developer portfolio",
  ],
  authors: [{ name: "Zuhaib Rashid", url: "https://www.zuhaibrashid.com/" }],
  creator: "Zuhaib Rashid",
  publisher: "Lenscapes",
  category: "Photography",
  themeColor: "#000000",
  applicationName: "Lenscapes",
  alternates: {
    canonical: "https://lenscapes.netlify.app",
  },
  openGraph: {
    title: "Lenscapes — Photographer Portfolio by Zuhaib Rashid",
    description:
      "Explore Lenscapes — a photography portfolio capturing landscapes, portraits, and timeless moments by Zuhaib Rashid.",
    url: "https://lenscapes.netlify.app",
    siteName: "Lenscapes",
    images: [
      {
        url: "/images/preview.png",
        width: 1200,
        height: 630,
        alt: "Lenscapes Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lenscapes — Photographer Portfolio by Zuhaib Rashid",
    description:
      "A creative photography portfolio by Zuhaib Rashid featuring landscapes, portraits, and stories told through the lens.",
    images: ["/images/preview.png"],
    creator: "@xuhaibx9",
  },
  icons: {
    icon: "/images/favicon.svg",
    shortcut: "/images/favicon.svg",
    apple: "/images/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  verification: {
    google: "PhC4G2XmPO_iZ5yQFaXvkOkJHHJEwRRJsjygMozyteA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={manrope.className}>
      <head>
        {/* ✅ Progressive Web App support */}
        <meta name="application-name" content="Lenscapes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="apple-mobile-web-app-title" content="Lenscapes" />
        <meta name="theme-color" content="#000000" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/images/favicon.svg" sizes="any" />
        <link rel="apple-touch-icon" href="/images/apple-touch-icon.svg" />
      </head>
      <body>
        {/* Structured Data for SEO */}
        <StructuredData
          type="Person"
          data={{
            name: "Zuhaib Rashid",
            url: "https://lenscapes.netlify.app",
            image: "https://lenscapes.netlify.app/images/preview.png",
            jobTitle: "Professional Photographer",
            description: "Professional photographer specializing in portrait, landscape, event, and commercial photography",
            sameAs: [
              "https://www.zuhaibrashid.com/",
              "https://www.linkedin.com/in/zuhaib-rashid-661345318/",
              "https://x.com/xuhaib_x9",
              "https://www.facebook.com/sam.zuhaib.98/",
            ],
          }}
        />
        <StructuredData
          type="WebSite"
          data={{
            name: "Lenscapes",
            url: "https://lenscapes.netlify.app",
            description: "Modern photography portfolio showcasing breathtaking landscapes, portraits, and creative visual storytelling",
            author: {
              "@type": "Person",
              name: "Zuhaib Rashid",
            },
          }}
        />
        <NextTopLoader showSpinner={false} color="#ffffff" />
        <SkipToContent />
        <Header />
        <main id="main-content" className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
// This web App is created by Zuhaib Rashid for more quries visit zuhiabrashid.com 👍