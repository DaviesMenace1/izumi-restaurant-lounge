import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { dishes, getDishBySlug, formatPrice, getCategory } from "@/data/menu";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return dishes.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const dish = getDishBySlug(slug);
  if (!dish) return { title: "Dish" };
  return { title: dish.name, description: dish.description };
}

export default async function DishPage({ params }: Props) {
  const { slug } = await params;
  const dish = getDishBySlug(slug);
  if (!dish) notFound();

  const cat = getCategory(dish.category);
  const pairings = (dish.pairings || []).map((s) => getDishBySlug(s)).filter(Boolean);

  return (
    <div className="pt-[72px]">
      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-[1100px] w-[92%]">
          <Link
            href={cat ? `/menu/${cat.slug}` : "/menu"}
            className="text-xs tracking-[0.1em] uppercase text-[var(--text-muted)] hover:text-[var(--gold)]"
          >
            ← {cat?.name || "Menu"}
          </Link>

          <div className="grid md:grid-cols-2 gap-10 md:gap-14 mt-8">
            <div className="relative aspect-[4/3] border border-[var(--border)] overflow-hidden">
              <Image
                src={dish.image}
                alt={dish.name}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            <div>
              <div className="flex flex-wrap gap-2 mb-4">
                {dish.popular && (
                  <span className="bg-[var(--gold)] text-black text-[0.65rem] tracking-wider uppercase px-2 py-1">
                    Popular
                  </span>
                )}
                {dish.spicy && (
                  <span className="bg-red-700/90 text-white text-[0.65rem] tracking-wider uppercase px-2 py-1">
                    Spicy
                  </span>
                )}
                {dish.vegetarian && (
                  <span className="border border-green-600/60 text-green-500 text-[0.65rem] tracking-wider uppercase px-2 py-1">
                    Vegetarian
                  </span>
                )}
              </div>

              <h1 className="font-[family-name:var(--font-cormorant)] text-[clamp(2rem,4vw,2.8rem)] font-medium leading-tight mb-3">
                {dish.name}
              </h1>
              <p className="text-2xl text-[var(--gold)] font-medium mb-6">
                {formatPrice(dish.price)}
              </p>
              <p className="text-[var(--text-muted)] leading-relaxed mb-8">
                {dish.description}
              </p>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/reservations"
                  className="inline-flex px-6 py-3 text-xs font-medium tracking-[0.1em] uppercase bg-[var(--gold)] text-black hover:bg-[var(--gold-light)] transition-colors"
                >
                  Book a Table
                </Link>
                <a
                  href="https://glovoapp.com/ug/en/kampala/izumi-restaurant-and-lounge/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex px-6 py-3 text-xs font-medium tracking-[0.1em] uppercase border border-white/30 hover:border-[var(--gold)] hover:text-[var(--gold)] transition-colors"
                >
                  Order on Glovo
                </a>
              </div>
            </div>
          </div>

          {pairings.length > 0 && (
            <div className="mt-16">
              <h2 className="font-[family-name:var(--font-cormorant)] text-2xl text-[var(--gold-light)] mb-6">
                Pairs well with
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {pairings.map((p) =>
                  p ? (
                    <Link
                      key={p.id}
                      href={`/menu/dish/${p.slug}`}
                      className="flex gap-4 bg-[var(--bg-card)] border border-[var(--border)] p-3 hover:border-[rgba(201,168,76,0.4)] transition-colors"
                    >
                      <div className="relative w-20 h-20 flex-shrink-0 overflow-hidden">
                        <Image src={p.image} alt={p.name} fill className="object-cover" sizes="80px" />
                      </div>
                      <div>
                        <h3 className="font-[family-name:var(--font-cormorant)] text-lg text-[var(--gold-light)]">
                          {p.name}
                        </h3>
                        <p className="text-sm text-[var(--gold)]">{formatPrice(p.price)}</p>
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
