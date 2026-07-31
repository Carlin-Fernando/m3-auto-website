import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about M3 AUTO (PVT) LTD — workshop care in Raddolugama.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
      <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <SectionHeading
            eyebrow="About M3 AUTO"
            title={site.name}
            description={site.tagline}
          />
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">
            <p>
              M3 AUTO is a workshop focused on dependable vehicle care — from
              routine oil and filter service to brake work, cleaning, detailing,
              and electronic diagnostics.
            </p>
            <p>
              Based at {site.address}, we combine practical bay work with stocked
              spare parts and lubricants so common jobs do not wait on parts runs.
            </p>
            <p>
              Whether you need a body wash, interior refresh, or a scan before
              repairs, our goal is the same: clear advice, solid workmanship, and
              a vehicle that leaves ready for the road.
            </p>
          </div>
          <dl className="mt-8 grid gap-4 text-sm sm:grid-cols-2">
            <div className="border border-white/10 bg-surface p-4">
              <dt className="text-muted">Hours</dt>
              <dd className="mt-1 font-medium text-white">{site.hours}</dd>
            </div>
            <div className="border border-white/10 bg-surface p-4">
              <dt className="text-muted">Hotline</dt>
              <dd className="mt-1 font-medium text-white">{site.phones[0].label}</dd>
            </div>
          </dl>
          <Link
            href="/contact"
            className="mt-8 inline-flex bg-accent-red px-5 py-3 text-sm font-semibold uppercase tracking-wider text-white transition hover:brightness-110"
          >
            Visit / Contact Us
          </Link>
        </div>

        <div className="space-y-4">
          <div className="media-zoom-host black-frame relative aspect-[16/10]">
            <Image
              src="/assets/banners/banner-1.png"
              alt="M3 AUTO brand"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="media-zoom object-contain"
              priority
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="media-zoom-host black-frame relative aspect-square">
              <Image
                src="/assets/services/img-5.png"
                alt="Engine service"
                fill
                sizes="25vw"
                className="media-zoom object-cover"
              />
            </div>
            <div className="media-zoom-host black-frame relative aspect-square">
              <Image
                src="/assets/services/img-2.png"
                alt="Car wash"
                fill
                sizes="25vw"
                className="media-zoom object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
