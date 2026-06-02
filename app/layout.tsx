import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Header, Footer } from "@/components/layout";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: {
    default: "SMD Group | Financial Advisory Services",
    template: "%s | SMD Group",
  },
  description:
    "Expert tax advisory, accounting, business development, and CFO services. Helping individuals and businesses achieve financial success with integrity and expertise.",
  keywords: [
    "tax advisory",
    "accounting services",
    "CFO services",
    "business development",
    "tax resolution",
    "financial planning",
  ],
  authors: [{ name: "SMD Group" }],
  creator: "SMD Group",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://smdgroup.com",
    siteName: "SMD Group",
    title: "SMD Group | Financial Advisory Services",
    description:
      "Expert tax advisory, accounting, business development, and CFO services.",
  },
  twitter: {
    card: "summary_large_image",
    title: "SMD Group | Financial Advisory Services",
    description:
      "Expert tax advisory, accounting, business development, and CFO services.",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f3ef" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1a2e" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-background">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased`}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
