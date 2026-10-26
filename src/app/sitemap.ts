import type { MetadataRoute } from "next";
import { competitorSlugs } from "@/lib/comparisons";
import { absoluteUrl, languageAlternates } from "@/lib/seo";
import { localePath, locales } from "@/lib/site-i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = [
    { suffix: "", changeFrequency: "weekly" as const, priority: 1 },
    { suffix: "/lisboa", changeFrequency: "monthly" as const, priority: 0.8 },
    ...competitorSlugs.map((slug) => ({
      suffix: `/vs/${slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    { suffix: "/support", changeFrequency: "monthly" as const, priority: 0.8 },
    { suffix: "/terms", changeFrequency: "yearly" as const, priority: 0.6 },
    { suffix: "/privacy", changeFrequency: "yearly" as const, priority: 0.6 },
    {
      suffix: "/delete-account",
      changeFrequency: "yearly" as const,
      priority: 0.6,
    },
  ];

  return routes.flatMap(({ suffix, changeFrequency, priority }) => {
    const languages = Object.fromEntries(
      Object.entries(languageAlternates(suffix)).map(([lang, path]) => [
        lang,
        absoluteUrl(path),
      ]),
    );

    return locales.map((locale) => ({
      url: absoluteUrl(localePath(locale, suffix)),
      lastModified: now,
      changeFrequency,
      priority,
      alternates: { languages },
    }));
  });
}
