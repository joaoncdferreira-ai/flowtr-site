import type { MetadataRoute } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://flowtr.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
      alternates: { languages: { "pt-PT": SITE_URL } },
    },
    {
      url: `${SITE_URL}/terms`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.6,
      alternates: { languages: { "pt-PT": `${SITE_URL}/terms` } },
    },
    {
      url: `${SITE_URL}/privacy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.6,
      alternates: { languages: { "pt-PT": `${SITE_URL}/privacy` } },
    },
    {
      url: `${SITE_URL}/delete-account`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.6,
      alternates: { languages: { "pt-PT": `${SITE_URL}/delete-account` } },
    },
    {
      url: `${SITE_URL}/support`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: { languages: { "pt-PT": `${SITE_URL}/support` } },
    },
  ];
}
