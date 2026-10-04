"use client";

import Link from "next/link";
import Image from "next/image";
import { formatPrice, type Dish } from "@/data/menu";
import { useCart } from "@/context/CartContext";

export default function MenuCard({ dish }: { dish: Dish }) {
  const { addItem } = useCart();

  return (
    <article className="group flex flex-col h-full bg-white border border-[var(--border)] overflow-hidden shadow-md hover:shadow-lg hover:border-[#9a1515]/40 transition-all rounded-[1.25rem]">
      <Link
        href={`/menu/dish/${dish.slug}`}
        className="relative block w-full aspect-[4/3] overflow-hidden shrink-0"
      >
        <Image
          src={dish.image}
          alt={dish.name}
          fill
          quality={85}
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {dish.popular && (
          <span className="absolute top-3 left-3 bg-[#9a1515] text-white text-[0.65rem] tracking-wider uppercase px-2.5 py-1 soft-pill font-bold shadow-sm">
            Popular
          </span>
        )}
        {dish.vegetarian && !dish.popular && (
          <span className="absolute top-3 left-3 bg-[#1b5e20] text-white text-[0.65rem] tracking-wider uppercase px-2.5 py-1 soft-pill font-bold shadow-sm">
            Veg
          </span>
        )}
      </Link>

      <div className="flex flex-col flex-1 p-4 md:p-5">
        <div className="flex items-start justify-between gap-3 mb-2">
          <Link href={`/menu/dish/${dish.slug}`} className="min-w-0 flex-1">
            <h2
              className="text-[1.1rem] md:text-[1.2rem] font-bold text-[#1a1410] leading-snug hover:text-[#9a1515] transition-colors line-clamp-2"
              style={{ fontFamily: "var(--font-display), Georgia, serif" }}
            >
              {dish.name}
            </h2>
          </Link>
          <button
            type="button"
            onClick={() =>
              addItem({
                id: dish.id,
                slug: dish.slug,
                name: dish.name,
                price: dish.price,
                image: dish.image,
              })
            }
            className="inline-flex items-center justify-center w-9 h-9 shrink-0 soft-pill border-2 border-[#1a1410]/25 text-[#9a1515] text-xl font-bold hover:bg-[#9a1515] hover:text-white hover:border-[#9a1515] transition-colors"
            aria-label={`Add ${dish.name} to cart`}
          >
            +
          </button>
        </div>

        <p className="text-sm text-[#4a4038] leading-relaxed line-clamp-2 mb-4 flex-1 font-medium">
          {dish.description}
        </p>

        <p className="text-[#9a1515] font-bold text-base tracking-wide">
          {formatPrice(dish.price)}
        </p>
      </div>
    </article>
  );
}
