export type CategorySlug =
  | "sushi"
  | "bento"
  | "appetizers"
  | "mains"
  | "ramen-curry"
  | "donburi"
  | "grills"
  | "salads-soups"
  | "desserts";

export interface Dish {
  id: string;
  slug: string;
  name: string;
  description: string;
  price: number;
  category: CategorySlug;
  tags: string[];
  spicy?: boolean;
  vegetarian?: boolean;
  popular?: boolean;
  image: string;
  pairings?: string[];
}

export const categories: { slug: CategorySlug; name: string; description: string }[] = [
  { slug: "sushi", name: "Sushi and Sashimi", description: "Fresh cuts and hand rolls" },
  { slug: "bento", name: "Bento Boxes", description: "Complete set meals for delivery or dine-in" },
  { slug: "appetizers", name: "Appetizers", description: "Small plates and starters" },
  { slug: "mains", name: "Mains", description: "Katsu, teriyaki, and house plates" },
  { slug: "ramen-curry", name: "Ramen and Curry", description: "Bowls and Japanese curry" },
  { slug: "donburi", name: "Donburi", description: "Rice bowls with toppings" },
  { slug: "grills", name: "Grills and Yakitori", description: "Skewers and BBQ style" },
  { slug: "salads-soups", name: "Salads and Soups", description: "Farm greens and classic broths" },
  { slug: "desserts", name: "Desserts", description: "Houjicha, fruit, and sweets" },
];

const U = (id: string) => `https://images.unsplash.com/photo-${id}?w=800&q=80`;

