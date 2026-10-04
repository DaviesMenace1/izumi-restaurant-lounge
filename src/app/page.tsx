import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import Partners from "@/components/Partners";
import { venue } from "@/data/media";

export default function HomePage() {
  return (
    <>
      {/* HERO — centered like Roots */}
      <section className="pt-[72px] relative min-h-[88vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={venue.nightExterior}
            alt="Yamasen Japanese Restaurant"
            fill
            priority
            quality={95}
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 px-5 py-20 max-w-3xl mx-auto text-center">
          <h1 className="text-[clamp(2.4rem,7vw,4rem)] font-semibold text-white tracking-[0.04em] leading-[1.15] mb-5">
            THE HEART OF
            <br />
            JAPANESE CUISINE
          </h1>
          <p className="text-white/90 text-[0.95rem] md:text-base leading-relaxed max-w-xl mx-auto mb-10">
            Whether you are savoring fresh sushi, house ramen, or farm to table
            bento, every plate reflects our passion for Kyoto craft and Ugandan
            hospitality.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/menu" className="btn-cream inline-flex justify-center">
              Discover Menu
            </Link>
            <Link href="/reservations" className="btn-cream inline-flex justify-center">
              Make a Reservation
            </Link>
          </div>
        </div>
      </section>

      {/* WELCOME — centered text block */}
      <section className="py-20 md:py-28 px-5 bg-[var(--bg)]">
        <ScrollReveal>
          <div className="max-w-2xl mx-auto text-center">
            <p className="eyebrow mb-4">Welcome to Yamasen</p>
            <h2 className="text-[clamp(1.9rem,4.5vw,2.85rem)] font-semibold mb-6 tracking-[0.02em]">
              Enjoy an Exceptional
              <br />
              Journey of Taste
            </h2>
            <p className="text-[var(--text-muted)] text-[0.95rem] leading-[1.85] mb-5">
              At Yamasen, we are more than a meal. We are farm to table Japanese
              dining in a timber hall that feels calm and open. Tucked at Tank
              Hill Park in Muyenga, our indoor and outdoor seating offers the
              perfect atmosphere for every occasion.
            </p>
            <p className="text-[var(--text-muted)] text-[0.95rem] leading-[1.85] mb-10">
              Indulge in authentic Japanese technique with organic vegetables from
              our own farm, seafood from Dar es Salaam, and dishes inspired by
              Ugandan food culture. Each bite tells the story of Kyoto training
              and local hospitality.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/menu" className="btn-outline inline-flex justify-center">
                View Our Menu
              </Link>
              <Link href="/reservations" className="btn-outline inline-flex justify-center">
                Book a Table
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Featured image */}
      <section className="px-0">
        <div className="relative w-full aspect-[16/9] md:aspect-[21/9] max-h-[520px] overflow-hidden">
          <Image
            src={venue.hallDay}
            alt="Yamasen dining hall"
            fill
            quality={92}
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </section>

      {/* Three pillars — dark like Roots */}
      <section className="bg-[var(--bg-dark)] text-[#e8e0d4] py-16 md:py-20 px-5">
        <div className="max-w-[1000px] mx-auto grid sm:grid-cols-3 gap-10 md:gap-12 text-center">
          {[
            {
              title: "Authentic Taste",
              body: "From sushi and sashimi to ramen and curry, every plate is traditional Japanese technique made with care and local produce.",
            },
            {
              title: "Perfect for Every Occasion",
              body: "Whether it is a family dinner, business lunch, or private gathering, Yamasen offers a warm, flexible space for any moment.",
            },
            {
              title: "Warm Hospitality",
              body: "From the moment you arrive, you are treated with quiet care. Our team works to make every visit personal and memorable.",
            },
          ].map((item) => (
            <ScrollReveal key={item.title}>
              <div>
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-[#e8e0d4]/35">
                  <span className="text-xl text-[#e8e0d4]">·</span>
                </div>
                <h3 className="text-lg font-semibold text-white tracking-[0.06em] uppercase mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-[#c4b8a8] leading-relaxed">{item.body}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Bento / delivery CTA */}
      <section className="py-16 md:py-20 px-5 bg-[var(--bg-elevated)]">
        <ScrollReveal>
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-[clamp(1.6rem,3.5vw,2.2rem)] font-semibold mb-4 tracking-[0.03em]">
              Need Bento Delivery?
            </h2>
            <p className="text-[var(--text-muted)] text-[0.95rem] leading-relaxed mb-8">
              Hosting a lunch, office order, or quiet evening at home? Order bento
              boxes, sushi, and house favourites for delivery across Kampala. Fresh
              ingredients, complete sets, and easy WhatsApp ordering.
            </p>
            <Link href="/menu" className="btn-cream inline-flex justify-center">
              Order from the Menu
            </Link>
          </div>
        </ScrollReveal>
      </section>

      {/* Venue photo */}
      <section>
        <div className="relative w-full aspect-[16/10] md:aspect-[21/9] max-h-[480px] overflow-hidden">
          <Image
            src={venue.outdoor}
            alt="Yamasen outdoor seating"
            fill
            quality={90}
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </section>

      {/* Services / experience */}
      <section className="py-20 md:py-24 px-5 bg-[var(--bg)]">
        <div className="max-w-[900px] mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-[clamp(1.75rem,4vw,2.6rem)] font-semibold mb-5 tracking-[0.02em]">
                Exquisite Experiences
                <br />
                for Every Occasion
              </h2>
              <p className="text-[var(--text-muted)] text-[0.95rem] leading-relaxed max-w-2xl mx-auto">
                We specialise in making every visit memorable. Whether you are
                here for omakase, a quiet lunch, bento delivery, or a celebration
                with friends, Yamasen offers Japanese craft in a serene timber
                hall at Tank Hill.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={80}>
            <div className="grid sm:grid-cols-2 gap-x-12 gap-y-3 max-w-lg mx-auto mb-12 text-[0.95rem] text-[var(--text)]">
              {[
                "Omakase tasting courses",
                "Farm to table dining",
                "Bento delivery",
                "Business lunches",
                "Private gatherings",
                "In house dining",
              ].map((item) => (
                <p key={item} className="flex items-start gap-2">
                  <span className="text-[#b71c1c] mt-0.5">•</span>
                  <span>{item}</span>
                </p>
              ))}
            </div>
          </ScrollReveal>

          <div className="text-center">
            <Link href="/experience" className="btn-outline inline-flex justify-center">
              View Experiences We Offer
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-14 md:py-16 px-5 bg-[var(--bg-elevated)] border-y border-[var(--border)]">
        <div className="max-w-[900px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { n: "4.6", l: "TripAdvisor Rating" },
            { n: "106+", l: "Guest Reviews" },
            { n: "9–23", l: "Hours Daily" },
            { n: "26+", l: "Menu Favourites" },
          ].map((s) => (
            <div key={s.l}>
              <p className="text-[clamp(2rem,4vw,2.75rem)] font-semibold text-[var(--text)] tracking-wide mb-1">
                {s.n}
              </p>
              <p className="text-[0.7rem] tracking-[0.18em] uppercase text-[var(--text-muted)] font-bold">
                {s.l}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-[var(--bg-dark)] text-[#e8e0d4] py-16 md:py-20 px-5">
        <ScrollReveal>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-4xl text-[#c4b8a8] mb-6 font-serif leading-none">&ldquo;</p>
            <p className="text-[0.7rem] tracking-[0.25em] uppercase text-[#c4b8a8] mb-4">
              The heart of Japanese food in Kampala
            </p>
            <p className="text-[1.05rem] leading-relaxed text-[#e8e0d4] mb-6 italic">
              Farm to table Japanese with organic produce, seafood from the coast,
              and a calm timber hall at Tank Hill. Quiet service, true craft, and
              dishes you will only find here.
            </p>
            <p className="text-sm tracking-[0.15em] uppercase text-white font-semibold">
              Yamasen Guests · TripAdvisor 4.6
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* Reserve CTA — full bleed */}
      <section className="relative min-h-[52vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={venue.seating}
            alt="Reserve at Yamasen"
            fill
            quality={90}
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/55" />
        </div>
        <ScrollReveal>
          <div className="relative z-10 px-5 py-16 max-w-xl mx-auto text-center">
            <p className="text-[0.7rem] tracking-[0.28em] uppercase text-white/80 mb-3">
              Reserve Your Table Today
            </p>
            <h2 className="text-[clamp(1.9rem,4.5vw,2.8rem)] font-semibold text-white tracking-[0.03em] mb-4">
              Dine With Us Today
            </h2>
            <p className="text-white/90 text-[0.95rem] leading-relaxed mb-6">
              Book your table and enjoy an unforgettable dining experience at
              Yamasen. Our open air timber hall and Japanese flavours make every
              moment special.
            </p>
            <p className="text-[0.65rem] tracking-[0.2em] uppercase text-white/75 mb-2">
              Booking Information
            </p>
            <p className="text-white text-sm mb-8">
              Call or WhatsApp to reserve:{" "}
              <a href="tel:+256707808010" className="underline underline-offset-2">
                +256 707 808010
              </a>
            </p>
            <Link href="/reservations" className="btn-outline-light inline-flex justify-center">
              Book a Table
            </Link>
          </div>
        </ScrollReveal>
      </section>

      {/* Explore menu CTA */}
      <section className="relative min-h-[48vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={venue.tables}
            alt="Yamasen menu"
            fill
            quality={90}
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <ScrollReveal>
          <div className="relative z-10 px-5 py-16 max-w-xl mx-auto text-center">
            <p className="text-[0.7rem] tracking-[0.28em] uppercase text-white/80 mb-3">
              Browse Our Dishes
            </p>
            <h2 className="text-[clamp(1.9rem,4.5vw,2.8rem)] font-semibold text-white tracking-[0.03em] mb-4">
              Explore Our Menu
            </h2>
            <p className="text-white/90 text-[0.95rem] leading-relaxed mb-6">
              From sushi and sashimi to ramen, bento, and Kyoto style plates, our
              menu offers authentic Japanese cuisine crafted with farm produce and
              coastal seafood.
            </p>
            <p className="text-[0.65rem] tracking-[0.2em] uppercase text-white/75 mb-2">
              Working Hours
            </p>
            <p className="text-white text-sm mb-8">
              Monday to Sunday · 9:00 AM to 11:00 PM
            </p>
            <Link href="/menu" className="btn-outline-light inline-flex justify-center">
              Explore Menu
            </Link>
          </div>
        </ScrollReveal>
      </section>

      {/* Partners */}
      <section className="py-14 px-5 bg-[var(--bg)]">
        <div className="max-w-[900px] mx-auto">
          <Partners showRating />
        </div>
      </section>
    </>
  );
}
