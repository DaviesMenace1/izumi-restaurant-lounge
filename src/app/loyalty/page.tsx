import type { Metadata } from "next";
import Link from "next/link";
import {
  loyaltyLocations,
  loyaltyPrizes,
  loyaltyRules,
  loyaltySummary,
} from "@/data/loyalty";
import LoyaltyJoinForm from "@/components/LoyaltyJoinForm";
import LoyaltyTracker from "@/components/LoyaltyTracker";

export const metadata: Metadata = {
  title: "Loyalty Card",
  description:
    "Join the Yamasen Loyalty Card. Earn 1 stamp per UGX 30,000 spent. Lottery every 10 stamps. Valid at Yamasen, Farm to Table, and Klafts.",
};

export default function LoyaltyPage() {
  return (
    <div className="pt-[72px]">
      <section className="py-14 md:py-20 px-5 bg-[var(--bg)]">
        <div className="max-w-[1000px] mx-auto text-center mb-12">
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

        <div className="max-w-[1000px] mx-auto mb-14">
          <LoyaltyTracker />
        </div>

        <div className="max-w-[1000px] mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div>
            <h2
              className="text-2xl font-semibold mb-3 tracking-[0.04em]"
              style={{ color: "#1a1410", fontFamily: "var(--font-display), Georgia, serif" }}
            >
              How stamps work with WhatsApp orders
            </h2>
            <ol className="space-y-3 mb-8 text-[0.95rem]" style={{ color: "#4a4038" }}>
              <li className="flex gap-3">
                <span className="font-bold text-[#9a1515]">1.</span>
                <span>
                  Create your card here (or tick Loyalty member in the cart) using the same
                  phone number you order with.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-[#9a1515]">2.</span>
                <span>
                  Place an order of UGX {loyaltyRules.stampSpendUgx.toLocaleString()} or more.
                  The WhatsApp message asks staff to add your stamp(s).
                </span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-[#9a1515]">3.</span>
                <span>
                  Your stamp count updates on this device when you send the order. Staff also
                  mark the physical card when they confirm.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-[#9a1515]">4.</span>
                <span>
                  Return to this page, enter your phone, and view filled stamps anytime.
                </span>
              </li>
            </ol>

            <p className="text-sm mb-6" style={{ color: "#4a4038" }}>
              Valid at:
            </p>
            <ul className="space-y-2 mb-8 text-sm" style={{ color: "#1a1410" }}>
              {loyaltyLocations.map((loc) => (
                <li key={loc.name} className="font-medium">
                  {loc.name}
                  {loc.phone ? ` · ${loc.phone}` : ""}
                </li>
              ))}
            </ul>

            <h2
              className="text-2xl font-semibold mb-4 tracking-[0.04em]"
              style={{ color: "#1a1410", fontFamily: "var(--font-display), Georgia, serif" }}
            >
              Lottery prizes
            </h2>
            <ul className="space-y-3">
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
          </div>

          <div className="bg-white border border-[var(--border)] p-6 md:p-7 shadow-sm">
            <h3
              className="text-lg font-semibold mb-4"
              style={{ color: "#1a1410", fontFamily: "var(--font-display), Georgia, serif" }}
            >
              Join via WhatsApp
            </h3>
            <LoyaltyJoinForm />
          </div>
        </div>

        <div className="max-w-[1000px] mx-auto mt-14 text-center">
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/menu" className="btn-cream inline-flex justify-center">
              Order and earn stamps
            </Link>
            <Link href="/contact" className="btn-outline inline-flex justify-center">
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
