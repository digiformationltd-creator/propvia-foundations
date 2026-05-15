import { useEffect, useState, type ReactNode } from "react";

interface InquiryModalProps {
  open: boolean;
  onClose: () => void;
}

const SERVICES = [
  "Property Maintenance",
  "Property Management Support",
  "Property Project Support",
  "Business Support Services",
  "Business Consultancy",
  "General Enquiry",
];

export function InquiryModal({ open, onClose }: InquiryModalProps) {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setSubmitted(false);
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center px-4 animate-fade-in"
      style={{ background: "rgba(10,10,10,0.55)", backdropFilter: "blur(6px)" }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[580px] rounded-3xl p-6 sm:p-9 animate-card-entrance"
        style={{
          background: "var(--cream)",
          borderTop: "4px solid var(--green)",
          boxShadow: "var(--shadow-hover)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          aria-label="Close"
          onClick={onClose}
          className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full transition-colors hover:bg-[var(--cream-mid)]"
          style={{ color: "var(--green)" }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        {submitted ? (
          <div className="py-10 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full" style={{ background: "var(--green)", color: "var(--gold)" }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h3 className="mb-2" style={{ fontFamily: "var(--font-display)", fontSize: "1.75rem", color: "var(--green)" }}>
              Thank you!
            </h3>
            <p>We'll be in touch within 24 hours.</p>
          </div>
        ) : (
          <>
            <span className="eyebrow">Get In Touch</span>
            <h3 className="mt-2 mb-1" style={{ fontFamily: "var(--font-display)", fontSize: "1.875rem", fontWeight: 500, color: "var(--green)" }}>
              Request a Free Consultation
            </h3>
            <p className="mb-6 text-sm" style={{ color: "var(--grey)" }}>
              Tell us about your property or business requirements
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="space-y-3"
            >
              <Field label="Full Name" required>
                <input required type="text" className="form-input" />
              </Field>
              <div className="grid gap-3 sm:grid-cols-2">
                <Field label="Email Address" required>
                  <input required type="email" className="form-input" />
                </Field>
                <Field label="Phone Number">
                  <input type="tel" className="form-input" />
                </Field>
              </div>
              <Field label="Service Interested In">
                <select className="form-input">
                  {SERVICES.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </Field>
              <Field label="Message / Requirements">
                <textarea rows={4} className="form-input resize-none" />
              </Field>

              <button type="submit" className="btn-primary mt-2 w-full">
                Submit Inquiry →
              </button>
              <a
                href="https://wa.me/447365338565"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block text-center text-sm font-medium"
                style={{ color: "var(--green)" }}
              >
                Or WhatsApp Us Directly
              </a>
            </form>
          </>
        )}

        <style>{`
          .form-input {
            width: 100%;
            padding: 0.75rem 1rem;
            font-family: var(--font-sans);
            font-size: 16px;
            color: var(--ink);
            background: rgba(255,255,255,0.6);
            border: 1px solid var(--cream-dark);
            border-radius: 12px;
            transition: all 0.25s ease;
            outline: none;
          }
          .form-input:focus {
            border-color: var(--green);
            box-shadow: 0 0 0 3px rgba(26,60,46,0.12);
            background: #fff;
          }
        `}</style>
      </div>
    </div>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs font-semibold" style={{ fontFamily: "var(--font-syne)", letterSpacing: "0.06em", color: "var(--green)", textTransform: "uppercase" }}>
        {label}{required && <span style={{ color: "var(--gold)" }}> *</span>}
      </span>
      {children}
    </label>
  );
}
