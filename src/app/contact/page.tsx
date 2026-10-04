import type { Metadata } from "next";
import Image from "next/image";
import { venue } from "@/data/media";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Visit Yamasen Japanese Restaurant at Tank Hill Park, Tank Hill Road, Muyenga, Kampala. Phone +256 707 808010.",
};

export default function ContactPage() {
  return (
    <div className="pt-[72px]">
      <section className="relative min-h-[36vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={venue.nightExterior}
            alt="Yamasen at Tank Hill"
            fill
            priority
            quality={90}
            className="object-cover brightness-110"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/30 to-black/15" />
        </div>
        <div className="relative z-10 px-5 pb-10 max-w-[1100px] mx-auto w-full">
          <p className="text-[0.7rem] tracking-[0.25em] uppercase text-white/90 mb-2">Visit Us</p>
          <h1 className="text-[clamp(2rem,5vw,3rem)] font-bold text-white">
            Tank Hill Park, Muyenga
          </h1>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-[1100px] w-[92%]">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <p className="mb-10 leading-relaxed" style={{ color: "#4a4038" }}>
                Yamasen Japanese Restaurant sits at Tank Hill Park on Tank Hill Road.
                Open daily for lunch and dinner.
              </p>

              <ul className="space-y-6">
                <li>
                  <strong className="block text-[0.7rem] tracking-[0.12em] uppercase mb-1" style={{ color: "#9a1515" }}>
                    Hours
                  </strong>
                  <span style={{ color: "#4a4038" }}>
                    Monday to Sunday · 9:00 to 23:00
                  </span>
                </li>
                <li>
                  <strong className="block text-[0.7rem] tracking-[0.12em] uppercase mb-1" style={{ color: "#9a1515" }}>
                    Phone / WhatsApp
                  </strong>
                  <a
                    href="tel:+256707808010"
                    className="hover:opacity-80 transition-opacity"
                    style={{ color: "#1a1410" }}
                  >
                    +256 707 808010
                  </a>
                </li>
                <li>
                  <strong className="block text-[0.7rem] tracking-[0.12em] uppercase mb-1" style={{ color: "#9a1515" }}>
                    Email
                  </strong>
                  <a
                    href="mailto:info@cotscots.com"
                    className="hover:opacity-80 transition-opacity"
                    style={{ color: "#1a1410" }}
                  >
                    info@cotscots.com
                  </a>
                </li>
                <li>
                  <strong className="block text-[0.7rem] tracking-[0.12em] uppercase mb-1" style={{ color: "#9a1515" }}>
                    Social
                  </strong>
                  <span className="flex flex-wrap gap-x-3 gap-y-1" style={{ color: "#4a4038" }}>
                    <a
                      href="https://www.instagram.com/yamasen_kampala"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#9a1515] transition-colors"
                    >
                      Instagram
                    </a>
                    <a
                      href="https://www.facebook.com/yamasen.cotscots"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#9a1515] transition-colors"
                    >
                      Facebook
                    </a>
                  </span>
                </li>
              </ul>

              <div className="mt-10 relative aspect-[16/10] overflow-hidden blob-card shadow-md">
                <Image
                  src={venue.hallDay}
                  alt="Yamasen entrance hall"
                  fill
                  quality={88}
                  className="object-cover brightness-105"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
              </div>
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
