import Image from "next/image";

// Flowtr logo — mark only. Render the "FLOWTR" wordmark as a sibling
// text node when needed (Nav, Footer).
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
