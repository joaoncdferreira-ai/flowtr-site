import type { Metadata } from "next";
import Link from "next/link";
import { headers } from "next/headers";
import { InviteActions } from "../../c/[code]/InviteActions";
import { APP_STORE_URL, GOOGLE_PLAY_URL } from "@/lib/store-links";
import { fetchTeamPreview, normalizeTeamCode, TEAM_PITCH, teamFacts } from "@/lib/team-preview";

// Team invites (Equipas): flowtr.app/e/<code>[?r=<inviter>]. With the app
// installed the link opens it directly (universal link / app link); here we
// show the team and send people to the app or to the store.

// Override only for local end-to-end tests (the E2E build is com.flowtr.app.e2e).
const ANDROID_PACKAGE = process.env.INVITE_ANDROID_PACKAGE || "com.flowtr.app";
const PUBLISHED_APP_STORE_URL = process.env.NEXT_PUBLIC_APP_STORE_URL ?? APP_STORE_URL;
const PLAY_STORE_URL = process.env.NEXT_PUBLIC_PLAY_STORE_URL ?? GOOGLE_PLAY_URL;

type TeamPageProps = {
  params: Promise<{ code: string }>;
  searchParams: Promise<{ r?: string | string[] }>;
};

// Android: the team code travels in the Play install referrer, so the app
// opens the team right after installing.
function withTeamReferrer(url: string, code: string) {
  const referrer = encodeURIComponent(`team=${code}&utm_source=team_invite`);
  return `${url}${url.includes("?") ? "&" : "?"}referrer=${referrer}`;
}

function androidIntentUrl(code: string, playUrl: string) {
  return (
    `intent://team?code=${encodeURIComponent(code)}` +
    `#Intent;scheme=flowtr;package=${ANDROID_PACKAGE};` +
    `S.browser_fallback_url=${encodeURIComponent(playUrl)};end`
  );
}

async function resolveTeam({ params, searchParams }: TeamPageProps) {
  const { code: raw } = await params;
  const code = normalizeTeamCode(decodeURIComponent(raw));
  const r = (await searchParams).r;
  const inviter = typeof r === "string" && /^[A-Za-z0-9_-]{1,128}$/.test(r) ? r : null;
  const preview = code ? await fetchTeamPreview(code) : null;
  return { code, inviter, preview };
}

function titleOf(preview: Awaited<ReturnType<typeof fetchTeamPreview>>) {
  if (preview && !preview.missing && preview.name) return `Entra na equipa ${preview.name}`;
  return "Convite para uma equipa da Flowtr";
}

export async function generateMetadata(props: TeamPageProps): Promise<Metadata> {
  const { code, preview } = await resolveTeam(props);
  const title = code ? titleOf(preview) : "Convite Flowtr";
  const description =
    preview && !preview.missing ? `${teamFacts(preview)} · ${TEAM_PITCH}` : TEAM_PITCH;
  return {
    title: { absolute: title },
    description,
    robots: { index: false, follow: false },
    openGraph: { type: "website", locale: "pt_PT", siteName: "Flowtr", title, description },
    twitter: { card: "summary", title, description },
  };
}

export default async function TeamInvitePage(props: TeamPageProps) {
  const { code, inviter, preview } = await resolveTeam(props);
  const ua = (await headers()).get("user-agent") ?? "";
  const isIOS = /iPhone|iPad|iPod/i.test(ua);
  const isAndroid = !isIOS && /Android/i.test(ua);

  if (!code) {
    return (
      <main id="main-content" className="flex flex-1 items-center px-4 py-14 sm:px-6">
        <article className="surface mx-auto w-full max-w-xl p-8 text-center sm:p-12">
          <p className="font-display text-sm text-coral">Flowtr</p>
          <h1 className="font-display mt-3 text-3xl leading-tight sm:text-5xl">Convite inválido</h1>
          <p className="mt-5 text-lg leading-7 text-fg-muted">
            Este link de equipa está incompleto ou é inválido.
          </p>
          <Link className="btn btn-primary mt-8" href="/">
            Ir para a Flowtr
          </Link>
        </article>
      </main>
    );
  }

  const inviteUrl = `https://flowtr.app/e/${code}${inviter ? `?r=${inviter}` : ""}`;
  const playUrl = PLAY_STORE_URL ? withTeamReferrer(PLAY_STORE_URL, code) : "";
  const missing = preview?.missing === true;
  const desktopStores = [
    PUBLISHED_APP_STORE_URL ? { label: "Descarregar na App Store", href: PUBLISHED_APP_STORE_URL } : null,
    playUrl ? { label: "Descarregar no Google Play", href: playUrl } : null,
  ].filter((s): s is { label: string; href: string } => s !== null);

  let actions = (
    <Link className="btn btn-primary mt-8" href="/">
      Conhecer a Flowtr
    </Link>
  );
  if (!missing && isAndroid && playUrl) {
    actions = (
      <InviteActions
        platform="android"
        intentUrl={androidIntentUrl(code, playUrl)}
        playUrl={playUrl}
        inviteUrl={inviteUrl}
        acceptLabel="Entrar na equipa"
      />
    );
  } else if (!missing && isIOS && PUBLISHED_APP_STORE_URL) {
    actions = (
      <InviteActions
        platform="ios"
        appStoreUrl={PUBLISHED_APP_STORE_URL}
        appUrl={`flowtr://team?code=${encodeURIComponent(code)}${inviter ? `&r=${inviter}` : ""}`}
        inviteUrl={inviteUrl}
        openLabel="Já tens a Flowtr? Entrar na equipa"
      />
    );
  } else if (!missing && desktopStores.length > 0) {
    actions = <InviteActions platform="desktop" stores={desktopStores} />;
  }

  return (
    <main id="main-content" className="flex flex-1 items-center px-4 py-14 sm:px-6">
      <article className="surface mx-auto w-full max-w-xl p-8 text-center sm:p-12">
        <p className="font-display text-sm text-coral">Flowtr · Equipas</p>
        {preview && !missing && preview.name ? (
          <>
            <h1 className="font-display mt-3 text-2xl leading-tight sm:text-3xl">Entra na equipa</h1>
            {/* The team's name exactly as it was written: never upper-cased. */}
            <p className="mt-2 text-4xl font-bold leading-tight normal-case text-fg sm:text-5xl">
              {preview.name}
            </p>
          </>
        ) : (
          <h1 className="font-display mt-3 text-3xl leading-tight sm:text-5xl">{titleOf(preview)}</h1>
        )}
        {preview && !missing ? (
          <p className="mt-4 text-xl font-semibold text-fg">{teamFacts(preview)}</p>
        ) : null}
        {missing ? (
          <p className="mt-4 text-base font-semibold text-coral">Esta equipa já não existe.</p>
        ) : null}
        <p className="mt-5 text-lg leading-7 text-fg-muted">{TEAM_PITCH}</p>
        {!missing ? (
          <p className="mt-4 text-base text-fg-muted">
            Código da equipa: <span className="font-display tracking-widest text-fg">{code}</span>
          </p>
        ) : null}
        {actions}
      </article>
    </main>
  );
}
