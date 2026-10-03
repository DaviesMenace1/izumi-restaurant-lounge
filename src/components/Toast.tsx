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
      className="fixed bottom-6 z-[80] left-0 right-0 flex justify-center pointer-events-none px-4"
    >
      <div className="pointer-events-auto flex items-center gap-3 px-5 py-3.5 rounded-full bg-white border border-[rgba(166,124,45,0.35)] shadow-xl animate-toast-in max-w-[min(92vw,380px)]">
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--gold)] text-white text-sm font-bold shrink-0">
          ✓
        </span>
        <span className="text-sm text-[var(--text)] truncate">
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
          className="text-[var(--text-muted)] hover:text-[var(--text)] text-lg leading-none pl-1 shrink-0"
          aria-label="Dismiss"
        >
          ×
        </button>
      </div>
    </div>
  );
}
