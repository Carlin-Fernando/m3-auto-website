import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Book a service or reach M3 AUTO in Raddolugama.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
      <SectionHeading
        eyebrow="Contact"
        title="Book a Visit or Ask a Question"
        description="Call, WhatsApp, or send an inquiry — we will confirm your appointment as soon as we can."
      />

      <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-4">
          <div className="border border-white/10 bg-surface p-5">
            <h3 className="font-display text-xl tracking-wide text-white">Workshop</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">{site.address}</p>
            <p className="mt-2 text-sm text-muted">{site.hours}</p>
            <a
              href={site.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex text-sm font-semibold text-accent-green hover:underline"
            >
              Open in Google Maps
            </a>
          </div>

          <div className="border border-white/10 bg-surface p-5">
            <h3 className="font-display text-xl tracking-wide text-white">Reach Us</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              <li>
                <a href={site.phones[0].href} className="hover:text-white">
                  {site.phones[0].label}
                </a>
              </li>
              <li>
                <a href={site.phones[1].href} className="hover:text-white">
                  {site.phones[1].label}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.displayEmail}`} className="hover:text-white">
                  {site.displayEmail}
                </a>
              </li>
              <li>
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white"
                >
                  WhatsApp {site.phones[0].label}
                </a>
              </li>
            </ul>
          </div>

          <div className="border border-white/10 bg-surface p-5">
            <h3 className="font-display text-xl tracking-wide text-white">Social</h3>
            <ul className="mt-3 flex flex-wrap gap-4 text-sm text-muted">
              <li>
                <a href={site.socials.facebook} target="_blank" rel="noreferrer" className="hover:text-white">
                  Facebook
                </a>
              </li>
              <li>
                <a href={site.socials.instagram} target="_blank" rel="noreferrer" className="hover:text-white">
                  Instagram
                </a>
              </li>
              <li>
                <a href={site.socials.tiktok} target="_blank" rel="noreferrer" className="hover:text-white">
                  TikTok
                </a>
              </li>
            </ul>
          </div>
        </div>

        <ContactForm />
      </div>
    </div>
  );
}
