import type { Metadata, Viewport } from "next";
import { Alegreya, Alegreya_Sans } from "next/font/google";
import { company, siteUrl } from "@/lib/constants";
import "./globals.css";

const alegreya = Alegreya({
  variable: "--font-alegreya",
  subsets: ["latin"],
  weight: ["500", "700"],
});

const alegreyaSans = Alegreya_Sans({
  variable: "--font-alegreya-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const title = "Full Cycle | Consultoria ambiental em Santa Catarina";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description: company.description,
  keywords: [
    "consultoria ambiental",
    "licenciamento ambiental",
    "CAR",
    "PRAD",
    "restauração ecológica",
    "Santa Catarina",
  ],
  authors: [{ name: company.legalName }],
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description: company.description,
    url: "/",
    siteName: company.name,
    type: "website",
    locale: "pt_BR",
  },
};

export const viewport: Viewport = {
  themeColor: "#1e3b2f",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${alegreya.variable} ${alegreyaSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
