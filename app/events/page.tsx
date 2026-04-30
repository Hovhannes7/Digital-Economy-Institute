import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { NoticeBox } from "@/components/NoticeBox";
import { SectionHeading } from "@/components/SectionHeading";
export const metadata: Metadata = { title: "Events", description: "Public lectures, research seminars, Web4 roundtables, forums, and workshops." };
const categories = ["Public lectures","Research seminars","Web4 roundtables","Digital economy forums","Policy workshops","Research integrity workshops","Community research sessions","IP and innovation protection workshops","AI & blockchain governance discussions"];
export default function EventsPage() {
  return <><Hero title="Events" subtitle="Public programs and expert sessions for research, policy, and community collaboration."/><section className="bg-paper py-16"><Container><SectionHeading title="Event categories"/><div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{categories.map(c => <article key={c} className="rounded-3xl border border-line bg-white p-6 shadow-subtle"><h2 className="text-xl font-bold">{c}</h2><p className="mt-3 text-sm leading-6 text-steel">Placeholder event category. Production use can connect this section to a CMS or calendar integration.</p></article>)}</div><div className="mt-8"><NoticeBox>Events are placeholders in this MVP. Add verified dates, speakers, venues, registration links, and moderation rules before public promotion.</NoticeBox></div></Container></section></>;
}
