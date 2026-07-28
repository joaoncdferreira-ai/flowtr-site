import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LocalizedPrivacyPage } from "@/components/LocalizedPrivacyPage";
import { type Locale } from "@/lib/site-i18n";

type Props = { params: Promise<{ locale: string }> };

const descriptions = {
  en: "How Flowtr collects, uses and protects your data, including GPS location, routes and territories.",
  es: "Cómo recopila, utiliza y protege Flowtr tus datos, incluida la ubicación GPS, los recorridos y los territorios.",
} as const;

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "es" }];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (locale !== "en" && locale !== "es") return {};

  return {
    title: locale === "en" ? "Privacy Policy" : "Política de Privacidad",
    description: descriptions[locale],
    alternates: {
      canonical: `/${locale}/privacy`,
      languages: { "pt-PT": "/privacy", en: "/en/privacy", es: "/es/privacy" },
    },
  };
}

export default async function PrivacyPage({ params }: Props) {
  const { locale } = await params;
  if (locale !== "en" && locale !== "es") notFound();

  return (
    <LocalizedPrivacyPage
      locale={locale as Exclude<Locale, "pt">}
    />
  );
}
