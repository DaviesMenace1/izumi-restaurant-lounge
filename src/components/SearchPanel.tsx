"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { formatPrice } from "@/data/menu";
import { searchDishes } from "@/lib/fuzzySearch";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function SearchPanel({ open, onClose }: Props) {
  const [q, setQ] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const results = useMemo(() => searchDishes(q, 20), [q]);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 80);
    } else {
      setQ("");
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-[80] bg-black/35 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden
      />
      <aside
        className="fixed top-0 right-0 z-[90] h-full w-full max-w-md bg-[#faf7f2] border-l border-[var(--border)] shadow-2xl flex flex-col"
        role="dialog"
        aria-label="Search menu"
      >
        <div className="flex items-center gap-3 px-4 h-[72px] border-b border-[var(--border)] shrink-0 bg-white">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            className="text-[var(--text-muted)] shrink-0"
            aria-hidden
          >
            <circle cx="11" cy="11" r="7" />
            <path d="M20 20l-3.5-3.5" strokeLinecap="round" />
          </svg>
          <input
            ref={inputRef}
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search dishes (typos ok)"
            className="flex-1 bg-transparent text-sm outline-none placeholder:text-[var(--text-muted)]"
            style={{ color: "#1a1410" }}
            autoComplete="off"
          />
          <button
            type="button"
            onClick={onClose}
            className="text-2xl leading-none px-2 text-[var(--text-muted)] hover:text-[var(--text)]"
            aria-label="Close search"
          >
            ×
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-4">
          {!q.trim() && (
            <p className="text-sm text-center py-10" style={{ color: "#4a4038" }}>
              Try sushi, ramen, bento, or even a typo like sufhi.
            </p>
          )}

          {q.trim() && results.length === 0 && (
            <p className="text-sm text-center py-10" style={{ color: "#4a4038" }}>
              No dishes found for &ldquo;{q}&rdquo;. Try another spelling.
            </p>
          )}

          <ul className="space-y-3">
            {results.map((dish) => (
              <li key={dish.id}>
                <Link
                  href={`/menu/dish/${dish.slug}`}
                  onClick={onClose}
                  className="flex gap-3 p-2 rounded-xl hover:bg-white border border-transparent hover:border-[var(--border)] transition-colors"
                >
                  <div className="relative w-16 h-16 shrink-0 overflow-hidden rounded-lg bg-white">
                    <Image
                      src={dish.image}
                      alt={dish.name}
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold truncate" style={{ color: "#1a1410" }}>
                      {dish.name}
                    </p>
                    <p className="text-xs mt-0.5 line-clamp-2" style={{ color: "#4a4038" }}>
                      {dish.description}
                    </p>
                    <p className="text-xs font-bold mt-1" style={{ color: "#9a1515" }}>
                      {formatPrice(dish.price)}
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {q.trim() && results.length > 0 && (
          <div className="shrink-0 border-t border-[var(--border)] p-4 bg-white">
            <Link
              href={`/menu?q=${encodeURIComponent(q.trim())}`}
              onClick={onClose}
              className="btn-cream w-full inline-flex justify-center"
            >
              View all on menu
            </Link>
          </div>
        )}
      </aside>
    </>
  );
}
