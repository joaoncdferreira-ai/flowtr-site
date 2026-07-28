import type { Locale, SiteCopy } from "@/lib/site-i18n";
import { localePath } from "@/lib/site-i18n";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Logo } from "./Logo";

export function Footer({
  locale,
  copy,
}: {
  locale: Locale;
  copy: SiteCopy;
}) {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-[color:var(--color-border)] bg-[color:var(--color-ink-950)]/60">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <Logo className="h-12 w-auto" />
          <span className="font-display text-xl tracking-[0.18em] text-white">FLOWTR</span>
          <div className="text-xs text-[color:var(--color-fg-dim)]">
            {copy.footer.madeIn}
          </div>
        </div>

        <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-[color:var(--color-fg-muted)]">
          <a href="#o-que-e" className="hover:text-white transition-colors">{copy.nav.what}</a>
          <a href="#como-joga" className="hover:text-white transition-colors">{copy.nav.how}</a>
          <a href="#em-accao" className="hover:text-white transition-colors">{copy.nav.action}</a>
          <a href="#faq" className="hover:text-white transition-colors">{copy.nav.faq}</a>
          <a href={localePath(locale, "/support")} className="hover:text-white transition-colors">
            {copy.footer.support}
          </a>
          <a href={localePath(locale, "/privacy")} className="hover:text-white transition-colors">
            {copy.footer.privacy}
          </a>
          <a href={localePath(locale, "/terms")} className="hover:text-white transition-colors">
            {copy.footer.terms}
          </a>
          <a href={localePath(locale, "/delete-account")} className="hover:text-white transition-colors">
            {copy.footer.deleteAccount}
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <LanguageSwitcher locale={locale} />
          <div className="text-xs text-[color:var(--color-fg-dim)]">
            © {year} Flowtr
          </div>
        </div>
      </div>
    </footer>
  );
}
