import { PublicationCard } from "@/components/PublicationCard";
import type { Publication } from "@/lib/publications";
export function FeaturedPublication({ publication }: { publication: Publication }) {
  return <div className="rounded-3xl border border-line bg-white p-2 shadow-editorial"><PublicationCard publication={publication} /></div>;
}
