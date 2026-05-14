import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, Check, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { getService, services } from "@/lib/services-data";
import { Reveal } from "@/components/Reveal";
import { CTA } from "@/components/sections/CTA";
import { BeforeAfter } from "@/components/BeforeAfter";

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = getService(slug || "");

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const others = services.filter(s => s.slug !== service.slug).slice(0, 4);

  return (
    <div className="bg-black pt-20">
      <section className="relative h-[65vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={service.image} alt={service.title} className="h-full w-full object-cover scale-105 transform motion-safe:animate-slow-zoom" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-90" />
        </div>
        
        <div className="mx-auto max-w-7xl px-4 relative z-10 w-full">
          <Link to="/services" className="inline-flex items-center gap-3 text-primary text-xs font-bold uppercase tracking-[0.3em] hover:text-white transition-all mb-10 group">
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-2 transition-transform" /> Back to Collections
          </Link>
          <Reveal>
            <div className="inline-flex items-center gap-4 bg-primary/10 border border-primary/30 rounded-2xl px-6 py-3 text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-8 backdrop-blur-md">
              <service.Icon className="h-5 w-5" /> Signature Experience
            </div>
            <h1 className="text-5xl md:text-8xl font-serif text-white max-w-4xl mb-8 leading-tight">{service.title}</h1>
            <p className="text-xl md:text-2xl text-white/70 max-w-3xl font-light leading-relaxed">{service.short}</p>
          </Reveal>
        </div>
      </section>

      <section className="py-32">
        <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-12 gap-20">
          <div className="lg:col-span-8">
            <Reveal>
              <h2 className="text-3xl font-serif text-white mb-10 inline-block relative">
                The Vision
                <div className="absolute -bottom-4 left-0 h-1 w-20 bg-primary rounded-full shadow-glow" />
              </h2>
              <p className="text-white/60 leading-relaxed text-lg md:text-xl font-light mb-12">{service.description}</p>
            </Reveal>

            <Reveal delay={0.1}>
              <h3 className="mt-20 text-2xl font-serif text-white mb-10 tracking-wide">Exclusive Craftsmanship</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {service.features.map((f: string, i: number) => (
                  <li key={i} className="flex gap-6 p-8 glass rounded-[2.5rem] border border-white/5 hover:border-primary/30 transition-all duration-500 group">
                    <div className="h-8 w-8 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20 group-hover:bg-primary group-hover:text-white transition-all">
                      <Check className="h-5 w-5 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-white/70 font-medium leading-relaxed">{f}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.15}>
              <h3 className="mt-24 text-3xl font-serif text-white mb-6 italic">The Transformation</h3>
              <p className="text-white/40 mb-10 font-medium tracking-[0.2em] uppercase text-[10px]">Interact with our precision delivery process.</p>
              <div className="rounded-[3.5rem] overflow-hidden border border-primary/20 shadow-premium group">
                <BeforeAfter 
                  beforeImage={service.beforeImage || "https://images.unsplash.com/photo-1503174971373-b1f69850bded?q=80&w=2113&auto=format&fit=crop"} 
                  afterImage={service.image} 
                />
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <h3 className="mt-24 text-2xl font-serif text-white mb-10">Design Portfolio</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {[service, ...services.filter(s => s.slug !== service.slug)].slice(0, 6).map((s, i) => (
                  <motion.div key={i} whileHover={{ scale: 0.98, rotate: i % 2 === 0 ? 1 : -1 }}
                    className="aspect-square rounded-[2rem] overflow-hidden shadow-premium group border border-white/5 relative">
                    <img src={s.image} alt={s.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                       <span className="text-white text-[10px] font-bold uppercase tracking-widest text-center">{s.title}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Reveal>
          </div>

          <aside className="lg:col-span-4 space-y-10">
            <Reveal>
              <div className="glass p-10 md:p-12 rounded-[3.5rem] border border-primary/20 shadow-premium sticky top-32 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-primary/30" />
                <h3 className="font-serif text-2xl text-white mb-8">Premium Benefits</h3>
                <ul className="space-y-6 mb-12">
                  {service.benefits.map((b: string, i: number) => (
                    <li key={i} className="flex gap-5 text-sm font-medium text-white/60 group">
                      <Sparkles className="h-5 w-5 text-primary shrink-0 mt-0.5 group-hover:rotate-12 transition-transform" />
                      <span className="leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="w-full btn-brand py-6 rounded-2xl font-bold shadow-glow flex items-center justify-center gap-3 group">
                  {service.cta}
                </Link>
                <Link to="/services" className="mt-10 w-full flex items-center justify-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-primary/40 hover:text-primary transition-all">
                  <ArrowLeft className="h-4 w-4" /> View All Collections
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="glass p-10 rounded-[3rem] border border-white/5">
                <h3 className="font-serif text-xl text-white mb-8 tracking-wide">Related Expertise</h3>
                <ul className="space-y-6">
                  {others.map(o => (
                    <li key={o.slug}>
                      <Link to={`/services/${o.slug}`}
                        className="flex items-center gap-5 p-4 rounded-3xl hover:bg-primary/5 transition-all duration-300 group border border-transparent hover:border-primary/20">
                        <div className="h-12 w-12 rounded-[1rem] bg-white/5 flex items-center justify-center text-white group-hover:bg-primary group-hover:text-white transition-all duration-500">
                          <o.Icon className="h-6 w-6" />
                        </div>
                        <span className="text-sm font-bold text-white/50 group-hover:text-white transition-colors uppercase tracking-widest leading-none">{o.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>

      <CTA />
    </div>
  );
}


