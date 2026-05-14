import { About } from "@/components/sections/About";
import { CTA } from "@/components/sections/CTA";
import { Reveal } from "@/components/Reveal";
import { WhyAura } from "@/components/sections/WhyAura";

export default function AboutPage() {
  return (
    <div className="bg-black pt-20">
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent opacity-40" />
        <div className="mx-auto max-w-7xl px-4 text-center relative z-10">
          <Reveal>
            <span className="text-primary text-xs font-bold tracking-[0.5em] uppercase mb-8 block">The Brand Story</span>
            <h1 className="text-5xl md:text-7xl font-serif text-white mb-8 leading-tight">
              Our Legacy Of <span className="text-primary italic">Excellence</span>
            </h1>
            <p className="text-white/70 max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed">
              We don't just design rooms; we curate luxury experiences that define your status and ultimate comfort.
            </p>
          </Reveal>
        </div>
      </section>
      
      <About />
      <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <WhyAura />
      <CTA />
    </div>
  );
}


