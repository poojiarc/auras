import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/components/sections/About";
import { CTA } from "@/components/sections/CTA";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Aura Interiors" },
      { name: "description", content: "Learn about Aura Interiors, a premium home interior solutions company in Jadcherla, Telangana." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="pt-36 pb-12 bg-gradient-hero text-white">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <Reveal>
            <span className="text-xs font-semibold tracking-widest text-primary uppercase">About Us</span>
            <h1 className="mt-3 text-5xl md:text-6xl font-bold">Our Story</h1>
            <p className="mt-4 text-white/70 max-w-2xl mx-auto">Crafting elegant, functional spaces — one home at a time.</p>
          </Reveal>
        </div>
      </section>
      <About />
      <CTA />
    </>
  );
}
