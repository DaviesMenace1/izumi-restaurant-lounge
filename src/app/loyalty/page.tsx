import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Loyalty",
  description:
    "Yamasen loyalty programme is still being prepared in the kitchen. Check back soon.",
};

export default function LoyaltyPage() {
  return (
    <div className="pt-[72px]">
      <section className="py-20 md:py-28 px-5 bg-[var(--bg)] min-h-[60vh] flex items-center">
        <div className="max-w-xl mx-auto text-center">
          <p className="eyebrow mb-4">Membership</p>
          <h1
            className="text-[clamp(2.2rem,5vw,3.2rem)] font-semibold tracking-[0.03em] mb-5"
            style={{ color: "#1a1410" }}
          >
            Loyalty programme
          </h1>
          <p
            className="text-[1.05rem] leading-relaxed mb-4"
            style={{ color: "#4a4038" }}
          >
            Our loyalty programme is still in the kitchen.
          </p>
          <p
            className="text-[0.95rem] leading-relaxed mb-10"
            style={{ color: "#4a4038" }}
          >
            We are preparing stamps, rewards, and membership details. When it is
            ready, you will find everything here. Until then, enjoy dining with us
            and order from the menu as usual.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/menu" className="btn-cream inline-flex justify-center">
              View Menu
            </Link>
            <Link href="/reservations" className="btn-outline inline-flex justify-center">
              Book a Table
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
