import Image from "next/image";
import type { CSSProperties } from "react";


export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32"
      style={
        {
          "--hero-map-opacity": "1",
          "--hero-map-blur": "0px",
          "--hero-map-saturate": "1.4",
          "--hero-map-brightness": "0.4",
          "--hero-map-dark-left": "0.75",
          "--hero-map-dark-mid": "1.0",
          "--hero-map-dark-right": "0.75",
          "--hero-map-coral": "0",
          "--hero-grid-opacity": "0",
        } as CSSProperties
      }
    >
      {/* atmospheric map backdrop: desktop only so mobile keeps the hero light */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-30 hidden md:block"
      >
        <Image
          src="/_assets/lisboa_map_bg.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="scale-[1.03] object-cover object-[50%_58%] opacity-[var(--hero-map-opacity)] blur-[var(--hero-map-blur)] saturate-[var(--hero-map-saturate)] brightness-[var(--hero-map-brightness)]"
        />
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-20 hidden md:block"
        style={{
          background:
            "linear-gradient(90deg, rgba(7,7,10,var(--hero-map-dark-left)) 0%, rgba(7,7,10,var(--hero-map-dark-left)) 23%, rgba(7,7,10,var(--hero-map-dark-mid)) 52%, rgba(7,7,10,var(--hero-map-dark-right)) 100%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-20 hidden md:block"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 68% 38%, rgba(255,87,51,var(--hero-map-coral)), transparent 62%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-20 hidden h-52 bg-gradient-to-b from-transparent to-[color:var(--color-bg)] md:block"
      />

      {/* ambient grid */}
      <div
        aria-hidden
        className="grid-bg pointer-events-none absolute inset-0 -z-10 opacity-[var(--hero-grid-opacity)]"
      />
      {/* coral aurora */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 -z-10 h-[640px] w-[1100px] -translate-x-1/2 rounded-full opacity-25 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(255,87,51,0.55), rgba(255,87,51,0) 70%)",
        }}
      />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-[1.15fr_0.85fr] md:gap-16">
        {/* Left: copy */}
        <div className="text-balance">
          <div
            className="anim-fade-up mb-6 inline-flex items-center gap-2 rounded-full border border-[color:var(--color-border-strong)] bg-[color:var(--color-ink-800)]/80 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-[color:var(--color-fg-muted)]"
            style={{ animationDelay: "0ms" }}
          >
            <span className="size-1.5 rounded-full bg-[color:var(--color-coral-500)] shadow-[0_0_10px_rgba(255,87,51,0.8)]" />
            Alpha 1 · Maio 2026
          </div>

          <h1
            className="anim-fade-up font-display text-[clamp(2.6rem,7vw,5.6rem)] leading-[0.95] tracking-tight text-white"
            style={{ animationDelay: "80ms" }}
          >
            <span className="block">Corre.</span>
            <span className="block">Conquista.</span>
            <span className="block coral-glow">Domina.</span>
          </h1>

          <p
            className="anim-fade-up mt-6 max-w-xl text-lg leading-relaxed text-[color:var(--color-fg-muted)] md:text-xl"
            style={{ animationDelay: "220ms" }}
          >
            Flowtr transforma cada corrida num jogo de território. Desenha o teu
            perímetro a correr, conquista o mapa e defende-o contra outros
            jogadores.
          </p>

          <div
            className="anim-fade-up mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
            style={{ animationDelay: "360ms" }}
          >
            <a href="#waitlist" className="btn btn-primary">
              Entra na waitlist
              <svg viewBox="0 0 24 24" className="size-4" aria-hidden>
                <path
                  fill="currentColor"
                  d="M13.293 4.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L17.586 12H4a1 1 0 1 1 0-2h13.586l-4.293-4.293a1 1 0 0 1 0-1.414Z"
                />
              </svg>
            </a>
            <a href="#como-joga" className="btn btn-ghost">
              Como funciona
            </a>
          </div>

          <div
            className="anim-fade-in mt-10"
            style={{ animationDelay: "560ms" }}
          >
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs uppercase tracking-[0.18em] text-[color:var(--color-fg-dim)]">
              <span>Alpha 1</span>
              <span
                aria-hidden
                className="size-1 rounded-full bg-[color:var(--color-coral-500)]"
              />
              <span>Acesso faseado</span>
              <span
                aria-hidden
                className="size-1 rounded-full bg-[color:var(--color-coral-500)]"
              />
              <span>Maio 2026</span>
            </div>
          </div>
        </div>

        {/* Right: phone mockup with looping onboarding video */}
        <div
          className="anim-fade-up-rotate relative mx-auto w-full max-w-[360px]"
          style={{ animationDelay: "180ms" }}
        >
          {/* glowing halo */}
          <div
            aria-hidden
            className="absolute -inset-10 -z-10 rounded-full opacity-50 blur-3xl"
            style={{
              background:
                "radial-gradient(closest-side, rgba(255,87,51,0.55), transparent 70%)",
            }}
          />
          <div className="phone-frame">
            <video
              src="/videos/onboarding_01.mp4"
              poster="/screenshots-clean/visao do territorio de hoje em 3d.jpg"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-hidden="true"
              className="block aspect-[9/19.5] w-full object-cover"
            />
            {/* overlay para esconder a tira branca no fundo do video */}
            <div 
              className="pointer-events-none absolute" 
              style={{ bottom: 8, left: 8, right: 8, height: 48, width: 'calc(100% - 16px)', background: 'linear-gradient(to top, #0a0a0d 40%, transparent)', borderRadius: '0 0 28px 28px', zIndex: 10 }}
              aria-hidden="true"
            />
          </div>
          {/* floating badges */}
          <div
            aria-hidden
            className="anim-fade-in absolute -left-6 top-12 hidden rounded-2xl border border-[color:var(--color-border-strong)] bg-[color:var(--color-ink-800)]/90 px-3 py-2 text-xs backdrop-blur md:flex md:items-center md:gap-2"
            style={{ animationDelay: "800ms" }}
          >
            <span className="size-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(74,222,128,0.7)]" />
            <span className="font-display tracking-widest">CONQUISTADO</span>
            <span className="text-[color:var(--color-fg-muted)]">2 439 m²</span>
          </div>

          <noscript>
            <Image
              src="/screenshots-clean/visao do territorio de hoje em 3d.jpg"
              alt="Flowtr — território conquistado, vista 3D"
              width={360}
              height={780}
              priority
            />
          </noscript>
        </div>
      </div>

    </section>
  );
}
