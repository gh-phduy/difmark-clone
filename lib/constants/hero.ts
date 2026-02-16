// Hero carousel slides configuration
export interface HeroSlide {
  id: string;
  image: string;
  alt?: string;
}

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: "hero-slide-1",
    image: "/hero-slide-1.webp",
    alt: "Hero 1",
  },
  {
    id: "hero-slide-2",
    image: "/hero-slide-2.webp",
    alt: "Hero 2",
  },
  {
    id: "hero-slide-3",
    image: "/hero-slide-3.webp",
    alt: "Hero 3",
  },
  {
    id: "hero-slide-4",
    image: "/hero-slide-4.webp",
    alt: "Hero 4",
  },
  {
    id: "hero-slide-5",
    image: "/hero-slide-5.webp",
    alt: "Hero 5",
  },
];

// Side banners configuration
export interface SideBanner {
  id: string;
  image: string;
  link: string;
  alt: string;
}

export const HERO_SIDE_BANNERS: SideBanner[] = [
  {
    id: "cashback",
    image: "/banner-item.webp",
    link: "/buy-cheap",
    alt: "Up to 10% Cashback",
  },
];

// Hero category cards
export interface HeroCategory {
  id: string;
  title: string;
  icon: string;
  image: string;
  heroImages: string[];
  link: string;
  gradient: string;
}

export const HERO_CATEGORIES: HeroCategory[] = [
  {
    id: "pc-games",
    title: "PC GAMES",
    icon: "monitor",
    image: "/bg-category-hero-pc.jpg",
    heroImages: ["/category-hero-pc.webp"],
    link: "/buy-cheap?category=pc-games",
    gradient: "from-purple-900/60 via-purple-600/30 to-transparent",
  },
  {
    id: "console-games",
    title: "CONSOLE GAMES",
    icon: "gamepad-2",
    image: "/bg-category-hero-console.jpg",
    heroImages: ["/category-hero-console.webp"],
    link: "/buy-cheap?category=console-games",
    gradient: "from-blue-900/60 via-blue-600/30 to-transparent",
  },
  {
    id: "gift-cards",
    title: "GIFT CARDS",
    icon: "credit-card",
    image: "/bg-category-hero-gift.jpg",
    heroImages: [
      "/category-hero-gift1.webp",
      "/category-hero-gift2.webp",
      "/category-hero-gift3.webp",
    ],
    link: "/buy-cheap?category=gift-cards",
    gradient: "from-teal-900/60 via-teal-600/30 to-transparent",
  },
  {
    id: "software",
    title: "SOFTWARE",
    icon: "package",
    image: "/bg-category-hero-software.jpg",
    heroImages: [
      "/category-hero-software1.webp",
      "/category-hero-software2.webp",
    ],
    link: "/buy-cheap?category=software",
    gradient: "from-purple-900/60 via-purple-700/30 to-transparent",
  },
];
