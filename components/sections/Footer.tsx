"use client";
import { motion } from "framer-motion";
import { 
  Instagram, 
  Linkedin, 
  Palette, 
  Video, 
  ArrowUp
} from "lucide-react";
import { navLinks } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();

  const socialLinks = [
    { label: "Instagram", icon: <Instagram size={18} />, href: "#" },
    { label: "LinkedIn", icon: <Linkedin size={18} />, href: "#" },
    { label: "Behance", icon: <Palette size={18} />, href: "#" },
    { label: "Vimeo", icon: <Video size={18} />, href: "#" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="relative overflow-hidden bg-noise border-t border-subtle"
      style={{
        paddingTop: "var(--space-16)",
        paddingBottom: "var(--space-8)",
        background: "var(--bg-primary)",
      }}
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div 
          className="absolute -bottom-1/2 left-1/2 -translate-x-1/2 w-full h-full max-w-[1000px] rounded-full"
          style={{ background: "radial-gradient(circle, var(--gold-glow) 0%, transparent 70%)", filter: "blur(100px)" }}
        />
      </div>

      <div className="container-xl relative z-10">
        {/* Balanced Grid with Standardized Spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16 lg:mb-24">
          
          {/* Column 1: Identity */}
          <div className="flex flex-col items-start gap-10">
            <div className="flex flex-col gap-4">
              <div className="h-[2px] w-12 bg-transparent" /> {/* Height Sync */}
              <div className="flex items-center gap-5">
                <span className="font-display text-5xl text-gradient leading-none select-none">T</span>
                <div className="flex flex-col gap-1">
                  <h3 className="font-display tracking-[0.3em] text-[10px] uppercase text-primary">
                    Taiyer Khan
                  </h3>
                  <span className="text-[8px] tracking-[0.5em] uppercase text-gold font-medium">
                    Motion Artist
                  </span>
                </div>
              </div>
            </div>
            
            <p className="text-[11px] leading-[1.8] text-secondary/60 max-w-[240px] tracking-wide font-light">
              Elevating digital storytelling through high-end post-production and motion graphics.
            </p>
            
            <div className="flex gap-5">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-muted/60 hover:text-gold transition-all duration-500 transform hover:scale-110"
                  title={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="flex flex-col items-start gap-10">
            <div className="flex flex-col gap-4">
              <div className="divider-gold w-10" />
              <h4 className="text-[10px] tracking-[0.5em] uppercase text-gold font-bold">
                Navigation
              </h4>
            </div>
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[10px] tracking-[0.2em] text-secondary/70 hover:text-primary transition-all duration-300 uppercase group flex items-center gap-3"
                >
                  <span className="w-0 h-[1px] bg-gold group-hover:w-3 transition-all duration-300" />
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Column 3: Communication */}
          <div className="flex flex-col items-start gap-10">
            <div className="flex flex-col gap-4">
              <div className="divider-gold w-10" />
              <h4 className="text-[10px] tracking-[0.5em] uppercase text-gold font-bold">
                Connect
              </h4>
            </div>
            <div className="flex flex-col gap-6">
              <a 
                href="mailto:hello@taiyer.com" 
                className="group flex flex-col gap-2"
              >
                <span className="text-[9px] tracking-[0.4em] uppercase text-muted/40 group-hover:text-gold transition-colors font-semibold">Message</span>
                <span className="text-[11px] text-secondary/80 group-hover:text-primary transition-colors tracking-widest font-light">hello@taiyer.com</span>
              </a>
              <div className="flex flex-col gap-2">
                <span className="text-[9px] tracking-[0.4em] uppercase text-muted/40 font-semibold">Based In</span>
                <span className="text-[11px] text-secondary/80 tracking-widest font-light">Remote / Worldwide</span>
              </div>
            </div>
          </div>

          {/* Column 4: Collaboration */}
          <div className="flex flex-col items-start gap-10">
             <div className="flex flex-col gap-4">
              <div className="divider-gold w-10" />
              <h4 className="text-[10px] tracking-[0.5em] uppercase text-gold font-bold">
                Inquiry
              </h4>
            </div>
            <div className="glass p-6 rounded-sm border border-white/5 w-full flex flex-col gap-6 group hover:border-gold/20 transition-all duration-700">
              <p className="text-[11px] leading-relaxed text-secondary/60 tracking-wider font-light">
                Ready to transform your vision into a cinematic masterpiece?
              </p>
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center p-4 text-[9px] tracking-[0.4em] uppercase font-bold border border-gold/20 text-gold hover:bg-gold hover:text-primary transition-all duration-700"
              >
                Quick Brief
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar - Refined Spacing */}
        <div className="pt-10 lg:pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 opacity-50">
           <div className="flex items-center gap-6 text-[9px] tracking-[0.3em] uppercase">
              <span>© {year} Taiyer Khan</span>
              <span className="w-1 h-1 rounded-full bg-gold/20" />
              <span className="text-gold/60">Cinematic Production</span>
           </div>

           <motion.button
              onClick={scrollToTop}
              whileHover={{ y: -5 }}
              className="group flex flex-col items-center gap-3 cursor-pointer"
            >
              <div className="w-px h-8 bg-gradient-to-t from-gold to-transparent opacity-30 group-hover:opacity-100 transition-opacity" />
              <span className="text-[9px] tracking-[0.4em] uppercase text-muted group-hover:text-gold transition-colors font-medium">Top</span>
            </motion.button>

           <div className="flex gap-10 text-[9px] tracking-[0.3em] uppercase">
              <a href="#" className="hover:text-gold transition-colors">Privacy</a>
              <a href="#" className="hover:text-gold transition-colors">Terms</a>
           </div>
        </div>
      </div>
    </footer>
  );
}
