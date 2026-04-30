import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Badge } from "@/components/Badge";
import { Button } from "@/components/Button";
import { CalculatorCard } from "@/components/CalculatorCard";
import { ChatbotMock } from "@/components/ChatbotMock";
import { CommunityChatMock } from "@/components/CommunityChatMock";
import { CommunityRegistrationForm } from "@/components/CommunityRegistrationForm";
import { Container } from "@/components/Container";
import { DiscoveryVaultMock } from "@/components/DiscoveryVaultMock";
import { Hero } from "@/components/Hero";
import { NoticeBox } from "@/components/NoticeBox";
import { ResourceLinkCard } from "@/components/ResourceLinkCard";
import { SectionHeading } from "@/components/SectionHeading";
import { communities, getCommunityBySlug } from "@/lib/communities";
export function generateStaticParams() { return communities.map(c => ({ slug: c.slug })); }
export function generateMetadata({ params }: { params: { slug: string } }): Metadata { const c = getCommunityBySlug(params.slug); return { title: c?.name ?? "Community", description: c?.description }; }
export default function CommunityPage({ params }: { params: { slug: string } }) {
  const c = getCommunityBySlug(params.slug); if (!c) notFound();
  return <><Hero eyebrow="Community" title={c.name} subtitle={c.longDescription} actions={<><Button href="#registration">Register to Participate</Button><Button href="#tools" variant="secondary">Explore Tools</Button></>}><p><strong>Who it is for:</strong> {c.audience}</p></Hero><section className="bg-paper py-16"><Container className="space-y-10"><div className="rounded-3xl border border-line bg-white p-6 shadow-subtle"><p className="text-xs font-bold uppercase tracking-[.2em] text-steel">Focus areas</p><div className="mt-4 flex flex-wrap gap-2">{c.focusAreas.map(f => <Badge key={f}>{f}</Badge>)}</div></div><CommunityRegistrationForm communityName={c.name}/><CommunityChatMock communityName={c.name}/><ChatbotMock communityName={c.name}/><DiscoveryVaultMock communityName={c.name}/></Container></section><section className="bg-white py-16" id="tools"><Container><SectionHeading title="Calculators and tools"><p>These blocks are a mix of external reference links and backend-ready placeholders. They are designed to be upgraded into secure, expert-reviewed production tools.</p></SectionHeading><div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{c.calculators.map(calc => <CalculatorCard key={calc.title} calculator={calc}/>)}</div></Container></section><section className="bg-paper py-16"><Container><SectionHeading title="Useful External Resources"><p>Some provided URLs may point to articles or listings rather than official organization websites. They are displayed as external reference links and do not imply endorsement or partnership unless listed under Partners.</p></SectionHeading><div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{c.externalResources.map(r => <ResourceLinkCard key={r.name} resource={r}/>)}</div></Container></section><section className="bg-white py-16"><Container><NoticeBox tone="warning">{c.governanceNote} Community discussions are for research and collaboration. AI tools support human experts and do not replace human judgment. Sensitive data should not be shared in the MVP.</NoticeBox></Container></section></>;
}
