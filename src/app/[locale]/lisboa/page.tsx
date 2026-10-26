import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LocalizedLisbonPage, lisbonMeta } from "@/components/LocalizedLisbonPage";
import type { Locale } from "@/lib/site-i18n";
import { localizedPageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ locale: string }> };

function getLocale(value: string): Exclude<Locale, "pt"> {
  if (value !== "en" && value !== "es") notFound();
  return value;
}

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "es" }];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = getLocale((await params).locale);
  return localizedPageMetadata({
    locale,
    suffix: "/lisboa",
    ...lisbonMeta[locale],
  });
}

export default async function LisbonPage({ params }: Props) {
  const locale = getLocale((await params).locale);
  return <LocalizedLisbonPage locale={locale} />;
}
