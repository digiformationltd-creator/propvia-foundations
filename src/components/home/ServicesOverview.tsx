import { Link } from "@tanstack/react-router";
import { Wrench, KeyRound, ClipboardList, Settings2 } from "lucide-react";

const SERVICES = [
  {
    icon: Wrench,
    title: "Property Maintenance",
    desc: "Professional maintenance solutions for residential and commercial properties.",
    features: ["General Repairs & Upkeep", "Routine Inspection Support", "Maintenance Scheduling"],
  },
  {
    icon: KeyRound,
    title: "Property Management Support",
    desc: "Reliable property management assistance for property owners and businesses.",
    features: ["Tenant Coordination Support", "Property Oversight & Admin", "Operational Assistance"],
  },
  {
    icon: ClipboardList,
    title: "Property Project Support",
    desc: "Professional support for ongoing property projects and operational activities.",
    features: ["Project Coordination", "Vendor Communication", "Site Assistance"],
  },
  {
    icon: Settings2,
    title: "Business Support",
    desc: "Helping property-related businesses improve efficiency and operations.",
    features: ["Business Operations Support", "Administrative Assistance", "Workflow Coordination"],
  },
];

export function ServicesOverview() {
  return (
    <section style={{ background: "var(--green)" }} className="py-20 sm:py-28 lg:py-32">
      <div className="container-px mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow reveal">What We Offer</span>
          <h2 className="reveal delay-1 mt-3" style={{ color: "var(--cream)" }}>
            Our Property &amp; Business Services
          </h2>
          <p className="reveal delay-2 mt-4" style={{ color: "var(--cream-mid)" }}>
            Professional support solutions built for the property sector
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {SERVICES.map((s, i) => (
            <div
              key={s.title}
              className="reveal glass-card group flex flex-col p-7 sm:p-8"
              style={{ transitionDelay: `${0.15 * i}s` }}
            >
              <div
                className="mb-5 flex h-16 w-16 items-center justify-center rounded-full transition-transform group-hover:-translate-y-1"
                style={{ background: "rgba(201,168,76,0.18)" }}
              >
                <s.icon size={32} color="var(--green)" strokeWidth={1.5} />
              </div>
              <h3 className="mb-2" style={{ color: "var(--green)" }}>{s.title}</h3>
              <p style={{ color: "var(--grey)", fontSize: "0.9375rem" }}>{s.desc}</p>
              <ul className="mt-4 mb-5 space-y-2">
                {s.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm" style={{ color: "var(--ink-mid)" }}>
                    <span style={{ color: "var(--gold)", fontWeight: 700 }}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                to="/property"
                className="mt-auto inline-flex items-center gap-1 text-sm font-semibold"
                style={{ color: "var(--green)", fontFamily: "var(--font-syne)" }}
              >
                Learn More <span>→</span>
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/property"
            className="btn-ghost"
            style={{ color: "var(--gold)", borderColor: "var(--gold)" }}
          >
            View All Services →
          </Link>
        </div>
      </div>
    </section>
  );
}
