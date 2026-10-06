"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { dishSlides } from "@/data/media";

export default function DishSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % dishSlides.length);
    }, 4500);
    return () => clearInterval(id);
  }, []);

  const slide = dishSlides[index];

  return (
    <section className="relative w-full aspect-[16/10] md:aspect-[21/9] max-h-[560px] overflow-hidden bg-[#1a110c]">
      {dishSlides.map((s, i) => (
        <div
          key={s.src}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            i === index ? "opacity-100 z-[1]" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={s.src}
            alt={s.title}
            fill
            quality={92}
            className="object-cover brightness-105"
            sizes="100vw"
            priority={i === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/20 to-black/10" />
        </div>
      ))}

      <div className="absolute inset-0 z-[2] flex flex-col items-center justify-end pb-10 md:pb-14 px-5 text-center">
        <p className="jp text-sm mb-2" style={{ color: "rgba(255,255,255,0.92)" }}>
          {slide.jp}
        </p>
        <h2
          className="text-[clamp(1.6rem,4vw,2.4rem)] font-semibold tracking-[0.04em] mb-4"
          style={{ color: "#ffffff", textShadow: "0 2px 12px rgba(0,0,0,0.4)" }}
        >
          {slide.title}
        </h2>
        <Link href={slide.href} className="btn-outline-light inline-flex justify-center mb-6">
          View Menu
        </Link>

        <div className="flex gap-2">
          {dishSlides.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index ? "w-8 bg-white" : "w-2 bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
