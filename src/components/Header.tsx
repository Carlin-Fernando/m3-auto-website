"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks, site } from "@/content/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image
            src={site.logos.mark}
            alt={site.shortName}
            width={48}
            height={48}
            className="h-11 w-11 object-contain"
            priority
          />
          <div className="leading-tight">
            <div className="font-display text-xl tracking-wide text-white sm:text-2xl">
              {site.shortName}
            </div>
            <div className="hidden text-[10px] uppercase tracking-[0.18em] text-muted sm:block">
              Driven by Quality
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-sm px-3 py-2 text-sm transition ${
                  active
                    ? "text-white"
                    : "text-muted hover:text-white"
                }`}
              >
                {link.label}
                {active ? <span className="stripe mt-1 block h-0.5 w-full" /> : null}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={site.phones[0].href}
            className="hidden rounded-sm border border-white/15 bg-white/5 px-3 py-2 text-sm font-medium text-white transition hover:border-accent-green/50 hover:bg-white/10 md:inline-flex"
          >
            {site.phones[0].label}
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center border border-white/15 text-white lg:hidden"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <div className="space-y-1.5">
              <span className={`block h-0.5 w-5 bg-white transition ${open ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`block h-0.5 w-5 bg-white transition ${open ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 w-5 bg-white transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-black lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="border-b border-white/5 py-3 text-sm text-muted hover:text-white"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a href={site.phones[0].href} className="py-3 text-sm text-accent-green">
              Call {site.phones[0].label}
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
