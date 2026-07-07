import type { Metadata, Viewport } from "next";
import { geist } from "@/lib/fonts";
import "../globals.css";

const SITE_URL = "https://lucasdasial.com.br";
const TITLE = "Lucas Alves - Backend Software Engineer";
const DESCRIPTION =
  "Lucas Alves (Dasial), a backend software engineer with five years shipping APIs and business-critical services in Elixir, Phoenix and PostgreSQL for digital banking, benefits, fleet and government platforms.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s | Lucas Alves",
  },
  description: DESCRIPTION,
  keywords: [
    "Lucas Alves",
    "Dasial",
    "Backend Engineer",
    "Software Engineer",
    "Elixir",
    "Phoenix",
    "PostgreSQL",
    "Node.js",
    "TypeScript",
  ],
  authors: [{ name: "Lucas Alves", url: SITE_URL }],
  creator: "Lucas Alves",
  alternates: {
    canonical: SITE_URL,
    languages: {
      en: SITE_URL,
      "pt-BR": `${SITE_URL}/pt`,
      "x-default": SITE_URL,
    },
  },
  openGraph: {
    type: "profile",
    url: SITE_URL,
    title: TITLE,
    description: DESCRIPTION,
    siteName: "Lucas Alves",
    locale: "en_US",
    alternateLocale: ["pt_BR"],
    images: [{ url: "/assets/lucas.jpeg", width: 800, height: 960, alt: "Lucas Alves" }],
  },
  twitter: {
    card: "summary",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/assets/lucas.jpeg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function EnLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geist.variable}>
      <body style={{ fontFamily: "var(--font-geist), system-ui, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
