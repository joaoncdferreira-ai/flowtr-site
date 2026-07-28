import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

const questions = [
  {
    question: "Tenho de deixar o ecrã ligado durante a corrida?",
    answer:
      "Não. Depois de iniciares uma corrida, a Flowtr continua a registá-la com o ecrã bloqueado. No Android, vês uma notificação enquanto o GPS está ativo. Terminar a corrida termina também esse acompanhamento.",
  },
  {
    question: "O meu percurso fica público?",
    answer:
      "O mapa partilhado mostra os territórios conquistados, a tua alcunha, cor e foto de perfil. O percurso completo não é mostrado aos outros jogadores. Só criamos um vídeo público da corrida se escolheres partilhá-lo.",
  },
  {
    question: "Preciso de fechar um circuito?",
    answer:
      "Para conquistar território, sim: a corrida tem de formar uma área válida. A app ajuda-te a perceber quando podes fechar e, no fim, confirma o resultado antes de o guardar.",
  },
  {
    question: "A Flowtr é paga?",
    answer:
      "O lançamento é gratuito e sem anúncios. Se isso mudar no futuro, explicaremos primeiro o que muda e o que continua gratuito.",
  },
  {
    question: "Quando chega ao iPhone e Android?",
    answer:
      "Estamos a preparar primeiro o lançamento na App Store. A versão Android segue-se na Google Play. Deixa o teu email e avisamos-te quando a versão certa para ti estiver disponível.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="relative py-[var(--space-section)]">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeader
          eyebrow="Sem dúvidas"
          title="O essencial antes da primeira corrida."
          highlight="primeira corrida"
          description="GPS, privacidade, preço e lançamento — explicado sem letra pequena."
        />

        <div className="mt-12 divide-y divide-white/[0.08] border-y border-white/[0.08]">
          {questions.map((item, index) => (
            <Reveal key={item.question} delay={index * 0.03} y={18}>
              <details className="group py-2">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-left font-display text-base text-white marker:content-none sm:text-lg">
                  <span>{item.question}</span>
                  <span
                    aria-hidden
                    className="grid size-8 shrink-0 place-items-center rounded-full border border-[color:var(--color-border-strong)] text-[color:var(--color-coral-400)] transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="max-w-3xl pb-6 pr-12 leading-7 text-[color:var(--color-fg-muted)]">
                  {item.answer}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
