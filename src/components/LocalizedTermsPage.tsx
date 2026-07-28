import Link from "next/link";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { localeInfo, localePath, type Locale } from "@/lib/site-i18n";

const copy = {
  en: {
    title: "Terms of Use",
    updated: "Last updated: July 28, 2026",
    intro:
      "These terms govern your use of the Flowtr app and website. By creating an account or using the service, you accept them. Flowtr is operated from Portugal.",
    sections: [
      {
        title: "1. Eligibility",
        body: [
          "You must be at least 16 years old to use Flowtr. If we discover an account belonging to someone under 16, we will delete it.",
        ],
      },
      {
        title: "2. Your account",
        body: [
          "One account per person, with accurate details. You are responsible for activity on your account and for keeping access to it secure.",
        ],
      },
      {
        title: "3. The game",
        body: [
          "Flowtr is a game: you run in the real world to claim territory on a shared map. Other players can see, challenge and claim your territory. Territory, points, rankings, streaks and achievements are game elements, not assets with real-world value, and may be recalculated, adjusted or reset to fix errors, prevent cheating or during beta phases.",
          "Runs are validated automatically on the server. Runs showing signs of manipulation, such as GPS spoofing, impossible speeds or teleportation, may be rejected without notice.",
        ],
      },
      {
        title: "4. Physical safety — the most important rule",
        body: [
          "You run in the real world at your own risk. Always pay attention to traffic, pedestrians, obstacles, surfaces and weather. Obey traffic rules and respect private property. Do not look at your phone while moving through traffic. Flowtr does not provide medical advice; if you have concerns about your fitness, speak to a doctor before running.",
        ],
      },
      {
        title: "5. Conduct",
        body: [
          "You may not cheat, falsify your location, use vehicles for runs recorded as being on foot, automate or manipulate the game; harass, threaten or impersonate others; use offensive or illegal names or content; interfere with the service or bypass technical protections; or use Flowtr for unlawful purposes.",
          "You can report and block other players in the app. Violations may lead to content removal, loss of game elements, suspension or account termination.",
        ],
      },
      {
        title: "6. Your content and ours",
        body: [
          "Content you create in the game, such as your nickname, photo and challenge names, remains yours. You grant us a worldwide, royalty-free licence to host, display and process it only as needed to operate the service. We may remove content that violates these terms.",
          "The Flowtr app, brand, design and code belong to us or our licensors. Maps are provided by Mapbox and OpenStreetMap contributors, subject to their terms.",
        ],
      },
      {
        title: "7. Privacy",
        body: [
          "How we process personal data — including GPS location, routes and what other players can see — is explained in our Privacy Policy.",
        ],
      },
      {
        title: "8. Availability and changes",
        body: [
          "Flowtr is under active development and is currently provided free of charge. We may change, suspend or discontinue features and do not guarantee uninterrupted availability. We will notify you in the app or by email before material changes to these terms take effect.",
        ],
      },
      {
        title: "9. Liability",
        body: [
          "To the fullest extent permitted by law, Flowtr is not liable for indirect loss or damage arising from your physical activity, GPS or map inaccuracies, or service unavailability. Nothing in these terms limits mandatory Portuguese or EU consumer rights, or liability for wilful misconduct or gross negligence.",
        ],
      },
      {
        title: "10. Governing law and courts",
        body: [
          "These terms are governed by Portuguese law and the Portuguese courts. If you are an EU consumer, you also benefit from the mandatory protections of your country of residence and, where applicable, may use a competent alternative consumer dispute resolution body.",
        ],
      },
      {
        title: "11. Contact",
        body: ["Flowtr · Portugal · support@flowtr.app, including for legal notices."],
      },
    ],
    deleteLabel: "Delete your account",
    privacyLabel: "Privacy Policy",
  },
  es: {
    title: "Términos de uso",
    updated: "Última actualización: 28 de julio de 2026",
    intro:
      "Estos términos regulan el uso de la aplicación y del sitio web de Flowtr. Al crear una cuenta o utilizar el servicio, los aceptas. Flowtr opera desde Portugal.",
    sections: [
      {
        title: "1. Edad mínima",
        body: [
          "Debes tener al menos 16 años para utilizar Flowtr. Si descubrimos una cuenta de una persona menor de 16 años, la eliminaremos.",
        ],
      },
      {
        title: "2. Tu cuenta",
        body: [
          "Una cuenta por persona, con datos correctos. Eres responsable de la actividad de tu cuenta y de mantener seguro el acceso a ella.",
        ],
      },
      {
        title: "3. El juego",
        body: [
          "Flowtr es un juego: corres en el mundo real para conquistar territorio en un mapa compartido. Otros jugadores pueden ver, disputar y conquistar tu territorio. El territorio, los puntos, las clasificaciones, las rachas y los logros son elementos del juego, no bienes con valor real, y pueden recalcularse, ajustarse o reiniciarse para corregir errores, combatir las trampas o durante fases beta.",
          "Las carreras se validan automáticamente en el servidor. Las carreras con indicios de manipulación, como GPS falsificado, velocidades imposibles o teletransporte, pueden rechazarse sin previo aviso.",
        ],
      },
      {
        title: "4. Seguridad física — la regla más importante",
        body: [
          "Corres en el mundo real por tu cuenta y riesgo. Presta siempre atención al tráfico, los peatones, los obstáculos, el terreno y el tiempo. Respeta las normas de circulación y la propiedad privada. No mires el teléfono mientras te desplazas por zonas con tráfico. Flowtr no ofrece asesoramiento médico; si tienes dudas sobre tu condición física, consulta a un médico antes de correr.",
        ],
      },
      {
        title: "5. Conducta",
        body: [
          "No puedes hacer trampas, falsear tu ubicación, usar vehículos en carreras registradas a pie, automatizar o manipular el juego; acosar, amenazar o suplantar a otras personas; usar nombres o contenidos ofensivos o ilegales; interferir con el servicio o eludir protecciones técnicas; ni utilizar Flowtr con fines ilícitos.",
          "Puedes denunciar y bloquear a otros jugadores en la aplicación. Las infracciones pueden provocar la retirada de contenido, la pérdida de elementos del juego, la suspensión o el cierre de la cuenta.",
        ],
      },
      {
        title: "6. Tu contenido y el nuestro",
        body: [
          "El contenido que creas en el juego, como tu apodo, foto y nombres de retos, sigue siendo tuyo. Nos concedes una licencia mundial y gratuita para alojarlo, mostrarlo y tratarlo únicamente en la medida necesaria para prestar el servicio. Podemos retirar contenido que infrinja estos términos.",
          "La aplicación, la marca, el diseño y el código de Flowtr nos pertenecen o pertenecen a nuestros licenciantes. Los mapas son proporcionados por Mapbox y por colaboradores de OpenStreetMap, sujetos a sus términos.",
        ],
      },
      {
        title: "7. Privacidad",
        body: [
          "La forma en que tratamos los datos personales —incluida la ubicación GPS, los recorridos y lo que pueden ver otros jugadores— se explica en nuestra Política de Privacidad.",
        ],
      },
      {
        title: "8. Disponibilidad y cambios",
        body: [
          "Flowtr está en desarrollo activo y actualmente se ofrece de forma gratuita. Podemos modificar, suspender o retirar funciones y no garantizamos una disponibilidad ininterrumpida. Te avisaremos en la aplicación o por email antes de que entren en vigor cambios importantes en estos términos.",
        ],
      },
      {
        title: "9. Responsabilidad",
        body: [
          "En la máxima medida permitida por la ley, Flowtr no responde de daños indirectos ni de daños derivados de tu actividad física, de imprecisiones del GPS o de los mapas, o de la indisponibilidad del servicio. Nada de lo aquí previsto limita los derechos obligatorios de los consumidores en Portugal o la UE, ni la responsabilidad por dolo o negligencia grave.",
        ],
      },
      {
        title: "10. Ley aplicable y tribunales",
        body: [
          "Estos términos se rigen por la ley portuguesa y los tribunales portugueses. Si eres consumidor en la UE, también te beneficias de las protecciones obligatorias de tu país de residencia y, cuando corresponda, puedes acudir a una entidad competente de resolución alternativa de litigios de consumo.",
        ],
      },
      {
        title: "11. Contacto",
        body: ["Flowtr · Portugal · support@flowtr.app, también para avisos legales."],
      },
    ],
    deleteLabel: "Eliminar tu cuenta",
    privacyLabel: "Política de Privacidad",
  },
} as const;

