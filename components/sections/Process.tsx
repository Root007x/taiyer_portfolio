"use client";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { processSteps } from "@/lib/data";

export function Process() {
  return (
    <section id="process" style={{ paddingBlock: "var(--space-section)", background: "var(--bg-primary)" }}>
      <div className="container-xl">
        {/* Header */}
        <SectionReveal className="text-center" style={{ marginBottom: "var(--space-10)" }}>
          <div className="flex items-center justify-center" style={{ gap: "var(--space-2)", marginBottom: "var(--space-4)" }}>
            <div className="divider-gold" />
            <span className="text-xs tracking-[0.3em] uppercase" style={{ color: "var(--gold)" }}>
              My Process
            </span>
            <div className="divider-gold" style={{ transform: "scaleX(-1)" }} />
          </div>
          <h2 className="font-display" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "var(--space-4)" }}>
            How We <span className="text-gradient">Create Together</span>
          </h2>
        </SectionReveal>

        {/* Timeline */}
        <div className="process-scroll">
          <div className="flex items-start gap-0 min-w-max lg:min-w-full pb-4">
            {processSteps.map((step, i) => (
              <div key={step.id} className="flex items-start">
                {/* Step card */}
                <SectionReveal delay={i * 0.1} direction="up">
                  <div
                    className="relative glass group p-6 lg:p-8 w-64 hover:border-[var(--border-accent)] transition-all duration-300"
                    data-cursor-hover
                  >
                    {/* Step number */}
                    <p
                      className="font-display text-5xl font-bold leading-none"
                      style={{ color: "rgba(212,175,55,0.12)", marginBottom: "var(--space-4)" }}
                    >
                      {step.number}
                    </p>
                    <div className="text-3xl" style={{ marginBottom: "var(--space-4)" }}>{step.icon}</div>
                    <h3
                      className="font-display text-lg group-hover:text-gradient transition-all"
                      style={{ color: "var(--text-primary)", marginBottom: "var(--space-2)" }}
                    >
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                      {step.description}
                    </p>
                    {/* Bottom bar */}
                    <div
                      className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500"
                      style={{ background: "linear-gradient(90deg, var(--gold), transparent)" }}
                    />
                  </div>
                </SectionReveal>

                {/* Connector (not after last) */}
                {i < processSteps.length - 1 && (
                  <div className="flex items-center mt-16 mx-2">
                    <div className="process-line w-12" />
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" style={{ color: "var(--gold)" }}>
                      <path d="M0 4H6M6 4L3 1M6 4L3 7" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
