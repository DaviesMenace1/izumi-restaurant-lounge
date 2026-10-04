import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

const IMG = {
  hero: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1920&q=90",
  sushi: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=1400&q=90",
  bento: "https://images.unsplash.com/photo-1604908177453-7462950a6a3b?w=1400&q=90",
  farm: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1400&q=90",
  ramen: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=1400&q=90",
  salad: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1400&q=90",
  interior: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600&q=90",
  grill: "https://images.unsplash.com/photo-1553621042-f6e147245754?w=1200&q=90",
  night: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&q=90",
  tea: "https://images.unsplash.com/photo-1488477186911-f3e5b0c3e0c5?w=1200&q=90",
  veg: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=1200&q=90",
  wood: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1600&q=90",
};

export default function HomePage() {
  return (
    <>
      <section className="pt-[72px] relative min-h-[92vh] flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={IMG.hero}
            alt="Yamasen dining atmosphere"
            fill
            priority
            quality={95}
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/25" />
        </div>

        <div className="relative z-10 px-5 pb-14 pt-28 max-w-lg mx-auto w-full text-center sm:text-left sm:mx-0 sm:max-w-none sm:px-[6%] sm:pb-20">
          <p className="text-[0.7rem] tracking-[0.28em] uppercase text-white/85 mb-3">
            Tank Hill · Muyenga · Kampala
          </p>
          <h1 className="text-[clamp(2.5rem,9vw,3.8rem)] font-bold leading-[1.06] text-white mb-4">
            Farm to Table
            <br />
            <span className="text-[#ffcdd2]">Japanese</span>
          </h1>
          <p className="text-white/90 text-[1rem] leading-relaxed mb-8 max-w-md mx-auto sm:mx-0">
            Organic vegetables from our own farm. Seafood from Dar es Salaam.
            Kyoto trained kitchen. Dishes inspired by Ugandan food culture.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 items-center sm:items-start">
            <Link
              href="/menu"
              className="w-full sm:w-auto inline-flex justify-center px-8 py-3.5 text-xs font-semibold tracking-[0.12em] uppercase bg-[#b71c1c] text-white hover:bg-[#c62828] transition-colors soft-pill"
            >
              Food Menu
            </Link>
            <Link
              href="/reservations"
              className="w-full sm:w-auto inline-flex justify-center px-8 py-3.5 text-xs font-semibold tracking-[0.12em] uppercase bg-white/15 text-white border border-white/45 hover:bg-white/25 transition-colors soft-pill backdrop-blur-sm"
            >
              Reservation
            </Link>
          </div>
          <p className="mt-6 text-[0.75rem] text-white/75">
            Open daily 9:00 to 23:00 · +256 707 808010
          </p>
        </div>
      </section>

      <section className="py-5 px-4 bg-white/70 border-y border-[var(--border)]">
        <div className="max-w-[1100px] mx-auto flex flex-wrap justify-center gap-3">
          {[
            { href: "/menu", label: "Food Menu" },
            { href: "/menu", label: "Bento Delivery" },
            { href: "/reservations", label: "Book a Table" },
            { href: "/about", label: "About Us" },
          ].map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="px-5 py-2.5 text-[0.7rem] tracking-[0.1em] uppercase text-[var(--text)] bg-[var(--bg-elevated)] hover:bg-[#b71c1c] hover:text-white transition-colors soft-pill"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </section>

      {/* Image mosaic strip */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-1.5 px-1.5 py-1.5">
        {[IMG.sushi, IMG.farm, IMG.ramen, IMG.interior].map((src, i) => (
          <div key={i} className="relative aspect-[4/3] overflow-hidden blob-sm">
            <Image src={src} alt="" fill quality={90} className="object-cover" sizes="25vw" />
          </div>
        ))}
      </section>

      <section className="py-16 md:py-24 px-5">
        <div className="max-w-[1100px] mx-auto grid md:grid-cols-2 gap-10 items-center">
          <ScrollReveal direction="left">
            <div className="relative aspect-[4/5] overflow-hidden blob shadow-lg">
              <Image
                src={IMG.farm}
                alt="Farm produce for Yamasen"
                fill
                quality={92}
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right" delay={100}>
            <div>
              <p className="text-[0.7rem] tracking-[0.25em] uppercase text-[#b71c1c] mb-3">
                Our Story
              </p>
              <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-bold mb-5">
                From Kitchen to Farm and Back Again
              </h2>
              <p className="text-[var(--text-muted)] leading-relaxed mb-4">
                YAMASEN is a farm to table Japanese restaurant in Kampala.
                Organic vegetables grow on our own farm. Fresh ingredients come
                from local suppliers. Seafood arrives from Dar es Salaam.
              </p>
              <p className="text-[var(--text-muted)] leading-relaxed mb-6">
                The kitchen follows traditional Japanese technique with a Kyoto
                trained approach, plus dishes you will only find here, inspired
                by Ugandan food culture.
              </p>
              <Link
                href="/about"
                className="text-xs tracking-[0.12em] uppercase text-[#b71c1c] font-semibold hover:underline"
              >
                Read more
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Full-bleed media band */}
      <section className="relative min-h-[42vh] md:min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src={IMG.wood} alt="" fill quality={90} className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-black/55" />
        </div>
        <ScrollReveal>
          <div className="relative z-10 px-5 text-center max-w-xl">
            <p className="text-[0.7rem] tracking-[0.25em] uppercase text-white/80 mb-3">
              The Experience
            </p>
            <h2 className="text-white text-[clamp(1.6rem,4vw,2.3rem)] font-bold mb-4">
              Open air timber hall, quiet service, true Japanese craft
            </h2>
            <Link
              href="/experience"
              className="inline-flex px-7 py-3 text-xs font-semibold tracking-[0.12em] uppercase text-white border border-white/50 soft-pill hover:bg-white/15 transition-colors"
            >
              Explore
            </Link>
          </div>
        </ScrollReveal>
      </section>

      <section className="py-16 bg-[var(--bg-elevated)] px-5">
        <div className="max-w-[1100px] mx-auto">
          <ScrollReveal>
            <div className="text-center mb-10">
              <p className="text-[0.7rem] tracking-[0.25em] uppercase text-[#b71c1c] mb-2">
                The Menu
              </p>
              <h2 className="text-[clamp(1.75rem,4vw,2.4rem)] font-bold">
                Signatures and bento
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {[
              { href: "/menu/dish/gogo-fish-curry", img: IMG.ramen, name: "Gogo Fish Curry", price: "UGX 40,000" },
              { href: "/menu/dish/tonkatsu-bento", img: IMG.bento, name: "Tonkatsu Bento", price: "UGX 45,000" },
              { href: "/menu/dish/sushi-platter", img: IMG.sushi, name: "Sushi Platter", price: "UGX 85,000" },
              { href: "/menu/dish/yakiniku-pizza", img: IMG.grill, name: "Yakiniku BBQ Pizza", price: "UGX 40,000" },
              { href: "/menu/dish/farm-to-table-salad", img: IMG.salad, name: "Farm to Table Salad", price: "UGX 28,000" },
              { href: "/menu/dish/pork-ramen", img: IMG.tea, name: "Pork Ramen", price: "UGX 48,000" },
            ].map((d, i) => (
              <ScrollReveal key={d.href} delay={i * 50}>
                <Link href={d.href} className="group block bg-white overflow-hidden shadow-md blob-card">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={d.img}
                      alt={d.name}
                      fill
                      quality={90}
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-3 md:p-4">
                    <h3 className="text-sm md:text-base font-semibold text-[var(--text)] leading-snug">
                      {d.name}
                    </h3>
                    <p className="text-xs text-[#b71c1c] font-semibold mt-1">{d.price}</p>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/menu"
              className="inline-flex px-8 py-3.5 text-xs font-semibold tracking-[0.12em] uppercase bg-[#b71c1c] text-white soft-pill"
            >
              Full Menu
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 px-5">
        <ScrollReveal>
          <div className="max-w-[700px] mx-auto text-center">
            <p className="text-[0.7rem] tracking-[0.2em] uppercase text-[var(--text-muted)] mb-3">
              TripAdvisor
            </p>
            <p className="text-3xl font-bold text-[#b71c1c] mb-1">4.6</p>
            <p className="text-sm text-[var(--text-muted)] mb-4">
              106 reviews · Ranked among top restaurants in Kampala
            </p>
            <a
              href="https://www.tripadvisor.com/Restaurant_Review-g293841-d15006919-Reviews-YAMASEN_Japanese_Restaurant-Kampala_Central_Region.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs tracking-[0.1em] uppercase text-[#b71c1c] font-semibold hover:underline"
            >
              Read reviews
            </a>
          </div>
        </ScrollReveal>
      </section>

      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={IMG.night}
            alt="Evening at Yamasen"
            fill
            quality={92}
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <ScrollReveal>
          <div className="relative z-10 max-w-[560px] mx-auto px-5 text-center">
            <h2 className="text-[clamp(1.75rem,4vw,2.4rem)] font-bold mb-4 text-white">
              An evening at Yamasen
            </h2>
            <p className="text-white/85 mb-8">
              Tank Hill Park, Tank Hill Road, Muyenga. Reservations recommended.
              Delivery and takeout available.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/reservations"
                className="inline-flex justify-center px-8 py-3.5 text-xs font-semibold tracking-[0.12em] uppercase bg-[#b71c1c] text-white soft-pill"
              >
                Book a Table
              </Link>
              <a
                href="https://wa.me/256707808010"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center px-8 py-3.5 text-xs font-semibold tracking-[0.12em] uppercase border border-white/50 text-white soft-pill hover:bg-white/10 transition-colors"
              >
                WhatsApp Order
              </a>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
