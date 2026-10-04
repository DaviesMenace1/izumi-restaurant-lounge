"use client";

import { Suspense, useMemo, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import {
  categories,
  dishes,
  getDishesByCategory,
  type CategorySlug,
} from "@/data/menu";
import MenuCard from "@/components/MenuCard";
import { dishMatchesQuery } from "@/lib/fuzzySearch";

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

function MenuContent() {
  const searchParams = useSearchParams();
  const [filter, setFilter] = useState<Filter>("all");
  const [q, setQ] = useState("");

  useEffect(() => {
    const fromUrl = searchParams.get("q");
    if (fromUrl) setQ(fromUrl);
  }, [searchParams]);

  const showCategories = filter === "all" && !q.trim();

  const filtered = useMemo(() => {
    let list = dishes;
    if (filter === "popular") list = list.filter((d) => d.popular);
    else if (filter === "vegetarian") list = list.filter((d) => d.vegetarian);
    else if (filter === "spicy") list = list.filter((d) => d.spicy);
    else if (filter !== "all") list = list.filter((d) => d.category === filter);

    if (q.trim()) {
      list = list.filter((d) => dishMatchesQuery(d, q));
    }
    return list;
  }, [filter, q]);

  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-[1100px] w-[92%]">
        <div className="text-center mb-10">
          <p className="jp text-sm text-[#b71c1c] mb-2">メニュー</p>
          <p className="text-xs tracking-[0.25em] uppercase text-[#b71c1c] font-semibold mb-3">
            The Menu
          </p>
          <h1 className="text-[clamp(2.2rem,5vw,3.2rem)] font-bold text-[var(--text)] mb-3">
            Farm to table Japanese
          </h1>
          <p className="text-[var(--text-muted)] max-w-lg mx-auto text-[0.95rem] leading-relaxed">
            Bento, sushi, ramen, and Kyoto style plates. Prices in UGX.
          </p>
        </div>

        <div className="mb-6 flex justify-center">
          <div className="relative w-full max-w-md">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)] pointer-events-none"
              aria-hidden
            >
              <circle cx="11" cy="11" r="7" />
              <path d="M20 20l-3.5-3.5" strokeLinecap="round" />
            </svg>
            <input
              type="search"
              placeholder="Search dishes (typos ok)..."
              value={q}
              onChange={(e) => setQ(e.target.value)}
              className="w-full bg-white border border-[var(--border)] soft-pill text-[var(--text)] placeholder:text-[var(--text-muted)] pl-11 pr-6 py-3.5 text-sm font-medium focus:outline-none focus:border-[#b71c1c] shadow-sm"
            />
          </div>
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
              className={`px-4 py-2.5 text-[0.72rem] tracking-[0.08em] uppercase font-semibold soft-pill border transition-all ${
                filter === key
                  ? "bg-[#b71c1c] text-white border-[#b71c1c] shadow"
                  : "border-[var(--border)] bg-white text-[var(--text)] hover:border-[#b71c1c] hover:text-[#b71c1c]"
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
                  className="group relative overflow-hidden bg-white border border-[var(--border)] hover:border-[#b71c1c]/40 transition-all shadow-lg rounded-[1.25rem]"
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
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/10" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                      <h2 className="text-base md:text-xl font-bold text-white tracking-wide">
                        {cat.name}
                      </h2>
                      <p className="text-[0.8rem] text-white/95 mt-0.5 font-medium">
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
              {filtered.map((dish) => (
                <MenuCard key={dish.id} dish={dish} />
              ))}
            </div>

            {filtered.length === 0 && (
              <p className="text-center text-[var(--text-muted)] py-16 font-medium">
                No dishes match your search. Try another spelling.
              </p>
            )}
          </>
        )}

        <p className="text-center text-sm text-[var(--text-muted)] mt-14 font-medium">
          Prices in UGX. Subject to change. Please mention allergies when ordering.
        </p>
      </div>
    </section>
  );
}

export default function MenuPage() {
  return (
    <div className="pt-[72px]">
      <Suspense
        fallback={
          <div className="py-24 text-center text-sm text-[var(--text-muted)]">Loading menu…</div>
        }
      >
        <MenuContent />
      </Suspense>
    </div>
  );
}
