import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export function CTA() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-hero p-10 md:p-16 text-center text-white shadow-elegant">
            <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
            <div className="relative">
              <h2 className="text-3xl md:text-5xl font-bold text-balance">Ready to design your dream home?</h2>
              <p className="mt-4 text-white/70 max-w-xl mx-auto">
                Get a free consultation with our designers. Zero obligation, 100% personalised.
              </p>
              <Link to="/contact" className="mt-8 inline-flex items-center gap-2 bg-gradient-brand text-primary-foreground px-7 py-4 rounded-2xl font-semibold shadow-glow hover:-translate-y-0.5 transition-all">
                Book Free Consultation <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
