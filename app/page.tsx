/**
 * Home Page
 *
 * Main landing page của Difmark marketplace
 * Bao gồm tất cả các sections: Hero, Games, Sellers, News, etc.
 */

// Layout Components
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

// Section Components
import HeroCarousel from "./components/HeroCarousel";
import PopularGamesSection from "./components/PopularGamesSection";
import FeaturesSection from "./components/FeaturesSection";
import PromoBanner from "./components/PromoBanner";
import UpcomingGamesSection from "./components/UpcomingGamesSection";
import CategoryGridRow1 from "./components/CategoryGridRow1";
import CategoryGridRow2 from "./components/CategoryGridRow2";
import PopularSellersSection from "./components/PopularSellersSection";
import CategoryCarousel from "./components/CategoryCarousel";
import GamesSection from "./components/GamesSection";
import FlashSaleSection from "./components/FlashSaleSection";
import PlatformsSection from "./components/PlatformsSection";
import LatestNewsSection from "./components/LatestNewsSection";

/**
 * HomePage Component
 *
 * Renders the main landing page with all sections
 */
export default function HomePage() {
  return (
    <div className="bg-surface-base overflow-hidden justify-center items-center gap-y-16 flex flex-col">
      {/* Skip to content link for accessibility */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* Navigation */}
      <NavBar />

      {/* Main Content */}
      <main id="main-content" className="w-full flex flex-col items-center gap-y-16">
        {/* Hero Section */}
        <HeroCarousel />

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

      {/* Footer */}
      <Footer />
    </div>
  );
}
