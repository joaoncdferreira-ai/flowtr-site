import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  LocalizedComparisonPage,
  comparisonMeta,
} from "@/components/LocalizedComparisonPage";
import {
  competitorSlugs,
  isCompetitorSlug,
  type CompetitorSlug,
} from "@/lib/comparisons";
import type { Locale } from "@/lib/site-i18n";
import { localizedPageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ locale: string; competitor: string }> };

export const dynamicParams = false;

function getLocale(value: string): Exclude<Locale, "pt"> {
  if (value !== "en" && value !== "es") notFound();
  return value;
}

function getSlug(value: string): CompetitorSlug {
  if (!isCompetitorSlug(value)) notFound();
  return value;
}

export function generateStaticParams() {
  return (["en", "es"] as const).flatMap((locale) =>
    competitorSlugs.map((competitor) => ({ locale, competitor })),
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: rawLocale, competitor } = await params;
  const locale = getLocale(rawLocale);
  const slug = getSlug(competitor);
  return localizedPageMetadata({
    locale,
    suffix: `/vs/${slug}`,
    ...comparisonMeta[slug][locale],
  });
}

export default async function ComparisonPage({ params }: Props) {
  const { locale: rawLocale, competitor } = await params;
  const locale = getLocale(rawLocale);
  const slug = getSlug(competitor);
  return <LocalizedComparisonPage locale={locale} slug={slug} />;
}
