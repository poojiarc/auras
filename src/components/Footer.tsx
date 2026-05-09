import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Heart, Home, Wrench, Image as ImageIcon, User } from "lucide-react";
import logo from "@/assets/aura-logo.png";
import { services } from "@/lib/services-data";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-secondary text-secondary-foreground mt-24">
      <div className="mx-auto max-w-7xl px-4 py-16 grid gap-12 md:grid-cols-4">
        <div>
          <img src={logo} alt="Aura Interiors" className="h-14 w-auto bg-white rounded-xl p-2" />
          <p className="mt-4 text-sm text-secondary-foreground/70 leading-relaxed">
            Premium home interior solutions in Jadcherla, Telangana. Crafting elegant, functional spaces with modular kitchens, wardrobes & turnkey designs.
          </p>
          <div className="mt-5 flex gap-3">
            {[
              { Icon: Facebook, href: "#" },
              { Icon: Instagram, href: "#" },
              { Icon: Linkedin, href: "#" },
            ].map(({ Icon, href }, i) => (
              <a key={i} href={href} className="h-10 w-10 rounded-xl glass flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:-translate-y-0.5 transition-all">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2.5 text-sm text-secondary-foreground/70">
            {[
              { to: "/", label: "Home", Icon: Home },
              { to: "/services", label: "Services", Icon: Wrench },
              { to: "/projects", label: "Projects", Icon: ImageIcon },
              { to: "/about", label: "About", Icon: User },
              { to: "/contact", label: "Contact", Icon: Phone },
            ].map(({ to, label, Icon }) => (
              <li key={to}>
                <Link to={to} className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Icon className="h-3.5 w-3.5" /> {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Services</h4>
          <ul className="space-y-2.5 text-sm text-secondary-foreground/70">
            {services.slice(0, 6).map(s => (
              <li key={s.slug}>
                <Link to="/services/$slug" params={{ slug: s.slug }} className="flex items-center gap-2 hover:text-primary transition-colors">
                  <s.Icon className="h-3.5 w-3.5" /> {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-secondary-foreground/70">
            <li className="flex items-start gap-2"><Phone className="h-4 w-4 mt-0.5 text-primary" /><a href="tel:9542119649" className="hover:text-primary">+91 95421 19649</a></li>
            <li className="flex items-start gap-2"><Mail className="h-4 w-4 mt-0.5 text-primary" /><a href="mailto:auraInteriors.ind@gmail.com" className="hover:text-primary break-all">auraInteriors.ind@gmail.com</a></li>
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 text-primary" />Jadcherla, Mahabubnagar, Telangana</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-secondary-foreground/60">
          <p>© {year} AURA INTERIOR HOME SOLUTIONs. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Made with <Heart className="h-3.5 w-3.5 text-primary fill-primary" /> by{" "}
            <a href="#" className="text-primary font-semibold hover:underline">StaffArc</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
