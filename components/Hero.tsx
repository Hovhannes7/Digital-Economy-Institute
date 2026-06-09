import type { ReactNode } from "react";

import { Container } from "@/components/Container";
import { Badge } from "@/components/Badge";

export function Hero({
  eyebrow,
  title,
  subtitle,
  children,
  actions,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
  actions?: ReactNode;
}) {
  return (
    <section className="border-b border-line bg-white">
      <Container className="grid gap-10 py-16 lg:grid-cols-[1.25fr_.75fr] lg:items-start lg:py-24">
        <div>
          {eyebrow ? <Badge>{eyebrow}</Badge> : null}

          <h1 className="mt-6 max-w-5xl text-4xl font-bold tracking-tight text-ink sm:text-6xl">
            {title}
          </h1>

          {subtitle ? (
            <p className="mt-5 max-w-3xl text-xl leading-8 text-graphite">
              {subtitle}
            </p>
          ) : null}

          {children ? (
            <div className="mt-6 max-w-3xl text-base leading-8 text-steel">
              {children}
            </div>
          ) : null}

          {actions ? (
            <div className="mt-8 flex flex-wrap gap-3">{actions}</div>
          ) : null}
        </div>

        <div className="w-full self-start justify-self-start rounded-3xl border border-line bg-paper p-6 shadow-subtle">
          <p className="text-xs font-bold uppercase tracking-[.22em] text-steel">
            Institutional focus
          </p>

          <div className="mt-6 grid gap-4 text-sm text-graphite">
            {[
              "Transparent computational research",
              "Reproducible science",
              "Data provenance and audit trails",
              "Hybrid AI-human validation",
              "Evidence-based policymaking",
            ].map((x) => (
              <div
                key={x}
                className="border-l-2 border-ink bg-white px-4 py-3 shadow-subtle"
              >
                {x}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
