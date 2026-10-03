import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Visit Izumi Restaurant & Lounge at 38 Upper Kololo Terrace, Kampala. Phone, email and map.",
};

export default function ContactPage() {
  return (
    <div className="pt-[72px]">
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[1200px] w-[92%]">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-[var(--gold)] mb-3">Visit Us</p>
              <h1 className="font-[family-name:var(--font-cormorant)] text-[clamp(2.2rem,4vw,3rem)] font-medium mb-5">
                38 Upper Kololo Terrace
              </h1>
              <p className="text-[var(--text-muted)] mb-10 leading-relaxed">
                Nestled in the heart of Kololo, Kampala. Easy access and a refined escape from the city pace.
              </p>

              <ul className="space-y-6">
                <li>
                  <strong className="block text-[0.7rem] tracking-[0.12em] uppercase text-[var(--gold)] mb-1">
                    Hours
                  </strong>
                  <span className="text-[var(--text-muted)]">
                    Tuesday – Sunday · 12:00 – 23:00
                    <br />
                    Closed Mondays
                  </span>
                </li>
                <li>
                  <strong className="block text-[0.7rem] tracking-[0.12em] uppercase text-[var(--gold)] mb-1">
                    Phone
                  </strong>
                  <a href="tel:+256756244911" className="text-[var(--text)] hover:text-[var(--gold)] transition-colors">
                    +256 756 244 911
                  </a>
                </li>
                <li>
                  <strong className="block text-[0.7rem] tracking-[0.12em] uppercase text-[var(--gold)] mb-1">
                    Email
                  </strong>
                  <a
                    href="mailto:izumireservations@gmail.com"
                    className="text-[var(--text)] hover:text-[var(--gold)] transition-colors"
                  >
                    izumireservations@gmail.com
                  </a>
                </li>
                <li>
                  <strong className="block text-[0.7rem] tracking-[0.12em] uppercase text-[var(--gold)] mb-1">
                    Social
                  </strong>
                  <span className="text-[var(--text-muted)]">
                    <a
                      href="https://www.instagram.com/izumi_kla/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[var(--gold)] transition-colors"
                    >
                      Instagram
                    </a>
                    {" · "}
                    <a
                      href="https://www.facebook.com/izumikla"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[var(--gold)] transition-colors"
                    >
                      Facebook
                    </a>
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-[var(--bg-card)] border border-[var(--border)] min-h-[360px] relative overflow-hidden">
              <iframe
                src="https://maps.google.com/maps?q=38+Upper+Kololo+Terrace+Kampala&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, position: "absolute", inset: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Izumi Restaurant location"
              />
              <p className="absolute bottom-0 left-0 right-0 bg-black/90 text-center text-xs text-[var(--text-muted)] py-3 px-4">
                Search “Izumi Restaurant & Lounge Kololo” on Google Maps for precise directions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
