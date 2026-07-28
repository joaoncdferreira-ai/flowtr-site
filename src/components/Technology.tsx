import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

const items = [
  {
    title: "Sinal GPS",
    body:
      "A Flowtr reduz o ruído e os saltos de posição antes de guardar o percurso.",
  },
  {
    title: "Área válida",
    body:
      "O percurso tem de fechar uma área e cumprir as regras de distância, forma e sobreposição.",
  },
  {
    title: "Validação no servidor",
    body:
      "Velocidades impossíveis, saltos de localização e outros sinais de manipulação podem invalidar a corrida.",
  },
];

export function Technology() {
  return (
    <section id="tecnologia" className="relative py-[var(--space-section)]">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Antes de contar"
          title="Cada conquista passa por verificações."
          highlight="verificações"
          description="A Flowtr confirma o percurso e a área antes de atualizar o mapa."
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
