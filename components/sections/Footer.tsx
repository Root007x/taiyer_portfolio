"use client";
import { navLinks } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative overflow-hidden"
      style={{ paddingBlock: "var(--space-12)", background: "var(--bg-primary)", borderTop: "1px solid var(--border-subtle)" }}
    >
      <div className="container-xl">
        <div className="flex flex-col md:flex-row items-center justify-between" style={{ gap: "var(--space-8)" }}>
          {/* Logo */}
          <div className="flex items-center" style={{ gap: "var(--space-3)" }}>
            <span className="font-display text-2xl tracking-widest" style={{ color: "var(--gold)" }}>
              T
            </span>
            <div>
              <span className="font-display tracking-[0.2em] text-sm uppercase" style={{ color: "var(--text-primary)" }}>
              Taiyer Khan
            </span>
              <p className="text-xs tracking-widest" style={{ color: "var(--text-muted)" }}>
                Video Editor & Motion Designer
              </p>
            </div>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap justify-center" style={{ gap: "var(--space-6)" }}>
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="nav-link text-[11px]">
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social */}
          <div className="flex" style={{ gap: "var(--space-5)" }}>
            {["IG", "LI", "BE", "VM"].map((s) => (
              <a
                key={s}
                href="#"
                style={{ color: "var(--text-muted)", fontSize: "0.7rem", letterSpacing: "0.1em", cursor: "none" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
                className="transition-colors uppercase font-medium"
              >
                {s}
              </a>
            ))}
          </div>
        </div>

        <div
          className="flex flex-col md:flex-row items-center justify-between text-xs"
          style={{ 
            gap: "var(--space-4)", 
            marginTop: "var(--space-10)", 
            paddingTop: "var(--space-6)", 
            borderTop: "1px solid var(--border-subtle)", 
            color: "var(--text-muted)" 
          }}
        >
          <p>&copy; {year} Taiyer Khan. All rights reserved.</p>
          <p>
            Crafted with{" "}
            <span style={{ color: "var(--gold)" }}>♦</span>{" "}
            and cinematic precision.
          </p>
        </div>
      </div>
    </footer>
  );
}
