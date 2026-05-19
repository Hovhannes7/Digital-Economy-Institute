import type { Metadata } from "next";

import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { PartnerCard } from "@/components/PartnerCard";
import { SectionHeading } from "@/components/SectionHeading";

import { partners } from "@/lib/partners";

export const metadata: Metadata = {
  title: "Partners",
  description:
    "Partner, reference, and ecosystem-resource cards for Institute of Digital Economy.",
};

export default function PartnersPage() {
  return (
    <>
      <Hero
        title="Partners"
        subtitle="Institutional relationships, reference institutions, and ecosystem resources for digital-economy research and policy collaboration."
      />

      <section className="bg-paper py-16">
        <Container>
          <div>
            <SectionHeading title="Organizations">
              <p>
                This page distinguishes confirmed partners, reference
                organizations, and ecosystem resources. Partnership or membership
                status should not be overclaimed unless formally confirmed.
              </p>
            </SectionHeading>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {partners.map((partner) => (
              <PartnerCard key={partner.name} partner={partner} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
