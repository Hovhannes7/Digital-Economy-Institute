import Link from "next/link";

import { Container } from "@/components/Container";
import { MobileNavigation } from "@/components/MobileNavigation";

const nav = [
  ["Home", "/"],
  ["Publications", "/publications"],
  ["Communities", "/communities"],
  // ["Partners", "/partners"],
  // ["Issues", "/issues"],
  ["Events", "/events"],
  ["About", "/about"],
  ["Contact", "/contact"],
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur">
      <Container className="flex h-20 items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-ink text-sm font-black">
            IoDE
          </span>
          <span className="hidden text-sm font-bold uppercase tracking-[.18em] sm:inline">
            Institute of Digital Economy
          </span>
        </Link>

        <nav className="hidden items-center gap-5 lg:flex">
          {nav.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="text-sm font-semibold text-graphite hover:text-accent"
            >
              {label}
            </Link>
          ))}
        </nav>

        <MobileNavigation />
      </Container>
    </header>
  );
}
