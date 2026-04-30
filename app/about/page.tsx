import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
export const metadata: Metadata = { title: "About", description: "Mission, vision, and institutional principles of Digital Economy Institute." };
const sections = [
  ["Why the institute exists","The digital economy increasingly depends on computational research, AI systems, public data, and institutional platforms. The institute exists to make these systems more transparent, reproducible, and useful for policy and research."],
  ["What makes it different","Digital Economy Institute is publication-oriented and infrastructure-focused. It does not present AI as a generic product, but as part of a broader evidence system requiring provenance, governance, expert review, and public value."],
  ["Institutional focus","The institute focuses on digital economy, Web4 infrastructure, transparent computational research, reproducible science, research integrity, data provenance, responsible AI, open-source governance, and expert communities."],
  ["Governance principles","The institute emphasizes careful claims, transparent workflows, human accountability, open-source logic, expert validation, and responsible treatment of sensitive data."],
  ["Community-based research model","Communities support domain-specific validation across agriculture, healthcare, environment, jurisprudence, and AI & blockchain governance."],
  ["Discovery vault concept","Discovery Vaults provide a future pathway for documenting research ideas, datasets, technical observations, invention concepts, and IP-review candidates."],
  ["Responsible innovation principle","AI tools support human experts and do not replace human judgment. Medical, legal, environmental, agricultural, AI, and blockchain discussions require appropriate expert review."]
];
export default function AboutPage() {
  return <><Hero title="About Digital Economy Institute" subtitle="A research and policy institution focused on building trustworthy digital-economy infrastructure."/><section className="bg-white py-16"><Container className="space-y-12"><div className="grid gap-6 lg:grid-cols-2"><div className="rounded-3xl border border-line bg-paper p-8"><SectionHeading title="Mission"><p>To strengthen the digital economy through trustworthy data systems, reproducible computational research, responsible AI, expert communities, and evidence-based policy infrastructure.</p></SectionHeading></div><div className="rounded-3xl border border-line bg-paper p-8"><SectionHeading title="Vision"><p>A digital economy where researchers, governments, and institutions rely on transparent, verifiable, and reusable knowledge systems instead of opaque or non-reproducible analytical processes.</p></SectionHeading></div></div><div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{sections.map(([title,text]) => <article key={title} className="rounded-3xl border border-line bg-white p-6 shadow-subtle"><h2 className="text-xl font-bold">{title}</h2><p className="mt-3 text-sm leading-6 text-steel">{text}</p></article>)}</div></Container></section></>;
}
