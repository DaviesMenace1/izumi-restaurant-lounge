"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { useCart } from "@/context/CartContext";
import SearchPanel from "@/components/SearchPanel";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/menu", label: "Menu" },
  { href: "/loyalty", label: "Loyalty" },
  { href: "/experience", label: "Experience" },
  { href: "/reservations", label: "Reservations" },
  { href: "/contact", label: "Contact" },
];

function Logo() {
  return (
    <span className="flex items-center gap-2.5">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        className="h-9 w-9 shrink-0"
        aria-hidden
      >
        <rect width="64" height="64" rx="12" fill="#B71C1C" />
        <path
          d="M16 30 L32 14 L48 30"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M22 30 V48 M28 30 V48 M32 30 V48 M36 30 V48 M42 30 V48"
          stroke="white"
          strokeWidth="3.2"
          strokeLinecap="round"
        />
        <path d="M22 30 H42" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
      </svg>
      <span className="hidden sm:flex flex-col leading-tight">
        <span
          className="text-[1.15rem] tracking-[0.18em] font-semibold text-[var(--text)]"
          style={{ fontFamily: "var(--font-display), Georgia, serif" }}
        >
          YAMASEN
        </span>
        <span className="text-[0.6rem] tracking-[0.2em] uppercase text-[var(--text-muted)]">
          Japanese Restaurant
        </span>
      </span>
    </span>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { count, setOpen: setCartOpen } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 h-[72px] transition-all duration-300 ${
          scrolled
            ? "bg-[#faf7f2]/97 border-b border-[var(--border)] backdrop-blur-md shadow-sm"
            : "bg-[#faf7f2]/92 backdrop-blur-sm"
        }`}
      >
        <div className="mx-auto max-w-[1200px] w-[92%] h-full flex items-center justify-between">
          <Link href="/" className="flex items-center shrink-0" aria-label="Yamasen home">
            <Logo />
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[0.68rem] tracking-[0.12em] uppercase font-bold transition-colors ${
                  pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))
                    ? "text-[#9a1515]"
                    : "text-[var(--text-muted)] hover:text-[var(--text)]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-1 sm:gap-2">
            <button
              type="button"
              onClick={() => {
                setMenuOpen(false);
                setSearchOpen(true);
              }}
              className="p-2 text-[var(--text)] hover:text-[#9a1515] transition-colors"
              aria-label="Search menu"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                aria-hidden
              >
                <circle cx="11" cy="11" r="7" />
                <path d="M20 20l-3.5-3.5" strokeLinecap="round" />
              </svg>
            </button>

            <button
              type="button"
              onClick={() => setCartOpen(true)}
              className="relative p-2 text-[var(--text)] hover:text-[#9a1515] transition-colors"
              aria-label="Open cart"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M6 6h15l-1.5 9h-12z" />
                <circle cx="9" cy="20" r="1" fill="currentColor" />
                <circle cx="18" cy="20" r="1" fill="currentColor" />
                <path d="M6 6L5 3H2" />
              </svg>
              {count > 0 && (
                <span className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] px-1 soft-pill bg-[#9a1515] text-white text-[0.65rem] font-semibold flex items-center justify-center">
                  {count}
                </span>
              )}
            </button>

            <Link href="/reservations" className="hidden lg:inline-flex btn-cream ml-1">
              Book a Table
            </Link>

            <button
              className="lg:hidden flex flex-col justify-center gap-[6px] p-2.5"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <span
                className={`block w-6 h-[2px] bg-[var(--text)] transition-transform duration-300 origin-center ${
                  menuOpen ? "translate-y-[8px] rotate-45" : ""
                }`}
              />
              <span
                className={`block w-6 h-[2px] bg-[var(--text)] transition-opacity duration-300 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-6 h-[2px] bg-[var(--text)] transition-transform duration-300 origin-center ${
                  menuOpen ? "-translate-y-[8px] -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen mobile nav */}
      {menuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-[45] bg-[#faf7f2] flex flex-col"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <div className="h-[72px] shrink-0" aria-hidden />
          <nav className="flex-1 flex flex-col items-center justify-center gap-1 px-6 pb-16 overflow-y-auto">
            {navItems.map((item, i) => {
              const active =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`mobile-nav-item w-full text-center py-3.5 text-[1.15rem] sm:text-[1.25rem] tracking-[0.18em] uppercase font-bold transition-colors ${
                    active ? "text-[#9a1515]" : "text-[#1a1410]"
                  }`}
                  style={{ animationDelay: `${80 + i * 70}ms` }}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="/reservations"
              onClick={() => setMenuOpen(false)}
              className="mobile-nav-item mt-6 btn-cream inline-flex justify-center text-sm px-10 py-4"
              style={{ animationDelay: `${80 + navItems.length * 70}ms` }}
            >
              Book a Table
            </Link>
            <p
              className="mobile-nav-item jp text-sm mt-8"
              style={{ color: "#9a1515", animationDelay: `${80 + (navItems.length + 1) * 70}ms` }}
            >
              山泉 · Yamasen
            </p>
          </nav>
        </div>
      )}

      <SearchPanel open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
