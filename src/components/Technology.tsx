import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";
import type { SiteCopy } from "@/lib/site-i18n";

export function Technology({ copy }: { copy: SiteCopy["technology"] }) {
  return (
    <section id="tecnologia" className="relative py-[var(--space-section)]">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow={copy.eyebrow}
          title={copy.title}
          highlight={copy.highlight}
          description={copy.description}
        />

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
          {copy.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.05} y={24}>
              <article className="h-full rounded-2xl border border-white/[0.08] bg-[color:var(--color-ink-800)]/70 p-6">
                <div className="mb-5 h-px w-12 bg-[color:var(--color-coral-500)]" />
                <h3 className="font-display text-lg uppercase tracking-[0.16em] text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-[color:var(--color-fg-muted)]">
                  {item.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
