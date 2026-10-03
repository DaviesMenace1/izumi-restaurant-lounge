import type { Metadata } from "next";
import ReservationForm from "@/components/ReservationForm";

export const metadata: Metadata = {
  title: "Reservations",
  description: "Book a table at Izumi Restaurant & Lounge, Kololo Kampala. WhatsApp or call us.",
};

export default function ReservationsPage() {
  return (
    <div className="pt-[72px]">
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[1200px] w-[92%]">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-[var(--gold)] mb-3">Book Your Table</p>
              <h1 className="font-[family-name:var(--font-cormorant)] text-[clamp(2.2rem,4vw,3rem)] font-medium mb-5">
                Reserve an Experience
              </h1>
              <p className="text-[var(--text-muted)] mb-8 leading-relaxed">
                Walk-ins are welcome, but reservations are strongly recommended — especially on weekends,
                Friday live-music nights and for brunch events.
              </p>

              <div className="space-y-5">
                <a href="tel:+256756244911" className="block group">
                  <span className="block text-[0.7rem] tracking-[0.12em] uppercase text-[var(--text-muted)] mb-0.5">
                    Phone / WhatsApp
                  </span>
                  <span className="text-lg group-hover:text-[var(--gold)] transition-colors">
                    +256 756 244 911
                  </span>
                </a>
                <a href="tel:+256782503655" className="block group">
                  <span className="block text-[0.7rem] tracking-[0.12em] uppercase text-[var(--text-muted)] mb-0.5">
                    Alternative
                  </span>
                  <span className="text-lg group-hover:text-[var(--gold)] transition-colors">
                    +256 782 503 655
                  </span>
                </a>
                <a href="mailto:izumireservations@gmail.com" className="block group">
                  <span className="block text-[0.7rem] tracking-[0.12em] uppercase text-[var(--text-muted)] mb-0.5">
                    Email
                  </span>
                  <span className="text-lg group-hover:text-[var(--gold)] transition-colors">
                    izumireservations@gmail.com
                  </span>
                </a>
              </div>

              <p className="mt-10 text-sm text-[var(--text-muted)]">
                Hours: Tuesday – Sunday · 12:00 – 23:00<br />
                Closed Mondays
              </p>
            </div>

            <div className="bg-[var(--bg-card)] border border-[var(--border)] p-7 md:p-9">
              <ReservationForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
