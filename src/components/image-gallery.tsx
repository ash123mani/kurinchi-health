"use client";

import Image from "next/image";
import { useState } from "react";

type ImageGalleryProps = {
  images: string[];
  alt: string;
  productName: string;
};

export function ImageGallery({ images, alt, productName }: ImageGalleryProps) {
  const [active, setActive] = useState(0);
  const safeImages = images.length > 0 ? images : ["/products/brand-hero.jpeg"];

  return (
    <div>
      <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] border border-line bg-cream-2 shadow-[0_30px_60px_-40px_rgba(35,33,28,0.5)]">
        <Image
          src={safeImages[active]}
          alt={`${alt} — image ${active + 1}`}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
        />
        <span className="absolute left-5 top-5 rounded-full bg-cream/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-forest backdrop-blur">
          100% Natural
        </span>
      </div>

      {safeImages.length > 1 ? (
        <div className="mt-4 flex gap-3" role="group" aria-label={`${productName} images`}>
          {safeImages.map((image, index) => (
            <button
              key={image}
              type="button"
              aria-pressed={active === index}
              aria-label={`Show image ${index + 1} of ${productName}`}
              onClick={() => setActive(index)}
              className={`relative h-20 w-20 overflow-hidden rounded-xl border-2 transition-all sm:h-24 sm:w-24 ${
                active === index
                  ? "border-forest opacity-100"
                  : "border-transparent opacity-60 hover:opacity-100"
              }`}
            >
              <Image
                src={image}
                alt=""
                fill
                sizes="96px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
