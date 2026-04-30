import Link from "next/link";
import type { IssueArea } from "@/lib/issueAreas";
export function IssueAreaCard({ issue }: { issue: IssueArea }) {
  return <Link href={`/issues/${issue.slug}`} className="group rounded-2xl border border-line bg-white p-6 shadow-subtle transition hover:-translate-y-0.5 hover:shadow-editorial"><h3 className="text-xl font-bold group-hover:text-accent">{issue.title}</h3><p className="mt-3 text-sm leading-6 text-steel">{issue.description}</p>{issue.relatedCommunity ? <p className="mt-5 text-xs font-bold uppercase tracking-wide text-accent">{issue.relatedCommunity}</p> : null}</Link>;
}
