"use client";

import Image from "next/image";
import { useCart, formatUGX, openWhatsAppOrder } from "@/context/CartContext";

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
        <div className="flex items-center justify-between px-5 h-[72px] border-b border-[var(--border)]">
          <h2 className="text-sm tracking-[0.15em] uppercase text-[var(--gold)]">
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
                      <h3 className="text-sm text-[var(--text)] font-medium truncate">
                        {item.name}
                      </h3>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-[var(--text-muted)] hover:text-red-600 text-xs"
                      >
                        Remove
                      </button>
                    </div>
                    <p className="text-xs text-[var(--gold)] mt-0.5">
                      {formatUGX(item.price)}
                    </p>
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => setQty(item.id, item.qty - 1)}
                        className="w-7 h-7 rounded-full border border-[var(--border)] text-sm hover:border-[var(--gold)]"
                      >
                        −
                      </button>
                      <span className="text-sm w-6 text-center">{item.qty}</span>
                      <button
                        onClick={() => setQty(item.id, item.qty + 1)}
                        className="w-7 h-7 rounded-full border border-[var(--border)] text-sm hover:border-[var(--gold)]"
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
          <div className="border-t border-[var(--border)] p-5 space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-[var(--text-muted)]">Subtotal</span>
              <span className="text-[var(--gold)] font-semibold">
                {formatUGX(subtotal)}
              </span>
            </div>
            <button
              onClick={() => openWhatsAppOrder(items, subtotal)}
              className="w-full py-3.5 text-xs font-medium tracking-[0.12em] uppercase bg-[#25D366] text-white hover:bg-[#20bd5a] transition-colors rounded-full flex items-center justify-center gap-2"
            >
              <WhatsAppIcon />
              Order on WhatsApp ({items.length} dishes)
            </button>
            <button
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

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
