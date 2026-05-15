import { createFileRoute } from "@tanstack/react-router";
import { useInquiry } from "@/components/InquiryProvider";
import { MiniHero } from "@/components/MiniHero";
import { BottomCTA } from "@/components/BottomCTA";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/property")({
  head: () => ({
    meta: [
      { title: "Property Services — PROPVIA SOLUTIONS LTD" },
      { name: "description", content: "Property maintenance, management support, project support and business support across the UK property sector." },
      { property: "og:title", content: "Property Services — PROPVIA SOLUTIONS LTD" },
      { property: "og:description", content: "Professional property maintenance, management, and project support across the UK." },
    ],
  }),
  component: PropertyPage,
});

/* ---------- Geometric SVG icons ---------- */

function IconHouseWrench() {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" className="service-icon">
      <path d="M14 36 L40 14 L66 36" stroke="var(--green)" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M20 34 V62 H60 V34" stroke="var(--green)" strokeWidth="2.5" strokeLinejoin="round" />
      <rect x="34" y="44" width="12" height="18" stroke="var(--green)" strokeWidth="2" />
      <path d="M48 22 L62 8" stroke="var(--gold)" strokeWidth="3" strokeLinecap="round" />
      <circle cx="64" cy="6" r="4" stroke="var(--gold)" strokeWidth="2.5" fill="none" />
    </svg>
  );
}

