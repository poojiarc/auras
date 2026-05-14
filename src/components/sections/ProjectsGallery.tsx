import { motion } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import kitchen from "@/assets/service-kitchen.jpg";
import wardrobe from "@/assets/service-wardrobe.jpg";
import tv from "@/assets/service-tv.jpg";
import ceiling from "@/assets/service-ceiling.jpg";
import kids from "@/assets/service-kids.jpg";
import pooja from "@/assets/service-pooja.jpg";
import hero from "@/assets/luxury_interior_hero_1778739292722.png";

const projects = [
  { img: hero, title: "Luxury Living Room", tag: "Hyderabad", span: "lg:col-span-2 lg:row-span-2" },
  { img: kitchen, title: "Modular Kitchen", tag: "Jadcherla" },
  { img: wardrobe, title: "Walk-in Wardrobe", tag: "Mahabubnagar" },
  { img: tv, title: "TV Unit Wall", tag: "Hyderabad" },
  { img: ceiling, title: "False Ceiling", tag: "Jadcherla" },
  { img: kids, title: "Kids Bedroom", tag: "Mahabubnagar" },
  { img: pooja, title: "Pooja Mandir", tag: "Hyderabad" },
];

export function ProjectsGallery({ heading = true }: { heading?: boolean }) {
  return (
    <section className="py-24 bg-black relative">
      <div className="absolute top-1/2 left-0 w-1/2 h-1/2 bg-primary/5 blur-[120px] rounded-full -translate-y-1/2 -translate-x-1/4 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 relative z-10">
        {heading && (
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-primary text-xs font-bold tracking-[0.4em] uppercase mb-4 block">Portfolio</span>
              <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Masterpieces We've Built</h2>
              <div className="h-1 w-24 bg-primary mx-auto mb-8 shadow-[0_0_15px_rgba(141,198,63,0.5)]" />
              <p className="text-white/70 text-lg font-light leading-relaxed">Every space tells a story of luxury, comfort, and impeccable taste.</p>
            </div>
          </Reveal>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-[250px] gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className={`group relative overflow-hidden rounded-[2.5rem] border border-white/5 shadow-premium ${p.span ?? ""}`}
            >
              <img src={p.img} alt={p.title} loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="text-[10px] text-primary font-bold uppercase tracking-[0.3em] mb-3">{p.tag}</div>
                <div className="text-xl font-serif text-white mb-4">{p.title}</div>
                <div className="h-0.5 w-0 group-hover:w-16 bg-primary transition-all duration-500 shadow-[0_0_10px_rgba(141,198,63,0.8)]" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Element */}
        <Reveal delay={0.5}>
          <div className="mt-24 flex flex-col items-center">
            <div className="flex -space-x-5 mb-8">
              {[1, 2, 3, 4, 5].map((_, i) => (
                <div key={i} className="h-14 w-14 rounded-full border-4 border-black bg-primary/20 flex items-center justify-center overflow-hidden shadow-lg">
                   <img src={`https://i.pravatar.cc/150?u=${i + 10}`} alt="Client" className="grayscale contrast-125" />
                </div>
              ))}
              <div className="h-14 w-14 rounded-full border-4 border-black bg-primary text-white flex items-center justify-center text-sm font-bold shadow-glow">
                50+
              </div>
            </div>
            <p className="text-primary text-xs md:text-sm tracking-[0.3em] uppercase font-bold drop-shadow-sm">Trusted by 50+ Happy Families</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}


