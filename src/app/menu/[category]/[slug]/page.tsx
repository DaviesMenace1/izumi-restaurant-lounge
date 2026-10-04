import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  dishes,
  getDishBySlug,
  formatPrice,
  getCategory,
  type CategorySlug,
} from "@/data/menu";
import AddToCartButton from "@/components/AddToCartButton";

type Props = { params: Promise<{ category: string; slug: string }> };

const categoryJp: Record<string, string> = {
  sushi: "寿司・刺身",
  bento: "弁当",
  appetizers: "前菜",
  mains: "メイン",
  "ramen-curry": "ラーメン・カレー",
  donburi: "丼",
  grills: "焼物",
  "salads-soups": "サラダ・スープ",
  desserts: "デザート",
  drinks: "ドリンク",
};

export async function generateStaticParams() {
  return dishes.map((d) => ({
    category: d.category,
    slug: d.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const dish = getDishBySlug(slug);
  if (!dish) return { title: "Dish" };
  return { title: dish.name, description: dish.description };
}

export default async function DishByCategoryPage({ params }: Props) {
  const { category, slug } = await params;
  const dish = getDishBySlug(slug);
  if (!dish) notFound();

  if (dish.category !== category) notFound();

  const cat = getCategory(dish.category as CategorySlug);
  const pairings = (dish.pairings || [])
    .map((s) => getDishBySlug(s))
    .filter(Boolean);

  return (
    <div className="pt-[72px]">
      <section className="py-8 md:py-14">
        <div className="mx-auto max-w-[1000px] w-[92%]">
          <nav className="text-[0.7rem] tracking-[0.08em] uppercase text-[var(--text-muted)] mb-6 flex flex-wrap gap-2 items-center">
            <Link href="/menu" className="hover:text-[#9a1515]">
              Menu
            </Link>
            <span>/</span>
            {cat && (
              <>
                <Link href={`/menu/${cat.slug}`} className="hover:text-[#9a1515]">
                  {cat.name}
                </Link>
                <span>/</span>
              </>
            )}
            <span style={{ color: "#9a1515" }}>{dish.name}</span>
          </nav>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            <div className="relative aspect-square md:aspect-[4/5] overflow-hidden border border-[var(--border)] bg-white shadow-xl" style={{ borderRadius: "1.25rem" }}>
              <Image
                src={dish.image}
                alt={dish.name}
                fill
                className="object-cover brightness-105"
                priority
                quality={90}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            <div>
              <p className="jp text-sm mb-2" style={{ color: "#9a1515" }}>
                {categoryJp[dish.category] || "料理"}
              </p>

              <div className="flex flex-wrap gap-2 mb-3">
                {cat && (
                  <span className="text-[0.65rem] tracking-[0.12em] uppercase border border-[var(--border)] px-2 py-1 soft-pill font-semibold" style={{ color: "#4a4038" }}>
                    {cat.name}
                  </span>
                )}
                {dish.popular && (
                  <span className="text-[0.65rem] tracking-[0.12em] uppercase bg-[#9a1515] text-white px-2 py-1 soft-pill font-semibold">
                    Popular
                  </span>
                )}
                {dish.spicy && (
                  <span className="text-[0.65rem] tracking-[0.12em] uppercase bg-red-800 text-white px-2 py-1 soft-pill font-semibold">
                    Spicy
                  </span>
                )}
                {dish.vegetarian && (
                  <span className="text-[0.65rem] tracking-[0.12em] uppercase border border-green-700 text-green-800 px-2 py-1 soft-pill font-semibold">
                    Vegetarian
                  </span>
                )}
              </div>

              <h1
                className="text-[clamp(1.75rem,4vw,2.5rem)] font-semibold leading-tight mb-3"
                style={{ color: "#1a1410", fontFamily: "var(--font-display), Georgia, serif" }}
              >
                {dish.name}
              </h1>

              <p className="leading-relaxed mb-5" style={{ color: "#4a4038" }}>
                {dish.description}
              </p>

              <p className="text-3xl font-bold mb-8" style={{ color: "#9a1515" }}>
                {formatPrice(dish.price)}
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <AddToCartButton
                  id={dish.id}
                  slug={dish.slug}
                  name={dish.name}
                  price={dish.price}
                  image={dish.image}
                  label="Add to order"
                />
                <a
                  href={`https://wa.me/256707808010?text=${encodeURIComponent(
                    `Hello Yamasen, I would like to order: ${dish.name} (${formatPrice(dish.price)})`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center items-center gap-2 px-7 py-3.5 text-xs font-bold tracking-[0.12em] uppercase bg-[#25D366] text-white hover:bg-[#20bd5a] transition-colors soft-pill"
                >
                  WhatsApp
                </a>
              </div>

              <p className="jp text-xs mt-8" style={{ color: "#4a4038" }}>
                ご注文はメニューまたは WhatsApp で。アレルギーがある方はお知らせください。
              </p>
            </div>
          </div>

          {pairings.length > 0 && (
            <div className="mt-16">
              <p className="jp text-sm mb-1" style={{ color: "#9a1515" }}>
                おすすめの組み合わせ
              </p>
              <h2
                className="text-xl font-semibold mb-6"
                style={{ color: "#1a1410", fontFamily: "var(--font-display), Georgia, serif" }}
              >
                Pairs well with
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {pairings.map((p) =>
                  p ? (
                    <Link
                      key={p.id}
                      href={`/menu/${p.category}/${p.slug}`}
                      className="flex gap-4 bg-white border border-[var(--border)] p-3 hover:border-[#9a1515]/40 transition-colors"
                      style={{ borderRadius: "1rem" }}
                    >
                      <div className="relative w-20 h-20 overflow-hidden shrink-0" style={{ borderRadius: "0.75rem" }}>
                        <Image src={p.image} alt={p.name} fill className="object-cover" sizes="80px" />
                      </div>
                      <div className="flex flex-col justify-center min-w-0">
                        <h3 className="font-semibold truncate" style={{ color: "#1a1410" }}>
                          {p.name}
                        </h3>
                        <p className="text-sm font-bold" style={{ color: "#9a1515" }}>
                          {formatPrice(p.price)}
                        </p>
                      </div>
                    </Link>
                  ) : null
                )}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
