import { Reveal } from "./Reveal";

export function Rankings() {
  return (
    <section
      id="rankings"
      className="relative py-[var(--space-section)]"
    >
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <div className="text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[color:var(--color-border-strong)] bg-[color:var(--color-ink-800)]/70 px-3 py-1 text-[11px] uppercase tracking-[0.25em] text-[color:var(--color-fg-muted)]">
              <span className="size-1 rounded-full bg-[color:var(--color-coral-500)]" />
              Rankings
            </div>
            <h2 className="font-display text-balance text-4xl leading-[1.05] text-white md:text-6xl">
              Lisboa tem um líder.{" "}
              <span className="coral-glow">Por agora.</span>
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.1} y={32}>
          <div className="mt-14 flex justify-center">
            <div className="relative w-full max-w-[320px]">
              <div
                aria-hidden
                className="absolute -inset-8 -z-10 rounded-full opacity-40 blur-3xl"
                style={{
                  background:
                    "radial-gradient(closest-side, rgba(255,87,51,0.4), transparent 70%)",
                }}
              />
              <div className="phone-frame">
                <video
                  src="/videos/onboarding_02.mp4"
                  poster="/screenshots-clean/rankings.jpg"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-label="Flowtr — subir no ranking global"
                  className="block aspect-[9/19.5] w-full object-cover"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
