import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nava.ai"),
  title: "NAVA AI — Intelligence for a Better Tomorrow",
  description:
    "NAVA AI is building a smarter, greener and more human future for Kerala through Artificial Intelligence, sustainable infrastructure and heritage preservation. Same Land. Brighter Future.",
  keywords: [
    "NAVA AI",
    "Kerala AI",
    "Future Kerala",
    "Kerala Eco-Polis",
    "Sustainable AI",
    "Agro AI Kerala",
    "Green Technology",
    "Kerala Heritage and AI",
  ],
  authors: [{ name: "NAVA AI" }],
  icons: {
    icon: "/logo-mark.png",
    apple: "/logo-mark.png",
  },
  openGraph: {
    title: "NAVA AI — Intelligence for a Better Tomorrow",
    description:
      "A Greener, Smarter Kerala for Generations. Envisioning a future where heritage and technology grow together.",
    url: "https://nava.ai",
    siteName: "NAVA AI",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/kerala_ai_greencity.jpg",
        width: 1920,
        height: 1080,
        alt: "Future Kerala Eco-Polis by NAVA AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NAVA AI — Intelligence for a Better Tomorrow",
    description: "Same Land. Brighter Future. A Greener, Smarter Kerala for Generations.",
    images: ["/images/kerala_ai_greencity.jpg"],
  },
  verification: {
    google: "_p9GkgAxg9Ftn-5GcAxNc0TsVM4kCpImH_JBjHERlgE"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark scroll-smooth`}
    >
      <body className="min-h-screen bg-background text-foreground antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
