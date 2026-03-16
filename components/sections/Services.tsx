"use client";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { GlassCard } from "@/components/ui/GlassCard";
import { services } from "@/lib/data";

export function Services() {
  return (
    <section id="services" style={{ paddingBlock: "var(--space-section)", background: "var(--bg-primary)" }}>
      <div className="container-xl">
        {/* Header */}
        <SectionReveal className="text-center" style={{ marginBottom: "var(--space-10)" }}>
          <div className="flex items-center justify-center" style={{ gap: "var(--space-2)", marginBottom: "var(--space-4)" }}>
            <div className="divider-gold" />
            <span className="text-xs tracking-[0.3em] uppercase" style={{ color: "var(--gold)" }}>
              What I Do
            </span>
            <div className="divider-gold" style={{ transform: "scaleX(-1)" }} />
          </div>
          <h2 className="font-display" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "var(--space-4)" }}>
            Services That <span className="text-gradient">Elevate</span>
          </h2>
          <p className="max-w-xl mx-auto" style={{ color: "var(--text-secondary)" }}>
            A comprehensive suite of post-production services, each delivered
            with relentless attention to detail and creative precision.
          </p>
        </SectionReveal>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style={{ gap: "var(--space-5)" }}>
          {services.map((service, i) => (
            <SectionReveal key={service.id} delay={i * 0.08}>
              <GlassCard className="h-full group" style={{ padding: "var(--space-6)" }}>
                <div className="text-3xl" style={{ marginBottom: "var(--space-4)" }}>{service.icon}</div>
                <h3
                  className="font-display text-xl transition-colors"
                  style={{ color: "var(--text-primary)", marginBottom: "var(--space-2)" }}
                >
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)", marginBottom: "var(--space-4)" }}>
                  {service.description}
                </p>
                <ul className="flex flex-col" style={{ gap: "var(--space-2)" }}>
                  {service.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center text-xs tracking-wide"
                      style={{ color: "var(--text-muted)", gap: "var(--space-2)" }}
                    >
                      <span
                        className="w-1 h-1 rounded-full flex-shrink-0"
                        style={{ background: "var(--gold)" }}
                      />
                      {f}
                    </li>
                  ))}
                </ul>
                {/* Bottom accent line on hover */}
                <div
                  className="h-[1px] w-0 group-hover:w-full transition-all duration-500"
                  style={{ background: "linear-gradient(90deg, var(--gold), transparent)", marginTop: "var(--space-4)" }}
                />
              </GlassCard>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
