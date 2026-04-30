import type { ReactNode } from "react";
export function Badge({ children }: { children: ReactNode }) {
  return <span className="inline-flex rounded-full border border-line bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wide text-steel">{children}</span>;
}
