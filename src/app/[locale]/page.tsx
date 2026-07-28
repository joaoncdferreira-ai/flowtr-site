import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LandingPage } from "@/components/LandingPage";
import type { Locale } from "@/lib/site-i18n";

const localizedMetadata = {
  en: {
    title: "Flowtr — run and claim territory",
    description:
      "Close a route, claim the area on a shared map and compete for territory with other runners.",
  },
  es: {
    title: "Flowtr — corre y conquista territorio",
    description:
      "Cierra un recorrido, reclama el área en un mapa compartido y disputa el territorio con otros corredores.",
  },
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
  const copy = localizedMetadata[locale];

  return {
    title: copy.title,
    description: copy.description,
    alternates: {
      canonical: `/${locale}`,
      languages: {
        "pt-PT": "/",
        en: "/en",
        es: "/es",
      },
    },
    openGraph: {
      locale: locale === "en" ? "en_US" : "es_ES",
      title: copy.title,
      description: copy.description,
      url: `/${locale}`,
    },
  };
}

export default async function LocalizedHome({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = getLocale((await params).locale);
  return <LandingPage locale={locale} />;
}
