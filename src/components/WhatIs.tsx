import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

const features = [
  {
    title: "A corrida desenha",
    body:
      "Cada metro desenha o teu perímetro. Fecha uma área válida, confirma a conquista e vê os teus m² aparecerem no mapa.",
    icon: (
      <path
        d="M12 2a8 8 0 0 0-8 8c0 5.5 8 12 8 12s8-6.5 8-12a8 8 0 0 0-8-8Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"
        fill="currentColor"
      />
    ),
  },
  {
    title: "Jogo no mundo real",
    body:
      "Joga-se nas ruas onde já corres. As corridas passam por validações de GPS e velocidade para manter o mapa mais justo.",
    icon: (
      <>
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
      </>
    ),
  },
  {
    title: "O mapa está vivo",
    body:
      "Outros corredores podem conquistar partes do teu território. Expande, recupera e acompanha no Diário tudo o que mudou.",
    icon: (
      <path
        d="M5 4h14l-1 7a7 7 0 0 1-12 0L5 4Zm5 16h4v-3h-4v3Z"
        fill="currentColor"
      />
    ),
  },
  {
    title: "Diário de guerra",
    body:
      "Conquistas, corridas, desafios e território perdido ficam reunidos num só lugar. Tens histórico, estatísticas e marcos para perseguir.",
    icon: (
      <>
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
      </>
    ),
  },
  {
    title: "Compete à tua maneira",
    body:
      "Sobe nos rankings globais, da tua cidade ou entre amigos. Cria duelos e desafios de grupo para transformar intenção em compromisso.",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="9" cy="10" r="1.5" fill="currentColor" />
        <circle cx="15" cy="10" r="1.5" fill="currentColor" />
        <circle cx="12" cy="15" r="1.5" fill="currentColor" />
      </>
    ),
  },
  {
    title: "Privacidade por escolha",
    body:
      "Sem anúncios nem venda de dados. Analytics e diagnósticos são opcionais; os territórios são públicos no jogo e partilhas o percurso só quando escolhes.",
    icon: (
      <>
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
      </>
    ),
  },
];

export function WhatIs() {
  return (
    <section
      id="o-que-e"
      className="relative py-[var(--space-section)]"
    >
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="O que é"
          title="É um jogo em cima da tua corrida."
          highlight="jogo"
          description="Mais do que contar quilómetros, a Flowtr transforma movimento em território, competição e histórias que dão vontade de voltar amanhã."
        />

        <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.05} y={28}>
              <article className="surface group relative h-full overflow-hidden p-7 transition-colors hover:border-[color:var(--color-coral-500)]/40">
                <div
                  aria-hidden
                  className="absolute -top-1/2 -right-1/2 size-64 rounded-full bg-[color:var(--color-coral-500)]/0 blur-3xl transition-all duration-500 group-hover:bg-[color:var(--color-coral-500)]/10"
                />
                <div className="relative flex items-center gap-3 text-[color:var(--color-coral-400)]">
                  <span className="grid size-10 place-items-center rounded-xl border border-[color:var(--color-coral-500)]/30 bg-[color:var(--color-coral-500)]/10">
                    <svg viewBox="0 0 24 24" className="size-5" aria-hidden>
                      {f.icon}
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
