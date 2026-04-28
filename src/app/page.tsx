import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { StatStrip } from "@/components/StatStrip";
import { WhatIs } from "@/components/WhatIs";
import { HowItWorks } from "@/components/HowItWorks";
import { Gallery } from "@/components/Gallery";
import { Rankings } from "@/components/Rankings";
import { EmBreve } from "@/components/EmBreve";
import { Waitlist } from "@/components/Waitlist";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <StatStrip />
        <WhatIs />
        <HowItWorks />
        <Gallery />
        <Rankings />
        <EmBreve />
        <Waitlist />
      </main>
      <Footer />
    </>
  );
}
