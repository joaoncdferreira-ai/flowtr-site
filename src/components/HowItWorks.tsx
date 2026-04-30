import Image from "next/image";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

type Step = {
  n: string;
  title: string;
  body: string;
  media:
    | { kind: "image"; src: string; alt: string }
    | { kind: "video"; src: string; poster: string; ariaLabel: string };
};

const steps: Step[] = [
  {
    n: "01",
    title: "Abre o mapa",
    body:
      "Vês a tua cidade em 3D, com os territórios já conquistados — pelos teus e pelos rivais. Carrega em INICIAR e o GPS arranca.",
    media: {
      kind: "image",
      src: "/prints-site/abre o mapa (1).jpg",
      alt: "Flowtr — mapa em modo normal antes de iniciar a corrida",
    },
  },
  {
    n: "02",
    title: "Desenha o perímetro",
    body:
      "Corres em loop. O Flowtr regista a tua linha em tempo real. Quando fechas o circuito sobre o teu próprio rasto, o território é teu — automaticamente.",
    media: {
      kind: "image",
      src: "/prints-site/Adesenha o perimetro - circuito a meio.jpeg",
      alt: "Flowtr — corrida ativa a desenhar o perímetro no mapa",
    },
  },
  {
    n: "03",
    title: "Conquista e defende",
    body:
      "Recebes os m² conquistados, marcos por hectare, recordes de velocidade e distância. Outros corredores podem invadir — fica atento ao Diário.",
    media: {
      kind: "video",
      src: "/videos/onboarding_03.mp4",
      poster: "/screenshots-clean/territorio conquistado pagina com badges e dados da corrida.png",
      ariaLabel: "Flowtr — invasão de território rival",
    },
  },
];

export function HowItWorks() {
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
          eyebrow="Como se joga"
          title="Três passos. Zero teoria."
          highlight="Três"
          description="Não precisas de tutorial nem de subscrição. Liga o GPS, corre, vê o território a tornar-se teu."
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
                <div className="relative mx-auto w-full max-w-[320px]">
                  <div
                    aria-hidden
                    className="absolute -inset-8 -z-10 rounded-full opacity-40 blur-3xl"
                    style={{
                      background:
                        "radial-gradient(closest-side, rgba(255,87,51,0.4), transparent 70%)",
                    }}
                  />
                  <div className="phone-frame">
                    {step.media.kind === "image" ? (
                      <Image
                        src={step.media.src}
                        alt={step.media.alt}
                        width={1100}
                        height={2200}
                        sizes="(max-width: 768px) 280px, 320px"
                        className="object-cover"
                      />
                    ) : (
                      <video
                        src={step.media.src}
                        poster={step.media.poster}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        aria-label={step.media.ariaLabel}
                        className="block aspect-[9/19.5] w-full object-cover"
                      />
                    )}
                  </div>
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
