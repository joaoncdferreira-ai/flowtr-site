import Image from "next/image";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";
import type { SiteCopy } from "@/lib/site-i18n";

const compactIcons = [
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
  </g>,
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
  </g>,
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
  </g>,
];

export function WhatIs({ copy }: { copy: SiteCopy["what"] }) {
  const compactFeatures = [
    copy.features[1],
    copy.features[3],
    copy.features[5],
  ];

  return (
    <section id="o-que-e" className="relative py-[var(--space-section)]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-1/3 h-[560px] bg-[radial-gradient(ellipse_at_center,rgba(255,87,51,0.08),transparent_68%)]"
      />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow={copy.eyebrow}
          title={copy.title}
          highlight={copy.highlight}
          description={copy.description}
        />

        <div className="mt-16 grid grid-cols-1 gap-5 lg:grid-cols-12 lg:auto-rows-min">
          <Reveal className="lg:col-span-7" y={28}>
            <article className="feature-story group min-h-[520px] lg:min-h-[620px]">
              <Image
                src="/lifestyle/runner-checking-flowtr.png"
                alt={copy.features[0].title}
                fill
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="feature-story-image object-cover object-[58%_center]"
              />
              <div className="feature-story-shade" />
              <div className="absolute left-6 top-6 flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md">
                <span className="signal-pulse" />
                {copy.liveLabel}
              </div>
              <div className="absolute inset-x-0 bottom-0 p-7 sm:p-10">
                <p className="font-display text-[11px] tracking-[0.2em] text-[color:var(--color-coral-400)]">
                  {copy.routeLabel}
                </p>
                <h3 className="font-display mt-3 max-w-xl text-3xl leading-tight text-white sm:text-4xl">
                  {copy.features[0].title}
                </h3>
                <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-white/75 sm:text-base">
                  {copy.features[0].body}
                </p>
              </div>
            </article>
          </Reveal>

          <Reveal className="lg:col-span-5" delay={0.06} y={28}>
            <article className="feature-share group flex min-h-[620px] flex-col overflow-hidden rounded-[28px] border border-white/10 bg-[#101015] p-7 sm:p-9">
              <div className="relative z-10">
                <p className="font-display text-[11px] tracking-[0.2em] text-[color:var(--color-coral-400)]">
                  {copy.share.eyebrow}
                </p>
                <h3 className="font-display mt-3 text-2xl leading-tight text-white sm:text-3xl">
                  {copy.share.title}
                </h3>
                <p className="mt-4 max-w-md text-[15px] leading-relaxed text-[color:var(--color-fg-muted)]">
                  {copy.share.body}
                </p>
              </div>
              <div className="relative z-10 mx-auto mt-8 w-[190px] flex-1 sm:w-[215px]">
                <div className="phone-frame h-full max-h-[420px]">
                  <video
                    className="h-full w-full bg-[#08090c] object-contain"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    poster="/app-current/video-resultado.png"
                    aria-label={copy.share.videoLabel}
                  >
                    <source src="/videos/flyover-share-demo.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
              <p className="relative z-10 mt-6 text-center text-[10px] uppercase tracking-[0.18em] text-[color:var(--color-fg-dim)]">
                {copy.share.note}
              </p>
            </article>
          </Reveal>

          <Reveal className="lg:col-span-7" delay={0.08} y={28}>
            <article className="feature-story group min-h-[470px]">
              <Image
                src="/lifestyle/friends-comparing-territory.png"
                alt={copy.features[4].title}
                fill
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="feature-story-image object-cover object-[48%_center]"
              />
              <div className="feature-story-shade" />
              <div className="absolute inset-x-0 bottom-0 p-7 sm:p-10">
                <div className="flex flex-wrap gap-2">
                  <span className="feature-chip">{copy.features[2].title}</span>
                  <span className="feature-chip">{copy.socialLabel}</span>
                </div>
                <h3 className="font-display mt-4 max-w-xl text-3xl leading-tight text-white sm:text-4xl">
                  {copy.features[4].title}
                </h3>
                <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-white/75 sm:text-base">
                  {copy.features[2].body} {copy.features[4].body}
                </p>
              </div>
            </article>
          </Reveal>

          <div className="grid gap-5 lg:col-span-5">
            {compactFeatures.map((feature, index) => (
              <Reveal key={feature.title} delay={0.1 + index * 0.04} y={24}>
                <article className="feature-compact group flex min-h-[142px] gap-5 p-6">
                  <span className="relative grid size-11 shrink-0 place-items-center rounded-2xl border border-[color:var(--color-coral-500)]/25 bg-[color:var(--color-coral-500)]/10 text-[color:var(--color-coral-400)]">
                    <svg viewBox="0 0 24 24" className="size-5" aria-hidden>
                      {compactIcons[index]}
                    </svg>
                  </span>
                  <div className="relative">
                    <h3 className="font-display text-lg text-white">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[color:var(--color-fg-muted)]">
                      {feature.body}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
