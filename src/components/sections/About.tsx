import { Reveal } from "@/components/Reveal";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { Award, IndianRupee, Clock, Sparkles } from "lucide-react";
import { useEffect, useRef } from "react";

function Counter({ to, suffix = "+" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, v => Math.round(v) + suffix);
  useEffect(() => { if (inView) animate(mv, to, { duration: 1.6, ease: "easeOut" }); }, [inView, mv, to]);
  return <motion.span ref={ref}>{rounded}</motion.span>;
}

const features = [
  { Icon: Award, title: "Premium Quality", text: "Handpicked materials from world-class manufacturers." },
  { Icon: IndianRupee, title: "Transparent Pricing", text: "Zero hidden costs. Luxury that respects your investment." },
  { Icon: Clock, title: "Precision Delivery", text: "Time is the ultimate luxury. We respect yours." },
  { Icon: Sparkles, title: "Bespoke Designs", text: "Tailored to your unique persona and lifestyle." },
];

export function About() {
  return (
    <section id="about" className="py-24 bg-black overflow-hidden relative">
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-primary/5 blur-[120px] rounded-full -translate-y-1/2 -translate-x-1/4 pointer-events-none" />
      
      <div className="mx-auto max-w-7xl px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <Reveal>
            <span className="text-primary text-xs font-bold tracking-[0.4em] uppercase mb-6 block">Our Heritage</span>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-8 leading-tight">
              Crafting <span className="text-primary italic">Luxury</span> Beyond <br /> Expectation.
            </h2>
            <div className="h-1 w-24 bg-primary mb-10 shadow-[0_0_15px_rgba(141,198,63,0.5)]" />
            <p className="text-white/80 text-xl font-light leading-relaxed mb-8">
              Aura Interiors is a premier home interior solutions firm dedicated to creating 
              extraordinary living spaces in Jadcherla & Hyderabad.
            </p>
            <p className="text-white/50 leading-relaxed mb-12 font-medium">
              We believe that luxury is not just about price—it's about the precision of craftsmanship, 
              the quality of materials, and the harmony of design.
            </p>
            
            <div className="grid grid-cols-3 gap-8 border-t border-white/5 pt-12">
              {[
                { n: 100, l: "Masterpieces" },
                { n: 50, l: "Elite Clients" },
                { n: 5, l: "Years Exp" },
              ].map((x, i) => (
                <div key={i} className="group">
                  <div className="text-4xl md:text-5xl font-serif text-primary mb-2 group-hover:scale-110 transition-transform duration-500 origin-left drop-shadow-sm"><Counter to={x.n} /></div>
                  <div className="text-[10px] text-white/40 uppercase tracking-[0.3em] font-bold">{x.l}</div>
                </div>
              ))}
            </div>
          </Reveal>

          <div className="relative">
             <div className="absolute -inset-20 bg-primary/5 blur-[120px] rounded-full" />
             <div className="grid sm:grid-cols-2 gap-8 relative z-10">
                {features.map((f, i) => (
                  <Reveal key={i} delay={i * 0.1}>
                    <div className="glass p-10 rounded-[3rem] border border-white/5 hover:border-primary/40 transition-all duration-500 group h-full">
                      <div className="h-16 w-16 rounded-[2rem] bg-primary/10 text-primary flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500 border border-primary/20 shadow-glow/10 group-hover:shadow-glow/30">
                        <f.Icon className="h-8 w-8" />
                      </div>
                      <h3 className="text-white font-serif text-xl mb-4 tracking-wide group-hover:text-primary transition-colors">{f.title}</h3>
                      <p className="text-white/50 text-sm leading-relaxed font-medium">{f.text}</p>
                    </div>
                  </Reveal>
                ))}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}


