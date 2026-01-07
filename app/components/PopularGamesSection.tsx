import ProductCarousel from "./ProductCarousel";
import { CanvasTextImage } from "./TextImageCanvas";
import PopularGameCard from "./PopularGameCard";

export default function PopularGamesSection() {
  return (
    <section className="w-full 800:px-0 px-8 responsive" aria-labelledby="popular-games-heading">
      <h2 id="popular-games-heading" className="sr-only">
        Popular Games
      </h2>
      <CanvasTextImage
        text="POPULAR GAMES"
        imageUrl="/text-img.svg"
        size="24px"
        aria-hidden="true"
      />
      <div className="hidden mt-10 800:grid grid-cols-1 990:grid-cols-3 1920:grid-cols-4 gap-4" role="list" aria-label="Popular games">
        <PopularGameCard />
        <PopularGameCard />
        <PopularGameCard />
        <PopularGameCard />
        <PopularGameCard />
        <PopularGameCard />
        <PopularGameCard />
        <PopularGameCard />
      </div>
      <div className="block 800:hidden" >
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
