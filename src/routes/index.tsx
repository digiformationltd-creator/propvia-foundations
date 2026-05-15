import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PROPVIA SOLUTIONS LTD — Property & Consultancy in Ipswich" },
      { name: "description", content: "Premium property maintenance, management, and business consultancy from PROPVIA SOLUTIONS LTD — based in Ipswich, serving the UK." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <PageShell
      eyebrow="PROPVIA Solutions Ltd"
      title="Premium Property & Consultancy Solutions for a Modern Britain."
      intro="Trusted maintenance, management and advisory services for property owners, landlords and businesses across Ipswich and the wider UK."
    />
  );
}
