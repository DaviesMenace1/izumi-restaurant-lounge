"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { categories, dishes, formatPrice, type CategorySlug } from "@/data/menu";

type Filter = "all" | CategorySlug | "popular" | "vegetarian" | "spicy";

export default function MenuPage() {
  const [filter, setFilter] = useState<Filter>("all");
  const [q, setQ] = useState("");

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
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-[1200px] w-[92%]">
          <div className="text-center mb-12">
            <p className="text-xs tracking-[0.2em] uppercase text-[var(--gold)] mb-3">The Menu</p>
            <h1 className="font-[family-name:var(--font-cormorant)] text-[clamp(2.4rem,5vw,3.5rem)] font-medium mb-4">
              Fresh. Balanced. Shareable.
            </h1>
            <p className="text-[var(--text-muted)] max-w-xl mx-auto">
              Real prices from our kitchen. Filter by category, dietary preference or search.
            </p>
          </div>

          <div className="mb-8 flex justify-center">
            <input
              type="search"
              placeholder="Search dishes…"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              className="w-full max-w-md bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text)] px-5 py-3 text-sm focus:outline-none focus:border-[var(--gold)]"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {(
              [
                ["all", "All"],
                ["popular", "Popular"],
                ["sushi", "Sushi"],
                ["sashimi-nigiri", "Sashimi"],
                ["appetizers", "Starters"],
                ["mains", "Mains"],
                ["curries", "Curries"],
                ["rice-noodles", "Rice & Noodles"],
                ["grills", "Grills"],
                ["salads-soups", "Salads & Soups"],
                ["vegetarian", "Vegetarian"],
                ["spicy", "Spicy"],
              ] as [Filter, string][]
            ).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setFilter(key)}
                className={`px-4 py-2 text-xs tracking-[0.08em] uppercase border transition-colors ${
                  filter === key
                    ? "bg-[var(--gold)] text-black border-[var(--gold)]"
                    : "border-[var(--border)] text-[var(--text-muted)] hover:border-[var(--gold)] hover:text-[var(--gold)]"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-14">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/menu/${cat.slug}`}
                className="bg-[var(--bg-card)] border border-[var(--border)] p-4 text-center hover:border-[rgba(201,168,76,0.45)] transition-colors"
              >
                <span className="text-2xl block mb-2">{cat.icon}</span>
                <span className="text-sm font-[family-name:var(--font-cormorant)] text-[var(--gold-light)]">
                  {cat.name}
                </span>
              </Link>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((dish) => (
              <Link
                key={dish.id}
                href={`/menu/dish/${dish.slug}`}
                className="group bg-[var(--bg-card)] border border-[var(--border)] overflow-hidden hover:border-[rgba(201,168,76,0.4)] transition-all"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={dish.image}
                    alt={dish.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  {dish.popular && (
                    <span className="absolute top-3 left-3 bg-[var(--gold)] text-black text-[0.65rem] tracking-wider uppercase px-2 py-1">
                      Popular
                    </span>
                  )}
                  {dish.spicy && (
                    <span className="absolute top-3 right-3 bg-red-700/90 text-white text-[0.65rem] tracking-wider uppercase px-2 py-1">
                      Spicy
                    </span>
                  )}
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start gap-3 mb-2">
                    <h2 className="font-[family-name:var(--font-cormorant)] text-xl text-[var(--gold-light)] leading-tight">
                      {dish.name}
                    </h2>
                    <span className="text-sm text-[var(--gold)] whitespace-nowrap font-medium">
                      {formatPrice(dish.price)}
                    </span>
                  </div>
                  <p className="text-sm text-[var(--text-muted)] line-clamp-2">{dish.description}</p>
                </div>
              </Link>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-[var(--text-muted)] py-16">No dishes match your filters.</p>
          )}

          <p className="text-center text-sm text-[var(--text-muted)] mt-14">
            Prices in UGX. Subject to change. Inform us of allergies when ordering.
          </p>
        </div>
      </section>
    </div>
  );
}
