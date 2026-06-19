import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import { Inter, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Header, Footer } from "@/components/layout";
import { ScrollToTop } from "@/components/shared/scroll-to-top";
import { PageTheme } from "@/components/shared/page-theme";
import { luxuryBackgroundCssVars } from "@/lib/luxury-backgrounds";
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
      },
      {
        url: "/icon-dark-32x32.png",
      },
      { url: "/appimg.png" },
    ],
    apple: "/apple-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f2ebd9" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0908" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = await headers();
  const pathname = headersList.get("x-pathname") ?? "";
  const pageTheme = pathname === "/" ? "home" : "inner";

  return (
    <html
      lang="en"
      className="bg-background"
      style={luxuryBackgroundCssVars as React.CSSProperties}
    >
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased`}
        data-page={pageTheme}
      >
        <PageTheme />
        <ScrollToTop />
        <Header />
        <main className="min-h-screen w-full overflow-x-hidden">{children}</main>
        <Footer />
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
