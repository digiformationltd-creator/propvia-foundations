import { Link, useLocation } from "@tanstack/react-router";
import { useInquiry } from "./InquiryProvider";

function Icon({ d }: { d: string }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d={d} />
    </svg>
  );
}

const ITEMS = [
  { to: "/", label: "Home", d: "M3 11l9-8 9 8M5 10v10h14V10" },
  { to: "/property", label: "Services", d: "M3 21h18M5 21V8l7-4 7 4v13M9 21v-6h6v6" },
] as const;

const RIGHT = [
  { to: "/about", label: "About", d: "M12 12a4 4 0 100-8 4 4 0 000 8zM4 22a8 8 0 0116 0" },
  { to: "/contact", label: "Contact", d: "M4 6h16v12H4zM4 6l8 7 8-7" },
] as const;

export function MobileBottomNav() {
  const inquiry = useInquiry();
  const location = useLocation();

  const isActive = (to: string) => (to === "/" ? location.pathname === "/" : location.pathname.startsWith(to));

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-40 flex items-end justify-around lg:hidden"
      style={{
        background: "var(--cream)",
        borderTop: "1px solid var(--cream-dark)",
        height: "64px",
        paddingBottom: "env(safe-area-inset-bottom)",
      }}
    >
      {ITEMS.map((it) => (
        <Link
          key={it.to}
          to={it.to}
          className="flex h-full min-w-[44px] flex-1 flex-col items-center justify-center gap-1"
          style={{ color: isActive(it.to) ? "var(--green)" : "var(--grey)" }}
        >
          <Icon d={it.d} />
          <span style={{ fontFamily: "var(--font-sans)", fontSize: "10px" }}>{it.label}</span>
        </Link>
      ))}

      {/* Center CTA */}
      <button
        onClick={inquiry.open}
        aria-label="Call PROPVIA"
        className="relative -mt-6 flex h-14 w-14 items-center justify-center rounded-full animate-gold-pulse"
        style={{
          background: "var(--green)",
          color: "var(--cream)",
          border: "2px solid var(--gold)",
          boxShadow: "var(--shadow-hover)",
        }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.37 1.9.72 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0122 16.92z" />
        </svg>
      </button>

      {RIGHT.map((it) => (
        <Link
          key={it.to}
          to={it.to}
          className="flex h-full min-w-[44px] flex-1 flex-col items-center justify-center gap-1"
          style={{ color: isActive(it.to) ? "var(--green)" : "var(--grey)" }}
        >
          <Icon d={it.d} />
          <span style={{ fontFamily: "var(--font-sans)", fontSize: "10px" }}>{it.label}</span>
        </Link>
      ))}
    </nav>
  );
}
