import type { Metadata } from "next";
import { pageAlternates } from "@/lib/seo";
import { LocalizedDeleteAccountPage } from "@/components/LocalizedDeleteAccountPage";

export const metadata: Metadata = {
  title: "Eliminar conta e dados",
  description:
    "Instruções para eliminar uma conta Flowtr e os dados associados.",
  alternates: pageAlternates("pt", "/delete-account"),
};

export default function DeleteAccountPage() {
  return <LocalizedDeleteAccountPage locale="pt" />;
}
