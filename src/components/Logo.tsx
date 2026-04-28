import Image from "next/image";

// Flowtr logo — hexagon mark + FLOWTR wordmark stacked. The PNG asset
// includes both the mark and the wordmark, so consumers should NOT add
// a sibling text node when this is rendered.
export function Logo({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/_assets/flowtr_logo.png"
      alt="Flowtr"
      width={565}
      height={536}
      className={className}
      priority
    />
  );
}
