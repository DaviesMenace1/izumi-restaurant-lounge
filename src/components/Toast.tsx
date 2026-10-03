"use client";

import { useCart } from "@/context/CartContext";

export default function Toast() {
  const { toast, dismissToast, setOpen } = useCart();

  if (!toast) return null;

  return (
    <div
      key={toast.id}
      role="status"
      aria-live="polite"
      className="fixed bottom-6 left-1/2 z-[80] -translate-x-1/2 flex items-center gap-3 px-5 py-3.5 rounded-full bg-[var(--bg-card)] border border-[rgba(201,168,76,0.45)] shadow-2xl animate-toast-in"
    >
      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--gold)] text-black text-sm font-bold shrink-0">
        ✓
      </span>
      <span className="text-sm text-[var(--text)] max-w-[220px] truncate">
        {toast.text}
      </span>
      <button
        type="button"
        onClick={() => {
          dismissToast();
          setOpen(true);
        }}
        className="text-xs tracking-[0.1em] uppercase text-[var(--gold)] hover:underline shrink-0"
      >
        View
      </button>
      <button
        type="button"
        onClick={dismissToast}
        className="text-[var(--text-muted)] hover:text-white text-lg leading-none pl-1"
        aria-label="Dismiss"
      >
        ×
      </button>
    </div>
  );
}
