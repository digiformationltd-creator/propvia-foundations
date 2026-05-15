import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";

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
          const dur = 1600;
          const start = performance.now();
          const tick = (t: number) => {
            const p = Math.min((t - start) / dur, 1);
            setVal(Math.round(target * (0.2 + 0.8 * (1 - Math.pow(1 - p, 3)))));
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
    <span
      ref={ref}
      style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 5vw, 3.25rem)", fontWeight: 600, color: "var(--gold)", lineHeight: 1 }}
    >
      {isStr ? to : `${val}${suffix}`}
    </span>
  );
}

const STATS = [
  { val: 5, suffix: "+", label: "Years · Property Expertise" },
  { val: 100, suffix: "+", label: "Projects Supported" },
  { val: 5, suffix: "", label: "Core Service Areas" },
  { val: "24/7", suffix: "", label: "Client Support Available" },
] as const;

export function IntroSection() {
  return (
    <section className="container-px mx-auto max-w-7xl py-20 sm:py-28 lg:py-32">
      <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
        <div className="reveal">
          <span className="eyebrow">Who We Are</span>
          <h2 className="mt-3 mb-6">A Trusted Partner for Property &amp; Business Success</h2>
          <p className="mb-4">
            PROPVIA SOLUTIONS LTD is a UK-registered professional services
            company based in Ipswich, England. We specialise in providing
            reliable property maintenance, management support, and business
            consultancy services to property owners, landlords, and businesses
            operating in the property sector.
          </p>
          <p className="mb-7">
            Our approach is built on trust, efficiency, and clear communication.
            Whether you need ongoing property support, project coordination, or
            strategic consultancy guidance, PROPVIA SOLUTIONS LTD delivers
            professional results you can count on.
          </p>
          <Link
            to="/about"
            className="group inline-flex items-center gap-2"
            style={{ color: "var(--green)", fontFamily: "var(--font-syne)", fontWeight: 600, letterSpacing: "0.04em" }}
          >
            About Our Company
            <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
            <span
              aria-hidden
              className="absolute"
              style={{ display: "none" }}
            />
          </Link>
        </div>

        <div className="reveal delay-2 grid grid-cols-2 gap-4 sm:gap-5">
          {STATS.map((s, i) => (
            <div
              key={i}
              className="glass-card p-6 sm:p-7"
              style={{ borderTop: "3px solid var(--green)" }}
            >
              <Counter to={s.val} suffix={s.suffix} />
              <p className="mt-2" style={{ fontSize: "13px", color: "var(--grey)", fontFamily: "var(--font-sans)" }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
