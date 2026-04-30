import type { Metadata, Viewport } from "next";
import { Russo_One, Chakra_Petch } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { PostHogInit } from "@/components/PostHogProvider";
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

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://flowtr.app";
const TITLE = "Flowtr — Corre. Conquista. Domina.";
const DESCRIPTION =
  "Flowtr transforma cada corrida num jogo de território. Desenha o teu perímetro a correr, conquista o mapa e defende-o contra outros corredores.";

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
    "running game",
    "corrida",
    "território",
    "GPS game",
    "fitness",
    "gamificação",
    "Alpha 1",
  ],
  authors: [{ name: "Flowtr" }],
  creator: "Flowtr",
  publisher: "Flowtr",
  alternates: {
    canonical: "/",
    languages: { "pt-PT": "/" },
  },
  openGraph: {
    type: "website",
    locale: "pt_PT",
    url: SITE_URL,
    title: TITLE,
    description: DESCRIPTION,
    siteName: "Flowtr",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Flowtr — Corre. Conquista. Domina.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og-image.png"],
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  name: "Flowtr",
  operatingSystem: "Android",
  applicationCategory: "HealthApplication",
  description: DESCRIPTION,
  inLanguage: "pt-PT",
  offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    ratingCount: "1",
    reviewCount: "1",
  },
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
        {children}
        <PostHogInit />
        <Analytics />
        <SpeedInsights />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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
