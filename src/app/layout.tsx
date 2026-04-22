import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "../lib/utils";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import LeadGenModal from "../components/LeadGenModal";

// Configure Inter (Ideal for body text/UI elements)
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Configure Outfit (Ideal for headings/display text)
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bitmos Technologies Ltd — Redefining Business Solutions",
  description: "Next-generation software engineering firm specializing in cloud infrastructure, AI integration, and native mobile platforms.",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/BitmosColored.png",
        href: "/BitmosColored.png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/BitmosWhite.png",
        href: "/BitmosWhite.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background text-foreground antialiased",
          inter.variable,
          outfit.variable,
          "font-sans" 
        )}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
        <LeadGenModal />
      </body>
    </html>
  );
}