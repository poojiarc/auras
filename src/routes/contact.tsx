import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, Facebook, Instagram, Linkedin } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { services } from "@/lib/services-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Aura Interiors" },
      { name: "description", content: "Get in touch with Aura Interiors in Jadcherla, Telangana. Call +91 95421 19649 or email auraInteriors.ind@gmail.com" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi Aura Interiors,%0A%0AName: ${form.name}%0APhone: ${form.phone}%0AEmail: ${form.email}%0AInterested Service: ${form.service}%0A%0A${form.message}`;
    window.open(`https://wa.me/919542119649?text=${text}`, "_blank");
    setSent(true);
  };

  return (
    <>
      <section className="pt-36 pb-12 bg-gradient-hero text-white">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <Reveal>
            <span className="text-xs font-semibold tracking-widest text-primary uppercase">Contact</span>
            <h1 className="mt-3 text-5xl md:text-6xl font-bold">Let's design together</h1>
            <p className="mt-4 text-white/70 max-w-2xl mx-auto">Reach out for a free, no-obligation consultation.</p>
          </Reveal>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-10">
          <Reveal>
            <div className="space-y-5">
              {[
                { Icon: Phone, label: "Call us", value: "+91 95421 19649", href: "tel:9542119649" },
                { Icon: Mail, label: "Email", value: "auraInteriors.ind@gmail.com", href: "mailto:auraInteriors.ind@gmail.com" },
                { Icon: MapPin, label: "Visit", value: "Jadcherla, Mahabubnagar, Telangana", href: "#map" },
              ].map((c, i) => (
                <motion.a key={i} href={c.href} whileHover={{ x: 6 }}
                  className="flex items-center gap-4 rounded-2xl bg-card border p-5 shadow-soft hover:shadow-elegant transition-shadow">
                  <div className="h-12 w-12 rounded-xl bg-accent text-primary flex items-center justify-center">
                    <c.Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">{c.label}</div>
                    <div className="font-semibold">{c.value}</div>
                  </div>
                </motion.a>
              ))}

              <div className="flex gap-3 pt-2">
                {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                  <a key={i} href="#" className="h-11 w-11 rounded-xl bg-card border flex items-center justify-center hover:bg-gradient-brand hover:text-primary-foreground transition-all">
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>

              <div id="map" className="rounded-2xl overflow-hidden border shadow-soft aspect-video mt-4">
                <iframe
                  title="Aura Interiors location"
                  src="https://www.google.com/maps?q=Jadcherla,Mahabubnagar,Telangana&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={handleSubmit} className="rounded-2xl bg-card border p-8 shadow-elegant space-y-5">
              <h2 className="text-2xl font-bold">Send a message</h2>
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm font-medium">Name</label>
                  <input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                    className="mt-1.5 w-full rounded-xl border bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-primary" />
                </div>
                <div>
                  <label className="text-sm font-medium">Mobile Number</label>
                  <input required type="tel" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })}
                    className="mt-1.5 w-full rounded-xl border bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-primary" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm font-medium">Email</label>
                  <input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                    className="mt-1.5 w-full rounded-xl border bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-primary" />
                </div>
                <div>
                  <label className="text-sm font-medium">Service Interested In</label>
                  <select required value={form.service} onChange={e => setForm({ ...form, service: e.target.value })}
                    className="mt-1.5 w-full rounded-xl border bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-primary">
                    <option value="" disabled>Select a service</option>
                    {services.map(s => (
                      <option key={s.slug} value={s.title}>{s.title}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium">Message</label>
                <textarea required rows={4} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                  className="mt-1.5 w-full rounded-xl border bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-primary resize-none" />
              </div>
              <button type="submit" className="w-full inline-flex items-center justify-center gap-2 bg-gradient-brand text-primary-foreground px-6 py-4 rounded-xl font-semibold shadow-soft hover:shadow-glow transition-all">
                {sent ? "Opening WhatsApp..." : "Send Message"} <Send className="h-4 w-4" />
              </button>
              <p className="text-xs text-muted-foreground text-center">We respond within 24 hours.</p>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
