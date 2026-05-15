import { Link } from "@tanstack/react-router";
import { Target, Cog, ListChecks, Building, Rocket, BarChart3 } from "lucide-react";

const PILLS = [
  { icon: Target, label: "Business Growth Support" },
  { icon: Cog, label: "Operational Consultancy" },
  { icon: ListChecks, label: "Process Improvement Guidance" },
  { icon: Building, label: "Property Sector Expertise" },
  { icon: Rocket, label: "Startup Guidance" },
  { icon: BarChart3, label: "Business Support Solutions" },
];

export function ConsultancyHighlight() {
  return (
    <section className="container-px mx-auto max-w-7xl py-20 sm:py-28 lg:py-32">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-stretch">
        {/* Feature card */}
        <div
          className="reveal relative overflow-hidden rounded-3xl p-8 sm:p-10"
          style={{
            background: "var(--green)",
            color: "var(--cream)",
            borderTop: "4px solid var(--gold)",
            boxShadow: "var(--shadow-card)",
          }}
        >
          <svg
            aria-hidden
            className="mb-6"
            width="120" height="80" viewBox="0 0 120 80" fill="none"
          >
            <rect x="6" y="40" width="18" height="34" fill="rgba(201,168,76,0.25)" />
            <rect x="30" y="28" width="18" height="46" fill="rgba(201,168,76,0.4)" />
            <rect x="54" y="14" width="18" height="60" fill="var(--gold)" />
            <path d="M6 36 L30 24 L54 12 L78 4 L114 4" stroke="var(--gold)" strokeWidth="2" fill="none" />
            <path d="M108 4 L114 4 L114 10" stroke="var(--gold)" strokeWidth="2" fill="none" />
            <rect x="82" y="34" width="14" height="40" fill="rgba(250,247,242,0.18)" />
            <rect x="100" y="24" width="14" height="50" fill="rgba(250,247,242,0.28)" />
          </svg>
          <h3 className="mb-4" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", color: "var(--cream)", fontWeight: 500 }}>
            Business Consultancy for the Property Sector
          </h3>
          <p style={{ color: "var(--cream-mid)" }}>
            PROPVIA SOLUTIONS LTD provides strategic business consultancy and
            operational guidance for companies and individuals working in the
            property sector. From startup support to process improvement — we
            help your business grow professionally.
          </p>
          <Link
            to="/consultancy"
            className="btn-primary mt-7"
            style={{ background: "var(--gold)", color: "var(--green)", borderColor: "var(--gold)" }}
          >
            Explore Consultancy →
          </Link>
        </div>

        {/* Pills */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {PILLS.map((p, i) => (
            <div
              key={p.label}
              className="reveal group flex items-center gap-3 rounded-2xl p-5 transition-all"
              style={{
                background: "rgba(250,247,242,0.7)",
                borderLeft: "3px solid var(--gold)",
                border: "1px solid var(--cream-dark)",
                borderLeftWidth: "3px",
                transitionDelay: `${i * 0.08}s`,
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--green)";
                e.currentTarget.style.color = "var(--cream)";
                e.currentTarget.style.borderColor = "var(--gold)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(250,247,242,0.7)";
                e.currentTarget.style.color = "";
                e.currentTarget.style.borderColor = "var(--cream-dark)";
                e.currentTarget.style.borderLeftColor = "var(--gold)";
              }}
            >
              <span
                className="flex h-10 w-10 items-center justify-center rounded-full"
                style={{ background: "rgba(201,168,76,0.18)", color: "var(--gold)" }}
              >
                <p.icon size={20} strokeWidth={1.8} />
              </span>
              <span style={{ fontFamily: "var(--font-syne)", fontWeight: 600, fontSize: "0.95rem" }}>
                {p.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
