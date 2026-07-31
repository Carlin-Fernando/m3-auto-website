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
      <div className="relative mx-auto w-full max-w-[1920px] h-[min(82vh,680px)] min-h-[480px] md:h-auto md:min-h-[360px] md:aspect-[21/9]">
        {/* Mobile-only banners */}
        <Image
          key={`m-${slide.mobileBanner}`}
          src={slide.mobileBanner}
          alt={slide.headline}
          fill
          priority={index === 0}
          sizes="100vw"
          className="object-contain object-center brightness-125 contrast-105 md:hidden"
        />
        {/* Desktop banners */}
        <Image
          key={`d-${slide.banner}`}
          src={slide.banner}
          alt={slide.headline}
          fill
          priority={index === 0}
          sizes="100vw"
          className="hidden object-contain object-center brightness-125 contrast-105 md:block"
        />

        {showCopy ? (
          <>
            {/* Soft veil behind mobile copy only (above logo zone) */}
            <div className="pointer-events-none absolute inset-x-0 bottom-[22%] top-[35%] bg-gradient-to-t from-black/70 via-black/35 to-transparent md:hidden" />
            {/* Desktop: upper-left veil */}
            <div className="pointer-events-none absolute left-0 top-0 hidden h-[58%] w-[44%] bg-gradient-to-br from-black/90 via-black/65 to-transparent md:block" />

            <div className="absolute inset-0 z-10">
              {/*
                Mobile copy: anchored 30% up from the bottom so baked logo stays clear
              */}
              <div className="absolute inset-x-0 bottom-[30%] px-4 md:hidden">
                <div key={`m-${slide.id}`} className="hero-copy-enter max-w-[20rem]">
                  <h1 className="font-display text-[1.65rem] leading-[1.1] tracking-wide text-white [text-shadow:0_2px_18px_rgba(0,0,0,0.9)]">
                    {slide.headline}
                  </h1>
                  <div className="stripe mt-2.5 h-0.5 w-16" />
                  <p className="mt-2.5 text-[0.95rem] leading-relaxed text-white [text-shadow:0_2px_14px_rgba(0,0,0,0.9)]">
                    {slide.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Link
                      href="/contact"
                      className="inline-flex items-center bg-accent-red px-3.5 py-2 text-xs font-semibold uppercase tracking-wider text-white"
                    >
                      Book Appointment
                    </Link>
                    <Link
                      href="/services"
                      className="inline-flex items-center border border-white/55 bg-black/30 px-3.5 py-2 text-xs font-semibold uppercase tracking-wider text-white"
                    >
                      Our Services
                    </Link>
                  </div>
                </div>
              </div>

              {/* Desktop copy — upper-left above baked brand mark */}
              <div className="hidden h-[48%] max-w-[38%] flex-col justify-start px-5 pt-5 md:flex md:max-w-[34%] md:px-8 md:pt-7 lg:px-10 lg:pt-8">
                <div key={`d-${slide.id}`} className="hero-copy-enter">
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

        <div className="absolute bottom-3 left-4 z-20 flex flex-wrap gap-1.5 md:left-auto md:right-6 sm:bottom-5 sm:gap-2">
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
