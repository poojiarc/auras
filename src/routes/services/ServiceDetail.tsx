import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, Check } from "lucide-react";
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
    <>
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={service.image} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 to-secondary/60" />
        </div>
        <div className="mx-auto max-w-7xl px-4 text-white">
          <Link to="/services" className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white">
            <ArrowLeft className="h-4 w-4" /> Back to Services
          </Link>
          <Reveal>
            <div className="mt-6 inline-flex items-center gap-3 glass rounded-full px-4 py-2 text-xs font-medium">
              <service.Icon className="h-4 w-4 text-primary" /> Service
            </div>
            <h1 className="mt-4 text-5xl md:text-6xl font-bold max-w-3xl text-balance">{service.title}</h1>
            <p className="mt-4 text-lg text-white/75 max-w-2xl">{service.short}</p>
          </Reveal>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <Reveal>
              <h2 className="text-3xl font-bold">About this service</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed text-lg">{service.description}</p>
            </Reveal>

            <Reveal delay={0.1}>
              <h3 className="mt-12 text-2xl font-bold">Key Features</h3>
              <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.features.map((f: string, i: number) => (
                  <li key={i} className="flex gap-3 text-muted-foreground">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.15}>
              <h3 className="mt-12 text-2xl font-bold">Transformation</h3>
              <p className="mt-2 text-muted-foreground mb-6">Drag the slider to see the before and after.</p>
              <BeforeAfter 
                beforeImage={service.beforeImage || "https://images.unsplash.com/photo-1503174971373-b1f69850bded?q=80&w=2113&auto=format&fit=crop"} 
                afterImage={service.image} 
              />
            </Reveal>

            <Reveal delay={0.2}>
              <h3 className="mt-12 text-2xl font-bold">Inspiration Gallery</h3>
              <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
                {[service, ...services.filter(s => s.slug !== service.slug)].slice(0, 6).map((s, i) => (
                  <motion.div key={i} whileHover={{ scale: 1.03 }}
                    className="aspect-square rounded-2xl overflow-hidden shadow-soft">
                    <img src={s.image} alt={s.title} loading="lazy" className="h-full w-full object-cover hover:scale-110 transition-transform duration-700" />
                  </motion.div>
                ))}
              </div>
            </Reveal>
          </div>

          <aside className="space-y-6">
            <Reveal>
              <div className="rounded-2xl border bg-card p-6 shadow-soft sticky top-32">
                <h3 className="font-semibold text-lg">Key Benefits</h3>
                <ul className="mt-4 space-y-3 border-b pb-6 mb-6">
                  {service.benefits.map((b: string, i: number) => (
                    <li key={i} className="flex gap-3 text-sm">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="w-full inline-flex items-center justify-center gap-2 bg-gradient-brand text-primary-foreground px-5 py-4 rounded-xl font-bold shadow-soft hover:shadow-glow transition-all hover:-translate-y-1">
                  {service.cta}
                </Link>
                <Link to="/services" className="mt-4 w-full inline-flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <ArrowLeft className="h-4 w-4" /> Back to Services
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-2xl border bg-card p-6 shadow-soft">
                <h3 className="font-semibold">Other Services</h3>
                <ul className="mt-4 space-y-2">
                  {others.map(o => (
                    <li key={o.slug}>
                      <Link to={`/services/${o.slug}`}
                        className="flex items-center gap-3 p-2 rounded-lg hover:bg-accent text-sm">
                        <o.Icon className="h-4 w-4 text-primary" /> {o.title}
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
    </>
  );
}
