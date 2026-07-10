import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Eliminar conta e dados",
  description:
    "Instruções para eliminar uma conta Flowtr e os dados associados.",
  alternates: { canonical: "/delete-account" },
};

export default function DeleteAccountPage() {
  return (
    <main className="flex flex-1 items-center px-4 py-14 sm:px-6">
      <article className="surface mx-auto w-full max-w-2xl p-7 sm:p-10">
        <p className="font-display text-sm text-coral">Flowtr</p>
        <h1 className="font-display mt-3 text-3xl leading-tight sm:text-5xl">
          Eliminar conta e dados
        </h1>
        <p className="mt-5 text-base leading-7 text-fg-muted sm:text-lg">
          Podes iniciar a eliminação da tua conta Flowtr na app ou contactar o
          suporte se já não tiveres acesso.
        </p>

        <section className="mt-9 border-t border-border pt-7">
          <h2 className="font-display text-lg">Na app Flowtr</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5 leading-7 text-fg-muted">
            <li>Abre a Flowtr e inicia sessão.</li>
            <li>Abre as Definições.</li>
            <li>Escolhe “Eliminar conta” e confirma o pedido.</li>
          </ol>
          <p className="mt-4 leading-7 text-fg-muted">
            Este processo remove o acesso à conta e inicia a eliminação dos
            dados associados nos sistemas Flowtr.
          </p>
        </section>

        <section className="mt-9 border-t border-border pt-7">
          <h2 className="font-display text-lg">Sem acesso à app</h2>
          <p className="mt-4 leading-7 text-fg-muted">
            Envia-nos um email a partir do endereço associado à conta. Podemos
            pedir uma verificação proporcional de identidade, mas nunca a tua
            palavra-passe.
          </p>
          <a
            className="btn btn-primary mt-6"
            href="mailto:support@flowtr.app?subject=Pedido%20de%20elimina%C3%A7%C3%A3o%20de%20conta%20Flowtr"
          >
            Pedir eliminação
          </a>
        </section>

        <section className="mt-9 border-t border-border pt-7">
          <h2 className="font-display text-lg">O que acontece depois</h2>
          <p className="mt-4 leading-7 text-fg-muted">
            A Flowtr elimina os dados da conta nos seus sistemas e inicia a
            eliminação junto dos fornecedores relevantes. Alguns registos podem
            ser retidos apenas quando necessário para segurança, prevenção de
            fraude ou obrigações legais, conforme a política de privacidade.
          </p>
        </section>

        <p className="mt-9 text-sm text-fg-dim">
          Dúvidas? Escreve para{" "}
          <a className="text-coral hover:underline" href="mailto:support@flowtr.app">
            support@flowtr.app
          </a>
          .
        </p>
      </article>
    </main>
  );
}
