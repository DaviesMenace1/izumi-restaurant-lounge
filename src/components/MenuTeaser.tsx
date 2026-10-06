import Image from "next/image";
import Link from "next/link";
import { dishes as dishPhotos } from "@/data/media";
import { formatPrice } from "@/data/menu";
import ScrollReveal from "@/components/ScrollReveal";

const teasers = [
  {
    name: "Sushi and Sashimi",
    jp: "寿司 · 刺身",
    desc: "Fresh cuts from Dar es Salaam, chef selection platters.",
    price: 85000,
    href: "/menu/sushi",
    image: dishPhotos.plate1,
  },
  {
    name: "House Ramen and Curry",
    jp: "ラーメン · カレー",
    desc: "Rich broths, Gogo fish curry, and Japanese comfort bowls.",
    price: 40000,
    href: "/menu/ramen-curry",
    image: dishPhotos.plate2,
  },
  {
    name: "Bento and Mains",
    jp: "弁当 · メイン",
    desc: "Tonkatsu, karaage, teriyaki, and farm to table sets.",
    price: 45000,
    href: "/menu/bento",
    image: dishPhotos.plate3,
  },
];

export default function MenuTeaser() {
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {teasers.map((item, i) => (
            <ScrollReveal key={item.name} delay={i * 90}>
              <Link
                href={item.href}
                className="group block bg-white border border-[var(--border)] overflow-hidden menu-card shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    quality={90}
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04] brightness-105"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                </div>
                <div className="p-5 md:p-6">
                  <p className="jp text-xs mb-1" style={{ color: "#9a1515" }}>
                    {item.jp}
                  </p>
                  <h3
                    className="text-lg font-semibold mb-2 tracking-[0.02em]"
                    style={{ color: "#1a1410" }}
                  >
                    {item.name}
                  </h3>
                  <p className="text-sm leading-relaxed mb-3" style={{ color: "#4a4038" }}>
                    {item.desc}
                  </p>
                  <p className="text-sm font-bold" style={{ color: "#9a1515" }}>
                    From {formatPrice(item.price)}
                  </p>
                </div>
              </Link>
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
