import { dishes, type Dish } from "@/data/menu";

/** Levenshtein distance between two strings. */
export function editDistance(a: string, b: string): number {
  const s = a.toLowerCase();
  const t = b.toLowerCase();
  const m = s.length;
  const n = t.length;
  if (m === 0) return n;
  if (n === 0) return m;

  const row = new Array(n + 1);
  for (let j = 0; j <= n; j++) row[j] = j;

  for (let i = 1; i <= m; i++) {
    let prev = row[0];
    row[0] = i;
    for (let j = 1; j <= n; j++) {
      const tmp = row[j];
      const cost = s[i - 1] === t[j - 1] ? 0 : 1;
      row[j] = Math.min(
        row[j] + 1,
        row[j - 1] + 1,
        prev + cost
      );
      prev = tmp;
    }
  }
  return row[n];
}

/** True if needle is close enough to hay (substring or small edit distance). */
export function fuzzyIncludes(hay: string, needle: string): boolean {
  const h = hay.toLowerCase().trim();
  const n = needle.toLowerCase().trim();
  if (!n) return true;
  if (h.includes(n)) return true;

  // Token-level: any word in hay close to needle
  const tokens = h.split(/[^a-z0-9]+/).filter(Boolean);
  for (const token of tokens) {
    if (token.includes(n) || n.includes(token)) return true;
    const maxDist =
      n.length <= 3 ? 1 : n.length <= 5 ? 1 : n.length <= 8 ? 2 : 3;
    if (editDistance(token, n) <= maxDist) return true;
  }

  // Whole string distance for short hay
  if (h.length <= 40) {
    const maxDist = n.length <= 5 ? 2 : 3;
    if (editDistance(h, n) <= maxDist) return true;
  }

  return false;
}

export type ScoredDish = Dish & { score: number };

function scoreDish(dish: Dish, query: string): number {
  const q = query.toLowerCase().trim();
  if (!q) return 0;

  const name = dish.name.toLowerCase();
  const desc = dish.description.toLowerCase();
  const tags = dish.tags.join(" ").toLowerCase();
  const cat = dish.category.replace(/-/g, " ");

  let score = 0;

  if (name === q) score += 100;
  else if (name.startsWith(q)) score += 80;
  else if (name.includes(q)) score += 60;
  else if (fuzzyIncludes(name, q)) score += 45;

  // Word-level fuzzy against each name word (e.g. sufhi → sushi)
  for (const word of name.split(/\s+/)) {
    const d = editDistance(word, q);
    if (d === 0) score += 50;
    else if (d === 1) score += 35;
    else if (d === 2 && q.length >= 4) score += 20;
  }

  if (tags.includes(q) || fuzzyIncludes(tags, q)) score += 25;
  if (cat.includes(q) || fuzzyIncludes(cat, q)) score += 20;
  if (desc.includes(q) || fuzzyIncludes(desc, q)) score += 10;

  return score;
}

/** Ranked dish search; tolerates typos like "sufhi" → sushi. */
export function searchDishes(query: string, limit = 24): ScoredDish[] {
  const q = query.trim();
  if (!q) return [];

  const scored = dishes
    .map((d) => ({ ...d, score: scoreDish(d, q) }))
    .filter((d) => d.score > 0)
    .sort((a, b) => b.score - a.score || a.name.localeCompare(b.name));

  return scored.slice(0, limit);
}

export function dishMatchesQuery(dish: Dish, query: string): boolean {
  return scoreDish(dish, query) > 0;
}
