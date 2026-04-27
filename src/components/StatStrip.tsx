import { Reveal } from "./Reveal";

const stats = [
  { value: "1 500+", label: "m² conquistados em Alpha 1" },
  { value: "20+", label: "testers ativos em Lisboa" },
  { value: "8", label: "avatares procedurais" },
  { value: "100%", label: "GPS local · zero ads" },
];

export function StatStrip() {
  return (
    <section className="relative border-y border-[color:var(--color-border)] bg-[color:var(--color-ink-900)]/60 backdrop-blur">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-6 gap-y-8 px-6 py-10 md:grid-cols-4 md:py-14">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.06} y={20}>
            <div>
              <div className="font-display text-3xl text-white md:text-4xl">
                {s.value}
              </div>
              <div className="mt-1 text-xs uppercase tracking-[0.2em] text-[color:var(--color-fg-dim)] md:text-[13px]">
                {s.label}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
