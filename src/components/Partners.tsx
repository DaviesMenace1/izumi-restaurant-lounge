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
    name: "Shop",
    href: "https://www.instagram.com/yamasen_kampala",
    src: logos.shop,
  },
  {
    name: "UWA",
    href: "https://ugandawildlife.org",
    src: logos.uwa,
  },
];

export default function Partners({
  showRating = false,
}: {
  showRating?: boolean;
}) {
  return (
    <div>
      <p className="text-center text-[0.7rem] tracking-[0.2em] uppercase text-[var(--text-muted)] mb-6">
        Trusted partners
      </p>
      <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-6">
        {partners.map((p) => (
          <a
            key={p.name}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            className="relative h-10 w-[100px] sm:h-12 sm:w-[120px] opacity-90 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
            title={p.name}
          >
            <Image
              src={p.src}
              alt={p.name}
              fill
              className="object-contain"
              sizes="120px"
            />
          </a>
        ))}
      </div>
      {showRating && (
        <p className="text-center text-xs text-[var(--text-muted)] mt-5">
          4.6 on TripAdvisor · 106 reviews
        </p>
      )}
    </div>
  );
}
