import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LandingPage } from "@/components/LandingPage";
import type { Locale } from "@/lib/site-i18n";
import { brandTitle, localizedPageMetadata } from "@/lib/seo";

const descriptions = {
  en: "Free running game for iOS and Android: close a route, claim the area on a shared map and compete for territory with other runners. Made in Lisbon.",
  es: "Juego de running gratuito para iOS y Android: cierra un recorrido, reclama el área en un mapa compartido y disputa el territorio con otros corredores. Hecho en Lisboa.",
} as const;

function getLocale(value: string): Exclude<Locale, "pt"> {
  if (value !== "en" && value !== "es") notFound();
  return value;
}

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "es" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = getLocale((await params).locale);
  return localizedPageMetadata({
    locale,
    title: brandTitle[locale],
    description: descriptions[locale],
  });
}

export default async function LocalizedHome({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = getLocale((await params).locale);
  return <LandingPage locale={locale} />;
}
