import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import { services } from "@/lib/services-data";
import { ArrowRight } from "lucide-react";

export function ServicesGrid() {
  return (
    <section id="services" className="py-24 bg-muted/40">
      <div className="mx-auto max-w-7xl px-4">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-block text-xs font-semibold tracking-widest text-primary uppercase">Our Services</span>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold text-balance">All-in-One home interior services</h2>
            <p className="mt-4 text-muted-foreground">Transform your home with seamless design, customization, and installation.</p>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: (i % 6) * 0.05 }}
            >
              <Link to="/services/$slug" params={{ slug: s.slug }}
                className="group block rounded-2xl bg-card border p-5 text-center shadow-soft hover:shadow-elegant hover:-translate-y-1 transition-all">
                <div className="mx-auto h-16 w-16 rounded-2xl bg-accent text-primary flex items-center justify-center group-hover:bg-gradient-brand group-hover:text-primary-foreground transition-all">
                  <s.Icon className="h-8 w-8" strokeWidth={1.5} />
                </div>
                <h3 className="mt-4 text-sm font-semibold">{s.title}</h3>
              </Link>
            </motion.div>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-12 text-center">
            <Link to="/services" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
              Explore all services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
