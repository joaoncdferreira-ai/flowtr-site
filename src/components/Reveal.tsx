import type { ReactNode, ElementType, CSSProperties } from "react";

type Props = {
  children: ReactNode;
  /** Delay in seconds (matches the original framer-motion API). */
  delay?: number;
  /** Vertical offset in pixels for the entry transform. */
  y?: number;
  className?: string;
  as?: ElementType;
};

// Server-rendered. The `data-reveal` attribute is picked up by the global
// IntersectionObserver injected in layout.tsx, which adds `data-revealed`
// on entry. Works without React hydration, falls back to fully-visible
// content via the @media (scripting: enabled) gate in globals.css.
export function Reveal({ children, delay = 0, y, className, as: Tag = "div" }: Props) {
  const style: CSSProperties = {};
  if (delay) style.transitionDelay = `${delay}s`;
  if (y !== undefined) {
    (style as Record<string, string>)["--reveal-y"] = `${y}px`;
  }

  return (
    <Tag
      className={className}
      data-reveal=""
      style={Object.keys(style).length ? style : undefined}
    >
      {children}
    </Tag>
  );
}
