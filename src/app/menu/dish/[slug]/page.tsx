import { redirect, notFound } from "next/navigation";
import { dishes, getDishBySlug } from "@/data/menu";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return dishes.map((d) => ({ slug: d.slug }));
}

/** Legacy path: /menu/dish/kushi-katsu → /menu/appetizers/kushi-katsu */
export default async function LegacyDishRedirect({ params }: Props) {
  const { slug } = await params;
  const dish = getDishBySlug(slug);
  if (!dish) notFound();
  redirect(`/menu/${dish.category}/${dish.slug}`);
}
