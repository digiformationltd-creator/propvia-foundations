import { Link } from "@tanstack/react-router";

export function MiniHero({
  variant, breadcrumb, eyebrow, title, sub,
}: {
  variant: "green" | "cream";
  breadcrumb: string;
  eyebrow: string;
  title: string;
  sub: string;
}) {
  const isGreen = variant === "green";
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: isGreen ? "var(--green)" : "var(--cream)",
        minHeight: "50vh",
        backgroundImage: isGreen
          ? "radial-gradient(rgba(250,247,242,0.06) 1px, transparent 1px)"
          : undefined,
        backgroundSize: isGreen ? "24px 24px" : undefined,
      }}
    >
      {/* Decorative arc */}
      <div aria-hidden className="pointer-events-none absolute inset-0 hidden lg:block">
        <svg
          className="absolute -right-32 -top-20 animate-rotate-slow"
          width="500" height="500" viewBox="0 0 200 200"
          style={{ animationDuration: "60s" }}
        >
          <circle
            cx="100" cy="100" r="90" fill="none"
            stroke={isGreen ? "rgba(201,168,76,0.10)" : "rgba(26,60,46,0.08)"}
            strokeWidth="1"
          />
          <circle
            cx="100" cy="100" r="70" fill="none"
            stroke={isGreen ? "rgba(201,168,76,0.08)" : "rgba(26,60,46,0.06)"}
            strokeWidth="1"
            strokeDasharray="4 6"
          />
        </svg>
      </div>

      <div className="container-px relative z-10 mx-auto flex max-w-7xl flex-col justify-center py-20 lg:py-24" style={{ minHeight: "50vh" }}>
        <nav
          className="mb-5 text-[13px]"
          style={{
            color: isGreen ? "var(--cream-mid)" : "var(--grey)",
            fontFamily: "var(--font-sans)",
            opacity: 0,
            animation: "fadeSlideUp 0.5s 0.05s ease-out forwards",
          }}
        >
          <Link to="/" className="hover:underline">Home</Link>
          <span className="mx-2">/</span>
          <span style={{ color: isGreen ? "var(--gold)" : "var(--green)" }}>{breadcrumb}</span>
        </nav>
        <span
          className="eyebrow inline-block"
          style={{ opacity: 0, animation: "fadeSlideUp 0.5s 0.15s ease-out forwards" }}
        >
          {eyebrow}
        </span>
        <h1
          className="mt-3 max-w-4xl"
          style={{
            color: isGreen ? "var(--cream)" : "var(--green)",
            opacity: 0,
            animation: "fadeSlideUp 0.6s 0.3s ease-out forwards",
          }}
        >
          {title}
        </h1>
        <p
          className="mt-5 max-w-2xl text-lg"
          style={{
            color: isGreen ? "var(--cream-mid)" : "var(--grey)",
            opacity: 0,
            animation: "fadeSlideUp 0.7s 0.45s ease-out forwards",
          }}
        >
          {sub}
        </p>
      </div>
    </section>
  );
}
