import type { Metadata } from "next";
import { LocalizedLisbonPage, lisbonMeta } from "@/components/LocalizedLisbonPage";
import { localizedPageMetadata } from "@/lib/seo";

export const metadata: Metadata = localizedPageMetadata({
  locale: "pt",
  suffix: "/lisboa",
  ...lisbonMeta.pt,
});

export default function LisbonPage() {
  return <LocalizedLisbonPage locale="pt" />;
}
