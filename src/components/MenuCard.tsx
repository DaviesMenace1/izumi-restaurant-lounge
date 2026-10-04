"use client";

import Link from "next/link";
import Image from "next/image";
import { formatPrice, type Dish } from "@/data/menu";
import { useCart } from "@/context/CartContext";

export default function MenuCard({ dish }: { dish: Dish }) {
  const { addItem } = useCart();

  return (
    <article className="group flex flex-col h-full bg-white border border-[var(--border)] overflow-hidden shadow-md hover:shadow-lg hover:border-[#b71c1c]/35 transition-all rounded-[1.25rem]">
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
          <span className="absolute top-3 left-3 bg-[#b71c1c] text-white text-[0.65rem] tracking-wider uppercase px-2.5 py-1 soft-pill font-semibold shadow-sm">
            Popular
          </span>
        )}
        {dish.vegetarian && !dish.popular && (
          <span className="absolute top-3 left-3 bg-[#2e7d32] text-white text-[0.65rem] tracking-wider uppercase px-2.5 py-1 soft-pill font-semibold shadow-sm">
            Veg
          </span>
        )}
      </Link>

      <div className="flex flex-col flex-1 p-4 md:p-5">
        <div className="flex items-start justify-between gap-3 mb-2">
          <Link href={`/menu/dish/${dish.slug}`} className="min-w-0 flex-1">
            <h2 className="text-[1.05rem] md:text-lg font-bold text-[var(--text)] leading-snug hover:text-[#b71c1c] transition-colors line-clamp-2">
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
            className="inline-flex items-center justify-center w-9 h-9 shrink-0 soft-pill border border-[var(--border)] text-[#b71c1c] text-xl font-medium hover:bg-[#b71c1c] hover:text-white hover:border-[#b71c1c] transition-colors"
            aria-label={`Add ${dish.name} to cart`}
          >
            +
          </button>
        </div>

        <p className="text-sm text-[var(--text-muted)] leading-relaxed line-clamp-2 mb-4 flex-1">
          {dish.description}
        </p>

        <p className="text-[#b71c1c] font-bold text-[0.95rem] tracking-wide">
          {formatPrice(dish.price)}
        </p>
      </div>
    </article>
  );
}
