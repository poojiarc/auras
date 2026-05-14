import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";
import { WhatsAppIcon } from "../WhatsAppIcon";
import heroImage from "@/assets/luxury_interior_hero_1778739292722.png";

export function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Background with Cinematic Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Luxury Interior" 
          className="h-full w-full object-cover scale-105 animate-slow-zoom opacity-60" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <motion.span 
            initial={{ opacity: 0, tracking: "0.2em" }}
            animate={{ opacity: 1, tracking: "0.6em" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-primary text-sm md:text-base font-black uppercase mb-8 tracking-[0.6em] drop-shadow-[0_0_15px_rgba(141,198,63,0.5)] font-accent"
          >
            Aura Interiors
          </motion.span>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-6xl md:text-8xl lg:text-9xl font-serif text-white mb-8 leading-none drop-shadow-2xl"
          >
            Designing <span className="italic text-white/90">Timeless</span> <br />
            <span className="text-primary">Luxury</span> Spaces
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-3xl mx-auto text-white/90 text-xl md:text-2xl font-light mb-16 leading-relaxed drop-shadow-xl"
          >
            Complete Home Interior Solutions in Jadcherla & Hyderabad with <br className="hidden md:block" />
            Modular Kitchens, Wardrobes & Turnkey Interiors
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-6 md:gap-8"
          >
            <Link 
              to="/contact" 
              className="btn-brand px-12 py-6 rounded-full flex items-center gap-3 group shadow-glow text-base font-black border-2 border-white/20 hover:border-white/50 transition-all duration-500"
            >
              Get Free Consultation
              <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform" />
            </Link>
            
            <a 
              href="https://wa.me/919542119649" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-12 py-6 rounded-full flex items-center gap-3 group bg-[#25D366] text-white shadow-[0_0_30px_rgba(37,211,102,0.4)] hover:shadow-[0_0_50px_rgba(37,211,102,0.6)] transition-all duration-500 hover:-translate-y-1"
            >
              <WhatsAppIcon className="h-6 w-6" />
              <span className="font-black uppercase tracking-widest text-base font-accent">WhatsApp Now</span>
            </a>

            <Link 
              to="/contact" 
              className="px-12 py-6 rounded-full bg-white/10 hover:bg-white/20 text-white border-2 border-white/20 transition-all flex items-center gap-3 backdrop-blur-md font-black uppercase tracking-widest text-base font-accent"
            >
              <Calendar className="h-6 w-6" />
              Book Site Visit
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Trust Badge */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-16 left-1/2 -translate-x-1/2 flex items-center gap-8 text-white/80 text-sm md:text-base tracking-[0.4em] uppercase font-black font-accent"
      >
        <div className="h-px w-16 bg-primary/60" />
        Trusted by 50+ Families
        <div className="h-px w-16 bg-primary/60" />
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-black via-black/80 to-transparent z-0" />
    </section>
  );
}




