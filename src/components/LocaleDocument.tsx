"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const localeFromPath = (pathname: string) => {
  if (pathname === "/en" || pathname.startsWith("/en/")) return "en";
  if (pathname === "/es" || pathname.startsWith("/es/")) return "es";
  return "pt-PT";
};

const skipLabels = {
  "pt-PT": "Saltar para o conteúdo",
  en: "Skip to content",
  es: "Saltar al contenido",
} as const;

export function LocaleDocument() {
  const pathname = usePathname();
  const locale = localeFromPath(pathname);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return (
    <a className="skip-link" href="#main-content">
      {skipLabels[locale]}
    </a>
  );
}
