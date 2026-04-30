import { Button } from "@/components/Button";
import { CommunityCard } from "@/components/CommunityCard";
import { Container } from "@/components/Container";
import { FeaturedPublication } from "@/components/FeaturedPublication";
import { FounderCard } from "@/components/FounderCard";
import { Hero } from "@/components/Hero";
import { IssueAreaCard } from "@/components/IssueAreaCard";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { NoticeBox } from "@/components/NoticeBox";
import { PartnerCard } from "@/components/PartnerCard";
import { PublicationGrid } from "@/components/PublicationGrid";
import { SectionHeading } from "@/components/SectionHeading";
import { communities } from "@/lib/communities";
import { issueAreas } from "@/lib/issueAreas";
import { partners } from "@/lib/partners";
import { getAllPublications } from "@/lib/publications";

export default function HomePage() {
  const [featured, ...latest] = getAllPublications();
  return <>
    <Hero eyebrow="Research institute" title="Digital Economy Institute" subtitle="Research, policy, communities, and Web4 infrastructure for a trustworthy digital economy." actions={<><Button href="/publications">Explore Publications</Button><Button href="/communities" variant="secondary">Join a Community</Button><Button href="/targeted-ai" variant="ghost">Learn About Targeted AI</Button></>}>The Digital Economy Institute develops research, publications, expert communities, and open digital infrastructure for transparent computational research, reproducible science, responsible AI, and evidence-based policymaking.</Hero>
    <section className="bg-paper py-16"><Container><SectionHeading eyebrow="Featured" title="Publication-first research institution"/><div className="mt-8">{featured ? <FeaturedPublication publication={featured}/> : null}</div></Container></section>
    <section className="bg-white py-16"><Container><div className="flex flex-wrap items-end justify-between gap-6"><SectionHeading eyebrow="Latest analysis" title="Latest publications">Reports, briefs, working papers, explainers, and research notes on digital-economy infrastructure and trustworthy computational research.</SectionHeading><Button href="/publications" variant="secondary">View all publications</Button></div><div className="mt-8"><PublicationGrid publications={latest.slice(0,3)}/></div></Container></section>
    <section className="bg-paper py-16"><Container><SectionHeading eyebrow="Communities" title="Domain communities for expert validation">Interdisciplinary spaces where researchers, specialists, policymakers, entrepreneurs, and practitioners can collaborate, ask questions, share discoveries, and build evidence-based solutions.</SectionHeading><div className="mt-8 grid gap-6 lg:grid-cols-2">{communities.map(c => <CommunityCard key={c.slug} community={c}/>)}</div></Container></section>
    <section className="bg-white py-16"><Container><SectionHeading eyebrow="Issue areas" title="Research agenda">Digital economy, Web4 infrastructure, research integrity, data provenance, AI governance, and sectoral transformation.</SectionHeading><div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{issueAreas.slice(0,6).map(i => <IssueAreaCard key={i.slug} issue={i}/>)}</div></Container></section>
    <section className="bg-ink py-16 text-white"><Container className="grid gap-10 lg:grid-cols-2"><SectionHeading eyebrow="Targeted AI" title="A Web4-ready infrastructure for research integrity">Targeted AI documents analytical workflows, strengthens data provenance, supports AI-assisted anomaly detection, and combines machine support with human expert validation.</SectionHeading><div className="grid gap-4 md:grid-cols-2">{["Transparent analytical workflows","Hybrid AI-human validation","Data provenance and audit trails","Open-source governance and GNU GPL logic"].map(x => <div key={x} className="rounded-2xl border border-white/15 bg-white/5 p-5 text-sm text-slate-200">{x}</div>)}</div></Container></section>
    <section className="bg-paper py-16"><Container className="grid gap-8 lg:grid-cols-2"><div><SectionHeading eyebrow="Research integrity" title="Careful by design">AI systems may reflect data limitations, methodology gaps, and hidden assumptions. The institute positions AI as a support layer for researchers and experts, not a replacement for human judgment.</SectionHeading><div className="mt-6"><NoticeBox>Community, chatbot, registration, file upload, vault, and 48-hour deletion features are backend-ready frontend prototypes in this version.</NoticeBox></div></div><div><SectionHeading eyebrow="Partners" title="Institutional network and references"/><div className="mt-6 grid gap-4">{partners.map(p => <PartnerCard key={p.name} partner={p}/>)}</div></div></Container></section>
    <section className="bg-white py-16"><Container className="grid gap-8 lg:grid-cols-2"><SectionHeading eyebrow="Newsletter" title="Follow publications and community updates">Subscribe to receive publication announcements, Targeted AI updates, and event notices. This form is a frontend MVP.</SectionHeading><NewsletterSignup /></Container></section>
    <section className="bg-paper py-16"><Container><SectionHeading eyebrow="Founders" title="Founding team"/><div className="mt-8 grid gap-6 md:grid-cols-2"><FounderCard name="Hovhannes Adajyan" role="Co-founder" bio="Policy and technology-program professional focused on digital economy, innovation systems, research infrastructure, and evidence-based public-sector transformation."/><FounderCard name="Sos Khachikyan" role="Co-founder" bio="Co-founder profile placeholder. Production use should include a verified professional biography, institutional affiliation, and areas of expertise."/></div></Container></section>
  </>;
}
