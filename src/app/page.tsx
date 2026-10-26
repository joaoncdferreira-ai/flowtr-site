import type { Metadata } from "next";
import { LandingPage } from "@/components/LandingPage";
import { brandTitle, localizedPageMetadata } from "@/lib/seo";

export const metadata: Metadata = localizedPageMetadata({
  locale: "pt",
  title: brandTitle.pt,
  description:
    "Jogo de corrida gratuito para iOS e Android: fecha um percurso, reclama a área num mapa partilhado e disputa território com outros corredores. Feito em Lisboa.",
});

export default function Home() {
  return <LandingPage locale="pt" />;
}
