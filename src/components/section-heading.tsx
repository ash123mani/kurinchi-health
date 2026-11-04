import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  secondaryTitle?: string;
  secondaryLang?: "en" | "ta";
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  secondaryTitle,
  secondaryLang = "ta",
  description,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  return (
    <div
      className={`${align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"} ${className}`}
    >
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <h2 className="display mt-4 text-3xl text-forest sm:text-4xl md:text-[42px]">
        {title}
      </h2>
      {secondaryTitle ? (
        <p
          lang={secondaryLang}
          className={
            secondaryLang === "ta"
              ? "tamil mt-2 text-lg text-ink-2"
              : "mt-2 text-sm font-semibold uppercase tracking-[0.12em] text-ink-3"
          }
        >
          {secondaryTitle}
        </p>
      ) : null}
      {description ? (
        <p className="mt-4 text-[15px] leading-7 text-ink-2 sm:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}
