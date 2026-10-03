import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] pt-14 pb-8">
      <div className="mx-auto max-w-[1200px] w-[92%]">
        <div className="flex flex-col md:flex-row justify-between gap-8 mb-10">
          <div>
            <span className="font-[family-name:var(--font-cormorant)] text-xl tracking-[0.12em] text-[var(--gold)] font-semibold block mb-2">
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
            <a
              href="https://www.tripadvisor.com/Restaurant_Review-g293841-d14032948-Reviews-Izumi_Restaurant_Lounge-Kampala_Central_Region.html"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--gold)] transition-colors"
            >
              TripAdvisor
            </a>
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
