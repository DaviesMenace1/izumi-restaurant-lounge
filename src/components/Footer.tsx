import Link from "next/link";

function TripAdvisorMark() {
  return (
    <span className="inline-flex items-center gap-1.5">
      <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden>
        <circle cx="12" cy="12" r="11" fill="#00aa6c" />
        <circle cx="8.5" cy="11" r="2.4" fill="white" />
        <circle cx="15.5" cy="11" r="2.4" fill="white" />
        <circle cx="8.5" cy="11" r="1" fill="#00aa6c" />
        <circle cx="15.5" cy="11" r="1" fill="#00aa6c" />
      </svg>
      <span className="text-[0.85rem] font-semibold text-[#00aa6c]">Tripadvisor</span>
    </span>
  );
}

function BookingMark() {
  return (
    <span className="inline-flex items-center">
      <span className="text-[0.95rem] font-bold tracking-tight">
        <span className="text-[#003580]">Booking</span>
        <span className="text-[#009fe3]">.com</span>
      </span>
    </span>
  );
}

function UberEatsMark() {
  return (
    <span className="inline-flex items-center gap-1.5">
      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-black text-[0.55rem] font-bold text-white">
        UE
      </span>
      <span className="text-[0.85rem] font-semibold text-[#06c167]">Uber Eats</span>
    </span>
  );
}

function GlovoMark() {
  return (
    <span className="inline-flex items-center gap-1.5">
      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#FFC244] text-[0.7rem] font-bold text-black">
        G
      </span>
      <span className="text-[0.85rem] font-bold text-[#1a1a1a]">Glovo</span>
    </span>
  );
}

const partners = [
  {
    name: "TripAdvisor",
    href: "https://www.tripadvisor.com/Restaurant_Review-g293841-d14032948-Reviews-Izumi_Restaurant_Lounge-Kampala_Central_Region.html",
    Mark: TripAdvisorMark,
  },
  {
    name: "Booking.com",
    href: "https://www.booking.com",
    Mark: BookingMark,
  },
  {
    name: "Uber Eats",
    href: "https://www.ubereats.com",
    Mark: UberEatsMark,
  },
  {
    name: "Glovo",
    href: "https://glovoapp.com/ug/en/kampala/izumi-restaurant-and-lounge/",
    Mark: GlovoMark,
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] pt-14 pb-8 bg-[var(--bg-elevated)]">
      <div className="mx-auto max-w-[1200px] w-[92%]">
        <div className="mb-12">
          <p className="text-center text-[0.7rem] tracking-[0.2em] uppercase text-[var(--text-muted)] mb-6">
            Trusted partners
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-5">
            {partners.map((p) => (
              <a
                key={p.name}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-90 hover:opacity-100 transition-opacity"
                title={p.name}
              >
                <p.Mark />
              </a>
            ))}
          </div>
          <p className="text-center text-xs text-[var(--text-muted)] mt-5">
            4.3 ★ on TripAdvisor · 1,400+ reviews
          </p>
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
