import type { SiteCopy } from "@/lib/site-i18n";
import { GOOGLE_PLAY_URL, APP_STORE_URL } from "@/lib/store-links";

export function Waitlist({ copy }: { copy: SiteCopy["waitlist"] }) {
  return (
    <section id="waitlist" className="relative py-[var(--space-section)]">
      <div className="mx-auto max-w-3xl px-6 text-center">
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
          {copy.eyebrow}
        </div>

        <h2 className="font-display text-balance text-4xl leading-[1.05] text-white md:text-6xl">
          {copy.title} <span className="coral-glow">{copy.highlight}</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-pretty text-[color:var(--color-fg-muted)] md:text-lg">
          {copy.description}
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
        <a
          href={GOOGLE_PLAY_URL}
          className="btn btn-primary"
          target="_blank"
          rel="noreferrer"
        >
          {copy.submit}
          <svg viewBox="0 0 24 24" className="size-4" aria-hidden>
            <path
              fill="currentColor"
              d="M13.293 4.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L17.586 12H4a1 1 0 1 1 0-2h13.586l-4.293-4.293a1 1 0 0 1 0-1.414Z"
            />
          </svg>
        </a>
        <a href={APP_STORE_URL} className="btn btn-primary" target="_blank" rel="noreferrer">App Store</a>
        </div>

        <p className="mt-6 text-xs text-[color:var(--color-fg-dim)]">
          {copy.note}
        </p>
      </div>
    </section>
  );
}
