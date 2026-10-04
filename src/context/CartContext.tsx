"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  useCallback,
  type ReactNode,
} from "react";
import { loyaltyRules } from "@/data/loyalty";
import { addStampsForSpend, getMemberByPhone, upsertMember } from "@/lib/loyaltyStore";

export type CartItem = {
  id: string;
  slug: string;
  name: string;
  price: number;
  image: string;
  qty: number;
};

export type ToastMessage = {
  id: number;
  text: string;
};

export type OrderDetails = {
  customerName: string;
  customerPhone: string;
  method: "delivery" | "pickup";
  address: string;
  loyaltyMember?: boolean;
};

type CartContextValue = {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "qty">, qty?: number) => void;
  removeItem: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  clear: () => void;
  count: number;
  subtotal: number;
  open: boolean;
  setOpen: (v: boolean) => void;
  toast: ToastMessage | null;
  dismissToast: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "yamasen-cart-v1";

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [open, setOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);
  const [toast, setToast] = useState<ToastMessage | null>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setItems(JSON.parse(raw));
    } catch {
      /* ignore */
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items, hydrated]);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 2800);
    return () => clearTimeout(t);
  }, [toast]);

  const dismissToast = useCallback(() => setToast(null), []);

  const addItem = (item: Omit<CartItem, "qty">, qty = 1) => {
    setItems((prev) => {
      const existing = prev.find((p) => p.id === item.id);
      if (existing) {
        return prev.map((p) =>
          p.id === item.id ? { ...p, qty: p.qty + qty } : p
        );
      }
      return [...prev, { ...item, qty }];
    });
    setToast({
      id: Date.now(),
      text: `${item.name} added to order`,
    });
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((p) => p.id !== id));
  };

  const setQty = (id: string, qty: number) => {
    if (qty <= 0) {
      removeItem(id);
      return;
    }
    setItems((prev) => prev.map((p) => (p.id === id ? { ...p, qty } : p)));
  };

  const clear = () => setItems([]);

  const count = useMemo(
    () => items.reduce((n, i) => n + i.qty, 0),
    [items]
  );
  const subtotal = useMemo(
    () => items.reduce((n, i) => n + i.price * i.qty, 0),
    [items]
  );

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        setQty,
        clear,
        count,
        subtotal,
        open,
        setOpen,
        toast,
        dismissToast,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}

export function formatUGX(n: number) {
  return `UGX ${n.toLocaleString()}`;
}

export function openWhatsAppOrder(
  items: CartItem[],
  subtotal: number,
  details: OrderDetails,
  phone = "256707808010"
) {
  if (!items.length) return;

  // Ensure loyalty profile exists when customer opts in or already has a card
  const existing = getMemberByPhone(details.customerPhone);
  if (details.loyaltyMember || existing) {
    upsertMember({
      name: details.customerName,
      phone: details.customerPhone,
      birthday: existing?.birthday,
    });
  }

  const stampsEarned = Math.floor(subtotal / loyaltyRules.stampSpendUgx);
  const isLoyalty =
    details.loyaltyMember || !!getMemberByPhone(details.customerPhone);

  if (isLoyalty && stampsEarned > 0) {
    addStampsForSpend(details.customerPhone, subtotal);
  }

  const lines: string[] = [
    "*Yamasen Japanese Restaurant - Order*",
    "",
    "*Customer*",
    `Name: ${details.customerName}`,
    `Phone: ${details.customerPhone}`,
    `Method: ${details.method === "delivery" ? "Delivery" : "Pickup"}`,
  ];

  if (details.method === "delivery") {
    lines.push(`Address: ${details.address}`);
  }

  if (isLoyalty) {
    lines.push("");
    lines.push("*Loyalty Card*");
    lines.push("Member: Yes");
    if (stampsEarned > 0) {
      lines.push(
        `Please add ${stampsEarned} stamp(s) (order total qualifies at UGX ${loyaltyRules.stampSpendUgx.toLocaleString()} per stamp).`
      );
    } else {
      lines.push(
        `Order under UGX ${loyaltyRules.stampSpendUgx.toLocaleString()} — no stamp this time.`
      );
    }
  }

  lines.push("");
  lines.push("*Items*");

  items.forEach((i, idx) => {
    lines.push(
      `${idx + 1}. ${i.name} x ${i.qty} - ${formatUGX(i.price * i.qty)}`
    );
  });

  lines.push("");
  lines.push(`*Total: ${formatUGX(subtotal)}*`);
  lines.push("");
  lines.push("Please confirm availability. Thank you!");

  const msg = lines.join("\n");
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}
