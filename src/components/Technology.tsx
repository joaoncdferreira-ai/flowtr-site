import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

const items = [
  {
    title: "Sinal GPS filtrado",
    body:
      "O percurso é filtrado no telemóvel e validado antes de virar território. Menos ruído, menos saltos de posição e mais justiça no mapa.",
  },
  {
    title: "Geometria computacional",
    body:
      "Loops, auto-intersecções, áreas e sobreposições são tratados como polígonos reais, com regras próprias de conquista.",
  },
  {
    title: "Motor geoespacial 3D",
    body:
      "Mapa 3D, territórios extrudidos, bandeiras e rivais juntam-se numa camada visual feita para competição no mundo real.",
  },
];

export function Technology() {
  return (
    <section id="tecnologia" className="relative py-[var(--space-section)]">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Tecnologia"
          title="Tecnologia que desaparece durante a corrida."
          highlight="Tecnologia"
          description="Por baixo do jogo há filtragem GPS, geometria computacional, mapas 3D e regras anti-abuso. À superfície, só tens de correr."
        />

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
          {items.map((item, i) => (
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
