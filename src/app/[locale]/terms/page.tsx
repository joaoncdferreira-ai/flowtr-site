import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LocalizedTermsPage } from "@/components/LocalizedTermsPage";
import { type Locale } from "@/lib/site-i18n";

type Props = { params: Promise<{ locale: string }> };

const descriptions = {
  en: "The rules for using Flowtr, the game where you run in the real world to claim territory.",
  es: "Las reglas de uso de Flowtr, el juego en el que corres en el mundo real para conquistar territorio.",
} as const;

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "es" }];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (locale !== "en" && locale !== "es") return {};

  return {
    title: locale === "en" ? "Terms of Use" : "Términos de uso",
    description: descriptions[locale],
    alternates: {
      canonical: `/${locale}/terms`,
      languages: { "pt-PT": "/terms", en: "/en/terms", es: "/es/terms" },
    },
  };
}

export default async function TermsPage({ params }: Props) {
  const { locale } = await params;
  if (locale !== "en" && locale !== "es") notFound();

  return <LocalizedTermsPage locale={locale as Exclude<Locale, "pt">} />;
}
