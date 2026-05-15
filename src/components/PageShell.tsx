import { useEffect, type ReactNode } from "react";

export function PageShell({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  children?: ReactNode;
}) {
  // Scroll reveal
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("active");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <main style={{ background: "var(--cream)" }}>
      {/* Hero shell with animated geometry */}
      <section className="relative overflow-hidden">
        <BgGeometry />
        <div className="container-px relative mx-auto max-w-6xl py-20 sm:py-28 lg:py-36">
          <span className="eyebrow reveal">{eyebrow}</span>
          <h1 className="reveal delay-1 mt-3 max-w-4xl">{title}</h1>
          <p className="reveal delay-2 mt-6 max-w-2xl text-lg" style={{ color: "var(--ink-mid)" }}>
            {intro}
          </p>
        </div>
      </section>

      {children ?? (
        <section className="container-px mx-auto max-w-6xl py-16 text-center">
          <div className="glass-card mx-auto max-w-2xl p-10 reveal">
            <span className="eyebrow">Coming Up Next</span>
            <h2 className="mt-3 mb-3" style={{ fontSize: "2rem" }}>Section in development</h2>
            <p>Detailed content for this page will be added in upcoming build segments.</p>
          </div>
        </section>
      )}
    </main>
  );
}

function BgGeometry() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="animate-blob absolute -left-24 -top-24 h-[420px] w-[420px] rounded-full opacity-50"
        style={{
          background: "radial-gradient(closest-side, rgba(201,168,76,0.18), transparent 70%)",
        }}
      />
      <div
        className="animate-blob absolute -right-32 top-32 h-[520px] w-[520px] rounded-full opacity-60"
        style={{
          background: "radial-gradient(closest-side, rgba(26,60,46,0.10), transparent 70%)",
          animationDelay: "-4s",
        }}
      />
      <svg
        className="animate-rotate-slow absolute -right-20 -bottom-20 hidden md:block"
        width="320"
        height="320"
        viewBox="0 0 200 200"
        fill="none"
      >
        <circle cx="100" cy="100" r="80" stroke="var(--gold)" strokeOpacity="0.25" strokeWidth="0.5" />
        <circle cx="100" cy="100" r="60" stroke="var(--green)" strokeOpacity="0.25" strokeWidth="0.5" />
        <circle cx="100" cy="100" r="40" stroke="var(--gold)" strokeOpacity="0.35" strokeWidth="0.5" />
      </svg>
    </div>
  );
}
