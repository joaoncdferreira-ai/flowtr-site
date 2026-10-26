import Link from "next/link";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { Logo } from "@/components/Logo";
import { localeInfo, localePath, siteCopy, type Locale } from "@/lib/site-i18n";
import { APP_STORE_URL, GOOGLE_PLAY_URL } from "@/lib/store-links";
import { competitorSlugs, competitorNames } from "@/lib/comparisons";

const shellCopy = {
  pt: {
    back: "Voltar ao início da Flowtr",
    download: "Descarrega a Flowtr grátis",
    downloadBody: "Disponível para iPhone e Android. Grátis e sem anúncios.",
    more: "Ver também",
    home: "Início",
  },
  en: {
    back: "Back to Flowtr home",
    download: "Download Flowtr for free",
    downloadBody: "Available for iPhone and Android. Free, no ads.",
    more: "See also",
    home: "Home",
  },
  es: {
    back: "Volver al inicio de Flowtr",
    download: "Descarga Flowtr gratis",
    downloadBody: "Disponible para iPhone y Android. Gratis y sin anuncios.",
    more: "Ver también",
    home: "Inicio",
  },
} as const;

export function StoreButtons({ locale }: { locale: Locale }) {
  const hero = siteCopy[locale].hero;
  return (
    <div className="flex flex-wrap gap-3">
      <a
        href={GOOGLE_PLAY_URL}
        className="btn btn-primary !h-12 !px-4 !text-[13px] min-[420px]:!px-7 min-[420px]:!text-sm"
        target="_blank"
        rel="noreferrer"
      >
        {hero.primary}
      </a>
      <a
        href={APP_STORE_URL}
        className="btn btn-primary !h-12 !px-4 !text-[13px] min-[420px]:!px-7 min-[420px]:!text-sm"
        target="_blank"
        rel="noreferrer"
      >
        App Store
      </a>
    </div>
  );
}

export function ContentSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-10 border-t border-border pt-8">
      <h2 className="font-display text-2xl">{title}</h2>
      <div className="mt-5 space-y-4 leading-7 text-fg-muted">{children}</div>
    </section>
  );
}

/**
 * Shared frame for the SEO content pages (Lisbon, comparisons): same surface,
 * header and language switcher as the support page, plus a download block
 * and links to the sibling pages.
 */
export function ContentPage({
  locale,
  suffix,
  eyebrow,
  title,
  intro,
  children,
}: {
  locale: Locale;
  suffix: string;
  eyebrow: string;
  title: string;
  intro: React.ReactNode;
  children: React.ReactNode;
}) {
  const copy = shellCopy[locale];
  const footer = siteCopy[locale].footer;
  const related = [
    { href: localePath(locale), label: copy.home },
    { href: localePath(locale, "/lisboa"), label: footer.lisbon },
    ...competitorSlugs.map((slug) => ({
      href: localePath(locale, `/vs/${slug}`),
      label: `Flowtr vs ${competitorNames[slug]}`,
    })),
    { href: localePath(locale, "/support"), label: footer.support },
  ].filter((item) => item.href !== localePath(locale, suffix));

  return (
    <main
      id="main-content"
      lang={localeInfo[locale].htmlLang}
      className="flex-1 px-4 py-10 sm:px-6 sm:py-14"
    >
      <article className="surface mx-auto w-full max-w-4xl p-7 sm:p-10">
        <div className="flex items-center justify-between gap-4">
          <Link
            href={localePath(locale)}
            className="inline-flex items-center gap-3 text-white transition-opacity hover:opacity-80"
            aria-label={copy.back}
          >
            <Logo className="h-10 w-auto" />
            <span className="font-display tracking-[0.18em]">FLOWTR</span>
          </Link>
          <LanguageSwitcher locale={locale} suffix={suffix} />
        </div>

        <p className="font-display mt-10 text-sm text-coral">{eyebrow}</p>
        <h1 className="font-display mt-3 text-3xl leading-tight sm:text-5xl">
          {title}
        </h1>
        <div className="mt-5 max-w-2xl space-y-4 text-base leading-7 text-fg-muted sm:text-lg">
          {intro}
        </div>
        <div className="mt-7">
          <StoreButtons locale={locale} />
        </div>

        {children}

        <section className="mt-12 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6">
          <h2 className="font-display text-xl text-white">{copy.download}</h2>
          <p className="mt-2 leading-7 text-fg-muted">{copy.downloadBody}</p>
          <div className="mt-5">
            <StoreButtons locale={locale} />
          </div>
        </section>

        <nav className="mt-10 border-t border-border pt-8" aria-label={copy.more}>
          <h2 className="font-display text-lg">{copy.more}</h2>
          <ul className="mt-4 flex flex-wrap gap-3">
            {related.map((item) => (
              <li key={item.href}>
                <Link className="btn btn-ghost !h-11 !text-xs" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </article>
    </main>
  );
}
