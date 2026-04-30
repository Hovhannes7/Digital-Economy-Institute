import { PublicationCard } from "@/components/PublicationCard";
import type { Publication } from "@/lib/publications";
export function PublicationGrid({ publications }: { publications: Publication[] }) {
  if (!publications.length) return <p className="rounded-2xl border border-line bg-white p-6 text-sm text-steel">No publications match the selected filters.</p>;
  return <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">{publications.map(p => <PublicationCard key={p.slug} publication={p} />)}</div>;
}
