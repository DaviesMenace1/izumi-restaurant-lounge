import Link from "next/link";

const socials = [
  { name: "Instagram", href: "https://www.instagram.com/yamasen_kampala" },
  { name: "Facebook", href: "https://www.facebook.com/yamasen.cotscots" },
  { name: "WhatsApp", href: "https://wa.me/256707808010" },
];

function FooterLogo() {
  return (
    <Link href="/" className="inline-flex items-center gap-3 group" aria-label="Yamasen home">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        className="h-12 w-12 shrink-0"
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
      <span className="flex flex-col leading-tight">
        <span
          className="text-xl tracking-[0.18em] text-white font-semibold group-hover:text-[#ffcdd2] transition-colors"
          style={{ fontFamily: "var(--font-display), Georgia, serif" }}
        >
          YAMASEN
        </span>
        <span className="jp text-[0.65rem] tracking-[0.15em] text-[#c4b8a8]">
          山泉 · Japanese Restaurant
        </span>
      </span>
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[#2a1c14] text-[#e8e0d4]">
      <div className="mx-auto max-w-[1200px] w-[92%] pt-14 pb-10">
        <div className="grid lg:grid-cols-[1fr_1.15fr] gap-10 mb-12">
          <div>
            <FooterLogo />
            <p className="text-sm text-[#c4b8a8] leading-relaxed mt-5 mb-6 max-w-sm">
              Farm to table Japanese restaurant at Tank Hill Park, Muyenga.
              Organic farm produce, Kyoto style cooking, Ugandan inspired dishes.
            </p>
            <p className="jp text-xs text-[#e8c4a0] mb-6">心を込めて · From our farm to your table</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-3.5 py-2 text-[0.65rem] tracking-[0.1em] uppercase soft-pill border border-white/20 text-[#e8e0d4] hover:bg-[#9a1515] hover:border-[#9a1515] hover:text-white transition-colors"
                >
                  {s.name}
                </a>
              ))}
            </div>
            <div className="space-y-2 text-sm text-[#c4b8a8]">
              <p className="text-white font-medium">Tank Hill Park, Tank Hill Road, Muyenga</p>
              <p>Monday to Sunday · 9:00 to 23:00</p>
              <a
                href="tel:+256707808010"
                className="block text-white hover:text-[#ffcdd2] transition-colors"
              >
                +256 707 808010
              </a>
              <a
                href="mailto:info@cotscots.com"
                className="block hover:text-white transition-colors"
              >
                info@cotscots.com
              </a>
            </div>
          </div>

          <div>
            <p className="text-[0.65rem] tracking-[0.2em] uppercase text-[#e8c4a0] mb-3 font-bold">
              Find us · 場所
            </p>
            <div className="relative w-full overflow-hidden border border-white/15 bg-[#1a110c]" style={{ borderRadius: "12px" }}>
              <div className="relative w-full aspect-[16/10] min-h-[220px]">
                <iframe
                  src="https://maps.google.com/maps?q=0.2978868,32.6093978&z=16&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, position: "absolute", inset: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Yamasen Japanese Restaurant on Google Maps"
                />
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 px-4 py-3 bg-[#1a110c]/95 border-t border-white/10">
                <p className="text-xs text-[#c4b8a8]">
                  Tank Hill Park · Muyenga, Kampala
                </p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=0.2978868,32.6093978"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex text-[0.65rem] tracking-[0.12em] uppercase font-bold text-white hover:text-[#ffcdd2] transition-colors"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-8 mb-12 pt-10 border-t border-white/10">
          <div>
            <p className="text-[0.65rem] tracking-[0.2em] uppercase text-[#e8c4a0] mb-4 font-bold">
              Explore
            </p>
            <nav className="flex flex-col gap-2.5 text-sm text-[#c4b8a8]">
              <Link href="/menu" className="hover:text-white transition-colors">Menu</Link>
              <Link href="/loyalty" className="hover:text-white transition-colors">Loyalty</Link>
              <Link href="/experience" className="hover:text-white transition-colors">Experience</Link>
              <Link href="/reservations" className="hover:text-white transition-colors">Reservations</Link>
            </nav>
          </div>
          <div>
            <p className="text-[0.65rem] tracking-[0.2em] uppercase text-[#e8c4a0] mb-4 font-bold">
              About
            </p>
            <nav className="flex flex-col gap-2.5 text-sm text-[#c4b8a8]">
              <Link href="/about" className="hover:text-white transition-colors">Our Story</Link>
              <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
            </nav>
          </div>
          <div>
            <p className="text-[0.65rem] tracking-[0.2em] uppercase text-[#e8c4a0] mb-4 font-bold">
              Order
            </p>
            <nav className="flex flex-col gap-2.5 text-sm text-[#c4b8a8]">
              <Link href="/menu" className="hover:text-white transition-colors">Food Menu</Link>
              <a
                href="https://wa.me/256707808010?text=Hello%20Yamasen%2C%20I%20would%20like%20to%20place%20a%20delivery%20order."
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                WhatsApp Delivery
              </a>
              <Link href="/reservations" className="hover:text-white transition-colors">Book a Table</Link>
            </nav>
          </div>
        </div>

        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-3 text-xs text-[#9a8f82]">
          <p>© {new Date().getFullYear()} Yamasen Japanese Restaurant · 山泉</p>
          <p>Instagram · Facebook · WhatsApp</p>
        </div>
      </div>
    </footer>
  );
}
