import ProductCarousel from "../product/ProductCarousel";
import SectionHeader from "../shared/SectionHeader";
import PopularGameCard from "./PopularGameCard";

export default function PopularGamesSection() {
  return (
    <section
      className="w-full responsive px-8 800:px-0"
      aria-labelledby="popular-games-heading"
    >
      <SectionHeader
        headingId="popular-games-heading"
        headingText="Popular Games"
        title="POPULAR GAMES"
        titleClassName="-translate-x-[22px]"
        actionText="View All"
        viewAllHref="/product"
        viewAllAriaLabel="View all popular games"
      />
      <div
        className="mt-10 hidden grid-cols-1 gap-4 800:grid 990:grid-cols-3 1920:grid-cols-4"
        role="list"
        aria-label="Popular games"
      >
        <PopularGameCard />
        <PopularGameCard />
        <PopularGameCard />
        <PopularGameCard />
        <PopularGameCard />
        <PopularGameCard />
        <PopularGameCard />
        <PopularGameCard />
      </div>
      <div className="block 800:hidden">
        <ProductCarousel>
          <PopularGameCard />
          <PopularGameCard />
          <PopularGameCard />
          <PopularGameCard />
          <PopularGameCard />
          <PopularGameCard />
        </ProductCarousel>
      </div>
    </section>
  );
}
