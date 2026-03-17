"use client";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { stats } from "@/lib/data";

export function Stats() {
  return (
    <section
      id="stats"
      className="border-y border-[var(--border-subtle)] relative overflow-hidden"
      style={{ paddingBlock: "var(--space-section)", background: "var(--bg-primary)" }}
    >
      {/* Separator line */}
      <div
        className="absolute top-0 left-0 right-0 h-[1px]"
        style={{ background: "linear-gradient(90deg, transparent, var(--gold-dark), transparent)" }}
      />

      {/* Glow bg */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(212,175,55,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="container-xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 text-center justify-items-center" style={{ gap: "var(--space-6)" }}>
          {stats.map((stat, i) => (
            <SectionReveal key={stat.id} delay={i * 0.1} direction="up">
              <div className="group" style={{ padding: "var(--space-6)" }}>
                <div className="stat-number text-gradient">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} duration={2200} />
                </div>
                <p
                  className="text-sm font-semibold tracking-wide"
                  style={{ color: "var(--text-primary)", marginTop: "var(--space-2)" }}
                >
                  {stat.label}
                </p>
                <p className="text-xs" style={{ color: "var(--text-muted)", marginTop: "var(--space-1)" }}>
                  {stat.description}
                </p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-[1px]"
        style={{ background: "linear-gradient(90deg, transparent, var(--gold-dark), transparent)" }}
      />
    </section>
  );
}
