import type { Metadata } from "next";
import { LocalizedDeleteAccountPage } from "@/components/LocalizedDeleteAccountPage";

export const metadata: Metadata = {
  title: "Eliminar conta e dados",
  description:
    "Instruções para eliminar uma conta Flowtr e os dados associados.",
  alternates: {
    canonical: "/delete-account",
    languages: {
      "pt-PT": "/delete-account",
      en: "/en/delete-account",
      es: "/es/delete-account",
    },
  },
};

export default function DeleteAccountPage() {
  return <LocalizedDeleteAccountPage locale="pt" />;
}
