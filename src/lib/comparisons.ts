import type { Locale } from "@/lib/site-i18n";

// Comparison pages: Flowtr vs other territory running games.
//
// Every competitor fact below was read on that app's own website or official
// store listing on CHECKED_ON and carries the source it came from. Anything
// that could not be verified there is left out. Re-check before changing a
// fact; never fill gaps from memory or third-party reviews.

export const CHECKED_ON = "2026-10-26";

export const competitorSlugs = ["intvl", "kyro", "loop"] as const;
export type CompetitorSlug = (typeof competitorSlugs)[number];

export const competitorNames: Record<CompetitorSlug, string> = {
  intvl: "INTVL",
  kyro: "KYRO",
  loop: "LOOP",
};

type L = Record<Locale, string>;
type SourceKey = "site" | "appStore" | "play";

export type RowKey =
  | "what"
  | "claim"
  | "price"
  | "platforms"
  | "activities"
  | "where"
  | "social"
  | "devices";

export const rowLabels: Record<RowKey, L> = {
  what: { pt: "O que é", en: "What it is", es: "Qué es" },
  claim: {
    pt: "Como se conquista",
    en: "How you claim",
    es: "Cómo se conquista",
  },
  price: { pt: "Preço", en: "Price", es: "Precio" },
  platforms: { pt: "Plataformas", en: "Platforms", es: "Plataformas" },
  activities: { pt: "Atividades", en: "Activities", es: "Actividades" },
  where: { pt: "Onde se joga", en: "Where you play", es: "Dónde se juega" },
  social: {
    pt: "Social e competição",
    en: "Social and competition",
    es: "Social y competición",
  },
  devices: {
    pt: "Relógios e integrações",
    en: "Watches and integrations",
    es: "Relojes e integraciones",
  },
};

/** Flowtr's own column: facts from the app's rules screen and this site. */
export const flowtrFacts: Record<RowKey, L> = {
  what: {
    pt: "Jogo de corrida de conquista de território, feito em Lisboa.",
    en: "A territory conquest running game, made in Lisbon.",
    es: "Juego de running de conquista de territorio, hecho en Lisboa.",
  },
  claim: {
    pt: "Fechas um circuito (cruzando o teu rasto ou voltando a menos de 25 m do início) com pelo menos 2 500 m² e 90 segundos em movimento. Confirmas a conquista e o servidor valida-a antes de entrar no mapa.",
    en: "Close a loop (by crossing your own trail or returning within 25 m of the start) of at least 2,500 m² and 90 seconds in motion. You confirm the claim and the server validates it before it reaches the map.",
    es: "Cierras un circuito (cruzando tu rastro o volviendo a menos de 25 m del inicio) de al menos 2.500 m² y 90 segundos en movimiento. Confirmas la conquista y el servidor la valida antes de que llegue al mapa.",
  },
  price: {
    pt: "Grátis e sem anúncios.",
    en: "Free, no ads.",
    es: "Gratis y sin anuncios.",
  },
  platforms: {
    pt: "iPhone e Android.",
    en: "iPhone and Android.",
    es: "iPhone y Android.",
  },
  activities: {
    pt: "Corrida, caminhada e bicicleta no mesmo mapa. O modo é detetado pela velocidade média: a caminhar, 60% da área conta para o ranking global; de bicicleta, 50%.",
    en: "Running, walking and cycling on the same map. The mode is detected from average speed: walking counts 60% of the area in the global ranking, cycling 50%.",
    es: "Running, caminata y bicicleta en el mismo mapa. El modo se detecta por la velocidad media: caminando, el 60% del área cuenta para el ranking global; en bicicleta, el 50%.",
  },
  where: {
    pt: "Mapa mundial. Em zonas de Lisboa há Sentinelas, rivais virtuais identificados como tal.",
    en: "A worldwide map. Zones in Lisbon have Sentinels, virtual rivals that are always labelled as such.",
    es: "Mapa mundial. En zonas de Lisboa hay Centinelas, rivales virtuales identificados como tales.",
  },
  social: {
    pt: "Seguir amigos, rankings por mundo, país, cidade e amigos, duelos 1 contra 1 e desafios de grupo até 50 pessoas.",
    en: "Follow friends, rankings by world, country, city and friends, 1-vs-1 duels and group challenges of up to 50 people.",
    es: "Seguir a amigos, rankings por mundo, país, ciudad y amigos, duelos 1 contra 1 y retos de grupo de hasta 50 personas.",
  },
  devices: {
    pt: "Importação de corridas em GPX para o histórico pessoal (não conquistam território).",
    en: "GPX import of runs into your personal history (imported runs do not claim territory).",
    es: "Importación de carreras en GPX al historial personal (no conquistan territorio).",
  },
};

