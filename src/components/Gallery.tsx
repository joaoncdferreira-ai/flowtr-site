import Image from "next/image";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

// Real Flowtr badges, sourced from the app (assets/badges/*_unlocked.svg).
// Copy taken from MilestoneService where available; remaining inferred
// from the badge slug + game mechanics. SVGs are gold (#c6b558) line
// icons — kept as-is to match the app exactly.
const badges = [
  { slug: "primeiro_passo", name: "Primeiro passo", desc: "O teu primeiro território conquistado." },
  { slug: "conquistador", name: "Conquistador", desc: "10 territórios roubados a rivais." },
  { slug: "maratonista", name: "Maratonista", desc: "42.2 km numa única corrida." },
  { slug: "vingador", name: "Vingador", desc: "Reconquistaste território perdido." },
  { slug: "senhor_terra", name: "Senhor da Terra", desc: "Acumulaste 10 hectares de território." },
  { slug: "em_chamas", name: "Em chamas", desc: "7 dias de corridas seguidas." },
  { slug: "defensor", name: "Defensor", desc: "Defendeste território de invasão." },
  { slug: "elite", name: "Elite", desc: "Entraste no Top 10 da tua cidade." },
];

const shots = [
  { src: "/screenshots-clean/visao do territorio de hoje em 3d.jpg", alt: "Vista 3D do território conquistado em Lisboa", caption: "Mapa 3D · Estádio da Luz" },
  { src: "/screenshots-clean/visao zoomour varios territorios.jpg", alt: "Vários territórios conquistados visíveis no mapa", caption: "Zoom — vários territórios" },
  { src: "/screenshots-clean/2 terriotrios seninelas baixa de lx.jpg", alt: "Dois territórios sentinela na baixa de Lisboa", caption: "Sentinelas · Baixa" },
  { src: "/screenshots-clean/visao de dois territorios de sentinelas noa baixa de lisboa.jpg", alt: "Dois territórios sentinela em vista 3D", caption: "Sentinelas · 3D" },
  { src: "/screenshots-clean/tambem territorios sentinelas na baixa, mapa 3d.jpg", alt: "Mapa 3D com territórios sentinela", caption: "Baixa · 3D" },
  { src: "/screenshots-clean/um territorio grande sentinela belem com muitas bandeiras la ao fundo, visao 45graus.jpg", alt: "Território sentinela em Belém com bandeiras", caption: "Belém · 45°" },
  { src: "/screenshots-clean/diario.jpg", alt: "Diário de guerra com badges, marcos e conquistas", caption: "Diário de guerra" },
  { src: "/screenshots-clean/badges.jpg", alt: "Badges desbloqueados pelo jogador", caption: "Badges" },
  { src: "/screenshots-clean/profile page.jpg", alt: "Página de perfil com estatísticas do jogador", caption: "Perfil" },
  { src: "/screenshots-clean/rankings.jpg", alt: "Tabela de rankings dos jogadores", caption: "Rankings" },
  { src: "/screenshots-clean/historico corridas.jpg", alt: "Histórico de corridas do jogador", caption: "Histórico" },
  { src: "/screenshots-clean/conquistado x m2.png", alt: "Sumário de m² conquistados após a corrida", caption: "Conquista · m²" },
  { src: "/screenshots-clean/escolha de territorio por reclamar, terminar etc.png", alt: "Escolha de ação sobre território — reclamar ou terminar", caption: "Acção · Território" },
];

// Duplicate for seamless loop.
const track = [...shots, ...shots];

export function Gallery() {
  return (
    <section id="em-accao" className="relative py-[var(--space-section)] overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Vê em acção"
          title="Lisboa, com o teu nome em cima."
          highlight="teu nome"
          description="11 ecrãs reais do app. Sem mockups. Sem Figma. Cada pixel é Flowtr a correr no terreno."
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
                <div className="phone-frame">
                  <Image
                    src={s.src}
                    alt={s.alt}
                    width={1080}
                    height={2340}
                    sizes="240px"
                    className="object-cover"
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
            Conquistas que se ganham, não se compram
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
