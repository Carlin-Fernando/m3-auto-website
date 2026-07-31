type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow ? (
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.28em] text-accent-green">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-3xl tracking-wide text-white sm:text-4xl md:text-5xl">
        {title}
      </h2>
      <div className={`stripe mt-4 h-1 w-24 ${align === "center" ? "mx-auto" : ""}`} />
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-muted">{description}</p>
      ) : null}
    </div>
  );
}
