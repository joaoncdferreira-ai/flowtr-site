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
import { localizedPageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ competitor: string }> };

export const dynamicParams = false;

function getSlug(value: string): CompetitorSlug {
  if (!isCompetitorSlug(value)) notFound();
  return value;
}

export function generateStaticParams() {
  return competitorSlugs.map((competitor) => ({ competitor }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = getSlug((await params).competitor);
  return localizedPageMetadata({
    locale: "pt",
    suffix: `/vs/${slug}`,
    ...comparisonMeta[slug].pt,
  });
}

export default async function ComparisonPage({ params }: Props) {
  const slug = getSlug((await params).competitor);
  return <LocalizedComparisonPage locale="pt" slug={slug} />;
}
