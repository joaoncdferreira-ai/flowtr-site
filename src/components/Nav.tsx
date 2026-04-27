"use client";

import { useEffect, useState } from "react";
import { Logo } from "./Logo";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "fixed top-3 left-3 right-3 z-50 mx-auto flex max-w-6xl items-center justify-between rounded-full px-3 py-2 transition-all duration-300",
        scrolled
          ? "bg-[color:var(--color-ink-900)]/80 backdrop-blur-xl border border-[color:var(--color-border)] shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)]"
          : "bg-transparent border border-transparent",
      ].join(" ")}
    >
      <a href="#top" className="flex items-center gap-2 pl-2" aria-label="Flowtr — início">
        <Logo className="size-7" />
        <span className="font-display text-lg tracking-[0.18em] text-white">FLOWTR</span>
      </a>

      <nav className="hidden md:flex items-center gap-8 font-medium text-sm text-[color:var(--color-fg-muted)]">
        <a href="#o-que-e" className="hover:text-white transition-colors">O que é</a>
        <a href="#como-joga" className="hover:text-white transition-colors">Como joga</a>
        <a href="#em-accao" className="hover:text-white transition-colors">Em acção</a>
      </nav>

      <a href="#waitlist" className="btn btn-primary !h-11 !px-4 !text-[12px] sm:!px-5 sm:!text-[13px]">
        <span className="hidden sm:inline">Entra na waitlist</span>
        <span className="sm:hidden">Waitlist</span>
      </a>
    </header>
  );
}
