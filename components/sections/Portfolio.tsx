"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { portfolioItems, portfolioCategories } from "@/lib/data";

// Deterministic aspect-ratio heights for masonry look (no random)
const aspectHeights: Record<string, string> = {
  landscape: "220px",
  portrait: "360px",
  square: "280px",
};

// Cinematic gradient per item index
const gradients = [
  "linear-gradient(135deg, #1a1a2e 0%, #16213e 60%, #0f3460 100%)",
  "linear-gradient(135deg, #2d1b69 0%, #11998e 100%)",
  "linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)",
  "linear-gradient(135deg, #1a0533 0%, #6b0f1a 100%)",
  "linear-gradient(135deg, #093028 0%, #237a57 100%)",
  "linear-gradient(135deg, #232526 0%, #414345 100%)",
];

export function Portfolio() {
  const [active, setActive] = useState("all");

  const filtered = active === "all"
    ? portfolioItems
    : portfolioItems.filter((p) => p.categories.includes(active));

  return (
    <section id="portfolio" style={{ paddingBlock: "var(--space-section)", background: "var(--bg-secondary)" }}>
      <div className="container-xl">
        {/* Header */}
        <SectionReveal style={{ marginBottom: "var(--space-12)" }}>
          <div className="flex items-center" style={{ gap: "var(--space-2)", marginBottom: "var(--space-4)" }}>
            <div className="divider-gold" />
            <span className="text-xs tracking-[0.3em] uppercase" style={{ color: "var(--gold)" }}>
              Portfolio
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between" style={{ gap: "var(--space-6)" }}>
            <h2 className="font-display" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
              Selected <span className="text-gradient">Works</span>
            </h2>
            {/* Filters */}
            <div className="flex flex-wrap" style={{ gap: "var(--space-2)" }}>
              {portfolioCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`filter-btn ${active === cat ? "active" : ""}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </SectionReveal>

        <div className="masonry-grid" style={{ marginTop: "var(--space-10)" }}>
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="masonry-item portfolio-card group"
                style={{ height: aspectHeights[item.aspect] }}
              >
                {/* Gradient stand-in for real image */}
                <div
                  className="w-full h-full"
                  style={{ background: gradients[i % gradients.length] }}
                />

                {/* Overlay */}
                <div className="portfolio-card-overlay">
                  <div>
                    <p className="text-xs tracking-widest uppercase" style={{ color: "var(--gold)", marginBottom: "var(--space-1)" }}>
                      {item.category} • {item.year}
                    </p>
                    <h3 className="font-display text-lg" style={{ color: "var(--text-primary)", marginBottom: "var(--space-1)" }}>
                      {item.title}
                    </h3>
                    <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
                      {item.client}
                    </p>
                    <div className="flex flex-wrap" style={{ gap: "var(--space-2)", marginTop: "var(--space-3)" }}>
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] px-2 py-0.5 tracking-wider"
                          style={{
                            background: "rgba(212,175,55,0.15)",
                            color: "var(--gold)",
                            border: "1px solid rgba(212,175,55,0.2)",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Top index label */}
                <div className="absolute" style={{ top: "var(--space-3)", right: "var(--space-3)" }}>
                  <span className="font-display text-xs" style={{ color: "rgba(255,255,255,0.2)" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