export function LocalizedTermsPage({ locale }: { locale: Exclude<Locale, "pt"> }) {
  const page = copy[locale];

  return (
    <main
      id="main-content"
      lang={localeInfo[locale].htmlLang}
      className="flex flex-1 items-center px-4 py-14 sm:px-6"
    >
      <article className="surface mx-auto w-full max-w-3xl p-7 sm:p-10">
        <div className="flex items-center justify-between gap-4">
          <p className="font-display text-sm text-coral">Flowtr</p>
          <LanguageSwitcher locale={locale} suffix="/terms" />
        </div>
        <h1 className="font-display mt-3 text-3xl leading-tight sm:text-5xl">
          {page.title}
        </h1>
        <p className="mt-3 text-sm text-fg-dim">{page.updated}</p>
        <p className="mt-5 text-base leading-7 text-fg-muted sm:text-lg">
          {page.intro}{" "}
          <a className="text-coral hover:underline" href="mailto:support@flowtr.app">
            support@flowtr.app
          </a>
          .
        </p>

        {page.sections.map((section) => (
          <section key={section.title} className="mt-9 border-t border-border pt-7">
            <h2 className="font-display text-lg">{section.title}</h2>
            <div className="mt-4 space-y-4 leading-7 text-fg-muted">
              {section.body.map((paragraph) => (
                <p key={paragraph}>
                  {paragraph === page.sections[6].body[0] ? (
                    <Link className="text-coral hover:underline" href={localePath(locale, "/privacy")}>
                      {paragraph}
                    </Link>
                  ) : paragraph.includes("support@flowtr.app") ? (
                    <>
                      {paragraph.replace("support@flowtr.app", "")}
                      <a className="text-coral hover:underline" href="mailto:support@flowtr.app">
                        support@flowtr.app
                      </a>
                    </>
                  ) : (
                    paragraph
                  )}
                </p>
              ))}
            </div>
          </section>
        ))}

        <div className="mt-10 flex flex-wrap gap-4 border-t border-border pt-7 text-sm">
          <Link className="text-coral hover:underline" href={localePath(locale, "/delete-account")}>
            {page.deleteLabel}
          </Link>
          <Link className="text-coral hover:underline" href={localePath(locale, "/privacy")}>
            {page.privacyLabel}
          </Link>
        </div>
      </article>
    </main>
  );
}
