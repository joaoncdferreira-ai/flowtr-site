"use client";

import { useState } from "react";
import posthog from "posthog-js";

type Status = "idle" | "submitting" | "success" | "error";

export function Waitlist() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim() || status === "submitting") return;
    setStatus("submitting");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("success");
      // Fire conversion event only on confirmed Resend success. PostHog
      // no-ops if init was skipped (missing key) so this is safe in dev.
      if (typeof window !== "undefined" && posthog.__loaded) {
        posthog.capture("waitlist_signup");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="waitlist"
      className="relative py-[var(--space-section)]"
    >
      <div className="mx-auto max-w-3xl px-6 text-center">
        <div>
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 -top-20 -z-10 mx-auto h-80 w-[700px] max-w-full rounded-full opacity-50 blur-3xl"
            style={{
              background:
                "radial-gradient(closest-side, rgba(255,87,51,0.45), transparent 70%)",
            }}
          />
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[color:var(--color-border-strong)] bg-[color:var(--color-ink-800)]/80 px-3 py-1 text-[11px] uppercase tracking-[0.25em] text-[color:var(--color-fg-muted)]">
            <span className="size-1 rounded-full bg-[color:var(--color-coral-500)]" />
            Alpha 1 · 30 Abril
          </div>

          <h2 className="font-display text-balance text-4xl leading-[1.05] text-white md:text-6xl">
            Sê dos <span className="coral-glow">primeiros</span> a dominar.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-pretty text-[color:var(--color-fg-muted)] md:text-lg">
            O Alpha começa hoje com acesso faseado. Deixa o email — avisamos-te
            quando entrar a próxima vaga, sem spam.
          </p>

          {status === "success" ? (
            <p className="font-display mt-10 inline-flex items-center gap-2 text-base tracking-[0.2em] text-[color:var(--color-coral-400)]">
              <svg viewBox="0 0 24 24" className="size-5" aria-hidden>
                <path
                  d="m5 12 4 4 10-10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Estás dentro. Vemo-nos no terreno.
            </p>
          ) : (
            <form
              onSubmit={onSubmit}
              className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row"
              noValidate
            >
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                inputMode="email"
                autoComplete="email"
                placeholder="o-teu-email@dominio.pt"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === "submitting"}
                className="h-14 flex-1 rounded-full border border-[color:var(--color-border-strong)] bg-[color:var(--color-ink-800)]/80 px-6 text-[15px] text-white placeholder:text-[color:var(--color-fg-dim)] focus:border-[color:var(--color-coral-500)] focus:outline-none disabled:opacity-60"
              />
              <button
                type="submit"
                disabled={status === "submitting"}
                className="btn btn-primary !h-14"
              >
                {status === "submitting" ? "A enviar…" : "Entra"}
              </button>
            </form>
          )}

          {status === "error" ? (
            <p className="mt-3 text-sm text-[color:var(--color-coral-400)]">
              Algo correu mal. Tenta de novo em alguns segundos.
            </p>
          ) : null}

          <p className="mt-6 text-xs text-[color:var(--color-fg-dim)]">
            Sem ads. Sem leilão de dados. Cancelas com um clique.
          </p>
        </div>
      </div>
    </section>
  );
}
