import type { ExternalResource } from "@/lib/communities";
export function ResourceLinkCard({ resource }: { resource: ExternalResource }) {
  return <a href={resource.href} target="_blank" rel="noopener noreferrer" className="rounded-2xl border border-line bg-white p-5 shadow-subtle transition hover:-translate-y-0.5 hover:shadow-editorial"><h3 className="text-lg font-bold">{resource.name}</h3><p className="mt-2 text-sm leading-6 text-steel">External reference link. Inclusion does not imply endorsement or partnership.</p><p className="mt-4 text-sm font-semibold text-accent">Open external resource →</p></a>;
}
