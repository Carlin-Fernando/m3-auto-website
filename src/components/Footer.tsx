import Image from "next/image";
import Link from "next/link";
import { navLinks, site } from "@/content/site";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-white/10 bg-black">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src={site.logos.mark}
              alt={site.shortName}
              width={56}
              height={56}
              className="h-14 w-14 object-contain"
            />
            <div>
              <div className="font-display text-2xl tracking-wide">{site.shortName}</div>
              <div className="stripe mt-2 h-0.5 w-24" />
            </div>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
            {site.tagline}. Workshop care, genuine parts, and trusted lubricants in Raddolugama.
          </p>
        </div>

        <div>
          <h3 className="font-display text-lg tracking-wide text-white">Navigate</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg tracking-wide text-white">Workshop</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            <li>{site.address}</li>
            <li>
              <a href={site.phones[0].href} className="hover:text-white">
                {site.phones[0].label}
              </a>
              {" · "}
              <a href={site.phones[1].href} className="hover:text-white">
                {site.phones[1].label}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.displayEmail}`} className="hover:text-white">
                {site.displayEmail}
              </a>
            </li>
            <li>{site.hours}</li>
            <li className="flex flex-wrap gap-3 pt-2">
              <a href={site.socials.facebook} target="_blank" rel="noreferrer" className="hover:text-white">
                Facebook
              </a>
              <a href={site.socials.instagram} target="_blank" rel="noreferrer" className="hover:text-white">
                Instagram
              </a>
              <a href={site.socials.tiktok} target="_blank" rel="noreferrer" className="hover:text-white">
                TikTok
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-muted">
        © {new Date().getFullYear()} {site.name}. All rights reserved.
      </div>
    </footer>
  );
}
