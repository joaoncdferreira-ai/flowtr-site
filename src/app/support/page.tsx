import type { Metadata } from "next";
import Link from "next/link";
import { Logo } from "@/components/Logo";

export const metadata: Metadata = {
  title: "Suporte",
  description:
    "Ajuda com a conta, corridas, localização, privacidade e utilização da app Flowtr.",
  alternates: { canonical: "/support" },
};

const topics = [
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
      "Podes denunciar conteúdo e bloquear jogadores na própria app. Se não conseguires resolver a situação, contacta-nos por email.",
  },
];

export default function SupportPage() {
  return (
    <main id="main-content" className="flex-1 px-4 py-10 sm:px-6 sm:py-14">
      <article className="surface mx-auto w-full max-w-4xl p-7 sm:p-10">
        <Link
          href="/"
          className="inline-flex items-center gap-3 text-white transition-opacity hover:opacity-80"
          aria-label="Voltar ao início da Flowtr"
        >
          <Logo className="h-10 w-auto" />
          <span className="font-display tracking-[0.18em]">FLOWTR</span>
        </Link>

        <p className="font-display mt-10 text-sm text-coral">Suporte</p>
        <h1 className="font-display mt-3 text-3xl leading-tight sm:text-5xl">
          Precisas de ajuda?
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-fg-muted sm:text-lg">
          Escreve para{" "}
          <a className="text-coral hover:underline" href="mailto:support@flowtr.app">
            support@flowtr.app
          </a>
          . Respondemos normalmente no prazo de dois dias úteis. Inclui apenas a
          informação necessária para percebermos o problema.
        </p>

        <a
          className="btn btn-primary mt-7"
          href="mailto:support@flowtr.app?subject=Ajuda%20com%20a%20Flowtr"
        >
          Contactar suporte
        </a>

        <section className="mt-12 border-t border-border pt-8">
          <h2 className="font-display text-2xl">Ajuda rápida</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {topics.map((topic) => (
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
          <h2 className="font-display text-2xl">Conta e privacidade</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            <a className="btn btn-ghost !h-12 !text-sm" href="/privacy">
              Política de privacidade
            </a>
            <a className="btn btn-ghost !h-12 !text-sm" href="/delete-account">
              Eliminar conta
            </a>
            <a className="btn btn-ghost !h-12 !text-sm" href="/terms">
              Termos de utilização
            </a>
          </div>
        </section>
      </article>
    </main>
  );
}
