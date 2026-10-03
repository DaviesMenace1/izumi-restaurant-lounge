"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { useCart } from "@/context/CartContext";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/menu", label: "Menu" },
  { href: "/experience", label: "Experience" },
  { href: "/reservations", label: "Reservations" },
  { href: "/contact", label: "Contact" },
];

/** Official Izumi mark — gold spires + wordmark (matches brand circle logo) */
function Logo() {
  return (
    <span className="flex items-center gap-2.5">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        className="h-11 w-11 shrink-0"
        aria-hidden
      >
        <circle cx="32" cy="32" r="32" fill="#0a0a0a" />
        <g stroke="#c9a84c" strokeWidth="1.6" strokeLinecap="round">
          <line x1="16" y1="30" x2="16" y2="24" />
          <line x1="22" y1="30" x2="22" y2="18" />
          <line x1="28" y1="30" x2="28" y2="12" />
          <line x1="32" y1="30" x2="32" y2="8" />
          <line x1="36" y1="30" x2="36" y2="12" />
          <line x1="42" y1="30" x2="42" y2="18" />
          <line x1="48" y1="30" x2="48" y2="24" />
        </g>
        <line
          x1="10"
          y1="31"
          x2="54"
          y2="31"
          stroke="#c9a84c"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <text
          x="32"
          y="46"
          textAnchor="middle"
          fontFamily="Georgia, serif"
          fontSize="8"
          fontWeight="600"
          letterSpacing="0.22em"
          fill="#c9a84c"
        >
          IZUMI
        </text>
      </svg>
      <span className="hidden sm:flex flex-col leading-tight">
        <span
          className="text-[1.05rem] tracking-[0.28em] text-[var(--gold)] font-semibold"
          style={{ fontFamily: "Georgia, Times New Roman, serif" }}
        >
          IZUMI
        </span>
        <span className="text-[0.55rem] tracking-[0.22em] uppercase text-[var(--text-muted)]">
          Restaurant & Lounge
        </span>
      </span>
    </span>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { count, setOpen: setCartOpen } = useCart();

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
        <Link href="/" className="flex items-center shrink-0" aria-label="Izumi home">
          <Logo />
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

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setCartOpen(true)}
            className="relative p-2 text-[var(--text)] hover:text-[var(--gold)] transition-colors"
            aria-label="Open cart"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 6h15l-1.5 9h-12z" />
              <circle cx="9" cy="20" r="1" fill="currentColor" />
              <circle cx="18" cy="20" r="1" fill="currentColor" />
              <path d="M6 6L5 3H2" />
            </svg>
            {count > 0 && (
              <span className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] px-1 rounded-full bg-[var(--gold)] text-black text-[0.65rem] font-semibold flex items-center justify-center">
                {count}
              </span>
            )}
          </button>

          <Link
            href="/reservations"
            className="hidden lg:inline-flex items-center justify-center px-5 py-2.5 text-xs font-medium tracking-[0.1em] uppercase bg-[var(--gold)] text-black hover:bg-[var(--gold-light)] transition-colors rounded-full"
          >
            Book a Table
          </Link>

          <button
            className="lg:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className="w-5 h-[1.5px] bg-[var(--text)] block" />
            <span className="w-5 h-[1.5px] bg-[var(--text)] block" />
            <span className="w-5 h-[1.5px] bg-[var(--text)] block" />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden absolute top-[72px] left-0 right-0 bg-[var(--bg)] border-b border-[var(--border)] py-6 px-[4%]">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`text-sm tracking-[0.08em] uppercase ${
                  pathname === item.href ? "text-[var(--gold)]" : "text-[var(--text-muted)]"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/reservations"
              onClick={() => setMenuOpen(false)}
              className="mt-2 inline-flex justify-center px-5 py-3 text-xs font-medium tracking-[0.1em] uppercase bg-[var(--gold)] text-black rounded-full"
            >
              Book a Table
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