function IconBuildingKey() {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" className="service-icon">
      <rect x="14" y="18" width="40" height="50" stroke="var(--green)" strokeWidth="2.5" />
      {[0, 1, 2].map((r) =>
        [0, 1, 2].map((c) => (
          <rect key={`${r}-${c}`} x={20 + c * 10} y={24 + r * 12} width="6" height="8" stroke="var(--green)" strokeWidth="1.5" />
        )),
      )}
      <circle cx="62" cy="20" r="6" stroke="var(--gold)" strokeWidth="2.5" fill="none" />
      <path d="M60 24 L52 32 M55 28 L58 31" stroke="var(--gold)" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

function IconClipboardArrows() {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" className="service-icon">
      <rect x="18" y="14" width="32" height="46" rx="3" stroke="var(--green)" strokeWidth="2.5" />
      <rect x="26" y="10" width="16" height="8" rx="1.5" stroke="var(--green)" strokeWidth="2" />
      <path d="M24 30 H44 M24 38 H40 M24 46 H44" stroke="var(--green)" strokeWidth="2" strokeLinecap="round" />
      <path d="M54 36 L62 36 M58 32 L62 36 L58 40" stroke="var(--gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M54 50 L72 50 M68 46 L72 50 L68 54" stroke="var(--gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M54 22 L68 22 M64 18 L68 22 L64 26" stroke="var(--gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconGearDocs() {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" className="service-icon">
      <circle cx="26" cy="40" r="12" stroke="var(--green)" strokeWidth="2.5" />
      <circle cx="26" cy="40" r="4" stroke="var(--green)" strokeWidth="2" />
      {[0, 60, 120, 180, 240, 300].map((a, i) => {
        const rad = (a * Math.PI) / 180;
        const x1 = 26 + Math.cos(rad) * 14;
        const y1 = 40 + Math.sin(rad) * 14;
        const x2 = 26 + Math.cos(rad) * 18;
        const y2 = 40 + Math.sin(rad) * 18;
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="var(--green)" strokeWidth="2.5" strokeLinecap="round" />;
      })}
      <rect x="46" y="20" width="22" height="28" stroke="var(--gold)" strokeWidth="2.5" />
      <rect x="50" y="24" width="22" height="28" stroke="var(--gold)" strokeWidth="2.5" fill="rgba(250,247,242,0.5)" />
      <path d="M54 32 H68 M54 38 H66 M54 44 H68" stroke="var(--gold)" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

const SERVICES = [
  {
    cta: "Request Service →",
    Icon: IconHouseWrench,
    title: "Property Maintenance",
    desc: "Professional property maintenance solutions for residential and commercial properties. We coordinate repairs, upkeep, and routine maintenance to keep your property in excellent condition.",
    features: [
      "General Property Maintenance & Repairs",
      "Repair Coordination & Scheduling",
      "Routine Property Inspection Support",
      "Ongoing Property Upkeep Management",
      "Maintenance Planning & Scheduling",
    ],
  },
  {
    cta: "Get Support →",
    Icon: IconBuildingKey,
    title: "Property Management Support",
    desc: "Reliable property management assistance for property owners and landlords. We provide operational and administrative support to help manage your properties professionally and efficiently.",
    features: [
      "Tenant Coordination Assistance",
      "Property Oversight & Monitoring",
      "Operational Management Assistance",
      "Maintenance Follow-Up Support",
      "Property Administration Support",
    ],
  },
  {
    cta: "Book Consultation →",
    Icon: IconClipboardArrows,
    title: "Property Project Support",
    desc: "Professional support solutions for ongoing property projects and operational activities. We help coordinate, communicate, and manage every aspect of your property projects.",
    features: [
      "Project Coordination & Planning",
      "Vendor & Contractor Communication",
      "Operational Project Support",
      "On-Site Assistance Coordination",
      "Project Management Support",
    ],
  },
  {
    cta: "Get Quote →",
    Icon: IconGearDocs,
    title: "Business Support Services",
    desc: "Helping property-related businesses improve efficiency, administration, and operations. We provide practical business support to keep your operations running smoothly.",
    features: [
      "Business Operations Support",
      "Administrative Assistance & Coordination",
      "Documentation & Records Coordination",
      "Workflow Organisation & Assistance",
      "Client Communication Support",
    ],
  },
];

function PropertyPage() {
  useReveal();
  const inquiry = useInquiry();

  return (
    <main id="property" style={{ background: "var(--cream)" }}>
      <MiniHero
        variant="green"
        breadcrumb="Property Services"
        eyebrow="Our Services"
        title="Property Services"
        sub="Professional property maintenance, management, and project support solutions for residential and commercial property owners across the UK."
      />

      <section className="container-px mx-auto max-w-7xl py-20 sm:py-28">
        <div className="grid gap-7 lg:grid-cols-2">
          {SERVICES.map((s, i) => (
            <article
              key={s.title}
              className="reveal service-card group rounded-3xl p-8 sm:p-10"
              style={{
                background: "var(--cream)",
                borderTop: "4px solid var(--green)",
                boxShadow: "var(--shadow-card)",
                transitionDelay: `${i * 0.15}s`,
                transition: "all 0.4s ease, transform 0.4s ease, box-shadow 0.4s ease",
              }}
            >
              <div className="mb-5 flex items-start justify-between gap-3">
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl" style={{ background: "rgba(201,168,76,0.12)" }}>
                  <s.Icon />
                </div>
                <button
                  onClick={inquiry.open}
                  className="btn-gold"
                  style={{ fontSize: "0.75rem", padding: "0.5rem 1rem" }}
                >
                  {s.cta}
                </button>
              </div>
              <h3 style={{ fontSize: "1.375rem", color: "var(--green)" }}>{s.title}</h3>
              <p className="mt-3" style={{ color: "var(--ink-mid)" }}>{s.desc}</p>
              <ul className="mt-5 space-y-2.5">
                {s.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-[15px]" style={{ color: "var(--ink-mid)" }}>
                    <span style={{ color: "var(--gold)", fontWeight: 700 }}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <BottomCTA
        heading="Need a Specific Property Service?"
        sub="Contact us to discuss your requirements — free initial consultation."
      />

      <style>{`
        .service-card:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-hover), 0 0 0 1px var(--gold);
        }
        .service-card:hover .service-icon {
          animation: iconBounce 0.7s ease-in-out;
        }
      `}</style>
    </main>
  );
}
