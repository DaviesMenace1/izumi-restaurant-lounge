import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ReservationForm from "@/components/ReservationForm";
import { venue } from "@/data/media";

export const metadata: Metadata = {
  title: "Reservations",
  description:
    "Book a table at Yamasen Japanese Restaurant, Tank Hill Park, Muyenga. Call or WhatsApp +256 707 808010.",
};

const steps = [
  { n: "1", label: "Your details" },
  { n: "2", label: "Date and time" },
  { n: "3", label: "Confirm on WhatsApp" },
];

export default function ReservationsPage() {
  return (
    <div className="pt-[72px]">
      <section className="relative min-h-[48vh] md:min-h-[56vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={venue.nightExterior}
            alt="Yamasen dining room"
            fill
            priority
            quality={92}
            className="object-cover brightness-110"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/40 to-black/20" />
        </div>
        <div className="relative z-10 w-full px-5 pb-12 md:pb-16 max-w-[1100px] mx-auto">
          <p className="text-[0.7rem] tracking-[0.28em] uppercase text-white/90 mb-3">
            Reservations
          </p>
          <h1 className="text-[clamp(2.2rem,6vw,3.5rem)] font-bold text-white leading-tight mb-4 max-w-xl">
            Book a table on time
          </h1>
          <p className="text-white/90 text-[0.95rem] max-w-md leading-relaxed">
            Reserve online so we can prepare for your arrival. You can also call or
            WhatsApp us on +256 707 808010.
          </p>
        </div>
      </section>

      {/* Milestones: vertical timeline on mobile, horizontal on sm+ */}
      <section className="bg-white border-b border-[var(--border)] py-8 px-5">
        <div className="max-w-[720px] mx-auto">
          {/* Mobile: vertical */}
          <ol className="sm:hidden relative space-y-0">
            {steps.map((s, i) => (
              <li key={s.n} className="relative flex gap-4 pb-8 last:pb-0">
                {i < steps.length - 1 && (
                  <span
                    className="absolute left-[17px] top-9 bottom-0 w-px bg-[var(--border)]"
                    aria-hidden
                  />
                )}
                <span className="relative z-[1] flex h-9 w-9 shrink-0 items-center justify-center soft-pill bg-[#9a1515] text-white text-sm font-bold">
                  {s.n}
                </span>
                <div className="pt-1.5 min-w-0">
                  <p
                    className="text-xs tracking-[0.12em] uppercase font-bold"
                    style={{ color: "#1a1410" }}
                  >
                    {s.label}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          {/* Desktop / tablet: horizontal */}
          <ol className="hidden sm:flex items-start justify-between gap-2">
            {steps.map((s, i) => (
              <li key={s.n} className="flex flex-1 items-center min-w-0">
                <div className="flex flex-col items-center text-center gap-2.5 min-w-0 flex-1">
                  <span className="flex h-10 w-10 items-center justify-center soft-pill bg-[#9a1515] text-white text-sm font-bold shadow-sm">
                    {s.n}
                  </span>
                  <span
                    className="text-[0.7rem] tracking-[0.1em] uppercase font-bold leading-snug px-1"
                    style={{ color: "#1a1410" }}
                  >
                    {s.label}
                  </span>
                </div>
                {i < steps.length - 1 && (
                  <div
                    className="hidden md:block w-full max-w-[64px] h-px bg-[var(--border)] shrink-0 mx-1 mt-[-1.25rem]"
                    aria-hidden
                  />
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-14 md:py-20 px-5 bg-[var(--bg)]">
        <div className="max-w-[1100px] mx-auto grid lg:grid-cols-[1fr_1.15fr] gap-10 lg:gap-14 items-start">
          <div className="space-y-8">
            <div>
              <h2
                className="text-[clamp(1.4rem,3vw,1.85rem)] font-bold mb-3"
                style={{ color: "#1a1410" }}
              >
                Make a reservation
              </h2>
              <p className="leading-relaxed text-[0.95rem]" style={{ color: "#4a4038" }}>
                Walk-ins are welcome. For evenings and weekends, booking ahead helps us
                seat you without wait. Large groups and celebrations are best arranged by
                phone.
              </p>
            </div>

            <div className="bg-white border border-[var(--border)] p-6 md:p-7 blob-card shadow-sm">
              <p className="text-[0.65rem] tracking-[0.2em] uppercase mb-3 font-bold" style={{ color: "#9a1515" }}>
                Opening hours
              </p>
              <p className="font-semibold mb-1" style={{ color: "#1a1410" }}>Monday to Sunday</p>
              <p className="text-sm mb-4" style={{ color: "#4a4038" }}>9:00 AM to 11:00 PM</p>
              <p className="text-sm leading-relaxed" style={{ color: "#4a4038" }}>
                Tank Hill Park, Tank Hill Road, Muyenga, Kampala
              </p>
            </div>

            <div className="space-y-4">
              <a href="tel:+256707808010" className="block group">
                <span className="block text-[0.65rem] tracking-[0.14em] uppercase mb-1" style={{ color: "#4a4038" }}>
                  Phone / WhatsApp
                </span>
                <span className="text-xl font-semibold group-hover:text-[#9a1515] transition-colors" style={{ color: "#1a1410" }}>
                  +256 707 808010
                </span>
              </a>
              <a href="mailto:info@cotscots.com" className="block group">
                <span className="block text-[0.65rem] tracking-[0.14em] uppercase mb-1" style={{ color: "#4a4038" }}>
                  Email
                </span>
                <span className="text-lg group-hover:text-[#9a1515] transition-colors" style={{ color: "#1a1410" }}>
                  info@cotscots.com
                </span>
              </a>
            </div>

            <div className="relative aspect-[16/10] overflow-hidden blob-card shadow-md">
              <Image
                src={venue.seating}
                alt="Yamasen atmosphere"
                fill
                quality={90}
                className="object-cover brightness-105"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>

            <p className="text-sm" style={{ color: "#4a4038" }}>
              Prefer delivery?{" "}
              <Link href="/menu" className="font-semibold hover:underline" style={{ color: "#9a1515" }}>
                Order from the menu
              </Link>{" "}
              and send via WhatsApp.
            </p>
          </div>

          <div className="bg-white border border-[var(--border)] p-6 sm:p-7 md:p-9 blob-card shadow-lg">
            <p className="text-[0.65rem] tracking-[0.2em] uppercase mb-2 font-bold" style={{ color: "#9a1515" }}>
              Reservation details
            </p>
            <h3 className="text-xl font-bold mb-6" style={{ color: "#1a1410" }}>
              Confirm your visit
            </h3>
            <ReservationForm />
          </div>
        </div>
      </section>

      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={venue.closing}
            alt=""
            fill
            quality={88}
            className="object-cover brightness-110"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/55" />
        </div>
        <div className="relative z-10 max-w-[640px] mx-auto px-5 text-center">
          <h2 className="text-white text-[clamp(1.5rem,3.5vw,2rem)] font-bold mb-3">
            Ready when you are
          </h2>
          <p className="text-white/90 text-sm mb-6">
            Same day seats may still be available. Call us and we will do our best.
          </p>
          <a
            href="https://wa.me/256707808010?text=Hello%20Yamasen%2C%20I%20would%20like%20to%20book%20a%20table."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex px-8 py-3.5 text-xs font-semibold tracking-[0.12em] uppercase bg-[#9a1515] text-white soft-pill hover:bg-[#c62828] transition-colors"
          >
            WhatsApp Us Now
          </a>
        </div>
      </section>
    </div>
  );
}
