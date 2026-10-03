import Link from "next/link";
import Image from "next/image";

const IMG = {
  sushi: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=900&q=80",
  salmon: "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=900&q=80",
  sashimi: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=900&q=80",
  tempura: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=900&q=80",
  curry: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=900&q=80",
  noodles: "https://images.unsplash.com/photo-1559314809-0d155014e29e?w=900&q=80",
  katsu: "https://images.unsplash.com/photo-1604908177453-7462950a6a3b?w=900&q=80",
  seafood: "https://images.unsplash.com/photo-1559737558-2f5a35f4523b?w=900&q=80",
  salad: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=900&q=80",
  interior: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80",
  cover:
    "https://contactless-9b492.web.app/restaurants/izumi/images/IZUMI%20-%20FOOD%20MENU%20ONLINE/IZUMI%20-%20FOOD%20MENU%20ONLINE-page-001.jpg",
};

export default function HomePage() {
  return (
    <>
      {/* ── ASYMMETRIC HERO (not centered full-bleed) ── */}
      <section className="pt-[72px] min-h-[90vh] grid lg:grid-cols-12 gap-0">
        {/* Left — copy panel */}
        <div className="lg:col-span-5 flex flex-col justify-center px-[6%] py-16 lg:py-24 bg-[var(--bg)] relative z-10">
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--gold)] mb-6">
            Kololo · Kampala
          </p>
          <h1 className="text-[clamp(2.6rem,5.5vw,3.8rem)] font-medium leading-[1.08] tracking-tight mb-6">
            The Art of
            <br />
            <span className="text-[var(--gold)]">Pan-Asian</span>
            <br />
            Dining
          </h1>
          <p className="text-[var(--text-muted)] text-[1.05rem] max-w-sm mb-10 leading-relaxed">
            Japanese precision, Thai warmth, live teppanyaki — Kampala's original
            Pan-Asian restaurant and lounge since 2018.
          </p>
          <div className="flex flex-wrap gap-3 mb-12">
            <Link
              href="/reservations"
              className="inline-flex px-7 py-3.5 text-xs font-medium tracking-[0.12em] uppercase bg-[var(--gold)] text-black hover:bg-[var(--gold-light)] transition-colors rounded-full"
            >
              Reserve a Table
            </Link>
            <Link
              href="/menu"
              className="inline-flex px-7 py-3.5 text-xs font-medium tracking-[0.12em] uppercase border border-white/25 hover:border-[var(--gold)] hover:text-[var(--gold)] transition-colors rounded-full"
            >
              View Menu
            </Link>
          </div>
          <div className="flex gap-10 text-sm">
            <div>
              <span className="block text-[0.65rem] tracking-[0.15em] uppercase text-[var(--text-muted)] mb-1">
                Open
              </span>
              Tue – Sun · 12–23:00
            </div>
            <div>
              <span className="block text-[0.65rem] tracking-[0.15em] uppercase text-[var(--text-muted)] mb-1">
                Address
              </span>
              38 Upper Kololo Terrace
            </div>
          </div>
        </div>

        {/* Right — image mosaic */}
        <div className="lg:col-span-7 grid grid-cols-2 grid-rows-2 min-h-[50vh] lg:min-h-0">
          <div className="relative col-span-2 row-span-1 overflow-hidden">
            <Image
              src={IMG.sushi}
              alt="Izumi sushi platter"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 58vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg)] via-transparent to-transparent opacity-40 lg:opacity-60" />
          </div>
          <div className="relative overflow-hidden">
            <Image
              src={IMG.salmon}
              alt="Salmon roll"
              fill
              className="object-cover"
              sizes="30vw"
            />
          </div>
          <div className="relative overflow-hidden">
            <Image
              src={IMG.sashimi}
              alt="Fresh sashimi"
              fill
              className="object-cover"
              sizes="30vw"
            />
          </div>
        </div>
      </section>

      {/* ── IMAGE STRIP ── */}
      <section className="grid grid-cols-2 md:grid-cols-4 h-[28vh] md:h-[36vh]">
        {[
          { src: IMG.tempura, label: "Tempura" },
          { src: IMG.katsu, label: "Katsu" },
          { src: IMG.curry, label: "Curries" },
          { src: IMG.noodles, label: "Noodles" },
        ].map((item) => (
          <div key={item.label} className="relative overflow-hidden group">
            <Image
              src={item.src}
              alt={item.label}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="25vw"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
            <span className="absolute bottom-4 left-4 text-xs tracking-[0.15em] uppercase text-white/90">
              {item.label}
            </span>
          </div>
        ))}
      </section>

      {/* ── TRUST ── */}
      <section className="py-8 border-b border-[var(--border)] bg-[var(--bg-elevated)]">
        <div className="mx-auto max-w-[1200px] w-[92%] flex flex-wrap justify-center items-center gap-8 md:gap-14">
          <a
            href="https://www.tripadvisor.com/Restaurant_Review-g293841-d14032948-Reviews-Izumi_Restaurant_Lounge-Kampala_Central_Region.html"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 opacity-85 hover:opacity-100 transition-opacity"
          >
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Tripadvisor_2025_Logo.svg/320px-Tripadvisor_2025_Logo.svg.png"
              alt="TripAdvisor"
              width={110}
              height={20}
              className="h-5 w-auto"
            />
            <span className="text-[0.75rem] text-[var(--text-muted)]">4.3 ★ · 1,400+ reviews</span>
          </a>
          <span className="text-sm text-[var(--text-muted)] opacity-70">Booking.com</span>
          <span className="text-sm text-[var(--text-muted)] opacity-70">Uber Eats</span>
          <span className="text-sm text-[var(--text-muted)] opacity-70">Glovo</span>
        </div>
      </section>

      {/* ── STORY with image background ── */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={IMG.interior}
            alt="Restaurant atmosphere"
            fill
            className="object-cover opacity-25"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg)] via-[var(--bg)]/90 to-[var(--bg)]" />
        </div>
        <div className="relative z-10 mx-auto max-w-[900px] w-[92%] text-center">
          <p className="text-xs tracking-[0.25em] uppercase text-[var(--gold)] mb-4">Our Story</p>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-medium mb-6">Izumi — Natural Spring</h2>
          <p className="text-[var(--text-muted)] text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Named after the Japanese word for natural spring, Izumi brings authentic Pan-Asian
            cuisine to Uganda. Fresh sushi daily, live teppanyaki, Thai curries and an elegant
            lounge — since 2018.
          </p>
          <div className="flex justify-center gap-12 mb-10">
            <div>
              <span className="block text-3xl text-[var(--gold)] font-medium">8+</span>
              <span className="text-xs text-[var(--text-muted)] uppercase tracking-wider">Years</span>
            </div>
            <div>
              <span className="block text-3xl text-[var(--gold)] font-medium">4.3</span>
              <span className="text-xs text-[var(--text-muted)] uppercase tracking-wider">TripAdvisor</span>
            </div>
            <div>
              <span className="block text-3xl text-[var(--gold)] font-medium">2019</span>
              <span className="text-xs text-[var(--text-muted)] uppercase tracking-wider">Award</span>
            </div>
          </div>
          <Link
            href="/about"
            className="inline-flex text-xs tracking-[0.12em] uppercase text-[var(--gold)] hover:underline"
          >
            Read the full story →
          </Link>
        </div>
      </section>

      {/* ── MENU PREVIEWS with real photos ── */}
      <section className="py-20 bg-[var(--bg-elevated)]">
        <div className="mx-auto max-w-[1200px] w-[92%]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <p className="text-xs tracking-[0.25em] uppercase text-[var(--gold)] mb-3">The Menu</p>
              <h2 className="text-[clamp(2rem,4vw,2.75rem)] font-medium">Signature dishes</h2>
            </div>
            <Link
              href="/menu"
              className="text-xs tracking-[0.12em] uppercase text-[var(--gold)] hover:underline"
            >
              Full menu →
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                href: "/menu/dish/chicken-katsu-roll",
                img: IMG.sushi,
                name: "Chicken Katsu Roll",
                price: "UGX 49,000",
                tag: "Popular",
              },
              {
                href: "/menu/dish/burnt-salmon-spicy",
                img: IMG.salmon,
                name: "Burnt Salmon Spicy",
                price: "UGX 56,000",
                tag: "Spicy",
              },
              {
                href: "/menu/dish/fresh-salmon-sashimi",
                img: IMG.sashimi,
                name: "Fresh Salmon Sashimi",
                price: "UGX 96,000",
                tag: "Popular",
              },
              {
                href: "/menu/dish/katsu",
                img: IMG.katsu,
                name: "Chicken / Pork Katsu",
                price: "UGX 51,000",
                tag: null,
              },
              {
                href: "/menu/dish/thai-green-curry",
                img: IMG.curry,
                name: "Thai Green Curry",
                price: "UGX 43,000",
                tag: null,
              },
              {
                href: "/menu/dish/seafood-platter",
                img: IMG.seafood,
                name: "Seafood Platter",
                price: "UGX 146,000",
                tag: "Share",
              },
            ].map((d) => (
              <Link
                key={d.href}
                href={d.href}
                className="group relative rounded-2xl overflow-hidden border border-[var(--border)] aspect-[4/5] bg-[var(--bg-card)]"
              >
                <Image
                  src={d.img}
                  alt={d.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                {d.tag && (
                  <span className="absolute top-4 left-4 bg-[var(--gold)] text-black text-[0.6rem] tracking-wider uppercase px-2 py-1 rounded">
                    {d.tag}
                  </span>
                )}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-lg text-white font-medium mb-1">{d.name}</h3>
                  <p className="text-[var(--gold)] text-sm">{d.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FULL-BLEED CTA with image bg ── */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={IMG.cover}
            alt="Izumi"
            fill
            className="object-cover object-top opacity-30"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[var(--bg)]/70" />
        </div>
        <div className="relative z-10 mx-auto max-w-[700px] w-[92%] text-center">
          <p className="text-xs tracking-[0.25em] uppercase text-[var(--gold)] mb-4">Visit Us</p>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-medium mb-5">
            An evening at Izumi
          </h2>
          <p className="text-[var(--text-muted)] mb-10 max-w-md mx-auto">
            Reservations recommended for weekends and Friday live music. Walk-ins always welcome.
          </p>
          <Link
            href="/reservations"
            className="inline-flex px-10 py-4 text-xs font-medium tracking-[0.12em] uppercase bg-[var(--gold)] text-black hover:bg-[var(--gold-light)] transition-colors rounded-full"
          >
            Book a Table
          </Link>
        </div>
      </section>
    </>
  );
}
