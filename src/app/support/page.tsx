import type { Metadata } from "next";
import { LocalizedSupportPage } from "@/components/LocalizedSupportPage";

export const metadata: Metadata = {
  title: "Suporte",
  description:
    "Ajuda com a conta, corridas, localização, privacidade e utilização da app Flowtr.",
  alternates: {
    canonical: "/support",
    languages: {
      "pt-PT": "/support",
      en: "/en/support",
      es: "/es/support",
    },
  },
};

export default function SupportPage() {
  return <LocalizedSupportPage locale="pt" />;
}
