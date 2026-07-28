import { Logo } from "./Logo";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-[color:var(--color-border)] bg-[color:var(--color-ink-950)]/60">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <Logo className="h-12 w-auto" />
          <span className="font-display text-xl tracking-[0.18em] text-white">FLOWTR</span>
          <div className="text-xs text-[color:var(--color-fg-dim)]">
            Feito em Lisboa · por corredores
          </div>
        </div>

        <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-[color:var(--color-fg-muted)]">
          <a href="#o-que-e" className="hover:text-white transition-colors">O que é</a>
          <a href="#como-joga" className="hover:text-white transition-colors">Como se joga</a>
          <a href="#em-accao" className="hover:text-white transition-colors">Em acção</a>
          <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          <a href="/support" className="hover:text-white transition-colors">
            Suporte
          </a>
          <a href="/privacy" className="hover:text-white transition-colors">
            Privacidade
          </a>
          <a href="/terms" className="hover:text-white transition-colors">
            Termos
          </a>
          <a href="/delete-account" className="hover:text-white transition-colors">
            Eliminar conta
          </a>
        </nav>

        <div className="text-xs text-[color:var(--color-fg-dim)]">
          © {year} Flowtr
        </div>
      </div>
    </footer>
  );
}
