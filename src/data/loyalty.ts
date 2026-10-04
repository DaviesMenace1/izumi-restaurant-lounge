export const loyaltyRules = {
  stampSpendUgx: 30000,
  stampsPerLottery: 10,
  totalStampsOnCard: 50,
};

export const loyaltyLocations = [
  {
    name: "YAMASEN Japanese Restaurant",
    phone: "+256 707 808010",
    whatsapp: "256707808010",
  },
  {
    name: "FARM TO TABLE",
    phone: "+256 707 806020",
    whatsapp: "256707806020",
  },
  {
    name: "KLAFTS",
    phone: null as string | null,
    whatsapp: null as string | null,
  },
];

export const loyaltyPrizes = [
  {
    place: "1st Prize",
    title: "OMAKASE Special Dinner for 2 persons",
  },
  {
    place: "2nd Prize",
    title: "50% YAMASEN Voucher",
  },
  {
    place: "3rd Prize",
    title: "10k YAMASEN Voucher",
  },
  {
    place: "4th Prize",
    title: "Pick Your Favorite Pan-Ya Bread",
  },
];

export const loyaltySummary =
  "Earn 1 stamp for every UGX 30,000 spent. After every 10 stamps, enter the loyalty lottery. Stamps work at Yamasen, Farm to Table, and Klafts.";
