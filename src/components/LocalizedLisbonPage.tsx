import { ContentPage, ContentSection } from "@/components/ContentPage";
import type { Locale } from "@/lib/site-i18n";

// Lisbon landing page. Game facts mirror the in-app rules; no real players,
// routes, territories or ranking positions are shown here.

export const lisbonMeta: Record<Locale, { title: string; description: string }> = {
  pt: {
    title: "Correr e conquistar território em Lisboa — Flowtr",
    description:
      "Como funciona a Flowtr em Lisboa: fecha circuitos a correr no teu bairro, conquista território num mapa partilhado e sobe no ranking da cidade.",
  },
  en: {
    title: "Run and claim territory in Lisbon — Flowtr",
    description:
      "How Flowtr works in Lisbon: close loops running around your neighbourhood, claim territory on a shared map and climb the city ranking.",
  },
  es: {
    title: "Correr y conquistar territorio en Lisboa — Flowtr",
    description:
      "Cómo funciona Flowtr en Lisboa: cierra circuitos corriendo por tu barrio, conquista territorio en un mapa compartido y sube en el ranking de la ciudad.",
  },
};

const copy = {
  pt: {
    eyebrow: "Lisboa",
    title: "Correr e conquistar território em Lisboa",
    intro: [
      "A Flowtr é um jogo de corrida de conquista de território feito em Lisboa. Cada corrida que fecha um circuito transforma a área lá dentro em território teu, num mapa partilhado com quem corre na cidade.",
      "Outros jogadores podem conquistar parte do teu território, e tu podes recuperá-lo. A app não tem anúncios e está disponível para iPhone e Android.",
    ],
    sections: [
      {
        title: "Como funciona na cidade",
        paragraphs: [
          "Carregas em INICIAR e corres. O GPS desenha o percurso no mapa 3D de Lisboa. Quando o percurso fecha um circuito, seja a cruzar o teu próprio rasto ou a voltar a menos de 25 m do início, aparece o botão dourado RECLAMAR TERRITÓRIO.",
          "Para fechar precisas de pelo menos 90 segundos em movimento e uma área de pelo menos 2 500 m². O fecho é sempre manual, e a conquista só entra no mapa depois de validada no servidor.",
          "Se o teu circuito passar por território de outro jogador, ficas com essa parte, desde que a sobreposição tenha pelo menos 20 m² e 5% da área dele. O mesmo pode acontecer-te a ti.",
        ],
      },
      {
        title: "O teu bairro como ponto de partida",
        paragraphs: [
          "Um quarteirão perto de casa já chega para a primeira conquista. Correr à volta de um jardim, de um conjunto de ruas ou de um parque fecha um circuito; voltas seguidas que se sobrepõem ao teu território juntam-se num só.",
          "Na baixa e nas colinas, os circuitos tendem a ser mais curtos; em zonas mais planas e abertas, como a frente ribeirinha ou os parques maiores, é mais fácil desenhar áreas grandes. Escolhe sempre um percurso seguro e respeita as regras de trânsito.",
          "Em várias zonas de Lisboa há Sentinelas: rivais virtuais criados pela Flowtr, sempre identificados como Sentinela · rival virtual. Ocupam território e podem conquistar parte do teu, para haver disputa mesmo antes de outros jogadores correrem perto de ti.",
        ],
      },
      {
        title: "O ranking de Lisboa",
        paragraphs: [
          "No ecrã de rankings, escolhe o âmbito Cidade e seleciona Lisboa. Podes ver a semana, o mês ou desde sempre, e alternar entre os separadores Global, Área, Territórios e Distância. O filtro Amigos mostra só as pessoas que segues.",
          "A corrida conta 100% da área para o ranking global, a caminhada 60% e a bicicleta 50%. Entrar no top 10 da cidade (com pelo menos 20 jogadores) desbloqueia o emblema Elite.",
        ],
      },
    ],
    startTitle: "Como começar",
    steps: [
      "Descarrega a Flowtr no Google Play ou na App Store.",
      "Cria conta e permite a localização durante as atividades.",
      "Carrega em INICIAR e corre um circuito à volta de um quarteirão.",
      "Quando o botão RECLAMAR TERRITÓRIO ficar dourado, toca para confirmar.",
      "Vê o teu território no mapa e a tua posição no ranking de Lisboa.",
    ],
  },
  en: {
    eyebrow: "Lisbon",
    title: "Run and claim territory in Lisbon",
    intro: [
      "Flowtr is a territory conquest running game made in Lisbon. Every run that closes a loop turns the area inside into your territory, on a map shared with everyone running in the city.",
      "Other players can take part of your territory, and you can win it back. The app has no ads and is available for iPhone and Android.",
    ],
    sections: [
      {
        title: "How it works in the city",
        paragraphs: [
          "Tap START and run. GPS draws your route on the 3D map of Lisbon. When the route closes a loop, either by crossing your own trail or by returning within 25 m of the start, the gold CLAIM TERRITORY button appears.",
          "To close a loop you need at least 90 seconds in motion and an area of at least 2,500 m². Closing is always manual, and the claim only reaches the map after the server validates it.",
          "If your loop crosses another player's territory, you take that part, as long as the overlap is at least 20 m² and 5% of their area. The same can happen to you.",
        ],
      },
      {
        title: "Your neighbourhood as a starting point",
        paragraphs: [
          "One block near home is enough for a first claim. Running around a garden, a group of streets or a park closes a loop; later loops that overlap your territory merge into one.",
          "Downtown and on the hills, loops tend to be shorter; in flatter, open areas such as the riverside or the larger parks it is easier to draw big areas. Always choose a safe route and follow traffic rules.",
          "Several zones in Lisbon have Sentinels: virtual rivals created by Flowtr and always labelled Sentinel · virtual rival. They hold territory and may take part of yours, so there is a contest even before other players run near you.",
        ],
      },
      {
        title: "The Lisbon ranking",
        paragraphs: [
          "On the rankings screen, choose the City scope and select Lisbon. You can view this week, this month or all time, and switch between the Global, Area, Territories and Distance tabs. The Friends filter shows only people you follow.",
          "Running counts 100% of the area in the global ranking, walking 60% and cycling 50%. Reaching your city's top 10 (with at least 20 players) unlocks the Elite badge.",
        ],
      },
    ],
    startTitle: "How to start",
    steps: [
      "Download Flowtr on Google Play or the App Store.",
      "Create an account and allow location during activities.",
      "Tap START and run a loop around a block.",
      "When CLAIM TERRITORY turns gold, tap to confirm.",
      "See your territory on the map and your place in the Lisbon ranking.",
    ],
  },
  es: {
    eyebrow: "Lisboa",
    title: "Correr y conquistar territorio en Lisboa",
    intro: [
      "Flowtr es un juego de running de conquista de territorio hecho en Lisboa. Cada carrera que cierra un circuito convierte el área de dentro en territorio tuyo, en un mapa compartido con quienes corren en la ciudad.",
      "Otros jugadores pueden conquistar parte de tu territorio y tú puedes recuperarlo. La app no tiene anuncios y está disponible para iPhone y Android.",
    ],
    sections: [
      {
        title: "Cómo funciona en la ciudad",
        paragraphs: [
          "Pulsa INICIAR y corre. El GPS dibuja el recorrido en el mapa 3D de Lisboa. Cuando el recorrido cierra un circuito, ya sea cruzando tu propio rastro o volviendo a menos de 25 m del inicio, aparece el botón dorado RECLAMAR TERRITORIO.",
          "Para cerrar necesitas al menos 90 segundos en movimiento y un área de al menos 2.500 m². El cierre es siempre manual, y la conquista solo llega al mapa después de que el servidor la valide.",
          "Si tu circuito pasa por territorio de otro jugador, te quedas con esa parte, siempre que la superposición tenga al menos 20 m² y el 5% de su área. Lo mismo te puede pasar a ti.",
        ],
      },
      {
        title: "Tu barrio como punto de partida",
        paragraphs: [
          "Una manzana cerca de casa basta para la primera conquista. Correr alrededor de un jardín, un grupo de calles o un parque cierra un circuito; los siguientes circuitos que se superponen a tu territorio se unen en uno solo.",
          "En el centro y en las colinas, los circuitos suelen ser más cortos; en zonas más llanas y abiertas, como la ribera o los parques grandes, es más fácil dibujar áreas grandes. Elige siempre un recorrido seguro y respeta las normas de tráfico.",
          "En varias zonas de Lisboa hay Centinelas: rivales virtuales creados por Flowtr, siempre identificados como Centinela · rival virtual. Ocupan territorio y pueden conquistar parte del tuyo, para que haya competencia incluso antes de que otros jugadores corran cerca de ti.",
        ],
      },
      {
        title: "El ranking de Lisboa",
        paragraphs: [
          "En la pantalla de rankings, elige el ámbito Ciudad y selecciona Lisboa. Puedes ver la semana, el mes o desde siempre, y cambiar entre las pestañas Global, Área, Territorios y Distancia. El filtro Amigos muestra solo a las personas que sigues.",
          "Corriendo, el 100% del área cuenta para el ranking global; caminando, el 60%; en bicicleta, el 50%. Entrar en el top 10 de tu ciudad (con al menos 20 jugadores) desbloquea la insignia Élite.",
        ],
      },
    ],
    startTitle: "Cómo empezar",
    steps: [
      "Descarga Flowtr en Google Play o en la App Store.",
      "Crea una cuenta y permite la ubicación durante las actividades.",
      "Pulsa INICIAR y corre un circuito alrededor de una manzana.",
      "Cuando RECLAMAR TERRITORIO se ponga dorado, pulsa para confirmar.",
      "Mira tu territorio en el mapa y tu posición en el ranking de Lisboa.",
    ],
  },
} as const;

export function LocalizedLisbonPage({ locale }: { locale: Locale }) {
  const c = copy[locale];
  return (
    <ContentPage
      locale={locale}
      suffix="/lisboa"
      eyebrow={c.eyebrow}
      title={c.title}
      intro={c.intro.map((p) => (
        <p key={p}>{p}</p>
      ))}
    >
      {c.sections.map((section) => (
        <ContentSection key={section.title} title={section.title}>
          {section.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </ContentSection>
      ))}
      <ContentSection title={c.startTitle}>
        <ol className="list-decimal space-y-2 pl-5">
          {c.steps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </ContentSection>
    </ContentPage>
  );
}
