import type { Metadata } from "next";
import { Chakra_Petch, Manrope } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { site } from "@/content/site";
import "./globals.css";

const display = Chakra_Petch({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const body = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: `${site.shortName} | Auto Garage Raddolugama`,
    template: `%s | ${site.shortName}`,
  },
  description:
    "M3 AUTO (PVT) LTD — workshop services, cleaning, diagnostics, spare parts and lubricants in Raddolugama. Your car, our care, driven by quality.",
  icons: {
    icon: [
      { url: "/assets/logos/m3-mark.png", type: "image/png" },
    ],
    apple: "/assets/logos/m3-mark.png",
    shortcut: "/assets/logos/m3-mark.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} h-full`}>
      <body className="flex min-h-full flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
