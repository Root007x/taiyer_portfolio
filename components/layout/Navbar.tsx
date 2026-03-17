"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { navLinks } from "@/lib/data";

export function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [active, setActive]       = useState("");
  const [menuOpen, setMenuOpen]   = useState(false);
  const progress = useScrollProgress();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Highlight active section based on scroll
  useEffect(() => {
    const sections = navLinks.map((l) => l.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 h-[2px] z-[1001] origin-left"
        style={{
          background: "linear-gradient(90deg, var(--gold-dark), var(--gold), var(--gold-light))",
          scaleX: progress,
        }}
      />

      <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="container-xl flex items-center justify-between" style={{ paddingBlock: "var(--space-4)" }}>
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group" style={{ cursor: "none" }}>
            <span
              className="font-display text-xl tracking-widest"
              style={{ color: "var(--gold)" }}
            >
              T
            </span>
              <span className="font-display tracking-[0.2em] text-sm uppercase">
                Taiyar Khan
              </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center" style={{ gap: "var(--space-5)" }}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`nav-link ${active === link.href ? "active" : ""}`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <a
            href="#contact"
            className="btn-gold hidden md:inline-flex text-xs"
            style={{ cursor: "none" }}
          >
            Hire Me
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen((p) => !p)}
            className="md:hidden flex flex-col gap-[5px] p-2"
            style={{ cursor: "none", background: "none", border: "none" }}
            aria-label="Menu"
          >
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                className="block h-[1px] w-6"
                style={{ background: "var(--text-primary)" }}
                animate={
                  menuOpen
                    ? i === 1
                      ? { opacity: 0 }
                      : i === 0
                      ? { rotate: 45, y: 6 }
                      : { rotate: -45, y: -6 }
                    : { rotate: 0, y: 0, opacity: 1 }
                }
                transition={{ duration: 0.25 }}
              />
            ))}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35 }}
              style={{ background: "rgba(8,8,8,0.97)", borderTop: "1px solid var(--border-subtle)" }}
              className="md:hidden overflow-hidden"
            >
              <nav className="container-xl flex flex-col" style={{ gap: "var(--space-4)", paddingBlock: "var(--space-6)" }}>
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`nav-link text-base ${active === link.href ? "active" : ""}`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <a href="#contact" className="btn-gold self-start mt-2" onClick={() => setMenuOpen(false)}>
                  Hire Me
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
