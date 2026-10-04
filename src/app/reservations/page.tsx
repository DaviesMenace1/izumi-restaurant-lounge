import type { Metadata } from "next";
import ReservationForm from "@/components/ReservationForm";

export const metadata: Metadata = {
  title: "Reservations",
  description:
    "Book a table at Yamasen Japanese Restaurant, Tank Hill Park, Muyenga. Call or WhatsApp +256 707 808010.",
};

export default function ReservationsPage() {
  return (
    <div className="pt-[72px]">
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[1100px] w-[92%]">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-[#b71c1c] mb-3">Book Your Table</p>
              <h1 className="text-[clamp(2rem,4vw,2.8rem)] font-bold mb-5">
                Reserve at Yamasen
              </h1>
              <p className="text-[var(--text-muted)] mb-8 leading-relaxed">
                Walk-ins are welcome. Reservations are recommended for evenings and weekends.
                For bento delivery, order via WhatsApp.
              </p>

              <div className="space-y-5">
                <a href="tel:+256707808010" className="block group">
                  <span className="block text-[0.7rem] tracking-[0.12em] uppercase text-[var(--text-muted)] mb-0.5">
                    Phone / WhatsApp
                  </span>
                  <span className="text-lg group-hover:text-[#b71c1c] transition-colors">
                    +256 707 808010
                  </span>
                </a>
                <a href="mailto:info@cotscots.com" className="block group">
                  <span className="block text-[0.7rem] tracking-[0.12em] uppercase text-[var(--text-muted)] mb-0.5">
                    Email
                  </span>
                  <span className="text-lg group-hover:text-[#b71c1c] transition-colors">
                    info@cotscots.com
                  </span>
                </a>
              </div>

              <p className="mt-10 text-sm text-[var(--text-muted)]">
                Hours: Monday to Sunday · 9:00 to 23:00
                <br />
                Tank Hill Park, Tank Hill Road, Muyenga, Kampala
              </p>
            </div>

            <div className="bg-white border border-[var(--border)] p-7 md:p-9 blob-card shadow-md">
              <ReservationForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
