import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { TrustMarquee } from "@/components/home/TrustMarquee";
import { IntroSection } from "@/components/home/IntroSection";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { ConsultancyHighlight } from "@/components/home/ConsultancyHighlight";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { HowWeWork } from "@/components/home/HowWeWork";
import { FinalCTA } from "@/components/home/FinalCTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PROPVIA SOLUTIONS LTD — Property & Consultancy in Ipswich" },
      { name: "description", content: "Premium property maintenance, management, and business consultancy from PROPVIA SOLUTIONS LTD — based in Ipswich, serving the UK." },
      { property: "og:title", content: "PROPVIA SOLUTIONS LTD — Property & Consultancy" },
      { property: "og:description", content: "Professional property maintenance, management, and business consultancy across the UK." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  // Scroll-reveal observer
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("active");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <main id="home" style={{ background: "var(--cream)" }}>
      <HeroSection />
      <TrustMarquee />
      <IntroSection />
      <ServicesOverview />
      <ConsultancyHighlight />
      <WhyChooseUs />
      <HowWeWork />
      <FinalCTA />
    </main>
  );
}
