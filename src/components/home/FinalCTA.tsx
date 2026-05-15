import { useInquiry } from "../InquiryProvider";

export function FinalCTA() {
  const inquiry = useInquiry();
  return (
    <section className="container-px mx-auto max-w-5xl py-20 sm:py-24">
      <div
        className="reveal relative overflow-hidden rounded-3xl p-10 text-center sm:p-14"
        style={{
          background: "linear-gradient(135deg, var(--green) 0%, var(--green-mid) 100%)",
          color: "var(--cream)",
          border: "1px solid var(--gold)",
          boxShadow: "var(--shadow-hover)",
        }}
      >
        <div
          aria-hidden
          className="absolute -right-20 -top-20 h-72 w-72 rounded-full opacity-30"
          style={{ background: "radial-gradient(closest-side, var(--gold), transparent)" }}
        />
        <span className="eyebrow">Get Started Today</span>
        <h2 className="mt-3" style={{ color: "var(--cream)" }}>
          Ready to Discuss Your Property or Business?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl" style={{ color: "var(--cream-mid)" }}>
          Speak with PROPVIA SOLUTIONS LTD today. Free initial consultation,
          no obligation — just professional advice from a UK-registered team.
        </p>
        <div className="relative mt-8 flex flex-wrap justify-center gap-3">
          <button
            onClick={inquiry.open}
            className="btn-primary"
            style={{ background: "var(--gold)", color: "var(--green)", borderColor: "var(--gold)" }}
          >
            Request Consultation →
          </button>
          <a href="tel:+447365338565" className="btn-ghost" style={{ color: "var(--cream)", borderColor: "var(--cream)" }}>
            📞 Call +44 7365 338565
          </a>
        </div>
      </div>
    </section>
  );
}
