import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";
import type { SiteCopy } from "@/lib/site-i18n";

const featureIcons = [
  (
    <g key="route">
      <path
        d="M12 2a8 8 0 0 0-8 8c0 5.5 8 12 8 12s8-6.5 8-12a8 8 0 0 0-8-8Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"
        fill="currentColor"
      />
    </g>
    ),
  (
      <g key="validation">
        <path
          d="M3 12c0-4.97 4.03-9 9-9s9 4.03 9 9-4.03 9-9 9-9-4.03-9-9Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M12 7v5l3 2"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </g>
    ),
  (
    <g key="territory">
      <path
        d="M5 4h14l-1 7a7 7 0 0 1-12 0L5 4Zm5 16h4v-3h-4v3Z"
        fill="currentColor"
      />
    </g>
    ),
  (
      <g key="diary">
        <rect
          x="4"
          y="3"
          width="16"
          height="18"
          rx="2"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M8 8h8M8 12h8M8 16h5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </g>
    ),
  (
      <g key="rankings">
        <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="9" cy="10" r="1.5" fill="currentColor" />
        <circle cx="15" cy="10" r="1.5" fill="currentColor" />
        <circle cx="12" cy="15" r="1.5" fill="currentColor" />
      </g>
    ),
  (
      <g key="privacy">
        <path
          d="M12 2 4 5v6c0 5 3.5 9 8 11 4.5-2 8-6 8-11V5l-8-3Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="m9 12 2 2 4-4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </g>
    ),
];

export function WhatIs({ copy }: { copy: SiteCopy["what"] }) {
  return (
    <section
      id="o-que-e"
      className="relative py-[var(--space-section)]"
    >
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow={copy.eyebrow}
          title={copy.title}
          highlight={copy.highlight}
          description={copy.description}
        />

        <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
          {copy.features.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.05} y={28}>
              <article className="surface group relative h-full overflow-hidden p-7 transition-colors hover:border-[color:var(--color-coral-500)]/40">
                <div
                  aria-hidden
                  className="absolute -top-1/2 -right-1/2 size-64 rounded-full bg-[color:var(--color-coral-500)]/0 blur-3xl transition-all duration-500 group-hover:bg-[color:var(--color-coral-500)]/10"
                />
                <div className="relative flex items-center gap-3 text-[color:var(--color-coral-400)]">
                  <span className="grid size-10 place-items-center rounded-xl border border-[color:var(--color-coral-500)]/30 bg-[color:var(--color-coral-500)]/10">
                    <svg viewBox="0 0 24 24" className="size-5" aria-hidden>
                      {featureIcons[i]}
                    </svg>
                  </span>
                </div>
                <h3 className="font-display relative mt-6 text-xl text-white">
                  {f.title}
                </h3>
                <p className="relative mt-3 text-[15px] leading-relaxed text-[color:var(--color-fg-muted)]">
                  {f.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
