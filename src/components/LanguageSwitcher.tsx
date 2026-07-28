import Link from "next/link";
import {
  localeInfo,
  localePath,
  locales,
  type Locale,
} from "@/lib/site-i18n";

const labels: Record<Locale, string> = {
  pt: "Idioma",
  en: "Language",
  es: "Idioma",
};

export function LanguageSwitcher({
  locale,
  suffix = "",
}: {
  locale: Locale;
  suffix?: string;
}) {
  return (
    <nav
      aria-label={labels[locale]}
      className="flex shrink-0 items-center rounded-full border border-white/[0.1] bg-black/20 p-1 text-[11px] font-semibold tracking-[0.12em]"
    >
      {locales.map((item) => (
        <Link
          key={item}
          href={localePath(item, suffix)}
          hrefLang={localeInfo[item].htmlLang}
          aria-current={item === locale ? "page" : undefined}
          className={[
            "rounded-full px-2.5 py-1.5 transition-colors",
            item === locale
              ? "bg-[color:var(--color-coral-500)] text-black"
              : "text-[color:var(--color-fg-muted)] hover:text-white",
          ].join(" ")}
        >
          {localeInfo[item].label}
        </Link>
      ))}
    </nav>
  );
}
