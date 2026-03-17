"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7;
    }
  }, []);

  const titleWords = ["Cinematic", "Storytelling", "That", "Moves You"];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "var(--bg-primary)" }}
    >
      {/* Ambient gradient blobs */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 20% 50%, rgba(212,175,55,0.06) 0%, transparent 70%), radial-gradient(ellipse 40% 80% at 80% 30%, rgba(26,58,92,0.15) 0%, transparent 70%)",
        }}
      />

      {/* Horizontal scan lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.5) 2px, rgba(255,255,255,0.5) 3px)",
          backgroundSize: "100% 4px",
        }}
      />

      <div
        className="container-xl relative z-10"
        style={{ paddingTop: "var(--space-hero-bot)", paddingBottom: "var(--space-section)" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: "var(--space-12)", alignItems: "center" }}>
          
          {/* Left Column: Typography & CTAs */}
          <div>
            {/* Pre-title */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center"
              style={{ gap: "var(--space-3)", marginBottom: "var(--space-4)" }}
            >
              <div className="divider-gold" />
              <span
                className="text-xs tracking-[0.3em] uppercase"
                style={{ color: "var(--gold)" }}
              >
                Video Editor & Motion Designer
              </span>
            </motion.div>

            {/* Main Title */}
            <h1 
              className="font-display leading-tight" 
              style={{ fontSize: "clamp(3rem, 6vw, 5.5rem)", marginBottom: "var(--space-4)", lineHeight: 1.1 }}
            >
              {titleWords.map((word, i) => (
                <motion.span
                  key={i}
                  className="block"
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 + i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  {i === 0 ? (
                    <span className="text-gradient">{word}</span>
                  ) : (
                    <span style={{ color: i === 3 ? "var(--text-secondary)" : "var(--text-primary)" }}>
                      {word}
                    </span>
                  )}
                </motion.span>
              ))}
            </h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.9 }}
              className="text-base md:text-lg max-w-xl"
              style={{ color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "var(--space-8)" }}
            >
              Professional Video Editor and Motion Graphics Designer with over 3 years of experience creating engaging and high-quality content for digital platforms.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.1 }}
              className="flex flex-wrap items-center"
              style={{ gap: "var(--space-4)" }}
            >
              <a href="#portfolio" className="btn-gold relative z-10">
                <span className="relative z-10">View My Work</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="relative z-10">
                  <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center text-xs font-medium tracking-widest uppercase transition-all"
                style={{
                  color: "var(--text-primary)",
                  border: "1px solid var(--border-subtle)",
                  cursor: "none",
                  padding: "var(--space-2) var(--space-4)",
                  gap: "var(--space-1)"
                }}
                onMouseEnter={(e) => ((e.currentTarget.style.borderColor = "var(--border-accent)"))}
                onMouseLeave={(e) => ((e.currentTarget.style.borderColor = "var(--border-subtle)"))}
              >
                Let&apos;s Talk
              </a>
            </motion.div>
          </div>

          {/* Right Column: Hero Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative lg:ml-auto w-full max-w-lg aspect-[4/5] lg:aspect-square xl:aspect-[4/5]"
          >
            {/* Decorative backing glow */}
            <div 
              className="absolute inset-0 translate-x-4 translate-y-4 rounded-sm z-0"
              style={{ background: "var(--border-accent)", filter: "blur(20px)", opacity: 0.5 }}
            />
            {/* Outline Frame */}
            <div 
              className="absolute -inset-4 z-0 rounded-sm"
              style={{ border: "1px solid var(--border-accent)", opacity: 0.3 }}
            />

            {/* Image Container */}
            <div 
              className="relative z-10 w-full h-full rounded-sm overflow-hidden bg-noise"
              style={{ background: "var(--bg-card)" }}
            >
              <Image
                src="/images/hero-profile.jpg"
                alt="Taiyar Khan"
                fill
                priority
                className="object-cover object-center"
              />
              
              {/* Optional: subtle gradient overlay to ensure text/badges pop */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: "linear-gradient(to top, rgba(8,8,8,0.8) 0%, transparent 40%)",
                }}
              />
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
      >
        <span className="text-[10px] tracking-[0.3em] uppercase mb-4" style={{ color: "var(--text-muted)" }}>
          Scroll
        </span>
        <motion.div
          className="w-[1px] h-12"
          style={{ background: "linear-gradient(to bottom, var(--gold), transparent)" }}
          animate={{ scaleY: [1, 0.3, 1] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Corner decoration */}
      <div
        className="absolute bottom-0 right-0 w-[40vw] h-[40vw] pointer-events-none opacity-[0.03]"
        style={{
          background: "radial-gradient(ellipse at bottom right, var(--gold) 0%, transparent 70%)",
        }}
      />
    </section>
  );
}
