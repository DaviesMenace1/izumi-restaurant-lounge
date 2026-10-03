import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu",
  description: "Explore Izumi's Pan-Asian menu — sushi, sashimi, teppanyaki, Thai curries, dim sum and more.",
};

const categories = [
  {
    title: "Sushi & Sashimi",
    items: [
      "Chicken Katsu Roll (8pcs)",
      "Burnt Salmon / Spicy Roll",
      "Thai Spicy Chicken Sushi",
      "Thai Spicy Prawns Roll",
      "Fresh Salmon Sashimi / Thai Sashimi",
      "Vegetarian Maki & Green Rolls",
      "Nigiri selection",
      "Sashimi & Sushi Platters",
    ],
  },
  {
    title: "Starters & Dim Sum",
    items: [
      "Chicken / Prawn Gyoza",
      "Spring Rolls",
      "Prawn Toast",
      "Spicy Lemon Chicken",
      "Miso Green Salad",
      "Edamame",
      "Soft-shell Crab Tempura",
    ],
  },
  {
    title: "Mains & Teppanyaki",
    items: [
      "Live Teppanyaki experience",
      "Chicken / Beef Teriyaki",
      "Chicken Katsu",
      "Honey Chicken / Beef",
      "Garlic Black Beans (Tofu / Veg)",
      "Thai Green / Red Curry",
      "Japanese Chicken Curry",
      "Steam / Thai Spicy / Tamarind Prawns",
    ],
  },
  {
    title: "Drinks & Desserts",
    items: [
      "Japanese-inspired cocktails",
      "Sake selection",
      "Premium spirits & whisky",
      "House-baked Coconut Cake",
      "Chocolate & Lemongrass desserts",
    ],
  },
];

export default function MenuPage() {
  return (
    <div className="pt-[72px]">
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[1200px] w-[92%]">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.2em] uppercase text-[var(--gold)] mb-3">The Menu</p>
            <h1 className="font-[family-name:var(--font-cormorant)] text-[clamp(2.4rem,5vw,3.5rem)] font-medium mb-4">
              Fresh. Balanced. Shareable.
            </h1>
            <p className="text-[var(--text-muted)] max-w-xl mx-auto">
              Our kitchen works with seasonal ingredients and classic techniques. Full interactive menus available online.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 mb-16">
            {categories.map((cat) => (
              <div
                key={cat.title}
                className="bg-[var(--bg-card)] border border-[var(--border)] p-8"
              >
                <h2 className="font-[family-name:var(--font-cormorant)] text-2xl text-[var(--gold-light)] mb-5">
                  {cat.title}
                </h2>
                <ul className="space-y-2.5">
                  {cat.items.map((item) => (
                    <li key={item} className="text-[var(--text-muted)] text-[0.95rem] flex items-start gap-2">
                      <span className="text-[var(--gold)] mt-1.5 text-[0.5rem]">●</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 items-center">
            <a
              href="https://contactless-9b492.web.app/restaurants/izumi/foodmenu.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex px-7 py-3.5 text-xs font-medium tracking-[0.1em] uppercase bg-[var(--gold)] text-black hover:bg-[var(--gold-light)] transition-colors"
            >
              Full Food Menu (PDF / Images)
            </a>
            <a
              href="https://contactless-9b492.web.app/restaurants/izumi/drinksmenu.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex px-7 py-3.5 text-xs font-medium tracking-[0.1em] uppercase border border-white/30 hover:border-[var(--gold)] hover:text-[var(--gold)] transition-colors"
            >
              Drinks Menu
            </a>
          </div>

          <p className="text-center text-sm text-[var(--text-muted)] mt-10">
            Prices and availability may vary. Please inform us of any allergies or dietary requirements when booking.
          </p>
        </div>
      </section>
    </div>
  );
}
