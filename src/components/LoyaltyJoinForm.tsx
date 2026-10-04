"use client";

import { useState, FormEvent } from "react";

export default function LoyaltyJoinForm() {
  const [name, setName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [whatsapp, setWhatsapp] = useState("");

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const lines = [
      "Hello Yamasen, I would like to join the Loyalty Card programme.",
      "",
      `Name: ${name.trim()}`,
      birthday.trim() ? `Birthday: ${birthday.trim()}` : null,
      `WhatsApp: ${whatsapp.trim()}`,
    ].filter(Boolean);

    const text = encodeURIComponent(lines.join("\n"));
    window.open(`https://wa.me/256707808010?text=${text}`, "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <label className="block text-[0.7rem] tracking-[0.12em] uppercase font-bold mb-1.5" style={{ color: "#1a1410" }}>
          Name
        </label>
        <input
          required
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border border-[var(--border)] bg-white px-4 py-3 text-sm focus:outline-none focus:border-[#9a1515]"
          style={{ color: "#1a1410" }}
          placeholder="Your full name"
        />
      </div>
      <div>
        <label className="block text-[0.7rem] tracking-[0.12em] uppercase font-bold mb-1.5" style={{ color: "#1a1410" }}>
          Birthday
        </label>
        <input
          type="date"
          value={birthday}
          onChange={(e) => setBirthday(e.target.value)}
          className="w-full border border-[var(--border)] bg-white px-4 py-3 text-sm focus:outline-none focus:border-[#9a1515]"
          style={{ color: "#1a1410" }}
        />
      </div>
      <div>
        <label className="block text-[0.7rem] tracking-[0.12em] uppercase font-bold mb-1.5" style={{ color: "#1a1410" }}>
          WhatsApp
        </label>
        <input
          required
          type="tel"
          value={whatsapp}
          onChange={(e) => setWhatsapp(e.target.value)}
          className="w-full border border-[var(--border)] bg-white px-4 py-3 text-sm focus:outline-none focus:border-[#9a1515]"
          style={{ color: "#1a1410" }}
          placeholder="+256..."
        />
      </div>
      <button type="submit" className="btn-cream w-full inline-flex justify-center">
        Join via WhatsApp
      </button>
      <p className="text-xs leading-relaxed" style={{ color: "#4a4038" }}>
        Staff will confirm your card in person or after your next visit. Stamps are
        awarded when you spend UGX 30,000 or more at Yamasen, Farm to Table, or Klafts.
      </p>
    </form>
  );
}