export const dishes: Dish[] = [
  { id: "1", slug: "sushi-platter", name: "Sushi Platter", description: "Chef selection of nigiri and maki with seasonal fish from Dar es Salaam.", price: 85000, category: "sushi", tags: ["popular"], popular: true, image: U("1579871494447-9811cf80d66c"), pairings: ["miso-soup"] },
  { id: "2", slug: "salmon-sashimi", name: "Salmon Sashimi", description: "Silky slices of fresh salmon with wasabi and pickled ginger.", price: 72000, category: "sushi", tags: ["popular", "salmon"], popular: true, image: U("1579584425555-c3ce17fd4351") },
  { id: "3", slug: "california-roll", name: "California Roll", description: "Crab, avocado and cucumber. Eight pieces.", price: 42000, category: "sushi", tags: [], image: U("1553621042-f6e147245754") },
  { id: "4", slug: "tonkatsu-bento", name: "Tonkatsu Bento", description: "Pork cutlet with rice, pickles and side vegetables. Delivery available.", price: 45000, category: "bento", tags: ["popular"], popular: true, image: U("1604908177453-7462950a6a3b") },
  { id: "5", slug: "karaage-bento", name: "Karaage Bento", description: "Japanese fried chicken set with rice and farm greens.", price: 45000, category: "bento", tags: ["popular", "chicken"], popular: true, image: U("1626645738196-c2a7c87a8f58") },
  { id: "6", slug: "roasted-beef-bento", name: "Roasted Beef Bento", description: "Slow roasted beef with Japanese sides.", price: 45000, category: "bento", tags: ["beef"], image: U("1546833999-b9f581a1996d") },
  { id: "7", slug: "vegetable-curry-bento", name: "Vegetable Curry Bento", description: "Mild Japanese curry with seasonal farm vegetables.", price: 37000, category: "bento", tags: ["vegetarian"], vegetarian: true, image: U("1455619452474-d2be8b1e70cd") },
  { id: "8", slug: "chicken-curry-bento", name: "Chicken Curry Bento", description: "House Japanese curry with tender chicken.", price: 42000, category: "bento", tags: ["chicken"], image: U("1604908176997-125f25cc6f3d") },
  { id: "9", slug: "kushi-katsu", name: "Kushi Katsu", description: "Skewered cutlets of mushroom, tofu or chicken, breaded and fried. Served with special sauce.", price: 30000, category: "appetizers", tags: ["popular"], popular: true, image: U("1604908176997-125f25cc6f3d") },
  { id: "10", slug: "tebasaki", name: "Tebasaki Chicken Wings", description: "Deboned wings stuffed with minced chicken dumplings, roasted, sweet and sour sauce.", price: 30000, category: "appetizers", tags: ["chicken"], image: U("1562967914-608f82629710") },
  { id: "11", slug: "edamame", name: "Edamame", description: "Steamed soybeans with sea salt.", price: 18000, category: "appetizers", tags: ["vegetarian"], vegetarian: true, image: U("1603133872878-684f208fb84b") },
  { id: "12", slug: "gogo-fish-curry", name: "Gogo Fish Curry", description: "Curry made with fish broth. Fried fish finished in the sauce. Signature dish.", price: 40000, category: "ramen-curry", tags: ["popular", "signature"], popular: true, image: U("1455619452474-d2be8b1e70cd") },
  { id: "13", slug: "pork-ramen", name: "Pork Ramen", description: "Rich broth, roast pork, egg and noodles.", price: 48000, category: "ramen-curry", tags: ["popular"], popular: true, image: U("1569718212165-3a8278d5f624") },
  { id: "14", slug: "japanese-curry", name: "Japanese Curry", description: "Mildly sweet curry with chicken or vegetables and rice.", price: 38000, category: "ramen-curry", tags: [], image: U("1585937421612-70a008356fbe") },
  { id: "15", slug: "chicken-teriyaki-don", name: "Chicken Teriyaki Donburi", description: "Glazed chicken over steamed rice.", price: 42000, category: "donburi", tags: ["chicken"], image: U("1546833999-b9f581a1996d") },
  { id: "16", slug: "avocado-don", name: "Avocado Donburi", description: "Creamy avocado and seasoned rice.", price: 30000, category: "donburi", tags: ["vegetarian"], vegetarian: true, image: U("1540189549336-e6e99c3679fe") },
  { id: "17", slug: "salmon-tartare-don", name: "Salmon Tartare Donburi", description: "Fresh salmon tartare over rice.", price: 53000, category: "donburi", tags: ["salmon"], image: U("1504674900247-0877df9cc836") },
  { id: "18", slug: "roasted-beef-don", name: "Roasted Beef Donburi", description: "Sliced roast beef on rice with house sauce.", price: 42000, category: "donburi", tags: ["beef"], image: U("1603360946369-dc9bb6258143") },
  { id: "19", slug: "yakiniku-pizza", name: "Yakiniku BBQ Pizza", description: "Sweet and spicy Japanese style BBQ beef on a pizza base. Signature fusion.", price: 40000, category: "mains", tags: ["popular", "signature"], popular: true, image: U("1565299624946-b28f40a0ae38") },
  { id: "20", slug: "chicken-nanban", name: "Chicken Nanban", description: "Fried chicken with tartar sauce. Meal plate favourite.", price: 42000, category: "mains", tags: ["chicken"], image: U("1626645738196-c2a7c87a8f58") },
  { id: "21", slug: "tonkatsu", name: "Tonkatsu", description: "Panko pork cutlet with cabbage and sauce.", price: 45000, category: "mains", tags: ["popular"], popular: true, image: U("1604908177453-7462950a6a3b") },
  { id: "22", slug: "chicken-yakitori", name: "Chicken Yakitori", description: "Grilled skewers with tare glaze.", price: 32000, category: "grills", tags: ["chicken"], image: U("1604908177453-7462950a6a3b") },
  { id: "23", slug: "farm-to-table-salad", name: "Farm to Table Salad", description: "Organic greens and vegetables from our own farm.", price: 28000, category: "salads-soups", tags: ["vegetarian", "popular"], vegetarian: true, popular: true, image: U("1512621776951-a57141f2eefd") },
  { id: "24", slug: "miso-soup", name: "Miso Soup", description: "Classic miso with tofu and wakame.", price: 15000, category: "salads-soups", tags: ["vegetarian"], vegetarian: true, image: U("1547592166-23ac45744acd") },
  { id: "25", slug: "houjicha-pudding", name: "Houjicha Pudding", description: "Japanese roasted tea pudding. House dessert favourite.", price: 22000, category: "desserts", tags: ["popular"], popular: true, image: U("1488477186911-f3e5b0c3e0c5") },
  { id: "26", slug: "fresh-fruit", name: "Fresh Fruit Plate", description: "Seasonal tropical fruit.", price: 25000, category: "desserts", tags: ["vegetarian"], vegetarian: true, image: U("1490474418585-ba9bad8fd0ea") },
];

export function formatPrice(ugx: number): string {
  return `UGX ${ugx.toLocaleString()}`;
}

export function getDishBySlug(slug: string): Dish | undefined {
  return dishes.find((d) => d.slug === slug);
}

export function getDishesByCategory(category: CategorySlug): Dish[] {
  return dishes.filter((d) => d.category === category);
}

export function getPopularDishes(): Dish[] {
  return dishes.filter((d) => d.popular);
}

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}
