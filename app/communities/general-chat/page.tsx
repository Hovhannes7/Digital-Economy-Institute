import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { CrossCommunityChatMock } from "@/components/CrossCommunityChatMock";
import { Hero } from "@/components/Hero";
export const metadata: Metadata = { title: "Cross-community Chat", description: "Frontend prototype for cross-community research discussion." };
export default function GeneralChatPage() {
  return <><Hero title="Cross-community Chat" subtitle="A shared frontend prototype for research questions and collaboration between Digital Economy Institute communities."/><section className="bg-paper py-16"><Container><CrossCommunityChatMock/></Container></section></>;
}
