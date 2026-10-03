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
  "sashimi-nigiri": "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=1200&q=90",
  appetizers: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=1200&q=90",
  mains: "https://images.unsplash.com/photo-1604908177453-7462950a6a3b?w=1200&q=90",
  curries: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=1200&q=90",
  "rice-noodles": "https://images.unsplash.com/photo-1559314809-0d155014e29e?w=1200&q=90",
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
            <p className="text-xs tracking-[0.25em] uppercase text-[var(--gold)] mb-3">The Menu</p>
            <h1 className="text-[clamp(2.2rem,5vw,3.2rem)] font-medium mb-3">
              Fresh. Balanced. Shareable.
            </h1>
            <p className="text-[var(--text-muted)] max-w-lg mx-auto text-[0.95rem]">
              Browse by category or search every dish with real kitchen prices.
            </p>
          </div>

          <div className="mb-6 flex justify-center">
            <input
              type="search"
              placeholder="Search dishes…"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              className="w-full max-w-md bg-[var(--bg-card)] border border-[var(--border)] rounded-full text-[var(--text)] px-6 py-3.5 text-sm focus:outline-none focus:border-[var(--gold)] shadow-sm"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {(
              [
                ["all", "All"],
                ["popular", "Popular"],
                ["sushi", "Sushi"],
                ["sashimi-nigiri", "Sashimi"],
                ["appetizers", "Starters"],
                ["mains", "Mains"],
                ["curries", "Curries"],
                ["rice-noodles", "Rice"],
                ["grills", "Grills"],
                ["salads-soups", "Salads"],
                ["vegetarian", "Veg"],
                ["spicy", "Spicy"],
              ] as [Filter, string][]
            ).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setFilter(key)}
                className={`px-4 py-2 text-[0.7rem] tracking-[0.1em] uppercase rounded-full border transition-all ${
                  filter === key
                    ? "bg-[var(--gold)] text-black border-[var(--gold)] shadow"
                    : "border-[var(--border)] text-[var(--text-muted)] hover:border-[var(--gold)] hover:text-[var(--gold)]"
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
                    className="group relative overflow-hidden rounded-2xl bg-[var(--bg-card)] border border-[var(--border)] hover:border-[rgba(201,168,76,0.5)] transition-all shadow-lg"
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
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                        <h2 className="text-base md:text-xl font-medium text-white tracking-wide">
                          {cat.name}
                        </h2>
                        <p className="text-[0.7rem] text-white/70 mt-0.5">{count} dishes</p>
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
                    className="group flex flex-col sm:flex-row gap-0 bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl overflow-hidden hover:border-[rgba(201,168,76,0.45)] transition-all shadow-md"
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
                        <span className="absolute top-3 left-3 bg-[var(--gold)] text-black text-[0.6rem] tracking-wider uppercase px-2 py-1 rounded">
                          Popular
                        </span>
                      )}
                    </Link>
                    <div className="flex flex-col justify-between p-4 md:p-5 flex-1">
                      <div>
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <Link href={`/menu/dish/${dish.slug}`}>
                            <h2 className="text-lg font-medium text-[var(--gold-light)] leading-snug hover:underline">
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
                            className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-[var(--border)] text-[var(--gold)] text-lg shrink-0 hover:bg-[var(--gold)] hover:text-black transition-colors"
                            aria-label={`Add ${dish.name} to cart`}
                          >
                            +
                          </button>
                        </div>
                        <p className="text-sm text-[var(--text-muted)] line-clamp-2 mb-3">
                          {dish.description}
                        </p>
                      </div>
                      <p className="text-[var(--gold)] font-semibold text-sm">
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
