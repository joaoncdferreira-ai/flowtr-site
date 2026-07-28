import Link from "next/link";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { localeInfo, localePath, type Locale } from "@/lib/site-i18n";

type PrivacyLocale = Exclude<Locale, "pt">;

const copy = {
  en: {
    title: "Privacy Policy",
    updated: "Last updated: July 28, 2026",
    intro:
      "Flowtr is a fitness game where you run in the real world to claim territory on a shared map. Location is central to the product, so this policy explains plainly what we collect, why we collect it and what other players can see.",
    controllerTitle: "Who is responsible",
    controller:
      "Flowtr is operated from Portugal. For privacy questions or legal requests, contact support@flowtr.app. We reply by email to formal requests, including the rights described below.",
    dataTitle: "Data we collect",
    data: [
      "Account — email, name or nickname and, if you use Google or Apple sign-in, that account identity.",
      "Precise location (GPS) — collected during runs while the app is in use. On Android, a foreground service displays a visible notification. We do not collect background location outside runs.",
      "Routes and territories — the path of your runs and the territory polygons you claim are stored with your account.",
      "Profile photo — if you choose to upload one.",
      "Game content — nicknames, challenge names, reports and blocks you submit.",
      "Usage and diagnostics — product events, session replay with all text and images masked, crash and performance reports, device identifiers and notification tokens. Analytics, diagnostics and replay are collected only if you enable them.",
    ],
    visibleTitle: "What other players can see",
    visible: [
      "The territory polygons you claim are visible to other players on the shared map, associated with your nickname, colour and profile photo. Rankings and challenges show your nickname and game statistics. Keep this in mind before running in places you do not want associated with you, such as around your home.",
      "If you share a run video, it is generated on our AWS servers from that run and remains available at a public URL while it exists. Anyone with the link can view it. You can request removal by email.",
    ],
    purposeTitle: "Why we use the data",
    purposes: [
      "Provide the service (contract) — record runs, calculate territories, rankings, challenges and sharing.",
      "Security and anti-cheat (legitimate interest) — server-side run validation, reports and blocks.",
      "Improve the product (consent) — analytics, diagnostics and masked session replay. These are off by default and can be changed in Settings.",
      "Push notifications (system permission) — you can disable them in device settings.",
    ],
    siteTitle: "Website and launch list",
    site:
      "The website uses Vercel for hosting, aggregate technical metrics and performance monitoring. We do not use advertising cookies or PostHog on the site. If you join the launch list, Resend stores your email so we can send essential availability updates. You can ask us to remove it at any time.",
    processorsTitle: "Service providers",
    processors:
      "We use Google Firebase for accounts, backend, notifications, crash reporting and analytics; PostHog EU Cloud for product analytics and masked session replay; Mapbox for maps; AWS Lambda and S3 for run-video generation; Cloudinary for profile photos; OpenStreetMap Foundation Nominatim for reverse geocoding; Google and Apple for sign-in; and Vercel and Resend for the website and launch list. Providers process data for us under data-protection terms. Transfers outside the EU rely on applicable safeguards, including European Commission standard contractual clauses where required.",
    retentionTitle: "Retention and deletion",
    retention: [
      "We keep account, run and territory data while your account is active. Product analytics are kept for up to 12 months; masked session replays for up to 30 days; crash reports for up to 90 days; launch-list emails until you unsubscribe or ask for deletion. Run videos remain available until they are automatically removed or you request removal.",
      "You can delete your account in the app. This removes access and starts deletion from Flowtr systems and relevant providers. Limited records may be retained where required for security, fraud prevention or legal obligations.",
    ],
    rightsTitle: "Your rights",
    rights:
      "Under the GDPR, you may request access, correction, deletion, restriction, portability or objection, and withdraw consent at any time without affecting prior lawful processing. Contact support@flowtr.app. You may also lodge a complaint with Portugal's data-protection authority, the CNPD.",
    ageTitle: "Minimum age",
    age:
      "Flowtr is intended for people aged 16 or over. If we discover an account belonging to someone under 16, we will delete it.",
    changesTitle: "Changes",
    changes:
      "We may update this policy as the product changes. For material changes, we will notify you in the app or by email before they take effect.",
    deleteLabel: "Delete your account",
  },
  es: {
    title: "Política de Privacidad",
    updated: "Última actualización: 28 de julio de 2026",
    intro:
      "Flowtr es un juego de fitness en el que corres en el mundo real para conquistar territorio en un mapa compartido. La ubicación es esencial para el producto, por eso esta política explica claramente qué recopilamos, por qué y qué pueden ver otros jugadores.",
    controllerTitle: "Quién es responsable",
    controller:
      "Flowtr opera desde Portugal. Para cuestiones de privacidad o solicitudes legales, escribe a support@flowtr.app. Respondemos por email a las solicitudes formales, incluido el ejercicio de los derechos que se describen a continuación.",
    dataTitle: "Datos que recopilamos",
    data: [
      "Cuenta — email, nombre o apodo y, si utilizas el inicio de sesión de Google o Apple, la identidad de esa cuenta.",
      "Ubicación precisa (GPS) — se recopila durante las carreras mientras utilizas la aplicación. En Android, un servicio en primer plano muestra una notificación visible. No recopilamos ubicación en segundo plano fuera de las carreras.",
      "Recorridos y territorios — el trayecto de tus carreras y los polígonos de territorio que conquistas se guardan con tu cuenta.",
      "Foto de perfil — si decides subir una.",
      "Contenido del juego — apodos, nombres de retos, denuncias y bloqueos que envíes.",
      "Uso y diagnóstico — eventos de producto, grabaciones de sesión con todos los textos e imágenes ocultos, informes de errores y rendimiento, identificadores del dispositivo y tokens de notificación. Los datos analíticos, de diagnóstico y las grabaciones solo se recopilan si los activas.",
    ],
    visibleTitle: "Qué pueden ver otros jugadores",
    visible: [
      "Los polígonos de territorio que conquistas son visibles para otros jugadores en el mapa compartido, asociados a tu apodo, color y foto de perfil. Las clasificaciones y los retos muestran tu apodo y estadísticas de juego. Tenlo en cuenta antes de correr en lugares que no quieras asociar contigo, por ejemplo cerca de tu casa.",
      "Si compartes un vídeo de una carrera, se genera en nuestros servidores de AWS a partir de esa carrera y permanece disponible en una URL pública mientras exista. Cualquier persona con el enlace puede verlo. Puedes solicitar su eliminación por email.",
    ],
    purposeTitle: "Para qué utilizamos los datos",
    purposes: [
      "Prestar el servicio (contrato) — registrar carreras, calcular territorios, clasificaciones, retos y contenido compartido.",
      "Seguridad y lucha contra las trampas (interés legítimo) — validación de carreras en el servidor, denuncias y bloqueos.",
      "Mejorar el producto (consentimiento) — datos analíticos, diagnóstico y grabaciones de sesión ocultas. Están desactivados por defecto y puedes cambiarlo en Ajustes.",
      "Notificaciones push (permiso del sistema) — puedes desactivarlas en los ajustes del dispositivo.",
    ],
    siteTitle: "Sitio web y lista de lanzamiento",
    site:
      "El sitio web utiliza Vercel para el alojamiento, métricas técnicas agregadas y control del rendimiento. No utilizamos cookies publicitarias ni PostHog en el sitio. Si te apuntas a la lista de lanzamiento, Resend guarda tu email para enviarte avisos esenciales sobre la disponibilidad. Puedes pedirnos que lo eliminemos en cualquier momento.",
    processorsTitle: "Proveedores de servicios",
    processors:
      "Utilizamos Google Firebase para cuentas, backend, notificaciones, informes de errores y datos analíticos; PostHog EU Cloud para analítica de producto y grabaciones de sesión ocultas; Mapbox para los mapas; AWS Lambda y S3 para generar vídeos de carreras; Cloudinary para fotos de perfil; Nominatim de OpenStreetMap Foundation para geocodificación inversa; Google y Apple para iniciar sesión; y Vercel y Resend para el sitio y la lista de lanzamiento. Los proveedores tratan datos por cuenta nuestra con obligaciones de protección de datos. Las transferencias fuera de la UE se basan en garantías aplicables, incluidas las cláusulas contractuales tipo de la Comisión Europea cuando sea necesario.",
    retentionTitle: "Conservación y eliminación",
    retention: [
      "Conservamos los datos de cuenta, carreras y territorios mientras tu cuenta esté activa. Los datos analíticos del producto se conservan hasta 12 meses; las grabaciones de sesión ocultas hasta 30 días; los informes de errores hasta 90 días; y los emails de la lista hasta que te des de baja o solicites su eliminación. Los vídeos de carreras siguen disponibles hasta que se eliminan automáticamente o solicitas su retirada.",
      "Puedes eliminar tu cuenta en la aplicación. Esto retira el acceso e inicia la eliminación en los sistemas de Flowtr y los proveedores correspondientes. Pueden conservarse registros limitados cuando sea necesario por seguridad, prevención del fraude u obligaciones legales.",
    ],
    rightsTitle: "Tus derechos",
    rights:
      "De acuerdo con el RGPD, puedes solicitar acceso, rectificación, eliminación, limitación, portabilidad u oposición, y retirar tu consentimiento en cualquier momento sin afectar al tratamiento lícito anterior. Escribe a support@flowtr.app. También puedes presentar una reclamación ante la autoridad portuguesa de protección de datos, la CNPD.",
    ageTitle: "Edad mínima",
    age:
      "Flowtr está dirigida a personas de 16 años o más. Si descubrimos una cuenta de una persona menor de 16 años, la eliminaremos.",
    changesTitle: "Cambios",
    changes:
      "Podemos actualizar esta política a medida que evolucione el producto. En caso de cambios importantes, te avisaremos en la aplicación o por email antes de que entren en vigor.",
    deleteLabel: "Eliminar tu cuenta",
  },
} as const;

