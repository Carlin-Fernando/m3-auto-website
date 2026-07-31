export type HeroSlide = {
  id: number;
  banner: string;
  mobileBanner: string;
  serviceImage?: string;
  headline: string;
  description: string;
};

export const heroSlides: HeroSlide[] = [
  {
    id: 1,
    banner: "/assets/banners/banner-1.png",
    mobileBanner: "/assets/banners/mobile/m-banner-1.png",
    headline: "Driven by Quality Care",
    description:
      "Full workshop support in Raddolugama — maintenance, cleaning, diagnostics, and trusted parts under one roof",
  },
  {
    id: 2,
    banner: "/assets/banners/banner-2.png",
    mobileBanner: "/assets/banners/mobile/m-banner-2.png",
    serviceImage: "/assets/services/img-2.png",
    headline: "Body Wash & Undercarriage Care",
    description:
      "Thorough exterior cleaning for cars, SUVs, and vans, including under wash and engine bay cleaning",
  },
  {
    id: 3,
    banner: "/assets/banners/banner-3.png",
    mobileBanner: "/assets/banners/mobile/m-banner-3.png",
    serviceImage: "/assets/services/img-3.png",
    headline: "Waxing & Paint Protection",
    description:
      "Exterior body waxing and finish care that restores shine and helps protect your paintwork",
  },
  {
    id: 4,
    banner: "/assets/banners/banner-4.png",
    mobileBanner: "/assets/banners/mobile/m-banner-4.png",
    serviceImage: "/assets/services/img-4.png",
    headline: "Brake System Specialists",
    description:
      "Caliper pin service, pad replacement, washer work, and brake pump care for confident stopping power",
  },
  {
    id: 5,
    banner: "/assets/banners/banner-5.png",
    mobileBanner: "/assets/banners/mobile/m-banner-5.png",
    serviceImage: "/assets/services/img-5.png",
    headline: "Engine Service & Repair",
    description:
      "Tune-ups, mount work, and mechanical engine care to keep performance reliable",
  },
  {
    id: 6,
    banner: "/assets/banners/banner-6.png",
    mobileBanner: "/assets/banners/mobile/m-banner-6.png",
    serviceImage: "/assets/services/img-6.png",
    headline: "Interior Cleaning & Refresh",
    description:
      "From cabin vacuum to deep chemical cleaning of seats, dash, glass, hood, and carpets",
  },
  {
    id: 7,
    banner: "/assets/banners/banner-7.png",
    mobileBanner: "/assets/banners/mobile/m-banner-7.png",
    serviceImage: "/assets/services/img-7.png",
    headline: "Engine Oil & Filter Service",
    description:
      "Oil changes and filter replacement for cars, SUVs, vans, and bikes — clean oil, lasting protection",
  },
  {
    id: 8,
    banner: "/assets/banners/banner-8.png",
    mobileBanner: "/assets/banners/mobile/m-banner-8.png",
    serviceImage: "/assets/services/img-8.png",
    headline: "Electronic Vehicle Diagnostics",
    description:
      "Professional scanning to identify faults quickly and guide the right repair the first time",
  },
];

export const featuredServices = heroSlides.filter((slide) => slide.serviceImage);
