import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { services } from "@/lib/services-data";
import { Reveal } from "@/components/Reveal";
import { ArrowRight } from "lucide-react";

export default function ServicesPage() {
  return (
    <div className="bg-black pt-20">
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent opacity-40" />
        <div className="mx-auto max-w-7xl px-4 text-center relative z-10">
          <Reveal>
            <span className="text-primary text-xs font-bold tracking-[0.5em] uppercase mb-8 block">Our Design Universe</span>
            <h1 className="text-5xl md:text-7xl font-serif text-white mb-8 leading-tight">
              Complete <span className="text-primary italic">Interior Solutions</span>
            </h1>
            <p className="text-white/70 max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed">
              From high-end modular kitchens to bespoke spiritual sanctuaries, we provide end-to-end 
              interior excellence for the modern luxury home.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-32">
        <div className="mx-auto max-w-7xl px-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((s, i) => (
            <motion.div key={s.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: (i % 3) * 0.1, duration: 0.7 }}
            >
              <Link to={`/services/${s.slug}`}
                className="group block rounded-[2.5rem] overflow-hidden glass border border-white/5 shadow-premium transition-all duration-500 hover:border-primary/40 hover:bg-white/[0.02]"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={s.image} alt={s.title} loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute top-6 left-6 h-16 w-16 rounded-[1.5rem] bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/20 group-hover:bg-primary group-hover:border-primary transition-all duration-500">
                    <s.Icon className="h-7 w-7" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80" />
                </div>
                <div className="p-10">
                  <h3 className="font-serif text-2xl text-white mb-4 tracking-wide group-hover:text-primary transition-colors">{s.title}</h3>
                  <p className="text-white/50 text-sm font-medium leading-relaxed mb-8 line-clamp-2">{s.short}</p>
                  <div className="flex items-center gap-3 text-primary text-xs font-bold uppercase tracking-[0.2em] group-hover:gap-5 transition-all">
                    Discover More <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}


