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
    title: "Parte do mapa",
    body:
      "Antes de correres, vês a cidade e os territórios que já têm dono. Carrega em INICIAR para começar a registar o percurso.",
    media: {
      kind: "image",
      src: "/app-current/mapa-inicial.jpg",
      alt: "Flowtr — mapa atual antes de iniciar uma corrida",
    },
  },
  {
    n: "02",
    title: "Fecha o percurso",
    body:
      "Corre com o ecrã ligado ou bloqueado. O GPS desenha o caminho e a Flowtr avisa quando existe uma área que podes fechar.",
    media: {
      kind: "image",
      src: "/app-current/video-3d-inicio.png",
      alt: "Flowtr — percurso visto no mapa 3D",
    },
  },
  {
    n: "03",
    title: "Revê e reclama",
    body:
      "No fim, revê a corrida e reclama o território. O resultado fica guardado no Diário e conta para os rankings e desafios.",
    media: {
      kind: "image",
      src: "/app-current/reclamar-territorio.jpg",
      alt: "Flowtr — revisão de uma corrida com território pronto a reclamar",
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
          title="Do mapa ao território em três passos."
          highlight="três passos"
          description="Escolhes o caminho. A Flowtr regista a corrida, confirma a área e atualiza o mapa."
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
                  <div className="phone-frame phone-frame-screen">
                    {step.media.kind === "image" ? (
                      <Image
                        src={step.media.src}
                        alt={step.media.alt}
                        width={1100}
                        height={2200}
                        sizes="(max-width: 768px) 280px, 320px"
                        className="block aspect-[9/19.5] w-full object-cover"
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
