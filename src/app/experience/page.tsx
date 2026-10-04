import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Omakase, bento delivery, farm to table dining and loyalty at Yamasen Japanese Restaurant, Tank Hill Kampala.",
};

const experiences = [
  {
    title: "Omakase",
    desc: "Chef led tasting courses using local produce and East African seafood. One of the few omakase experiences in Uganda.",
  },
  {
    title: "Farm to Table",
    desc: "Organic vegetables from our own farm, herbs from partner growers, and a circular food system that returns nutrients to the land.",
  },
  {
    title: "Bento Delivery",
    desc: "Complete set meals delivered across Kampala. Tonkatsu, karaage, curry and more, packed for the table at home.",
  },
  {
    title: "Open Air Hall",
    desc: "Timber structure at Tank Hill Park with indoor and outdoor seating, calm service and a true Japanese atmosphere.",
  },
  {
    title: "Loyalty Card",
    desc: "Earn stamps across Yamasen, Farm to Table and Klafts. Rewards include omakase dinners and house vouchers.",
  },
  {
    title: "Wine and Drinks",
    desc: "Curated red, white, rose and sparkling selections to pair with sushi, ramen, curry and grilled plates.",
  },
];

export default function ExperiencePage() {
  return (
    <div className="pt-[72px]">
      <section className="relative min-h-[40vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600&q=90"
            alt="Yamasen experience"
            fill
            priority
            quality={90}
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/35 to-black/15" />
        </div>
        <div className="relative z-10 px-5 pb-12 max-w-[1100px] mx-auto w-full text-center">
          <p className="text-[0.7rem] tracking-[0.25em] uppercase text-white/80 mb-2">The Experience</p>
          <h1 className="text-[clamp(2.2rem,5vw,3.4rem)] font-bold text-white mb-3">
            More than a meal
          </h1>
          <p className="text-white/85 max-w-xl mx-auto text-sm">
            Omakase, farm produce, bento delivery and a calm timber hall at Tank Hill.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-[1100px] w-[92%]">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {experiences.map((exp) => (
              <article
                key={exp.title}
                className="bg-white border border-[var(--border)] p-7 shadow-sm blob-card hover:border-[#b71c1c]/35 transition-colors"
              >
                <h2 className="text-xl font-semibold text-[var(--text)] mb-3">{exp.title}</h2>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">{exp.desc}</p>
              </article>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link
              href="/reservations"
              className="inline-flex px-8 py-3.5 text-xs font-semibold tracking-[0.1em] uppercase bg-[#b71c1c] text-white soft-pill"
            >
              Book Your Experience
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
