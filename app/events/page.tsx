import type { Metadata } from "next";
import Image from "next/image";

import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { NoticeBox } from "@/components/NoticeBox";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Public programs and expert sessions for research, policy, and community collaboration.",
};

const categories = [
  "Public lectures",
  "Research seminars",
  "Web4 roundtables",
  "Digital economy forums",
  "Policy workshops",
  "Research integrity workshops",
  "Community research sessions",
  "IP and innovation protection workshops",
  "AI & blockchain governance discussions",
];

export default function EventsPage() {
  return (
    <>
      <Hero
        title="Events"
        subtitle="Public programs and expert sessions for research, policy, and community collaboration."
      >
        <div className="mt-6 max-w-3xl">
          <Image
            src="/images/events-page-image.webp"
            alt="Public programs and expert sessions for research, policy, and community collaboration"
            width={1672}
            height={941}
            priority
            unoptimized
            className="h-auto w-full rounded-3xl border border-line bg-white shadow-subtle"
          />
        </div>
      </Hero>

      <section className="bg-paper py-16">
        <Container>
          <div className="mb-8 rounded-3xl border border-line bg-white p-6 shadow-subtle">
            <h2 className="text-xl font-bold">Programs and expert sessions</h2>
            <p className="mt-3 text-sm leading-6 text-steel">
              The Events section will present public programs, research
              seminars, expert sessions, policy workshops, forums, and
              community-based discussions organized or supported by the
              Institute of Digital Economy.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <div
                key={category}
                className="rounded-3xl border border-line bg-white p-6 shadow-subtle"
              >
                <h2 className="text-xl font-bold">{category}</h2>
                <p className="mt-3 text-sm leading-7 text-steel">
                  Placeholder event category. Production use can connect this
                  section to a CMS, calendar integration, registration form, or
                  event management workflow.
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <NoticeBox>
              Events are placeholders in this MVP. Add verified dates, speakers,
              venues, registration links, participation rules, and moderation
              guidelines before public promotion.
            </NoticeBox>
          </div>
        </Container>
      </section>
    </>
  );
}
