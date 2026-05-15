const ITEMS = [
  "Property Maintenance", "Property Management", "Business Consultancy",
  "Project Support", "Operational Excellence", "UK Registered Company",
  "Professional Services", "Property Sector Experts", "Ipswich, England",
  "Business Growth Support", "Reliable & Trusted",
];

export function TrustMarquee() {
  const loop = [...ITEMS, ...ITEMS];
  return (
    <div
      className="group relative overflow-hidden no-scrollbar"
      style={{ background: "var(--gold)", padding: "14px 0" }}
    >
      <div
        className="flex w-max gap-6 whitespace-nowrap"
        style={{
          animation: "marqueeScroll 38s linear infinite",
          animationPlayState: "running",
          fontFamily: "var(--font-sans)",
          fontSize: "14px",
          fontWeight: 600,
          color: "var(--green)",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.animationPlayState = "paused")}
        onMouseLeave={(e) => (e.currentTarget.style.animationPlayState = "running")}
      >
        {loop.map((item, i) => (
          <span key={i} className="flex items-center gap-6">
            {item}
            <span className="inline-block h-1.5 w-1.5 rounded-full" style={{ background: "var(--green)" }} />
          </span>
        ))}
      </div>
    </div>
  );
}
