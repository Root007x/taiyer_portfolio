"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { testimonials } from "@/lib/data";

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((p) => (p + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const t = testimonials[current];

  return (
    <section id="testimonials" style={{ paddingBlock: "var(--space-section)", background: "var(--bg-secondary)" }}>
      <div className="container-xl">
        <SectionReveal className="text-center" style={{ marginBottom: "var(--space-10)" }}>
          <div className="flex items-center justify-center" style={{ gap: "var(--space-2)", marginBottom: "var(--space-4)" }}>
            <div className="divider-gold" />
            <span className="text-xs tracking-[0.3em] uppercase" style={{ color: "var(--gold)" }}>
              Client Stories
            </span>
            <div className="divider-gold" style={{ transform: "scaleX(-1)" }} />
          </div>
          <h2 className="font-display" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "var(--space-4)" }}>
            What Clients <span className="text-gradient">Say</span>
          </h2>
        </SectionReveal>

        {/* Carousel */}
        <div className="max-w-3xl mx-auto">
          <div
            className="relative glass p-8 md:p-12"
          >
            {/* Large quote mark */}
            <div
              className="absolute top-4 left-6 md:top-8 md:left-8 font-display text-[100px] leading-none pointer-events-none select-none"
              style={{ color: "rgba(212,175,55,0.04)", lineHeight: 1 }}
            >
              &ldquo;
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {/* Stars */}
                <div className="flex" style={{ gap: "var(--space-1)", marginBottom: "var(--space-6)" }}>
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path
                        d="M7 1L8.8 5.2L13.4 5.5L10 8.4L11.1 13L7 10.5L2.9 13L4 8.4L0.6 5.5L5.2 5.2L7 1Z"
                        fill="#d4af37"
                      />
                    </svg>
                  ))}
                </div>

                <blockquote
                  className="font-display text-lg md:text-xl lg:text-2xl leading-relaxed relative z-10"
                  style={{ color: "var(--text-primary)", marginBottom: "var(--space-8)" }}
                >
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center" style={{ gap: "var(--space-4)" }}>
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center font-display text-lg font-bold"
                    style={{
                      background: "linear-gradient(135deg, var(--gold-dark), var(--gold))",
                      color: "var(--bg-primary)",
                    }}
                  >
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-sm" style={{ color: "var(--text-primary)" }}>
                      {t.name}
                    </p>
                    <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                      {t.role}, {t.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`testimonial-dot ${i === current ? "active" : ""}`}
                aria-label={`Testimonial ${i + 1}`}
                style={{ cursor: "none" }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
