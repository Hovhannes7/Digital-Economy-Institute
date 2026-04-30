import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AuthorBio } from "@/components/AuthorBio";
import { Badge } from "@/components/Badge";
import { Container } from "@/components/Container";
import { MarkdownBody } from "@/components/MarkdownBody";
import { RelatedPublications } from "@/components/RelatedPublications";
import { getAllPublications, getPublicationBySlug, getRelatedPublications } from "@/lib/publications";
import { formatDate } from "@/lib/utils";
export function generateStaticParams() { return getAllPublications().map(p => ({ slug: p.slug })); }
export function generateMetadata({ params }: { params: { slug: string } }): Metadata { const p = getPublicationBySlug(params.slug); return { title: p?.title ?? "Publication", description: p?.summary }; }
export default function PublicationPage({ params }: { params: { slug: string } }) {
  const p = getPublicationBySlug(params.slug); if (!p) notFound(); const related = getRelatedPublications(p);
  return <article className="bg-white py-16"><Container><div className="grid gap-10 lg:grid-cols-[minmax(0,.7fr)_minmax(0,.3fr)]"><div><div className="flex flex-wrap gap-2"><Badge>{p.type}</Badge><Badge>{p.issueArea}</Badge></div><h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">{p.title}</h1>{p.subtitle ? <p className="mt-5 text-xl leading-8 text-graphite">{p.subtitle}</p> : null}<p className="mt-6 text-sm font-semibold text-steel">{p.author} · {formatDate(p.date)} · {p.readingTime}</p><div className="mt-8 rounded-2xl border border-line bg-paper p-6"><p className="text-xs font-bold uppercase tracking-[.2em] text-steel">Abstract</p><p className="mt-3 text-base leading-7 text-graphite">{p.summary}</p></div><div className="mt-10"><MarkdownBody content={p.body}/></div><div className="mt-12 rounded-2xl border border-line bg-paper p-6 text-sm leading-6 text-graphite"><p className="font-bold text-ink">Recommended citation</p><p className="mt-2">{p.author}. “{p.title}.” Digital Economy Institute, {new Date(p.date).getFullYear()}.</p></div></div><aside className="space-y-6"><AuthorBio name={p.author}/><div className="rounded-2xl border border-line bg-white p-6 shadow-subtle"><p className="text-xs font-bold uppercase tracking-[.2em] text-steel">Tags</p><div className="mt-4 flex flex-wrap gap-2">{p.tags.map(t => <Badge key={t}>{t}</Badge>)}</div></div></aside></div><RelatedPublications publications={related}/></Container></article>;
}
