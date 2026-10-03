import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Experience",
  description: "Live teppanyaki, Friday music, lounge atmosphere and private dining at Izumi.",
};

const experiences = [
  {
    title: "Live Teppanyaki",
    desc: "Watch skilled chefs prepare your meal on the iron griddle — theatre, aroma and perfect timing right at your table. A signature Izumi experience.",
  },
  {
    title: "Lounge Atmosphere",
    desc: "Stylish indoor dining and terrace seating. Soft lighting, modern décor and a relaxed yet refined vibe perfect for date nights or groups.",
  },
  {
    title: "Live Music Fridays",
    desc: "Afro-Soul and live bands from 7–10 PM. Unwind with great food, drinks and the best Friday energy in Kololo.",
  },
  {
    title: "Private Events & VIP",
    desc: "VIP lounge, group bookings and private celebrations. Ideal for birthdays, corporate dinners and intimate gatherings. Contact us for tailored packages.",
  },
  {
    title: "Brunch & Special Events",
    desc: "Seasonal brunches, themed evenings and limited-slot experiences. Follow our socials or ask the team for the current calendar.",
  },
  {
    title: "Delivery & Takeaway",
    desc: "Enjoy Izumi at home via Uber Eats, Glovo and partner platforms. Same quality, delivered.",
  },
];

export default function ExperiencePage() {
  return (
    <div className="pt-[72px]">
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[1200px] w-[92%]">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.2em] uppercase text-[var(--gold)] mb-3">The Experience</p>
            <h1 className="font-[family-name:var(--font-cormorant)] text-[clamp(2.4rem,5vw,3.5rem)] font-medium mb-4">
              More Than a Meal
            </h1>
            <p className="text-[var(--text-muted)] max-w-xl mx-auto">
              From the theatre of teppanyaki to live music and private gatherings — every visit is designed to linger.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {experiences.map((exp) => (
              <article
                key={exp.title}
                className="bg-[var(--bg-card)] border border-[var(--border)] p-7 hover:border-[rgba(201,168,76,0.35)] transition-colors"
              >
                <h2 className="font-[family-name:var(--font-cormorant)] text-xl text-[var(--gold-light)] mb-3">
                  {exp.title}
                </h2>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">{exp.desc}</p>
              </article>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/reservations"
              className="inline-flex px-8 py-4 text-xs font-medium tracking-[0.1em] uppercase bg-[var(--gold)] text-black hover:bg-[var(--gold-light)] transition-colors"
            >
              Book Your Experience
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
