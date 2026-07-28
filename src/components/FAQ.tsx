import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";
import type { SiteCopy } from "@/lib/site-i18n";

export function FAQ({ copy }: { copy: SiteCopy["faq"] }) {
  return (
    <section id="faq" className="relative py-[var(--space-section)]">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeader
          eyebrow={copy.eyebrow}
          title={copy.title}
          highlight={copy.highlight}
          description={copy.description}
        />

        <div className="mt-12 divide-y divide-white/[0.08] border-y border-white/[0.08]">
          {copy.questions.map((item, index) => (
            <Reveal key={item.question} delay={index * 0.03} y={18}>
              <details className="group py-2">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-left font-display text-base text-white marker:content-none sm:text-lg">
                  <span>{item.question}</span>
                  <span
                    aria-hidden
                    className="grid size-8 shrink-0 place-items-center rounded-full border border-[color:var(--color-border-strong)] text-[color:var(--color-coral-400)] transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="max-w-3xl pb-6 pr-12 leading-7 text-[color:var(--color-fg-muted)]">
                  {item.answer}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
