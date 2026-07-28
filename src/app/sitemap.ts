import type { MetadataRoute } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://flowtr.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = [
    { suffix: "", changeFrequency: "weekly" as const, priority: 1 },
    { suffix: "/terms", changeFrequency: "yearly" as const, priority: 0.6 },
    { suffix: "/privacy", changeFrequency: "yearly" as const, priority: 0.6 },
    {
      suffix: "/delete-account",
      changeFrequency: "yearly" as const,
      priority: 0.6,
    },
    { suffix: "/support", changeFrequency: "monthly" as const, priority: 0.8 },
  ];

  return routes.flatMap(({ suffix, changeFrequency, priority }) => {
    const paths = {
      "pt-PT": `${SITE_URL}${suffix}`,
      en: `${SITE_URL}/en${suffix}`,
      es: `${SITE_URL}/es${suffix}`,
    };

    return Object.values(paths).map((url) => ({
      url,
      lastModified: now,
      changeFrequency,
      priority,
      alternates: { languages: paths },
    }));
  });
}
