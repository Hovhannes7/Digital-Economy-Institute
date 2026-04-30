import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { NewsletterSignup } from "@/components/NewsletterSignup";
export const metadata: Metadata = { title: "Newsletter", description: "Subscribe to Digital Economy Institute publication, community, and event updates." };
export default function NewsletterPage() {
  return <><Hero title="Newsletter" subtitle="Receive publication announcements, Targeted AI updates, community news, events, and partner updates."/><section className="bg-paper py-16"><Container className="max-w-4xl"><NewsletterSignup full/></Container></section></>;
}
