"use client";
import { useState } from "react";
import Link from "next/link";
const navItems = ["/","/publications","/targeted-ai","/communities","/partners","/issues","/centers","/events","/about","/contact"].map((href) => ({ href, label: href === "/" ? "Home" : href.slice(1).split("-").map(w => w[0].toUpperCase()+w.slice(1)).join(" ") }));
export function MobileNavigation() {
  const [open, setOpen] = useState(false);
  return <div className="lg:hidden"><button type="button" onClick={() => setOpen(!open)} className="rounded-full border border-line px-4 py-2 text-sm font-semibold">Menu</button>{open ? <div className="absolute left-4 right-4 top-20 z-50 rounded-2xl border border-line bg-white p-4 shadow-editorial"><nav className="grid gap-2">{navItems.map(i => <Link key={i.href} href={i.href} onClick={() => setOpen(false)} className="rounded-xl px-3 py-2 text-sm font-semibold text-graphite hover:bg-paper">{i.label}</Link>)}</nav></div> : null}</div>;
}
