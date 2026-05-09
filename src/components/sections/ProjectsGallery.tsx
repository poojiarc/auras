import { motion } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import kitchen from "@/assets/service-kitchen.jpg";
import wardrobe from "@/assets/service-wardrobe.jpg";
import tv from "@/assets/service-tv.jpg";
import ceiling from "@/assets/service-ceiling.jpg";
import kids from "@/assets/service-kids.jpg";
import pooja from "@/assets/service-pooja.jpg";
import hero from "@/assets/hero-interior.jpg";

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
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4">
        {heading && (
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="inline-block text-xs font-semibold tracking-widest text-primary uppercase">Our Work</span>
              <h2 className="mt-3 text-4xl md:text-5xl font-bold">Recent Projects</h2>
              <p className="mt-4 text-muted-foreground">A glimpse into homes we've transformed.</p>
            </div>
          </Reveal>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-[220px] gap-4">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`group relative overflow-hidden rounded-2xl shadow-soft ${p.span ?? ""}`}
            >
              <img src={p.img} alt={p.title} loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white translate-y-2 group-hover:translate-y-0 transition-transform">
                <div className="text-xs text-primary font-medium uppercase tracking-wider">{p.tag}</div>
                <div className="text-lg font-semibold mt-1">{p.title}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
