"use client";

import Image from "next/image";
import Link from "next/link";
import { dishes as dishPhotos } from "@/data/media";
import { formatPrice, getDishBySlug } from "@/data/menu";
import { useCart } from "@/context/CartContext";
import ScrollReveal from "@/components/ScrollReveal";

const teasers = [
  {
    slug: "sushi-platter",
    name: "Sushi Platter",
    jp: "寿司盛り合わせ",
    desc: "Chef selection of nigiri and maki with seasonal fish from Dar es Salaam.",
    price: 85000,
    href: "/menu/sushi/sushi-platter",
    image: dishPhotos.plate1,
  },
  {
    slug: "gogo-fish-curry",
    name: "Gogo Fish Curry",
    jp: "ゴーゴー魚カレー",
    desc: "Curry made with fish broth. Fried fish finished in the sauce.",
    price: 40000,
    href: "/menu/ramen-curry/gogo-fish-curry",
    image: dishPhotos.plate2,
  },
  {
    slug: "tonkatsu-bento",
    name: "Tonkatsu Bento",
    jp: "とんかつ弁当",
    desc: "Pork cutlet with rice, pickles and side vegetables.",
    price: 45000,
    href: "/menu/bento/tonkatsu-bento",
    image: dishPhotos.plate3,
  },
  {
    slug: "pork-ramen",
    name: "Pork Soy Sauce Ramen",
    jp: "醤油豚ラーメン",
    desc: "Rich soy broth, roast pork, egg and noodles.",
    price: 48000,
    href: "/menu/ramen-curry/pork-ramen",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&q=80",
  },
];

export default function MenuTeaser() {
  const { addItem } = useCart();

  return (
    <section className="py-16 md:py-24 px-5 bg-[var(--bg)]">
      <div className="max-w-[1100px] mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12 md:mb-14">
            <p className="jp text-sm mb-2" style={{ color: "#9a1515" }}>
              メニュー
            </p>
            <p className="eyebrow mb-3">From the kitchen</p>
            <h2
              className="text-[clamp(1.75rem,4vw,2.6rem)] font-semibold tracking-[0.02em] mb-4"
              style={{ color: "#1a1410" }}
            >
              A Taste of Yamasen
            </h2>
            <p
              className="text-[0.95rem] leading-relaxed max-w-xl mx-auto"
              style={{ color: "#4a4038" }}
            >
              Sushi, ramen, bento, and Kyoto style plates. Organic farm greens,
              coastal seafood, and dishes you will only find here in Kampala.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {teasers.map((item, i) => (
            <ScrollReveal key={item.slug} delay={i * 80}>
              <article className="group flex flex-col h-full bg-white border border-[var(--border)] overflow-hidden menu-card shadow-sm hover:shadow-md transition-shadow rounded-[1.25rem]">
                <Link
                  href={item.href}
                  className="relative block aspect-[4/3] overflow-hidden shrink-0"
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    quality={90}
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04] brightness-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </Link>
                <div className="flex flex-col flex-1 p-4 md:p-5">
                  <p className="jp text-xs mb-1" style={{ color: "#9a1515" }}>
                    {item.jp}
                  </p>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <Link href={item.href} className="min-w-0 flex-1">
                      <h3
                        className="text-base md:text-lg font-semibold tracking-[0.02em] leading-snug hover:text-[#9a1515] transition-colors"
                        style={{ color: "#1a1410" }}
                      >
                        {item.name}
                      </h3>
                    </Link>
                    <button
                      type="button"
                      onClick={() => {
                        const dish = getDishBySlug(item.slug);
                        addItem({
                          id: dish?.id ?? item.slug,
                          slug: item.slug,
                          name: item.name,
                          price: item.price,
                          image: item.image,
                        });
                      }}
                      className="inline-flex items-center justify-center w-9 h-9 shrink-0 soft-pill border-2 border-[#1a1410]/25 text-[#9a1515] text-xl font-bold hover:bg-[#9a1515] hover:text-white hover:border-[#9a1515] transition-colors"
                      aria-label={`Add ${item.name} to cart`}
                    >
                      +
                    </button>
                  </div>
                  <p className="text-sm leading-relaxed mb-3 flex-1" style={{ color: "#4a4038" }}>
                    {item.desc}
                  </p>
                  <p className="text-sm font-bold" style={{ color: "#9a1515" }}>
                    {formatPrice(item.price)}
                  </p>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <div className="text-center mt-10 md:mt-12">
          <Link href="/menu" className="btn-cream inline-flex justify-center">
            Explore Full Menu
          </Link>
        </div>
      </div>
    </section>
  );
}
