import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { services } from "@/lib/services-data";
import { Reveal } from "@/components/Reveal";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services — Aura Interiors" },
      { name: "description", content: "Modular kitchens, wardrobes, TV units, false ceilings, pooja units & more home interior services." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <section className="pt-36 pb-12 bg-gradient-hero text-white">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <Reveal>
            <span className="text-xs font-semibold tracking-widest text-primary uppercase">Our Services</span>
            <h1 className="mt-3 text-5xl md:text-6xl font-bold">Complete Interior Solutions</h1>
            <p className="mt-4 text-white/70 max-w-2xl mx-auto">From kitchens to ceilings — everything your home needs, under one roof.</p>
          </Reveal>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div key={s.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: (i % 3) * 0.1 }}
            >
              <Link to="/services/$slug" params={{ slug: s.slug }}
                className="group block rounded-2xl overflow-hidden bg-card border shadow-soft hover:shadow-elegant hover:-translate-y-1 transition-all">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={s.image} alt={s.title} loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute top-3 left-3 h-11 w-11 rounded-xl glass-light flex items-center justify-center text-primary">
                    <s.Icon className="h-5 w-5" />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-lg">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{s.short}</p>
                  <div className="mt-4 flex items-center gap-1 text-primary text-sm font-semibold">
                    Learn more <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
