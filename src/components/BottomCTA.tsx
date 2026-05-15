import { useInquiry } from "./InquiryProvider";

export function BottomCTA({
  variant = "green",
  heading,
  sub,
  primaryLabel = "Request Consultation →",
  secondaryLabel = "WhatsApp Us",
}: {
  variant?: "green";
  heading: string;
  sub: string;
  primaryLabel?: string;
  secondaryLabel?: string;
}) {
  const inquiry = useInquiry();
  return (
    <section
      style={{ background: "var(--green)" }}
      className="py-16 sm:py-20"
    >
      <div className="container-px mx-auto max-w-4xl text-center">
        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
            color: "var(--cream)",
            fontWeight: 500,
          }}
        >
          {heading}
        </h3>
        <p className="mx-auto mt-3 max-w-2xl" style={{ color: "var(--cream-mid)" }}>{sub}</p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <button
            onClick={inquiry.open}
            className="btn-primary"
            style={{ background: "var(--gold)", color: "var(--green)", borderColor: "var(--gold)" }}
          >
            {primaryLabel}
          </button>
          <a
            href="https://wa.me/447365338565"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
            style={{ color: "var(--cream)", borderColor: "var(--cream)" }}
          >
            {secondaryLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
