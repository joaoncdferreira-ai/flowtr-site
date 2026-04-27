import { Reveal } from "./Reveal";

type Props = {
  eyebrow: string;
  title: string;
  highlight?: string;
  description?: string;
};

export function SectionHeader({ eyebrow, title, highlight, description }: Props) {
  // Highlight a substring of the title in coral if provided.
  const renderTitle = () => {
    if (!highlight) return title;
    const idx = title.toLowerCase().indexOf(highlight.toLowerCase());
    if (idx < 0) return title;
    return (
      <>
        {title.slice(0, idx)}
        <span className="coral-glow">{title.slice(idx, idx + highlight.length)}</span>
        {title.slice(idx + highlight.length)}
      </>
    );
  };

  return (
    <Reveal>
      <div className="mx-auto max-w-3xl text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[color:var(--color-border-strong)] bg-[color:var(--color-ink-800)]/70 px-3 py-1 text-[11px] uppercase tracking-[0.25em] text-[color:var(--color-fg-muted)]">
          <span className="size-1 rounded-full bg-[color:var(--color-coral-500)]" />
          {eyebrow}
        </div>
        <h2 className="font-display text-balance text-4xl leading-[1.05] text-white md:text-6xl">
          {renderTitle()}
        </h2>
        {description ? (
          <p className="mx-auto mt-5 max-w-2xl text-pretty text-base text-[color:var(--color-fg-muted)] md:text-lg">
            {description}
          </p>
        ) : null}
      </div>
    </Reveal>
  );
}
