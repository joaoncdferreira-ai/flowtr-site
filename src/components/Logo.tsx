// Inline SVG of the Flowtr brand mark — hexagon with two diagonal slashes
// CUT OUT (transparent), not painted white. The slashes punch through the
// hexagon so whatever background sits behind the logo (dark nav, footer,
// favicon backdrop) shows through.
//
// Implementation: a <mask> where the hexagon is white (visible) and the
// two slashes are black (invisible). The single coral polygon then renders
// only where the mask says "keep".
//
// React-safe: ids "flowtr-mark-mask" / "flowtr-mark-hex" are namespaced
// to avoid collision with any other SVG on the page.

export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="38 13 124 144"
      aria-hidden="true"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <mask id="flowtr-mark-mask">
          <polygon
            points="100,13 162,49 162,121 100,157 38,121 38,49"
            fill="white"
          />
          <rect
            x="-20"
            y="61"
            width="240"
            height="14"
            fill="black"
            transform="rotate(-22 100 68)"
          />
          <rect
            x="-20"
            y="95"
            width="240"
            height="14"
            fill="black"
            transform="rotate(-22 100 102)"
          />
        </mask>
      </defs>
      <polygon
        points="100,13 162,49 162,121 100,157 38,121 38,49"
        fill="#FF5733"
        mask="url(#flowtr-mark-mask)"
      />
    </svg>
  );
}
