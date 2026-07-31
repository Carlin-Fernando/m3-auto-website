import Image from "next/image";
import type { CSSProperties } from "react";

type BlackFrameProps = {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  sizes?: string;
  aspectClassName?: string;
  style?: CSSProperties;
};

/** Black box wrapper so uneven banner/service image sizes stay visually consistent. */
export function BlackFrame({
  src,
  alt,
  className = "",
  imageClassName = "object-contain",
  priority = false,
  sizes = "100vw",
  aspectClassName = "aspect-[21/9]",
  style,
}: BlackFrameProps) {
  return (
    <div
      className={`black-frame relative w-full ${aspectClassName} ${className}`}
      style={style}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={imageClassName}
      />
    </div>
  );
}
