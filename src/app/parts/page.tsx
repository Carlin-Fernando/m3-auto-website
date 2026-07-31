import type { Metadata } from "next";
import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import { SectionHeading } from "@/components/SectionHeading";
import { goodsCategories } from "@/content/goods";

export const metadata: Metadata = {
  title: "Parts & Lubricants",
  description:
    "Air filters, oil filters, wiper blades, lubricants and car care products stocked at M3 AUTO.",
};

export default function PartsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
      <SectionHeading
        eyebrow="Parts & Lubricants"
        title="Stocked for Everyday Service Needs"
        description="Filters, wipers, engine oils, and care products from brands we trust in the workshop."
      />

      <div className="mt-12 space-y-10">
        {goodsCategories.map((category) => (
          <section
            key={category.slug}
            id={category.slug}
            className="scroll-mt-28 border border-white/10 bg-surface/60 p-6 sm:p-8"
          >
            <h2 className="font-display text-2xl tracking-wide text-white sm:text-3xl">
              {category.name}
            </h2>
            <div className="stripe mt-3 h-0.5 w-16" />

            <div className="mt-8 space-y-8">
              {category.brands.map((brand) => (
                <div key={brand.key}>
                  <div className="mb-3 flex flex-wrap items-center gap-3">
                    {brand.logo ? (
                      <BrandLogo
                        src={brand.logo}
                        alt={brand.name}
                        imgClassName="h-7 w-auto object-contain sm:h-8"
                      />
                    ) : null}
                    <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-accent-yellow">
                      {brand.name}
                    </h3>
                  </div>
                  <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                    {brand.items.map((item) => (
                      <li
                        key={item}
                        className="border border-white/5 bg-black/40 px-3 py-2 text-sm text-muted"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="mt-12">
        <Link
          href="/contact"
          className="inline-flex bg-accent-red px-5 py-3 text-sm font-semibold uppercase tracking-wider text-white transition hover:brightness-110"
        >
          Ask About Availability
        </Link>
      </div>
    </div>
  );
}
