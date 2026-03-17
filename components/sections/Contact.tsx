"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { SectionReveal } from "@/components/ui/SectionReveal";

type Status = "idle" | "sending" | "success" | "error";

export function Contact() {
  const [form, setForm]     = useState({ name: "", email: "", project: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.target as HTMLFormElement);
    
    // Add access key (User should replace this or use env variable)
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "YOUR_ACCESS_KEY_HERE";
    formData.append("access_key", accessKey);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setForm({ name: "", email: "", project: "", message: "" });
      } else {
        console.error("Error", data);
        setStatus("error");
      }
    } catch (error) {
      console.error("Submit Error", error);
      setStatus("error");
    }
  };

  return (
    <section id="contact" style={{ paddingBlock: "var(--space-section)", background: "var(--bg-secondary)" }}>
      <div className="container-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: "var(--space-12)" }}>
          {/* Left — Info */}
          <SectionReveal direction="left">
            <div className="flex items-center" style={{ gap: "var(--space-3)", marginBottom: "var(--space-4)" }}>
              <div className="divider-gold" />
              <span className="text-xs tracking-[0.3em] uppercase" style={{ color: "var(--gold)" }}>
                Get In Touch
              </span>
            </div>
            <h2 className="font-display" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "var(--space-6)" }}>
              Let&apos;s Create Something <span className="text-gradient">Extraordinary</span>
            </h2>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "var(--space-10)" }}>
              Whether you have a full brief or just a spark of an idea — I&apos;d love to hear about your
              project. Every great film started with a conversation.
            </p>

            {/* Contact details */}
            <div className="flex flex-col" style={{ gap: "var(--space-5)" }}>
              {[
                { label: "Email", value: "taiyarkhan98@gmail.com", href: "mailto:taiyarkhan98@gmail.com" },
                { label: "Location", value: "Available Worldwide", href: null },
                { label: "Response", value: "Within 24 hours", href: null },
              ].map((item) => (
                <div key={item.label} className="flex items-start" style={{ gap: "var(--space-4)" }}>
                  <div
                    className="w-1 h-full flex-shrink-0"
                    style={{ background: "var(--gold)", opacity: 0.5, marginTop: "var(--space-1)" }}
                  />
                  <div>
                    <p className="text-xs tracking-widest uppercase" style={{ color: "var(--text-muted)", marginBottom: "var(--space-1)" }}>
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-sm transition-colors hover:text-[var(--gold)]"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm" style={{ color: "var(--text-primary)" }}>{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="flex" style={{ gap: "var(--space-4)", marginTop: "var(--space-10)" }}>
              {["Instagram", "LinkedIn", "Behance", "Vimeo"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="text-xs tracking-widest uppercase transition-colors"
                  style={{ color: "var(--text-muted)", cursor: "none" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
                >
                  {s}
                </a>
              ))}
            </div>
          </SectionReveal>

          {/* Right — Form */}
          <SectionReveal direction="right" delay={0.1}>
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass h-full flex flex-col items-center justify-center text-center"
                style={{ padding: "var(--space-12)", gap: "var(--space-6)" }}
              >
                <div className="text-5xl">✨</div>
                <h3 className="font-display text-2xl text-gradient">Message Sent!</h3>
                <p style={{ color: "var(--text-secondary)" }}>
                  Thank you for reaching out. I&apos;ll be in touch within 24 hours.
                </p>
                <button
                  onClick={() => { setStatus("idle"); setForm({ name: "", email: "", project: "", message: "" }); }}
                  className="btn-gold"
                >
                  Send Another
                </button>
              </motion.div>
            ) : status === "error" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass h-full flex flex-col items-center justify-center text-center"
                style={{ padding: "var(--space-12)", gap: "var(--space-6)" }}
              >
                <div className="text-5xl">❌</div>
                <h3 className="font-display text-2xl" style={{ color: "var(--accent-red)" }}>Something went wrong</h3>
                <p style={{ color: "var(--text-secondary)" }}>
                  There was an error sending your message. Please try again.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="btn-gold"
                >
                  Try Again
                </button>
              </motion.div>
            ) : (
              <form onSubmit={onSubmit} className="glass flex flex-col" style={{ padding: "var(--space-6) var(--space-8)", gap: "var(--space-4)" }}>
                {/* Web3Forms Hidden Fields */}
                <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />
                
                <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "var(--space-4)" }}>
                  <div>
                    <label className="block text-xs tracking-widest uppercase" style={{ color: "var(--text-muted)", marginBottom: "var(--space-2)" }}>
                      Name *
                    </label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={onChange}
                      required
                      placeholder="Your name"
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label className="block text-xs tracking-widest uppercase" style={{ color: "var(--text-muted)", marginBottom: "var(--space-2)" }}>
                      Email *
                    </label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={onChange}
                      required
                      placeholder="your@email.com"
                      className="form-input"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs tracking-widest uppercase" style={{ color: "var(--text-muted)", marginBottom: "var(--space-2)" }}>
                    Project Type
                  </label>
                  <select
                    name="project"
                    value={form.project}
                    onChange={onChange}
                    className="form-input"
                    style={{ cursor: "none" }}
                  >
                    <option value="">Select a service…</option>
                    <option>Cinematic Editing</option>
                    <option>Motion Graphics</option>
                    <option>Color Grading</option>
                    <option>Social Media Content</option>
                    <option>Corporate Video</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs tracking-widest uppercase" style={{ color: "var(--text-muted)", marginBottom: "var(--space-2)" }}>
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={onChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project…"
                    className="form-input resize-none"
                  />
                </div>

                <div style={{ paddingTop: "var(--space-2)" }}>
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="btn-gold w-full justify-center"
                  >
                  {status === "sending" ? (
                    <>
                      <span className="inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    </>
                  )}
                </button>
                </div>
              </form>
            )}
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
