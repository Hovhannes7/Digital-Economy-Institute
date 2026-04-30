import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { IssueAreaCard } from "@/components/IssueAreaCard";
import { issueAreas } from "@/lib/issueAreas";
export const metadata: Metadata = { title: "Issue Areas", description: "Digital Economy Institute issue areas and research priorities." };
export default function IssuesPage() {
  return <><Hero title="Issue Areas" subtitle="Research priorities for trustworthy digital-economy infrastructure, Web4, reproducible science, responsible AI, and sectoral transformation."/><section className="bg-paper py-16"><Container><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{issueAreas.map(i => <IssueAreaCard key={i.slug} issue={i}/>)}</div></Container></section></>;
}
