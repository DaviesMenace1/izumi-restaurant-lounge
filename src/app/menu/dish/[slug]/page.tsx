import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { dishes, getDishBySlug, formatPrice, getCategory } from "@/data/menu";
import AddToCartButton from "@/components/AddToCartButton";

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
      <section className="py-8 md:py-14">
        <div className="mx-auto max-w-[1000px] w-[92%]">
          <nav className="text-[0.7rem] tracking-[0.08em] uppercase text-[var(--text-muted)] mb-6 flex flex-wrap gap-2">
            <Link href="/menu" className="hover:text-[var(--gold)]">
              Menu
            </Link>
            <span>/</span>
            {cat && (
              <>
                <Link href={`/menu/${cat.slug}`} className="hover:text-[var(--gold)]">
                  {cat.name}
                </Link>
                <span>/</span>
              </>
            )}
            <span className="text-[var(--gold)]">{dish.name}</span>
          </nav>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            <div className="relative aspect-square md:aspect-[4/5] rounded-2xl overflow-hidden border border-[var(--border)] bg-[var(--bg-card)] shadow-xl">
              <Image
                src={dish.image}
                alt={dish.name}
                fill
                className="object-cover"
                priority
                quality={90}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            <div>
              <div className="flex flex-wrap gap-2 mb-3">
                {cat && (
                  <span className="text-[0.65rem] tracking-[0.12em] uppercase text-[var(--text-muted)] border border-[var(--border)] px-2 py-1 rounded">
                    {cat.name}
                  </span>
                )}
                {dish.popular && (
                  <span className="text-[0.65rem] tracking-[0.12em] uppercase bg-[var(--gold)] text-black px-2 py-1 rounded">
                    Popular
                  </span>
                )}
                {dish.spicy && (
                  <span className="text-[0.65rem] tracking-[0.12em] uppercase bg-red-800/80 text-white px-2 py-1 rounded">
                    Spicy
                  </span>
                )}
                {dish.vegetarian && (
                  <span className="text-[0.65rem] tracking-[0.12em] uppercase border border-green-700/50 text-green-500 px-2 py-1 rounded">
                    Vegetarian
                  </span>
                )}
              </div>

              <h1 className="text-[clamp(1.75rem,4vw,2.5rem)] font-medium leading-tight mb-3">
                {dish.name}
              </h1>

              <p className="text-[var(--text-muted)] leading-relaxed mb-5">
                {dish.description}
              </p>

              <p className="text-3xl text-[var(--gold)] font-semibold mb-8">
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
                  href={`https://wa.me/256756244911?text=${encodeURIComponent(
                    `Hi Izumi, I'd like to order: ${dish.name} (${formatPrice(dish.price)})`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center items-center gap-2 px-7 py-3.5 text-xs font-medium tracking-[0.12em] uppercase bg-[#25D366] text-black hover:bg-[#2ee472] transition-colors rounded-full"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          {pairings.length > 0 && (
            <div className="mt-16">
              <h2 className="text-xl font-medium text-[var(--gold-light)] mb-6">
                Pairs well with
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {pairings.map((p) =>
                  p ? (
                    <Link
                      key={p.id}
                      href={`/menu/dish/${p.slug}`}
                      className="flex gap-4 bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-3 hover:border-[rgba(201,168,76,0.4)] transition-colors"
                    >
                      <div className="relative w-20 h-20 rounded-lg overflow-hidden shrink-0">
                        <Image src={p.image} alt={p.name} fill className="object-cover" sizes="80px" />
                      </div>
                      <div className="flex flex-col justify-center min-w-0">
                        <h3 className="text-[var(--gold-light)] font-medium truncate">{p.name}</h3>
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
