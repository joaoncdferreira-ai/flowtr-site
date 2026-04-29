import Image from "next/image";

// Flowtr logo — abstract mark only (no letters baked in). Render the
// "FLOWTR" wordmark as a sibling text node when needed (Nav, Footer).
export function Logo({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/_assets/flowtr_mark_v2.svg"
      alt="Flowtr"
      width={676}
      height={635}
      className={className}
      priority
      unoptimized
    />
  );
}
