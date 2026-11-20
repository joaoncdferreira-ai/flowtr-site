// Server-only helpers for the team invite page (/e/[code]) and its link
// preview. The data comes from the `teamInvitePreview` Cloud Function, which
// only returns the team's public facts (name, kind, size, month place) and
// never a member's name.

import { cache } from "react";

export type TeamPreview = {
  name: string;
  kind: "club" | "company";
  memberCount: number;
  monthRank: number | null;
  /** The code is unknown (the function answered 404). */
  missing?: boolean;
};

const DEFAULT_PREVIEW_URL =
  "https://europe-west1-flowtr-bfa58.cloudfunctions.net/teamInvitePreview";
const FETCH_TIMEOUT_MS = 2500;

export const TEAM_PITCH =
  "Na Flowtr, as tuas corridas e caminhadas contam para ti e para a tua equipa. Todos os meses ganha a equipa com mais km por pessoa.";

/** Team codes: 6 characters, no 0/O/1/I/L. */
export function normalizeTeamCode(raw: string): string | null {
  const code = raw.replace(/[\s-]/g, "").toUpperCase();
  return /^[ABCDEFGHJKMNPQRSTUVWXYZ23456789]{6}$/.test(code) ? code : null;
}

/**
 * Fetches the team's public preview. Never throws: any failure returns null
 * and the page shows the generic copy. `TEAM_PREVIEW_URL` overrides the
 * endpoint for local tests.
 */
export const fetchTeamPreview = cache(async (code: string): Promise<TeamPreview | null> => {
  const base = process.env.TEAM_PREVIEW_URL || DEFAULT_PREVIEW_URL;
  try {
    const url = `${base}${base.includes("?") ? "&" : "?"}code=${encodeURIComponent(code)}`;
    const res = await fetch(url, {
      next: { revalidate: 60 },
      signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
    });
    if (res.status === 404) return { name: "", kind: "club", memberCount: 0, monthRank: null, missing: true };
    if (!res.ok) return null;
    const body = (await res.json()) as Record<string, unknown>;
    if (body?.ok !== true || typeof body.name !== "string") return null;
    return {
      // Exactly as the team wrote it (only Unicode-normalized for drawing).
      name: body.name.normalize("NFC").trim().slice(0, 30),
      kind: body.kind === "company" ? "company" : "club",
      memberCount: typeof body.memberCount === "number" ? Math.max(0, Math.floor(body.memberCount)) : 0,
      monthRank:
        typeof body.monthRank === "number" && body.monthRank >= 1 ? Math.floor(body.monthRank) : null,
    };
  } catch {
    return null;
  }
});

const MONTHS = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto",
  "setembro", "outubro", "novembro", "dezembro"];

/** «Clube de corrida · 26 membros · 3.º em novembro» */
export function teamFacts(p: TeamPreview, now = new Date()): string {
  const kind = p.kind === "company" ? "Empresa" : "Clube de corrida";
  const members = p.memberCount === 1 ? "1 membro" : `${p.memberCount} membros`;
  const parts = [kind, members];
  if (p.monthRank != null) parts.push(`${p.monthRank}.º em ${MONTHS[now.getUTCMonth()]}`);
  return parts.join(" · ");
}
