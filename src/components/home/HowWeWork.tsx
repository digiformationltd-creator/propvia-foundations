const STEPS = [
  { icon: "📞", title: "Initial Consultation", desc: "Contact us by phone, email, or WhatsApp. We discuss your requirements with no obligation." },
  { icon: "📋", title: "Assessment & Proposal", desc: "We assess your property or business needs and provide a clear, professional proposal." },
  { icon: "⚡", title: "Service Delivery", desc: "Our team gets to work — professionally, efficiently, and with full transparency throughout." },
  { icon: "✅", title: "Ongoing Support", desc: "We remain available for follow-up, ongoing management, and continued business support as needed." },
];

export function HowWeWork() {
  return (
    <section style={{ background: "var(--green)" }} className="py-20 sm:py-28 lg:py-32">
      <div className="container-px mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow reveal">Our Process</span>
          <h2 className="reveal delay-1 mt-3" style={{ color: "var(--cream)" }}>Our Simple Process</h2>
          <p className="reveal delay-2 mt-3" style={{ color: "var(--cream-mid)" }}>
            From first contact to delivered results
          </p>
        </div>

        <div className="relative mt-16">
          {/* Connecting dashed line — desktop horizontal */}
          <div
            aria-hidden
            className="absolute left-[10%] right-[10%] top-8 hidden lg:block"
            style={{
              height: "2px",
              backgroundImage: "linear-gradient(to right, var(--gold) 50%, transparent 50%)",
              backgroundSize: "12px 2px",
              opacity: 0.55,
            }}
          />

          <div className="relative grid gap-10 lg:grid-cols-4">
            {STEPS.map((s, i) => (
              <div
                key={s.title}
                className="reveal flex flex-col items-center text-center"
                style={{ transitionDelay: `${i * 0.15}s` }}
              >
                <div
                  className="mb-5 flex h-16 w-16 items-center justify-center rounded-full"
                  style={{
                    background: "var(--cream)",
                    border: "2px solid var(--gold)",
                    color: "var(--green)",
                    fontFamily: "var(--font-display)",
                    fontSize: "1.75rem",
                    fontWeight: 700,
                  }}
                >
                  {i + 1}
                </div>
                <div className="mb-3 text-2xl">{s.icon}</div>
                <h3 className="mb-2" style={{ color: "var(--cream)" }}>{s.title}</h3>
                <p style={{ color: "var(--cream-mid)", fontSize: "0.9375rem" }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
