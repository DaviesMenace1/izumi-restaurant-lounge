"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/menu", label: "Menu" },
  { href: "/experience", label: "Experience" },
  { href: "/reservations", label: "Reservations" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-[72px] transition-all duration-300 ${
        scrolled
          ? "bg-black/95 border-b border-[var(--border)] backdrop-blur-md"
          : "bg-black/80 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto max-w-[1200px] w-[92%] h-full flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src="/logo.svg"
            alt="Izumi Restaurant and Lounge"
            width={160}
            height={46}
            className="h-10 w-auto"
            priority
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-xs tracking-[0.08em] uppercase transition-colors ${
                pathname === item.href
                  ? "text-[var(--gold)]"
                  : "text-[var(--text-muted)] hover:text-[var(--gold)]"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/reservations"
          className="hidden lg:inline-flex items-center justify-center px-5 py-2.5 text-xs font-medium tracking-[0.1em] uppercase bg-[var(--gold)] text-black hover:bg-[var(--gold-light)] transition-colors"
        >
          Book a Table
        </Link>

        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className="w-5 h-[1.5px] bg-[var(--text)] block" />
          <span className="w-5 h-[1.5px] bg-[var(--text)] block" />
          <span className="w-5 h-[1.5px] bg-[var(--text)] block" />
        </button>
      </div>

      {open && (
        <div className="lg:hidden absolute top-[72px] left-0 right-0 bg-[var(--bg)] border-b border-[var(--border)] py-6 px-[4%]">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`text-sm tracking-[0.08em] uppercase ${
                  pathname === item.href
                    ? "text-[var(--gold)]"
                    : "text-[var(--text-muted)]"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/reservations"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex justify-center px-5 py-3 text-xs font-medium tracking-[0.1em] uppercase bg-[var(--gold)] text-black"
            >
              Book a Table
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
