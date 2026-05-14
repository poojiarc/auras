import { motion } from "framer-motion";
import { Factory, Clock, Award, PenTool, ShieldCheck } from "lucide-react";

const features = [
  {
    title: "Factory Finish",
    description: "Precision manufacturing for flawless results",
    icon: Factory,
  },
  {
    title: "45-Day Delivery",
    description: "On-time completion guaranteed",
    icon: Clock,
  },
  {
    title: "Premium Hardware",
    description: "Using only the world's best components",
    icon: Award,
  },
  {
    title: "Customized Designs",
    description: "Tailored specifically to your lifestyle",
    icon: PenTool,
  },
  {
    title: "Warranty Support",
    description: "Peace of mind with long-term protection",
    icon: ShieldCheck,
  },
];

export function WhyAura() {
  return (
    <section className="py-24 bg-black overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      
      <div className="mx-auto max-w-7xl px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif text-white mb-4"
          >
            Why <span className="text-primary italic">Aura?</span>
          </motion.h2>
          <div className="h-1 w-24 bg-primary mx-auto mb-8 shadow-[0_0_15px_rgba(141,198,63,0.5)]" />
          <p className="text-white/70 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            Experience excellence in every detail. We combine craftsmanship with technology 
            to deliver interiors that define your status.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -12, scale: 1.02 }}
              className="glass p-8 rounded-[2.5rem] flex flex-col items-center text-center group transition-all duration-500 border border-primary/10 hover:border-primary/40 hover:shadow-glow/20"
            >
              <div className="w-20 h-20 rounded-[2rem] bg-primary/10 flex items-center justify-center mb-8 group-hover:bg-primary/20 group-hover:rotate-6 transition-all duration-500">
                <feature.icon className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-white font-bold mb-4 tracking-widest uppercase text-xs">{feature.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed font-medium">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

