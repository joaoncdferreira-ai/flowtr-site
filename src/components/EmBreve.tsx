import { Reveal } from "./Reveal";
import { Gonfalon, gonfalonOwnFabric } from "./Gonfalon";

// Three of the six in-app territory colors (coral · azul · verde). Used to
// preview "estilos de bandeira" without needing to render the whole palette.
const flagPalette = [
  { hex: "#FF5733", initial: "J" }, // coral (default own)
  { hex: "#4A90D9", initial: "M" }, // azul
  { hex: "#4CAF50", initial: "A" }, // verde
];

type Card = {
  title: string;
  body: [string, string];
} & (
  | { kind: "emoji"; icon: string }
  | { kind: "gonfalons" }
);

const cards: Card[] = [
  {
    kind: "emoji",
    icon: "🛡️",
    title: "Defender território",
    body: [
      "Corre dentro do teu próprio território",
      "para o fortificar. Mais difícil de roubar.",
    ],
  },
  {
    kind: "gonfalons",
    title: "Estilos de bandeira",
    body: [
      "Personaliza o teu gonfalon.",
      "Cores, padrões, símbolos medievais.",
    ],
  },
  {
    kind: "emoji",
    icon: "🤝",
    title: "Corridas conjuntas",
    body: [
      "Corre com amigos",
      "para fortificar território.",
    ],
  },
  {
    kind: "emoji",
    icon: "👥",
    title: "Social Community",
    body: [
      "Convida os teus amigos, cria o teu grupo,",
      "lidera o teu ranking.",
    ],
  },
];

export function EmBreve() {
  return (
    <section
      id="em-breve"
      className="relative py-[var(--space-section)]"
    >
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[color:var(--color-border-strong)] bg-[color:var(--color-ink-800)]/70 px-3 py-1 text-[11px] uppercase tracking-[0.25em] text-[color:var(--color-fg-muted)]">
              <span className="size-1 rounded-full bg-[color:var(--color-coral-500)]" />
              Em breve
            </div>
            <h2 className="font-display text-balance text-4xl leading-[1.05] text-white md:text-6xl">
              O jogo está a <span className="coral-glow">começar.</span>
            </h2>
          </div>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.06} y={28}>
              <article
                className="h-full rounded-2xl border border-white/[0.08] bg-[#2A2A2A] p-6"
              >
                {c.kind === "emoji" ? (
                  <div className="text-3xl leading-none" aria-hidden>
                    {c.icon}
                  </div>
                ) : (
                  <div className="flex h-12 items-end gap-1.5">
                    {flagPalette.map((p, idx) => (
                      <Gonfalon
                        key={p.hex}
                        variant="own"
                        initial={p.initial}
                        width={26}
                        idSuffix={`embreve-${idx}`}
                        {...gonfalonOwnFabric(p.hex)}
                      />
                    ))}
                  </div>
                )}
                <h3 className="font-display mt-5 text-base uppercase tracking-[0.18em] text-[color:var(--color-coral-400)]">
                  {c.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-[color:var(--color-fg-muted)]">
                  {c.body[0]}
                  <br />
                  {c.body[1]}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <p className="mt-10 text-center text-xs text-[color:var(--color-fg-dim)] md:text-sm">
          Estás na waitlist Alpha — tens prioridade de acesso a tudo o que
          vier a seguir.
        </p>
      </div>
    </section>
  );
}
