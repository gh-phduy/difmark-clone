import { normalizeSellerRouteKey } from "./seller-profile.route";

export interface SellerOfferItem {
  data: {
    id: string;
    name: string;
    type: string;
    platform: string;
    edition: string;
    delivery: string;
    activationRegion: string;
    price: number;
    currency: string;
    images: string[];
  };
  seller: {
    id: string;
    name: string;
    avatar: string;
    isOnline: boolean;
    badge: string;
    tier: string;
    rating: number;
    successRate: number;
    totalFeedbacks: number;
    timezone: string;
    totalSales: number;
    positiveFeedbacks: number;
    negativeFeedbacks: number;
  };
}

export interface SellerProfile {
  id: string;
  name: string;
  avatar: string;
  banner: string;
  badge: string;
  tier: string;
  rating: number;
  successRate: number;
  totalFeedbacks: number;
  totalSales: number;
  positiveFeedbacks: number;
  negativeFeedbacks: number;
  timezone: string;
  currency: string;
  language: string;
  location: string;
  followers: number;
  memberSince: string;
  description: string;
  averagePrice: number;
  offerCount: number;
  offers: SellerOfferItem[];
}

const PROFILE_META: Record<
  string,
  {
    memberSince: string;
    location: string;
    language: string;
    description: string;
  }
> = {
  S1: {
    memberSince: "8 Feb 2020",
    location: "FI",
    language: "EN",
    description:
      "Store focused on fast digital-key delivery with stable stock and responsive support.",
  },
  S2: {
    memberSince: "12 Jun 2021",
    location: "DE",
    language: "EN",
    description:
      "Premium PC and console offers curated daily for top-value deals.",
  },
  S3: {
    memberSince: "23 Jan 2019",
    location: "US",
    language: "EN",
    description:
      "Long-running marketplace seller with a broad global catalog and high completion rate.",
  },
  S4: {
    memberSince: "4 Nov 2022",
    location: "GB",
    language: "EN",
    description:
      "Trusted storefront for instant activation products and verified after-sales support.",
  },
};

const SELLER_MEDIA: Record<string, { banner: string; avatar: string }> = {
  S1: {
    banner: "/cyberpunk_2077.jpg",
    avatar: "/avt.jpg",
  },
  S2: {
    banner: "/battlefield_6.jpg",
    avatar: "/spacex.jpg",
  },
  S3: {
    banner: "/battlefield6-2.jpg",
    avatar: "/seller3.jpg",
  },
  S4: {
    banner: "/cyberpunk_2077.jpg",
    avatar: "/avt.jpg",
  },
};

async function getAllOffers(): Promise<SellerOfferItem[]> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000"}/api/products`,
      {
        next: { revalidate: 60 },
      },
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch offers: ${res.status}`);
    }

    const payload = await res.json();
    return payload.products || [];
  } catch (error) {
    console.error("Failed to fetch offers", error);
    return [];
  }
}

function createProfileFromOffer(offer: SellerOfferItem): SellerProfile {
  const profileMeta = PROFILE_META[offer.seller.id] ?? {
    memberSince: "1 Jan 2023",
    location: "Global",
    language: "EN",
    description:
      "Trusted seller with instant delivery, secure transactions, and fast support.",
  };
  const sellerMedia = SELLER_MEDIA[offer.seller.id] ?? {
    banner: "/cyberpunk_2077.jpg",
    avatar: offer.seller.avatar || "/avt.jpg",
  };

  return {
    id: offer.seller.id,
    name: offer.seller.name,
    avatar: offer.seller.avatar || sellerMedia.avatar,
    banner: sellerMedia.banner,
    badge: offer.seller.badge || "⭐",
    tier: offer.seller.tier,
    rating: offer.seller.rating,
    successRate: offer.seller.successRate,
    totalFeedbacks: offer.seller.totalFeedbacks,
    totalSales: offer.seller.totalSales,
    positiveFeedbacks: offer.seller.positiveFeedbacks,
    negativeFeedbacks: offer.seller.negativeFeedbacks,
    timezone: offer.seller.timezone,
    currency: offer.data.currency,
    language: profileMeta.language,
    location: profileMeta.location,
    followers: Math.max(100, Math.round(offer.seller.totalFeedbacks * 1.5)),
    memberSince: profileMeta.memberSince,
    description: profileMeta.description,
    averagePrice: Number(offer.data.price.toFixed(2)),
    offerCount: 1,
    offers: [offer],
  };
}

export async function getSellerProfile(
  sellerRouteKey: string,
): Promise<SellerProfile | null> {
  const offers = await getAllOffers();
  const normalizedRouteKey = normalizeSellerRouteKey(sellerRouteKey);
  const sellerOffers = offers.filter((offer) => {
    const normalizedId = normalizeSellerRouteKey(offer.seller.id);
    const normalizedName = normalizeSellerRouteKey(offer.seller.name);
    return (
      normalizedId === normalizedRouteKey ||
      normalizedName === normalizedRouteKey
    );
  });

  if (sellerOffers.length === 0) {
    return null;
  }

  const profile = createProfileFromOffer(sellerOffers[0]);
  profile.offers = sellerOffers;
  profile.offerCount = sellerOffers.length;
  profile.averagePrice = Number(
    (
      sellerOffers.reduce((sum, item) => sum + item.data.price, 0) /
      sellerOffers.length
    ).toFixed(2),
  );
  return profile;
}

export async function getTrustedSellers(): Promise<SellerProfile[]> {
  const offers = await getAllOffers();
  const profilesMap = new Map<string, SellerProfile>();

  offers.forEach((offer) => {
    const existing = profilesMap.get(offer.seller.id);
    if (!existing) {
      profilesMap.set(offer.seller.id, createProfileFromOffer(offer));
      return;
    }

    existing.offers.push(offer);
    existing.offerCount = existing.offers.length;
    existing.averagePrice = Number(
      (
        existing.offers.reduce((sum, item) => sum + item.data.price, 0) /
        existing.offers.length
      ).toFixed(2),
    );
  });

  return Array.from(profilesMap.values()).sort(
    (a, b) => b.successRate - a.successRate,
  );
}
