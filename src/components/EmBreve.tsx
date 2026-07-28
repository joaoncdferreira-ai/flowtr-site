import { Reveal } from "./Reveal";

const cards = [
  {
    eyebrow: "Desafios",
    title: "Duelos e desafios de grupo",
    body:
      "Escolhe a duração, convida os participantes e deixa cada corrida contar para o resultado.",
    metric: "1 contra 1 · grupos até 50",
  },
  {
    eyebrow: "Rankings",
    title: "Mundo, cidade ou amigos",
    body:
      "Compara área, distância e território na semana, no mês ou desde o início.",
    metric: "global · cidade · amigos",
  },
  {
    eyebrow: "Progresso",
    title: "Emblemas, séries e Diário",
    body:
      "Vê o que conquistaste, quantos dias levas a correr e o que os rivais te tiraram.",
    metric: "emblemas · séries · diário",
  },
  {
    eyebrow: "Partilha",
    title: "Vídeo, imagem ou autocolante",
    body:
      "Cria uma peça pronta a partilhar a partir da corrida ou do resultado de um desafio.",
    metric: "vídeo · imagem · autocolante",
  },
];

export function EmBreve() {
  return (
    <section id="voltar" className="relative py-[var(--space-section)]">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[color:var(--color-border-strong)] bg-[color:var(--color-ink-800)]/70 px-3 py-1 text-[11px] uppercase tracking-[0.25em] text-[color:var(--color-fg-muted)]">
              <span className="size-1 rounded-full bg-[color:var(--color-coral-500)]" />
              Para voltar ao mapa
            </div>
            <h2 className="font-display text-balance text-4xl leading-[1.05] text-white md:text-6xl">
              A corrida termina.{" "}
              <span className="coral-glow">A disputa fica.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-pretty leading-7 text-[color:var(--color-fg-muted)] md:text-lg">
              Se alguém conquistar uma área tua, podes recuperá-la. Se um amigo
              te desafiar, a próxima corrida já conta.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
          {cards.map((card, index) => (
            <Reveal key={card.title} delay={index * 0.05} y={24}>
              <article className="surface group h-full p-7 transition-colors hover:border-[color:var(--color-coral-500)]/40">
                <p className="text-[11px] uppercase tracking-[0.25em] text-[color:var(--color-coral-400)]">
                  {card.eyebrow}
                </p>
                <h3 className="font-display mt-4 text-xl leading-tight text-white sm:text-2xl">
                  {card.title}
                </h3>
                <p className="mt-4 leading-7 text-[color:var(--color-fg-muted)]">
                  {card.body}
                </p>
                <p className="mt-7 border-t border-white/[0.08] pt-4 text-xs uppercase tracking-[0.18em] text-[color:var(--color-fg-dim)]">
                  {card.metric}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
