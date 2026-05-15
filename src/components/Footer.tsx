import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";

const QUICK = [
  { to: "/", label: "Home" },
  { to: "/property", label: "Property Services" },
  { to: "/consultancy", label: "Consultancy" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

const SERVICES = [
  "Property Maintenance",
  "Property Management",
  "Project Support",
  "Business Support",
  "Consultancy",
];

const SOCIAL = [
  { label: "Facebook", d: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" },
  { label: "Instagram", d: "M7 3h10a4 4 0 014 4v10a4 4 0 01-4 4H7a4 4 0 01-4-4V7a4 4 0 014-4zm5 5a4 4 0 100 8 4 4 0 000-8zm5-1.5a1 1 0 100 2 1 1 0 000-2z" },
  { label: "LinkedIn", d: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 10-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 110-4 2 2 0 010 4z" },
  { label: "Twitter", d: "M22 5.8a8.5 8.5 0 01-2.4.7 4.2 4.2 0 001.8-2.3 8.4 8.4 0 01-2.6 1A4.2 4.2 0 0011.5 9a12 12 0 01-8.7-4.4 4.2 4.2 0 001.3 5.6 4.1 4.1 0 01-1.9-.5v.1a4.2 4.2 0 003.4 4.1 4.2 4.2 0 01-1.9.1 4.2 4.2 0 003.9 2.9A8.5 8.5 0 012 18.6a12 12 0 006.5 1.9c7.8 0 12-6.5 12-12v-.6A8.5 8.5 0 0022 5.8z" },
];

export function Footer() {
  return (
    <footer style={{ background: "var(--green)", color: "var(--cream)" }}>
      <div className="container-px mx-auto max-w-7xl py-14 sm:py-20">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Col 1 */}
          <div>
            <img
              src={logo}
              alt="PROPVIA SOLUTIONS LTD"
              style={{ height: "48px", width: "auto", filter: "brightness(0) invert(1)", marginBottom: "1rem" }}
            />
            <p className="eyebrow mb-3" style={{ color: "var(--gold)" }}>
              Property & Consultancy
            </p>
            <p style={{ color: "var(--cream-mid)", fontSize: "0.9375rem", lineHeight: 1.65 }}>
              PROPVIA SOLUTIONS LTD provides professional property maintenance, management, and consultancy support services across the property sector.
            </p>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="mb-4" style={{ fontFamily: "var(--font-syne)", fontSize: "0.875rem", color: "var(--gold)", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 700 }}>
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm" style={{ color: "var(--cream-mid)" }}>
              {QUICK.map((q) => (
                <li key={q.to}>
                  <Link to={q.to} className="transition-colors hover:text-[var(--gold)]">{q.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="mb-4" style={{ fontFamily: "var(--font-syne)", fontSize: "0.875rem", color: "var(--gold)", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 700 }}>
              Services
            </h4>
            <ul className="space-y-2.5 text-sm" style={{ color: "var(--cream-mid)" }}>
              {SERVICES.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>

          {/* Col 4 */}
          <div>
            <h4 className="mb-4" style={{ fontFamily: "var(--font-syne)", fontSize: "0.875rem", color: "var(--gold)", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 700 }}>
              Contact Us
            </h4>
            <ul className="space-y-2.5 text-sm" style={{ color: "var(--cream-mid)" }}>
              <li>📍 50 Princes Street, Ipswich, IP1 1RJ</li>
              <li>
                <a href="mailto:Propviasolutions@gmail.com" className="break-all hover:text-[var(--gold)]">📧 Propviasolutions@gmail.com</a>
              </li>
              <li>
                <a href="tel:+447365338565" className="hover:text-[var(--gold)]">📱 +44 7365 338565</a>
              </li>
            </ul>
            <a
              href="https://wa.me/447365338565"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold mt-5"
            >
              WhatsApp Us
            </a>
          </div>
        </div>

        {/* Social */}
        <div className="mt-12 flex justify-center gap-3">
          {SOCIAL.map((s) => (
            <a
              key={s.label}
              href="#"
              aria-label={s.label}
              className="flex h-10 w-10 items-center justify-center rounded-full border transition-all hover:border-[var(--gold)] hover:text-[var(--gold)]"
              style={{ borderColor: "var(--cream-mid)", color: "var(--cream)" }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d={s.d} />
              </svg>
            </a>
          ))}
        </div>
      </div>

      <div style={{ background: "var(--green-mid)" }}>
        <div className="container-px mx-auto max-w-7xl py-4 text-center" style={{ fontFamily: "var(--font-sans)", fontSize: "13px", color: "var(--cream-mid)" }}>
          © 2025 PROPVIA SOLUTIONS LTD · Company No. 17044310 · Registered in England &amp; Wales · Privacy Policy · Terms
        </div>
      </div>
    </footer>
  );
}
