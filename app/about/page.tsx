import type { Metadata } from "next";
import Image from "next/image";

import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "About",
  description:
    "Mission, vision, founder story, and institutional principles of Institute of Digital Economy.",
};

const sections = [
  [
    "Why the institute exists",
    "The digital economy increasingly depends on computational research, AI systems, public data, and institutional platforms. The institute exists to make these systems more transparent, reproducible, and useful for policy and research.",
  ],
  [
    "What makes it different",
    "Institute of Digital Economy is publication-oriented and infrastructure-focused. It does not present AI as a generic product, but as part of a broader evidence system requiring provenance, governance, expert review, and public value.",
  ],
  [
    "Institutional focus",
    "The institute focuses on digital economy, Web4 infrastructure, transparent computational research, reproducible science, research integrity, data provenance, responsible AI, open-source governance, and expert communities.",
  ],
  [
    "Governance principles",
    "The institute emphasizes careful claims, transparent workflows, human accountability, open-source logic, expert validation, and responsible treatment of sensitive data.",
  ],
  [
    "Community-based research model",
    "Communities support domain-specific validation across agriculture, healthcare, environment, jurisprudence, and AI & blockchain governance.",
  ],
  [
    "Discovery vault concept",
    "Discovery Vaults provide a future pathway for documenting research ideas, datasets, technical observations, invention concepts, and IP-review candidates.",
  ],
  [
    "Responsible innovation principle",
    "AI tools support human experts and do not replace human judgment. Medical, legal, environmental, agricultural, AI, and blockchain discussions require appropriate expert review.",
  ],
];

export default function AboutPage() {
  return (
    <>
      <Hero
        title="About the Institute"
        subtitle="The Institute of Digital Economy is a research and policy-oriented platform connecting technology, expert communities, and practical public challenges."
      >
        <div className="mt-8 max-w-5xl">
          <Image
            src="/images/about-page-image.webp"
            alt="Conceptual illustration connecting Washington DC, Armenia, policy research, expert communities, agriculture, healthcare, environment, and jurisprudence"
            width={1672}
            height={941}
            priority
            className="h-auto w-full rounded-3xl border border-line bg-white shadow-subtle"
          />
        </div>
      </Hero>

      <section className="bg-paper py-16">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.4fr]">
            <div>
              <SectionHeading
                eyebrow="Mission"
                title="Practical technology for public value"
              >
                The Institute supports responsible technology use through
                research, publications, expert communities, and digital tools.
              </SectionHeading>
            </div>

            <div className="rounded-3xl border border-line bg-white p-6 shadow-subtle">
              <h2 className="text-2xl font-bold">Mission</h2>
              <p className="mt-4 text-sm leading-7 text-steel">
                To strengthen the digital economy through trustworthy data
                systems, reproducible computational research, responsible AI,
                expert communities, and evidence-based policy infrastructure.
              </p>

              <h2 className="mt-8 text-2xl font-bold">Vision</h2>
              <p className="mt-4 text-sm leading-7 text-steel">
                A digital economy where researchers, governments, and
                institutions rely on transparent, verifiable, and reusable
                knowledge systems instead of opaque or non-reproducible
                analytical processes.
              </p>

              <h2 className="mt-8 text-2xl font-bold">Founder story</h2>
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
                solutions with challenges in agriculture, healthcare,
                environment, and jurisprudence. Its purpose is to support
                practical research, expert communities, publications, and
                digital tools that help policymakers, professionals, and
                institutions find responsible and useful technology-based
                solutions.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {sections.map(([title, text]) => (
              <div
                key={title}
                className="rounded-3xl border border-line bg-white p-6 shadow-subtle"
              >
                <h2 className="text-xl font-bold">{title}</h2>
                <p className="mt-3 text-sm leading-7 text-steel">{text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
