"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart, formatUGX } from "@/context/CartContext";

export default function CartDrawer() {
  const { items, open, setOpen, setQty, removeItem, subtotal, clear } =
    useCart();

  if (!open) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm"
        onClick={() => setOpen(false)}
        aria-hidden
      />
      <aside className="fixed top-0 right-0 z-[70] h-full w-full max-w-md bg-white border-l border-[var(--border)] shadow-2xl flex flex-col">
        <div className="flex items-center justify-between px-5 h-[72px] border-b border-[var(--border)] shrink-0">
          <h2
            className="text-sm tracking-[0.15em] uppercase font-bold"
            style={{ color: "#9a1515" }}
          >
            Your Order ({items.reduce((n, i) => n + i.qty, 0)})
          </h2>
          <button
            onClick={() => setOpen(false)}
            className="text-[var(--text-muted)] hover:text-[var(--text)] text-2xl leading-none px-2"
            aria-label="Close cart"
          >
            ×
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4">
          {items.length === 0 ? (
            <p className="text-[var(--text-muted)] text-sm py-12 text-center">
              Your cart is empty. Add dishes from the menu.
            </p>
          ) : (
            <ul className="space-y-4">
              {items.map((item) => (
                <li
                  key={item.id}
                  className="flex gap-3 border-b border-[var(--border)] pb-4"
                >
                  <div className="relative w-16 h-16 rounded-lg overflow-hidden shrink-0 bg-[var(--bg-elevated)]">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between gap-2">
                      <h3 className="text-sm font-medium truncate" style={{ color: "#1a1410" }}>
                        {item.name}
                      </h3>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-[var(--text-muted)] hover:text-red-600 text-xs"
                      >
                        Remove
                      </button>
                    </div>
                    <p className="text-xs font-semibold mt-0.5" style={{ color: "#9a1515" }}>
                      {formatUGX(item.price)}
                    </p>
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => setQty(item.id, item.qty - 1)}
                        className="w-7 h-7 rounded-full border border-[var(--border)] text-sm hover:border-[#9a1515]"
                      >
                        −
                      </button>
                      <span className="text-sm w-6 text-center">{item.qty}</span>
                      <button
                        onClick={() => setQty(item.id, item.qty + 1)}
                        className="w-7 h-7 rounded-full border border-[var(--border)] text-sm hover:border-[#9a1515]"
                      >
                        +
                      </button>
                      <span className="ml-auto text-sm text-[var(--text-muted)]">
                        {formatUGX(item.price * item.qty)}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-[var(--border)] p-5 space-y-3 shrink-0 bg-white">
            <div className="flex justify-between text-sm">
              <span className="text-[var(--text-muted)] font-medium">Subtotal</span>
              <span className="font-bold" style={{ color: "#9a1515" }}>
                {formatUGX(subtotal)}
              </span>
            </div>
            <Link
              href="/order"
              onClick={() => setOpen(false)}
              className="w-full py-3.5 text-xs font-bold tracking-[0.12em] uppercase bg-[#9a1515] text-white hover:bg-[#7a1010] transition-colors soft-pill flex items-center justify-center"
            >
              Proceed to order
            </Link>
            <button
              type="button"
              onClick={clear}
              className="w-full py-2 text-xs tracking-[0.1em] uppercase text-[var(--text-muted)] hover:text-[var(--text)]"
            >
              Clear cart
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
