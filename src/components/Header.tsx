import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";
import { useInquiry } from "./InquiryProvider";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/property", label: "Property Services" },
  { to: "/consultancy", label: "Consultancy" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const inquiry = useInquiry();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        className="sticky top-0 z-50 w-full transition-all duration-300"
        style={{
          background: "var(--cream)",
          borderBottom: "1px solid var(--cream-dark)",
          boxShadow: scrolled ? "0 2px 24px rgba(0,0,0,0.08)" : "none",
        }}
      >
        <div className="container-px mx-auto flex h-16 max-w-7xl items-center justify-between md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2" aria-label="PROPVIA Solutions home">
            <img
              id="site-logo"
              src={logo}
              alt="PROPVIA SOLUTIONS LTD"
              style={{ height: "44px", width: "auto", objectFit: "contain" }}
              onError={(e) => {
                const el = e.currentTarget;
                el.style.display = "none";
                const fallback = el.nextElementSibling as HTMLElement | null;
                if (fallback) fallback.style.display = "inline-block";
              }}
            />
            <span
              style={{
                display: "none",
                fontFamily: "var(--font-display)",
                fontSize: "1.625rem",
                fontWeight: 700,
                color: "var(--green)",
                letterSpacing: "-0.01em",
              }}
            >
              PROPVIA
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 lg:flex">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="nav-link"
                activeProps={{ className: "nav-link active" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA + mobile button */}
          <div className="flex items-center gap-2">
            <button onClick={inquiry.open} className="btn-primary hidden md:inline-flex">
              Request Consultation
            </button>
            <button
              aria-label="Open menu"
              onClick={() => setOpen(true)}
              className="flex h-11 w-11 items-center justify-center rounded-full transition-colors lg:hidden"
              style={{ color: "var(--green)" }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M3 6h18M3 12h18M3 18h18" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 z-[60] flex flex-col animate-fade-in lg:hidden"
          style={{ background: "var(--cream)" }}
        >
          <div className="flex items-center justify-between p-5">
            <img src={logo} alt="" style={{ height: "40px", width: "auto" }} />
            <button
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="flex h-11 w-11 items-center justify-center rounded-full"
              style={{ color: "var(--green)" }}
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="flex flex-1 flex-col items-start justify-center gap-2 px-8">
            {NAV.map((item, i) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="block w-full py-3 transition-colors"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2rem, 8vw, 3rem)",
                  fontWeight: 500,
                  color: "var(--green)",
                  animation: `fadeSlideUp 0.4s ease-out ${i * 0.06}s both`,
                }}
              >
                {item.label}
              </Link>
            ))}
            <button
              onClick={() => {
                setOpen(false);
                inquiry.open();
              }}
              className="btn-primary mt-6"
            >
              Request Consultation
            </button>
          </nav>

          <div className="border-t px-8 py-6 text-sm" style={{ borderColor: "var(--cream-dark)", color: "var(--ink-mid)" }}>
            <p className="mb-1">
              <a href="tel:+447365338565">📱 +44 7365 338565</a>
            </p>
            <p>
              <a href="mailto:Propviasolutions@gmail.com">📧 Propviasolutions@gmail.com</a>
            </p>
          </div>
        </div>
      )}
    </>
  );
}
