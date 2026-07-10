import type { Metadata } from "next";
import Link from "next/link";

type ChallengePageProps = {
  params: Promise<{ code: string }>;
};

export const metadata: Metadata = {
  title: "Desafio Flowtr",
  description: "Abre a Flowtr para aceitar este desafio.",
  robots: { index: false, follow: true },
};

export default async function ChallengePage({ params }: ChallengePageProps) {
  const { code: rawCode } = await params;
  const code = rawCode.trim();
  const validCode = /^[A-Za-z0-9_-]{1,64}$/.test(code);
  const appHref = validCode
    ? `flowtr://challenge?code=${encodeURIComponent(code)}`
    : "/";

  return (
    <main className="flex flex-1 items-center px-4 py-14 sm:px-6">
      <article className="surface mx-auto w-full max-w-xl p-8 text-center sm:p-12">
        <p className="font-display text-sm text-coral">Flowtr</p>
        <h1 className="font-display mt-3 text-3xl leading-tight sm:text-5xl">
          Foste desafiado
        </h1>
        {validCode ? (
          <>
            <p className="mt-5 text-lg leading-7 text-fg-muted">
              Abre a Flowtr para aceitar este desafio.
            </p>
            <code className="mt-6 inline-block rounded-xl border border-border bg-black/30 px-4 py-2 text-base tracking-[0.16em] text-fg">
              {code}
            </code>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <a className="btn btn-primary" href={appHref}>
                Abrir na Flowtr
              </a>
              <Link className="btn btn-ghost" href="/">
                Conhecer a Flowtr
              </Link>
            </div>
          </>
        ) : (
          <>
            <p className="mt-5 text-lg leading-7 text-fg-muted">
              Este link de desafio está incompleto ou é inválido.
            </p>
            <Link className="btn btn-primary mt-8" href="/">
              Ir para Flowtr
            </Link>
          </>
        )}
      </article>
    </main>
  );
}
