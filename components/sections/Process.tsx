"use client";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { processSteps } from "@/lib/data";

export function Process() {
  return (
    <section id="process" style={{ paddingBlock: "var(--space-section)", background: "var(--bg-primary)" }}>
      <div className="container-xl">
        {/* Header */}
        <SectionReveal className="text-center" style={{ marginBottom: "var(--space-12)" }}>
          <div className="flex items-center justify-center" style={{ gap: "var(--space-2)", marginBottom: "var(--space-4)" }}>
            <div className="divider-gold" />
            <span className="text-xs tracking-[0.3em] uppercase" style={{ color: "var(--gold)" }}>
              My Process
            </span>
            <div className="divider-gold" style={{ transform: "scaleX(-1)" }} />
          </div>
          <h2 className="font-display" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", marginBottom: "var(--space-4)" }}>
            How We <span className="text-gradient">Create Together</span>
          </h2>
        </SectionReveal>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style={{ gap: "var(--space-6)" }}>
          {processSteps.map((step, i) => (
            <SectionReveal key={step.id} delay={i * 0.1} direction="up" className="h-full">
              <div
                className="relative glass group transition-all duration-500 hover:bg-[rgba(212,175,55,0.03)] h-full"
                style={{ 
                  padding: "var(--space-10) var(--space-8)", 
                  border: "1px solid var(--border-subtle)",
                  display: "flex",
                  flexDirection: "column",
                  minHeight: "280px"
                }}
                data-cursor-hover
              >
                {/* Step number */}
                <p
                  className="font-display text-7xl font-black leading-none absolute -top-4 -right-2 opacity-5 select-none group-hover:opacity-10 transition-opacity"
                  style={{ color: "var(--gold)" }}
                >
                  {step.number}
                </p>
                
                <div className="flex items-center" style={{ gap: "var(--space-4)", marginBottom: "var(--space-6)" }}>
                  <div className="text-4xl">{step.icon}</div>
                  <div className="h-[1px] flex-grow bg-gradient-to-r from-[var(--border-subtle)] to-transparent" />
                </div>
                
                <h3
                  className="font-display text-2xl group-hover:text-gold transition-colors"
                  style={{ color: "var(--text-primary)", marginBottom: "var(--space-3)" }}
                >
                  {step.title}
                </h3>
                
                <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)", flexGrow: 1 }}>
                  {step.description}
                </p>

                {/* Bottom accent */}
                <div
                  className="absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full transition-all duration-500 ease-out"
                  style={{ background: "var(--gold)" }}
                />
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
