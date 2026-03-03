import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Timur Seidalin — Head of Product Design",
  description:
    "Head of Product Design with 7+ years in fintech and B2B. Design leadership, AI-driven workflows, and product strategy.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Timur Seidalin — Head of Product Design",
    description:
      "Head of Product Design with 7+ years in fintech and B2B. Design leadership, AI-driven workflows, and product strategy.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Timur Seidalin — Head of Product Design",
    description:
      "Head of Product Design with 7+ years in fintech and B2B. Design leadership, AI-driven workflows, and product strategy.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
