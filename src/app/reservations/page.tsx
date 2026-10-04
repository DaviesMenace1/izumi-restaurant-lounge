import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ReservationForm from "@/components/ReservationForm";

export const metadata: Metadata = {
  title: "Reservations",
  description:
    "Book a table at Yamasen Japanese Restaurant, Tank Hill Park, Muyenga. Call or WhatsApp +256 707 808010.",
};

export default function ReservationsPage() {
  return (
    <div className="pt-[72px]">
      {/* Hiro-style media hero */}
      <section className="relative min-h-[48vh] md:min-h-[56vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=92"
            alt="Yamasen dining room"
            fill
            priority
            quality={92}
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/45 to-black/25" />
        </div>
        <div className="relative z-10 w-full px-5 pb-12 md:pb-16 max-w-[1100px] mx-auto">
          <p className="text-[0.7rem] tracking-[0.28em] uppercase text-white/80 mb-3">
            Reservations
          </p>
          <h1 className="text-[clamp(2.2rem,6vw,3.5rem)] font-bold text-white leading-tight mb-4 max-w-xl">
            Book a table on time
          </h1>
          <p className="text-white/85 text-[0.95rem] max-w-md leading-relaxed">
            Reserve online so we can prepare for your arrival. You can also call or
            WhatsApp us on +256 707 808010.
          </p>
        </div>
      </section>

      {/* Step indicators like Hiro */}
      <section className="bg-white border-b border-[var(--border)] py-6 px-5">
        <div className="max-w-[900px] mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-10">
          {[
            { n: "1", label: "Your details" },
            { n: "2", label: "Date and time" },
            { n: "3", label: "Confirm on WhatsApp" },
          ].map((s, i) => (
            <div key={s.n} className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center soft-pill bg-[#b71c1c] text-white text-sm font-bold">
                {s.n}
              </span>
              <span className="text-xs tracking-[0.12em] uppercase text-[var(--text)] font-semibold">
                {s.label}
              </span>
              {i < 2 && (
                <span className="hidden sm:block w-8 h-px bg-[var(--border)] ml-4" aria-hidden />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Main content */}
      <section className="py-14 md:py-20 px-5 bg-[var(--bg)]">
        <div className="max-w-[1100px] mx-auto grid lg:grid-cols-[1fr_1.15fr] gap-10 lg:gap-14 items-start">
          {/* Info column */}
          <div className="space-y-8">
            <div>
              <h2 className="text-[clamp(1.4rem,3vw,1.85rem)] font-bold mb-3">
                Make a reservation
              </h2>
              <p className="text-[var(--text-muted)] leading-relaxed text-[0.95rem]">
                Walk-ins are welcome. For evenings and weekends, booking ahead helps us
                seat you without wait. Large groups and celebrations are best arranged by
                phone.
              </p>
            </div>

            <div className="bg-white border border-[var(--border)] p-6 md:p-7 blob-card shadow-sm">
              <p className="text-[0.65rem] tracking-[0.2em] uppercase text-[#b71c1c] mb-3">
                Opening hours
              </p>
              <p className="text-[var(--text)] font-semibold mb-1">Monday to Sunday</p>
              <p className="text-[var(--text-muted)] text-sm mb-4">9:00 AM to 11:00 PM</p>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                Tank Hill Park, Tank Hill Road, Muyenga, Kampala
              </p>
            </div>

            <div className="space-y-4">
              <a href="tel:+256707808010" className="block group">
                <span className="block text-[0.65rem] tracking-[0.14em] uppercase text-[var(--text-muted)] mb-1">
                  Phone / WhatsApp
                </span>
                <span className="text-xl font-semibold text-[var(--text)] group-hover:text-[#b71c1c] transition-colors">
                  +256 707 808010
                </span>
              </a>
              <a href="mailto:info@cotscots.com" className="block group">
                <span className="block text-[0.65rem] tracking-[0.14em] uppercase text-[var(--text-muted)] mb-1">
                  Email
                </span>
                <span className="text-lg text-[var(--text)] group-hover:text-[#b71c1c] transition-colors">
                  info@cotscots.com
                </span>
              </a>
            </div>

            <div className="relative aspect-[16/10] overflow-hidden blob-card shadow-md">
              <Image
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1200&q=90"
                alt="Yamasen atmosphere"
                fill
                quality={90}
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>

            <p className="text-sm text-[var(--text-muted)]">
              Prefer delivery?{" "}
              <Link href="/menu" className="text-[#b71c1c] font-semibold hover:underline">
                Order from the menu
              </Link>{" "}
              and send via WhatsApp.
            </p>
          </div>

          {/* Form column */}
          <div className="bg-white border border-[var(--border)] p-7 md:p-9 blob-card shadow-lg">
            <p className="text-[0.65rem] tracking-[0.2em] uppercase text-[#b71c1c] mb-2">
              Reservation details
            </p>
            <h3 className="text-xl font-bold text-[var(--text)] mb-6">
              Confirm your visit
            </h3>
            <ReservationForm />
          </div>
        </div>
      </section>

      {/* Bottom CTA band */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&q=90"
            alt=""
            fill
            quality={88}
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/65" />
        </div>
        <div className="relative z-10 max-w-[640px] mx-auto px-5 text-center">
          <h2 className="text-white text-[clamp(1.5rem,3.5vw,2rem)] font-bold mb-3">
            Ready when you are
          </h2>
          <p className="text-white/85 text-sm mb-6">
            Same day seats may still be available. Call us and we will do our best.
          </p>
          <a
            href="https://wa.me/256707808010?text=Hello%20Yamasen%2C%20I%20would%20like%20to%20book%20a%20table."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex px-8 py-3.5 text-xs font-semibold tracking-[0.12em] uppercase bg-[#b71c1c] text-white soft-pill hover:bg-[#c62828] transition-colors"
          >
            WhatsApp Us Now
          </a>
        </div>
      </section>
    </div>
  );
}
