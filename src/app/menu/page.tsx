"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  categories,
  dishes,
  formatPrice,
  getDishesByCategory,
  type CategorySlug,
} from "@/data/menu";
import { useCart } from "@/context/CartContext";

type Filter = "all" | CategorySlug | "popular" | "vegetarian" | "spicy";

const categoryImages: Record<CategorySlug, string> = {
  sushi: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=1200&q=90",
  bento: "https://images.unsplash.com/photo-1604908177453-7462950a6a3b?w=1200&q=90",
  appetizers: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=1200&q=90",
  mains: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=1200&q=90",
  "ramen-curry": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=1200&q=90",
  donburi: "https://images.unsplash.com/photo-1553621042-f6e147245754?w=1200&q=90",
  grills: "https://images.unsplash.com/photo-1559737558-2f5a35f4523b?w=1200&q=90",
  "salads-soups": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1200&q=90",
  desserts: "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?w=1200&q=90",
};

export default function MenuPage() {
  const [filter, setFilter] = useState<Filter>("all");
  const [q, setQ] = useState("");
  const { addItem } = useCart();
  const showCategories = filter === "all" && !q.trim();

  const filtered = useMemo(() => {
    let list = dishes;
    if (filter === "popular") list = list.filter((d) => d.popular);
    else if (filter === "vegetarian") list = list.filter((d) => d.vegetarian);
    else if (filter === "spicy") list = list.filter((d) => d.spicy);
    else if (filter !== "all") list = list.filter((d) => d.category === filter);

    if (q.trim()) {
      const s = q.toLowerCase();
      list = list.filter(
        (d) =>
          d.name.toLowerCase().includes(s) ||
          d.description.toLowerCase().includes(s) ||
          d.tags.some((t) => t.includes(s))
      );
    }
    return list;
  }, [filter, q]);

  return (
    <div className="pt-[72px]">
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-[1100px] w-[92%]">
          <div className="text-center mb-10">
            <p className="text-xs tracking-[0.25em] uppercase text-[#b71c1c] mb-3">The Menu</p>
            <h1 className="text-[clamp(2.2rem,5vw,3.2rem)] font-bold mb-3">
              Farm to table Japanese
            </h1>
            <p className="text-[var(--text-muted)] max-w-lg mx-auto text-[0.95rem]">
              Bento, sushi, ramen, and Kyoto style plates. Prices in UGX.
            </p>
          </div>

          <div className="mb-6 flex justify-center">
            <input
              type="search"
              placeholder="Search dishes..."
              value={q}
              onChange={(e) => setQ(e.target.value)}
              className="w-full max-w-md bg-white border border-[var(--border)] soft-pill text-[var(--text)] px-6 py-3.5 text-sm focus:outline-none focus:border-[#b71c1c] shadow-sm"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {(
              [
                ["all", "All"],
                ["popular", "Popular"],
                ["bento", "Bento"],
                ["sushi", "Sushi"],
                ["appetizers", "Starters"],
                ["mains", "Mains"],
                ["ramen-curry", "Ramen"],
                ["donburi", "Donburi"],
                ["grills", "Grills"],
                ["salads-soups", "Salads"],
                ["vegetarian", "Veg"],
              ] as [Filter, string][]
            ).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setFilter(key)}
                className={`px-4 py-2 text-[0.7rem] tracking-[0.1em] uppercase soft-pill border transition-all ${
                  filter === key
                    ? "bg-[#b71c1c] text-white border-[#b71c1c] shadow"
                    : "border-[var(--border)] bg-white text-[var(--text-muted)] hover:border-[#b71c1c] hover:text-[#b71c1c]"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {showCategories && (
            <div className="grid grid-cols-2 gap-4 md:gap-6 mb-16">
              {categories.map((cat) => {
                const count = getDishesByCategory(cat.slug).length;
                return (
                  <Link
                    key={cat.slug}
                    href={`/menu/${cat.slug}`}
                    className="group relative overflow-hidden bg-white border border-[var(--border)] hover:border-[#b71c1c]/40 transition-all shadow-lg blob-card"
                  >
                    <div className="relative aspect-[5/4] overflow-hidden">
                      <Image
                        src={categoryImages[cat.slug]}
                        alt={cat.name}
                        fill
                        quality={85}
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 768px) 50vw, 40vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />
                      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                        <h2
                          className="text-base md:text-xl font-bold text-white tracking-wide"
                          style={{
                            textShadow: "0 2px 8px rgba(0,0,0,0.85)",
                          }}
                        >
                          {cat.name}
                        </h2>
                        <p className="text-[0.75rem] text-white/90 mt-0.5 font-medium">
                          {count} dishes
                        </p>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}

          {!showCategories && (
            <>
              <div className="grid sm:grid-cols-2 gap-5 md:gap-6">
                {filtered.map((dish) => (
                  <div
                    key={dish.id}
                    className="group flex flex-col sm:flex-row gap-0 bg-white border border-[var(--border)] overflow-hidden hover:border-[#b71c1c]/40 transition-all shadow-md blob-card"
                  >
                    <Link
                      href={`/menu/dish/${dish.slug}`}
                      className="relative w-full sm:w-[42%] aspect-[4/3] sm:aspect-auto sm:min-h-[160px] overflow-hidden shrink-0"
                    >
                      <Image
                        src={dish.image}
                        alt={dish.name}
                        fill
                        quality={85}
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, 40vw"
                      />
                      {dish.popular && (
                        <span className="absolute top-3 left-3 bg-[#b71c1c] text-white text-[0.6rem] tracking-wider uppercase px-2.5 py-1 soft-pill font-semibold">
                          Popular
                        </span>
                      )}
                    </Link>
                    <div className="flex flex-col justify-between p-4 md:p-5 flex-1">
                      <div>
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <Link href={`/menu/dish/${dish.slug}`}>
                            <h2 className="text-lg font-bold text-[var(--text)] leading-snug hover:text-[#b71c1c] transition-colors">
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
                            className="inline-flex items-center justify-center w-9 h-9 soft-pill border border-[var(--border)] text-[#b71c1c] text-lg shrink-0 hover:bg-[#b71c1c] hover:text-white transition-colors"
                            aria-label={`Add ${dish.name} to cart`}
                          >
                            +
                          </button>
                        </div>
                        <p className="text-sm text-[var(--text-muted)] line-clamp-2 mb-3">
                          {dish.description}
                        </p>
                      </div>
                      <p className="text-[#b71c1c] font-bold text-sm">
                        {formatPrice(dish.price)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {filtered.length === 0 && (
                <p className="text-center text-[var(--text-muted)] py-16">
                  No dishes match your filters.
                </p>
              )}
            </>
          )}

          <p className="text-center text-sm text-[var(--text-muted)] mt-14">
            Prices in UGX. Subject to change. Please mention allergies when ordering.
          </p>
        </div>
      </section>
    </div>
  );
}
