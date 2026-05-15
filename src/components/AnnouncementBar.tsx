import { useEffect, useState } from "react";

const MESSAGES = [
  "🏠 Professional Property Maintenance & Management — Ipswich & Beyond",
  "📋 Business Consultancy & Growth Support for Property Sector Companies",
  "📞 Free Initial Consultation — Call +44 7365 338565 or WhatsApp Us",
];

export function AnnouncementBar() {
  const [idx, setIdx] = useState(0);
  const [visible, setVisible] = useState(true);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    if (!visible) return;
    const t = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIdx((i) => (i + 1) % MESSAGES.length);
        setFade(true);
      }, 300);
    }, 4000);
    return () => clearInterval(t);
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      className="relative w-full"
      style={{ background: "var(--green)", color: "var(--cream)" }}
    >
      <div className="container-px mx-auto flex min-h-[40px] max-w-7xl items-center justify-center gap-3 py-2 pr-10 text-center">
        <span
          aria-hidden
          className="hidden h-1.5 w-1.5 rounded-full sm:inline-block"
          style={{ background: "var(--gold)" }}
        />
        <span
          className="transition-opacity duration-300"
          style={{
            fontFamily: "var(--font-syne)",
            fontSize: "13px",
            letterSpacing: "0.05em",
            opacity: fade ? 1 : 0,
          }}
        >
          {MESSAGES[idx]}
        </span>
        <span
          aria-hidden
          className="hidden h-1.5 w-1.5 rounded-full sm:inline-block"
          style={{ background: "var(--gold)" }}
        />
      </div>
      <button
        aria-label="Dismiss announcement"
        onClick={() => setVisible(false)}
        className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 opacity-80 hover:opacity-100"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}
