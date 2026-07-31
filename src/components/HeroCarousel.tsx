"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { heroSlides } from "@/content/hero";

export function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const slide = heroSlides[index];
  const showCopy = slide.id !== 1;

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % heroSlides.length);
    }, 6000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-black">
      <div className="relative mx-auto w-full max-w-[1920px] aspect-[21/9] min-h-[220px] sm:min-h-[280px] md:min-h-[360px]">
        <Image
          key={slide.banner}
          src={slide.banner}
          alt={slide.headline}
          fill
          priority={index === 0}
          sizes="100vw"
          className="object-contain object-center brightness-125 contrast-105"
        />

        {showCopy ? (
          <>
            {/* Darker veil only behind the copy so the rest of the banner stays bright */}
            <div className="pointer-events-none absolute left-0 top-0 h-[58%] w-[44%] bg-gradient-to-br from-black/90 via-black/65 to-transparent" />

            {/* Upper-left zone (above baked logo/slogan) */}
            <div className="absolute inset-0 z-10">
              <div className="flex h-[48%] max-w-[38%] flex-col justify-start px-3 pt-3 sm:px-5 sm:pt-5 md:max-w-[34%] md:px-8 md:pt-7 lg:px-10 lg:pt-8">
                <div key={slide.id} className="hero-copy-enter">
                  <h1 className="font-display text-[1.49rem] leading-[1.1] tracking-wide text-white [text-shadow:0_2px_18px_rgba(0,0,0,0.9)] sm:text-[1.98rem] md:text-[2.48rem] lg:text-[2.98rem]">
                    {slide.headline}
                  </h1>
                  <div className="stripe mt-2 h-0.5 w-14 sm:mt-2.5 sm:w-16 md:w-20" />
                  <p className="mt-2 max-w-xs text-[13.2px] leading-relaxed text-white [text-shadow:0_2px_14px_rgba(0,0,0,0.9)] sm:mt-2.5 sm:max-w-sm sm:text-[0.99rem] md:text-[1.16rem]">
                    {slide.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2 sm:mt-4">
                    <Link
                      href="/contact"
                      className="inline-flex items-center bg-accent-red px-2.5 py-1.5 text-[11.9px] font-semibold uppercase tracking-wider text-white transition hover:brightness-110 sm:px-3.5 sm:py-2 sm:text-[14.5px] md:text-[0.99rem]"
                    >
                      Book Appointment
                    </Link>
                    <Link
                      href="/services"
                      className="inline-flex items-center border border-white/55 bg-black/20 px-2.5 py-1.5 text-[11.9px] font-semibold uppercase tracking-wider text-white transition hover:bg-black/35 sm:px-3.5 sm:py-2 sm:text-[14.5px] md:text-[0.99rem]"
                    >
                      Our Services
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : null}

        <div className="absolute bottom-3 right-3 z-20 flex flex-wrap justify-end gap-1.5 sm:bottom-5 sm:right-6 sm:gap-2">
          {heroSlides.map((item, i) => (
            <button
              key={item.id}
              type="button"
              aria-label={`Go to slide ${item.id}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 transition-all ${
                i === index ? "w-8 bg-accent-green sm:w-10" : "w-4 bg-white/45 hover:bg-white/75 sm:w-5"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
