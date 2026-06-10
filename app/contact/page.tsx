import type { Metadata } from "next";

import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { NoticeBox } from "@/components/NoticeBox";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact the Institute of Digital Economy for partnerships, research collaboration, media, communities, and discovery/IP inquiries.",
};

const inquiryTypes = [
  "Partnership inquiry",
  "Research collaboration",
  "Media inquiry",
  "Community membership inquiry",
  "Discovery/IP inquiry",
];

export default function ContactPage() {
  return (
    <>
      <Hero
        title="Contact"
        subtitle="Get in touch with the Institute of Digital Economy for partnerships, research collaboration, media inquiries, community membership, and institutional communication."
      />

      <section className="bg-paper py-16">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.4fr_.8fr]">
            <form className="rounded-3xl border border-line bg-white p-6 shadow-subtle">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="text-sm font-semibold">
                  Name
                  <input
                    type="text"
                    name="name"
                    className="mt-2 w-full rounded-2xl border border-line bg-paper px-4 py-3 text-sm outline-none focus:border-ink"
                    placeholder="Your name"
                  />
                </label>

                <label className="text-sm font-semibold">
                  Email
                  <input
                    type="email"
                    name="email"
                    className="mt-2 w-full rounded-2xl border border-line bg-paper px-4 py-3 text-sm outline-none focus:border-ink"
                    placeholder="your@email.com"
                  />
                </label>
              </div>

              <label className="mt-5 block text-sm font-semibold">
                Inquiry type
                <select
                  name="inquiryType"
                  className="mt-2 w-full rounded-2xl border border-line bg-paper px-4 py-3 text-sm outline-none focus:border-ink"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select inquiry type
                  </option>
                  {inquiryTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </label>

              <label className="mt-5 block text-sm font-semibold">
                Message
                <textarea
                  name="message"
                  rows={7}
                  className="mt-2 w-full rounded-2xl border border-line bg-paper px-4 py-3 text-sm outline-none focus:border-ink"
                  placeholder="Write your message here..."
                />
              </label>

              <div className="mt-6">
                <Button type="button">Send message</Button>
              </div>

              <div className="mt-5">
                <NoticeBox>
                  Contact form is a frontend prototype. For now, please contact
                  the Institute directly by email. Production use requires secure
                  form handling, spam protection, and email or CRM integration.
                </NoticeBox>
              </div>
            </form>

            <aside className="space-y-5">
              <div className="rounded-3xl border border-line bg-white p-6 shadow-subtle">
                <p className="text-xs font-bold uppercase tracking-[.2em] text-steel">
                  Institutional email
                </p>

                <a
                  href={`mailto:${siteConfig.email}`}
                  className="mt-3 block text-sm font-semibold underline underline-offset-4"
                >
                  {siteConfig.email}
                </a>

                <p className="mt-3 text-sm leading-6 text-steel">
                  For partnerships, research collaboration, media inquiries,
                  community membership, and institutional communication.
                </p>
              </div>

              {inquiryTypes.map((type) => (
                <div
                  key={type}
                  className="rounded-2xl border border-line bg-white p-4 text-sm font-semibold shadow-subtle"
                >
                  {type}
                </div>
              ))}
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
