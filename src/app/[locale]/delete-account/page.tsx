import type { Metadata } from "next";
import { pageAlternates } from "@/lib/seo";
import { notFound } from "next/navigation";
import { LocalizedDeleteAccountPage } from "@/components/LocalizedDeleteAccountPage";
import type { Locale } from "@/lib/site-i18n";

const metadataCopy = {
  en: {
    title: "Delete account and data",
    description:
      "Instructions for deleting a Flowtr account and its associated data.",
  },
  es: {
    title: "Eliminar cuenta y datos",
    description:
      "Instrucciones para eliminar una cuenta Flowtr y sus datos asociados.",
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
    alternates: pageAlternates(locale, "/delete-account"),
  };
}

export default async function DeleteAccount({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = getLocale((await params).locale);
  return <LocalizedDeleteAccountPage locale={locale} />;
}
