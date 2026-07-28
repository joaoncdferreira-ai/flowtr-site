import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LocalizedSupportPage } from "@/components/LocalizedSupportPage";
import type { Locale } from "@/lib/site-i18n";

const metadataCopy = {
  en: {
    title: "Support",
    description:
      "Help with your Flowtr account, runs, location, privacy and app use.",
  },
  es: {
    title: "Ayuda",
    description:
      "Ayuda con tu cuenta Flowtr, carreras, ubicación, privacidad y uso de la aplicación.",
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
  return {
    ...metadataCopy[locale],
    alternates: {
      canonical: `/${locale}/support`,
      languages: {
        "pt-PT": "/support",
        en: "/en/support",
        es: "/es/support",
      },
    },
  };
}

export default async function Support({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = getLocale((await params).locale);
  return <LocalizedSupportPage locale={locale} />;
}
