import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { serviceCategories } from "@/content/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Brake service, engine care, cleaning, detailing, diagnostics and more at M3 AUTO Raddolugama.",
};

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
      <SectionHeading
        eyebrow="Our Services"
        title="Complete Workshop Support"
        description="Browse everything we offer — grouped the way we work on your vehicle in the bay."
      />

      <div className="mt-12 space-y-14">
        {serviceCategories.map((category) => (
          <section
            key={category.slug}
            id={category.slug}
            className="group scroll-mt-28 border border-white/[0.08] bg-surface/60 transition duration-500 hover:border-white/20"
          >
            <div className="grid gap-0 md:grid-cols-[280px_1fr]">
              <div className="black-frame relative min-h-48 overflow-hidden md:min-h-full">
                {category.image ? (
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    sizes="280px"
                    className="media-zoom object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
                )}
              </div>
              <div className="p-6 sm:p-8">
                <h2 className="font-display text-2xl tracking-wide text-white sm:text-3xl">
                  {category.name}
                </h2>
                <div className="stripe mt-3 h-0.5 w-16" />
                <div className="mt-6 grid gap-6 sm:grid-cols-2">
                  {category.subcategories.map((sub) => (
                    <div key={sub.name}>
                      <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-accent-yellow">
                        {sub.name}
                      </h3>
                      <ul className="mt-3 space-y-2 text-sm text-muted">
                        {sub.items.map((item) => (
                          <li key={item} className="flex gap-2">
                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-green" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      <div className="mt-12 flex flex-wrap gap-3">
        <Link
          href="/contact"
          className="inline-flex bg-accent-red px-5 py-3 text-sm font-semibold uppercase tracking-wider text-white transition hover:brightness-110"
        >
          Book Appointment
        </Link>
        <Link
          href="/parts"
          className="inline-flex border border-white/25 px-5 py-3 text-sm font-semibold uppercase tracking-wider text-white transition hover:bg-white/10"
        >
          Parts & Lubricants
        </Link>
      </div>
    </div>
  );
}
