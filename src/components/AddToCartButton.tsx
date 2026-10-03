"use client";

import { useCart } from "@/context/CartContext";

type Props = {
  id: string;
  slug: string;
  name: string;
  price: number;
  image: string;
  label?: string;
  className?: string;
};

export default function AddToCartButton({
  id,
  slug,
  name,
  price,
  image,
  label = "Add to order",
  className = "",
}: Props) {
  const { addItem } = useCart();

  return (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        addItem({ id, slug, name, price, image });
      }}
      className={
        className ||
        "inline-flex items-center justify-center px-6 py-3 text-xs font-medium tracking-[0.12em] uppercase bg-[var(--gold)] text-black hover:bg-[var(--gold-light)] transition-colors rounded-full"
      }
    >
      {label}
    </button>
  );
}
