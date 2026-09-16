import Home from "../page";
import ClientTrigger from "./ClientTrigger";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bharath Chavan — Founder @ NEk LABS",
  description: "View my digital business card, contact details, and book a meeting.",
  openGraph: {
    title: "Bharath Chavan — Founder @ NEk LABS",
    description: "View my digital business card, contact details, and book a meeting.",
    url: "https://nek-labs-website.vercel.app/bharath",
    siteName: "NEk LABS",
    images: [
      {
        url: "https://nek-labs-website.vercel.app/bharath-og.jpg",
        width: 1200,
        height: 630,
        alt: "Bharath Chavan - Digital Profile",
      },
    ],
    type: "website",
  },
};

export default function BharathProfile() {
  return (
    <>
      <ClientTrigger />
      <Home />
    </>
  );
}
