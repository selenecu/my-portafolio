import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin-ext"] });

export const metadata: Metadata = {
  title: "Selene Culquicondor | Desarrolladora Web y Móvil",
  description:
    "Portafolio de Selene Culquicondor, desarrolladora web y móvil desde 2022. Experiencia con TypeScript, React Native, Vue.js, Next.js, WordPress y PostgreSQL.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/react.png" sizes="any" />
      </head>
      <body className={inter.className}>
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
