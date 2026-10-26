import type { Metadata } from "next";
import { pageAlternates } from "@/lib/seo";
import { LocalizedSupportPage } from "@/components/LocalizedSupportPage";

export const metadata: Metadata = {
  title: "Suporte",
  description:
    "Ajuda com a conta, corridas, localização, privacidade e utilização da app Flowtr.",
  alternates: pageAlternates("pt", "/support"),
};

export default function SupportPage() {
  return <LocalizedSupportPage locale="pt" />;
}
