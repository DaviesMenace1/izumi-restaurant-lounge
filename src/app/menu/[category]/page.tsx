import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  categories,
  getCategory,
  getDishesByCategory,
  formatPrice,
  type CategorySlug,
} from "@/data/menu";

type Props = { params: Promise<{ category: string }> };

export async function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const cat = getCategory(category);
  if (!cat) return { title: "Menu" };
  return { title: cat.name, description: cat.description };
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const cat = getCategory(category);
  if (!cat) notFound();

  const items = getDishesByCategory(category as CategorySlug);

  return (
    <div className="pt-[72px]">
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-[1200px] w-[92%]">
          <div className="mb-10">
            <Link
              href="/menu"
              className="text-xs tracking-[0.1em] uppercase text-[var(--text-muted)] hover:text-[#b71c1c]"
            >
              All Menu
            </Link>
            <p className="text-xs tracking-[0.2em] uppercase text-[#b71c1c] mt-6 mb-2">
              Category
            </p>
            <h1 className="text-[clamp(2.2rem,4vw,3.2rem)] font-bold">
              {cat.name}
            </h1>
            <p className="text-[var(--text-muted)] mt-2">{cat.description}</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((dish) => (
              <Link
                key={dish.id}
                href={`/menu/dish/${dish.slug}`}
                className="group bg-white border border-[var(--border)] overflow-hidden hover:border-[#b71c1c]/40 transition-all shadow-md blob-card"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={dish.image}
                    alt={dish.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start gap-3 mb-2">
                    <h2 className="text-xl font-semibold text-[var(--text)] group-hover:text-[#b71c1c] transition-colors">
                      {dish.name}
                    </h2>
                    <span className="text-sm text-[#b71c1c] font-semibold whitespace-nowrap">
                      {formatPrice(dish.price)}
                    </span>
                  </div>
                  <p className="text-sm text-[var(--text-muted)] line-clamp-2">{dish.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
