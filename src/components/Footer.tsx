import Link from "next/link";
import Partners from "@/components/Partners";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] pt-14 pb-8 bg-[var(--bg-elevated)]">
      <div className="mx-auto max-w-[1200px] w-[92%]">
        <div className="mb-12">
          <Partners showRating />
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-8 mb-10">
          <div>
            <span
              className="text-xl tracking-[0.12em] text-[var(--gold)] font-semibold block mb-2"
              style={{ fontFamily: "var(--font-quicksand), system-ui, sans-serif" }}
            >
              IZUMI
            </span>
            <p className="text-sm text-[var(--text-muted)] max-w-xs">
              The finest Pan-Asian Restaurant & Lounge in Kampala.
            </p>
          </div>
          <div className="flex flex-wrap gap-6 text-xs tracking-[0.08em] uppercase text-[var(--text-muted)]">
            <Link href="/menu" className="hover:text-[var(--gold)] transition-colors">
              Menu
            </Link>
            <Link href="/reservations" className="hover:text-[var(--gold)] transition-colors">
              Reservations
            </Link>
            <Link href="/about" className="hover:text-[var(--gold)] transition-colors">
              About
            </Link>
            <Link href="/contact" className="hover:text-[var(--gold)] transition-colors">
              Contact
            </Link>
          </div>
        </div>
        <div className="pt-6 border-t border-[var(--border)] flex flex-col sm:flex-row justify-between gap-3 text-sm text-[var(--text-muted)]">
          <p>© {new Date().getFullYear()} Izumi Restaurant & Lounge. All rights reserved.</p>
          <p>38 Upper Kololo Terrace, Kampala, Uganda</p>
        </div>
      </div>
    </footer>
  );
}
