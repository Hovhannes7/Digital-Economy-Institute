import type { ReactNode } from "react";
export function NoticeBox({ children, tone = "neutral" }: { children: ReactNode; tone?: "neutral" | "warning" }) {
  return <div className={tone === "warning" ? "rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-950" : "rounded-2xl border border-line bg-paper p-4 text-sm leading-6 text-graphite"}>{children}</div>;
}
