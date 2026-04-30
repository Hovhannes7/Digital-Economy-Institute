import type { Partner } from "@/lib/partners";
import { Badge } from "@/components/Badge";
export function PartnerCard({ partner }: { partner: Partner }) {
  return <article className="rounded-3xl border border-line bg-white p-6 shadow-subtle"><Badge>{partner.category}</Badge><h3 className="mt-5 text-2xl font-bold">{partner.name}</h3><p className="mt-3 text-sm leading-6 text-steel">{partner.description}</p><p className="mt-4 rounded-2xl bg-paper p-3 text-xs font-semibold leading-5">{partner.label}</p><a href={partner.url} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex rounded-full border border-ink px-5 py-2.5 text-sm font-semibold hover:bg-ink hover:text-white">Visit website</a></article>;
}
