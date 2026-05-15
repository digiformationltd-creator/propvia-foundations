import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MiniHero } from "@/components/MiniHero";
import { useReveal } from "@/hooks/use-reveal";
import logo from "@/assets/logo.png";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — PROPVIA SOLUTIONS LTD" },
      { name: "description", content: "Get in touch with PROPVIA SOLUTIONS LTD — Ipswich, England. WhatsApp, email or send us a message; we respond within 24 hours." },
      { property: "og:title", content: "Contact PROPVIA SOLUTIONS LTD" },
      { property: "og:description", content: "Speak with our team — WhatsApp, email or contact form. Response within 24 hours." },
    ],
  }),
  component: ContactPage,
});

const SERVICES = [
  "Property Maintenance",
  "Property Management Support",
  "Property Project Support",
  "Business Support Services",
  "Business Consultancy",
  "General Enquiry",
];

const SOCIAL = [
  { label: "Facebook", d: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" },
  { label: "Instagram", d: "M7 3h10a4 4 0 014 4v10a4 4 0 01-4 4H7a4 4 0 01-4-4V7a4 4 0 014-4zm5 5a4 4 0 100 8 4 4 0 000-8zm5-1.5a1 1 0 100 2 1 1 0 000-2z" },
  { label: "LinkedIn", d: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 10-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 110-4 2 2 0 010 4z" },
  { label: "Twitter / X", d: "M22 5.8a8.5 8.5 0 01-2.4.7 4.2 4.2 0 001.8-2.3 8.4 8.4 0 01-2.6 1A4.2 4.2 0 0011.5 9a12 12 0 01-8.7-4.4 4.2 4.2 0 001.3 5.6 4.1 4.1 0 01-1.9-.5v.1a4.2 4.2 0 003.4 4.1 4.2 4.2 0 01-1.9.1 4.2 4.2 0 003.9 2.9A8.5 8.5 0 012 18.6a12 12 0 006.5 1.9c7.8 0 12-6.5 12-12v-.6A8.5 8.5 0 0022 5.8z" },
];

function ContactPage() {
  useReveal();
  const [submitted, setSubmitted] = useState(false);

  return (
    <main id="contact" style={{ background: "var(--cream)" }}>
      <MiniHero
        variant="cream"
        breadcrumb="Contact Us"
        eyebrow="Get In Touch"
        title="Contact PROPVIA SOLUTIONS LTD"
        sub="We respond to all enquiries within 24 hours. WhatsApp preferred for fastest response."
      />

      <section className="container-px mx-auto max-w-7xl pb-24">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
          {/* LEFT — Info */}
          <div className="reveal glass-card p-7 sm:p-9" style={{ borderTop: "3px solid var(--green)" }}>
            <img id="contact-logo" src={logo} alt="PROPVIA SOLUTIONS LTD" style={{ height: "54px", width: "auto" }} />
            <h3 className="mt-5" style={{ color: "var(--green)" }}>PROPVIA SOLUTIONS LTD</h3>
            <p style={{ color: "var(--grey)", fontSize: "0.875rem", marginTop: "2px" }}>Company No. 17044310</p>

            <ul className="mt-5 space-y-3 text-[15px]" style={{ color: "var(--ink-mid)" }}>
              <li>📍 50 Princes Street, Ipswich, IP1 1RJ<br /><span style={{ color: "var(--grey)" }}>England, United Kingdom</span></li>
              <li>📧 <a href="mailto:Propviasolutions@gmail.com" className="break-all hover:underline" style={{ color: "var(--green)" }}>Propviasolutions@gmail.com</a></li>
              <li>📱 <a href="tel:+447365338565" className="hover:underline" style={{ color: "var(--green)" }}>+44 7365 338565</a></li>
            </ul>

            <a
              href="https://wa.me/447365338565"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 flex w-full items-center justify-center gap-2 rounded-full font-semibold"
              style={{
                background: "var(--gold)",
                color: "var(--green)",
                height: "56px",
                fontFamily: "var(--font-syne)",
                fontSize: "0.9375rem",
                letterSpacing: "0.04em",
                boxShadow: "var(--glow-gold)",
              }}
            >
              💬 WhatsApp Us Now
            </a>

            <div className="mt-7">
              <p className="eyebrow mb-3" style={{ fontSize: "0.7rem" }}>What Happens Next</p>
              <ol className="space-y-2 text-sm" style={{ color: "var(--ink-mid)" }}>
                <li><strong style={{ color: "var(--green)" }}>1.</strong> Submit your inquiry or WhatsApp us</li>
                <li><strong style={{ color: "var(--green)" }}>2.</strong> We review your requirements</li>
                <li><strong style={{ color: "var(--green)" }}>3.</strong> Free consultation arranged within 24hrs</li>
              </ol>
            </div>

            <div className="mt-8">
              <p className="eyebrow mb-3" style={{ fontSize: "0.7rem" }}>Follow Us</p>
              <div className="flex flex-wrap gap-4">
                {SOCIAL.map((s) => (
                  <a
                    key={s.label}
                    href="#"
                    aria-label={s.label}
                    className="group flex flex-col items-center gap-1.5"
                  >
                    <span
                      className="flex h-11 w-11 items-center justify-center rounded-full transition-all group-hover:scale-110"
                      style={{ background: "var(--green)", color: "var(--cream)" }}
                      onMouseEnter={(e) => { e.currentTarget.style.background = "var(--gold)"; e.currentTarget.style.color = "var(--green)"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.background = "var(--green)"; e.currentTarget.style.color = "var(--cream)"; }}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d={s.d} /></svg>
                    </span>
                    <span style={{ fontFamily: "var(--font-sans)", fontSize: "11px", color: "var(--grey)" }}>{s.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT — Form */}
          <div className="reveal delay-1 glass-card p-7 sm:p-9" style={{ borderTop: "4px solid var(--gold)" }}>
            <h3 style={{ color: "var(--green)" }}>Send Us a Message</h3>
            <p className="mb-5 text-sm" style={{ color: "var(--grey)" }}>
              Tell us how we can help — we'll be in touch within 24 hours.
            </p>

            {submitted ? (
              <div
                className="animate-fade-in rounded-2xl p-6 text-center"
                style={{ background: "var(--green)", color: "var(--cream)" }}
              >
                <p style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", margin: 0 }}>
                  ✅ Thank you!
                </p>
                <p className="mt-2" style={{ color: "var(--cream-mid)", fontSize: "0.9375rem" }}>
                  We'll be in touch within 24 hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                className="space-y-3"
              >
                <Field label="Full Name" required>
                  <input required type="text" className="form-input" autoComplete="name" />
                </Field>
                <div className="grid gap-3 sm:grid-cols-2">
                  <Field label="Email Address" required>
                    <input required type="email" className="form-input" autoComplete="email" />
                  </Field>
                  <Field label="Phone Number">
                    <input type="tel" className="form-input" autoComplete="tel" />
                  </Field>
                </div>
                <Field label="Service Interested In">
                  <select className="form-input" defaultValue="">
                    <option value="" disabled>Choose a service…</option>
                    {SERVICES.map((s) => <option key={s}>{s}</option>)}
                  </select>
                </Field>
                <Field label="Message / Tell us your requirements">
                  <textarea rows={5} className="form-input resize-none" />
                </Field>

                <button type="submit" className="btn-primary mt-2 w-full" style={{ minHeight: "52px" }}>
                  Submit Inquiry →
                </button>
                <p className="text-center text-sm" style={{ color: "var(--grey)" }}>
                  Prefer WhatsApp?{" "}
                  <a
                    href="https://wa.me/447365338565"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "var(--gold)", fontWeight: 600 }}
                  >
                    Message us directly →
                  </a>
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      <style>{`
        .form-input {
          width: 100%;
          padding: 0.875rem 1rem;
          font-family: var(--font-sans);
          font-size: 16px;
          color: var(--ink);
          background: rgba(255,255,255,0.65);
          border: 1px solid var(--cream-dark);
          border-radius: 12px;
          transition: all 0.3s ease;
          outline: none;
          min-height: 48px;
        }
        .form-input:focus {
          border-color: var(--green);
          box-shadow: 0 0 0 3px rgba(26,60,46,0.15);
          background: #fff;
        }
      `}</style>
    </main>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold" style={{ fontFamily: "var(--font-syne)", letterSpacing: "0.06em", color: "var(--green)", textTransform: "uppercase" }}>
        {label}{required && <span style={{ color: "var(--gold)" }}> *</span>}
      </span>
      {children}
    </label>
  );
}
