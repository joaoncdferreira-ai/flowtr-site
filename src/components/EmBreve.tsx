import { Reveal } from "./Reveal";
import type { SiteCopy } from "@/lib/site-i18n";

export function EmBreve({ copy }: { copy: SiteCopy["retention"] }) {
  return (
    <section id="voltar" className="relative py-[var(--space-section)]">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[color:var(--color-border-strong)] bg-[color:var(--color-ink-800)]/70 px-3 py-1 text-[11px] uppercase tracking-[0.25em] text-[color:var(--color-fg-muted)]">
              <span className="size-1 rounded-full bg-[color:var(--color-coral-500)]" />
              {copy.eyebrow}
            </div>
            <h2 className="font-display text-balance text-4xl leading-[1.05] text-white md:text-6xl">
              {copy.title}{" "}
              <span className="coral-glow">{copy.highlight}</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-pretty leading-7 text-[color:var(--color-fg-muted)] md:text-lg">
              {copy.description}
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
          {copy.cards.map((card, index) => (
            <Reveal key={card.title} delay={index * 0.05} y={24}>
              <article className="surface group h-full p-7 transition-colors hover:border-[color:var(--color-coral-500)]/40">
                <p className="text-[11px] uppercase tracking-[0.25em] text-[color:var(--color-coral-400)]">
                  {card.eyebrow}
                </p>
                <h3 className="font-display mt-4 text-xl leading-tight text-white sm:text-2xl">
                  {card.title}
                </h3>
                <p className="mt-4 leading-7 text-[color:var(--color-fg-muted)]">
                  {card.body}
                </p>
                <p className="mt-7 border-t border-white/[0.08] pt-4 text-xs uppercase tracking-[0.18em] text-[color:var(--color-fg-dim)]">
                  {card.metric}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
