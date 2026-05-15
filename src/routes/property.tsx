import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/property")({
  head: () => ({
    meta: [
      { title: "Property Services — PROPVIA SOLUTIONS LTD" },
      { name: "description", content: "Property maintenance, management support and project delivery across the UK property sector." },
    ],
  }),
  component: PropertyPage,
});

function PropertyPage() {
  return (
    <PageShell
      eyebrow="Property Services"
      title="Maintenance, Management & Project Support for Modern Property."
      intro="From routine repairs to full management oversight, our specialists protect the value, condition and reputation of your property assets."
    />
  );
}
