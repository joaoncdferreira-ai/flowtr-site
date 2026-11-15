import type { Metadata } from "next";
import Link from "next/link";
import { headers } from "next/headers";
import { InviteActions } from "./InviteActions";
import { APP_STORE_URL, GOOGLE_PLAY_URL } from "@/lib/store-links";
import {
  fetchInvitePreview,
  formatMeetAt,
  INVITE_PITCH,
  inviteCopy,
  isValidInviteCode,
} from "@/lib/invite-preview";

// The published iOS URL has a safe source default. Environment variables can
// override store destinations without requiring another release of the site.
const PUBLISHED_APP_STORE_URL =
  process.env.NEXT_PUBLIC_APP_STORE_URL ?? APP_STORE_URL;
const PLAY_STORE_URL = process.env.NEXT_PUBLIC_PLAY_STORE_URL ?? GOOGLE_PLAY_URL;

type ChallengePageProps = {
  params: Promise<{ code: string }>;
  // `k=volta`: convite «Ir com alguém» (uma volta juntos, nunca «desafio»).
  searchParams: Promise<{ k?: string | string[] }>;
};

// Android: pass the invite through the Play install referrer so the app can read
// it after installing (Play Install Referrer API).
function withInstallReferrer(url: string, code: string) {
  const referrer = encodeURIComponent(`invite=${code}&utm_source=invite`);
  return `${url}${url.includes("?") ? "&" : "?"}referrer=${referrer}`;
}

// Opens the app when installed; otherwise Chrome follows the fallback to Play.
function androidIntentUrl(code: string, playUrl: string) {
  return (
    `intent://challenge?code=${encodeURIComponent(code)}` +
    `#Intent;scheme=flowtr;package=com.flowtr.app;` +
    `S.browser_fallback_url=${encodeURIComponent(playUrl)};end`
  );
}

async function resolveInvite({ params, searchParams }: ChallengePageProps) {
  const { code: rawCode } = await params;
  const code = rawCode.trim();
  const together = (await searchParams).k === "volta";
  const validCode = isValidInviteCode(code);
  const preview = validCode ? await fetchInvitePreview(code) : null;
  return { code, together, validCode, preview };
}

export async function generateMetadata(props: ChallengePageProps): Promise<Metadata> {
  const { together, validCode, preview } = await resolveInvite(props);
  const title = validCode ? inviteCopy(preview, together).title : "Convite Flowtr";
  // Link previews are cached by the messaging app: always the full date here.
  const when =
    preview?.meetAtMillis != null
      ? formatMeetAt(preview.meetAtMillis, preview.timeZone, { relative: false })
      : null;
  const description = when ? `${when} · ${INVITE_PITCH}` : INVITE_PITCH;
  return {
    title: { absolute: title },
    description,
    robots: { index: false, follow: false },
    openGraph: {
      type: "website",
      locale: "pt_PT",
      siteName: "Flowtr",
      title,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function ChallengePage(props: ChallengePageProps) {
  const { code, together, validCode, preview } = await resolveInvite(props);

  // Best-effort UA sniff (works inside the WhatsApp in-app browser too) to show
  // a single primary action.
  const ua = (await headers()).get("user-agent") ?? "";
  const isIOS = /iPhone|iPad|iPod/i.test(ua);
  const isAndroid = !isIOS && /Android/i.test(ua);

  const inviteUrl = `https://flowtr.app/c/${code}`;
  const playUrl = PLAY_STORE_URL ? withInstallReferrer(PLAY_STORE_URL, code) : "";
  const { title, subtitle } = inviteCopy(preview, together);
  const when =
    preview?.meetAtMillis != null
      ? formatMeetAt(preview.meetAtMillis, preview.timeZone)
      : null;

  const desktopStores = [
    PUBLISHED_APP_STORE_URL
      ? { label: "Descarregar na App Store", href: PUBLISHED_APP_STORE_URL }
      : null,
    playUrl ? { label: "Descarregar no Google Play", href: playUrl } : null,
  ].filter((s): s is { label: string; href: string } => s !== null);

  const waitlist = (
    <Link className="btn btn-primary mt-8" href="/#waitlist">
      Avisa-me quando estiver disponível
    </Link>
  );

  let actions = waitlist;
  if (isAndroid && playUrl) {
    actions = (
      <InviteActions
        platform="android"
        intentUrl={androidIntentUrl(code, playUrl)}
        playUrl={playUrl}
        inviteUrl={inviteUrl}
      />
    );
  } else if (isIOS && PUBLISHED_APP_STORE_URL) {
    actions = (
      <InviteActions
        platform="ios"
        appStoreUrl={PUBLISHED_APP_STORE_URL}
        appUrl={`flowtr://challenge?code=${encodeURIComponent(code)}`}
        inviteUrl={inviteUrl}
      />
    );
  } else if (!isAndroid && !isIOS && desktopStores.length > 0) {
    actions = <InviteActions platform="desktop" stores={desktopStores} />;
  }

  return (
    <main id="main-content" className="flex flex-1 items-center px-4 py-14 sm:px-6">
      <article className="surface mx-auto w-full max-w-xl p-8 text-center sm:p-12">
        <p className="font-display text-sm text-coral">Flowtr</p>
        {validCode ? (
          <>
            <h1 className="font-display mt-3 text-3xl leading-tight sm:text-5xl">{title}</h1>
            {when ? <p className="mt-4 text-xl font-semibold text-fg">{when}</p> : null}
            {subtitle ? <p className="mt-3 text-lg leading-7 text-fg-muted">{subtitle}</p> : null}
            {preview && !preview.active ? (
              <p className="mt-4 text-base font-semibold text-coral">Este convite já terminou.</p>
            ) : null}
            <p className="mt-5 text-lg leading-7 text-fg-muted">{INVITE_PITCH}</p>
            {actions}
          </>
        ) : (
          <>
            <h1 className="font-display mt-3 text-3xl leading-tight sm:text-5xl">
              {together ? "Convite para uma volta" : "Desafio amigável"}
            </h1>
            <p className="mt-5 text-lg leading-7 text-fg-muted">
              Este link de desafio está incompleto ou é inválido.
            </p>
            <Link className="btn btn-primary mt-8" href="/">
              Ir para a Flowtr
            </Link>
          </>
        )}
      </article>
    </main>
  );
}
