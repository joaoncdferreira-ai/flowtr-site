import { localePath, siteCopy, type Locale } from "@/lib/site-i18n";
import { absoluteUrl, brandTitle, htmlLang, OG_IMAGE, SITE_URL } from "@/lib/seo";
import { APP_STORE_URL, GOOGLE_PLAY_URL } from "@/lib/store-links";

const ORGANIZATION_ID = `${SITE_URL}/#organization`;
const APP_ID = `${SITE_URL}/#app`;

const appDescription: Record<Locale, string> = {
  pt: "Jogo de corrida para iOS e Android: fecha um circuito a correr, a caminhar ou de bicicleta e conquista a área num mapa partilhado. Conquistas validadas no servidor, rankings e desafios entre amigos. Feito em Lisboa.",
  en: "Running game for iOS and Android: close a loop running, walking or cycling and claim the area on a shared map. Server-validated claims, rankings and challenges with friends. Made in Lisbon.",
  es: "Juego de running para iOS y Android: cierra un circuito corriendo, caminando o en bicicleta y conquista el área en un mapa compartido. Conquistas validadas en el servidor, rankings y retos con amigos. Hecho en Lisboa.",
};

/** Organization + WebSite + MobileApplication + FAQPage for a home page. */
export function homeJsonLd(locale: Locale) {
  const pageUrl = absoluteUrl(localePath(locale));
  const faq = siteCopy[locale].faq.questions;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": ORGANIZATION_ID,
        name: "Flowtr",
        url: SITE_URL,
        logo: `${SITE_URL}/_assets/flowtr_logo.png`,
        email: "flowtrinfo@gmail.com",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Lisboa",
          addressCountry: "PT",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "Flowtr",
        inLanguage: ["pt-PT", "en", "es"],
        publisher: { "@id": ORGANIZATION_ID },
      },
      {
        "@type": "MobileApplication",
        "@id": APP_ID,
        name: "Flowtr",
        alternateName: brandTitle[locale],
        description: appDescription[locale],
        url: pageUrl,
        image: `${SITE_URL}${OG_IMAGE.url}`,
        operatingSystem: "iOS, Android",
        applicationCategory: "HealthAndFitnessApplication",
        applicationSubCategory: "GameApplication",
        inLanguage: htmlLang(locale),
        downloadUrl: [APP_STORE_URL, GOOGLE_PLAY_URL],
        installUrl: [APP_STORE_URL, GOOGLE_PLAY_URL],
        sameAs: [APP_STORE_URL, GOOGLE_PLAY_URL],
        publisher: { "@id": ORGANIZATION_ID },
        author: { "@id": ORGANIZATION_ID },
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        url: pageUrl,
        inLanguage: htmlLang(locale),
        mainEntity: faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
    ],
  };
}
