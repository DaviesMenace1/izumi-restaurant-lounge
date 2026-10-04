"use client";

import { useState, FormEvent } from "react";

export default function ReservationForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const name = data.get("name") || "";
    const phone = data.get("phone") || "";
    const date = data.get("date") || "";
    const time = data.get("time") || "";
    const guests = data.get("guests") || "";
    const occasion = data.get("occasion") || "";
    const notes = data.get("notes") || "";

    let message = `Hello Yamasen, I would like to request a reservation:\n\n`;
    message += `Name: ${name}\n`;
    message += `Phone: ${phone}\n`;
    message += `Date: ${date}\n`;
    message += `Time: ${time}\n`;
    message += `Guests: ${guests}\n`;
    if (occasion) message += `Occasion: ${occasion}\n`;
    if (notes) message += `Notes: ${notes}\n`;

    const encoded = encodeURIComponent(message);
    const whatsapp = `https://wa.me/256707808010?text=${encoded}`;

    setStatus("sending");
    window.open(whatsapp, "_blank");

    setTimeout(() => {
      setStatus("sent");
      form.reset();
      setTimeout(() => setStatus("idle"), 3000);
    }, 800);
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-[0.7rem] tracking-[0.1em] uppercase text-[var(--text-muted)]">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            required
            placeholder="Your name"
            className="bg-[var(--bg)] border border-[var(--border)] text-[var(--text)] px-4 py-3 text-sm soft-pill focus:outline-none focus:border-[#b71c1c] transition-colors"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="phone" className="text-[0.7rem] tracking-[0.1em] uppercase text-[var(--text-muted)]">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="+256 ..."
            className="bg-[var(--bg)] border border-[var(--border)] text-[var(--text)] px-4 py-3 text-sm soft-pill focus:outline-none focus:border-[#b71c1c] transition-colors"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="date" className="text-[0.7rem] tracking-[0.1em] uppercase text-[var(--text-muted)]">
            Date
          </label>
          <input
            id="date"
            name="date"
            type="date"
            required
            min={today}
            className="bg-[var(--bg)] border border-[var(--border)] text-[var(--text)] px-4 py-3 text-sm soft-pill focus:outline-none focus:border-[#b71c1c] transition-colors"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="time" className="text-[0.7rem] tracking-[0.1em] uppercase text-[var(--text-muted)]">
            Time
          </label>
          <select
            id="time"
            name="time"
            required
            className="bg-[var(--bg)] border border-[var(--border)] text-[var(--text)] px-4 py-3 text-sm soft-pill focus:outline-none focus:border-[#b71c1c] transition-colors"
          >
            <option value="">Select</option>
            {["12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00"].map(
              (t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              )
            )}
          </select>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="guests" className="text-[0.7rem] tracking-[0.1em] uppercase text-[var(--text-muted)]">
            Guests
          </label>
          <select
            id="guests"
            name="guests"
            required
            className="bg-[var(--bg)] border border-[var(--border)] text-[var(--text)] px-4 py-3 text-sm soft-pill focus:outline-none focus:border-[#b71c1c] transition-colors"
          >
            <option value="">Select</option>
            {["1", "2", "3", "4", "5", "6", "7", "8+"].map((g) => (
              <option key={g} value={g}>
                {g}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="occasion" className="text-[0.7rem] tracking-[0.1em] uppercase text-[var(--text-muted)]">
            Occasion (optional)
          </label>
          <input
            id="occasion"
            name="occasion"
            placeholder="Birthday, date night..."
            className="bg-[var(--bg)] border border-[var(--border)] text-[var(--text)] px-4 py-3 text-sm soft-pill focus:outline-none focus:border-[#b71c1c] transition-colors"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="notes" className="text-[0.7rem] tracking-[0.1em] uppercase text-[var(--text-muted)]">
          Special Requests
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={3}
          placeholder="Dietary needs, preferred seating..."
          className="bg-[var(--bg)] border border-[var(--border)] text-[var(--text)] px-4 py-3 text-sm focus:outline-none focus:border-[#b71c1c] transition-colors resize-y"
          style={{ borderRadius: "18px 24px 16px 22px" }}
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full py-3.5 text-xs font-semibold tracking-[0.1em] uppercase bg-[#b71c1c] text-white hover:bg-[#c62828] transition-colors disabled:opacity-70 soft-pill"
      >
        {status === "sending" ? "Opening WhatsApp..." : status === "sent" ? "Request Sent" : "Request Reservation"}
      </button>
      <p className="text-center text-xs text-[var(--text-muted)]">
        We will confirm via WhatsApp or phone. For large groups, call us directly.
      </p>
    </form>
  );
}
