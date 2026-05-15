import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — PROPVIA SOLUTIONS LTD" },
      { name: "description", content: "Get in touch with PROPVIA SOLUTIONS LTD — 50 Princes Street, Ipswich, IP1 1RJ. Call +44 7365 338565 or email Propviasolutions@gmail.com." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <PageShell
      eyebrow="Contact"
      title="Speak with the PROPVIA Team."
      intro="Reach our Ipswich office for a free initial consultation, a maintenance enquiry, or a strategic conversation about your property business."
    />
  );
}
