import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";

import { LegalFooter } from "@/components/LegalFooter";

import { Providers } from "./providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
});

export const metadata: Metadata = {
  title: "Biohacking Póker | Libro",
  description:
    "Preparación física y mental para jugadores de póker que quieren rendir mejor.",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${oswald.variable}`}>
        <Providers>
          {children}
          <LegalFooter />
        </Providers>
      </body>
    </html>
  );
}