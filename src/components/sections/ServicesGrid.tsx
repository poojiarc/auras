import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import { services } from "@/lib/services-data";
import { ArrowRight } from "lucide-react";

export function ServicesGrid() {
  return (
    <section id="services" className="py-28 bg-[#050505] relative overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#8DC63F]/10 blur-[140px] rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-[#4F8F1F]/10 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/4 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 relative z-10">

        {/* HEADER */}
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-20">

            <span className="inline-block text-xs font-semibold tracking-[0.5em] text-[#8DC63F] uppercase mb-5">
              Our Expertise
            </span>

            <h2 className="text-4xl md:text-6xl font-serif text-[#8DC63F] group-hover:text-white mb-6 leading-tight">
              Complete Home Interior Solutions <br />
              <span className="bg-gradient-to-r from-[#8DC63F] to-[#4F8F1F] bg-clip-text text-transparent italic font-light">
                in Jadcherla & Hyderabad
              </span>
            </h2>

            <div className="h-[2px] w-24 bg-gradient-to-r from-[#8DC63F] to-[#4F8F1F] mx-auto mb-8 shadow-[0_0_20px_rgba(141,198,63,0.6)]" />

            <p className="text-white/70 text-lg md:text-xl font-light leading-relaxed">
              From concept to completion, we design and deliver premium interiors with
              precision, elegance, and unmatched craftsmanship.
            </p>
          </div>
        </Reveal>

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-5 md:gap-8">

          {services.map((s, i) => (
            <motion.div
              key={s.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
            >
              <Link
                to={`/services/${s.slug}`}
                className="group block h-full rounded-[2.5rem] bg-[#0A0A0A] border border-white/5 p-8 text-center transition-all duration-500 hover:border-[#8DC63F]/50 hover:bg-gradient-to-br hover:from-[#8DC63F]/10 hover:to-transparent relative overflow-hidden hover:shadow-[0_0_40px_rgba(141,198,63,0.15)]"
              >

                {/* HOVER GLOW */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#8DC63F]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* ICON */}
                <div className="relative mx-auto h-20 w-20 mb-6 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#8DC63F]/20 to-[#4F8F1F]/20 rounded-3xl rotate-45 group-hover:rotate-90 transition-transform duration-700 blur-sm" />

                  <s.Icon
                    className="h-10 w-10 text-white group-hover:text-[#8DC63F] group-hover:scale-125 transition-all duration-500 relative z-10"
                    strokeWidth={1.5}
                  />
                </div>

                {/* TITLE */}
                <h3 className="relative z-10 text-xs md:text-sm font-semibold text-white/80 group-hover:text-white transition-colors uppercase tracking-[0.25em] leading-snug">
                  {s.title}
                </h3>

                {/* UNDERLINE */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-3 group-hover:translate-y-0">
                  <div className="h-[2px] w-10 bg-gradient-to-r from-[#8DC63F] to-[#4F8F1F] mx-auto shadow-[0_0_12px_rgba(141,198,63,0.9)]" />
                </div>
              </Link>
            </motion.div>
          ))}

        </div>

        {/* CTA */}
        <Reveal delay={0.2}>
          <div className="mt-24 text-center">
            <Link
              to="/services"
              className="px-14 py-5 rounded-full inline-flex items-center gap-4 font-semibold text-white border border-[#8DC63F]/40 hover:bg-gradient-to-r hover:from-[#8DC63F] hover:to-[#4F8F1F] hover:text-black transition-all duration-500 group shadow-[0_0_25px_rgba(141,198,63,0.2)]"
            >
              Explore All Services
              <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </div>
        </Reveal>

      </div>
    </section>
  );
}