import Image from "next/image";
import { partners as logos } from "@/data/media";

const partners = [
  {
    name: "TripAdvisor",
    href: "https://www.tripadvisor.com/Restaurant_Review-g293841-d15006919-Reviews-YAMASEN_Japanese_Restaurant-Kampala_Central_Region.html",
    src: logos.tripadvisor,
  },
  {
    name: "Booking.com",
    href: "https://www.booking.com",
    src: logos.booking,
  },
  {
    name: "Uber Eats",
    href: "https://www.ubereats.com",
    src: logos.uberEats,
  },
  {
    name: "Glovo",
    href: "https://glovoapp.com",
    src: logos.glovo,
  },
];

export default function Partners() {
  return (
    <div>
      <p className="text-center text-[0.7rem] tracking-[0.2em] uppercase text-[var(--text-muted)] mb-6 font-bold">
        Trusted partners
      </p>
      <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-6">
        {partners.map((p) => (
          <a
            key={p.name}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            className="relative h-11 w-[110px] sm:h-12 sm:w-[130px] opacity-100 transition-opacity hover:opacity-90"
            title={p.name}
          >
            <Image
              src={p.src}
              alt={p.name}
              fill
              className="object-contain"
              sizes="130px"
            />
          </a>
        ))}
      </div>
    </div>
  );
}
