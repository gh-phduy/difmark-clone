/**
 * Home Page
 *
 * Main landing page của Difmark marketplace
 * Bao gồm tất cả các sections: Hero, Games, Sellers, News, etc.
 */

// Section Components
// import HeroCarousel from "../components/home/HeroCarousel"; // TODO: Create this component
import PopularGamesSection from "../components/home/PopularGamesSection";
import FeaturesSection from "../components/home/FeaturesSection";
import PromoBanner from "../components/home/PromoBanner";
import UpcomingGamesSection from "../components/home/UpcomingGamesSection";
import CategoryGridRow1 from "../components/home/CategoryGridRow1";
import CategoryGridRow2 from "../components/home/CategoryGridRow2";
import PopularSellersSection from "../components/home/PopularSellersSection";
import CategoryCarousel from "../components/home/CategoryCarousel";
import GamesSection from "../components/shared/GamesSection";
import FlashSaleSection from "../components/home/FlashSaleSection";
import PlatformsSection from "../components/home/PlatformsSection";
import LatestNewsSection from "../components/home/LatestNewsSection";

/**
 * HomePage Component
 *
 * Renders the main landing page with all sections
 */
export default function HomePage() {
  return (
    <main
      id="main-content"
      className="flex w-full flex-col items-center gap-y-16"
    >
      {/* Hero Section */}
      {/* <HeroCarousel /> */}
      <div className="flex h-[400px] w-full items-center justify-center bg-linear-to-r from-brand to-brand-light">
        <h1 className="text-4xl font-bold text-white">
          Hero Carousel Placeholder
        </h1>
      </div>

      {/* Popular Games Section */}
      <PopularGamesSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* Upcoming Games Section */}
      <UpcomingGamesSection />

      {/* Category Grid Row 1 */}
      <CategoryGridRow1 />

      {/* Popular Sellers Section */}
      <PopularSellersSection />

      {/* Category Grid Row 2 */}
      <CategoryGridRow2 />

      {/* Category Carousel (Mobile) */}
      <CategoryCarousel />

      {/* New on Difmark */}
      <GamesSection title="NEW ON DIFMARK" />

      {/* Promo Banner */}
      <PromoBanner />

      {/* Weekly Chart */}
      <GamesSection title="WEEKLY CHART" />

      {/* Flash Sale Section */}
      <FlashSaleSection />

      {/* Under $100 */}
      <GamesSection title="UNDER $100" />

      {/* Platforms Section */}
      <PlatformsSection />

      {/* Latest News Section */}
      <LatestNewsSection />
    </main>
  );
}
