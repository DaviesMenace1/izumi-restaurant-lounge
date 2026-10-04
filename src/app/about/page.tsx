import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { venue } from "@/data/media";

export const metadata: Metadata = {
  title: "About",
  description:
    "Yamasen Japanese Restaurant is a farm to table Japanese restaurant in Kampala. Organic farm produce, Kyoto trained kitchen, Ugandan inspired dishes.",
};

export default function AboutPage() {
  return (
    <div className="pt-[72px]">
      <section className="relative min-h-[42vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={venue.nightExterior}
            alt="Yamasen"
            fill
            priority
            quality={90}
            className="object-cover brightness-110"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/35 to-black/15" />
        </div>
        <div className="relative z-10 px-5 pb-12 max-w-[1100px] mx-auto w-full">
          <p className="text-[0.7rem] tracking-[0.25em] uppercase text-white/90 mb-2">Our Story</p>
          <h1 className="text-[clamp(2.2rem,5vw,3.4rem)] font-bold text-white max-w-2xl leading-tight">
            Farm to table Japanese in Kampala
          </h1>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[1100px] w-[92%]">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
            <div className="space-y-5 text-[1.05rem] leading-relaxed" style={{ color: "#4a4038" }}>
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
                and dinner. We deliver bento boxes across Kampala and welcome you for a
                quiet meal or a celebration.
              </p>
            </div>
            <div className="relative aspect-[4/5] overflow-hidden blob shadow-lg">
              <Image
                src={venue.hallDay}
                alt="Yamasen interior hall"
                fill
                quality={90}
                className="object-cover brightness-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-3">
            {[venue.seating, venue.garden, venue.outdoor].map((src, i) => (
              <div key={i} className="relative aspect-[4/3] overflow-hidden blob-sm">
                <Image src={src} alt="Yamasen space" fill quality={88} className="object-cover brightness-105" sizes="33vw" />
              </div>
            ))}
          </div>

          <div className="mt-16 grid sm:grid-cols-2 gap-8 pt-12 border-t border-[var(--border)]">
            <div>
              <h3 className="text-xl font-bold mb-2" style={{ color: "#9a1515" }}>Farm</h3>
              <p className="text-sm" style={{ color: "#4a4038" }}>
                Organic vegetables grown for our kitchen and circular food practices with
                local partners.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2" style={{ color: "#9a1515" }}>Kyoto</h3>
              <p className="text-sm" style={{ color: "#4a4038" }}>
                Traditional Japanese technique and presentation, led by a Kyoto trained
                approach.
              </p>
            </div>
          </div>

          <div className="mt-14 flex flex-wrap gap-3">
            <Link href="/reservations" className="btn-cream inline-flex justify-center">
              Reserve a Table
            </Link>
            <Link href="/menu" className="btn-outline inline-flex justify-center">
              View Menu
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
