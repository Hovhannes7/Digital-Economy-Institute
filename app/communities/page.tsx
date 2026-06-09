import type { Metadata } from "next";
import Image from "next/image";

import { CommunityCard } from "@/components/CommunityCard";
import { Container } from "@/components/Container";
import { CrossCommunityChatMock } from "@/components/CrossCommunityChatMock";
import { Hero } from "@/components/Hero";
import { NoticeBox } from "@/components/NoticeBox";
import { SectionHeading } from "@/components/SectionHeading";

import { communities } from "@/lib/communities";

export const metadata: Metadata = {
  title: "Communities",
  description:
    "Interdisciplinary research communities for collaboration, validation, discovery, and responsible innovation.",
};

export default function CommunitiesPage() {
  return (
    <>
      <Hero
        title="Communities"
        subtitle="Interdisciplinary spaces where researchers, specialists, policymakers, entrepreneurs, and practitioners collaborate, ask questions, share discoveries, and build evidence-based solutions."
      >
        <div className="mt-6 max-w-3xl">
          <Image
            src="/images/communities-sketch.png"
            alt="Black-and-white sketch of interdisciplinary collaboration between researchers, policymakers, entrepreneurs, and practitioners"
            width={1600}
            height={900}
            className="h-auto w-full rounded-3xl border border-line bg-white shadow-subtle"
          />
        </div>
      </Hero>

      <section className="bg-paper py-16">
        <Container>
          <SectionHeading title="Community spaces">
            <p>
              Each community includes registration UI, chat UI, chatbot
              assistant UI, a Discovery Vault prototype, calculators/tools,
              external reference links, and responsible-use notes.
            </p>
          </SectionHeading>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {communities.map((c) => (
              <CommunityCard key={c.slug} community={c} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-16">
        <Container>
          <CrossCommunityChatMock />

          <div className="mt-5">
            <NoticeBox>
              The cross-community chat has no chatbot by design. Production use
              requires authentication, moderation, secure file storage, and
              scheduled deletion logic.
            </NoticeBox>
          </div>
        </Container>
      </section>
    </>
  );
}
