"use client";

import { useState } from "react";
import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/publications", label: "Publications" },
  { href: "/communities", label: "Communities" },
  // { href: "/partners", label: "Partners" },
  // { href: "/issues", label: "Issues" },
  { href: "/events", label: "Events" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function MobileNavigation() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="rounded-full border border-line px-4 py-2 text-sm font-semibold"
      >
        Menu
      </button>

      {open ? (
        <div className="absolute left-4 right-4 top-20 z-50 rounded-2xl border border-line bg-white p-4 shadow-editorial">
          <nav className="grid gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2 text-sm font-semibold text-graphite hover:bg-paper"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </div>
  );
}
