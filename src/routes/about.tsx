import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — PROPVIA SOLUTIONS LTD" },
      { name: "description", content: "Learn about PROPVIA SOLUTIONS LTD — a UK property and consultancy firm based in Ipswich (Company No. 17044310)." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <PageShell
      eyebrow="About PROPVIA"
      title="A Modern British Property & Consultancy Firm."
      intro="Registered in England &amp; Wales (No. 17044310), PROPVIA SOLUTIONS LTD partners with property owners and businesses to deliver dependable services and clear-headed advisory."
    />
  );
}
