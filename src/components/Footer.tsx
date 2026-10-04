import Link from "next/link";

const socials = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/yamasen_kampala",
    label: "@yamasen_kampala",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/yamasen.cotscots",
    label: "Yamasen Japanese Restaurant",
  },
  {
    name: "TripAdvisor",
    href: "https://www.tripadvisor.com/Restaurant_Review-g293841-d15006919-Reviews-YAMASEN_Japanese_Restaurant-Kampala_Central_Region.html",
    label: "4.6 · 106 reviews",
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/256707808010",
    label: "+256 707 808010",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[#2a2420] text-[#e8e0d4]">
      <div className="mx-auto max-w-[1200px] w-[92%] pt-16 pb-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          <div className="lg:col-span-1">
            <span className="text-2xl tracking-[0.18em] text-white font-bold block mb-3">
              YAMASEN
            </span>
            <p className="text-sm text-[#c4b8a8] leading-relaxed mb-5">
              Farm to table Japanese restaurant in Kampala. Organic farm produce,
              Kyoto style cooking, Ugandan inspired dishes.
            </p>
            <div className="flex flex-wrap gap-2">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-3.5 py-2 text-[0.65rem] tracking-[0.1em] uppercase soft-pill border border-white/20 text-[#e8e0d4] hover:bg-[#b71c1c] hover:border-[#b71c1c] hover:text-white transition-colors"
                >
                  {s.name}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[0.65rem] tracking-[0.2em] uppercase text-[#b71c1c] mb-4">
              Explore
            </p>
            <nav className="flex flex-col gap-2.5 text-sm text-[#c4b8a8]">
              <Link href="/menu" className="hover:text-white transition-colors">Menu</Link>
              <Link href="/experience" className="hover:text-white transition-colors">Experience</Link>
              <Link href="/reservations" className="hover:text-white transition-colors">Reservations</Link>
              <Link href="/about" className="hover:text-white transition-colors">About</Link>
              <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
            </nav>
          </div>

          <div>
            <p className="text-[0.65rem] tracking-[0.2em] uppercase text-[#b71c1c] mb-4">
              Visit
            </p>
            <p className="text-sm text-[#c4b8a8] leading-relaxed mb-3">
              Tank Hill Park
              <br />
              Tank Hill Road, Muyenga
              <br />
              Kampala, Uganda
            </p>
            <a
              href="https://maps.google.com/?q=0.2978868,32.6093978"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs tracking-[0.08em] uppercase text-white hover:text-[#ffcdd2] transition-colors"
            >
              Open in Maps
            </a>
          </div>

          <div>
            <p className="text-[0.65rem] tracking-[0.2em] uppercase text-[#b71c1c] mb-4">
              Hours and contact
            </p>
            <p className="text-sm text-[#c4b8a8] mb-3">
              Monday to Sunday
              <br />
              9:00 to 23:00
            </p>
            <a
              href="tel:+256707808010"
              className="block text-sm text-white hover:text-[#ffcdd2] transition-colors mb-1"
            >
              +256 707 808010
            </a>
            <a
              href="mailto:info@cotscots.com"
              className="block text-sm text-[#c4b8a8] hover:text-white transition-colors"
            >
              info@cotscots.com
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-3 text-xs text-[#9a8f82]">
          <p>© {new Date().getFullYear()} Yamasen Japanese Restaurant. All rights reserved.</p>
          <p>Instagram · Facebook · TripAdvisor · WhatsApp</p>
        </div>
      </div>
    </footer>
  );
}
