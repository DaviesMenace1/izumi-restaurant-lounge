"use client";

import { useEffect, useRef, type ReactNode } from "react";

type Direction = "up" | "left" | "right";

export default function ScrollReveal({
  children,
  direction = "up",
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  direction?: Direction;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          window.setTimeout(() => el.classList.add("visible"), delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  const dirClass =
    direction === "left"
      ? "from-left"
      : direction === "right"
        ? "from-right"
        : "";

  return (
    <div ref={ref} className={`reveal ${dirClass} ${className}`}>
      {children}
    </div>
  );
}
