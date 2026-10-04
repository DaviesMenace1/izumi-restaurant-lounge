import { loyaltyRules } from "@/data/loyalty";

export type LoyaltyMember = {
  name: string;
  phone: string;
  birthday?: string;
  stamps: number;
  updatedAt: string;
};

const KEY = "yamasen-loyalty-v1";

function normalizePhone(phone: string): string {
  return phone.replace(/\D/g, "").replace(/^0/, "256");
}

function readAll(): Record<string, LoyaltyMember> {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function writeAll(data: Record<string, LoyaltyMember>) {
  if (typeof window === "undefined") return;
  localStorage.setItem(KEY, JSON.stringify(data));
}

export function getMemberByPhone(phone: string): LoyaltyMember | null {
  const id = normalizePhone(phone);
  if (!id) return null;
  return readAll()[id] ?? null;
}

export function upsertMember(input: {
  name: string;
  phone: string;
  birthday?: string;
}): LoyaltyMember {
  const id = normalizePhone(input.phone);
  const all = readAll();
  const existing = all[id];
  const member: LoyaltyMember = {
    name: input.name.trim(),
    phone: input.phone.trim(),
    birthday: input.birthday?.trim() || existing?.birthday,
    stamps: existing?.stamps ?? 0,
    updatedAt: new Date().toISOString(),
  };
  all[id] = member;
  writeAll(all);
  return member;
}

/** Add stamps after an eligible order (UGX 30k per stamp). */
export function addStampsForSpend(phone: string, totalUgx: number): LoyaltyMember | null {
  const id = normalizePhone(phone);
  if (!id) return null;
  const all = readAll();
  const member = all[id];
  if (!member) return null;

  const earned = Math.floor(totalUgx / loyaltyRules.stampSpendUgx);
  if (earned <= 0) return member;

  member.stamps = Math.min(
    loyaltyRules.totalStampsOnCard,
    member.stamps + earned
  );
  member.updatedAt = new Date().toISOString();
  all[id] = member;
  writeAll(all);
  return member;
}

export function setStamps(phone: string, stamps: number): LoyaltyMember | null {
  const id = normalizePhone(phone);
  if (!id) return null;
  const all = readAll();
  const member = all[id];
  if (!member) return null;
  member.stamps = Math.max(0, Math.min(loyaltyRules.totalStampsOnCard, stamps));
  member.updatedAt = new Date().toISOString();
  all[id] = member;
  writeAll(all);
  return member;
}

export { normalizePhone };
