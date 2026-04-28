import { Reveal } from "./Reveal";

const podium = [
  { rank: "#1", area: "38 420 m²", neighbourhood: "CARNIDE" },
  { rank: "#2", area: "29 100 m²", neighbourhood: "ALVALADE" },
  { rank: "#3", area: "17 830 m²", neighbourhood: "BELÉM" },
];

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
          <div className="mt-14 grid grid-cols-1 items-center gap-12 md:grid-cols-[1fr_320px] md:gap-16">
            <div>
              <div className="surface overflow-hidden p-2 md:p-3">
                <ul className="flex flex-col">
                  {podium.map((row, i) => {
                    const isFirst = i === 0;
                    return (
                      <li
                        key={row.rank}
                        className={[
                          "flex items-center gap-4 rounded-2xl px-4 py-4 md:px-6",
                          isFirst ? "bg-[color:var(--color-coral-500)]/10" : "",
                        ].join(" ")}
                      >
                        <span
                          className={[
                            "font-display w-12 shrink-0 text-lg tracking-widest md:text-xl",
                            isFirst
                              ? "text-[color:var(--color-coral-400)]"
                              : "text-[color:var(--color-fg-muted)]",
                          ].join(" ")}
                        >
                          {row.rank}
                        </span>
                        <span
                          aria-hidden
                          className="size-10 shrink-0 rounded-full bg-[color:var(--color-ink-700)]"
                        />
                        <span
                          className={[
                            "flex-1 text-sm tracking-[0.18em] md:text-base",
                            isFirst
                              ? "text-white/90"
                              : "text-[color:var(--color-fg-muted)]",
                          ].join(" ")}
                          aria-label="Nome do jogador oculto"
                        >
                          ——————
                        </span>
                        <span
                          className={[
                            "font-mono text-sm tabular-nums md:text-base",
                            isFirst
                              ? "text-[color:var(--color-coral-400)]"
                              : "text-white/80",
                          ].join(" ")}
                        >
                          {row.area}
                        </span>
                        <span
                          className={[
                            "hidden w-24 text-right text-[11px] uppercase tracking-[0.2em] md:inline",
                            isFirst
                              ? "text-white/80"
                              : "text-[color:var(--color-fg-dim)]",
                          ].join(" ")}
                        >
                          {row.neighbourhood}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <p className="mt-6 text-center text-xs text-[color:var(--color-fg-dim)] md:text-left md:text-sm">
                Filtra por cidade, país ou mundo. Por semana, mês, ou desde
                sempre.
              </p>
            </div>

            {/* Right: app video showing the player rising in the rankings */}
            <div className="relative mx-auto w-full max-w-[280px] md:max-w-[320px]">
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