function EmailText({ text }: { text: string }) {
  const [before, after] = text.split("support@flowtr.app");
  if (after === undefined) return text;

  return (
    <>
      {before}
      <a className="text-coral hover:underline" href="mailto:support@flowtr.app">
        support@flowtr.app
      </a>
      {after}
    </>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-9 border-t border-border pt-7">
      <h2 className="font-display text-lg">{title}</h2>
      <div className="mt-4 space-y-4 leading-7 text-fg-muted">{children}</div>
    </section>
  );
}

export function LocalizedPrivacyPage({ locale }: { locale: PrivacyLocale }) {
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
          <LanguageSwitcher locale={locale} suffix="/privacy" />
        </div>
        <h1 className="font-display mt-3 text-3xl leading-tight sm:text-5xl">
          {page.title}
        </h1>
        <p className="mt-3 text-sm text-fg-dim">{page.updated}</p>
        <p className="mt-5 text-base leading-7 text-fg-muted sm:text-lg">
          {page.intro}
        </p>

        <Section title={page.controllerTitle}>
          <p><EmailText text={page.controller} /></p>
        </Section>
        <Section title={page.dataTitle}>
          <ul className="list-disc space-y-2 pl-5">
            {page.data.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </Section>
        <Section title={page.visibleTitle}>
          {page.visible.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </Section>
        <Section title={page.purposeTitle}>
          <ul className="list-disc space-y-2 pl-5">
            {page.purposes.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </Section>
        <Section title={page.siteTitle}>
          <p>{page.site}</p>
        </Section>
        <Section title={page.processorsTitle}>
          <p>{page.processors}</p>
        </Section>
        <Section title={page.retentionTitle}>
          {page.retention.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </Section>
        <Section title={page.rightsTitle}>
          <p><EmailText text={page.rights} /></p>
        </Section>
        <Section title={page.ageTitle}>
          <p>{page.age}</p>
        </Section>
        <Section title={page.changesTitle}>
          <p>{page.changes}</p>
        </Section>

        <div className="mt-10 border-t border-border pt-7 text-sm">
          <Link className="text-coral hover:underline" href={localePath(locale, "/delete-account")}>
            {page.deleteLabel}
          </Link>
        </div>
      </article>
    </main>
  );
}
