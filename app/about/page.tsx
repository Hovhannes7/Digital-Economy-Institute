import type { Metadata } from "next";
import Image from "next/image";

import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";

export const metadata: Metadata = {
  title: "About",
  description:
    "Mission, vision, founder story, and institutional principles of the Institute of Digital Economy.",
};

const focusAreas = [
  "Transparent computational research",
  "Reproducible science",
  "Data provenance and audit trails",
  "Hybrid AI-human validation",
  "Evidence-based policymaking",
];

const sections = [
  {
    title: "Mission",
    text: "To strengthen the digital economy through trustworthy data systems, reproducible computational research, responsible AI, expert communities, and evidence-based policy infrastructure.",
  },
  {
    title: "Vision",
    text: "A digital economy where researchers, governments, businesses, and institutions rely on transparent, verifiable, and reusable knowledge systems instead of opaque or non-reproducible analytical processes.",
  },
  {
    title: "Why the institute exists",
    text: "The digital economy increasingly depends on computational research, AI systems, public data, and institutional platforms. The Institute exists to make these systems more transparent, reproducible, and useful for policy and research.",
  },
  {
    title: "What makes it different",
    text: "The Institute of Digital Economy is publication-oriented and infrastructure-focused. It does not present AI as a generic product, but as part of a broader evidence system requiring provenance, governance, expert review, and public value.",
  },
  {
    title: "Community-based research model",
    text: "Communities support domain-specific validation across agriculture, healthcare, environment, jurisprudence, and AI and blockchain governance.",
  },
  {
    title: "Responsible innovation principle",
    text: "AI tools support human experts and do not replace human judgment. Medical, legal, environmental, agricultural, AI, and blockchain discussions require appropriate expert review.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Hero
        title="About the Institute"
        subtitle="The Institute of Digital Economy is a research and policy-oriented platform connecting technology, expert communities, and practical public challenges."
      >
        <div className="mt-6 max-w-3xl">
          <Image
            src="/images/about-page-image.webp"
            alt="Conceptual illustration connecting Washington DC, Armenia, policy research, expert communities, agriculture, healthcare, environment, and jurisprudence"
            width={1672}
            height={941}
            priority
            unoptimized
            className="h-auto w-full rounded-3xl border border-line bg-white shadow-subtle"
          />
        </div>
      </Hero>

      <section className="bg-paper py-16">
        <Container>
          <div className="mb-8 rounded-3xl border border-line bg-white p-6 shadow-subtle">
            <h2 className="text-xl font-bold">Founder story</h2>

            <p className="mt-4 text-sm leading-7 text-steel">
              The idea behind the Institute of Digital Economy was strongly
              shaped during Hovhannes Adajyan&apos;s visit to Washington, DC
              through the Professional Fellowship Program. Exposure to the
              United States technology-policy environment showed how research
              institutions, government, business, and expert communities can
              work together to connect technology with practical public
              problems.
            </p>

            <p className="mt-4 text-sm leading-7 text-steel">
              Engagement with the Information Technology and Innovation
              Foundation strengthened the institutional inspiration behind the
              project. It demonstrated the value of clear policy research,
              evidence-based analysis, and public-facing technology expertise.
              This experience encouraged the creation of an Armenian
              tech-related think tank focused on real-life issues rather than
              technology for its own sake.
            </p>

            <p className="mt-4 text-sm leading-7 text-steel">
              The Institute of Digital Economy aims to connect technological
              solutions with challenges in agriculture, healthcare, environment,
              and jurisprudence. Its purpose is to support practical research,
              expert communities, publications, and digital tools that help
              policymakers, professionals, and institutions find responsible and
              useful technology-based solutions.
            </p>
          </div>

          <div className="mb-8 rounded-3xl border border-line bg-white p-6 shadow-subtle">
            <h2 className="text-xl font-bold">Institutional focus</h2>

            <div className="mt-5 grid gap-3 md:grid-cols-2">
              {focusAreas.map((item) => (
                <div
                  key={item}
                  className="border-l-2 border-ink bg-paper px-4 py-3 text-sm font-medium"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {sections.map((section) => (
              <div
                key={section.title}
                className="rounded-3xl border border-line bg-white p-6 shadow-subtle"
              >
                <h2 className="text-xl font-bold">{section.title}</h2>
                <p className="mt-3 text-sm leading-7 text-steel">
                  {section.text}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
