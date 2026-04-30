import type { ReactNode } from "react";
export function SectionHeading({ eyebrow, title, children }: { eyebrow?: string; title: string; children?: ReactNode }) {
  return <div className="max-w-3xl">{eyebrow ? <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-accent">{eyebrow}</p> : null}<h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">{title}</h2>{children ? <div className="mt-4 text-base leading-7 text-steel">{children}</div> : null}</div>;
}
