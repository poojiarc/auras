import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export function CTA() {
  return (
    <section className="py-24 bg-black">
      <div className="mx-auto max-w-7xl px-4">
        <Reveal>
          <div className="relative overflow-hidden rounded-[3rem] bg-[#0A0A0A] border border-primary/20 p-10 md:p-20 text-center text-white shadow-premium transition-all duration-500 hover:border-primary/40">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 via-transparent to-primary/10 opacity-60" />
            
            <div className="relative z-10">
              <div className="flex justify-center mb-8">
                <div className="h-16 w-16 rounded-3xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20 rotate-12">
                  <Sparkles className="h-8 w-8" />
                </div>
              </div>
              
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-white mb-8 max-w-4xl mx-auto leading-tight">
                Ready to Experience <span className="text-primary italic">Interior Excellence?</span>
              </h2>
              
              <p className="mt-4 text-white/70 max-w-2xl mx-auto text-lg md:text-xl font-light mb-12 leading-relaxed">
                Join 50+ families who chose Aura for their luxury home transformation. <br className="hidden md:block" />
                Begin your journey with a private design consultation.
              </p>
              
              <div className="flex flex-wrap justify-center gap-6">
                <Link to="/contact" className="btn-brand px-12 py-5 rounded-full font-bold shadow-glow flex items-center gap-4 group">
                  Book Free Consultation 
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
                </Link>
                <Link to="/projects" className="btn-outline-brand px-12 py-5 rounded-full font-bold bg-black/20 backdrop-blur-sm">
                  View Our Portfolio
                </Link>
              </div>
            </div>
            
            {/* Decorative corners */}
            <div className="absolute top-0 left-0 w-24 h-24 border-t-4 border-l-4 border-primary/20 rounded-tl-[3rem]" />
            <div className="absolute bottom-0 right-0 w-24 h-24 border-b-4 border-r-4 border-primary/20 rounded-br-[3rem]" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}


