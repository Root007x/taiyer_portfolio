"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { portfolioItems, portfolioCategories } from "@/lib/data";

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
  const [playingId, setPlayingId] = useState<string | null>(null); // state to toggle inline video playback

  const filtered =
    active === "all"
      ? portfolioItems
      : portfolioItems.filter((p) => p.categories.includes(active));

  return (
    <section
      id="portfolio"
      style={{ paddingBlock: "var(--space-section)", background: "var(--bg-secondary)" }}
    >
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
            {filtered.map((item, i) => {
                  const isPlaying = playingId === item.id;
              
              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="masonry-item portfolio-card group"
                  style={{
                    height:
                      item.aspect === "landscape"
                        ? "220px"
                        : item.aspect === "portrait"
                          ? "360px"
                          : "280px",
                  }}
                >
                  {isPlaying && item.embedSrc ? (
                    <>
                      <iframe
                        src={`${item.embedSrc}?autoplay=1`}
                        className="absolute inset-0 w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                      <button
                        type="button"
                        onClick={(e) => { e.stopPropagation(); setPlayingId(null); }}
                        className="absolute top-2 right-2 z-10"
                        style={{
                          width: 32,
                          height: 32,
                          borderRadius: 999,
                          background: "rgba(0,0,0,0.7)",
                          border: "1px solid rgba(212,175,55,0.5)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          cursor: "pointer",
                          color: "rgba(212,175,55,0.9)",
                        }}
                        aria-label="Close video"
                      >
                        ✕
                      </button>
                    </>
                  ) : (
                    <>
                      <div
                        className="absolute inset-0"
                        style={
                          item.thumbnail || item.embedSrc?.match(/embed\/([a-zA-Z0-9_-]+)/)
                            ? {
                                backgroundImage: `url(${item.thumbnail || `https://img.youtube.com/vi/${item.embedSrc?.match(/embed\/([a-zA-Z0-9_-]+)/)?.[1]}/hqdefault.jpg`})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                filter: "brightness(0.75)",
                              }
                            : { background: gradients[i % gradients.length], opacity: 1, filter: "brightness(0.75)" }
                        }
                      >
                        {(item.thumbnail || item.embedSrc) && (
                          <div
                            className="absolute inset-0"
                            style={{ background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.15) 60%)" }}
                          />
                        )}
                      </div>
                      <button
                        type="button"
                        onClick={() => setPlayingId(item.id)}
                        className="absolute inset-0 flex items-center justify-center"
                        style={{ cursor: "pointer", background: "rgba(0,0,0,0.35)", border: "none" }}
                        aria-label={`Play ${item.title}`}
                      >
                        <div
                          className="flex items-center gap-3"
                          style={{
                            padding: "var(--space-3) var(--space-4)",
                            borderRadius: 12,
                            border: "1px solid rgba(212,175,55,0.35)",
                            background: "rgba(8,8,8,0.55)",
                            boxShadow: "0 0 0 1px rgba(212,175,55,0.15) inset",
                          }}
                        >
                          <div
                            style={{
                              width: 44,
                              height: 44,
                              borderRadius: 999,
                              background:
                                "radial-gradient(circle at 30% 30%, rgba(240,208,96,0.95) 0%, rgba(212,175,55,0.75) 50%, rgba(160,136,32,0.65) 100%)",
                              boxShadow: "0 0 0 1px rgba(212,175,55,0.35) inset, 0 0 25px rgba(212,175,55,0.15)",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <span
                              style={{
                                marginLeft: 3,
                                width: 0,
                                height: 0,
                                borderTop: "8px solid transparent",
                                borderBottom: "8px solid transparent",
                                borderLeft: "12px solid rgba(0,0,0,0.65)",
                                filter: "drop-shadow(0 0 10px rgba(212,175,55,0.25))",
                              }}
                            />
                          </div>
                        </div>
                      </button>
                      <div
                        className="portfolio-card-overlay"
                        style={{
                          opacity: 1,
                          position: "absolute",
                          left: 0,
                          right: 0,
                          bottom: 0,
                          pointerEvents: "none",
                        }}
                      >
                        <div style={{ width: "100%" }}>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                              gap: "var(--space-4)",
                            }}
                          >
                            <span
                              className="text-xs tracking-[0.3em] uppercase"
                              style={{ color: "rgba(245,240,232,0.75)" }}
                            >
                              {item.category}
                            </span>
                            <span className="text-xs" style={{ color: "rgba(212,175,55,0.9)" }}>
                              {item.year}
                            </span>
                          </div>
                          <div className="font-display" style={{ fontSize: "1.35rem", marginTop: "0.35rem" }}>
                            {item.title}
                          </div>
                          <div
                            style={{
                              marginTop: "0.65rem",
                              color: "var(--text-secondary)",
                              fontSize: "0.9rem",
                              display: "-webkit-box",
                              WebkitLineClamp: 2,
                              WebkitBoxOrient: "vertical",
                              overflow: "hidden",
                            }}
                          >
                            {item.description}
                          </div>
                          <div style={{ marginTop: "0.9rem", display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                            {item.tags.slice(0, 3).map((t) => (
                              <span key={t} className="skill-tag" style={{ cursor: "default" }}>
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

