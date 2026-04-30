import Link from "next/link";
import { Badge } from "@/components/Badge";
import { Button } from "@/components/Button";
import type { Community } from "@/lib/communities";
export function CommunityCard({ community }: { community: Community }) {
  return <article className="rounded-3xl border border-line bg-white p-6 shadow-subtle"><div className="flex flex-wrap gap-2"><Badge>Chat UI</Badge><Badge>Chatbot prototype</Badge><Badge>Discovery vault</Badge></div><h3 className="mt-5 text-2xl font-bold">{community.name}</h3><p className="mt-3 text-sm leading-6 text-steel">{community.description}</p><p className="mt-5 text-xs font-bold uppercase tracking-wide text-steel">Key focus areas</p><div className="mt-3 flex flex-wrap gap-2">{community.focusAreas.slice(0,4).map(x => <span key={x} className="rounded-full bg-paper px-3 py-1 text-xs font-semibold">{x}</span>)}</div><div className="mt-5 rounded-2xl bg-paper p-4 text-sm"><p className="font-bold">Tools available</p><p className="mt-1 text-steel">{community.calculators.map(c=>c.title).join(", ")}</p></div><div className="mt-6 flex flex-wrap gap-3"><Button href={`/communities/${community.slug}`}>Open Community</Button><Link href={`/communities/${community.slug}#registration`} className="inline-flex items-center text-sm font-semibold text-accent hover:text-ink">Register to participate</Link></div></article>;
}
