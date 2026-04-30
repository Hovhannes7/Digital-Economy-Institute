import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
export function Button({ children, href, variant = "primary", type = "button", className }: { children: ReactNode; href?: string; variant?: "primary" | "secondary" | "ghost"; type?: "button" | "submit" | "reset"; className?: string }) {
  const styles = {
    primary: "border-ink bg-ink text-white hover:bg-graphite",
    secondary: "border-line bg-white text-ink hover:border-ink",
    ghost: "border-transparent bg-transparent text-ink hover:bg-paper"
  };
  const classes = cn("inline-flex items-center justify-center rounded-full border px-5 py-2.5 text-sm font-semibold transition", styles[variant], className);
  return href ? <Link href={href} className={classes}>{children}</Link> : <button type={type} className={classes}>{children}</button>;
}
