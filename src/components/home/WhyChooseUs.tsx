import { Shield, CheckCircle, Sliders, Headphones } from "lucide-react";

const ITEMS = [
  {
    icon: Shield, color: "var(--gold)",
    title: "UK Registered Company",
    desc: "Fully registered with Companies House — No. 17044310. A professional, accountable, and legally established business.",
  },
  {
    icon: CheckCircle, color: "var(--green)",
    title: "Professional & Reliable",
    desc: "We deliver professional services with consistent reliability, clear communication, and full accountability throughout.",
  },
  {
    icon: Sliders, color: "var(--gold)",
    title: "Tailored Solutions",
    desc: "Every client has unique needs. Our services are tailored to your specific property and business requirements — no one-size-fits-all.",
  },
  {
    icon: Headphones, color: "var(--green)",
    title: "Dedicated Support",
    desc: "We stay accessible throughout every project and engagement. WhatsApp, email, or phone — we're always available.",
  },
];

export function WhyChooseUs() {
  return (
    <section style={{ background: "var(--cream-mid)" }} className="py-20 sm:py-28 lg:py-32">
      <div className="container-px mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow reveal">Why PROPVIA</span>
          <h2 className="reveal delay-1 mt-3">Built on Trust, Delivered with Expertise</h2>
          <p className="reveal delay-2 mt-3" style={{ color: "var(--grey)" }}>
            What sets PROPVIA SOLUTIONS LTD apart
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((it, i) => (
            <div
              key={it.title}
              className="reveal glass-card group flex flex-col items-center p-7 text-center"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div
                className="mb-5 flex h-16 w-16 items-center justify-center rounded-full transition-transform group-hover:-translate-y-1"
                style={{ background: "rgba(201,168,76,0.15)" }}
              >
                <it.icon size={36} color={it.color} strokeWidth={1.6} />
              </div>
              <h3 className="mb-3">{it.title}</h3>
              <p style={{ fontSize: "0.9375rem", color: "var(--grey)" }}>{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
