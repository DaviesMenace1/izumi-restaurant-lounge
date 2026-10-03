import Link from "next/link";
import Image from "next/image";

const MENU_COVER =
  "https://contactless-9b492.web.app/restaurants/izumi/images/IZUMI%20-%20FOOD%20MENU%20ONLINE/IZUMI%20-%20FOOD%20MENU%20ONLINE-page-001.jpg";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-[72px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c0c0c] to-[#111]" />
        <div
          className="absolute inset-0 opacity-[0.18] mix-blend-luminosity bg-cover bg-center"
          style={{ backgroundImage: `url(${MENU_COVER})` }}
        />
        <div className="relative z-10 mx-auto max-w-[1200px] w-[92%] py-16 md:py-24">
          <p className="text-xs tracking-[0.25em] uppercase text-[var(--gold)] mb-5">
            Kololo · Kampala
          </p>
          <h1 className="text-[clamp(2.8rem,7vw,4.5rem)] font-medium leading-[1.1] tracking-tight mb-6">
            The Art of
            <br />
            Pan-Asian Dining
          </h1>
          <p className="text-[1.05rem] text-[var(--text-muted)] max-w-md font-light mb-10">
            Contemporary Japanese sushi, Thai classics & live teppanyaki in an elegant lounge setting.
            Kampala's original Pan-Asian destination since 2018.
          </p>
          <div className="flex flex-wrap gap-4 mb-14">
            <Link
              href="/reservations"
              className="inline-flex items-center justify-center px-7 py-3.5 text-xs font-medium tracking-[0.1em] uppercase bg-[var(--gold)] text-black hover:bg-[var(--gold-light)] transition-colors"
            >
              Reserve Your Table
            </Link>
            <Link
              href="/menu"
              className="inline-flex items-center justify-center px-7 py-3.5 text-xs font-medium tracking-[0.1em] uppercase border border-white/30 hover:border-[var(--gold)] hover:text-[var(--gold)] transition-colors"
            >
              Explore Menu
            </Link>
          </div>
          <div className="flex flex-wrap gap-10 pt-8 border-t border-[var(--border)]">
            <div>
              <span className="block text-[0.7rem] tracking-[0.15em] uppercase text-[var(--text-muted)] mb-1">
                Open
              </span>
              <span className="text-[0.95rem]">Tue – Sun · 12:00 – 23:00</span>
            </div>
            <div>
              <span className="block text-[0.7rem] tracking-[0.15em] uppercase text-[var(--text-muted)] mb-1">
                Location
              </span>
              <span className="text-[0.95rem]">38 Upper Kololo Terrace</span>
            </div>
          </div>
        </div>
      </section>

      {/* Partners / Trust */}
      <section className="py-10 border-b border-[var(--border)] bg-[var(--bg-elevated)]">
        <div className="mx-auto max-w-[1200px] w-[92%]">
          <p className="text-center text-[0.7rem] tracking-[0.2em] uppercase text-[var(--text-muted)] mb-6">
            Trusted by diners & partners
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-14">
            <a
              href="https://www.tripadvisor.com/Restaurant_Review-g293841-d14032948-Reviews-Izumi_Restaurant_Lounge-Kampala_Central_Region.html"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-1 opacity-85 hover:opacity-100 transition-opacity"
            >
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Tripadvisor_2025_Logo.svg/320px-Tripadvisor_2025_Logo.svg.png"
                alt="TripAdvisor"
                width={120}
                height={22}
                className="h-[22px] w-auto"
              />
              <span className="text-[0.7rem] text-[var(--text-muted)]">4.3 ★ · 1,400+ reviews</span>
            </a>
            <span className="text-sm tracking-wide text-[var(--text-muted)] opacity-80">Booking.com</span>
            <span className="text-sm tracking-wide text-[var(--text-muted)] opacity-80">Uber Eats</span>
            <span className="text-sm tracking-wide text-[var(--text-muted)] opacity-80">Delivery</span>
          </div>
        </div>
      </section>

      {/* About teaser */}
      <section className="py-24">
        <div className="mx-auto max-w-[1200px] w-[92%] grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-[var(--gold)] mb-3">Our Story</p>
            <h2 className="text-[clamp(2rem,4vw,2.75rem)] font-medium leading-tight mb-6">
              Izumi — Natural Spring
            </h2>
            <p className="text-[var(--text-muted)] mb-4 text-[1.02rem]">
              Named after the Japanese word for “natural spring,” Izumi symbolizes freshness and purity.
              Opened in 2018, we brought authentic Pan-Asian cuisine to Uganda — the first of its kind.
            </p>
            <p className="text-[var(--text-muted)] mb-8 text-[1.02rem]">
              Japanese precision meets Thai warmth: sushi & sashimi prepared daily, live teppanyaki,
              fragrant curries and inventive fusion rolls.
            </p>
            <div className="flex gap-8 pt-6 border-t border-[var(--border)]">
              <div>
                <span className="block text-2xl text-[var(--gold)]">8+</span>
                <span className="text-xs text-[var(--text-muted)]">Years</span>
              </div>
              <div>
                <span className="block text-2xl text-[var(--gold)]">4.3</span>
                <span className="text-xs text-[var(--text-muted)]">TripAdvisor</span>
              </div>
              <div>
                <span className="block text-2xl text-[var(--gold)]">2019</span>
                <span className="text-xs text-[var(--text-muted)]">Restaurant Week Winner</span>
              </div>
            </div>
            <Link
              href="/about"
              className="inline-block mt-8 text-xs tracking-[0.1em] uppercase text-[var(--gold)] hover:underline"
            >
              Read our full story →
            </Link>
          </div>
          <div className="relative">
            <div className="border border-[var(--border)] p-3 bg-[var(--bg-card)]">
              <Image
                src={MENU_COVER}
                alt="Izumi atmosphere"
                width={600}
                height={800}
                className="w-full aspect-[3/4] object-cover object-top"
              />
            </div>
            <div className="absolute -bottom-4 -right-2 md:right-0 bg-[var(--gold)] text-black p-4 max-w-[180px]">
              <span className="block text-[0.65rem] tracking-[0.1em] uppercase mb-1">
                Kampala Restaurant Week
              </span>
              <strong className="text-base font-semibold">Innovative Dish Winner 2019</strong>
            </div>
          </div>
        </div>
      </section>

      {/* Menu categories teaser */}
      <section className="py-24 bg-[var(--bg-elevated)]">
        <div className="mx-auto max-w-[1200px] w-[92%]">
          <div className="text-center mb-14">
            <p className="text-xs tracking-[0.2em] uppercase text-[var(--gold)] mb-3">The Menu</p>
            <h2 className="text-[clamp(2rem,4vw,2.75rem)] font-medium">
              Fresh. Balanced. Shareable.
            </h2>
            <p className="text-[var(--text-muted)] max-w-lg mx-auto mt-4">
              From classic nigiri and inventive rolls to Thai curries, teppanyaki and house desserts.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
            {[
              { icon: "🍣", title: "Sushi & Sashimi", desc: "Nigiri, maki, specialty rolls, sashimi platters." },
              { icon: "🔥", title: "Teppanyaki & Mains", desc: "Live griddle, teriyaki, katsu, Thai curries." },
              { icon: "🥢", title: "Dim Sum & Starters", desc: "Gyoza, spring rolls, prawn toast, salads." },
              { icon: "🍸", title: "Drinks & Desserts", desc: "Cocktails, sake, house-baked desserts." },
            ].map((cat) => (
              <div
                key={cat.title}
                className="bg-[var(--bg-card)] border border-[var(--border)] p-6 hover:border-[rgba(201,168,76,0.4)] transition-colors"
              >
                <div className="text-2xl mb-3">{cat.icon}</div>
                <h3 className="text-xl font-medium mb-2">{cat.title}</h3>
                <p className="text-sm text-[var(--text-muted)]">{cat.desc}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              href="/menu"
              className="inline-flex px-7 py-3.5 text-xs font-medium tracking-[0.1em] uppercase bg-[var(--gold)] text-black hover:bg-[var(--gold-light)] transition-colors"
            >
              View Full Menu
            </Link>
            <a
              href="https://contactless-9b492.web.app/restaurants/izumi/foodmenu.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex px-7 py-3.5 text-xs font-medium tracking-[0.1em] uppercase border border-white/30 hover:border-[var(--gold)] hover:text-[var(--gold)] transition-colors"
            >
              Digital Food Menu
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-[1200px] w-[92%] text-center">
          <p className="text-xs tracking-[0.2em] uppercase text-[var(--gold)] mb-3">Visit Us</p>
          <h2 className="text-[clamp(2rem,4vw,2.75rem)] font-medium mb-4">
            Ready for an evening at Izumi?
          </h2>
          <p className="text-[var(--text-muted)] max-w-md mx-auto mb-8">
            Reservations recommended for weekends and Friday live music. Walk-ins always welcome.
          </p>
          <Link
            href="/reservations"
            className="inline-flex px-8 py-4 text-xs font-medium tracking-[0.1em] uppercase bg-[var(--gold)] text-black hover:bg-[var(--gold-light)] transition-colors"
          >
            Book a Table
          </Link>
        </div>
      </section>
    </>
  );
}
