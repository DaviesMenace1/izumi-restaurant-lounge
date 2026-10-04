import type { Metadata } from "next";
import Link from "next/link";
import {
  loyaltyLocations,
  loyaltyPrizes,
  loyaltyRules,
  loyaltySummary,
} from "@/data/loyalty";
import LoyaltyJoinForm from "@/components/LoyaltyJoinForm";

export const metadata: Metadata = {
  title: "Loyalty Card",
  description:
    "Join the Yamasen Loyalty Card. Earn 1 stamp per UGX 30,000 spent. Lottery every 10 stamps. Valid at Yamasen, Farm to Table, and Klafts.",
};

export default function LoyaltyPage() {
  const stamps = Array.from({ length: loyaltyRules.totalStampsOnCard }, (_, i) => i + 1);

  return (
    <div className="pt-[72px]">
      <section className="py-14 md:py-20 px-5 bg-[var(--bg)]">
        <div className="max-w-[1000px] mx-auto text-center mb-14">
          <p className="eyebrow mb-3">Membership</p>
          <h1
            className="text-[clamp(2.2rem,5vw,3.4rem)] font-semibold tracking-[0.03em] mb-4"
            style={{ color: "#1a1410" }}
          >
            Loyalty Card
          </h1>
          <p className="text-[0.95rem] leading-relaxed max-w-2xl mx-auto" style={{ color: "#4a4038" }}>
            {loyaltySummary}
          </p>
        </div>

        <div className="max-w-[1000px] mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Physical-style card */}
          <div
            className="border-2 border-[#c9b48a] bg-[#faf6ef] p-6 md:p-8 shadow-md"
            style={{ borderRadius: "4px" }}
          >
            <div className="flex items-start justify-between gap-4 mb-5">
              <div>
                <p
                  className="text-xl font-semibold tracking-[0.12em] uppercase mb-1"
                  style={{ color: "#1a1410", fontFamily: "var(--font-display), Georgia, serif" }}
                >
                  Loyalty Card
                </p>
                <p className="text-xs font-bold tracking-wide" style={{ color: "#9a1515" }}>
                  Delivery Order Available
                </p>
              </div>
              <div className="w-16 h-16 border border-[#1a1410]/20 flex items-center justify-center text-[0.55rem] text-center leading-tight p-1" style={{ color: "#4a4038" }}>
                Ask staff for QR
              </div>
            </div>

            <ul className="space-y-1.5 mb-6 text-sm" style={{ color: "#1a1410" }}>
              {loyaltyLocations.map((loc) => (
                <li key={loc.name} className="flex flex-wrap items-baseline gap-x-2">
                  <span className="font-bold">{loc.name}</span>
                  {loc.phone && (
                    <a href={`tel:${loc.phone.replace(/\s/g, "")}`} className="text-[#9a1515]">
                      {loc.phone}
                    </a>
                  )}
                </li>
              ))}
            </ul>

            <p className="text-xs mb-3 font-medium" style={{ color: "#4a4038" }}>
              Stamps are awarded for use at the three locations above.
            </p>

            {/* 50 stamp circles */}
            <div className="grid grid-cols-10 gap-1.5 mb-2">
              {stamps.map((n) => (
                <div
                  key={n}
                  className="aspect-square rounded-full border border-[#1a1410]/35 bg-white"
                  title={`Stamp ${n}`}
                />
              ))}
            </div>
            <div className="flex justify-between text-[0.65rem] font-bold tracking-wider mb-6" style={{ color: "#4a4038" }}>
              <span>10</span>
              <span>20</span>
              <span>30</span>
              <span>40</span>
              <span>50</span>
            </div>

            <div className="grid grid-cols-3 gap-3 text-xs border-t border-[#1a1410]/15 pt-4" style={{ color: "#4a4038" }}>
              <div>
                <p className="uppercase tracking-wider font-bold mb-1">Name</p>
                <div className="h-6 border-b border-[#1a1410]/25" />
              </div>
              <div>
                <p className="uppercase tracking-wider font-bold mb-1">Birthday</p>
                <div className="h-6 border-b border-[#1a1410]/25" />
              </div>
              <div>
                <p className="uppercase tracking-wider font-bold mb-1">WhatsApp</p>
                <div className="h-6 border-b border-[#1a1410]/25" />
              </div>
            </div>
          </div>

          {/* How it works + prizes */}
          <div>
            <h2
              className="text-2xl font-semibold mb-3 tracking-[0.04em]"
              style={{ color: "#1a1410", fontFamily: "var(--font-display), Georgia, serif" }}
            >
              How it works
            </h2>
            <ol className="space-y-3 mb-8 text-[0.95rem]" style={{ color: "#4a4038" }}>
              <li className="flex gap-3">
                <span className="font-bold text-[#9a1515]">1.</span>
                <span>
                  Spend UGX {loyaltyRules.stampSpendUgx.toLocaleString()} or more in a visit and
                  receive 1 stamp.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-[#9a1515]">2.</span>
                <span>
                  Collect stamps at Yamasen, Farm to Table, or Klafts. One card works at all three.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-[#9a1515]">3.</span>
                <span>
                  Every {loyaltyRules.stampsPerLottery} stamps, enter the loyalty lottery for prizes.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-[#9a1515]">4.</span>
                <span>Ask our staff about your Loyalty Card on your next visit.</span>
              </li>
            </ol>

            <h2
              className="text-2xl font-semibold mb-4 tracking-[0.04em]"
              style={{ color: "#1a1410", fontFamily: "var(--font-display), Georgia, serif" }}
            >
              Lottery prizes
            </h2>
            <ul className="space-y-3 mb-10">
              {loyaltyPrizes.map((p) => (
                <li
                  key={p.place}
                  className="border border-[var(--border)] bg-white px-4 py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1"
                >
                  <span className="text-xs font-bold tracking-[0.12em] uppercase text-[#9a1515]">
                    {p.place}
                  </span>
                  <span className="text-sm font-medium" style={{ color: "#1a1410" }}>
                    {p.title}
                  </span>
                </li>
              ))}
            </ul>

            <div className="bg-white border border-[var(--border)] p-6 md:p-7 shadow-sm">
              <h3
                className="text-lg font-semibold mb-4"
                style={{ color: "#1a1410", fontFamily: "var(--font-display), Georgia, serif" }}
              >
                Join the programme
              </h3>
              <LoyaltyJoinForm />
            </div>
          </div>
        </div>

        <div className="max-w-[1000px] mx-auto mt-14 text-center">
          <p className="text-sm mb-5" style={{ color: "#4a4038" }}>
            Prefer to order for delivery while earning stamps? Browse the menu and send your order
            on WhatsApp.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/menu" className="btn-cream inline-flex justify-center">
              Food Menu
            </Link>
            <a
              href="https://wa.me/256707808010?text=Hello%20Yamasen%2C%20I%20would%20like%20to%20place%20a%20delivery%20order."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline inline-flex justify-center"
            >
              Delivery Order
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
