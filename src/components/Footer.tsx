import { Logo } from "./Logo";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-[color:var(--color-border)] bg-[color:var(--color-ink-950)]/60">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <Logo className="h-12 w-auto" />
          <div className="text-xs text-[color:var(--color-fg-dim)]">
            Lisboa · feito por corredores
          </div>
        </div>

        <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-[color:var(--color-fg-muted)]">
          <a href="#o-que-e" className="hover:text-white transition-colors">O que é</a>
          <a href="#como-joga" className="hover:text-white transition-colors">Como joga</a>
          <a href="#em-accao" className="hover:text-white transition-colors">Em acção</a>
          <a href="#waitlist" className="hover:text-white transition-colors">Waitlist</a>
          <a
            href="https://www.iubenda.com/privacy-policy/48496134"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
          >
            Privacidade
          </a>
          {/* TODO P2: replace with separate T&C URL when Iubenda upgraded */}
          <a
            href="https://www.iubenda.com/privacy-policy/48496134"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
          >
            Termos &amp; Privacidade
          </a>
        </nav>

        <div className="text-xs text-[color:var(--color-fg-dim)]">
          © {year} Flowtr · Alpha 1
        </div>
      </div>
    </footer>
  );
}
