// Inline SVG of the Flowtr brand mark (hexagon + slashes), extracted from
// `assets/icons/flowtr_logo.svg` in the Flutter app — wordmark text dropped.
// Tight viewBox crops to the hexagon's exact bounds so the SVG fills its
// box without padding (the wordmark "FLOWTR" sits beside this in the nav
// and footer, so the mark alone is what we render here).
//
// React-safe: id "flowtr-mark-clip" is namespaced enough to avoid collision
// with the in-app SVGs (which use id="h").

export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="38 13 124 144"
      aria-hidden="true"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <clipPath id="flowtr-mark-clip">
          <polygon points="100,13 162,49 162,121 100,157 38,121 38,49" />
        </clipPath>
      </defs>
      <polygon
        points="100,13 162,49 162,121 100,157 38,121 38,49"
        fill="#FF5733"
      />
      <g clipPath="url(#flowtr-mark-clip)">
        <rect
          x="-20"
          y="61"
          width="240"
          height="14"
          fill="white"
          transform="rotate(-22 100 68)"
        />
        <rect
          x="-20"
          y="95"
          width="240"
          height="14"
          fill="white"
          transform="rotate(-22 100 102)"
        />
      </g>
    </svg>
  );
}
