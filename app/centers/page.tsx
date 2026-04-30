import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { centers } from "@/lib/centers";
export const metadata: Metadata = { title: "Centers", description: "Research centers of the Digital Economy Institute." };
export default function CentersPage() {
  return <><Hero title="Centers" subtitle="Research centers that organize work across digital economy, Web4 infrastructure, Targeted AI, research integrity, public policy, and innovation protection."/><section className="bg-paper py-16"><Container><SectionHeading title="Institutional research centers"/><div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{centers.map(c => <article key={c.name} className="rounded-3xl border border-line bg-white p-6 shadow-subtle"><h2 className="text-xl font-bold">{c.name}</h2><p className="mt-3 text-sm leading-6 text-steel">{c.description}</p></article>)}</div></Container></section></>;
}
