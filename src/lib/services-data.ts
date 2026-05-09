import {
  ChefHat, Shirt, Utensils, Baby, Tv, BookOpen,
  Lightbulb, Layers, Flame, Wallpaper, Paintbrush, Bath,
  type LucideIcon,
} from "lucide-react";
import kitchen from "@/assets/service-kitchen.jpg";
import wardrobe from "@/assets/service-wardrobe.jpg";
import tv from "@/assets/service-tv.jpg";
import ceiling from "@/assets/service-ceiling.jpg";
import kids from "@/assets/service-kids.jpg";
import pooja from "@/assets/service-pooja.jpg";
import crockery from "@/assets/service-crockery.jpg";
import study from "@/assets/service-study.jpg";
import lights from "@/assets/service-lights.jpg";
import wallpaper from "@/assets/service-wallpaper.jpg";
import paint from "@/assets/service-paint.jpg";
import bathroom from "@/assets/service-bathroom.jpg";

export type Service = {
  slug: string;
  title: string;
  Icon: LucideIcon;
  image: string;
  short: string;
  description: string;
  benefits: string[];
};

export const services: Service[] = [
  { slug: "modular-kitchen", title: "Modular Kitchen", Icon: ChefHat, image: kitchen,
    short: "Smart, ergonomic kitchens crafted for modern Indian homes.",
    description: "Bespoke modular kitchens combining premium hardware, durable finishes, and intelligent storage. Built to withstand daily Indian cooking while looking stunning.",
    benefits: ["Premium hardware & soft-close fittings", "Water & termite resistant materials", "Optimized storage layouts", "10-year warranty"] },
  { slug: "wardrobes", title: "Wardrobes", Icon: Shirt, image: wardrobe,
    short: "Sliding, hinged, and walk-in wardrobes tailored to your space.",
    description: "From compact bedrooms to spacious walk-ins, we design wardrobes that maximise storage with elegant finishes and smooth functionality.",
    benefits: ["Sliding & hinged options", "Loft & accessory units", "Mirror integration", "Custom internal layouts"] },
  { slug: "crockery-units", title: "Crockery Units", Icon: Utensils, image: crockery,
    short: "Display your finest with elegant crockery storage.",
    description: "Stylish crockery units with tempered glass, integrated lighting, and adjustable shelving to showcase your dinnerware beautifully.",
    benefits: ["Tempered glass shutters", "LED accent lighting", "Adjustable shelves", "Anti-scratch finish"] },
  { slug: "kids-bedroom", title: "Kids Bedroom", Icon: Baby, image: kids,
    short: "Playful, safe, and functional spaces for children.",
    description: "Imaginative kids' rooms with bunk beds, study zones and ample storage — designed to grow with your child.",
    benefits: ["Child-safe rounded edges", "Non-toxic finishes", "Modular bunk beds", "Integrated study desks"] },
  { slug: "tv-units", title: "TV Units", Icon: Tv, image: tv,
    short: "Statement entertainment walls that anchor your living room.",
    description: "Custom TV units with floating shelves, hidden storage, and ambient lighting that turn your living room into a showcase.",
    benefits: ["Cable management", "LED backlighting", "Floating & wall designs", "Concealed storage"] },
  { slug: "study-tables", title: "Study Tables", Icon: BookOpen, image: study,
    short: "Productive workstations for students and professionals.",
    description: "Ergonomic study and work tables with smart storage, cable routing, and finishes that complement your room.",
    benefits: ["Ergonomic dimensions", "Built-in shelves", "Cable management", "Premium laminates"] },
  { slug: "lights", title: "Lights", Icon: Lightbulb, image: lights,
    short: "Layered lighting design that elevates every room.",
    description: "From cove lighting to designer chandeliers, we curate lighting that transforms ambience and highlights architecture.",
    benefits: ["Smart lighting compatible", "Energy-efficient LEDs", "Designer fixtures", "Layered scene control"] },
  { slug: "false-ceiling", title: "False Ceiling", Icon: Layers, image: ceiling,
    short: "Architectural ceilings with integrated lighting.",
    description: "Gypsum and POP false ceilings in modern, classic, and tray designs — engineered for durability and visual depth.",
    benefits: ["Gypsum & POP options", "Integrated cove lighting", "Acoustic improvement", "Termite resistant"] },
  { slug: "pooja-units", title: "Pooja Units", Icon: Flame, image: pooja,
    short: "Sacred spaces crafted with reverence and craftsmanship.",
    description: "Traditional and contemporary pooja mandirs in solid wood with intricate carvings and integrated lighting.",
    benefits: ["Solid teak & sheesham", "Hand-carved details", "Integrated diya lighting", "Storage drawers"] },
  { slug: "wallpaper", title: "Wallpaper", Icon: Wallpaper, image: wallpaper,
    short: "Curated designer wallpapers from global brands.",
    description: "Premium imported and Indian wallpapers — textured, floral, geometric — installed by trained professionals.",
    benefits: ["Imported & Indian brands", "Washable & durable", "Professional installation", "1000+ patterns"] },
  { slug: "wall-paint", title: "Wall Paint", Icon: Paintbrush, image: paint,
    short: "Premium paints with flawless finish.",
    description: "Asian Paints, Berger and Dulux premium emulsions applied by certified painters with surface preparation.",
    benefits: ["Premium brands only", "Surface preparation included", "Eco-friendly options", "Texture finishes"] },
  { slug: "bathroom", title: "Bathroom", Icon: Bath, image: bathroom,
    short: "Spa-like bathrooms with premium fittings.",
    description: "Complete bathroom interiors with vanities, mirrors, lighting, sanitaryware, and waterproof storage solutions.",
    benefits: ["Waterproof vanities", "Anti-fog mirrors", "Premium sanitaryware", "Smart storage"] },
];

export const getService = (slug: string) => services.find(s => s.slug === slug);
