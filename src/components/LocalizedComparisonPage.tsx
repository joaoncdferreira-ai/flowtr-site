import { ContentPage, ContentSection } from "@/components/ContentPage";
import {
  CHECKED_ON,
  competitors,
  flowtrFacts,
  notStatedText,
  rowLabels,
  type CompetitorSlug,
  type RowKey,
} from "@/lib/comparisons";
import type { Locale } from "@/lib/site-i18n";

const rowOrder: RowKey[] = [
  "what",
  "claim",
  "price",
  "platforms",
  "activities",
  "where",
  "social",
  "devices",
];

const sourceOrder = ["site", "appStore", "play"] as const;

const pageCopy = {
  pt: {
    eyebrow: "Comparação",
    table: "Lado a lado",
    caption: (name: string) => `Comparação entre a Flowtr e o ${name}`,
    feature: "Característica",
    differences: "Principais diferenças",
    sources: "Fontes",
    sourceNames: {
      site: "Site oficial",
      appStore: "App Store (EUA)",
      play: "Google Play",
    },
    sourcesNote: (date: string) =>
      `Factos sobre o concorrente lidos nas páginas oficiais a ${date}. Preços e funcionalidades podem mudar e variar por país; confirma na página oficial antes de decidir. Os factos da Flowtr vêm das regras da própria app.`,
    flowtrNote:
      "A Flowtr é nossa. Se encontrares algum erro sobre outra app, escreve para flowtrinfo@gmail.com e corrigimos.",
  },
  en: {
    eyebrow: "Comparison",
    table: "Side by side",
    caption: (name: string) => `Comparison between Flowtr and ${name}`,
    feature: "Feature",
    differences: "Main differences",
    sources: "Sources",
    sourceNames: {
      site: "Official website",
      appStore: "App Store (US)",
      play: "Google Play",
    },
    sourcesNote: (date: string) =>
      `Facts about the competitor were read on its official pages on ${date}. Prices and features may change and vary by country; check the official page before deciding. Flowtr's facts come from the app's own rules.`,
    flowtrNote:
      "Flowtr is our app. If you spot a mistake about another app, email flowtrinfo@gmail.com and we will fix it.",
  },
  es: {
    eyebrow: "Comparación",
    table: "Lado a lado",
    caption: (name: string) => `Comparación entre Flowtr y ${name}`,
    feature: "Característica",
    differences: "Principales diferencias",
    sources: "Fuentes",
    sourceNames: {
      site: "Sitio oficial",
      appStore: "App Store (EE. UU.)",
      play: "Google Play",
    },
    sourcesNote: (date: string) =>
      `Los datos del competidor se leyeron en sus páginas oficiales el ${date}. Los precios y las funciones pueden cambiar y variar según el país; compruébalo en la página oficial antes de decidir. Los datos de Flowtr proceden de las reglas de la propia app.`,
    flowtrNote:
      "Flowtr es nuestra app. Si ves un error sobre otra app, escribe a flowtrinfo@gmail.com y lo corregimos.",
  },
} as const;

export const comparisonMeta: Record<
  CompetitorSlug,
  Record<Locale, { title: string; description: string }>
> = {
  intvl: {
    pt: {
      title: "Flowtr vs INTVL: jogos de corrida de conquista de território",
      description:
        "Flowtr e INTVL lado a lado: como se conquista território, preço, plataformas, atividades e onde se joga, com fontes oficiais.",
    },
    en: {
      title: "Flowtr vs INTVL: territory conquest running games compared",
      description:
        "Flowtr and INTVL side by side: how you claim territory, price, platforms, activities and where you play, with official sources.",
    },
    es: {
      title: "Flowtr vs INTVL: juegos de running de conquista de territorio",
      description:
        "Flowtr e INTVL lado a lado: cómo se conquista territorio, precio, plataformas, actividades y dónde se juega, con fuentes oficiales.",
    },
  },
  kyro: {
    pt: {
      title: "Flowtr vs KYRO: jogos de corrida de conquista de território",
      description:
        "Flowtr e KYRO lado a lado: como se conquista território, preço, plataformas, atividades e onde se joga, com fontes oficiais.",
    },
    en: {
      title: "Flowtr vs KYRO: territory conquest running games compared",
      description:
        "Flowtr and KYRO side by side: how you claim territory, price, platforms, activities and where you play, with official sources.",
    },
    es: {
      title: "Flowtr vs KYRO: juegos de running de conquista de territorio",
      description:
        "Flowtr y KYRO lado a lado: cómo se conquista territorio, precio, plataformas, actividades y dónde se juega, con fuentes oficiales.",
    },
  },
  loop: {
    pt: {
      title: "Flowtr vs LOOP: jogos de corrida de conquista de território",
      description:
        "Flowtr e LOOP lado a lado: como se conquista território, preço, plataformas, atividades e onde se joga, com fontes oficiais.",
    },
    en: {
      title: "Flowtr vs LOOP: territory conquest running games compared",
      description:
        "Flowtr and LOOP side by side: how you claim territory, price, platforms, activities and where you play, with official sources.",
    },
    es: {
      title: "Flowtr vs LOOP: juegos de running de conquista de territorio",
      description:
        "Flowtr y LOOP lado a lado: cómo se conquista territorio, precio, plataformas, actividades y dónde se juega, con fuentes oficiales.",
    },
  },
};

