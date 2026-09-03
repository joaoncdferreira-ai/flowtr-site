export const locales = ["pt", "en", "es"] as const;

export type Locale = (typeof locales)[number];

export const localeInfo: Record<
  Locale,
  { label: string; htmlLang: string; path: string }
> = {
  pt: { label: "PT", htmlLang: "pt-PT", path: "" },
  en: { label: "EN", htmlLang: "en", path: "/en" },
  es: { label: "ES", htmlLang: "es", path: "/es" },
};

export function localePath(locale: Locale, suffix = "") {
  return `${localeInfo[locale].path}${suffix}` || "/";
}

export const siteCopy = {
  pt: {
    nav: {
      homeLabel: "Flowtr — início",
      what: "O que é",
      how: "Como se joga",
      action: "Em ação",
      faq: "FAQ",
      notify: "App Store",
    },
    hero: {
      eyebrow: "Já disponível na App Store",
      headline: ["Corre.", "Conquista.", "Domina."],
      body:
        "Fecha um percurso, reclama a área no mapa e tenta mantê-la. Outros corredores podem conquistar o que é teu.",
      primary: "Descarregar na App Store",
      secondary: "Como funciona",
      status: ["iPhone disponível", "Android a seguir", "Grátis · sem anúncios"],
      conquered: "CONQUISTADO",
      videoLabel:
        "Animação da Flowtr com uma corrida a fechar e conquistar território",
    },
    stat: [
      "GPS APENAS DURANTE A CORRIDA · SEM ANÚNCIOS",
      "DISPONÍVEL NA APP STORE · GOOGLE PLAY A SEGUIR",
      "O TERRITÓRIO É TEU ATÉ OUTRO CORREDOR O CONQUISTAR",
      "FEITO EM LISBOA · 38.7223°N 9.1393°W",
    ],
    what: {
      eyebrow: "O que é",
      title: "A tua corrida muda o mapa.",
      highlight: "muda o mapa",
      description:
        "Corres, fechas uma área e tentas mantê-la. O mapa é partilhado com os outros corredores.",
      liveLabel: "Corrida em curso",
      routeLabel: "GPS · percurso em tempo real",
      socialLabel: "Cidade partilhada",
      share: {
        eyebrow: "Partilha",
        title: "A corrida já sai pronta para partilhar.",
        body:
          "A Flowtr transforma o teu percurso num vídeo vertical com mapa, território e estatísticas — pronto para uma Story ou uma mensagem.",
        note: "Vídeo real gerado pela app · 7 segundos",
        videoLabel:
          "Vídeo vertical real gerado pela Flowtr com o percurso, território e estatísticas de uma corrida",
      },
      features: [
        {
          title: "Fecha o percurso",
          body:
            "O GPS desenha o caminho. Quando fechas uma área válida, podes reclamá-la e vê-la no mapa.",
        },
        {
          title: "Corridas validadas",
          body:
            "A Flowtr verifica o sinal GPS e a velocidade antes de uma corrida contar para o jogo.",
        },
        {
          title: "Território disputado",
          body:
            "Outros corredores podem conquistar partes do que é teu. Podes expandir, recuperar e defender a tua área.",
        },
        {
          title: "Tudo no Diário",
          body:
            "Corridas, conquistas, desafios e território perdido ficam reunidos no mesmo sítio.",
        },
        {
          title: "Rankings e desafios",
          body:
            "Compara resultados no mundo, na tua cidade ou entre amigos. Cria duelos e desafios de grupo.",
        },
        {
          title: "Tu decides o que partilhas",
          body:
            "Não há anúncios nem venda de dados. Os dados de utilização e diagnóstico são opcionais; só partilhas uma corrida quando escolhes fazê-lo.",
        },
      ],
    },
    how: {
      eyebrow: "Como se joga",
      title: "Do percurso ao território em três passos.",
      highlight: "três passos",
      description:
        "Escolhes o caminho. A Flowtr regista a corrida, confirma a área e atualiza o mapa da cidade.",
      steps: [
        {
          title: "Fecha o percurso",
          body:
            "Corre com o ecrã ligado ou bloqueado. O GPS desenha o caminho e, quando o percurso fecha sobre si próprio, tens uma área para reclamar.",
          aria:
            "Percurso a ser desenhado sobre o mapa 3D de Lisboa até fechar um circuito",
        },
        {
          title: "Reclama o território",
          body:
            "A área fechada passa a ser tua no mapa partilhado — visível para toda a gente que corre na tua cidade.",
          aria:
            "Circuito fechado no mapa de Lisboa com a área conquistada a ser preenchida",
        },
        {
          title: "Defende o teu lugar",
          body:
            "Outros corredores podem conquistar o que é teu. Vês onde estás no ranking da tua cidade, semana a semana.",
          aria:
            "Ranking semanal de Lisboa com a tua posição destacada a subir",
        },
      ],
    },
    gallery: {
      eyebrow: "A aplicação",
      title: "A Flowtr, tal como está hoje.",
      highlight: "tal como está",
      description:
        "Ecrãs da versão atual: centro de comando, perfil, mapa, revisão e vídeo de partilha.",
      badgeIntro: "Emblemas desbloqueados a correr",
      shots: [
        {
          caption: "O menu",
          alt: "Centro de comando da Flowtr em inglês",
        },
        {
          caption: "O perfil",
          alt: "Página de perfil atual da Flowtr em inglês",
        },
        { caption: "O mapa", alt: "Mapa 3D atual da Flowtr em inglês" },
        {
          caption: "A revisão",
          alt: "Revisão em inglês de uma corrida com um percurso fechado na Flowtr",
        },
        {
          caption: "A partilha",
          alt: "Vídeo real de uma corrida gerado pela Flowtr e pronto a partilhar",
        },
      ],
      badges: [
        {
          name: "Primeiro passo",
          desc: "O teu primeiro território conquistado.",
        },
        { name: "Conquistador", desc: "10 territórios conquistados." },
        { name: "Senhor da Terra", desc: "10 hectares acumulados." },
        { name: "Maratonista", desc: "42 km percorridos no total." },
        { name: "Em chamas", desc: "7 dias de corridas seguidas." },
        { name: "Defensor", desc: "30 dias sem perder um território." },
        { name: "Vingador", desc: "Um território roubado e reconquistado." },
        { name: "Elite", desc: "Entraste no Top 10 da tua cidade." },
      ],
    },
    technology: {
      eyebrow: "Antes de contar",
      title: "Cada conquista passa por verificações.",
      highlight: "verificações",
      description:
        "A Flowtr confirma o percurso e a área antes de atualizar o mapa.",
      items: [
        {
          title: "Sinal GPS",
          body:
            "A Flowtr reduz o ruído e os saltos de posição antes de guardar o percurso.",
        },
        {
          title: "Área válida",
          body:
            "O percurso tem de fechar uma área e cumprir as regras de distância, forma e sobreposição.",
        },
        {
          title: "Validação no servidor",
          body:
            "Velocidades impossíveis, saltos de localização e outros sinais de manipulação podem invalidar a corrida.",
        },
      ],
    },
    retention: {
      eyebrow: "Para voltar ao mapa",
      title: "A corrida termina.",
      highlight: "A disputa fica.",
      description:
        "Se alguém conquistar uma área tua, podes recuperá-la. Se um amigo te desafiar, a próxima corrida já conta.",
      cards: [
        {
          eyebrow: "Desafios",
          title: "Duelos e desafios de grupo",
          body:
            "Escolhe a duração, convida os participantes e deixa cada corrida contar para o resultado.",
          metric: "1 contra 1 · grupos até 50",
        },
        {
          eyebrow: "Rankings",
          title: "Mundo, cidade ou amigos",
          body:
            "Compara área, distância e território na semana, no mês ou desde o início.",
          metric: "mundo · cidade · amigos",
        },
        {
          eyebrow: "Progresso",
          title: "Emblemas, séries e Diário",
          body:
            "Vê o que conquistaste, quantos dias levas a correr e o que os rivais te tiraram.",
          metric: "emblemas · séries · diário",
        },
        {
          eyebrow: "Partilha",
          title: "Vídeo, imagem ou autocolante",
          body:
            "Cria uma peça pronta a partilhar a partir da corrida ou do resultado de um desafio.",
          metric: "vídeo · imagem · autocolante",
        },
      ],
    },
    faq: {
      eyebrow: "Perguntas frequentes",
      title: "O que convém saber antes de começares.",
      highlight: "antes de começares",
      description: "Localização, privacidade, preço e lançamento.",
      questions: [
        {
          question: "Tenho de deixar o ecrã ligado durante a corrida?",
          answer:
            "Não. Depois de iniciares uma corrida, a Flowtr continua a registá-la com o ecrã bloqueado. No Android, vês uma notificação enquanto o GPS está ativo. Terminar a corrida termina também esse acompanhamento.",
        },
        {
          question: "O meu percurso fica público?",
          answer:
            "O mapa partilhado mostra os territórios conquistados, a tua alcunha, cor e foto de perfil. O percurso completo não é mostrado aos outros jogadores. Só criamos um vídeo público da corrida se escolheres partilhá-lo.",
        },
        {
          question: "Preciso de fechar um circuito?",
          answer:
            "Para conquistar território, sim: a corrida tem de formar uma área válida. A aplicação ajuda-te a perceber quando podes fechar e, no fim, confirma o resultado antes de o guardar.",
        },
        {
          question: "A Flowtr é paga?",
          answer:
            "O lançamento é gratuito e sem anúncios. Se isso mudar no futuro, explicaremos primeiro o que muda e o que continua gratuito.",
        },
        {
          question: "Quando chega ao iPhone e Android?",
          answer:
            "A versão para iPhone já está disponível na App Store. A versão Android chegará a seguir à Google Play.",
        },
      ],
    },
    waitlist: {
      eyebrow: "App Store",
      title: "A cidade está",
      highlight: "por conquistar.",
      description:
        "Descarrega a Flowtr gratuitamente no iPhone e transforma a tua próxima corrida em território.",
      success: "Está feito. Avisamos-te quando sair.",
      emailLabel: "Email",
      websiteLabel: "Website",
      placeholder: "o-teu-email@dominio.pt",
      sending: "A enviar…",
      submit: "Descarregar na App Store",
      error: "Algo correu mal. Tenta de novo em alguns segundos.",
      note: "Grátis · sem anúncios · instalação através da App Store.",
    },
    footer: {
      madeIn: "Feito em Lisboa · por corredores",
      support: "Suporte",
      privacy: "Privacidade",
      terms: "Termos",
      deleteAccount: "Eliminar conta",
    },
  },
  en: {
    nav: {
      homeLabel: "Flowtr — home",
      what: "What it is",
      how: "How it works",
      action: "In action",
      faq: "FAQ",
      notify: "App Store",
    },
    hero: {
      eyebrow: "Now available on the App Store",
      headline: ["Run.", "Claim.", "Rule."],
      body:
        "Close a route, claim the area on the map and try to keep it. Other runners can take what is yours.",
      primary: "Download on the App Store",
      secondary: "How it works",
      status: ["iPhone available", "Android next", "Free · no ads"],
      conquered: "CLAIMED",
      videoLabel:
        "Flowtr animation showing a run closing and claiming territory",
    },
    stat: [
      "GPS ONLY DURING A RUN · NO ADS",
      "AVAILABLE ON THE APP STORE · GOOGLE PLAY NEXT",
      "THE TERRITORY IS YOURS UNTIL ANOTHER RUNNER TAKES IT",
      "MADE IN LISBON · 38.7223°N 9.1393°W",
    ],
    what: {
      eyebrow: "What it is",
      title: "Your run changes the map.",
      highlight: "changes the map",
      description:
        "Run, close an area and try to keep it. The map is shared with other runners.",
      liveLabel: "Run in progress",
      routeLabel: "GPS · live route",
      socialLabel: "Shared city",
      share: {
        eyebrow: "Sharing",
        title: "Your run comes out ready to share.",
        body:
          "Flowtr turns your route into a vertical video with the map, territory and stats — ready for a Story or a message.",
        note: "Real video generated by the app · 7 seconds",
        videoLabel:
          "A real vertical video generated by Flowtr with a run route, territory and stats",
      },
      features: [
        {
          title: "Close the route",
          body:
            "GPS draws your path. When you close a valid area, you can claim it and see it on the map.",
        },
        {
          title: "Validated runs",
          body:
            "Flowtr checks GPS signal and speed before a run counts towards the game.",
        },
        {
          title: "Contested territory",
          body:
            "Other runners can take parts of what is yours. Expand, recover and defend your area.",
        },
        {
          title: "Everything in the Diary",
          body:
            "Runs, claims, challenges and lost territory are kept in one place.",
        },
        {
          title: "Rankings and challenges",
          body:
            "Compare results worldwide, in your city or with friends. Create duels and group challenges.",
        },
        {
          title: "You choose what to share",
          body:
            "No ads and no data sales. Usage and diagnostic data are optional; a run is shared only when you choose.",
        },
      ],
    },
    how: {
      eyebrow: "How it works",
      title: "From route to territory in three steps.",
      highlight: "three steps",
      description:
        "Choose the path. Flowtr records the run, checks the area and updates the city map.",
      steps: [
        {
          title: "Close the route",
          body:
            "Run with the screen on or locked. GPS draws your path and, once it closes back on itself, you have an area to claim.",
          aria:
            "A route being drawn over a 3D map of Lisbon until it closes",
        },
        {
          title: "Claim the territory",
          body:
            "The closed area becomes yours on the shared map, visible to everyone running in your city.",
          aria:
            "A closed route on the Lisbon map filling with claimed territory",
        },
        {
          title: "Defend your place",
          body:
            "Other runners can take what is yours. See where you stand in your city ranking every week.",
          aria:
            "Weekly Lisbon ranking with your highlighted position moving up",
        },
      ],
    },
    gallery: {
      eyebrow: "The app",
      title: "Flowtr, as it looks today.",
      highlight: "as it looks today",
      description:
        "Current screens: Command Center, profile, map, run review and a real sharing video.",
      badgeIntro: "Badges earned by running",
      shots: [
        {
          caption: "The menu",
          alt: "Current Flowtr Command Center in English",
        },
        {
          caption: "The profile",
          alt: "Current Flowtr profile screen in English",
        },
        { caption: "The map", alt: "Current Flowtr 3D map in English" },
        {
          caption: "The review",
          alt: "English run review with a closed route in Flowtr",
        },
        {
          caption: "The share",
          alt: "A real run video generated by Flowtr and ready to share",
        },
      ],
      badges: [
        { name: "First step", desc: "Your first claimed territory." },
        { name: "Conqueror", desc: "10 territories claimed." },
        { name: "Land ruler", desc: "10 hectares accumulated." },
        { name: "Marathoner", desc: "42 km run in total." },
        { name: "On fire", desc: "7 consecutive running days." },
        { name: "Defender", desc: "A territory held for 30 days." },
        { name: "Avenger", desc: "A stolen territory reclaimed." },
        { name: "Elite", desc: "You reached your city's Top 10." },
      ],
    },
    technology: {
      eyebrow: "Before it counts",
      title: "Every claim is checked.",
      highlight: "checked",
      description:
        "Flowtr verifies the route and area before updating the map.",
      items: [
        {
          title: "GPS signal",
          body:
            "Flowtr reduces noise and position jumps before saving the route.",
        },
        {
          title: "Valid area",
          body:
            "The route must close an area and meet distance, shape and overlap rules.",
        },
        {
          title: "Server validation",
          body:
            "Impossible speeds, location jumps and other signs of manipulation can invalidate a run.",
        },
      ],
    },
    retention: {
      eyebrow: "A reason to return",
      title: "The run ends.",
      highlight: "The contest does not.",
      description:
        "If someone takes one of your areas, you can win it back. If a friend challenges you, your next run already counts.",
      cards: [
        {
          eyebrow: "Challenges",
          title: "Duels and group challenges",
          body:
            "Choose the duration, invite people and let every run count towards the result.",
          metric: "1 vs 1 · groups up to 50",
        },
        {
          eyebrow: "Rankings",
          title: "World, city or friends",
          body:
            "Compare area, distance and territory by week, month or all time.",
          metric: "world · city · friends",
        },
        {
          eyebrow: "Progress",
          title: "Badges, streaks and Diary",
          body:
            "See what you claimed, how many days you have run and what rivals took from you.",
          metric: "badges · streaks · diary",
        },
        {
          eyebrow: "Sharing",
          title: "Video, image or sticker",
          body:
            "Create something ready to share from a run or a challenge result.",
          metric: "video · image · sticker",
        },
      ],
    },
    faq: {
      eyebrow: "Frequently asked questions",
      title: "What to know before you start.",
      highlight: "before you start",
      description: "Location, privacy, pricing and launch.",
      questions: [
        {
          question: "Do I need to keep the screen on during a run?",
          answer:
            "No. Once you start a run, Flowtr keeps recording with the screen locked. On Android, a notification is shown while GPS is active. Ending the run also ends that tracking.",
        },
        {
          question: "Is my route public?",
          answer:
            "The shared map shows claimed territories, your nickname, colour and profile picture. Other players do not see the full route. A public run video is created only when you choose to share it.",
        },
        {
          question: "Do I need to close a loop?",
          answer:
            "Yes, to claim territory the run must form a valid area. The app helps you see when you can close it and checks the result before saving.",
        },
        {
          question: "Is Flowtr paid?",
          answer:
            "Flowtr is free and has no ads at launch. If that changes, we will first explain what changes and what remains free.",
        },
        {
          question: "When is it coming to iPhone and Android?",
          answer:
            "The iPhone version is now available on the App Store. Android is coming next on Google Play.",
        },
      ],
    },
    waitlist: {
      eyebrow: "App Store",
      title: "The city is",
      highlight: "yours to claim.",
      description:
        "Download Flowtr for free on iPhone and turn your next run into territory.",
      success: "Done. We will tell you when it launches.",
      emailLabel: "Email",
      websiteLabel: "Website",
      placeholder: "your-email@domain.com",
      sending: "Sending…",
      submit: "Download on the App Store",
      error: "Something went wrong. Try again in a few seconds.",
      note: "Free · no ads · secure install through the App Store.",
    },
    footer: {
      madeIn: "Made in Lisbon · by runners",
      support: "Support",
      privacy: "Privacy",
      terms: "Terms",
      deleteAccount: "Delete account",
    },
  },
  es: {
    nav: {
      homeLabel: "Flowtr — inicio",
      what: "Qué es",
      how: "Cómo se juega",
      action: "En acción",
      faq: "FAQ",
      notify: "App Store",
    },
    hero: {
      eyebrow: "Ya disponible en la App Store",
      headline: ["Corre.", "Conquista.", "Domina."],
      body:
        "Cierra un recorrido, reclama el área en el mapa e intenta conservarla. Otros corredores pueden conquistar lo que es tuyo.",
      primary: "Descargar en la App Store",
      secondary: "Cómo funciona",
      status: ["iPhone disponible", "Android después", "Gratis · sin anuncios"],
      conquered: "CONQUISTADO",
      videoLabel:
        "Animación de Flowtr con una carrera que cierra y conquista territorio",
    },
    stat: [
      "GPS SOLO DURANTE LA CARRERA · SIN ANUNCIOS",
      "DISPONIBLE EN LA APP STORE · GOOGLE PLAY DESPUÉS",
      "EL TERRITORIO ES TUYO HASTA QUE OTRO CORREDOR LO CONQUISTE",
      "HECHO EN LISBOA · 38.7223°N 9.1393°W",
    ],
    what: {
      eyebrow: "Qué es",
      title: "Tu carrera cambia el mapa.",
      highlight: "cambia el mapa",
      description:
        "Corres, cierras un área e intentas conservarla. El mapa se comparte con otros corredores.",
      liveLabel: "Carrera en curso",
      routeLabel: "GPS · recorrido en directo",
      socialLabel: "Ciudad compartida",
      share: {
        eyebrow: "Compartir",
        title: "Tu carrera sale lista para compartir.",
        body:
          "Flowtr convierte tu recorrido en un vídeo vertical con el mapa, el territorio y las estadísticas — listo para una Story o un mensaje.",
        note: "Vídeo real generado por la app · 7 segundos",
        videoLabel:
          "Vídeo vertical real generado por Flowtr con el recorrido, el territorio y las estadísticas de una carrera",
      },
      features: [
        {
          title: "Cierra el recorrido",
          body:
            "El GPS dibuja tu camino. Cuando cierras un área válida, puedes reclamarla y verla en el mapa.",
        },
        {
          title: "Carreras validadas",
          body:
            "Flowtr comprueba la señal GPS y la velocidad antes de que una carrera cuente para el juego.",
        },
        {
          title: "Territorio disputado",
          body:
            "Otros corredores pueden conquistar partes de lo que es tuyo. Amplía, recupera y defiende tu área.",
        },
        {
          title: "Todo en el Diario",
          body:
            "Carreras, conquistas, retos y territorio perdido quedan reunidos en un solo lugar.",
        },
        {
          title: "Rankings y retos",
          body:
            "Compara resultados en el mundo, en tu ciudad o con amigos. Crea duelos y retos de grupo.",
        },
        {
          title: "Tú decides qué compartes",
          body:
            "Sin anuncios ni venta de datos. Los datos de uso y diagnóstico son opcionales; solo compartes una carrera cuando quieres.",
        },
      ],
    },
    how: {
      eyebrow: "Cómo se juega",
      title: "Del recorrido al territorio en tres pasos.",
      highlight: "tres pasos",
      description:
        "Elige el camino. Flowtr registra la carrera, comprueba el área y actualiza el mapa de la ciudad.",
      steps: [
        {
          title: "Cierra el recorrido",
          body:
            "Corre con la pantalla encendida o bloqueada. El GPS dibuja el camino y, cuando se cierra sobre sí mismo, tienes un área que reclamar.",
          aria:
            "Un recorrido dibujándose sobre el mapa 3D de Lisboa hasta cerrar un circuito",
        },
        {
          title: "Reclama el territorio",
          body:
            "El área cerrada pasa a ser tuya en el mapa compartido, visible para quienes corren en tu ciudad.",
          aria:
            "Circuito cerrado en el mapa de Lisboa con el área conquistada llenándose",
        },
        {
          title: "Defiende tu posición",
          body:
            "Otros corredores pueden conquistar lo que es tuyo. Comprueba cada semana tu posición en el ranking de la ciudad.",
          aria:
            "Ranking semanal de Lisboa con tu posición destacada subiendo",
        },
      ],
    },
    gallery: {
      eyebrow: "La aplicación",
      title: "Flowtr, tal como es hoy.",
      highlight: "tal como es hoy",
      description:
        "Pantallas actuales: centro de mando, perfil, mapa, revisión y un vídeo real para compartir.",
      badgeIntro: "Insignias desbloqueadas corriendo",
      shots: [
        {
          caption: "El menú",
          alt: "Centro de mando actual de Flowtr en inglés",
        },
        {
          caption: "El perfil",
          alt: "Pantalla de perfil actual de Flowtr en inglés",
        },
        { caption: "El mapa", alt: "Mapa 3D actual de Flowtr en inglés" },
        {
          caption: "La revisión",
          alt: "Revisión en inglés de una carrera con un recorrido cerrado en Flowtr",
        },
        {
          caption: "Compartir",
          alt: "Vídeo real de una carrera generado por Flowtr y listo para compartir",
        },
      ],
      badges: [
        { name: "Primer paso", desc: "Tu primer territorio conquistado." },
        { name: "Conquistador", desc: "10 territorios conquistados." },
        { name: "Señor de la tierra", desc: "10 hectáreas acumuladas." },
        { name: "Maratonista", desc: "42 km recorridos en total." },
        { name: "En llamas", desc: "7 días seguidos corriendo." },
        { name: "Defensor", desc: "Un territorio conservado durante 30 días." },
        { name: "Vengador", desc: "Un territorio robado y reconquistado." },
        { name: "Élite", desc: "Has entrado en el Top 10 de tu ciudad." },
      ],
    },
    technology: {
      eyebrow: "Antes de contar",
      title: "Cada conquista pasa controles.",
      highlight: "controles",
      description:
        "Flowtr comprueba el recorrido y el área antes de actualizar el mapa.",
      items: [
        {
          title: "Señal GPS",
          body:
            "Flowtr reduce el ruido y los saltos de posición antes de guardar el recorrido.",
        },
        {
          title: "Área válida",
          body:
            "El recorrido debe cerrar un área y cumplir las reglas de distancia, forma y solapamiento.",
        },
        {
          title: "Validación en el servidor",
          body:
            "Velocidades imposibles, saltos de ubicación y otras señales de manipulación pueden invalidar una carrera.",
        },
      ],
    },
    retention: {
      eyebrow: "Para volver al mapa",
      title: "La carrera termina.",
      highlight: "La disputa continúa.",
      description:
        "Si alguien conquista una de tus áreas, puedes recuperarla. Si un amigo te reta, tu próxima carrera ya cuenta.",
      cards: [
        {
          eyebrow: "Retos",
          title: "Duelos y retos de grupo",
          body:
            "Elige la duración, invita a los participantes y deja que cada carrera cuente para el resultado.",
          metric: "1 contra 1 · grupos de hasta 50",
        },
        {
          eyebrow: "Rankings",
          title: "Mundo, ciudad o amigos",
          body:
            "Compara área, distancia y territorio por semana, mes o desde el inicio.",
          metric: "mundo · ciudad · amigos",
        },
        {
          eyebrow: "Progreso",
          title: "Insignias, rachas y Diario",
          body:
            "Mira qué has conquistado, cuántos días llevas corriendo y qué te han quitado tus rivales.",
          metric: "insignias · rachas · diario",
        },
        {
          eyebrow: "Compartir",
          title: "Vídeo, imagen o pegatina",
          body:
            "Crea una pieza lista para compartir a partir de una carrera o del resultado de un reto.",
          metric: "vídeo · imagen · pegatina",
        },
      ],
    },
    faq: {
      eyebrow: "Preguntas frecuentes",
      title: "Qué conviene saber antes de empezar.",
      highlight: "antes de empezar",
      description: "Ubicación, privacidad, precio y lanzamiento.",
      questions: [
        {
          question: "¿Tengo que dejar la pantalla encendida durante la carrera?",
          answer:
            "No. Cuando inicias una carrera, Flowtr sigue registrándola con la pantalla bloqueada. En Android verás una notificación mientras el GPS esté activo. Al terminar la carrera también termina ese seguimiento.",
        },
        {
          question: "¿Mi recorrido es público?",
          answer:
            "El mapa compartido muestra los territorios conquistados, tu apodo, color y foto de perfil. Los demás jugadores no ven el recorrido completo. Solo creamos un vídeo público si decides compartirlo.",
        },
        {
          question: "¿Tengo que cerrar un circuito?",
          answer:
            "Sí, para conquistar territorio la carrera debe formar un área válida. La aplicación te ayuda a saber cuándo puedes cerrarla y comprueba el resultado antes de guardarlo.",
        },
        {
          question: "¿Flowtr es de pago?",
          answer:
            "En el lanzamiento Flowtr es gratis y no tiene anuncios. Si esto cambia, explicaremos antes qué cambia y qué sigue siendo gratuito.",
        },
        {
          question: "¿Cuándo llegará a iPhone y Android?",
          answer:
            "La versión para iPhone ya está disponible en la App Store. Android llegará después a Google Play.",
        },
      ],
    },
    waitlist: {
      eyebrow: "App Store",
      title: "La ciudad está",
      highlight: "por conquistar.",
      description:
        "Descarga Flowtr gratis en iPhone y convierte tu próxima carrera en territorio.",
      success: "Listo. Te avisaremos cuando esté disponible.",
      emailLabel: "Email",
      websiteLabel: "Sitio web",
      placeholder: "tu-email@dominio.com",
      sending: "Enviando…",
      submit: "Descargar en la App Store",
      error: "Algo ha salido mal. Inténtalo de nuevo en unos segundos.",
      note: "Gratis · sin anuncios · instalación segura desde la App Store.",
    },
    footer: {
      madeIn: "Hecho en Lisboa · por corredores",
      support: "Ayuda",
      privacy: "Privacidad",
      terms: "Términos",
      deleteAccount: "Eliminar cuenta",
    },
  },
} as const;

export type SiteCopy = (typeof siteCopy)[Locale];
