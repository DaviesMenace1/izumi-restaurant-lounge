"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  useCart,
  formatUGX,
  openWhatsAppOrder,
  type OrderDetails,
} from "@/context/CartContext";

export default function OrderPage() {
  const { items, setQty, removeItem, subtotal, clear, setOpen } = useCart();

  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [method, setMethod] = useState<"delivery" | "pickup">("pickup");
  const [address, setAddress] = useState("");
  const [allergies, setAllergies] = useState("");
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  function handleOrder(e: FormEvent) {
    e.preventDefault();
    setError("");

    if (!items.length) {
      setError("Your cart is empty. Add dishes from the menu first.");
      return;
    }
    if (!customerName.trim()) {
      setError("Please enter your name.");
      return;
    }
    if (!customerPhone.trim()) {
      setError("Please enter your phone number.");
      return;
    }
    if (method === "delivery" && !address.trim()) {
      setError("Please enter a delivery address.");
      return;
    }

    const details: OrderDetails = {
      customerName: customerName.trim(),
      customerPhone: customerPhone.trim(),
      method,
      address: method === "delivery" ? address.trim() : "",
      allergies: allergies.trim() || undefined,
    };

    openWhatsAppOrder(items, subtotal, details);
    setSent(true);
  }

  return (
    <div className="pt-[72px]">
      <section className="py-10 md:py-16 px-5 bg-[var(--bg)]">
        <div className="mx-auto max-w-[1000px]">
          <div className="text-center mb-10">
            <p className="jp text-sm mb-2" style={{ color: "#9a1515" }}>
              ご注文
            </p>
            <p className="text-xs tracking-[0.25em] uppercase font-bold mb-2" style={{ color: "#9a1515" }}>
              Order
            </p>
            <h1
              className="text-[clamp(2rem,4.5vw,2.8rem)] font-semibold mb-3"
              style={{ color: "#1a1410", fontFamily: "var(--font-display), Georgia, serif" }}
            >
              Complete your order
            </h1>
            <p className="text-sm max-w-md mx-auto" style={{ color: "#4a4038" }}>
              Review your dishes, add your details, then send the order on WhatsApp.
            </p>
          </div>

          {items.length === 0 ? (
            <div className="bg-white border border-[var(--border)] p-10 text-center shadow-sm" style={{ borderRadius: "1.25rem" }}>
              <p className="mb-6" style={{ color: "#4a4038" }}>
                Your cart is empty. Browse the menu and add dishes first.
              </p>
              <Link href="/menu" className="btn-cream inline-flex justify-center">
                View Menu
              </Link>
            </div>
          ) : (
            <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-10 items-start">
              {/* Items */}
              <div className="bg-white border border-[var(--border)] p-5 md:p-7 shadow-sm" style={{ borderRadius: "1.25rem" }}>
                <div className="flex items-center justify-between mb-5">
                  <h2 className="text-lg font-semibold" style={{ color: "#1a1410" }}>
                    Your dishes ({items.reduce((n, i) => n + i.qty, 0)})
                  </h2>
                  <button
                    type="button"
                    onClick={() => setOpen(true)}
                    className="text-xs tracking-[0.1em] uppercase font-bold hover:underline"
                    style={{ color: "#9a1515" }}
                  >
                    Edit in cart
                  </button>
                </div>

                <ul className="space-y-4">
                  {items.map((item) => (
                    <li
                      key={item.id}
                      className="flex gap-3 border-b border-[var(--border)] pb-4 last:border-0 last:pb-0"
                    >
                      <div className="relative w-18 h-18 w-[72px] h-[72px] shrink-0 overflow-hidden bg-[var(--bg-elevated)]" style={{ borderRadius: "0.75rem" }}>
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                          sizes="72px"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between gap-2">
                          <h3 className="text-sm font-semibold" style={{ color: "#1a1410" }}>
                            {item.name}
                          </h3>
                          <button
                            type="button"
                            onClick={() => removeItem(item.id)}
                            className="text-xs text-[var(--text-muted)] hover:text-red-600"
                          >
                            Remove
                          </button>
                        </div>
                        <p className="text-xs font-bold mt-0.5" style={{ color: "#9a1515" }}>
                          {formatUGX(item.price)}
                        </p>
                        <div className="flex items-center gap-3 mt-2">
                          <button
                            type="button"
                            onClick={() => setQty(item.id, item.qty - 1)}
                            className="w-7 h-7 rounded-full border border-[var(--border)] text-sm hover:border-[#9a1515]"
                          >
                            −
                          </button>
                          <span className="text-sm w-6 text-center">{item.qty}</span>
                          <button
                            type="button"
                            onClick={() => setQty(item.id, item.qty + 1)}
                            className="w-7 h-7 rounded-full border border-[var(--border)] text-sm hover:border-[#9a1515]"
                          >
                            +
                          </button>
                          <span className="ml-auto text-sm font-medium" style={{ color: "#4a4038" }}>
                            {formatUGX(item.price * item.qty)}
                          </span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="flex justify-between items-center mt-6 pt-4 border-t border-[var(--border)]">
                  <span className="text-sm font-medium" style={{ color: "#4a4038" }}>
                    Subtotal
                  </span>
                  <span className="text-xl font-bold" style={{ color: "#9a1515" }}>
                    {formatUGX(subtotal)}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={clear}
                  className="mt-3 text-xs tracking-[0.1em] uppercase text-[var(--text-muted)] hover:text-[var(--text)]"
                >
                  Clear cart
                </button>
              </div>

              {/* Form */}
              <div className="bg-white border border-[var(--border)] p-5 md:p-7 shadow-md" style={{ borderRadius: "1.25rem" }}>
                <h2 className="text-lg font-semibold mb-1" style={{ color: "#1a1410" }}>
                  Your details
                </h2>
                <p className="text-xs mb-6" style={{ color: "#4a4038" }}>
                  We will open WhatsApp with your full order ready to send.
                </p>

                <form onSubmit={handleOrder} className="space-y-4">
                  <div>
                    <label
                      htmlFor="order-name"
                      className="block text-[0.7rem] tracking-[0.1em] uppercase font-bold mb-1.5"
                      style={{ color: "#1a1410" }}
                    >
                      Name
                    </label>
                    <input
                      id="order-name"
                      type="text"
                      required
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="Your full name"
                      className="w-full border border-[var(--border)] bg-[var(--bg)] px-3 py-2.5 text-sm focus:outline-none focus:border-[#9a1515]"
                      style={{ color: "#1a1410" }}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="order-phone"
                      className="block text-[0.7rem] tracking-[0.1em] uppercase font-bold mb-1.5"
                      style={{ color: "#1a1410" }}
                    >
                      Phone
                    </label>
                    <input
                      id="order-phone"
                      type="tel"
                      required
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      placeholder="+256..."
                      className="w-full border border-[var(--border)] bg-[var(--bg)] px-3 py-2.5 text-sm focus:outline-none focus:border-[#9a1515]"
                      style={{ color: "#1a1410" }}
                    />
                  </div>

                  <div>
                    <p
                      className="block text-[0.7rem] tracking-[0.1em] uppercase font-bold mb-2"
                      style={{ color: "#1a1410" }}
                    >
                      Delivery / Pickup
                    </p>
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => setMethod("pickup")}
                        className={`flex-1 py-2.5 text-xs font-bold tracking-[0.1em] uppercase border transition-colors ${
                          method === "pickup"
                            ? "bg-[#9a1515] text-white border-[#9a1515]"
                            : "bg-white text-[var(--text)] border-[var(--border)]"
                        }`}
                      >
                        Pickup
                      </button>
                      <button
                        type="button"
                        onClick={() => setMethod("delivery")}
                        className={`flex-1 py-2.5 text-xs font-bold tracking-[0.1em] uppercase border transition-colors ${
                          method === "delivery"
                            ? "bg-[#9a1515] text-white border-[#9a1515]"
                            : "bg-white text-[var(--text)] border-[var(--border)]"
                        }`}
                      >
                        Delivery
                      </button>
                    </div>
                  </div>

                  {method === "delivery" && (
                    <div>
                      <label
                        htmlFor="order-address"
                        className="block text-[0.7rem] tracking-[0.1em] uppercase font-bold mb-1.5"
                        style={{ color: "#1a1410" }}
                      >
                        Address
                      </label>
                      <textarea
                        id="order-address"
                        required={method === "delivery"}
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="Street, area, landmarks"
                        rows={3}
                        className="w-full border border-[var(--border)] bg-[var(--bg)] px-3 py-2.5 text-sm focus:outline-none focus:border-[#9a1515] resize-none"
                        style={{ color: "#1a1410" }}
                      />
                    </div>
                  )}

                  <div>
                    <label
                      htmlFor="order-allergies"
                      className="block text-[0.7rem] tracking-[0.1em] uppercase font-bold mb-1.5"
                      style={{ color: "#1a1410" }}
                    >
                      Allergies{" "}
                      <span className="normal-case tracking-normal font-medium text-[var(--text-muted)]">
                        (optional)
                      </span>
                    </label>
                    <textarea
                      id="order-allergies"
                      value={allergies}
                      onChange={(e) => setAllergies(e.target.value)}
                      placeholder="e.g. shellfish, peanuts, gluten"
                      rows={2}
                      className="w-full border border-[var(--border)] bg-[var(--bg)] px-3 py-2.5 text-sm focus:outline-none focus:border-[#9a1515] resize-none"
                      style={{ color: "#1a1410" }}
                    />
                  </div>

                  {error && (
                    <p className="text-sm text-red-700 font-medium">{error}</p>
                  )}

                  {sent && (
                    <p className="text-sm font-medium" style={{ color: "#1b5e20" }}>
                      WhatsApp should have opened with your order. If not, check that
                      pop-ups are allowed.
                    </p>
                  )}

                  <button
                    type="submit"
                    className="w-full py-3.5 text-xs font-bold tracking-[0.12em] uppercase bg-[#25D366] text-white hover:bg-[#20bd5a] transition-colors soft-pill flex items-center justify-center gap-2"
                  >
                    <WhatsAppIcon />
                    Send order on WhatsApp
                  </button>

                  <p className="text-center text-xs" style={{ color: "#4a4038" }}>
                    Or{" "}
                    <Link href="/menu" className="font-semibold underline" style={{ color: "#9a1515" }}>
                      keep browsing the menu
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
