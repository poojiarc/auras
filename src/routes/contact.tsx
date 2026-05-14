import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, Instagram, Clock, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { services } from "@/lib/services-data";
import ig1 from "@/assets/instagram_interior_1_1778739466281.png";
import ig2 from "@/assets/instagram_interior_2_1778739486497.png";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi Aura Interiors,%0A%0AName: ${form.name}%0APhone: ${form.phone}%0AEmail: ${form.email}%0AInterested Service: ${form.service}%0A%0A${form.message}`;
    window.open(`https://wa.me/919542119649?text=${text}`, "_blank");
    setSent(true);
  };

  return (
    <div className="bg-black pt-20">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent opacity-40" />
        <div className="mx-auto max-w-7xl px-4 text-center relative z-10">
          <Reveal>
            <span className="text-primary text-xs font-bold tracking-[0.5em] uppercase mb-8 block">Connect With Us</span>
            <h1 className="text-5xl md:text-7xl font-serif text-white mb-8 leading-tight">
              Let's Craft Your <br /> <span className="text-primary italic">Signature Space</span>
            </h1>
            <p className="text-white/70 max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed">
              Experience the pinnacle of interior luxury. Reach out for a private design consultation 
              with our award-winning experts.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-32">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-12 gap-16">
            {/* Contact Info & Details */}
            <div className="lg:col-span-5 space-y-12">
              <Reveal>
                <div className="space-y-8">
                  <h2 className="text-3xl font-serif text-white mb-10 tracking-wide inline-block relative">
                    Contact Information
                    <div className="absolute -bottom-4 left-0 h-1 w-20 bg-primary rounded-full shadow-[0_0_10px_rgba(141,198,63,0.5)]" />
                  </h2>
                  
                  {[
                    { Icon: Phone, label: "Direct Line", value: "+91 95421 19649", href: "tel:9542119649" },
                    { Icon: Mail, label: "Official Email", value: "auraInteriors.ind@gmail.com", href: "mailto:auraInteriors.ind@gmail.com" },
                    { Icon: MapPin, label: "Design Studio", value: "Jadcherla, Mahabubnagar, Telangana", href: "#map" },
                    { Icon: Clock, label: "Studio Hours", value: "10:00 AM – 7:00 PM, All Week", href: null },
                  ].map((c, i) => (
                    <div key={i} className="flex items-start gap-8 group">
                      <div className="h-14 w-14 rounded-2xl border border-primary/20 flex items-center justify-center text-primary bg-primary/5 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-glow/5">
                        <c.Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <div className="text-[10px] text-primary uppercase tracking-[0.3em] font-bold mb-2">{c.label}</div>
                        {c.href ? (
                          <a href={c.href} className="text-white hover:text-primary transition-colors text-lg font-medium">{c.value}</a>
                        ) : (
                          <span className="text-white text-lg font-medium">{c.value}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>

              {/* Map Embed */}
              <Reveal delay={0.2}>
                <div id="map" className="rounded-[3rem] overflow-hidden border border-primary/20 shadow-premium aspect-video relative group transition-all duration-500 hover:border-primary/40">
                  <iframe
                    title="Aura Interiors location"
                    src="https://www.google.com/maps?q=Jadcherla,Mahabubnagar,Telangana&output=embed"
                    className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 pointer-events-none border border-white/5 rounded-[3rem]" />
                </div>
              </Reveal>
            </div>

            {/* Consultation Form */}
            <div className="lg:col-span-7">
              <Reveal delay={0.1}>
                <div className="glass p-10 md:p-16 rounded-[4rem] border border-primary/20 shadow-premium relative overflow-hidden group">
                  <div className="absolute top-0 right-16 w-32 h-1.5 bg-primary rounded-full shadow-[0_0_20px_rgba(141,198,63,0.8)]" />
                  
                  <h3 className="text-4xl font-serif text-white mb-10">Request Consultation</h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label className="text-[10px] uppercase tracking-[0.3em] text-primary font-bold ml-1">Full Name</label>
                        <input 
                          required 
                          placeholder="Your Name"
                          value={form.name} 
                          onChange={e => setForm({ ...form, name: e.target.value })}
                          className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-8 py-5 text-white outline-none focus:border-primary/50 focus:bg-white/[0.06] transition-all duration-300" 
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] uppercase tracking-[0.3em] text-primary font-bold ml-1">Phone Number</label>
                        <input 
                          required 
                          type="tel" 
                          placeholder="+91 XXXXX XXXXX"
                          value={form.phone} 
                          onChange={e => setForm({ ...form, phone: e.target.value })}
                          className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-8 py-5 text-white outline-none focus:border-primary/50 focus:bg-white/[0.06] transition-all duration-300" 
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label className="text-[10px] uppercase tracking-[0.3em] text-primary font-bold ml-1">Email Address</label>
                        <input 
                          required 
                          type="email" 
                          placeholder="email@example.com"
                          value={form.email} 
                          onChange={e => setForm({ ...form, email: e.target.value })}
                          className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-8 py-5 text-white outline-none focus:border-primary/50 focus:bg-white/[0.06] transition-all duration-300" 
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] uppercase tracking-[0.3em] text-primary font-bold ml-1">Interested Service</label>
                        <select 
                          required 
                          value={form.service} 
                          onChange={e => setForm({ ...form, service: e.target.value })}
                          className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-8 py-5 text-white outline-none focus:border-primary/50 focus:bg-white/[0.06] transition-all duration-300 appearance-none"
                        >
                          <option value="" disabled className="bg-black text-white">Select Category</option>
                          {services.map(s => (
                            <option key={s.slug} value={s.title} className="bg-black text-white">{s.title}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="text-[10px] uppercase tracking-[0.3em] text-primary font-bold ml-1">Project Details</label>
                      <textarea 
                        required 
                        rows={5} 
                        placeholder="Tell us about your dream interior vision..."
                        value={form.message} 
                        onChange={e => setForm({ ...form, message: e.target.value })}
                        className="w-full bg-white/[0.03] border border-white/10 rounded-[2rem] px-8 py-6 text-white outline-none focus:border-primary/50 focus:bg-white/[0.06] transition-all duration-300 resize-none" 
                      />
                    </div>

                    <button 
                      type="submit" 
                      className="w-full btn-brand py-6 rounded-2xl text-base font-bold shadow-glow flex items-center justify-center gap-4 group"
                    >
                      {sent ? (
                        <>Redirecting to WhatsApp... <CheckCircle2 className="h-6 w-6 animate-pulse" /></>
                      ) : (
                        <>Send Private Inquiry <Send className="h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" /></>
                      )}
                    </button>
                    
                    <p className="text-center text-[10px] text-white/30 uppercase tracking-[0.3em] font-bold">
                      Privacy Protected · 24h Premium Response
                    </p>
                  </form>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="py-32 bg-[#050505] border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/4 h-full bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="mx-auto max-w-7xl px-4 relative z-10">
          <div className="text-center mb-20">
            <Reveal>
              <h3 className="text-4xl font-serif text-white mb-6">Our Visual Journey</h3>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-primary hover:text-white transition-all duration-300 tracking-[0.3em] uppercase text-xs font-bold"
              >
                <Instagram className="h-5 w-5" /> @AuraInteriors
              </a>
            </Reveal>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[ig1, ig2, ig1, ig2].map((img, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 0.96, rotate: i % 2 === 0 ? 1 : -1 }}
                className="aspect-square rounded-[2rem] overflow-hidden relative group border border-white/5 shadow-lg"
              >
                <img src={img} alt="Aura Interior Design" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-[2px]">
                   <Instagram className="text-white h-10 w-10 scale-0 group-hover:scale-100 transition-all duration-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}


