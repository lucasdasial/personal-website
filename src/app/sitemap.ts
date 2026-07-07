import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const SITE_URL = "https://lucasdasial.com.br";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = {
    en: SITE_URL,
    "pt-BR": `${SITE_URL}/pt`,
  };

  return [
    {
      url: SITE_URL,
      changeFrequency: "monthly",
      priority: 1,
      alternates: { languages },
    },
    {
      url: `${SITE_URL}/pt`,
      changeFrequency: "monthly",
      priority: 1,
      alternates: { languages },
    },
  ];
}
