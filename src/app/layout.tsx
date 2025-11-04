import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NextTopLoader from "nextjs-toploader";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lenscapes.netlify.app"),
  title: "Lenscapes | Photographer Portfolio by Zuhaib Rashid",
  description:
    "Lenscapes is a modern photography portfolio by Zuhaib Rashid — showcasing creative work, stunning landscapes, and visual storytelling through the lens.",
  keywords: [
    "photography portfolio",
    "Zuhaib Rashid",
    "Lenscapes",
    "photo gallery",
    "photographer website",
    "nextjs portfolio",
    "framer motion",
    "modern portfolio",
  ],
  authors: [{ name: "Zuhaib Rashid", url: "https://www.zuhaibrashid.com/" }],
  creator: "Zuhaib Rashid",
  publisher: "Lenscapes",
  themeColor: "#000000",
  alternates: {
    canonical: "https://lenscapes.netlify.app",
  },
  openGraph: {
    title: "Lenscapes — Photographer Portfolio by Zuhaib Rashid",
    description:
      "Explore Lenscapes — a stunning photography portfolio capturing landscapes, portraits, and timeless moments through the lens of Zuhaib Rashid.",
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
      "A creative portfolio showcasing stunning photography and storytelling by Zuhaib Rashid.",
    images: ["/images/preview.png"],
    creator: "@xuhaibx9",
  },
  icons: {
    icon: "/images/favicon.svg",
    shortcut: "/images/favicon.svg",
    apple: "/images/apple-touch-icon.png",
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
        {/* ✅ Google Search Console Verification */}
        <meta
          name="google-site-verification"
          content="PhC4G2XmPO_iZ5yQFaXvkOkJHHJEwRRJsjygMozyteA"
        />
        <link rel="icon" href="/images/favicon.svg" sizes="any" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body>
        <NextTopLoader showSpinner={false} color="#ffffff" />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
