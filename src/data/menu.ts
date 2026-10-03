export type CategorySlug =
  | "sushi"
  | "sashimi-nigiri"
  | "appetizers"
  | "mains"
  | "curries"
  | "rice-noodles"
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
  { slug: "sushi", name: "Sushi Rolls", description: "Signature maki & specialty rolls" },
  { slug: "sashimi-nigiri", name: "Sashimi & Nigiri", description: "Fresh sliced fish & classic nigiri" },
  { slug: "appetizers", name: "Appetizers & Dim Sum", description: "Starters, tempura, gyoza & more" },
  { slug: "mains", name: "Mains", description: "Katsu, teriyaki, stir-fries & seafood" },
  { slug: "curries", name: "Curries", description: "Thai & Japanese curries" },
  { slug: "rice-noodles", name: "Rice & Noodles", description: "Donburi, fried rice, pad thai" },
  { slug: "grills", name: "Grills & Teppanyaki", description: "Yakitori, satay, seafood platters" },
  { slug: "salads-soups", name: "Salads & Soups", description: "Miso, tom yum, wakame & more" },
  { slug: "desserts", name: "Desserts", description: "House sweets & fruit" },
];

const U = (id: string) => `https://images.unsplash.com/photo-${id}?w=800&q=80`;

export const dishes: Dish[] = [
  { id: "1", slug: "chicken-katsu-roll", name: "Chicken Katsu Roll", description: "Crispy fried chicken cutlet, avocado and spicy mayo rolled in nori and sushi rice. 8 pieces.", price: 49000, category: "sushi", tags: ["popular", "chicken"], popular: true, image: U("1579871494447-9811cf80d66c"), pairings: ["miso-green-salad-chicken", "japanese-curry"] },
  { id: "2", slug: "burnt-salmon-spicy", name: "Burnt Salmon / Spicy", description: "Seared salmon with spicy mayo, cucumber and tobiko. 8 pieces of pure umami.", price: 56000, category: "sushi", tags: ["popular", "salmon", "spicy"], spicy: true, popular: true, image: U("1617196034796-73dfa7b1fd56"), pairings: ["wakame-japanese-salad"] },
  { id: "3", slug: "california-spicy", name: "California / Spicy", description: "Classic California roll elevated with spicy sauce. Crab, avocado, cucumber. 8 pieces.", price: 51000, category: "sushi", tags: ["popular"], popular: true, image: U("1553621042-f6e147245754"), pairings: ["edamame", "miso-soup"] },
  { id: "4", slug: "thai-spicy-chicken-sushi", name: "Thai Spicy Chicken Sushi", description: "Spicy Thai-marinated chicken with fresh herbs and rice, wrapped in nori. 8 pieces.", price: 49000, category: "sushi", tags: ["spicy", "chicken"], spicy: true, image: U("1563612116625-3012372fccce"), pairings: ["som-tom-papaya-salad", "thai-green-curry"] },
  { id: "5", slug: "thai-spicy-prawns-roll", name: "Spicy Thai Prawns Roll", description: "Prawns in a spicy Thai-inspired preparation, rolled tight. 8 pieces.", price: 51000, category: "sushi", tags: ["spicy", "prawn"], spicy: true, image: U("1611143669185-af224c5e3252"), pairings: ["steam-prawns-garlic", "tom-yum"] },
  { id: "6", slug: "fresh-green-maki", name: "Fresh Green Maki", description: "Cucumber, avocado, carrot and pickled radish. Clean, vegetarian and refreshing. 8 pieces.", price: 36000, category: "sushi", tags: ["vegetarian"], vegetarian: true, image: U("1540189549336-e6e99c3679fe"), pairings: ["edamame", "miso-green-salad-sweet-potato"] },
  { id: "7", slug: "fresh-salmon-sashimi", name: "Fresh Salmon Sashimi", description: "Silky slices of premium salmon, served with wasabi, pickled ginger and soy.", price: 96000, category: "sashimi-nigiri", tags: ["popular", "salmon"], popular: true, image: U("1579584425555-c3ce17fd4351"), pairings: ["burnt-salmon-spicy"] },
  { id: "8", slug: "fresh-salmon-thai-sashimi", name: "Fresh Salmon Thai Sashimi", description: "Salmon sashimi finished with Thai aromatics — a Kampala signature.", price: 96000, category: "sashimi-nigiri", tags: ["salmon"], image: U("1504674900247-0877df9cc836"), pairings: ["thai-mango-salad", "tom-yum"] },
  { id: "9", slug: "crispy-prawns-tempura", name: "Crispy Prawns Tempura", description: "Light, airy tempura batter over plump prawns. Served with tentsuyu.", price: 71000, category: "appetizers", tags: ["popular", "prawn"], popular: true, image: U("1604908176997-125f25cc6f3d"), pairings: ["steam-rice", "miso-soup"] },
  { id: "10", slug: "thai-prawn-toast", name: "Thai Prawn Toast", description: "Minced prawn on toasted bread, fried until golden and fragrant.", price: 51000, category: "appetizers", tags: ["prawn"], image: U("1563379926898-05f4575a45d8"), pairings: ["thai-green-curry", "som-tom-papaya-salad"] },
  { id: "11", slug: "crispy-chilli-garlic-pork-belly", name: "Crispy Chilli Garlic Pork Belly", description: "Twice-cooked pork belly rendered crispy, tossed with chilli and garlic.", price: 51000, category: "appetizers", tags: ["spicy", "pork"], spicy: true, image: U("1529692236671-f1f6cf9683ba"), pairings: ["steam-rice", "thai-red-curry"] },
  { id: "12", slug: "korean-style-chicken-wings", name: "Korean Style Chicken Wings", description: "Crispy wings glazed in sticky sweet-savoury gochujang sauce.", price: 41000, category: "appetizers", tags: ["popular", "chicken"], popular: true, image: U("1562967914-608f82629710"), pairings: ["fried-rice", "sesame-chili-cucumber"] },
  { id: "13", slug: "thai-spring-rolls", name: "Thai Spring Rolls", description: "Crispy vegetable spring rolls with sweet chilli dipping sauce.", price: 19000, category: "appetizers", tags: ["vegetarian"], vegetarian: true, image: U("1499028344343-cd173ffc68a9"), pairings: ["fresh-green-maki", "tom-yum"] },
  { id: "14", slug: "edamame", name: "Edamame", description: "Steamed soybeans finished with sea salt. The perfect shareable start.", price: 21000, category: "appetizers", tags: ["vegetarian"], vegetarian: true, image: U("1603133872878-684f208fb84b"), pairings: ["california-spicy"] },
  { id: "15", slug: "veg-tempura", name: "Vegetable Tempura", description: "Seasonal vegetables in light, crisp tempura batter.", price: 46000, category: "appetizers", tags: ["vegetarian"], vegetarian: true, image: U("1563379926898-05f4575a45d8"), pairings: ["steam-rice", "miso-soup"] },
  { id: "16", slug: "katsu", name: "Chicken / Pork Katsu", description: "Panko-crusted cutlet, deep-fried until golden. Served with katsu sauce and cabbage.", price: 51000, category: "mains", tags: ["popular", "chicken"], popular: true, image: U("1604908177453-7462950a6a3b"), pairings: ["steam-rice", "miso-soup", "chicken-katsu-roll"] },
  { id: "17", slug: "teriyaki", name: "Teriyaki (Chicken / Beef)", description: "Sweet-savoury house teriyaki glaze over tender meat. Classic and reliable.", price: 51000, category: "mains", tags: ["popular"], popular: true, image: U("1546833999-b9f581a1996d"), pairings: ["steam-rice", "miso-green-salad-chicken"] },
  { id: "18", slug: "crispy-ginger-honey-beef", name: "Crispy Ginger Honey Beef", description: "Crispy beef tossed in aromatic ginger and honey. A house favourite.", price: 51000, category: "mains", tags: ["popular", "beef"], popular: true, image: U("1603360946369-dc9bb6258143"), pairings: ["steam-rice", "sesame-chili-cucumber"] },
  { id: "19", slug: "steam-prawns-garlic", name: "Steam Prawns with Garlic Sauce", description: "Plump prawns steamed and finished with fragrant garlic sauce.", price: 76000, category: "mains", tags: ["prawn"], image: U("1559737558-2f5a35f4523b"), pairings: ["steam-rice", "thai-spicy-prawns-roll"] },
  { id: "20", slug: "singapore-chili-prawn-curry", name: "Singapore Chili Prawn Curry", description: "Prawns in a bold Singapore-style chilli sauce. Rich and aromatic.", price: 76000, category: "mains", tags: ["spicy", "prawn"], spicy: true, image: U("1455619452474-d2be8b1e70cd"), pairings: ["steam-rice", "som-tom-papaya-salad"] },
  { id: "21", slug: "tamarind-prawns", name: "Tamarind Prawns", description: "Prawns cooked in a tangy-sweet tamarind sauce.", price: 76000, category: "mains", tags: ["prawn"], image: U("1565557623262-b51c2513a641"), pairings: ["steam-rice", "thai-mango-salad"] },
  { id: "22", slug: "crispy-thai-fried-chicken", name: "Crispy Thai Fried Chicken", description: "Golden fried chicken with distinct Thai spices. Crunchy and addictive.", price: 51000, category: "mains", tags: ["chicken"], image: U("1626645738196-c2a7c87a8f58"), pairings: ["som-tom-papaya-salad", "steam-rice"] },
  { id: "23", slug: "thai-green-curry", name: "Thai Green Curry", description: "Fragrant green curry with coconut milk, Thai basil and your choice of protein.", price: 43000, category: "curries", tags: ["popular", "spicy"], spicy: true, popular: true, image: U("1455619452474-d2be8b1e70cd"), pairings: ["steam-rice", "thai-spring-rolls"] },
  { id: "24", slug: "thai-red-curry", name: "Thai Red Curry", description: "Classic red curry — deep, aromatic and balanced with coconut cream.", price: 43000, category: "curries", tags: ["spicy"], spicy: true, image: U("1585937421612-70a008356fbe"), pairings: ["steam-rice"] },
  { id: "25", slug: "thai-panang-curry", name: "Thai Panang Curry", description: "Thick, slightly sweet Panang curry with peanuts and kaffir lime.", price: 43000, category: "curries", tags: [], image: U("1603133872878-684f208fb84b"), pairings: ["steam-rice", "thai-prawn-toast"] },
  { id: "26", slug: "japanese-curry", name: "Japanese Curry", description: "Mildly sweet and savoury Japanese-style curry with tender chicken and vegetables.", price: 43000, category: "curries", tags: ["popular"], popular: true, image: U("1604908176997-125f25cc6f3d"), pairings: ["steam-rice", "katsu"] },
  { id: "27", slug: "donburi-katsu", name: "Donburi Katsu", description: "Crispy katsu over a bowl of steamed rice with sauce. Comfort in a bowl.", price: 51000, category: "rice-noodles", tags: ["popular"], popular: true, image: U("1569718212165-3a8278d5f624"), pairings: ["miso-soup", "edamame"] },
  { id: "28", slug: "pad-thai-noodles", name: "Pad Thai Noodles", description: "Stir-fried rice noodles with tamarind, egg, tofu and crushed peanuts.", price: 41000, category: "rice-noodles", tags: ["popular"], popular: true, image: U("1559314809-0d155014e29e"), pairings: ["thai-spring-rolls", "som-tom-papaya-salad"] },
  { id: "29", slug: "pineapple-fried-rice", name: "Pineapple Fried Rice", description: "Fragrant fried rice with sweet pineapple chunks and a touch of spice.", price: 31000, category: "rice-noodles", tags: [], image: U("1603133872878-684f208fb84b"), pairings: ["crispy-thai-fried-chicken", "thai-green-curry"] },
  { id: "30", slug: "steam-rice", name: "Steamed Rice", description: "Perfectly steamed jasmine rice.", price: 16000, category: "rice-noodles", tags: ["vegetarian"], vegetarian: true, image: U("1414235077428-338989a2e8c0"), pairings: [] },
  { id: "31", slug: "fried-rice", name: "Fried Rice", description: "Classic egg fried rice with vegetables and soy.", price: 31000, category: "rice-noodles", tags: [], image: U("1603133872878-684f208fb84b"), pairings: ["katsu", "teriyaki"] },
  { id: "32", slug: "chicken-yakitori", name: "Chicken Yakitori", description: "Skewered and grilled chicken with a savoury tare glaze.", price: 41000, category: "grills", tags: ["chicken"], image: U("1604908177453-7462950a6a3b"), pairings: ["steam-rice", "edamame"] },
  { id: "33", slug: "satay", name: "Satay", description: "Grilled skewers served with rich peanut satay sauce.", price: 31000, category: "grills", tags: [], image: U("1529692236671-f1f6cf9683ba"), pairings: ["som-tom-papaya-salad", "steam-rice"] },
  { id: "34", slug: "seafood-platter", name: "Seafood Platter", description: "Tuna, salmon and prawns — a generous shareable seafood experience.", price: 146000, category: "grills", tags: ["popular"], popular: true, image: U("1559737558-2f5a35f4523b"), pairings: ["wakame-japanese-salad"] },
  { id: "35", slug: "miso-green-salad-chicken", name: "Miso Green Salad — Chicken", description: "Fresh garden greens with tender chicken and rich miso dressing.", price: 46000, category: "salads-soups", tags: ["chicken"], image: U("1512621776951-a57141f2eefd"), pairings: ["chicken-katsu-roll", "teriyaki"] },
  { id: "36", slug: "wakame-japanese-salad", name: "Wakame Japanese Salad", description: "Seaweed salad with sesame and light seasoning.", price: 41000, category: "salads-soups", tags: ["vegetarian"], vegetarian: true, image: U("1546069901-ba9599a7e63c"), pairings: ["fresh-salmon-sashimi", "burnt-salmon-spicy"] },
  { id: "37", slug: "som-tom-papaya-salad", name: "Som Tom Papaya Salad", description: "Spicy Thai green papaya salad with lime, chilli and peanuts.", price: 36000, category: "salads-soups", tags: ["spicy", "vegetarian"], spicy: true, vegetarian: true, image: U("1546069901-ba9599a7e63c"), pairings: ["crispy-thai-fried-chicken", "pad-thai-noodles"] },
  { id: "38", slug: "thai-mango-salad", name: "Thai Mango Salad", description: "Tart green mango, herbs, peanuts and a sharp dressing.", price: 36000, category: "salads-soups", tags: ["vegetarian"], vegetarian: true, image: U("1512621776951-a57141f2eefd"), pairings: ["tamarind-prawns", "thai-spicy-chicken-sushi"] },
  { id: "39", slug: "tom-yum", name: "Tom Yum", description: "Spicy and sour Thai soup with lemongrass, galangal and chilli.", price: 31000, category: "salads-soups", tags: ["spicy"], spicy: true, image: U("1547592166-23ac45744acd"), pairings: ["steam-prawns-garlic", "pad-thai-noodles"] },
  { id: "40", slug: "miso-soup", name: "Miso Soup", description: "Classic Japanese miso with tofu, wakame and spring onion.", price: 21000, category: "salads-soups", tags: ["vegetarian"], vegetarian: true, image: U("1547592166-23ac45744acd"), pairings: ["katsu", "donburi-katsu"] },
  { id: "41", slug: "sesame-chili-cucumber", name: "Sesame Chilli Cucumber Salad", description: "Smashed cucumbers tossed in chilli oil and toasted sesame.", price: 36000, category: "salads-soups", tags: ["spicy", "vegetarian"], spicy: true, vegetarian: true, image: U("1546069901-ba9599a7e63c"), pairings: ["crispy-ginger-honey-beef", "korean-style-chicken-wings"] },
  { id: "42", slug: "miso-green-salad-sweet-potato", name: "Miso Green Salad — Sweet Potato", description: "Roasted sweet potato over greens with miso vinaigrette.", price: 39000, category: "salads-soups", tags: ["vegetarian"], vegetarian: true, image: U("1512621776951-a57141f2eefd"), pairings: ["fresh-green-maki", "japanese-curry"] },
  { id: "43", slug: "fresh-fruit-platter", name: "Fresh Fruit Platter", description: "Seasonal tropical fruit, beautifully arranged.", price: 33000, category: "desserts", tags: ["vegetarian"], vegetarian: true, image: U("1490474418585-ba9bad8fd0ea"), pairings: [] },
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
