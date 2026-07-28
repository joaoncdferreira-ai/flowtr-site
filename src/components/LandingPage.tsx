import { EmBreve } from "@/components/EmBreve";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Nav } from "@/components/Nav";
import { StatStrip } from "@/components/StatStrip";
import { Technology } from "@/components/Technology";
import { Waitlist } from "@/components/Waitlist";
import { WhatIs } from "@/components/WhatIs";
import { WorldMapBackground } from "@/components/WorldMapBackground";
import { localeInfo, siteCopy, type Locale } from "@/lib/site-i18n";

export function LandingPage({ locale }: { locale: Locale }) {
  const copy = siteCopy[locale];

  return (
    <div lang={localeInfo[locale].htmlLang} className="relative isolate">
      <WorldMapBackground />
      <div className="relative z-10">
        <Nav locale={locale} copy={copy.nav} />
        <main id="main-content" className="flex-1">
          <Hero copy={copy.hero} />
          <StatStrip items={copy.stat} />
          <WhatIs copy={copy.what} />
          <HowItWorks copy={copy.how} />
          <Gallery copy={copy.gallery} />
          <Technology copy={copy.technology} />
          <EmBreve copy={copy.retention} />
          <FAQ copy={copy.faq} />
          <Waitlist copy={copy.waitlist} />
        </main>
        <Footer locale={locale} copy={copy} />
      </div>
    </div>
  );
}
