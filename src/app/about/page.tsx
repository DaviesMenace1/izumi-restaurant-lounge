import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: "The story of Izumi Restaurant & Lounge — Kampala's first Pan-Asian dining destination.",
};

const MENU_COVER =
  "https://contactless-9b492.web.app/restaurants/izumi/images/IZUMI%20-%20FOOD%20MENU%20ONLINE/IZUMI%20-%20FOOD%20MENU%20ONLINE-page-001.jpg";

export default function AboutPage() {
  return (
    <div className="pt-[72px]">
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[1200px] w-[92%]">
          <p className="text-xs tracking-[0.2em] uppercase text-[var(--gold)] mb-3">Our Story</p>
          <h1 className="font-[family-name:var(--font-cormorant)] text-[clamp(2.4rem,5vw,3.5rem)] font-medium leading-tight mb-8 max-w-2xl">
            Izumi — A Natural Spring of Flavour in the Heart of Kololo
          </h1>

          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
            <div className="space-y-5 text-[var(--text-muted)] text-[1.05rem] leading-relaxed">
              <p>
                Izumi (泉) is the Japanese word for “natural spring.” It represents freshness, purity and
                continuous flow — values that define everything we do.
              </p>
              <p>
                Opened in 2018 by proprietors with two decades of hospitality experience (including
                well-known Kampala restaurants), Izumi became Uganda’s first dedicated Pan-Asian
                restaurant. We brought authentic Japanese technique, Thai warmth and modern share-plate
                dining to the city.
              </p>
              <p>
                Our kitchen focuses on quality ingredients, precise execution and dishes designed to be
                shared. From daily-prepared sushi and sashimi to live teppanyaki theatre, fragrant Thai
                curries, dim sum and house-baked desserts — every plate tells a story of craft.
              </p>
              <p>
                The space itself is elegant yet relaxed: soft lighting, refined décor and both indoor and
                terrace seating. Fridays bring live music. The lounge atmosphere makes it ideal for date
                nights, celebrations and quiet evenings alike.
              </p>
            </div>
            <div>
              <div className="border border-[var(--border)] p-3 bg-[var(--bg-card)]">
                <Image
                  src={MENU_COVER}
                  alt="Izumi Restaurant atmosphere"
                  width={600}
                  height={750}
                  className="w-full aspect-[4/5] object-cover"
                />
              </div>
            </div>
          </div>

          <div className="mt-16 grid sm:grid-cols-3 gap-8 pt-12 border-t border-[var(--border)]">
            <div>
              <h3 className="font-[family-name:var(--font-cormorant)] text-xl text-[var(--gold)] mb-2">
                2018
              </h3>
              <p className="text-sm text-[var(--text-muted)]">Opened as Kampala’s first Pan-Asian restaurant & lounge.</p>
            </div>
            <div>
              <h3 className="font-[family-name:var(--font-cormorant)] text-xl text-[var(--gold)] mb-2">
                2019
              </h3>
              <p className="text-sm text-[var(--text-muted)]">Kampala Restaurant Week Innovative Dish Winner.</p>
            </div>
            <div>
              <h3 className="font-[family-name:var(--font-cormorant)] text-xl text-[var(--gold)] mb-2">
                Today
              </h3>
              <p className="text-sm text-[var(--text-muted)]">4.3 on TripAdvisor · 1,400+ reviews · Live music Fridays.</p>
            </div>
          </div>

          <div className="mt-14">
            <Link
              href="/reservations"
              className="inline-flex px-7 py-3.5 text-xs font-medium tracking-[0.1em] uppercase bg-[var(--gold)] text-black hover:bg-[var(--gold-light)] transition-colors"
            >
              Reserve a Table
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
