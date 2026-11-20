import type { Metadata } from "next";
import { Gloock, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import { SITE_URL, siteConfig } from "@/config/site";
import PersonJsonLd from "@/components/PersonJsonLd";

const inter = Inter({ subsets: ["latin-ext"] });

// Display face for the hero name: a high-contrast serif that pairs with Inter body copy.
const display = Gloock({
  weight: "400",
  subsets: ["latin-ext"],
  display: "swap",
  variable: "--font-display",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: siteConfig.title,
  description: siteConfig.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    locale: siteConfig.locale,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.className} ${display.variable}`}>
        <PersonJsonLd />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          // disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
