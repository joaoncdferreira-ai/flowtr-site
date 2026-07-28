import { Reveal } from "./Reveal";

export function StatStrip({ items }: { items: readonly string[] }) {
  const ticker = [...items, ...items];
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
