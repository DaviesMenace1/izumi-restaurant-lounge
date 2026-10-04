import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] pt-14 pb-8 bg-[var(--bg-elevated)]">
      <div className="mx-auto max-w-[1200px] w-[92%]">
        <div className="mb-10 text-center">
          <p className="text-[0.7rem] tracking-[0.2em] uppercase text-[var(--text-muted)] mb-3">
            Follow
          </p>
          <a
            href="https://www.instagram.com/yamasen_kampala"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-[#b71c1c] hover:underline"
          >
            @yamasen_kampala
          </a>
          <p className="text-xs text-[var(--text-muted)] mt-4">
            4.6 on TripAdvisor · 106 reviews
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-8 mb-10">
          <div>
            <span className="text-xl tracking-[0.15em] text-[#b71c1c] font-bold block mb-2">
              YAMASEN
            </span>
            <p className="text-sm text-[var(--text-muted)] max-w-xs">
              Farm to table Japanese restaurant in Kampala. Organic farm produce,
              Kyoto style cooking, Ugandan inspired dishes.
            </p>
          </div>
          <div className="flex flex-wrap gap-6 text-xs tracking-[0.08em] uppercase text-[var(--text-muted)]">
            <Link href="/menu" className="hover:text-[#b71c1c] transition-colors">
              Menu
            </Link>
            <Link href="/reservations" className="hover:text-[#b71c1c] transition-colors">
              Reservations
            </Link>
            <Link href="/about" className="hover:text-[#b71c1c] transition-colors">
              About
            </Link>
            <Link href="/contact" className="hover:text-[#b71c1c] transition-colors">
              Contact
            </Link>
          </div>
        </div>

        <div className="pt-6 border-t border-[var(--border)] flex flex-col sm:flex-row justify-between gap-3 text-sm text-[var(--text-muted)]">
          <p>© {new Date().getFullYear()} Yamasen Japanese Restaurant. All rights reserved.</p>
          <p>Tank Hill Park, Tank Hill Road, Muyenga, Kampala · +256 707 808010</p>
        </div>
      </div>
    </footer>
  );
}
