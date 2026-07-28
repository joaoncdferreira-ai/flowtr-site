import Link from "next/link";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { Logo } from "@/components/Logo";
import {
  localeInfo,
  localePath,
  siteCopy,
  type Locale,
} from "@/lib/site-i18n";

const supportCopy = {
  pt: {
    back: "Voltar ao início da Flowtr",
    eyebrow: "Suporte",
    title: "Precisas de ajuda?",
    introBefore: "Escreve para",
    introAfter:
      "Respondemos normalmente no prazo de dois dias úteis. Inclui apenas a informação necessária para percebermos o problema.",
    contact: "Contactar suporte",
    quick: "Ajuda rápida",
    accountPrivacy: "Conta e privacidade",
    topics: [
      {
        title: "A corrida deixou de registar",
        body:
          "Confirma que a localização está ativa e que a Flowtr tem permissão para a usar. Se o problema continuar, indica o modelo do telemóvel, a versão do sistema e o momento aproximado da corrida.",
      },
      {
        title: "O território não foi conquistado",
        body:
          "Uma conquista precisa de formar uma área válida e passar as verificações da corrida. Envia-nos a data, a distância aproximada e uma captura do ecrã de resumo.",
      },
      {
        title: "Conta, acesso ou dados",
        body:
          "Podemos ajudar com acesso à conta, correção de dados e pedidos de privacidade. Nunca te pediremos a palavra-passe nem códigos de autenticação.",
      },
      {
        title: "Abuso, denúncia ou segurança",
        body:
          "Podes denunciar conteúdo e bloquear jogadores na própria aplicação. Se não conseguires resolver a situação, contacta-nos por email.",
      },
    ],
  },
  en: {
    back: "Back to Flowtr home",
    eyebrow: "Support",
    title: "Need help?",
    introBefore: "Email",
    introAfter:
      "We normally reply within two business days. Include only the information we need to understand the problem.",
    contact: "Contact support",
    quick: "Quick help",
    accountPrivacy: "Account and privacy",
    topics: [
      {
        title: "The run stopped recording",
        body:
          "Check that location is enabled and Flowtr has permission to use it. If the problem continues, tell us your phone model, system version and the approximate time of the run.",
      },
      {
        title: "The territory was not claimed",
        body:
          "A claim must form a valid area and pass the run checks. Send us the date, approximate distance and a screenshot of the result.",
      },
      {
        title: "Account, access or data",
        body:
          "We can help with account access, data corrections and privacy requests. We will never ask for your password or authentication codes.",
      },
      {
        title: "Abuse, reporting or safety",
        body:
          "You can report content and block players in the app. If you cannot resolve the situation there, contact us by email.",
      },
    ],
  },
  es: {
    back: "Volver al inicio de Flowtr",
    eyebrow: "Ayuda",
    title: "¿Necesitas ayuda?",
    introBefore: "Escribe a",
    introAfter:
      "Normalmente respondemos en un plazo de dos días laborables. Incluye solo la información necesaria para entender el problema.",
    contact: "Contactar con ayuda",
    quick: "Ayuda rápida",
    accountPrivacy: "Cuenta y privacidad",
    topics: [
      {
        title: "La carrera dejó de registrarse",
        body:
          "Comprueba que la ubicación esté activada y que Flowtr tenga permiso para usarla. Si el problema continúa, indícanos el modelo del teléfono, la versión del sistema y la hora aproximada de la carrera.",
      },
      {
        title: "El territorio no se conquistó",
        body:
          "Una conquista debe formar un área válida y superar las comprobaciones de la carrera. Envíanos la fecha, la distancia aproximada y una captura del resultado.",
      },
      {
        title: "Cuenta, acceso o datos",
        body:
          "Podemos ayudarte con el acceso a la cuenta, la corrección de datos y las solicitudes de privacidad. Nunca te pediremos la contraseña ni códigos de autenticación.",
      },
      {
        title: "Abuso, denuncia o seguridad",
        body:
          "Puedes denunciar contenido y bloquear jugadores en la aplicación. Si no puedes resolver la situación allí, contacta con nosotros por email.",
      },
    ],
  },
} as const;

export function LocalizedSupportPage({ locale }: { locale: Locale }) {
  const copy = supportCopy[locale];
  const footer = siteCopy[locale].footer;

  return (
    <main
      id="main-content"
      lang={localeInfo[locale].htmlLang}
      className="flex-1 px-4 py-10 sm:px-6 sm:py-14"
    >
      <article className="surface mx-auto w-full max-w-4xl p-7 sm:p-10">
        <div className="flex items-center justify-between gap-4">
          <Link
            href={localePath(locale)}
            className="inline-flex items-center gap-3 text-white transition-opacity hover:opacity-80"
            aria-label={copy.back}
          >
            <Logo className="h-10 w-auto" />
            <span className="font-display tracking-[0.18em]">FLOWTR</span>
          </Link>
          <LanguageSwitcher locale={locale} suffix="/support" />
        </div>

        <p className="font-display mt-10 text-sm text-coral">{copy.eyebrow}</p>
        <h1 className="font-display mt-3 text-3xl leading-tight sm:text-5xl">
          {copy.title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-fg-muted sm:text-lg">
          {copy.introBefore}{" "}
          <a className="text-coral hover:underline" href="mailto:support@flowtr.app">
            support@flowtr.app
          </a>
          . {copy.introAfter}
        </p>

        <a
          className="btn btn-primary mt-7"
          href="mailto:support@flowtr.app?subject=Flowtr%20support"
        >
          {copy.contact}
        </a>

        <section className="mt-12 border-t border-border pt-8">
          <h2 className="font-display text-2xl">{copy.quick}</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {copy.topics.map((topic) => (
              <div
                key={topic.title}
                className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5"
              >
                <h3 className="font-display text-base text-white">{topic.title}</h3>
                <p className="mt-3 leading-7 text-fg-muted">{topic.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10 border-t border-border pt-8">
          <h2 className="font-display text-2xl">{copy.accountPrivacy}</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link className="btn btn-ghost !h-12 !text-sm" href={localePath(locale, "/privacy")}>
              {footer.privacy}
            </Link>
            <Link className="btn btn-ghost !h-12 !text-sm" href={localePath(locale, "/delete-account")}>
              {footer.deleteAccount}
            </Link>
            <Link className="btn btn-ghost !h-12 !text-sm" href={localePath(locale, "/terms")}>
              {footer.terms}
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}
