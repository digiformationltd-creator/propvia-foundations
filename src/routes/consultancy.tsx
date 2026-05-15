import { createFileRoute } from "@tanstack/react-router";
import { useInquiry } from "@/components/InquiryProvider";
import { MiniHero } from "@/components/MiniHero";
import { BottomCTA } from "@/components/BottomCTA";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/consultancy")({
  head: () => ({
    meta: [
      { title: "Business Consultancy — PROPVIA SOLUTIONS LTD" },
      { name: "description", content: "Strategic business consultancy and operational support for property sector companies and individuals across the UK." },
      { property: "og:title", content: "Business Consultancy — PROPVIA SOLUTIONS LTD" },
      { property: "og:description", content: "Operational consultancy and process improvement for the UK property sector." },
    ],
  }),
  component: ConsultancyPage,
});

/* Geometric SVG icons */

function IconGrowth() {
  return (
    <svg width="64" height="64" viewBox="0 0 80 80" fill="none" className="service-icon">
      <rect x="12" y="50" width="12" height="20" stroke="var(--green)" strokeWidth="2.5" />
      <rect x="28" y="40" width="12" height="30" stroke="var(--green)" strokeWidth="2.5" />
      <rect x="44" y="28" width="12" height="42" stroke="var(--green)" strokeWidth="2.5" />
      <path d="M14 38 L30 30 L46 22 L66 12" stroke="var(--gold)" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M58 12 L66 12 L66 20" stroke="var(--gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function IconGears() {
  return (
    <svg width="64" height="64" viewBox="0 0 80 80" fill="none" className="service-icon">
      <circle cx="28" cy="38" r="12" stroke="var(--green)" strokeWidth="2.5" />
      <circle cx="28" cy="38" r="4" stroke="var(--green)" strokeWidth="2" />
      <circle cx="54" cy="50" r="9" stroke="var(--gold)" strokeWidth="2.5" />
      <circle cx="54" cy="50" r="3" stroke="var(--gold)" strokeWidth="2" />
      {[0,72,144,216,288].map((a,i)=>{const r=(a*Math.PI)/180;return <line key={i} x1={28+Math.cos(r)*14} y1={38+Math.sin(r)*14} x2={28+Math.cos(r)*18} y2={38+Math.sin(r)*18} stroke="var(--green)" strokeWidth="2.5" strokeLinecap="round" />})}
    </svg>
  );
}
function IconFlow() {
  return (
    <svg width="64" height="64" viewBox="0 0 80 80" fill="none" className="service-icon">
      <circle cx="16" cy="24" r="8" stroke="var(--green)" strokeWidth="2.5" />
      <circle cx="40" cy="24" r="8" stroke="var(--green)" strokeWidth="2.5" />
      <circle cx="64" cy="24" r="8" stroke="var(--green)" strokeWidth="2.5" />
      <circle cx="40" cy="58" r="8" stroke="var(--gold)" strokeWidth="2.5" />
      <path d="M24 24 H32 M48 24 H56 M40 32 V50" stroke="var(--gold)" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M37 47 L40 50 L43 47" stroke="var(--gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function IconHouseSearch() {
  return (
    <svg width="64" height="64" viewBox="0 0 80 80" fill="none" className="service-icon">
      <path d="M10 36 L30 18 L50 36" stroke="var(--green)" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M14 34 V58 H46 V34" stroke="var(--green)" strokeWidth="2.5" strokeLinejoin="round" />
      <rect x="26" y="42" width="8" height="16" stroke="var(--green)" strokeWidth="2" />
      <circle cx="56" cy="48" r="10" stroke="var(--gold)" strokeWidth="2.5" />
      <line x1="64" y1="56" x2="72" y2="64" stroke="var(--gold)" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}
function IconRocket() {
  return (
    <svg width="64" height="64" viewBox="0 0 80 80" fill="none" className="service-icon">
      <path d="M40 8 C50 18 52 32 50 44 L30 44 C28 32 30 18 40 8 Z" stroke="var(--green)" strokeWidth="2.5" strokeLinejoin="round" />
      <circle cx="40" cy="26" r="4" stroke="var(--green)" strokeWidth="2" />
      <path d="M30 44 L24 56 L34 50 M50 44 L56 56 L46 50" stroke="var(--gold)" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M36 60 L36 70 M40 60 L40 72 M44 60 L44 70" stroke="var(--gold)" strokeWidth="2.5" strokeLinecap="round" />
      <rect x="8" y="56" width="14" height="14" stroke="var(--green)" strokeWidth="2" />
    </svg>
  );
}
function IconBriefcase() {
  return (
    <svg width="64" height="64" viewBox="0 0 80 80" fill="none" className="service-icon">
      <rect x="12" y="26" width="56" height="40" rx="3" stroke="var(--green)" strokeWidth="2.5" />
      <path d="M30 26 V20 a2 2 0 0 1 2 -2 h16 a2 2 0 0 1 2 2 V26" stroke="var(--green)" strokeWidth="2.5" />
      <path d="M12 42 H68" stroke="var(--green)" strokeWidth="2" />
      <path d="M34 50 L40 56 L52 42" stroke="var(--gold)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const CARDS = [
  { Icon: IconGrowth, title: "Business Growth Support", desc: "Strategic support to help your property business grow sustainably, professionally, and with clear operational direction.", cta: "Book Consultation →" },
  { Icon: IconGears, title: "Operational Consultancy", desc: "We review and improve your business operations, workflows, and day-to-day processes to enhance efficiency and performance.", cta: "Contact Advisor →" },
  { Icon: IconFlow, title: "Process Improvement Guidance", desc: "Identify inefficiencies and implement practical process improvements for smoother, more effective business operations.", cta: "Get Support →" },
  { Icon: IconHouseSearch, title: "Property Sector Consultancy", desc: "Specialist consultancy for businesses and individuals working within the property sector across the UK.", cta: "Book Consultation →" },
  { Icon: IconRocket, title: "Startup Guidance for Property Businesses", desc: "Practical guidance and support for individuals launching a new property-related business — from setup to early operations.", cta: "Get Support →" },
  { Icon: IconBriefcase, title: "Business Support Solutions", desc: "Ongoing business support services for established property companies seeking operational and administrative assistance.", cta: "Contact Advisor →" },
];

const WHY = [
  { icon: "📋", title: "Property-Focused Expertise", desc: "We understand the specific operational and business challenges faced by companies in the property sector." },
  { icon: "🤝", title: "Practical, Actionable Guidance", desc: "We don't deliver theory — we provide clear, practical, implementable support tailored to your business." },
  { icon: "✅", title: "Professional & Compliant", desc: "All consultancy services are professional, ethical, and fully compliant. No investment or financial services offered." },
];

function ConsultancyPage() {
  useReveal();
  const inquiry = useInquiry();

  return (
    <main id="consultancy" style={{ background: "var(--cream)" }}>
      <MiniHero
        variant="cream"
        breadcrumb="Business Consultancy"
        eyebrow="Consultancy"
        title="Business Consultancy & Growth Support"
        sub="Professional consultancy and support services for businesses and individuals operating in the property sector."
      />

      <div className="container-px mx-auto max-w-6xl pb-6">
        <div
          className="reveal flex items-start gap-3 rounded-xl p-4 text-sm sm:text-[15px]"
          style={{
            background: "var(--cream)",
            borderLeft: "4px solid var(--gold)",
            border: "1px solid var(--cream-dark)",
            color: "var(--ink-mid)",
          }}
        >
          <span style={{ fontSize: "1.25rem" }}>ℹ️</span>
          <p style={{ margin: 0, lineHeight: 1.6 }}>
            <strong style={{ color: "var(--green)" }}>PROPVIA SOLUTIONS LTD</strong> provides
            operational and business support consultancy only. We do not offer investment
            advice, financial lending, loans, or any interest-based financial services.
          </p>
        </div>
      </div>

      <section className="container-px mx-auto max-w-7xl py-14 sm:py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CARDS.map((c, i) => (
            <article
              key={c.title}
              className="reveal service-card glass-card flex flex-col p-7"
              style={{
                borderLeft: "3px solid var(--green)",
                transitionDelay: `${i * 0.1}s`,
              }}
            >
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl" style={{ background: "rgba(201,168,76,0.15)" }}>
                <c.Icon />
              </div>
              <h3 className="mb-3" style={{ color: "var(--green)" }}>{c.title}</h3>
              <p className="mb-5 flex-1" style={{ color: "var(--grey)", fontSize: "0.9375rem" }}>{c.desc}</p>
              <button
                onClick={inquiry.open}
                className="self-start text-sm font-semibold"
                style={{ color: "var(--green)", fontFamily: "var(--font-syne)" }}
              >
                {c.cta}
              </button>
            </article>
          ))}
        </div>
      </section>

      <section style={{ background: "var(--cream-mid)" }} className="py-20">
        <div className="container-px mx-auto max-w-6xl">
          <div className="text-center">
            <span className="eyebrow reveal">Why Us</span>
            <h2 className="reveal delay-1 mt-3">Why Choose Our Consultancy?</h2>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {WHY.map((w, i) => (
              <div key={w.title} className="reveal glass-card p-7 text-center" style={{ transitionDelay: `${i * 0.12}s` }}>
                <div className="mb-4 text-4xl">{w.icon}</div>
                <h3 className="mb-2">{w.title}</h3>
                <p style={{ color: "var(--grey)", fontSize: "0.9375rem" }}>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BottomCTA
        heading="Book Your Free Consultation Today"
        sub="Speak with our team about your business requirements."
        primaryLabel="Book Consultation →"
        secondaryLabel="WhatsApp Our Team"
      />

      <style>{`
        .service-card:hover .service-icon { animation: iconBounce 0.7s ease-in-out; }
      `}</style>
    </main>
  );
}
