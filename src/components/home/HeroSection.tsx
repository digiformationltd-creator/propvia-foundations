import { useEffect, useRef } from "react";
import { Home as HomeIcon, Building2, Briefcase } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useInquiry } from "../InquiryProvider";

export function HeroSection() {
  const inquiry = useInquiry();
  const stackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = stackRef.current;
    if (!el || window.matchMedia("(max-width: 1023px)").matches) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width / 2) / r.width;
      const y = (e.clientY - r.top - r.height / 2) / r.height;
      el.style.transform = `perspective(1000px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg)`;
    };
    const onLeave = () => { el.style.transform = ""; };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => { el.removeEventListener("mousemove", onMove); el.removeEventListener("mouseleave", onLeave); };
  }, []);

  const headline = ["Professional Property", "Management &", "Business Support", "Solutions"];

  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: "var(--green)",
        minHeight: "100vh",
        backgroundImage: "radial-gradient(rgba(250,247,242,0.06) 1px, transparent 1px)",
        backgroundSize: "24px 24px",
      }}
    >
      {/* Animated geometry — desktop */}
      <div aria-hidden className="pointer-events-none absolute inset-0 hidden lg:block">
        <svg className="absolute -left-20 top-10 animate-rotate-slow" width="500" height="500" viewBox="0 0 200 200" style={{ animationDuration: "40s" }}>
          <circle cx="100" cy="100" r="90" fill="none" stroke="rgba(201,168,76,0.06)" strokeWidth="1" />
          <circle cx="100" cy="100" r="70" fill="none" stroke="rgba(201,168,76,0.06)" strokeWidth="1" />
        </svg>
        <svg className="absolute right-10 -bottom-32 animate-rotate-slow" width="600" height="600" viewBox="0 0 200 200" style={{ animationDuration: "60s", animationDirection: "reverse" }}>
          <path d="M100 10 A90 90 0 0 1 190 100" fill="none" stroke="rgba(201,168,76,0.06)" strokeWidth="1" />
          <circle cx="100" cy="100" r="60" fill="none" stroke="rgba(201,168,76,0.06)" strokeWidth="1" />
        </svg>
        <svg className="absolute left-1/2 top-1/3 animate-rotate-slow" width="380" height="380" viewBox="0 0 200 200" style={{ animationDuration: "30s" }}>
          <circle cx="100" cy="100" r="80" fill="none" stroke="rgba(201,168,76,0.06)" strokeWidth="1" strokeDasharray="4 6" />
        </svg>
      </div>

      <div className="container-px relative z-10 mx-auto grid max-w-7xl gap-12 py-24 lg:grid-cols-12 lg:items-center lg:py-32">
        {/* LEFT */}
        <div className="lg:col-span-7">
          <span
            className="eyebrow inline-block"
            style={{ animation: "fadeSlideUp 0.6s 0.1s ease-out both" }}
          >
            Property · Management · Consultancy
          </span>

          <h1
            className="mt-5"
            style={{ color: "var(--cream)", fontWeight: 500, lineHeight: 1.05 }}
          >
            {headline.map((line, i) => (
              <span
                key={i}
                style={{
                  display: "block",
                  opacity: 0,
                  transform: "translateY(20px)",
                  animation: `fadeSlideUp 0.7s ${0.25 + i * 0.12}s ease-out forwards`,
                }}
              >
                {line}
              </span>
            ))}
          </h1>

          <div
            className="my-7 h-[3px] origin-left"
            style={{
              width: "60px",
              background: "var(--gold)",
              transform: "scaleX(0)",
              animation: "lineGrow 0.8s 0.85s ease-out forwards",
            }}
          />

          <p
            className="max-w-xl text-lg"
            style={{
              color: "var(--cream-mid)",
              opacity: 0,
              animation: "fadeSlideUp 0.8s 0.95s ease-out forwards",
            }}
          >
            PROPVIA SOLUTIONS LTD provides professional property maintenance,
            property management, consultancy, and operational support services
            for businesses and individuals in the property sector across the UK.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              onClick={inquiry.open}
              className="btn-primary"
              style={{
                background: "var(--gold)",
                color: "var(--green)",
                borderColor: "var(--gold)",
                opacity: 0,
                animation: "fadeSlideUp 0.6s 1.15s ease-out forwards",
              }}
            >
              Request Consultation →
            </button>
            <Link
              to="/property"
              className="btn-ghost"
              style={{
                color: "var(--cream)",
                borderColor: "var(--cream)",
                opacity: 0,
                animation: "fadeSlideUp 0.6s 1.4s ease-out forwards",
              }}
            >
              View Our Services
            </Link>
            <a
              href="https://wa.me/447365338565"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
              style={{
                color: "var(--cream)",
                borderColor: "var(--gold)",
                background: "transparent",
                opacity: 0,
                animation: "fadeSlideUp 0.6s 1.65s ease-out forwards",
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.5 3.5A11.8 11.8 0 0012.05 0C5.5 0 .2 5.3.2 11.85c0 2.08.55 4.1 1.6 5.9L0 24l6.45-1.7a11.86 11.86 0 005.6 1.43h.01c6.55 0 11.85-5.3 11.85-11.85 0-3.17-1.23-6.15-3.41-8.38zM12.05 21.7a9.85 9.85 0 01-5.02-1.37l-.36-.21-3.83 1 1.02-3.73-.23-.38a9.85 9.85 0 01-1.51-5.16c0-5.44 4.43-9.86 9.87-9.86 2.64 0 5.12 1.03 6.98 2.9a9.8 9.8 0 012.89 6.98c0 5.44-4.42 9.83-9.81 9.83zm5.4-7.37c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15s-.77.96-.94 1.16c-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.21 5.09 4.5.71.3 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.75-.71 2-1.4.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35z" />
              </svg>
              WhatsApp Us
            </a>
          </div>

          {/* Trust strip */}
          <div
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm"
            style={{ color: "var(--cream-mid)", opacity: 0, animation: "fadeSlideUp 0.8s 1.9s ease-out forwards" }}
          >
            <span className="flex items-center gap-2">
              <span style={{ color: "var(--gold)" }}>🏛️</span> Company No. 17044310
            </span>
            <span className="flex items-center gap-2">
              <span style={{ color: "var(--gold)" }}>📍</span> Ipswich, England
            </span>
            <span className="flex items-center gap-2">
              <span style={{ color: "var(--gold)" }}>✅</span> Fully Professional Service
            </span>
          </div>
        </div>

        {/* RIGHT — card stack */}
        <div className="hidden lg:col-span-5 lg:block">
          <div ref={stackRef} className="relative h-[460px] transition-transform duration-300 ease-out">
            <FloatCard
              top="0px" left="40px" delay="0s"
              bg="rgba(250,247,242,0.95)" border="var(--green)"
              icon={<HomeIcon size={32} color="var(--green)" strokeWidth={1.5} />}
              title="Property Maintenance" subtitle="Residential & Commercial"
              titleColor="var(--green)" subColor="var(--ink-mid)" goldLine
              z={3}
            />
            <FloatCard
              top="160px" left="20px" delay="0.5s"
              bg="rgba(26,60,46,0.92)" border="var(--gold)"
              icon={<Building2 size={32} color="var(--gold)" strokeWidth={1.5} />}
              title="Property Management" subtitle="Professional Oversight"
              titleColor="var(--cream)" subColor="var(--cream-mid)"
              z={2}
            />
            <FloatCard
              top="320px" left="0px" delay="1s"
              bg="var(--green)" border="var(--green-mid)"
              icon={<Briefcase size={32} color="var(--cream)" strokeWidth={1.5} />}
              title="Business Consultancy" subtitle="Growth & Operations"
              titleColor="var(--cream)" subColor="var(--cream-mid)"
              z={1}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function FloatCard({
  top, left, delay, bg, border, icon, title, subtitle, titleColor, subColor, goldLine, z,
}: {
  top: string; left: string; delay: string; bg: string; border: string;
  icon: React.ReactNode; title: string; subtitle: string;
  titleColor: string; subColor: string; goldLine?: boolean; z: number;
}) {
  return (
    <div
      className="absolute w-[300px] rounded-2xl p-6 backdrop-blur-md"
      style={{
        top, left, zIndex: z, background: bg,
        border: `1px solid ${border}`,
        boxShadow: "0 20px 50px rgba(0,0,0,0.25)",
        animation: `floatUp 5s ${delay} ease-in-out infinite`,
      }}
    >
      <div
        className="mb-4 flex h-14 w-14 items-center justify-center rounded-full"
        style={{ background: "rgba(201,168,76,0.15)" }}
      >
        {icon}
      </div>
      <h3 style={{ color: titleColor, fontFamily: "var(--font-syne)", fontSize: "1.125rem", marginBottom: "4px" }}>{title}</h3>
      <p style={{ color: subColor, fontSize: "0.875rem", margin: 0 }}>{subtitle}</p>
      {goldLine && (
        <div className="mt-4 h-[2px] w-12" style={{ background: "linear-gradient(90deg, var(--gold), transparent)" }} />
      )}
    </div>
  );
}
