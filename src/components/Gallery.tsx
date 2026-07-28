import Image from "next/image";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";
import type { SiteCopy } from "@/lib/site-i18n";

// Real Flowtr emblems, sourced from the app (assets/badges/*_unlocked.svg).
// Copy taken from MilestoneService where available; remaining inferred
// from the badge slug + game mechanics. SVGs are gold (#c6b558) line
// icons — kept as-is to match the app exactly.
const badgeSlugs = [
  "primeiro_passo",
  "maratonista",
  "em_chamas",
  "elite",
];

const shotMedia = [
  {
    kind: "video" as const,
    src: "/videos/onboarding_01.mp4",
    poster: "/videos/onboarding_01_poster.jpg",
    fit: "cover" as const,
  },
  {
    kind: "video" as const,
    src: "/videos/onboarding_03.mp4",
    poster: "/videos/onboarding_03_poster.jpg",
    fit: "cover" as const,
  },
  {
    kind: "image" as const,
    src: "/app-marketing-en/map-3d.png",
    fit: "cover" as const,
  },
  {
    kind: "image" as const,
    src: "/app-marketing-en/run-review.png",
    fit: "cover" as const,
  },
  {
    kind: "video" as const,
    src: "/videos/flyover-share-demo.mp4",
    poster: "/app-current/video-resultado.png",
    fit: "contain" as const,
  },
];

export function Gallery({ copy }: { copy: SiteCopy["gallery"] }) {
  const shots = copy.shots.map((shot, index) => ({
    ...shot,
    ...shotMedia[index],
  }));
  const track = [...shots, ...shots];
  return (
    <section id="em-accao" className="relative py-[var(--space-section)] overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow={copy.eyebrow}
          title={copy.title}
          highlight={copy.highlight}
          description={copy.description}
        />
      </div>

      <Reveal>
        <div
          className="mt-16 mask-fade"
          style={{
            WebkitMaskImage:
              "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
            maskImage:
              "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
          }}
        >
          <div className="track py-2">
            {track.map((s, i) => (
              <figure
                key={`${s.src}-${i}`}
                className="relative shrink-0"
                style={{ width: 240 }}
              >
                <div className="phone-frame phone-frame-screen">
                  {s.kind === "video" ? (
                    <video
                      className={`block aspect-[9/19.5] w-full bg-[#08090c] ${
                        s.fit === "contain" ? "object-contain" : "object-cover"
                      }`}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      poster={s.poster}
                      aria-label={s.alt}
                    >
                      <source src={s.src} type="video/mp4" />
                    </video>
                  ) : (
                    <Image
                      src={s.src}
                      alt={s.alt}
                      width={1206}
                      height={2622}
                      sizes="240px"
                      className="block aspect-[9/19.5] w-full object-cover"
                    />
                  )}
                </div>
                <figcaption className="mt-3 px-2 text-[11px] uppercase tracking-[0.18em] text-[color:var(--color-fg-dim)]">
                  {s.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.1} y={24}>
        <div className="mx-auto mt-20 max-w-7xl px-6">
          <p className="text-center text-[11px] uppercase tracking-[0.25em] text-[color:var(--color-fg-dim)]">
            {copy.badgeIntro}
          </p>
          <ul className="mt-8 flex flex-wrap justify-center gap-3 md:gap-4">
            {copy.badges.map((b, index) => (
              <li
                key={badgeSlugs[index]}
                className="flex w-[160px] flex-col items-center gap-2 rounded-xl border border-[color:var(--color-coral-500)]/20 bg-[color:var(--color-ink-800)]/80 px-4 py-4 text-center md:w-[180px]"
              >
                <Image
                  src={`/badges/badge_${badgeSlugs[index]}_unlocked.svg`}
                  alt=""
                  width={44}
                  height={44}
                  unoptimized
                  className="size-11"
                />
                <span className="font-display text-[12px] uppercase tracking-[0.16em] text-[color:var(--color-coral-400)]">
                  {b.name}
                </span>
                <span className="text-[11px] leading-snug text-[color:var(--color-fg-dim)]">
                  {b.desc}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
