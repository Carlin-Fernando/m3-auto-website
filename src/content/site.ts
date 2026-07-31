export const site = {
  name: "M3 AUTO (PVT) LTD",
  shortName: "M3 AUTO",
  tagline: "YOUR CAR, OUR CARE, DRIVEN BY QUALITY",
  address: "NO 100, KOTUGODA ROAD, RADDOLUGAMA, 11400",
  phones: [
    { label: "076 7637 137", href: "tel:+94767637137" },
    { label: "011 226 26 96", href: "tel:+94112262696" },
  ],
  whatsapp: "https://wa.me/94767637137",
  displayEmail: "m3auto.lk@gmail.com",
  inquiryEmail: "m3auto.lk@gmail.com",
  hours: "Mon–Sat, 9:00 AM – 7:00 PM",
  socials: {
    facebook: "https://www.facebook.com/share/1BhUdyxBxR/",
    instagram: "https://www.instagram.com/m3auto.lk?igsh=OTkzbHRsZXNqbmYz",
    tiktok: "https://www.tiktok.com/@m3auto.lk?_r=1&_t=ZS-98UsvSee4bF",
  },
  mapsUrl: "https://maps.app.goo.gl/Wyk65SnByBjJQRsH7",
  logos: {
    mark: "/assets/logos/m3-mark.png",
    wordmark: "/assets/logos/m3-wordmark.png",
  },
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/parts", label: "Parts & Lubricants" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
] as const;

export const lubricantBrands = [
  { name: "Valvoline", logo: "/assets/brands/lubricants/valvoline.png" },
  { name: "Petromin", logo: "/assets/brands/lubricants/petromin.png" },
  { name: "ENI", logo: "/assets/brands/lubricants/eni.png" },
  { name: "Castrol", logo: "/assets/brands/lubricants/castrol.png" },
  { name: "Prestone", logo: "/assets/brands/lubricants/prestone.png" },
] as const;

export const sparePartBrands = [
  { name: "Toyota", logo: "/assets/brands/parts/toyota.png" },
  { name: "Suzuki", logo: "/assets/brands/parts/suzuki.png" },
  { name: "Nissan", logo: "/assets/brands/parts/nissan.png" },
  { name: "Renault", logo: "/assets/brands/parts/renault.png" },
  { name: "Mitsubishi", logo: "/assets/brands/parts/mitsubishi.png" },
  { name: "Bosch", logo: "/assets/brands/parts/bosch.png" },
  { name: "Würth", logo: "/assets/brands/parts/wurth.png" },
] as const;
