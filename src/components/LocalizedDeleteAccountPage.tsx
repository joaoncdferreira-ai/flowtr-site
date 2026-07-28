import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { localeInfo, type Locale } from "@/lib/site-i18n";

const deleteCopy = {
  pt: {
    title: "Eliminar conta e dados",
    intro:
      "Podes iniciar a eliminação da tua conta Flowtr na aplicação ou contactar o suporte se já não tiveres acesso.",
    inApp: "Na aplicação Flowtr",
    steps: [
      "Abre a Flowtr e inicia sessão.",
      "Abre as Definições.",
      "Escolhe “Eliminar conta” e confirma o pedido.",
    ],
    process:
      "Este processo remove o acesso à conta e inicia a eliminação dos dados associados nos sistemas Flowtr.",
    noAccess: "Sem acesso à aplicação",
    noAccessBody:
      "Envia-nos um email a partir do endereço associado à conta. Podemos pedir uma verificação proporcional de identidade, mas nunca a tua palavra-passe.",
    request: "Pedir eliminação",
    after: "O que acontece depois",
    afterBody:
      "A Flowtr elimina os dados da conta nos seus sistemas e inicia a eliminação junto dos fornecedores relevantes. Alguns registos podem ser retidos apenas quando necessário para segurança, prevenção de fraude ou obrigações legais, conforme a política de privacidade.",
    questions: "Dúvidas? Escreve para",
  },
  en: {
    title: "Delete account and data",
    intro:
      "You can start deleting your Flowtr account in the app or contact support if you no longer have access.",
    inApp: "In the Flowtr app",
    steps: [
      "Open Flowtr and sign in.",
      "Open Settings.",
      "Choose “Delete account” and confirm the request.",
    ],
    process:
      "This removes access to the account and starts deleting its associated data from Flowtr systems.",
    noAccess: "Without access to the app",
    noAccessBody:
      "Email us from the address linked to the account. We may ask for proportionate identity verification, but never for your password.",
    request: "Request deletion",
    after: "What happens next",
    afterBody:
      "Flowtr deletes account data from its systems and starts deletion with relevant providers. Some records may be kept only when required for security, fraud prevention or legal obligations, as described in the Privacy Policy.",
    questions: "Questions? Email",
  },
  es: {
    title: "Eliminar cuenta y datos",
    intro:
      "Puedes iniciar la eliminación de tu cuenta Flowtr en la aplicación o contactar con ayuda si ya no tienes acceso.",
    inApp: "En la aplicación Flowtr",
    steps: [
      "Abre Flowtr e inicia sesión.",
      "Abre Ajustes.",
      "Elige “Eliminar cuenta” y confirma la solicitud.",
    ],
    process:
      "Este proceso elimina el acceso a la cuenta e inicia la eliminación de los datos asociados en los sistemas de Flowtr.",
    noAccess: "Sin acceso a la aplicación",
    noAccessBody:
      "Envíanos un email desde la dirección asociada a la cuenta. Podemos pedir una verificación de identidad proporcionada, pero nunca tu contraseña.",
    request: "Solicitar eliminación",
    after: "Qué ocurre después",
    afterBody:
      "Flowtr elimina los datos de la cuenta de sus sistemas e inicia la eliminación con los proveedores pertinentes. Algunos registros solo pueden conservarse cuando sea necesario por seguridad, prevención del fraude u obligaciones legales, según la Política de Privacidad.",
    questions: "¿Tienes dudas? Escribe a",
  },
} as const;

export function LocalizedDeleteAccountPage({ locale }: { locale: Locale }) {
  const copy = deleteCopy[locale];

  return (
    <main
      id="main-content"
      lang={localeInfo[locale].htmlLang}
      className="flex flex-1 items-center px-4 py-14 sm:px-6"
    >
      <article className="surface mx-auto w-full max-w-2xl p-7 sm:p-10">
        <div className="flex items-center justify-between gap-4">
          <p className="font-display text-sm text-coral">Flowtr</p>
          <LanguageSwitcher locale={locale} suffix="/delete-account" />
        </div>
        <h1 className="font-display mt-3 text-3xl leading-tight sm:text-5xl">
          {copy.title}
        </h1>
        <p className="mt-5 text-base leading-7 text-fg-muted sm:text-lg">
          {copy.intro}
        </p>

        <section className="mt-9 border-t border-border pt-7">
          <h2 className="font-display text-lg">{copy.inApp}</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5 leading-7 text-fg-muted">
            {copy.steps.map((step) => <li key={step}>{step}</li>)}
          </ol>
          <p className="mt-4 leading-7 text-fg-muted">{copy.process}</p>
        </section>

        <section className="mt-9 border-t border-border pt-7">
          <h2 className="font-display text-lg">{copy.noAccess}</h2>
          <p className="mt-4 leading-7 text-fg-muted">{copy.noAccessBody}</p>
          <a
            className="btn btn-primary mt-6"
            href="mailto:support@flowtr.app?subject=Flowtr%20account%20deletion"
          >
            {copy.request}
          </a>
        </section>

        <section className="mt-9 border-t border-border pt-7">
          <h2 className="font-display text-lg">{copy.after}</h2>
          <p className="mt-4 leading-7 text-fg-muted">{copy.afterBody}</p>
        </section>

        <p className="mt-9 text-sm text-fg-dim">
          {copy.questions}{" "}
          <a className="text-coral hover:underline" href="mailto:support@flowtr.app">
            support@flowtr.app
          </a>
          .
        </p>
      </article>
    </main>
  );
}
