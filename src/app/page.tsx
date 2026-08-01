import Image from "next/image";
import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import { HeroCarousel } from "@/components/HeroCarousel";
import { SectionHeading } from "@/components/SectionHeading";
import { featuredServices } from "@/content/hero";
import { lubricantBrands, site, sparePartBrands } from "@/content/site";

export default function HomePage() {
  return (
    <>
      <HeroCarousel />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
        <SectionHeading
          eyebrow="Specialized Solutions"
          title="Workshop Care Built Around Your Vehicle"
          description="From wash and detailing to brakes, engines, oil service, and diagnostics — practical care with quality parts and lubricants."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {featuredServices.map((service, index) => (
            <Link
              key={service.id}
              href="/services"
              className="group reveal border border-white/[0.08] bg-surface/80 transition duration-500 hover:border-accent-green/35 hover:bg-surface-elevated"
              style={{ animationDelay: `${index * 70}ms` }}
            >
              <div className="black-frame relative aspect-[4/3] overflow-hidden">
                <Image
                  src={service.serviceImage!}
                  alt={service.headline}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="media-zoom object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-xl tracking-wide text-white transition group-hover:text-accent-green">
                  {service.headline}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {service.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-white/[0.08] bg-[#050505]">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 sm:py-24 md:grid-cols-2 md:items-center">
          <div>
            <SectionHeading
              eyebrow="Your Vehicle, Our Care"
              title={site.tagline}
              description="M3 AUTO (PVT) LTD serves Raddolugama with hands-on workshop support, stocked filters and lubricants, and clear communication from drop-off to drive-out."
            />
            <Link
              href="/about"
              className="btn-ghost mt-8 inline-flex border border-white/25 px-5 py-3 text-sm font-semibold uppercase tracking-wider text-white hover:border-white hover:bg-white/10"
            >
              Read Our Story
            </Link>
          </div>
          <div className="media-zoom-host black-frame relative aspect-[16/11]">
            <Image
              src="/assets/services/car-scanning.png"
              alt="M3 Auto workshop diagnostics"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="media-zoom object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
        <SectionHeading
          eyebrow="Trusted Brands"
          title="Lubricants & Spare Parts We Stock"
          description="Quality oils and replacement parts from brands your vehicle depends on."
          align="center"
        />

        <div className="mt-12">
          <p className="mb-5 text-center text-xs uppercase tracking-[0.28em] text-muted">
            Lubricants
          </p>
          <div className="flex flex-wrap items-center justify-center gap-5">
            {lubricantBrands.map((brand) => (
              <BrandLogo key={brand.name} src={brand.logo} alt={brand.name} />
            ))}
          </div>
        </div>

        <div className="mt-14">
          <p className="mb-5 text-center text-xs uppercase tracking-[0.28em] text-muted">
            Spare Parts
          </p>
          <div className="flex flex-wrap items-center justify-center gap-5">
            {sparePartBrands.map((brand) => (
              <BrandLogo key={brand.name} src={brand.logo} alt={brand.name} />
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/parts"
            className="inline-flex text-sm font-semibold uppercase tracking-wider text-accent-green transition hover:tracking-[0.2em]"
          >
            Browse Parts & Lubricants
          </Link>
        </div>
      </section>

      <section className="border-t border-white/[0.08] bg-surface">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 py-16 sm:px-6 md:flex-row md:items-center">
          <div>
            <h2 className="font-display text-3xl tracking-wide text-white sm:text-4xl">
              Ready for a Service?
            </h2>
            <p className="mt-2 text-muted">
              Expert care · Fast turnaround · {site.hours}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="btn-primary inline-flex bg-accent-red px-5 py-3 text-sm font-semibold uppercase tracking-wider text-white"
            >
              Request Appointment
            </Link>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="btn-ghost inline-flex border border-white/25 px-5 py-3 text-sm font-semibold uppercase tracking-wider text-white hover:bg-white/10"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
