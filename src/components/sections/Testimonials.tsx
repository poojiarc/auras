import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const items = [
  { name: "Rajesh & Priya", city: "Hyderabad", text: "Aura transformed our 3BHK beyond expectations. The modular kitchen is a dream and delivery was on time. The attention to detail is truly world-class." },
  { name: "Sandeep Reddy", city: "Jadcherla", text: "Transparent pricing and beautiful execution. The wardrobes and TV unit feel premium and built to last. Highly recommended for luxury interiors." },
  { name: "Lakshmi N.", city: "Mahabubnagar", text: "From design to installation everything was seamless. Truly a turnkey experience. They handled everything with professional grace." },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-[#050505] relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-1/3 h-1/3 bg-primary/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 relative z-10">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-24">
            <span className="text-primary text-xs font-bold tracking-[0.4em] uppercase mb-4 block">Testimonials</span>
            <h2 className="text-4xl md:text-5xl font-serif text-white">Client <span className="text-primary italic">Endorsements</span></h2>
            <div className="h-1 w-24 bg-primary mx-auto mt-8 shadow-[0_0_15px_rgba(141,198,63,0.5)]" />
          </div>
        </Reveal>
        
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((t, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="relative glass rounded-[3rem] border border-primary/10 p-12 group transition-all duration-500 hover:border-primary/30"
            >
              <div className="absolute top-0 right-12 -translate-y-1/2">
                <div className="h-16 w-16 rounded-3xl bg-primary flex items-center justify-center text-white shadow-glow rotate-6 group-hover:rotate-12 transition-transform duration-500">
                  <Quote className="h-8 w-8" />
                </div>
              </div>
              
              <div className="flex gap-1.5 mb-8">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-white/80 leading-relaxed italic mb-10 font-light text-lg">
                "{t.text}"
              </p>
              
              <div className="flex items-center gap-5 border-t border-white/5 pt-10">
                <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary font-serif text-2xl font-bold border border-primary/20">
                  {t.name[0]}
                </div>
                <div>
                  <div className="font-serif text-white text-xl mb-1">{t.name}</div>
                  <div className="text-[10px] text-primary uppercase tracking-[0.2em] font-bold">{t.city}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


