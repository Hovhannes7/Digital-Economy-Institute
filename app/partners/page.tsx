import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { NoticeBox } from "@/components/NoticeBox";
import { PartnerCard } from "@/components/PartnerCard";
import { SectionHeading } from "@/components/SectionHeading";
import { partners } from "@/lib/partners";
export const metadata: Metadata = { title: "Partners", description: "Partner, membership, reference, and ecosystem-resource cards for Digital Economy Institute." };
export default function PartnersPage() {
  return <><Hero title="Partners" subtitle="Institutional relationships, memberships, reference institutions, and ecosystem resources for digital-economy research and policy collaboration."/><section className="bg-paper py-16"><Container><NoticeBox tone="warning">“Digital Economy Institute states that it is a member of the Global Trade and Innovation Policy Alliance (GTIPA). Please verify membership status before public launch.”</NoticeBox><div className="mt-10"><SectionHeading title="Organizations"><p>This page distinguishes confirmed partners, memberships, reference organizations, and ecosystem resources. Do not overclaim partnership unless the relationship is legally confirmed.</p></SectionHeading></div><div className="mt-8 grid gap-6 md:grid-cols-2">{partners.map(p => <PartnerCard key={p.name} partner={p}/>)}</div></Container></section></>;
}
