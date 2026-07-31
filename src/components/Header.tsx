"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  FacebookIcon,
  InstagramIcon,
  LocationIcon,
  PhoneIcon,
  TikTokIcon,
} from "@/components/icons";
import { navLinks, site } from "@/content/site";

const iconLinkClass =
  "inline-flex h-9 w-9 shrink-0 items-center justify-center border border-white/20 text-white transition hover:border-white hover:bg-white hover:text-black";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050505]">
      <div className="flex w-full items-center gap-3 px-3 py-3 sm:px-5 lg:gap-4 lg:px-8">
        {/* Logo — left */}
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2.5"
          onClick={() => setOpen(false)}
        >
          <Image
            src={site.logos.mark}
            alt={site.shortName}
            width={52}
            height={52}
            className="h-11 w-11 object-contain lg:h-12 lg:w-12"
            priority
          />
          <div className="leading-tight">
            <div className="font-display text-xl tracking-wide whitespace-nowrap text-white lg:text-2xl">
              {site.shortName}
            </div>
            <div className="hidden text-[10px] uppercase tracking-[0.18em] text-muted sm:block">
              Driven by Quality
            </div>
          </div>
        </Link>

        {/* Menu — center, uses remaining space */}
        <nav className="hidden min-w-0 flex-1 items-center justify-center gap-0.5 xl:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`whitespace-nowrap px-2.5 py-2 text-[15px] font-medium tracking-wide transition 2xl:px-3.5 2xl:text-lg ${
                  active ? "text-white" : "text-white/70 hover:text-white"
                }`}
              >
                {link.label}
                {active ? <span className="stripe mt-1 block h-0.5 w-full" /> : null}
              </Link>
            );
          })}
        </nav>

        {/* Socials + phone — right, never shrink/wrap */}
        <div className="ml-auto hidden shrink-0 items-center gap-2 md:flex">
          <a
            href={site.socials.facebook}
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
            className={iconLinkClass}
          >
            <FacebookIcon />
          </a>
          <a
            href={site.socials.instagram}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className={iconLinkClass}
          >
            <InstagramIcon />
          </a>
          <a
            href={site.socials.tiktok}
            target="_blank"
            rel="noreferrer"
            aria-label="TikTok"
            className={iconLinkClass}
          >
            <TikTokIcon />
          </a>
          <a
            href={site.mapsUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Location"
            className={iconLinkClass}
          >
            <LocationIcon />
          </a>

          <a
            href={site.phones[0].href}
            className="ml-1 inline-flex shrink-0 items-center gap-2 whitespace-nowrap border border-white/20 px-3 py-1.5 text-white transition hover:border-white hover:bg-white hover:text-black"
          >
            <PhoneIcon className="h-4 w-4 shrink-0 fill-current" />
            <span className="text-sm font-semibold tracking-wide lg:text-base">
              {site.phones[0].label}
            </span>
          </a>
        </div>

        <button
          type="button"
          className="ml-auto inline-flex h-10 w-10 shrink-0 items-center justify-center border border-white/15 text-white md:ml-0 xl:hidden"
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

      {open ? (
        <div className="border-t border-white/10 bg-black xl:hidden">
          <nav className="flex flex-col px-4 py-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="border-b border-white/5 py-3 text-base text-muted hover:text-white"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-wrap gap-2 py-4">
              <a href={site.socials.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className={iconLinkClass}>
                <FacebookIcon />
              </a>
              <a href={site.socials.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className={iconLinkClass}>
                <InstagramIcon />
              </a>
              <a href={site.socials.tiktok} target="_blank" rel="noreferrer" aria-label="TikTok" className={iconLinkClass}>
                <TikTokIcon />
              </a>
              <a href={site.mapsUrl} target="_blank" rel="noreferrer" aria-label="Location" className={iconLinkClass}>
                <LocationIcon />
              </a>
              <a href={site.phones[0].href} className={iconLinkClass} aria-label="Call">
                <PhoneIcon />
              </a>
            </div>
            <a href={site.phones[0].href} className="pb-2 text-base whitespace-nowrap text-accent-green">
              {site.phones[0].label}
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
