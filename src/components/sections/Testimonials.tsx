import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const items = [
  { name: "Rajesh & Priya", city: "Hyderabad", text: "Aura transformed our 3BHK beyond expectations. The modular kitchen is a dream and delivery was on time." },
  { name: "Sandeep Reddy", city: "Jadcherla", text: "Transparent pricing and beautiful execution. The wardrobes and TV unit feel premium and built to last." },
  { name: "Lakshmi N.", city: "Mahabubnagar", text: "From design to installation everything was seamless. Truly a turnkey experience." },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-muted/40">
      <div className="mx-auto max-w-7xl px-4">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block text-xs font-semibold tracking-widest text-primary uppercase">Testimonials</span>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold">Loved by homeowners</h2>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="rounded-2xl bg-card border p-7 shadow-soft">
              <Quote className="h-8 w-8 text-primary/30" />
              <p className="mt-4 text-foreground/80 leading-relaxed">"{t.text}"</p>
              <div className="mt-5 flex items-center justify-between">
                <div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.city}</div>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, j) => <Star key={j} className="h-4 w-4 fill-primary text-primary" />)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
