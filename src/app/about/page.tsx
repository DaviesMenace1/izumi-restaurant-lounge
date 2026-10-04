import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Yamasen Japanese Restaurant is a farm to table Japanese restaurant in Kampala. Organic farm produce, Kyoto trained kitchen, Ugandan inspired dishes.",
};

const IMG = {
  farm: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&q=90",
  kitchen: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1200&q=90",
  produce: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=1200&q=90",
};

export default function AboutPage() {
  return (
    <div className="pt-[72px]">
      <section className="relative min-h-[42vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image src={IMG.kitchen} alt="Yamasen" fill priority quality={90} className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/40 to-black/20" />
        </div>
        <div className="relative z-10 px-5 pb-12 max-w-[1100px] mx-auto w-full">
          <p className="text-[0.7rem] tracking-[0.25em] uppercase text-white/80 mb-2">Our Story</p>
          <h1 className="text-[clamp(2.2rem,5vw,3.4rem)] font-bold text-white max-w-2xl leading-tight">
            Farm to table Japanese in Kampala
          </h1>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[1100px] w-[92%]">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
            <div className="space-y-5 text-[var(--text-muted)] text-[1.05rem] leading-relaxed">
              <p>
                YAMASEN Japanese Restaurant is a farm to table Japanese restaurant in
                Kampala, Uganda. Organic vegetables from our own farm, fresh ingredients
                from local suppliers, and seafood from Dar es Salaam are cooked in
                traditional authentic Japanese cuisine.
              </p>
              <p>
                The owner trained in Kyoto. Guests from Uganda and neighbouring countries
                come for sushi, ramen, bento, omakase and dishes that blend Japanese
                technique with Ugandan food culture.
              </p>
              <p>
                Our timber open air hall at Tank Hill Park offers a calm setting for lunch
                and dinner. We also run a loyalty programme across our sister spots Farm to
                Table and Klafts, and deliver bento boxes across Kampala.
              </p>
            </div>
            <div className="relative aspect-[4/5] overflow-hidden blob shadow-lg">
              <Image
                src={IMG.farm}
                alt="Yamasen farm"
                fill
                quality={90}
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          <div className="mt-16 grid sm:grid-cols-3 gap-8 pt-12 border-t border-[var(--border)]">
            <div>
              <h3 className="text-xl font-bold text-[#b71c1c] mb-2">Farm</h3>
              <p className="text-sm text-[var(--text-muted)]">
                Organic vegetables grown for our kitchen and circular food practices with
                local partners.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#b71c1c] mb-2">Kyoto</h3>
              <p className="text-sm text-[var(--text-muted)]">
                Traditional Japanese technique and presentation, led by a Kyoto trained
                approach.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#b71c1c] mb-2">4.6</h3>
              <p className="text-sm text-[var(--text-muted)]">
                TripAdvisor rating with 106 reviews. Ranked among the top restaurants in
                Kampala.
              </p>
            </div>
          </div>

          <div className="mt-14 flex flex-wrap gap-3">
            <Link
              href="/reservations"
              className="inline-flex px-7 py-3.5 text-xs font-semibold tracking-[0.1em] uppercase bg-[#b71c1c] text-white soft-pill"
            >
              Reserve a Table
            </Link>
            <Link
              href="/menu"
              className="inline-flex px-7 py-3.5 text-xs font-semibold tracking-[0.1em] uppercase border border-[var(--border)] text-[var(--text)] soft-pill"
            >
              View Menu
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
