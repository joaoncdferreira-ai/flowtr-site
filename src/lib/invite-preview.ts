// Server-only helpers for the invite page (/c/[code]) and its link preview.
// The data comes from the `invitePreview` Cloud Function, which only ever
// returns the inviter's first name and the invite's public details.

import { cache } from "react";

export type InviteKind = "target" | "together" | "friendly" | "duel" | "group" | "other";

export type InvitePreview = {
  kind: InviteKind;
  firstName: string;
  meetAtMillis: number | null;
  timeZone: string;
  active: boolean;
  /** The code is unknown (the function answered 404). */
  missing?: boolean;
};

const DEFAULT_PREVIEW_URL =
  "https://europe-west1-flowtr-bfa58.cloudfunctions.net/invitePreview";
const FETCH_TIMEOUT_MS = 2500;
const DEFAULT_TIME_ZONE = "Europe/Lisbon";
const KINDS: readonly InviteKind[] = ["target", "together", "friendly", "duel", "group", "other"];

export const INVITE_PITCH =
  "A Flowtr é um jogo no mapa real: corres, caminhas ou pedalas e conquistas território.";

export function isValidInviteCode(code: string) {
  return /^[A-Za-z0-9_-]{1,64}$/.test(code);
}

function validTimeZone(tz: unknown): string {
  if (typeof tz !== "string" || !tz) return DEFAULT_TIME_ZONE;
  try {
    new Intl.DateTimeFormat("pt-PT", { timeZone: tz });
    return tz;
  } catch {
    return DEFAULT_TIME_ZONE;
  }
}

/**
 * Fetches the invite's public preview. Never throws: any failure (timeout,
 * unknown code, malformed body) returns null and the page falls back to the
 * generic copy. `INVITE_PREVIEW_URL` overrides the endpoint for local tests.
 */
export const fetchInvitePreview = cache(
  async (code: string): Promise<InvitePreview | null> => {
    if (!isValidInviteCode(code)) return null;
    const base = process.env.INVITE_PREVIEW_URL || DEFAULT_PREVIEW_URL;
    try {
      const url = `${base}${base.includes("?") ? "&" : "?"}code=${encodeURIComponent(code)}`;
      const res = await fetch(url, {
        next: { revalidate: 60 },
        signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
      });
      if (res.status === 404) {
        // Known not to exist: say so, instead of guessing what it was.
        return { kind: "other", firstName: "", meetAtMillis: null, timeZone: DEFAULT_TIME_ZONE, active: false, missing: true };
      }
      if (!res.ok) return null;
      const body = (await res.json()) as Record<string, unknown>;
      if (body?.ok !== true) return null;
      const kind = KINDS.includes(body.kind as InviteKind)
        ? (body.kind as InviteKind)
        : "other";
      const firstName =
        typeof body.firstName === "string" ? body.firstName.trim().slice(0, 40) : "";
      // A time already gone is not shown (the invite may still be open).
      const meetAtMillis =
        typeof body.meetAtMillis === "number" &&
        Number.isFinite(body.meetAtMillis) &&
        body.meetAtMillis > Date.now()
          ? body.meetAtMillis
          : null;
      return {
        kind,
        firstName,
        meetAtMillis,
        timeZone: validTimeZone(body.timeZone),
        active: body.active !== false,
      };
    } catch {
      return null;
    }
  },
);

type Kind = "volta" | "desafio" | "duelo" | "grupo" | "other";

function inviteKind(preview: InvitePreview | null, together: boolean): Kind {
  if (preview) {
    if (preview.kind === "friendly") return "desafio";
    if (preview.kind === "duel") return "duelo";
    if (preview.kind === "group") return "grupo";
    if (preview.kind === "other") return together ? "volta" : "other";
    return "volta";
  }
  // No data: `?k=volta` marks a «go with someone» invite; anything else stays
  // neutral (duels, groups and friendly challenges share links without it).
  return together ? "volta" : "other";
}

/** Headline and optional sub-line, in neutral pt-PT. */
export function inviteCopy(preview: InvitePreview | null, together: boolean) {
  const kind = inviteKind(preview, together);
  const name = preview?.firstName ?? "";
  const title =
    kind === "volta"
      ? name
        ? `${name} convida-te para uma volta`
        : "Convite para uma volta"
      : kind === "desafio"
        ? name
          ? `${name} convida-te para um desafio amigável`
          : "Desafio amigável"
        : kind === "duelo"
          ? name
            ? `${name} desafia-te a correr mais`
            : "Desafio na Flowtr"
          : kind === "grupo"
            ? name
              ? `${name} convida-te para um desafio de grupo`
              : "Desafio de grupo"
            : name
              ? `${name} convida-te para a Flowtr`
              : "Convite para a Flowtr";
  const subtitle =
    kind === "desafio" ? "Quem faz mais km esta semana, só por diversão." : null;
  return { title, subtitle };
}

function dayKey(ms: number, timeZone: string) {
  // en-CA gives YYYY-MM-DD.
  return new Intl.DateTimeFormat("en-CA", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date(ms));
}

function addDays(key: string, days: number) {
  const d = new Date(`${key}T12:00:00Z`);
  d.setUTCDate(d.getUTCDate() + days);
  return d.toISOString().slice(0, 10);
}

/**
 * «Hoje, 18:30», «Amanhã, 18:30» or «Sábado, 16 de novembro, 18:30», in the
 * invite's own time zone. `relative: false` always uses the full date (link
 * previews are cached by WhatsApp, so «Hoje» would go stale).
 */
export function formatMeetAt(
  millis: number,
  timeZone: string,
  { relative = true, now = Date.now() }: { relative?: boolean; now?: number } = {},
) {
  const tz = validTimeZone(timeZone);
  const date = new Date(millis);
  const time = new Intl.DateTimeFormat("pt-PT", {
    timeZone: tz,
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).format(date);

  if (relative) {
    const meetDay = dayKey(millis, tz);
    const today = dayKey(now, tz);
    if (meetDay === today) return `Hoje, ${time}`;
    if (meetDay === addDays(today, 1)) return `Amanhã, ${time}`;
  }

  const weekday = new Intl.DateTimeFormat("pt-PT", { timeZone: tz, weekday: "long" }).format(date);
  const dayMonth = new Intl.DateTimeFormat("pt-PT", {
    timeZone: tz,
    day: "numeric",
    month: "long",
  }).format(date);
  return `${weekday.charAt(0).toUpperCase()}${weekday.slice(1)}, ${dayMonth}, ${time}`;
}
