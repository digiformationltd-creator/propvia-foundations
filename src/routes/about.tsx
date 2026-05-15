import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { MiniHero } from "@/components/MiniHero";
import { useReveal } from "@/hooks/use-reveal";
import logo from "@/assets/logo.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — PROPVIA SOLUTIONS LTD" },
      { name: "description", content: "PROPVIA SOLUTIONS LTD — UK-registered property maintenance, management, and consultancy company based in Ipswich, England." },
      { property: "og:title", content: "About PROPVIA SOLUTIONS LTD" },
      { property: "og:description", content: "Professional UK-registered property and business support company based in Ipswich." },
    ],
  }),
  component: AboutPage,
});

function Counter({ to, suffix = "" }: { to: number | string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [val, setVal] = useState(0);
  const isStr = typeof to === "string";
  useEffect(() => {
    if (isStr) return;
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          const target = to as number;
          const start = performance.now();
          const tick = (t: number) => {
            const p = Math.min((t - start) / 1500, 1);
            setVal(Math.round(target * (1 - Math.pow(1 - p, 3))));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          io.disconnect();
        }
      });
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [to, isStr]);
  return (
    <span ref={ref} style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 5vw, 3.25rem)", fontWeight: 600, color: "var(--gold)", lineHeight: 1 }}>
      {isStr ? to : `${val}${suffix}`}
    </span>
  );
}

const STATS = [
  { val: 5, suffix: "+", label: "Years of Expertise" },
  { val: 100, suffix: "+", label: "Projects Supported" },
  { val: 5, suffix: "", label: "Core Service Areas" },
  { val: "100%", suffix: "", label: "Client-Focused Approach" },
] as const;

const PILLARS = [
  { icon: "🏠", title: "Property Services", desc: "Maintenance, management, and project support for residential and commercial properties across the UK." },
  { icon: "💼", title: "Business Consultancy", desc: "Growth support, operational consultancy, and process improvement for property sector businesses." },
  { icon: "🤝", title: "Ongoing Support", desc: "Continued operational and administrative support for clients requiring long-term business assistance." },
];

const VALUES = [
  { icon: "🛡️", title: "Trustworthy", desc: "We operate with full professionalism and accountability." },
  { icon: "⚡", title: "Efficient", desc: "We deliver results without unnecessary delays." },
  { icon: "📋", title: "Transparent", desc: "Clear communication throughout every engagement." },
  { icon: "🤝", title: "Client-First", desc: "Your requirements drive every decision we make." },
];

function AboutPage() {
  useReveal();
  return (
    <main id="about" style={{ background: "var(--cream)" }}>
      <MiniHero
        variant="green"
        breadcrumb="About Us"
        eyebrow="About Us"
        title="About PROPVIA SOLUTIONS LTD"
        sub="A professional UK-registered property and business support company based in Ipswich, England."
      />

      {/* Mission */}
      <section className="container-px mx-auto max-w-7xl py-20 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="reveal">
            <span className="eyebrow">Our Mission</span>
            <h2 className="mt-3 mb-6">Our Mission</h2>
            <p className="mb-4">
              At PROPVIA SOLUTIONS LTD, our mission is to provide professional,
              reliable, and effective property and business support services to
              our clients across the UK. We are committed to operational
              excellence, clear communication, and delivering results that
              make a genuine difference.
            </p>
            <p className="mb-4">
              We work with property owners, landlords, businesses, and individuals
              who need dependable support — whether for maintaining properties,
              managing operations, or growing their business in the property sector.
            </p>
            <p>
              Founded on principles of professionalism and trust, PROPVIA
              SOLUTIONS LTD is a fully registered UK company dedicated to
              supporting your success.
            </p>
          </div>
          <div className="reveal delay-2 grid grid-cols-2 gap-4 sm:gap-5">
            {STATS.map((s, i) => (
              <div key={i} className="glass-card p-6 sm:p-7" style={{ borderTop: "3px solid var(--green)" }}>
                <Counter to={s.val} suffix={s.suffix} />
                <p className="mt-2" style={{ fontSize: "13px", color: "var(--grey)" }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section style={{ background: "var(--green)" }} className="py-20 sm:py-28">
        <div className="container-px mx-auto max-w-7xl">
          <div className="text-center">
            <span className="eyebrow reveal">What We Do</span>
            <h2 className="reveal delay-1 mt-3" style={{ color: "var(--cream)" }}>Our Three Core Areas</h2>
          </div>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {PILLARS.map((p, i) => (
              <div
                key={p.title}
                className="reveal glass-card p-8 text-center"
                style={{ transitionDelay: `${i * 0.12}s` }}
              >
                <div className="mb-4 text-5xl">{p.icon}</div>
                <h3 className="mb-3">{p.title}</h3>
                <p style={{ color: "var(--grey)", fontSize: "0.9375rem" }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Details */}
      <section className="container-px mx-auto max-w-4xl py-20">
        <div
          className="reveal glass-card overflow-hidden p-8 sm:p-10"
          style={{ borderTop: "3px solid var(--gold)" }}
        >
          <div className="mb-6 flex items-center gap-4">
            <img id="about-logo" src={logo} alt="PROPVIA SOLUTIONS LTD" style={{ height: "60px", width: "auto" }} />
            <div>
              <span className="eyebrow">Company Details</span>
              <h3 className="mt-1" style={{ color: "var(--green)" }}>PROPVIA SOLUTIONS LTD</h3>
            </div>
          </div>
          <dl className="grid gap-4 text-[15px] sm:grid-cols-2">
            <Row label="Company Number" value="17044310" />
            <Row label="Registered in" value="England & Wales" />
            <Row label="Registered Address" value="50 Princes Street, Ipswich, IP1 1RJ, England" />
            <Row label="Email" value="Propviasolutions@gmail.com" href="mailto:Propviasolutions@gmail.com" />
            <Row label="Phone" value="+44 7365 338565" href="tel:+447365338565" />
          </dl>
        </div>
      </section>

      {/* Values */}
      <section style={{ background: "var(--cream-mid)" }} className="py-20 sm:py-28">
        <div className="container-px mx-auto max-w-7xl">
          <div className="text-center">
            <span className="eyebrow reveal">Our Values</span>
            <h2 className="reveal delay-1 mt-3">What We Stand For</h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {VALUES.map((v, i) => (
              <div key={v.title} className="reveal glass-card flex items-start gap-4 p-7" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="text-4xl">{v.icon}</div>
                <div>
                  <h3 className="mb-2">{v.title}</h3>
                  <p style={{ color: "var(--grey)", fontSize: "0.9375rem", margin: 0 }}>{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function Row({ label, value, href }: { label: string; value: string; href?: string }) {
  return (
    <div>
      <dt className="eyebrow" style={{ fontSize: "0.7rem", color: "var(--green)" }}>{label}</dt>
      <dd className="mt-1" style={{ color: "var(--ink-mid)" }}>
        {href ? <a href={href} className="hover:underline" style={{ color: "var(--green)" }}>{value}</a> : value}
      </dd>
    </div>
  );
}
