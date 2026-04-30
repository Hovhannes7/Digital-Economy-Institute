import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { PublicationsExplorer } from "@/components/PublicationsExplorer";
import { getAllPublications } from "@/lib/publications";
export const metadata: Metadata = { title: "Publications", description: "Reports, policy briefs, commentary, working papers, explainers, research notes, testimonies, and data briefs." };
export default function PublicationsPage() {
  return <><Hero title="Publications" subtitle="A publication hub for digital economy, Web4 infrastructure, research integrity, responsible AI, and evidence-based policymaking."/><section className="bg-paper py-16"><Container><PublicationsExplorer publications={getAllPublications()}/></Container></section></>;
}
