import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Badge } from "@/components/Badge";
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { PublicationGrid } from "@/components/PublicationGrid";
import { SectionHeading } from "@/components/SectionHeading";
import { getIssueAreaBySlug, issueAreas } from "@/lib/issueAreas";
import { getAllPublications } from "@/lib/publications";
export function generateStaticParams() { return issueAreas.map(i => ({ slug: i.slug })); }
export function generateMetadata({ params }: { params: { slug: string } }): Metadata { const i = getIssueAreaBySlug(params.slug); return { title: i?.title ?? "Issue Area", description: i?.description }; }
export default function IssuePage({ params }: { params: { slug: string } }) {
  const issue = getIssueAreaBySlug(params.slug); if (!issue) notFound();
  const related = getAllPublications().filter(p => p.issueArea === issue.title || p.tags.includes(issue.title));
  return <><Hero title={issue.title} subtitle={issue.description}/><section className="bg-white py-16"><Container className="grid gap-10 lg:grid-cols-[.7fr_.3fr]"><div className="space-y-10"><SectionHeading title="Why it matters"><p>{issue.whyItMatters}</p></SectionHeading><SectionHeading title="Policy relevance"><p>{issue.policyRelevance}</p></SectionHeading><SectionHeading title="Targeted AI connection"><p>{issue.targetedAiConnection}</p></SectionHeading></div><aside className="rounded-3xl border border-line bg-paper p-6"><p className="text-xs font-bold uppercase tracking-[.2em] text-steel">Issue profile</p><div className="mt-4 flex flex-wrap gap-2"><Badge>{issue.title}</Badge>{issue.relatedCommunity ? <Badge>{issue.relatedCommunity}</Badge> : null}</div></aside></Container></section><section className="bg-paper py-16"><Container><SectionHeading title="Related publications"/><div className="mt-8"><PublicationGrid publications={related}/></div></Container></section></>;
}
