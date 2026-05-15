import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/consultancy")({
  head: () => ({
    meta: [
      { title: "Business Consultancy — PROPVIA SOLUTIONS LTD" },
      { name: "description", content: "Strategic business and property consultancy supporting growth, operations and decision-making across the UK property sector." },
    ],
  }),
  component: ConsultancyPage,
});

function ConsultancyPage() {
  return (
    <PageShell
      eyebrow="Consultancy"
      title="Strategic Business & Property Advisory."
      intro="Practical, data-led consultancy to help property businesses scale, operate efficiently, and make confident commercial decisions."
    />
  );
}
