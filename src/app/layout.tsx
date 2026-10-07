import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
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
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark')document.documentElement.classList.add('dark')}catch(e){}})()`,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
