import type { Metadata, Viewport } from "next";
import { geist } from "@/lib/fonts";
import "../globals.css";

const SITE_URL = "https://lucasdasial.com.br";
const PT_URL = `${SITE_URL}/pt`;
const TITLE = "Lucas Alves - Engenheiro de Software Backend";
const DESCRIPTION =
  "Lucas Alves (Dasial), engenheiro de software backend com cinco anos entregando APIs e serviços críticos em Elixir, Phoenix e PostgreSQL para plataformas de banking, benefícios, frotas e governo.";

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
    "Engenheiro Backend",
    "Engenheiro de Software",
    "Elixir",
    "Phoenix",
    "PostgreSQL",
    "Node.js",
    "TypeScript",
  ],
  authors: [{ name: "Lucas Alves", url: SITE_URL }],
  creator: "Lucas Alves",
  alternates: {
    canonical: PT_URL,
    languages: {
      en: SITE_URL,
      "pt-BR": PT_URL,
      "x-default": SITE_URL,
    },
  },
  openGraph: {
    type: "profile",
    url: PT_URL,
    title: TITLE,
    description: DESCRIPTION,
    siteName: "Lucas Alves",
    locale: "pt_BR",
    alternateLocale: ["en_US"],
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

export default function PtLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={geist.variable}>
      <body style={{ fontFamily: "var(--font-geist), system-ui, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
