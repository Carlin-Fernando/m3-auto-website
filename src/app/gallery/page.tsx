import type { Metadata } from "next";
import { BlackFrame } from "@/components/BlackFrame";
import { SectionHeading } from "@/components/SectionHeading";
import { featuredServices } from "@/content/hero";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Workshop service visuals from M3 AUTO.",
};

export default function GalleryPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
      <SectionHeading
        eyebrow="Gallery"
        title="Inside the Workshop"
        description="Service moments from M3 AUTO — wash, wax, brakes, engines, interiors, oil service, and diagnostics."
      />

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {featuredServices.map((slide) => (
          <figure key={slide.id} className="border border-white/10">
            <BlackFrame
              src={slide.serviceImage!}
              alt={slide.headline}
              aspectClassName="aspect-[4/3]"
              imageClassName="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <figcaption className="border-t border-white/10 px-4 py-3 text-sm text-muted">
              {slide.headline}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
