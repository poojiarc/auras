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
  { Icon: Award, title: "Premium Quality", text: "Top-tier materials and finishes." },
  { Icon: IndianRupee, title: "Transparent Pricing", text: "No hidden costs, ever." },
  { Icon: Clock, title: "On-Time Delivery", text: "Committed timelines, always met." },
  { Icon: Sparkles, title: "Customized Designs", text: "Tailored to your lifestyle." },
];

export function About() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <Reveal>
            <span className="inline-block text-xs font-semibold tracking-widest text-primary uppercase">About Aura</span>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold text-balance">
              Crafting interiors that feel like <span className="text-primary">home</span>.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Aura Interiors is a modern home interior solutions company based in Jadcherla, Mahabubnagar, dedicated to creating stylish, functional, and comfortable living spaces.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We specialise in modular kitchens, wardrobes, TV units, false ceilings, storage solutions and complete turnkey interiors — delivered with craftsmanship and care.
            </p>
            <div className="mt-10 grid grid-cols-3 gap-4">
              {[
                { n: 100, l: "Projects" },
                { n: 50, l: "Happy Clients" },
                { n: 5, l: "Years" },
              ].map((x, i) => (
                <div key={i} className="rounded-2xl bg-card border p-5 shadow-soft">
                  <div className="text-3xl font-bold text-primary"><Counter to={x.n} /></div>
                  <div className="text-xs text-muted-foreground mt-1">{x.l}</div>
                </div>
              ))}
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((f, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <motion.div whileHover={{ y: -6 }} className="rounded-2xl bg-card border p-6 shadow-soft h-full">
                  <div className="h-12 w-12 rounded-xl bg-accent text-primary flex items-center justify-center mb-4">
                    <f.Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold">{f.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{f.text}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