export type Fact = { text: L; sources: SourceKey[] };

export type Competitor = {
  slug: CompetitorSlug;
  name: string;
  sources: Record<SourceKey, string>;
  intro: L;
  facts: Partial<Record<RowKey, Fact>>;
  differences: L[];
};

const notStated: L = {
  pt: "Não indicado nas páginas oficiais consultadas.",
  en: "Not stated on the official pages we checked.",
  es: "No indicado en las páginas oficiales consultadas.",
};

export const notStatedText = notStated;

export const competitors: Record<CompetitorSlug, Competitor> = {
  intvl: {
    slug: "intvl",
    name: "INTVL",
    sources: {
      site: "https://www.intvl.com.au/",
      appStore: "https://apps.apple.com/us/app/intvl/id6472631698",
      play: "https://play.google.com/store/apps/details?id=com.intvl.app",
    },
    intro: {
      pt: "O INTVL e a Flowtr são jogos de território no mapa real: fechas um circuito e a área lá dentro fica tua. Esta página compara o que cada um diz oficialmente sobre si, sem opiniões sobre qual é melhor.",
      en: "INTVL and Flowtr are both territory games on the real map: close a loop and the area inside is yours. This page compares what each one officially says about itself, without opinions on which is better.",
      es: "INTVL y Flowtr son juegos de territorio en el mapa real: cierras un circuito y el área de dentro es tuya. Esta página compara lo que cada uno dice oficialmente de sí mismo, sin opinar sobre cuál es mejor.",
    },
    facts: {
      what: {
        text: {
          pt: "Jogo no globo real em que cada caminhada, corrida ou volta de bicicleta conta.",
          en: "A game played on the real-world globe where every walk, run or bike ride counts.",
          es: "Un juego en el globo real en el que cada caminata, carrera o salida en bicicleta cuenta.",
        },
        sources: ["appStore"],
      },
      claim: {
        text: {
          pt: "Fechas um circuito no mapa e tudo o que fica dentro passa a ser teu.",
          en: "Close a loop on the map and everything inside is yours.",
          es: "Cierras un circuito en el mapa y todo lo que queda dentro es tuyo.",
        },
        sources: ["site"],
      },
      price: {
        text: {
          pt: "Grátis, com compras na app. Subscrição opcional INTVL Pro (planeador de rotas completo, rankings completos, mais entradas em competições). Na App Store dos EUA, a subscrição anual aparece a 79,99 USD.",
          en: "Free, with in-app purchases. Optional INTVL Pro subscription (full route planner, complete leaderboards, more competition entries). On the US App Store the annual subscription is listed at USD 79.99.",
          es: "Gratis, con compras dentro de la app. Suscripción opcional INTVL Pro (planificador de rutas completo, rankings completos, más participaciones en competiciones). En la App Store de EE. UU. la suscripción anual figura a 79,99 USD.",
        },
        sources: ["appStore", "site"],
      },
      platforms: {
        text: {
          pt: "iOS (iPhone, iPad e Apple Vision) e Android.",
          en: "iOS (iPhone, iPad and Apple Vision) and Android.",
          es: "iOS (iPhone, iPad y Apple Vision) y Android.",
        },
        sources: ["appStore", "play", "site"],
      },
      activities: {
        text: {
          pt: "Corrida, caminhada e bicicleta. Corrida e bicicleta têm cada uma o seu jogo de território.",
          en: "Running, walking and cycling. Runs and rides each have their own territory game.",
          es: "Running, caminata y bicicleta. Carreras y salidas en bici tienen cada una su propio juego de territorio.",
        },
        sources: ["appStore", "site"],
      },
      where: {
        text: {
          pt: "Global. O site indica 182 países em jogo.",
          en: "Global. The site lists 182 countries in play.",
          es: "Global. El sitio indica 182 países en juego.",
        },
        sources: ["site"],
      },
      social: {
        text: {
          pt: "Rankings do nível local ao global, clubes e competições com entradas para prémios.",
          en: "Leaderboards from local to global, clubs and competitions with prize entries.",
          es: "Rankings desde el nivel local al global, clubes y competiciones con participaciones a premios.",
        },
        sources: ["appStore", "site"],
      },
      devices: {
        text: {
          pt: "Apple Watch, Garmin, COROS, Polar, Suunto, Fitbit e ciclocomputadores Hammerhead e Wahoo. Envia atividades para o Strava, mas não importa do Strava.",
          en: "Apple Watch, Garmin, COROS, Polar, Suunto, Fitbit and Hammerhead and Wahoo bike computers. Sends activities to Strava, but does not import from Strava.",
          es: "Apple Watch, Garmin, COROS, Polar, Suunto, Fitbit y ciclocomputadores Hammerhead y Wahoo. Envía actividades a Strava, pero no importa desde Strava.",
        },
        sources: ["site"],
      },
    },
    differences: [
      {
        pt: "O INTVL joga-se em muitos mais países e liga-se a relógios e ciclocomputadores. Tem uma subscrição opcional; a Flowtr é gratuita e sem anúncios.",
        en: "INTVL is played in many more countries and connects to watches and bike computers. It has an optional subscription; Flowtr is free with no ads.",
        es: "INTVL se juega en muchos más países y se conecta a relojes y ciclocomputadores. Tiene una suscripción opcional; Flowtr es gratis y sin anuncios.",
      },
      {
        pt: "No INTVL, corrida e bicicleta são jogos separados. Na Flowtr, corrida, caminhada e bicicleta partilham o mesmo mapa, com pesos diferentes no ranking global.",
        en: "In INTVL, runs and rides are separate games. In Flowtr, running, walking and cycling share one map, with different weights in the global ranking.",
        es: "En INTVL, carreras y bicicleta son juegos separados. En Flowtr, running, caminata y bicicleta comparten el mismo mapa, con pesos distintos en el ranking global.",
      },
      {
        pt: "A Flowtr foi feita em Lisboa e tem Sentinelas (rivais virtuais) em zonas da cidade, para haver disputa mesmo antes de outros jogadores correrem perto de ti.",
        en: "Flowtr was made in Lisbon and has Sentinels (virtual rivals) in zones of the city, so there is a contest even before other players run near you.",
        es: "Flowtr se hizo en Lisboa y tiene Centinelas (rivales virtuales) en zonas de la ciudad, para que haya competencia incluso antes de que otros jugadores corran cerca de ti.",
      },
    ],
  },
  kyro: {
    slug: "kyro",
    name: "KYRO",
    sources: {
      site: "https://kyro.team/",
      appStore:
        "https://apps.apple.com/us/app/kyro-run-claim-territory/id6755943100",
      play: "https://play.google.com/store/apps/details?id=com.kyroinc.kyro_frontend",
    },
    intro: {
      pt: "O KYRO e a Flowtr transformam corridas em território no mapa da cidade. Esta página compara o que cada um diz oficialmente sobre si, sem opiniões sobre qual é melhor.",
      en: "KYRO and Flowtr both turn runs into territory on the city map. This page compares what each one officially says about itself, without opinions on which is better.",
      es: "KYRO y Flowtr convierten las carreras en territorio en el mapa de la ciudad. Esta página compara lo que cada uno dice oficialmente de sí mismo, sin opinar sobre cuál es mejor.",
    },
    facts: {
      what: {
        text: {
          pt: "Registo de corridas com GPS combinado com um jogo de território no mapa da tua cidade.",
          en: "GPS run tracking combined with a territory game on your city map.",
          es: "Registro de carreras con GPS combinado con un juego de territorio en el mapa de tu ciudad.",
        },
        sources: ["appStore"],
      },
      claim: {
        text: {
          pt: "Corres à volta de uma área e conquistas o terreno lá dentro; segundo o site, não tens de acabar exatamente onde começaste.",
          en: "Run around an area to claim the ground inside; according to the site, you don't have to finish exactly where you started.",
          es: "Corres alrededor de un área y conquistas el terreno de dentro; según el sitio, no tienes que terminar exactamente donde empezaste.",
        },
        sources: ["site", "appStore"],
      },
      price: {
        text: {
          pt: "Grátis, com compras na app. KYRO PRO inclui mapa de calor e replay 3D. Na App Store dos EUA: 3,99 USD por semana, 11,90 USD por mês ou planos anuais de 59,99 e 89,90 USD.",
          en: "Free, with in-app purchases. KYRO PRO includes heatmap and 3D replay. On the US App Store: USD 3.99 weekly, USD 11.90 monthly, or annual plans at USD 59.99 and 89.90.",
          es: "Gratis, con compras dentro de la app. KYRO PRO incluye mapa de calor y repetición 3D. En la App Store de EE. UU.: 3,99 USD por semana, 11,90 USD al mes o planes anuales de 59,99 y 89,90 USD.",
        },
        sources: ["appStore", "site"],
      },
      platforms: {
        text: {
          pt: "iOS e Android.",
          en: "iOS and Android.",
          es: "iOS y Android.",
        },
        sources: ["appStore", "play", "site"],
      },
      activities: {
        text: {
          pt: "Corrida.",
          en: "Running.",
          es: "Running.",
        },
        sources: ["appStore", "site"],
      },
      where: {
        text: {
          pt: "O site lista sobretudo cidades da Coreia do Sul e do Japão. A empresa, Movements Lab Co., Ltd., tem sede em Seul.",
          en: "The site mainly lists cities in South Korea and Japan. The company, Movements Lab Co., Ltd., is based in Seoul.",
          es: "El sitio enumera sobre todo ciudades de Corea del Sur y Japón. La empresa, Movements Lab Co., Ltd., tiene sede en Seúl.",
        },
        sources: ["site"],
      },
      social: {
        text: {
          pt: "Competir com amigos e clubes.",
          en: "Compete with friends and clubs.",
          es: "Competir con amigos y clubes.",
        },
        sources: ["appStore"],
      },
      devices: {
        text: {
          pt: "Apple Watch, Garmin e Suunto.",
          en: "Apple Watch, Garmin and Suunto.",
          es: "Apple Watch, Garmin y Suunto.",
        },
        sources: ["appStore"],
      },
    },
    differences: [
      {
        pt: "O KYRO centra-se na corrida e em cidades da Coreia do Sul e do Japão, com subscrição opcional KYRO PRO. A Flowtr aceita corrida, caminhada e bicicleta, é gratuita e sem anúncios, e nasceu em Lisboa.",
        en: "KYRO focuses on running and on cities in South Korea and Japan, with an optional KYRO PRO subscription. Flowtr accepts running, walking and cycling, is free with no ads, and was born in Lisbon.",
        es: "KYRO se centra en el running y en ciudades de Corea del Sur y Japón, con suscripción opcional KYRO PRO. Flowtr acepta running, caminata y bicicleta, es gratis y sin anuncios, y nació en Lisboa.",
      },
      {
        pt: "O KYRO liga-se a relógios Apple Watch, Garmin e Suunto. Na Flowtr, a atividade é registada no telemóvel e cada conquista é validada no servidor.",
        en: "KYRO connects to Apple Watch, Garmin and Suunto watches. In Flowtr, the activity is recorded on your phone and every claim is validated on the server.",
        es: "KYRO se conecta a relojes Apple Watch, Garmin y Suunto. En Flowtr, la actividad se registra en el teléfono y cada conquista se valida en el servidor.",
      },
    ],
  },
  loop: {
    slug: "loop",
    name: "LOOP",
    sources: {
      site: "https://loop-outdoor.com/",
      appStore:
        "https://apps.apple.com/us/app/loop-outdoor-running-game/id6753897947",
      play: "https://play.google.com/store/apps/details?id=com.ethadix.loop",
    },
    intro: {
      pt: "O LOOP (LOOP Outdoor Running Game) e a Flowtr usam circuitos no mapa para conquistar território. Esta página compara o que cada um diz oficialmente sobre si, sem opiniões sobre qual é melhor.",
      en: "LOOP (LOOP Outdoor Running Game) and Flowtr both use loops on the map to claim territory. This page compares what each one officially says about itself, without opinions on which is better.",
      es: "LOOP (LOOP Outdoor Running Game) y Flowtr usan circuitos en el mapa para conquistar territorio. Esta página compara lo que cada uno dice oficialmente de sí mismo, sin opinar sobre cuál es mejor.",
    },
    facts: {
      what: {
        text: {
          pt: "Jogo de corrida e caminhada ao ar livre que mistura fitness com estratégia.",
          en: "An outdoor running and walking game that mixes fitness with strategy.",
          es: "Un juego de running y caminata al aire libre que mezcla fitness y estrategia.",
        },
        sources: ["appStore", "site"],
      },
      claim: {
        text: {
          pt: "Desenhas circuitos no mapa com movimento real para conquistar território para a tua equipa; quanto mais área, mais pontos. Cada jogo tem duração e tamanho de campo escolhidos por quem joga.",
          en: "Draw loops on the map with real movement to claim territory for your team; more area means a higher score. Players choose each game's length and field size.",
          es: "Dibujas circuitos en el mapa con movimiento real para conquistar territorio para tu equipo; más área, más puntos. Cada partida tiene la duración y el tamaño de campo que eligen los jugadores.",
        },
        sources: ["appStore", "site"],
      },
      price: {
        text: {
          pt: "Grátis; a App Store não lista compras na app.",
          en: "Free; the App Store lists no in-app purchases.",
          es: "Gratis; la App Store no muestra compras dentro de la app.",
        },
        sources: ["appStore"],
      },
      platforms: {
        text: {
          pt: "iOS, Android e browser (o próprio site diz que o browser não é recomendado).",
          en: "iOS, Android and web browser (the site itself says the browser is not recommended).",
          es: "iOS, Android y navegador (el propio sitio dice que el navegador no es recomendable).",
        },
        sources: ["site", "appStore", "play"],
      },
      activities: {
        text: {
          pt: "Corrida e caminhada; alguns jogos permitem transportes públicos ou bicicleta.",
          en: "Running and walking; some games allow public transport or bikes.",
          es: "Running y caminata; algunas partidas permiten transporte público o bicicleta.",
        },
        sources: ["appStore"],
      },
      where: {
        text: {
          pt: "Em qualquer lado: cidade, bairro ou parque.",
          en: "Anywhere: your city, neighbourhood or park.",
          es: "En cualquier lugar: ciudad, barrio o parque.",
        },
        sources: ["appStore"],
      },
      social: {
        text: {
          pt: "A solo ou em equipas; o site tem calendário de eventos, Discord e um clube no Strava.",
          en: "Solo or in teams; the site links an events calendar, a Discord and a Strava club.",
          es: "En solitario o por equipos; el sitio enlaza un calendario de eventos, un Discord y un club en Strava.",
        },
        sources: ["appStore", "site"],
      },
    },
    differences: [
      {
        pt: "O LOOP organiza-se em jogos com duração e campo definidos, a solo ou em equipas. Na Flowtr, o território fica num mapa partilhado e permanente até outro jogador o conquistar.",
        en: "LOOP is organised in games with a set length and field, solo or in teams. In Flowtr, territory stays on a shared, persistent map until another player takes it.",
        es: "LOOP se organiza en partidas con duración y campo definidos, en solitario o por equipos. En Flowtr, el territorio permanece en un mapa compartido y persistente hasta que otro jugador lo conquista.",
      },
      {
        pt: "Ambas são gratuitas. A Flowtr junta rankings por cidade, país e amigos, desafios entre amigos e Sentinelas em Lisboa.",
        en: "Both are free. Flowtr adds rankings by city, country and friends, challenges between friends and Sentinels in Lisbon.",
        es: "Ambas son gratuitas. Flowtr añade rankings por ciudad, país y amigos, retos entre amigos y Centinelas en Lisboa.",
      },
    ],
  },
};

export function isCompetitorSlug(value: string): value is CompetitorSlug {
  return (competitorSlugs as readonly string[]).includes(value);
}
