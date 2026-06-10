import type { Metadata } from "next";

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
            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              className="rounded-3xl border border-line bg-white p-6 shadow-subtle"
            >
              <input
                type="hidden"
                name="access_key"
                value="a0db1521-4b14-4c5c-bad8-190f53b05861"
              />

              <input
                type="hidden"
                name="subject"
                value="New message from Institute of Digital Economy website"
              />

              <input
                type="hidden"
                name="from_name"
                value="Institute of Digital Economy Website"
              />

              <input
                type="hidden"
                name="redirect"
                value="https://digital-economy-institute.org/contact"
              />

              <input
                type="checkbox"
                name="botcheck"
                className="hidden"
                style={{ display: "none" }}
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="text-sm font-semibold">
                  Name
                  <input
                    type="text"
                    name="name"
                    required
                    className="mt-2 w-full rounded-2xl border border-line bg-paper px-4 py-3 text-sm outline-none focus:border-ink"
                    placeholder="Your name"
                  />
                </label>

                <label className="text-sm font-semibold">
                  Email
                  <input
                    type="email"
                    name="email"
                    required
                    className="mt-2 w-full rounded-2xl border border-line bg-paper px-4 py-3 text-sm outline-none focus:border-ink"
                    placeholder="your@email.com"
                  />
                </label>
              </div>

              <label className="mt-5 block text-sm font-semibold">
                Inquiry type
                <select
                  name="inquiry_type"
                  required
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
                  required
                  rows={7}
                  className="mt-2 w-full rounded-2xl border border-line bg-paper px-4 py-3 text-sm outline-none focus:border-ink"
                  placeholder="Write your message here..."
                />
              </label>

              <div className="mt-6">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-full border border-ink bg-ink px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-graphite"
                >
                  Send message
                </button>
              </div>

              <div className="mt-5">
                <NoticeBox>
                  Messages submitted through this form will be delivered to the
                  Institute’s email inbox. You can also contact us directly by
                  email.
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
