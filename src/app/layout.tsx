import type { Metadata, Viewport } from "next";
import { Russo_One, Chakra_Petch } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { LocaleDocument } from "@/components/LocaleDocument";
import { brandTitle, OG_IMAGE, SITE_URL } from "@/lib/seo";
import "./globals.css";

const russo = Russo_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-russo",
  display: "swap",
});

const chakra = Chakra_Petch({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-chakra",
  display: "swap",
});

const TITLE = brandTitle.pt;
const DESCRIPTION =
  "Jogo de corrida gratuito para iOS e Android: fecha um percurso, reclama a área num mapa partilhado e disputa território com outros corredores. Feito em Lisboa.";

// Pages without their own alternates (e.g. challenge invites) must not inherit
// a canonical, so alternates live on each indexable page instead of here.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s · Flowtr",
  },
  description: DESCRIPTION,
  applicationName: "Flowtr",
  keywords: [
    "Flowtr",
    "jogo de corrida",
    "conquista de território",
    "running game",
    "territory game",
    "corrida",
    "Lisboa",
    "GPS game",
    "fitness",
  ],
  authors: [{ name: "Flowtr" }],
  creator: "Flowtr",
  publisher: "Flowtr",
  openGraph: {
    type: "website",
    locale: "pt_PT",
    url: SITE_URL,
    title: TITLE,
    description: DESCRIPTION,
    siteName: "Flowtr",
    images: [{ ...OG_IMAGE, alt: TITLE }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE.url],
  },
  robots: { index: true, follow: true },
  category: "fitness",
};

export const viewport: Viewport = {
  themeColor: "#0a0a0d",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-PT"
      className={`${russo.variable} ${chakra.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <LocaleDocument />
        {children}
        <Analytics />
        <SpeedInsights />
        {/* Reveal-on-scroll. Plain JS, no framework dependency: runs as
            soon as the script is parsed, observes all [data-reveal] nodes
            (including those added later) and flips data-revealed when
            they intersect the viewport. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){if(!('IntersectionObserver' in window)){document.querySelectorAll('[data-reveal]').forEach(function(e){e.setAttribute('data-revealed','')});return}var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.setAttribute('data-revealed','');io.unobserve(e.target)}})},{rootMargin:'0px 0px -8% 0px',threshold:.05});var seen=new WeakSet();function scan(){document.querySelectorAll('[data-reveal]:not([data-revealed])').forEach(function(el){if(!seen.has(el)){seen.add(el);io.observe(el)}})}scan();var mo=new MutationObserver(scan);mo.observe(document.body,{childList:!0,subtree:!0})})();`,
          }}
        />
      </body>
    </html>
  );
}
