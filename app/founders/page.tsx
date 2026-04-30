import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { FounderCard } from "@/components/FounderCard";
import { Hero } from "@/components/Hero";
export const metadata: Metadata = { title: "Founders", description: "Founders of Digital Economy Institute." };
export default function FoundersPage() {
  return <><Hero title="Founders" subtitle="Digital Economy Institute was founded to advance trustworthy digital-economy infrastructure, publication-oriented research, and responsible innovation communities."/><section className="bg-paper py-16"><Container><div className="grid gap-6 md:grid-cols-2"><FounderCard name="Hovhannes Adajyan" role="Co-founder" bio="Policy and technology-program professional focused on digital economy, innovation systems, research infrastructure, and evidence-based public-sector transformation."/><FounderCard name="Sos Khachikyan" role="Co-founder" bio="Co-founder profile placeholder. Production use should include a verified professional biography, institutional affiliation, and areas of expertise."/></div></Container></section></>;
}
