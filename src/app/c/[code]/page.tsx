import type { Metadata } from "next";
import Link from "next/link";
import { headers } from "next/headers";

// Store URLs are env-gated. Until each app is actually
// published these stay unset and the page funnels an app-less recipient to the
// waitlist instead of linking to store pages that would 404. Set them in Vercel
// at launch and the badges appear automatically (platform-led).
const APP_STORE_URL = process.env.NEXT_PUBLIC_APP_STORE_URL;
const PLAY_STORE_URL = process.env.NEXT_PUBLIC_PLAY_STORE_URL;

type ChallengePageProps = {
  params: Promise<{ code: string }>;
};

type Store = { label: string; href: string; lead: boolean };

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

  // Best-effort UA sniff (works inside the WhatsApp in-app browser too) to lead
  // with the right store; both are shown otherwise.
  const ua = (await headers()).get("user-agent") ?? "";
  const isIOS = /iPhone|iPad|iPod/i.test(ua);
  const isAndroid = /Android/i.test(ua);

  const stores = (
    [
      APP_STORE_URL
        ? { label: "Baixar na App Store", href: APP_STORE_URL, lead: isIOS || !isAndroid }
        : null,
      PLAY_STORE_URL
        ? { label: "Descarregar no Google Play", href: PLAY_STORE_URL, lead: isAndroid }
        : null,
    ].filter(Boolean) as Store[]
  ).sort((a, b) => Number(b.lead) - Number(a.lead));

  return (
    <main id="main-content" className="flex flex-1 items-center px-4 py-14 sm:px-6">
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

            {/* A recipient without the app installed needs a real way in — the
                bare app-scheme button above no-ops when Flowtr is absent. */}
            <div className="mt-8 border-t border-border pt-6">
              <p className="text-sm text-fg-muted">Ainda não tens a Flowtr?</p>
              {stores.length > 0 ? (
                <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:justify-center">
                  {stores.map((s) => (
                    <a key={s.href} className="btn btn-ghost" href={s.href}>
                      {s.label}
                    </a>
                  ))}
                </div>
              ) : (
                <Link className="btn btn-primary mt-3" href="/#waitlist">
                  Avisa-me quando estiver disponível
                </Link>
              )}
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
