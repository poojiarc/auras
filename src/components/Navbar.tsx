import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Wrench, Image as ImageIcon, User, Phone, Menu, X } from "lucide-react";
import logo from "@/assets/aura-logo.png";

const links = [
  { to: "/", label: "Home", Icon: Home },
  { to: "/services", label: "Services", Icon: Wrench },
  { to: "/projects", label: "Projects", Icon: ImageIcon },
  { to: "/about", label: "About", Icon: User },
  { to: "/contact", label: "Contact", Icon: Phone },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "py-2" : "py-4"}`}>
      <div className="mx-auto max-w-7xl px-4">
        <nav className={`flex items-center justify-between rounded-2xl px-4 md:px-6 py-3 transition-all duration-300 ${scrolled ? "glass-light shadow-soft" : "glass-light"}`}>
          <Link to="/" className="flex items-center gap-2 min-w-0">
            <img src={logo} alt="Aura Interiors" className="h-12 md:h-14 w-auto shrink-0" />
            <span className="hidden sm:block font-extrabold text-sm md:text-base tracking-widest text-secondary uppercase whitespace-nowrap font-ranade">
              <span className="text-primary">Aura</span> Home Interiors
            </span>
          </Link>
          <ul className="hidden md:flex items-center gap-1">
            {links.map(({ to, label, Icon }) => (
              <li key={to}>
                <NavLink to={to}
                  className={({ isActive }) => 
                    `group flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                      isActive 
                        ? "text-primary bg-accent" 
                        : "text-foreground/80 hover:text-foreground hover:bg-accent"
                    }`
                  }
                >
                  <Icon className="h-4 w-4 text-primary group-hover:scale-110 transition-transform" />
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
          <Link to="/contact" className="hidden md:inline-flex items-center gap-2 bg-gradient-brand text-primary-foreground px-5 py-2.5 rounded-xl text-sm font-semibold shadow-soft hover:shadow-glow transition-all hover:-translate-y-0.5">
            Book Free Consultation
          </Link>
          <button onClick={() => setOpen(v => !v)} className="md:hidden p-2 rounded-lg hover:bg-accent" aria-label="Menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
        <AnimatePresence>
          {open && (
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
              className="md:hidden mt-2 glass-light rounded-2xl p-3 shadow-soft">
              {links.map(({ to, label, Icon }) => (
                <NavLink key={to} to={to} onClick={() => setOpen(false)}
                  className={({ isActive }) => 
                    `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium ${
                      isActive 
                        ? "text-primary bg-accent" 
                        : "hover:bg-accent"
                    }`
                  }
                >
                  <Icon className="h-4 w-4 text-primary" /> {label}
                </NavLink>
              ))}
              <Link to="/contact" onClick={() => setOpen(false)} className="mt-2 flex items-center justify-center gap-2 bg-gradient-brand text-primary-foreground px-5 py-3 rounded-xl text-sm font-semibold">
                Book Free Consultation
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
