import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Star } from "lucide-react";
import hero from "@/assets/hero-interior.jpg";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img src={hero} alt="" className="h-full w-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/85 via-secondary/70 to-secondary/50" />
      </div>

      <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-12 items-center w-full">
        <div className="text-secondary-foreground">
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-xs font-medium text-white/90 mb-6"
          >
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Premium Home Interiors · Jadcherla, Telangana
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] text-balance"
          >
            Designing Dream Homes with{" "}
            <span className="text-gradient-brand">Precision & Style</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="mt-6 text-lg text-white/75 max-w-xl leading-relaxed"
          >
            Complete home interiors with modular kitchens, wardrobes, and turnkey solutions crafted for modern living.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Link to="/contact" className="group inline-flex items-center gap-2 bg-gradient-brand text-primary-foreground px-7 py-4 rounded-2xl text-sm font-semibold shadow-elegant hover:shadow-glow transition-all hover:-translate-y-0.5">
              Book Free Consultation
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/projects" className="inline-flex items-center gap-2 glass text-white px-7 py-4 rounded-2xl text-sm font-semibold hover:bg-white/15 transition-all">
              View Projects
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
            className="mt-10 flex items-center gap-6 text-white/80"
          >
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-primary text-primary" />)}
            </div>
            <span className="text-sm">Trusted by 50+ happy families</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4 }}
          className="hidden lg:block"
        >
          <div className="grid grid-cols-2 gap-4">
            {[
              { k: "100+", v: "Projects" },
              { k: "50+", v: "Happy Clients" },
              { k: "5+", v: "Years Experience" },
              { k: "12+", v: "Services" },
            ].map((s, i) => (
              <motion.div key={i}
                initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5 + i * 0.1 }}
                className="glass rounded-2xl p-6 text-white">
                <div className="text-4xl font-bold text-gradient-brand">{s.k}</div>
                <div className="text-sm text-white/70 mt-1">{s.v}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
