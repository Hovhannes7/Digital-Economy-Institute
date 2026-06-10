import type { Metadata } from "next";
import Image from "next/image";

import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { PublicationsExplorer } from "@/components/PublicationsExplorer";
import { getAllPublications } from "@/lib/publications";

export const metadata: Metadata = {
  title: "Publications",
  description:
    "Publications on technology, agritech, green and circular economy, healthcare technologies, technologies in law, and latest AI news.",
};

export default function PublicationsPage() {
  return (
    <>
      <Hero
        title="Publications"
        subtitle="A publication hub covering the technology world, agritech, green and circular economy, healthcare technologies, technologies in law, and latest AI news."
      >
        <div className="mt-6 max-w-3xl">
          <Image
            src="/images/publications-sketch.webp"
            alt="Black-and-white sketch representing digital economy publications, technology, agritech, healthcare, law, green economy, and AI research"
            width={1600}
            height={900}
            priority
            className="h-auto w-full rounded-3xl border border-line bg-white shadow-subtle"
          />
        </div>
      </Hero>

      <section className="bg-paper py-16">
        <Container>
          <div className="mb-8 rounded-3xl border border-line bg-white p-6 shadow-subtle">
            <h2 className="text-xl font-bold">How to add daily publications</h2>
            <p className="mt-3 text-sm leading-6 text-steel">
              Add a new Markdown file inside <code>content/publications</code>.
              Use one of these issueArea values: Tech World, Agritech, Green
              and Circular Economy, Healthcare Technologies, Technologies in
              Law, or Latest AI News.
            </p>
          </div>

          <PublicationsExplorer publications={getAllPublications()} />
        </Container>
      </section>
    </>
  );
}
