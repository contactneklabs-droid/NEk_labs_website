import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import BackToTop from "@/components/BackToTop";
import Preloader from "@/components/Preloader";
import SystemSignatures from "@/components/SystemSignatures";
import { PostHogProvider } from "@/components/PostHogProvider";
import WebGLBackground from "@/components/WebGLBackground";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700", "900"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  style: ["italic"],
});

export const metadata: Metadata = {
  // TODO: Replace with actual production domain before final deployment
  metadataBase: new URL("https://INSERT_PRODUCTION_DOMAIN_HERE.com"),
  title: "NEk LABS | Digital Systems & Creative Technology",
  description:
    "Experimental technology laboratory building digital systems for the next generation of brands.",
  openGraph: {
    title: "NEk LABS | Digital Systems & Creative Technology",
    description: "Experimental technology laboratory building digital systems for the next generation of brands.",
    url: "/",
    siteName: "NEk LABS",
    images: [
      {
        url: "/nek-logo.png",
        width: 1200,
        height: 630,
        alt: "NEk LABS",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NEk LABS | Digital Systems & Creative Technology",
    description: "Experimental technology laboratory building digital systems for the next generation of brands.",
    images: ["/nek-logo.png"],
  },
  alternates: {
    canonical: "/",
  },
  manifest: "/manifest.json",
  appleWebApp: {
    title: "NEk LABS",
    statusBarStyle: "black-translucent",
    capable: true,
  },
};

export const viewport = {
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
      {/* suppressHydrationWarning prevents browser extensions (like Grammarly) from crashing Next.js hydration */}
      <body className="antialiased min-h-screen bg-black text-white selection:bg-white selection:text-black font-sans" suppressHydrationWarning>
        <PostHogProvider>
          <WebGLBackground />
          <Preloader />
          <SystemSignatures />
          {children}
          <BackToTop />
        </PostHogProvider>
      </body>
    </html>
  );
}
