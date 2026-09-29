import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";

import { getAllPublications } from "@/lib/publications";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Public programs and expert sessions for research, policy, and community collaboration.",
};

const categories = [
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
  const publicLectures = getAllPublications().filter(
    (publication) => publication.type === "Event"
  );

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

          {/* PUBLIC LECTURES */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight">
              Public lectures
            </h2>

            <p className="mt-3 max-w-3xl text-base leading-7 text-steel">
              Public programs, lectures, training initiatives, and educational
              activities organized or coordinated by the Institute of Digital
              Economy and its partners.
            </p>

            <div className="mt-8 grid gap-8 md:grid-cols-2">
              {publicLectures.map((event) => (
                <article
                  key={event.slug}
                  className="overflow-hidden rounded-3xl border border-line bg-white shadow-subtle"
                >
                  <Link href={`/publications/${event.slug}`}>
                    <Image
                      src={`/images/${event.slug}.webp`}
                      alt={event.title}
                      width={1600}
                      height={900}
                      className="h-auto w-full"
                    />
                  </Link>

                  <div className="p-6">
                    <p className="text-sm font-semibold text-steel">
                      {formatDate(event.date)}
                    </p>

                    <h3 className="mt-3 text-2xl font-bold leading-tight">
                      <Link
                        href={`/publications/${event.slug}`}
                        className="transition hover:text-steel"
                      >
                        {event.title}
                      </Link>
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-steel">
                      {event.summary}
                    </p>

                    <Link
                      href={`/publications/${event.slug}`}
                      className="mt-5 inline-flex text-sm font-bold underline underline-offset-4"
                    >
                      Read more →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* OTHER EVENT CATEGORIES */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold tracking-tight">
              Other event formats
            </h2>

            <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {categories.map((category) => (
                <div
                  key={category}
                  className="rounded-3xl border border-line bg-white p-6 shadow-subtle"
                >
                  <h3 className="text-xl font-bold">{category}</h3>

                  <p className="mt-3 text-sm leading-7 text-steel">
                    New programs and announcements will be published here.
                  </p>
                </div>
              ))}
            </div>
          </div>

        </Container>
      </section>
    </>
  );
}
