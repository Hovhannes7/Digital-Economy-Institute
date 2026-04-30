import type { Publication } from "@/lib/publications";
import { PublicationGrid } from "@/components/PublicationGrid";
import { SectionHeading } from "@/components/SectionHeading";
export function RelatedPublications({ publications }: { publications: Publication[] }) {
  if (!publications.length) return null;
  return <section className="mt-16 border-t border-line pt-12"><SectionHeading title="Related publications"/><div className="mt-8"><PublicationGrid publications={publications}/></div></section>;
}
