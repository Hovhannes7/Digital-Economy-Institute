"use client";
import { useMemo, useState } from "react";
import type { Publication } from "@/lib/publications";
import { PublicationGrid } from "@/components/PublicationGrid";
import { FilterState, SearchAndFilterBar } from "@/components/SearchAndFilterBar";
export function PublicationsExplorer({ publications }: { publications: Publication[] }) {
  const [filters, setFilters] = useState<FilterState>({ query: "", type: "", issueArea: "", author: "", year: "" });
  const uniq = (items: string[]) => Array.from(new Set(items)).sort();
  const types = useMemo(() => uniq(publications.map(p => p.type)), [publications]);
  const issueAreas = useMemo(() => uniq(publications.map(p => p.issueArea)), [publications]);
  const authors = useMemo(() => uniq(publications.map(p => p.author)), [publications]);
  const years = useMemo(() => uniq(publications.map(p => new Date(p.date).getFullYear().toString())).reverse(), [publications]);
  const filtered = publications.filter(p => {
    const q = `${p.title} ${p.summary} ${p.issueArea} ${p.tags.join(" ")}`.toLowerCase();
    return (!filters.query || q.includes(filters.query.toLowerCase())) && (!filters.type || p.type === filters.type) && (!filters.issueArea || p.issueArea === filters.issueArea) && (!filters.author || p.author === filters.author) && (!filters.year || new Date(p.date).getFullYear().toString() === filters.year);
  });
  return <div className="space-y-8"><SearchAndFilterBar filters={filters} onChange={setFilters} types={types} issueAreas={issueAreas} authors={authors} years={years}/><PublicationGrid publications={filtered}/></div>;
}
