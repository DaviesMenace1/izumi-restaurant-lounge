import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Visit Yamasen Japanese Restaurant at Tank Hill Park, Tank Hill Road, Muyenga, Kampala. Phone +256 707 808010.",
};

export default function ContactPage() {
  return (
    <div className="pt-[72px]">
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[1100px] w-[92%]">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-[#b71c1c] mb-3">Visit Us</p>
              <h1 className="text-[clamp(2rem,4vw,2.8rem)] font-bold mb-5">
                Tank Hill Park, Muyenga
              </h1>
              <p className="text-[var(--text-muted)] mb-10 leading-relaxed">
                Yamasen Japanese Restaurant sits at Tank Hill Park on Tank Hill Road.
                Open daily for lunch and dinner.
              </p>

              <ul className="space-y-6">
                <li>
                  <strong className="block text-[0.7rem] tracking-[0.12em] uppercase text-[#b71c1c] mb-1">
                    Hours
                  </strong>
                  <span className="text-[var(--text-muted)]">
                    Monday to Sunday · 9:00 to 23:00
                  </span>
                </li>
                <li>
                  <strong className="block text-[0.7rem] tracking-[0.12em] uppercase text-[#b71c1c] mb-1">
                    Phone / WhatsApp
                  </strong>
                  <a
                    href="tel:+256707808010"
                    className="text-[var(--text)] hover:text-[#b71c1c] transition-colors"
                  >
                    +256 707 808010
                  </a>
                </li>
                <li>
                  <strong className="block text-[0.7rem] tracking-[0.12em] uppercase text-[#b71c1c] mb-1">
                    Email
                  </strong>
                  <a
                    href="mailto:info@cotscots.com"
                    className="text-[var(--text)] hover:text-[#b71c1c] transition-colors"
                  >
                    info@cotscots.com
                  </a>
                </li>
                <li>
                  <strong className="block text-[0.7rem] tracking-[0.12em] uppercase text-[#b71c1c] mb-1">
                    Social
                  </strong>
                  <span className="text-[var(--text-muted)] flex flex-wrap gap-x-3 gap-y-1">
                    <a
                      href="https://www.instagram.com/yamasen_kampala"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#b71c1c] transition-colors"
                    >
                      Instagram
                    </a>
                    <a
                      href="https://www.facebook.com/yamasen.cotscots"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#b71c1c] transition-colors"
                    >
                      Facebook
                    </a>
                    <a
                      href="https://www.tripadvisor.com/Restaurant_Review-g293841-d15006919-Reviews-YAMASEN_Japanese_Restaurant-Kampala_Central_Region.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#b71c1c] transition-colors"
                    >
                      TripAdvisor
                    </a>
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white border border-[var(--border)] min-h-[360px] relative overflow-hidden blob-card shadow-md">
              <iframe
                src="https://maps.google.com/maps?q=0.2978868,32.6093978&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, position: "absolute", inset: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Yamasen Japanese Restaurant location"
              />
              <p className="absolute bottom-0 left-0 right-0 bg-[#2a2420]/95 text-center text-xs text-[#c4b8a8] py-3 px-4">
                Search Yamasen Japanese Restaurant Tank Hill on Google Maps for directions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
