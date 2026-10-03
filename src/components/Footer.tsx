import Link from "next/link";
import Image from "next/image";

const partners = [
  {
    name: "TripAdvisor",
    href: "https://www.tripadvisor.com/Restaurant_Review-g293841-d14032948-Reviews-Izumi_Restaurant_Lounge-Kampala_Central_Region.html",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Tripadvisor_2025_Logo.svg/320px-Tripadvisor_2025_Logo.svg.png",
    w: 120,
    h: 24,
  },
  {
    name: "Booking.com",
    href: "https://www.booking.com",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Booking.com_logo.svg/200px-Booking.com_logo.svg.png",
    w: 110,
    h: 20,
  },
  {
    name: "Uber Eats",
    href: "https://www.ubereats.com",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Uber_Eats_2020_logo.svg/200px-Uber_Eats_2020_logo.svg.png",
    w: 90,
    h: 24,
  },
  {
    name: "Glovo",
    href: "https://glovoapp.com/ug/en/kampala/izumi-restaurant-and-lounge/",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Glovo_logo.svg/200px-Glovo_logo.svg.png",
    w: 70,
    h: 28,
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] pt-14 pb-8 bg-[var(--bg-elevated)]">
      <div className="mx-auto max-w-[1200px] w-[92%]">
        {/* Trustees / partners */}
        <div className="mb-12">
          <p className="text-center text-[0.7rem] tracking-[0.2em] uppercase text-[var(--text-muted)] mb-6">
            Trusted partners
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {partners.map((p) => (
              <a
                key={p.name}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-80 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                title={p.name}
              >
                <Image
                  src={p.src}
                  alt={p.name}
                  width={p.w}
                  height={p.h}
                  className="h-6 w-auto object-contain"
                  unoptimized
                />
              </a>
            ))}
          </div>
          <p className="text-center text-xs text-[var(--text-muted)] mt-4">
            4.3 ★ on TripAdvisor · 1,400+ reviews
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-8 mb-10">
          <div>
            <span
              className="text-xl tracking-[0.12em] text-[var(--gold)] font-semibold block mb-2"
              style={{ fontFamily: "Georgia, serif" }}
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
