import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  categories,
  getCategory,
  getDishesByCategory,
  type CategorySlug,
} from "@/data/menu";
import MenuCard from "@/components/MenuCard";

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
      <section className="py-14 md:py-18">
        <div className="mx-auto max-w-[1100px] w-[92%]">
          <div className="mb-10">
            <Link
              href="/menu"
              className="text-xs tracking-[0.1em] uppercase font-semibold text-[var(--text-muted)] hover:text-[#b71c1c]"
            >
              ← All Menu
            </Link>
            <p className="jp text-sm text-[#b71c1c] mt-6 mb-1">カテゴリー</p>
            <p className="text-xs tracking-[0.2em] uppercase text-[#b71c1c] font-semibold mb-2">
              Category
            </p>
            <h1 className="text-[clamp(2.2rem,4vw,3.2rem)] font-bold text-[var(--text)]">
              {cat.name}
            </h1>
            <p className="text-[var(--text-muted)] mt-2 text-[0.95rem] leading-relaxed">
              {cat.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {items.map((dish) => (
              <MenuCard key={dish.id} dish={dish} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
