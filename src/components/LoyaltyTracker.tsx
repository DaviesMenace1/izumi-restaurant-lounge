"use client";

import { useState } from "react";
import { loyaltyRules } from "@/data/loyalty";
import {
  getMemberByPhone,
  upsertMember,
  type LoyaltyMember,
} from "@/lib/loyaltyStore";

export default function LoyaltyTracker() {
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [member, setMember] = useState<LoyaltyMember | null>(null);
  const [message, setMessage] = useState("");

  function lookup() {
    setMessage("");
    if (!phone.trim()) {
      setMessage("Enter the phone number on your loyalty card.");
      return;
    }
    const found = getMemberByPhone(phone);
    if (found) {
      setMember(found);
      setName(found.name);
      setMessage("");
    } else {
      setMember(null);
      setMessage("No card found for this number. Join below or use the same phone when you order.");
    }
  }

  function register() {
    if (!name.trim() || !phone.trim()) {
      setMessage("Name and phone are required to create your card.");
      return;
    }
    const m = upsertMember({ name, phone });
    setMember(m);
    setMessage("Card saved on this device. Use the same phone when ordering so staff can stamp you.");
  }

  const filled = member?.stamps ?? 0;
  const stamps = Array.from({ length: loyaltyRules.totalStampsOnCard }, (_, i) => i + 1);
  const towardLottery = filled % loyaltyRules.stampsPerLottery;
  const nextLottery = loyaltyRules.stampsPerLottery - towardLottery;

  return (
    <div className="space-y-6">
      <div className="bg-white border border-[var(--border)] p-5 md:p-6 shadow-sm">
        <h3
          className="text-lg font-semibold mb-2"
          style={{ color: "#1a1410", fontFamily: "var(--font-display), Georgia, serif" }}
        >
          See my stamps
        </h3>
        <p className="text-sm mb-4" style={{ color: "#4a4038" }}>
          Enter the WhatsApp number you use when ordering. Stamps are saved on this
          device after eligible orders (UGX {loyaltyRules.stampSpendUgx.toLocaleString()}+
          per stamp). Staff also stamp your physical card when they confirm the order.
        </p>

        <div className="grid sm:grid-cols-2 gap-3 mb-3">
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone / WhatsApp"
            className="w-full border border-[var(--border)] px-3 py-2.5 text-sm focus:outline-none focus:border-[#9a1515]"
            style={{ color: "#1a1410" }}
          />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name (to create card)"
            className="w-full border border-[var(--border)] px-3 py-2.5 text-sm focus:outline-none focus:border-[#9a1515]"
            style={{ color: "#1a1410" }}
          />
        </div>

        <div className="flex flex-wrap gap-2">
          <button type="button" onClick={lookup} className="btn-outline">
            View stamps
          </button>
          <button type="button" onClick={register} className="btn-cream">
            Create / update card
          </button>
        </div>

        {message && (
          <p className="text-sm mt-3 font-medium" style={{ color: "#4a4038" }}>
            {message}
          </p>
        )}
      </div>

      {member && (
        <div
          className="border-2 border-[#c9b48a] bg-[#faf6ef] p-6 shadow-md"
          style={{ borderRadius: "4px" }}
        >
          <div className="flex justify-between items-start gap-3 mb-4">
            <div>
              <p
                className="text-xl font-semibold tracking-[0.08em] uppercase"
                style={{ color: "#1a1410", fontFamily: "var(--font-display), Georgia, serif" }}
              >
                {member.name}
              </p>
              <p className="text-sm" style={{ color: "#4a4038" }}>
                {member.phone}
              </p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold" style={{ color: "#9a1515" }}>
                {filled}
              </p>
              <p className="text-[0.65rem] tracking-wider uppercase font-bold" style={{ color: "#4a4038" }}>
                stamps
              </p>
            </div>
          </div>

          <div className="grid grid-cols-10 gap-1.5 mb-3">
            {stamps.map((n) => (
              <div
                key={n}
                className={`aspect-square rounded-full border ${
                  n <= filled
                    ? "bg-[#9a1515] border-[#9a1515]"
                    : "bg-white border-[#1a1410]/35"
                }`}
                title={n <= filled ? `Stamp ${n} earned` : `Stamp ${n}`}
              />
            ))}
          </div>

          <p className="text-sm" style={{ color: "#4a4038" }}>
            {towardLottery === 0 && filled > 0
              ? "You have reached a lottery checkpoint. Ask staff about the draw."
              : `${nextLottery} more stamp${nextLottery === 1 ? "" : "s"} until the next lottery entry.`}
          </p>
        </div>
      )}
    </div>
  );
}
