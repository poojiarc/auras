import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Heart,
  Home,
  Wrench,
  ImageIcon,
  User,
  ArrowRight,
} from "lucide-react";

import logo from "@/assets/aura-logo.jpg";
import { services } from "@/lib/services-data";

export function Footer() {
  const year = new Date().getFullYear();

  const quickLinks = [
    { to: "/", label: "Home", Icon: Home },
    { to: "/services", label: "Our Services", Icon: Wrench },
    { to: "/projects", label: "Our Portfolio", Icon: ImageIcon },
    { to: "/about", label: "About Us", Icon: User },
    { to: "/contact", label: "Consultation", Icon: Phone },
  ];

  return (
    <footer className="bg-black text-white mt-24 border-t border-primary/20">

      <div className="mx-auto max-w-7xl px-4 py-24 grid gap-16 md:grid-cols-5">

        {/* BRAND */}
        <div className="md:col-span-2">
          <Link to="/" className="flex items-center gap-5 mb-10 group">
            <img
              src={logo}
              alt="Aura Interiors"
              className="h-16 w-auto object-contain drop-shadow-[0_0_15px_rgba(141,198,63,0.3)] transition-transform duration-500 group-hover:scale-105"
            />

            <div className="flex flex-col leading-tight">
              <span className="font-heading text-3xl md:text-4xl tracking-tight text-white uppercase">
                Aura <span className="text-brand italic font-light">Interiors</span>
              </span>
              <span className="text-[11px] uppercase tracking-[0.5em] text-white/50 font-black mt-1 font-accent">
                Timeless Luxury
              </span>
            </div>
          </Link>

          <p className="text-white/60 text-sm leading-relaxed max-w-sm mb-10 font-body">
            Crafting the world's most elegant, functional and personalized
            interior spaces. Experience the pinnacle of luxury design in
            Jadcherla & Hyderabad.
          </p>

          <div className="flex gap-5">
            {[Facebook, Instagram, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="h-12 w-12 rounded-2xl border border-primary/20 flex items-center justify-center text-primary bg-primary/5 hover:bg-primary hover:text-white hover:border-primary transition-all duration-500"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        {/* NAVIGATION */}
        <div>
          <h4 className="text-primary text-[11px] font-accent uppercase tracking-[0.4em] mb-10">
            Navigation
          </h4>

          <ul className="space-y-5 text-sm font-body">
            {quickLinks.map(({ to, label, Icon }) => (
              <li key={to}>
                <Link
                  to={to}
                  className="flex items-center gap-4 text-white/70 hover:text-primary transition group"
                >
                  <Icon className="h-5 w-5 text-primary" />
                  <span className="group-hover:translate-x-1 transition">
                    {label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* OFFERINGS */}
        <div>
          <h4 className="text-primary text-[11px] font-accent uppercase tracking-[0.4em] mb-10">
            Offerings
          </h4>

          <ul className="space-y-5 text-sm font-body">
            {services.slice(0, 5).map((s) => (
              <li key={s.slug}>
                <Link
                  to={`/services/${s.slug}`}
                  className="flex items-center gap-4 text-white/70 hover:text-primary transition group"
                >
                  <s.Icon className="h-5 w-5 text-primary" />
                  <span className="group-hover:translate-x-1 transition">
                    {s.title}
                  </span>
                </Link>
              </li>
            ))}

            <li>
              <Link
                to="/services"
                className="flex items-center gap-2 text-brand text-[12px] font-black uppercase tracking-[0.3em] mt-8 hover:gap-4 transition-all duration-300 font-accent"
              >
                View All Offerings <ArrowRight className="h-4 w-4 text-primary" />
              </Link>
            </li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="text-primary text-[11px] font-accent uppercase tracking-[0.4em] mb-10">
            Contact
          </h4>

          <ul className="space-y-8 text-sm font-body">

            <li className="flex items-start gap-5">
              <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <Phone className="h-5 w-5" />
              </div>
              <a href="tel:9542119649" className="text-white/80 hover:text-primary">
                +91 95421 19649
              </a>
            </li>

            <li className="flex items-start gap-5">
              <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <Mail className="h-5 w-5" />
              </div>
              <a href="mailto:auraInteriors.ind@gmail.com" className="text-white/80 hover:text-primary break-all">
                auraInteriors.ind@gmail.com
              </a>
            </li>

            <li className="flex items-start gap-5">
              <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <MapPin className="h-5 w-5" />
              </div>
              <span className="text-white/80">
                Jadcherla, Mahabubnagar,<br />
                Telangana, India
              </span>
            </li>

          </ul>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-primary/10 bg-[#050505] py-10 text-center">

        <p className="text-[11px] font-accent uppercase tracking-[0.5em] text-white/40">
          © {year} AURA INTERIORS. ALL RIGHTS RESERVED.
        </p>

        <div className="flex justify-center items-center gap-2 mt-4 text-xs text-white/50">
          Made with{" "}
          <Heart className="h-4 w-4 text-red-500 fill-red-500 animate-pulse" />
          by StaffArc
        </div>

      </div>
    </footer>
  );
}