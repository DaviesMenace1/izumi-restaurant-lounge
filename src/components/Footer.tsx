import Link from "next/link";

function IconInstagram({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function IconFacebook({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
    </svg>
  );
}

function IconWhatsApp({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

const socials = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/yamasen_kampala",
    Icon: IconInstagram,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/yamasen.cotscots",
    Icon: IconFacebook,
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/256707808010",
    Icon: IconWhatsApp,
  },
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
            <div className="flex flex-wrap items-center gap-3 mb-6">
              {socials.map(({ name, href, Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  title={name}
                  className="inline-flex items-center justify-center w-11 h-11 soft-pill border border-white/20 text-[#e8e0d4] hover:bg-[#9a1515] hover:border-[#9a1515] hover:text-white transition-colors"
                >
                  <Icon className="w-5 h-5" />
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
              <Link href="/order" className="hover:text-white transition-colors">Checkout</Link>
              <Link href="/reservations" className="hover:text-white transition-colors">Book a Table</Link>
            </nav>
          </div>
        </div>

        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-3 text-xs text-[#9a8f82]">
          <p>
            © {new Date().getFullYear()}{" "}
            <a
              href="https://wa.me/256745867098"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#c4b8a8] hover:text-white underline underline-offset-2 transition-colors"
            >
              Davies Musinguzi · +256 745 867098
            </a>
          </p>
          <div className="flex items-center gap-4">
            {socials.map(({ name, href, Icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
