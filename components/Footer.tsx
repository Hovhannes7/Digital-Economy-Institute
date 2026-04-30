import Link from "next/link";
import { Container } from "@/components/Container";
export function Footer() {
  const links = [["Publications","/publications"],["Targeted AI","/targeted-ai"],["Communities","/communities"],["Issues","/issues"],["Partners","/partners"],["Contact","/contact"]];
  return <footer className="border-t border-line bg-ink text-white"><Container className="grid gap-8 py-12 md:grid-cols-[1.3fr_1fr]"><div><p className="text-sm font-bold uppercase tracking-[.22em]">Digital Economy Institute</p><p className="mt-4 max-w-xl text-sm leading-6 text-slate-300">Research, policy, communities, and Web4 infrastructure for a trustworthy digital economy.</p><p className="mt-6 text-xs text-slate-400">© {new Date().getFullYear()} Digital Economy Institute.</p></div><div className="grid grid-cols-2 gap-3">{links.map(([label, href]) => <Link key={href} href={href} className="text-sm text-slate-300 hover:text-white">{label}</Link>)}</div></Container></footer>;
}
