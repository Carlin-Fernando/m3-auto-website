"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { heroSlides } from "@/content/hero";
import { BlackFrame } from "@/components/BlackFrame";

export function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const slide = heroSlides[index];

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % heroSlides.length);
    }, 6000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="relative overflow-hidden border-b border-white/10">
      <div className="relative min-h-[78vh] w-full bg-black md:min-h-[86vh]">
        <BlackFrame
          key={slide.id}
          src={slide.banner}
          alt={slide.headline}
          priority={index === 0}
          aspectClassName="absolute inset-0 h-full min-h-[78vh] md:min-h-[86vh]"
          imageClassName="object-contain object-center md:object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />

        <div className="relative z-10 mx-auto flex min-h-[78vh] max-w-7xl flex-col justify-end px-4 pb-16 pt-28 sm:px-6 md:min-h-[86vh] md:justify-center md:pb-20">
          <div key={slide.id} className="hero-copy-enter max-w-2xl">
            <p className="mb-3 font-display text-sm uppercase tracking-[0.28em] text-accent-green">
              M3 AUTO
            </p>
            <h1 className="font-display text-4xl leading-[1.05] tracking-wide text-white sm:text-5xl md:text-6xl lg:text-7xl">
              {slide.headline}
            </h1>
            <div className="stripe mt-5 h-1 w-28" />
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
              {slide.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center bg-accent-red px-5 py-3 text-sm font-semibold uppercase tracking-wider text-white transition hover:brightness-110"
              >
                Book Appointment
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center border border-white/30 bg-black/40 px-5 py-3 text-sm font-semibold uppercase tracking-wider text-white transition hover:border-white hover:bg-white/10"
              >
                Our Services
              </Link>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-2">
            {heroSlides.map((item, i) => (
              <button
                key={item.id}
                type="button"
                aria-label={`Go to slide ${item.id}`}
                onClick={() => setIndex(i)}
                className={`h-1.5 transition-all ${
                  i === index ? "w-10 bg-accent-green" : "w-5 bg-white/30 hover:bg-white/60"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
