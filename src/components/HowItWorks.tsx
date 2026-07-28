import Image from "next/image";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";
import type { SiteCopy } from "@/lib/site-i18n";

type Step = {
  n: string;
  title: string;
  body: string;
  media:
    | { kind: "image"; src: string; alt: string }
    | { kind: "video"; src: string; poster: string; ariaLabel: string };
};

// The three films the app itself plays at onboarding (assets/videos/*.mp4),
// in the order that tells the story: run → claim → compete.
const stepMedia: Step["media"][] = [
  {
    kind: "video",
    src: "/videos/onboarding_01.mp4",
    poster: "/videos/onboarding_01_poster.jpg",
    ariaLabel: "",
  },
  {
    kind: "video",
    src: "/videos/onboarding_03.mp4",
    poster: "/videos/onboarding_03_poster.jpg",
    ariaLabel: "",
  },
  {
    kind: "video",
    src: "/videos/onboarding_02.mp4",
    poster: "/videos/onboarding_02_poster.jpg",
    ariaLabel: "",
  },
];

export function HowItWorks({ copy }: { copy: SiteCopy["how"] }) {
  const steps: Step[] = copy.steps.map((step, index) => ({
    n: String(index + 1).padStart(2, "0"),
    title: step.title,
    body: step.body,
    media: { ...stepMedia[index], ariaLabel: step.aria },
  }));
  return (
    <section
      id="como-joga"
      className="relative py-[var(--space-section)]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-50"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(255,87,51,0.06), transparent 70%)",
        }}
      />

      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow={copy.eyebrow}
          title={copy.title}
          highlight={copy.highlight}
          description={copy.description}
        />

        <div className="mt-20 flex flex-col gap-24 md:gap-32">
          {steps.map((step, i) => (
            <Reveal key={step.n} y={40}>
              <div
                className={[
                  "grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-20",
                  i % 2 === 1 ? "md:[&>div:first-child]:order-2" : "",
                ].join(" ")}
              >
                <div
                  className={[
                    "relative mx-auto w-full",
                    step.media.kind === "video"
                      ? "max-w-[360px]"
                      : "max-w-[320px]",
                  ].join(" ")}
                >
                  <div
                    aria-hidden
                    className="absolute -inset-8 -z-10 rounded-full opacity-40 blur-3xl"
                    style={{
                      background:
                        "radial-gradient(closest-side, rgba(255,87,51,0.4), transparent 70%)",
                    }}
                  />
                  {step.media.kind === "image" ? (
                    <div className="phone-frame phone-frame-screen">
                      <Image
                        src={step.media.src}
                        alt={step.media.alt}
                        width={1100}
                        height={2200}
                        sizes="(max-width: 768px) 280px, 320px"
                        className="block aspect-[9/19.5] w-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="cinema-frame">
                      <video
                        src={step.media.src}
                        poster={step.media.poster}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="none"
                        aria-label={step.media.ariaLabel}
                      />
                    </div>
                  )}
                </div>

                <div>
                  <div className="font-display mb-4 text-[color:var(--color-coral-500)] tracking-[0.3em]">
                    {step.n}
                  </div>
                  <h3 className="font-display text-3xl leading-tight text-white md:text-5xl">
                    {step.title}
                  </h3>
                  <p className="mt-5 max-w-md text-pretty text-base leading-relaxed text-[color:var(--color-fg-muted)] md:text-lg">
                    {step.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
