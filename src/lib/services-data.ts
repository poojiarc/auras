import {
  CookingPot,
  DoorOpen,
  Tv,
  BedDouble,
  UtensilsCrossed,
  BookOpen,
  Lightbulb,
  Layers,
  Landmark,
  PaintRoller,
  Paintbrush,
  Bath,
  Sofa,
  Home,
  Monitor,
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
import furniture from "@/assets/service-furniture.png";
import design3d from "@/assets/service-3d.png";
import completeHome from "@/assets/hero-interior.jpg";

export type Service = {
  slug: string;
  title: string;
  Icon: LucideIcon;
  image: string;
  beforeImage?: string;
  short: string;
  description: string;
  features: string[];
  benefits: string[];
  cta: string;
};

export const services: Service[] = [
  {
    slug: "modular-kitchen",
    title: "Modular Kitchen",
    Icon: CookingPot,
    image: kitchen,
    short: "Smart, ergonomic kitchens crafted for modern Indian homes.",
    description: "At Aura Interiors, we design modular kitchens that combine functionality, elegance, and smart space utilization. Our kitchens are crafted to suit modern lifestyles with durable materials and ergonomic layouts.",
    features: [
      "Custom layouts (L-shape, U-shape, Island)",
      "Soft-close drawers & cabinets",
      "High-quality finishes (laminate, acrylic, PU)",
      "Space-saving storage solutions",
      "Chimney & appliance integration"
    ],
    benefits: [
      "Easy maintenance",
      "Maximized storage",
      "Sleek and modern look"
    ],
    cta: "👉 Upgrade Your Kitchen Today"
  },
  {
    slug: "wardrobes",
    title: "Wardrobes",
    Icon: DoorOpen,
    image: wardrobe,
    short: "Sliding, hinged, and walk-in wardrobes tailored to your space.",
    description: "We create stylish and spacious wardrobes tailored to your bedroom needs, ensuring perfect organization and aesthetic appeal.",
    features: [
      "Sliding & hinged wardrobes",
      "Loft storage options",
      "Mirror & glass finishes",
      "Internal organizers"
    ],
    benefits: [
      "Clutter-free space",
      "Elegant bedroom design"
    ],
    cta: "👉 Design Your Dream Wardrobe"
  },
  {
    slug: "tv-units",
    title: "TV Units",
    Icon: Tv,
    image: tv,
    short: "Statement entertainment walls that anchor your living room.",
    description: "Enhance your living room with modern TV units that blend design with functionality.",
    features: [
      "Wall-mounted & floor units",
      "Hidden storage compartments",
      "LED lighting options"
    ],
    benefits: [
      "Organized living space",
      "Stylish focal point"
    ],
    cta: "👉 Upgrade Your Living Room"
  },
  {
    slug: "kids-bedroom",
    title: "Kids Bedroom",
    Icon: BedDouble,
    image: kids,
    short: "Fun, safe, and vibrant bedroom designs customized for children.",
    description: "Fun, safe, and vibrant bedroom designs customized for children.",
    features: [
      "Bunk beds & study combos",
      "Bright color themes",
      "Safety-focused furniture"
    ],
    benefits: [
      "Encourages creativity",
      "Space-efficient design"
    ],
    cta: "👉 Create a Fun Space for Kids"
  },
  {
    slug: "crockery-units",
    title: "Crockery Units",
    Icon: UtensilsCrossed,
    image: crockery,
    short: "Display and store your dining essentials with elegant crockery units.",
    description: "Display and store your dining essentials with elegant crockery units.",
    features: [
      "Glass shutters",
      "LED display lighting",
      "Custom shelves"
    ],
    benefits: [
      "Organized dining area",
      "Premium look"
    ],
    cta: "👉 Enhance Your Dining Space"
  },
  {
    slug: "study-tables",
    title: "Study Tables",
    Icon: BookOpen,
    image: study,
    short: "Perfect study tables designed for productivity and comfort.",
    description: "Perfect study tables designed for productivity and comfort.",
    features: [
      "Compact designs",
      "Storage drawers",
      "Ergonomic layouts"
    ],
    benefits: [
      "Better focus",
      "Organized workspace"
    ],
    cta: "👉 Build Your Perfect Workspace"
  },
  {
    slug: "lighting-solutions",
    title: "Lighting",
    Icon: Lightbulb,
    image: lights,
    short: "Transform your home ambiance with modern lighting solutions.",
    description: "Transform your home ambiance with modern lighting solutions.",
    features: [
      "Ceiling lights",
      "Pendant lighting",
      "LED strips"
    ],
    benefits: [
      "Enhanced mood",
      "Energy efficient"
    ],
    cta: "👉 Brighten Your Home"
  },
  {
    slug: "false-ceiling",
    title: "False Ceiling",
    Icon: Layers,
    image: ceiling,
    short: "Add depth and elegance to your interiors with stylish ceiling designs.",
    description: "Add depth and elegance to your interiors with stylish ceiling designs.",
    features: [
      "Gypsum ceilings",
      "Cove lighting",
      "Layered designs"
    ],
    benefits: [
      "Improved aesthetics",
      "Better lighting distribution"
    ],
    cta: "👉 Transform Your Ceiling"
  },
  {
    slug: "pooja-units",
    title: "Pooja Units",
    Icon: Landmark,
    image: pooja,
    short: "Create a peaceful spiritual space with beautifully designed pooja units.",
    description: "Create a peaceful spiritual space with beautifully designed pooja units.",
    features: [
      "Traditional & modern styles",
      "Compact designs",
      "Decorative panels"
    ],
    benefits: [
      "Positive environment",
      "Space-efficient"
    ],
    cta: "👉 Design Your Sacred Space"
  },
  {
    slug: "wallpaper",
    title: "Wallpaper",
    Icon: PaintRoller,
    image: wallpaper,
    short: "Upgrade your walls instantly with stylish wallpapers.",
    description: "Upgrade your walls instantly with stylish wallpapers.",
    features: [
      "Wide range of designs",
      "Easy installation",
      "Durable materials"
    ],
    benefits: [
      "Instant transformation",
      "Cost-effective"
    ],
    cta: "👉 Refresh Your Walls"
  },
  {
    slug: "wall-paint",
    title: "Wall Paint",
    Icon: Paintbrush,
    image: paint,
    short: "We provide high-quality painting solutions for a flawless finish.",
    description: "We provide high-quality painting solutions for a flawless finish.",
    features: [
      "Interior & exterior painting",
      "Texture finishes",
      "Premium paints"
    ],
    benefits: [
      "Long-lasting finish",
      "Clean and elegant look"
    ],
    cta: "👉 Give Your Walls a New Life"
  },
  {
    slug: "bathroom-interiors",
    title: "Bathroom",
    Icon: Bath,
    image: bathroom,
    short: "Upgrade your bathroom with smart, stylish, and functional designs.",
    description: "Upgrade your bathroom with smart, stylish, and functional designs.",
    features: [
      "Vanity units",
      "Storage cabinets",
      "Waterproof materials"
    ],
    benefits: [
      "Organized space",
      "Luxury feel"
    ],
    cta: "👉 Upgrade Your Bathroom"
  },
  {
    slug: "custom-furniture",
    title: "Furniture",
    Icon: Sofa,
    image: furniture,
    short: "We design furniture tailored to your space, needs, and style.",
    description: "We design furniture tailored to your space, needs, and style.",
    features: [
      "Beds, sofas, tables",
      "Space-saving designs",
      "Premium materials"
    ],
    benefits: [
      "Perfect fit",
      "Unique designs"
    ],
    cta: "👉 Get Custom Furniture"
  },
  {
    slug: "complete-home-interiors",
    title: "Home Interiors",
    Icon: Home,
    image: completeHome,
    short: "From design to execution, we handle everything for your dream home.",
    description: "From design to execution, we handle everything for your dream home.",
    features: [
      "End-to-end services",
      "2BHK & 3BHK projects",
      "Turnkey solutions"
    ],
    benefits: [
      "Hassle-free experience",
      "Time-saving"
    ],
    cta: "👉 Start Your Dream Home Journey"
  },
  {
    slug: "3d-design",
    title: "3D Design",
    Icon: Monitor,
    image: design3d,
    short: "Visualize your home before execution with realistic 3D designs.",
    description: "Visualize your home before execution with realistic 3D designs.",
    features: [
      "Detailed 3D renders",
      "Layout planning",
      "Material preview"
    ],
    benefits: [
      "Clear vision",
      "Better decision making"
    ],
    cta: "👉 See Your Home Before It’s Built"
  }
];

export const getService = (slug: string) => services.find(s => s.slug === slug);
