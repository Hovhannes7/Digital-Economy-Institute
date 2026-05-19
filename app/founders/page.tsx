import type { Metadata } from "next";

import { Container } from "@/components/Container";
import { FounderCard } from "@/components/FounderCard";
import { Hero } from "@/components/Hero";

export const metadata: Metadata = {
  title: "Founder",
  description: "Founder of Institute of Digital Economy.",
};

export default function FoundersPage() {
  return (
    <>
      <Hero
        title="Founder"
        subtitle="Institute of Digital Economy was founded to advance trustworthy digital-economy infrastructure, publication-oriented research, and responsible innovation communities."
      />

      <section className="bg-paper py-16">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            <FounderCard
              name="Hovhannes Adajyan"
              role="Founder"
              bio="Policy and technology-program professional focused on digital economy, innovation systems, research infrastructure, and evidence-based public-sector transformation."
            />
          </div>
        </Container>
      </section>
    </>
  );
}
