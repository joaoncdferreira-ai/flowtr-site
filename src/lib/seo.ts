import type { Metadata } from "next";
import { localeInfo, localePath, type Locale } from "@/lib/site-i18n";

// Canonical origin for every absolute URL the site publishes (canonical,
// hreflang, sitemap, JSON-LD, llms.txt). Deliberately not read from the
// environment: preview deployments must still point search engines and
// assistants at https://flowtr.app.
export const SITE_URL = "https://flowtr.app";

export const OG_IMAGE = {
  url: "/og-image-v2.png",
  width: 1200,
  height: 630,
} as const;

const ogLocale: Record<Locale, string> = {
  pt: "pt_PT",
  en: "en_US",
  es: "es_ES",
};

/** The category line that always travels with the brand name. */
export const brandTitle: Record<Locale, string> = {
  pt: "Flowtr — jogo de corrida de conquista de território",
  en: "Flowtr — territory conquest running game",
  es: "Flowtr — juego de running de conquista de territorio",
};

export function absoluteUrl(path: string) {
  return `${SITE_URL}${path === "/" ? "" : path}`;
}

/**
 * hreflang alternates for one page: every locale plus x-default (the
 * Portuguese version, served at the root).
 */
export function languageAlternates(suffix = "") {
  return {
    "pt-PT": localePath("pt", suffix),
    en: localePath("en", suffix),
    es: localePath("es", suffix),
    "x-default": localePath("pt", suffix),
  };
}

export function pageAlternates(locale: Locale, suffix = "") {
  return {
    canonical: localePath(locale, suffix),
    languages: languageAlternates(suffix),
  };
}

/**
 * Full metadata for a localized page. `title` is absolute so the layout
 * template never appends the brand a second time.
 */
export function localizedPageMetadata({
  locale,
  suffix = "",
  title,
  description,
}: {
  locale: Locale;
  suffix?: string;
  title: string;
  description: string;
}): Metadata {
  const url = localePath(locale, suffix);
  return {
    title: { absolute: title },
    description,
    alternates: pageAlternates(locale, suffix),
    openGraph: {
      type: "website",
      siteName: "Flowtr",
      locale: ogLocale[locale],
      url,
      title,
      description,
      images: [{ ...OG_IMAGE, alt: brandTitle[locale] }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE.url],
    },
  };
}

export function htmlLang(locale: Locale) {
  return localeInfo[locale].htmlLang;
}