function formatDate(locale: Locale) {
  const [y, m, d] = CHECKED_ON.split("-");
  return locale === "en" ? `${y}-${m}-${d}` : `${d}/${m}/${y}`;
}

export function LocalizedComparisonPage({
  locale,
  slug,
}: {
  locale: Locale;
  slug: CompetitorSlug;
}) {
  const copy = pageCopy[locale];
  const competitor = competitors[slug];
  const sourceNumber = (key: (typeof sourceOrder)[number]) =>
    sourceOrder.indexOf(key) + 1;

  return (
    <ContentPage
      locale={locale}
      suffix={`/vs/${slug}`}
      eyebrow={copy.eyebrow}
      title={`Flowtr vs ${competitor.name}`}
      intro={<p>{competitor.intro[locale]}</p>}
    >
      <ContentSection title={copy.table}>
        <div className="-mx-2 overflow-x-auto px-2">
          <table className="w-full min-w-[560px] border-collapse text-left text-sm leading-6">
            <caption className="sr-only">{copy.caption(competitor.name)}</caption>
            <thead>
              <tr className="border-b border-white/[0.12] text-white">
                <th scope="col" className="w-[22%] py-3 pr-4 font-display font-normal">
                  {copy.feature}
                </th>
                <th scope="col" className="w-[39%] py-3 pr-4 font-display font-normal text-coral">
                  Flowtr
                </th>
                <th scope="col" className="w-[39%] py-3 font-display font-normal">
                  {competitor.name}
                </th>
              </tr>
            </thead>
            <tbody>
              {rowOrder.map((row) => {
                const fact = competitor.facts[row];
                return (
                  <tr key={row} className="border-b border-white/[0.06] align-top">
                    <th scope="row" className="py-4 pr-4 font-semibold text-white">
                      {rowLabels[row][locale]}
                    </th>
                    <td className="py-4 pr-4">{flowtrFacts[row][locale]}</td>
                    <td className="py-4">
                      {fact ? (
                        <>
                          {fact.text[locale]}{" "}
                          {fact.sources.map((key) => (
                            <a
                              key={key}
                              href={competitor.sources[key]}
                              target="_blank"
                              rel="noreferrer"
                              className="ml-0.5 align-super text-[11px] text-coral hover:underline"
                              aria-label={`${copy.sources}: ${copy.sourceNames[key]}`}
                            >
                              [{sourceNumber(key)}]
                            </a>
                          ))}
                        </>
                      ) : (
                        <span className="text-fg-dim">{notStatedText[locale]}</span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </ContentSection>

      <ContentSection title={copy.differences}>
        <ul className="list-disc space-y-3 pl-5">
          {competitor.differences.map((item) => (
            <li key={item.en}>{item[locale]}</li>
          ))}
        </ul>
      </ContentSection>

      <ContentSection title={copy.sources}>
        <ol className="list-decimal space-y-2 pl-5">
          {sourceOrder.map((key) => (
            <li key={key}>
              {copy.sourceNames[key]} — {competitor.name}:{" "}
              <a
                className="break-all text-coral hover:underline"
                href={competitor.sources[key]}
                target="_blank"
                rel="noreferrer"
              >
                {competitor.sources[key]}
              </a>
            </li>
          ))}
        </ol>
        <p className="text-sm">{copy.sourcesNote(formatDate(locale))}</p>
        <p className="text-sm">{copy.flowtrNote}</p>
      </ContentSection>
    </ContentPage>
  );
}
