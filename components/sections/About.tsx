"use client";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { skills } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="section-pad bg-noise" style={{ background: "var(--bg-secondary)" }}>
      <div className="container-xl" style={{ paddingBlock: "var(--space-section)" }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center" style={{ gap: "var(--space-12)" }}>
          {/* Left — Visual */}
          <SectionReveal direction="left">
            <div className="relative">
              {/* Frame decoration */}
              <div
                className="absolute -inset-3 z-0"
                style={{ border: "1px solid var(--border-accent)", opacity: 0.3 }}
              />
              <div
                className="relative z-10 aspect-[4/5] overflow-hidden"
                style={{ background: "var(--bg-card)" }}
              >
                {/* Gradient portrait placeholder */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 40%, #0f3460 70%, #533483 100%)",
                  }}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="font-display text-8xl mb-4" style={{ color: "var(--gold)", opacity: 0.8 }}>
                    T
                  </span>
                  <p className="text-xs tracking-[0.4em] uppercase" style={{ color: "var(--text-secondary)" }}>
                    Taiyar Khan
                  </p>
                </div>
                {/* Film frame notches */}
                {Array.from({ length: 8 }).map((_, i) => (
                  <div
                    key={i}
                    className="absolute left-0 w-4 h-6"
                    style={{
                      top: `${10 + i * 11}%`,
                      background: "var(--bg-primary)",
                      border: "1px solid var(--border-subtle)",
                    }}
                  />
                ))}
                {Array.from({ length: 8 }).map((_, i) => (
                  <div
                    key={i}
                    className="absolute right-0 w-4 h-6"
                    style={{
                      top: `${10 + i * 11}%`,
                      background: "var(--bg-primary)",
                      border: "1px solid var(--border-subtle)",
                    }}
                  />
                ))}
              </div>
            </div>
          </SectionReveal>

          {/* Right — Content */}
          <SectionReveal direction="right" delay={0.15}>
            <div>
              <div className="flex items-center" style={{ gap: "var(--space-2)", marginBottom: "var(--space-4)" }}>
                <div className="divider-gold" />
                <span className="text-xs tracking-[0.3em] uppercase" style={{ color: "var(--gold)" }}>
                  About Me
                </span>
              </div>

              <h2 className="font-display" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "var(--text-primary)", marginBottom: "var(--space-4)" }}>
                Where Technical Mastery Meets{" "}
                <span className="text-gradient">Artistic Vision</span>
              </h2>

              <div className="text-sm md:text-base flex flex-col" style={{ color: "var(--text-secondary)", lineHeight: 1.7, gap: "var(--space-3)", marginBottom: "var(--space-6)" }}>
                <p>
                  I am Taiyar Khan, a professional Video Editor and Motion Graphics Designer with over 3 years of 
                  experience in creating engaging and high-quality content for digital platforms. I have worked with multiple 
                  clients and YouTube channels, helping them transform their ideas into visually compelling videos that capture 
                  audience attention and increase engagement.
                </p>
                <p>
                  My editing style focuses on modern, fast-paced storytelling, ensuring that every video keeps 
                  viewers hooked from start to finish. Whether it&apos;s short-form content for social media or longer 
                  storytelling formats, I combine creative editing, motion graphics, and precise timing to deliver professional results.
                </p>
                <p>
                  My goal is to create visually appealing, engaging, and algorithm-friendly videos that help 
                  creators, brands, and businesses grow their audience and strengthen their online presence.
                </p>
              </div>

              <div className="flex flex-wrap" style={{ gap: "var(--space-2)", marginBottom: "var(--space-8)" }}>
                {skills.map((skill) => (
                  <span key={skill.label} className="skill-tag">
                    {skill.label}
                  </span>
                ))}
              </div>

              <a href="#contact" className="btn-gold">
                Work With Me
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </a>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
