import Link from "next/link";
import { Badge } from "@/components/Badge";
import type { Publication } from "@/lib/publications";
import { formatDate } from "@/lib/utils";
export function PublicationCard({ publication }: { publication: Publication }) {
  return <article className="flex h-full flex-col rounded-2xl border border-line bg-white p-6 shadow-subtle transition hover:-translate-y-0.5 hover:shadow-editorial"><div className="flex flex-wrap gap-2"><Badge>{publication.type}</Badge><Badge>{publication.issueArea}</Badge></div><h3 className="mt-5 text-xl font-bold leading-snug"><Link href={`/publications/${publication.slug}`} className="hover:text-accent">{publication.title}</Link></h3><p className="mt-3 flex-1 text-sm leading-6 text-steel">{publication.summary}</p><p className="mt-6 border-t border-line pt-4 text-xs font-semibold uppercase tracking-wide text-steel">{publication.author} · {formatDate(publication.date)} · {publication.readingTime}</p></article>;
}
