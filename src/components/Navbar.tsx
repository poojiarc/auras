import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Wrench, Image as ImageIcon, User, Phone, Menu, X } from "lucide-react";
import logo from "@/assets/aura-logo.jpg";

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
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "py-2" : "py-4"}`}>
      <div className="mx-auto max-w-7xl px-4">

        <nav className={`flex items-center justify-between rounded-full px-6 transition-all duration-500 ${scrolled
            ? "py-2 bg-[#0A0A0A]/90 backdrop-blur-xl border border-primary/20 shadow-[0_0_30px_rgba(141,198,63,0.15)]"
            : "py-3 bg-black/40 backdrop-blur-md border border-white/10"
          }`}>

          {/* LOGO */}
          <Link to="/" className="flex items-center gap-4 group">
            <img
              src={logo}
              alt="Aura Interiors"
              className="h-12 md:h-16 w-auto object-contain transition-all duration-500 group-hover:scale-105"
            />

            <div className="flex flex-col leading-tight">
              <span className="font-heading text-2xl md:text-3xl text-white uppercase tracking-tight">
                Aura <span className="text-brand italic font-light">Interiors</span>
              </span>
              <span className="text-[10px] uppercase tracking-[0.5em] text-white/50 font-black mt-1 font-accent">
                Timeless Luxury
              </span>
            </div>
          </Link>

          {/* DESKTOP MENU */}
          <ul className="hidden lg:flex items-center gap-8">
            {links.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    `relative text-[12px] font-accent uppercase tracking-[0.2em] transition-all duration-300 ${isActive
                      ? "text-primary"
                      : "text-white/70 hover:text-primary"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {label}
                      {isActive && (
                        <motion.div
                          layoutId="nav-underline"
                          className="absolute -bottom-1 left-0 right-0 h-[2px] bg-primary"
                        />
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden md:flex items-center">
            <Link
              to="/contact"
              className="btn-brand px-8 py-4 rounded-full text-[13px] font-black shadow-glow"
            >
              Get Free Consultation
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setOpen(v => !v)}
            className="lg:hidden p-2 text-white hover:text-primary transition"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="lg:hidden mt-4 bg-[#0A0A0A] rounded-3xl p-6 border border-primary/20 shadow-xl"
            >
              <div className="flex flex-col gap-4">

                {links.map(({ to, label, Icon }) => (
                  <NavLink
                    key={to}
                    to={to}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center gap-4 px-4 py-3 rounded-xl transition ${isActive
                        ? "bg-primary text-black"
                        : "text-white/70 hover:bg-white/10"
                      }`
                    }
                  >
                    <Icon className="h-5 w-5" />
                    <span className="font-accent uppercase tracking-wider text-sm">
                      {label}
                    </span>
                  </NavLink>
                ))}

                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="mt-4 text-center py-3 rounded-xl btn-brand text-sm"
                >
                  Book Free Consultation
                </Link>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </header>
  );
}