import Image from "next/image";

type BrandLogoProps = {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
};

/** Partner logos sit on a white plate with 2px padding per brand rules. */
export function BrandLogo({
  src,
  alt,
  className = "",
  imgClassName = "h-8 w-auto object-contain sm:h-10",
}: BrandLogoProps) {
  return (
    <span className={`logo-plate ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={160}
        height={64}
        className={imgClassName}
      />
    </span>
  );
}
