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
        url: "https://res.cloudinary.com/wak9cipn/image/upload/v1789490961/ChatGPT_Image_Aug_14_2026_11_09_51_PM.png",
        width: 1200,
        height: 630,
        alt: "Bharath Chavan - Founder",
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
