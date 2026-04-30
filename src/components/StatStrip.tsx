import { Reveal } from "./Reveal";

const items = [
  "GPS LOCAL · ZERO ADS",
  "ALPHA 1 · 30 ABRIL",
  "TERRITÓRIO É TEU ATÉ ALGUÉM O ROUBAR",
  "FEITO EM LISBOA · 38.7223°N 9.1393°W",
];

// Duplicate the items for a seamless infinite-scroll loop. The .track
// keyframe in globals.css translates the row by -50% over 60s, which means
// when the second copy reaches the original starting position the first
// copy has just finished — no visible seam.
const ticker = [...items, ...items];

export function StatStrip() {
  return (
    <section className="relative border-y border-[color:var(--color-border)] bg-[color:var(--color-ink-900)]/60 backdrop-blur">
      <Reveal>
        <div
          className="overflow-hidden py-6 md:py-7"
          style={{
            WebkitMaskImage:
              "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
            maskImage:
              "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
          }}
        >
          <div className="track text-xs uppercase tracking-[0.22em] text-[color:var(--color-fg-muted)] md:text-[13px]">
            {ticker.map((line, i) => (
              <span
                key={`${line}-${i}`}
                className="flex shrink-0 items-center gap-6 px-6 whitespace-nowrap"
              >
                <span>{line}</span>
                <span
                  aria-hidden
                  className="size-1.5 rounded-full bg-[color:var(--color-coral-500)] shadow-[0_0_8px_rgba(255,87,51,0.7)]"
                />
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
