// Faithful TypeScript port of `lib/widgets/gonfalon_svg_builder.dart` from
// the Flutter app. Same viewBox (90×140), same fabric/metal/hatch/avatar
// composition, same streak + heraldic-badge override paths.
//
// Server Component — renders pure SVG JSX, no JS bundle cost. Use the
// `<Gonfalon ... />` component anywhere on the landing.
//
// If you need the raw SVG string for a non-React surface, call
// `buildGonfalonSvg(...)` instead — same options, returns a string.

export type GonfalonVariant = "own" | "rival";

export type GonfalonProps = {
  variant?: GonfalonVariant;
  /** First letter shown when no `photoUrl` is provided. */
  initial?: string;
  /** Streak length (days). Hidden when < 3 or variant !== "own". Coral 3-6, gold 7+. */
  streak?: number;
  /** When set, embedded as <image> clipped to a circle inside the avatar slot. */
  photoUrl?: string;
  /** Rival fabric tint (overrides the default charcoal). e.g. "#4A90D9". */
  tintColorHex?: string;
  /** Heraldic-profile badge override (replaces streak). number > 0 + variant=own. */
  badgeNumber?: number;
  badgeFillHex?: string;
  badgeStrokeHex?: string;
  /** Heraldic-profile own-fabric overrides. Ignored when variant !== "own". */
  ownFabricTopHex?: string;
  ownFabricBotHex?: string;
  ownFabricStrokeHex?: string;
  /** Render width in CSS pixels. Aspect ratio is fixed (height = width × 140/90). */
  width?: number;
  className?: string;
  /** Stable suffix to disambiguate <defs> ids when multiple gonfalons share a page. */
  idSuffix?: string;
};

// ---------- color helpers (port of Dart _lighten / _darken / _adjust) ----------

function adjust(hex: string, amount: number): string {
  const h = hex.replace("#", "");
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  const shift = (c: number) => {
    const next =
      amount >= 0 ? c + (255 - c) * amount : c * (1 + amount);
    return Math.max(0, Math.min(255, Math.round(next)));
  };
  const hx = (c: number) => c.toString(16).padStart(2, "0");
  return `#${hx(shift(r))}${hx(shift(g))}${hx(shift(b))}`;
}

const lighten = (hex: string) => adjust(hex, 0.25);
const darken = (hex: string) => adjust(hex, -0.35);

/**
 * Convenience: from a single base territory color, produce the three hex
 * values the gonfalon's "own" fabric path expects. Mirrors how the Dart
 * builder derives the rival fabric from `tintColorHex` — same lighten /
 * darken adjustments — but applies them to the OWN fabric overrides so
 * the player-color landing showcase can iterate over a list of base hexes.
 */
export function gonfalonOwnFabric(baseHex: string): {
  ownFabricTopHex: string;
  ownFabricBotHex: string;
  ownFabricStrokeHex: string;
} {
  return {
    ownFabricTopHex: lighten(baseHex),
    ownFabricBotHex: darken(baseHex),
    ownFabricStrokeHex: adjust(baseHex, -0.55),
  };
}

// ---------- raw-string builder (parallel to the Dart API) ----------

