import Image from "next/image";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

// Real Flowtr emblems, sourced from the app (assets/badges/*_unlocked.svg).
// Copy taken from MilestoneService where available; remaining inferred
// from the badge slug + game mechanics. SVGs are gold (#c6b558) line
// icons — kept as-is to match the app exactly.
const badges = [
  { slug: "primeiro_passo", name: "Primeiro passo", desc: "O teu primeiro território conquistado." },
  { slug: "maratonista", name: "Maratonista", desc: "42.2 km numa única corrida." },
  { slug: "em_chamas", name: "Em chamas", desc: "7 dias de corridas seguidas." },
  { slug: "elite", name: "Elite", desc: "Entraste no Top 10 da tua cidade." },
];

const shots = [
  { src: "/app-current/mapa-inicial.jpg", alt: "Flowtr — mapa atual antes de iniciar uma corrida", caption: "Mapa" },
  { src: "/app-current/revisao-corrida.jpg", alt: "Flowtr — revisão de uma corrida terminada", caption: "Revisão" },
  { src: "/app-current/reclamar-territorio.jpg", alt: "Flowtr — área fechada pronta a reclamar", caption: "Território" },
  { src: "/app-current/opcoes-partilha.jpg", alt: "Flowtr — opções para partilhar uma corrida", caption: "Partilha" },
  { src: "/app-current/video-a-renderizar.jpg", alt: "Flowtr — criação do vídeo de uma corrida", caption: "O teu filme" },
  { src: "/app-current/video-3d-inicio.png", alt: "Flowtr — início de um vídeo de corrida em 3D", caption: "Vista 3D" },
  { src: "/app-current/video-3d-percurso.png", alt: "Flowtr — percurso num vídeo de corrida em 3D", caption: "Percurso 3D" },
  { src: "/app-current/video-resultado.png", alt: "Flowtr — resultado final de uma conquista pronto a partilhar", caption: "Resultado" },
];

// Duplicate for seamless loop.
const track = [...shots, ...shots];

export function Gallery() {
  return (
    <section id="em-accao" className="relative py-[var(--space-section)] overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="A aplicação"
          title="A Flowtr, tal como está hoje."
          highlight="tal como está"
          description="Capturas recentes do mapa, da revisão da corrida e das opções de partilha."
        />
      </div>

      <Reveal>
        <div
          className="mt-16 mask-fade"
          style={{
            WebkitMaskImage:
              "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
            maskImage:
              "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
          }}
        >
          <div className="track py-2">
            {track.map((s, i) => (
              <figure
                key={`${s.src}-${i}`}
                className="relative shrink-0"
                style={{ width: 240 }}
              >
                <div className="phone-frame phone-frame-screen">
                  <Image
                    src={s.src}
                    alt={s.alt}
                    width={1080}
                    height={2340}
                    sizes="240px"
                    className="block aspect-[9/19.5] w-full object-cover"
                  />
                </div>
                <figcaption className="mt-3 px-2 text-[11px] uppercase tracking-[0.18em] text-[color:var(--color-fg-dim)]">
                  {s.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.1} y={24}>
        <div className="mx-auto mt-20 max-w-7xl px-6">
          <p className="text-center text-[11px] uppercase tracking-[0.25em] text-[color:var(--color-fg-dim)]">
            Emblemas desbloqueados a correr
          </p>
          <ul className="mt-8 flex flex-wrap justify-center gap-3 md:gap-4">
            {badges.map((b) => (
              <li
                key={b.slug}
                className="flex w-[160px] flex-col items-center gap-2 rounded-xl border border-[color:var(--color-coral-500)]/20 bg-[color:var(--color-ink-800)]/80 px-4 py-4 text-center md:w-[180px]"
              >
                <Image
                  src={`/badges/badge_${b.slug}_unlocked.svg`}
                  alt=""
                  width={44}
                  height={44}
                  unoptimized
                  className="size-11"
                />
                <span className="font-display text-[12px] uppercase tracking-[0.16em] text-[color:var(--color-coral-400)]">
                  {b.name}
                </span>
                <span className="text-[11px] leading-snug text-[color:var(--color-fg-dim)]">
                  {b.desc}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