export function buildGonfalonSvg(props: GonfalonProps): string {
  const variant = props.variant ?? "own";
  const initial = props.initial ?? "J";
  const streak = props.streak ?? 0;
  const own = variant === "own";
  const id = props.idSuffix ?? "";

  const ownTop = props.ownFabricTopHex ?? "#FF6B3D";
  const ownBot = props.ownFabricBotHex ?? "#CC3A10";
  const fabricTop = own
    ? ownTop
    : props.tintColorHex
    ? lighten(props.tintColorHex)
    : "#606068";
  const fabricBot = own
    ? ownBot
    : props.tintColorHex
    ? darken(props.tintColorHex)
    : "#38383E";

  const metal1 = own ? "#F2D27A" : "#D6D8DC";
  const metal2 = own ? "#D4A24A" : "#9096A0";
  const metal3 = own ? "#8C6A2E" : "#4A4E58";

  const avatarBg = own ? "#2a1812" : "#1d1d22";
  const fabricStroke = own
    ? props.ownFabricStrokeHex ?? "#8C2A08"
    : "#2a2a30";

  const avatarContent = props.photoUrl
    ? `<image href="${props.photoUrl}" x="0" y="0" width="40" height="40" clip-path="url(#avclip${id})" preserveAspectRatio="xMidYMid slice"/>`
    : `<text x="20" y="27" text-anchor="middle" font-family="Saira Condensed, system-ui, sans-serif" font-size="22" font-weight="900" fill="${metal1}" letter-spacing="0.5">${initial}</text>`;

  let streakBlock = "";
  if (props.badgeNumber !== undefined) {
    if (props.badgeNumber > 0 && own) {
      const fill = props.badgeFillHex ?? "#FF6B3D";
      const stroke = props.badgeStrokeHex ?? fill;
      const isTransparent = fill.toLowerCase() === "transparent";
      const circleFill = isTransparent ? "#FFFFFF" : "#1A1A1A";
      const circleStroke = isTransparent ? "#FFFFFF" : stroke;
      const textColor = isTransparent ? "#1A1A1A" : fill;
      streakBlock =
        `<g transform="translate(70,12)">` +
        `<circle r="9" fill="${circleFill}" stroke="${circleStroke}" stroke-width="1.5"/>` +
        `<text y="4" text-anchor="middle" font-family="Saira Condensed, system-ui, sans-serif" font-size="10" font-weight="900" fill="${textColor}">${props.badgeNumber}</text>` +
        `</g>`;
    }
  } else if (streak >= 3 && own) {
    const streakFill = streak >= 7 ? "#F2D27A" : "#FF6B3D";
    streakBlock =
      `<g transform="translate(70,12)">` +
      `<circle r="9" fill="#1A1A1A" stroke="${streakFill}" stroke-width="1.5"/>` +
      `<text y="4" text-anchor="middle" font-family="Saira Condensed, system-ui, sans-serif" font-size="10" font-weight="900" fill="${streakFill}">${streak}</text>` +
      `</g>`;
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 140" overflow="visible">
  <defs>
    <linearGradient id="fab${id}" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="${fabricTop}"/><stop offset="1" stop-color="${fabricBot}"/>
    </linearGradient>
    <linearGradient id="met${id}" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="${metal1}"/>
      <stop offset="0.5" stop-color="${metal2}"/>
      <stop offset="1" stop-color="${metal3}"/>
    </linearGradient>
    <linearGradient id="ring${id}" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${metal1}"/>
      <stop offset="0.5" stop-color="${metal2}"/>
      <stop offset="1" stop-color="${metal3}"/>
    </linearGradient>
    <pattern id="htc${id}" width="4" height="4" patternTransform="rotate(45)" patternUnits="userSpaceOnUse">
      <line x1="0" y1="0" x2="0" y2="4" stroke="rgba(255,255,255,0.07)" stroke-width="0.6"/>
    </pattern>
    <path id="body${id}" d="M 12 22 L 78 22 L 76 108 L 68 98 L 60 108 L 52 98 L 45 108 L 38 98 L 30 108 L 22 98 L 14 108 Z"/>
    <clipPath id="avclip${id}"><circle cx="20" cy="20" r="18"/></clipPath>
  </defs>

  <rect x="43" y="4" width="4" height="130" fill="url(#met${id})" rx="1"/>
  <polygon points="45,0 48,6 45,12 42,6" fill="${metal1}"/>
  <rect x="10" y="18" width="70" height="5" fill="url(#met${id})" rx="1"/>

  <use href="#body${id}" fill="rgba(0,0,0,0.35)" transform="translate(1.5,2)"/>
  <use href="#body${id}" fill="url(#fab${id})" stroke="${fabricStroke}" stroke-width="0.6"/>
  <use href="#body${id}" fill="url(#htc${id})"/>

  <circle cx="45" cy="55" r="20" fill="rgba(0,0,0,0.45)" stroke="url(#ring${id})" stroke-width="2.2"/>
  <svg x="25" y="35" width="40" height="40" viewBox="0 0 40 40">
    <circle cx="20" cy="20" r="18" fill="${avatarBg}"/>
    ${avatarContent}
  </svg>

  ${streakBlock}
</svg>`;
}

// ---------- React component (preferred surface) ----------

export function Gonfalon({
  width = 90,
  className,
  ...rest
}: GonfalonProps) {
  const svg = buildGonfalonSvg(rest);
  const height = Math.round(width * (140 / 90));
  return (
    <span
      className={className}
      style={{
        display: "inline-block",
        width,
        height,
        // overflow:visible in the source SVG lets the avatar/badge spill
        // beyond the 90×140 viewBox; preserve that on the wrapper too.
        overflow: "visible",
      }}
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
