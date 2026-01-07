import { IoIosArrowForward } from "react-icons/io";
import { CanvasTextImage } from "./TextImageCanvas";
import NewsCard from "./NewsCard";
import ProductCarousel from "./ProductCarousel";

export default function LatestNewsSection() {
  return (
    <section className="w-full 800:px-0 px-8 max-w-[720px] 990:max-w-[940px] 1200:max-w-[1140px] 1640:max-w-[1310px] 1920:max-w-[1590px]" aria-labelledby="latest-news-heading">
      <div className="flex items-center justify-between mb-6">
        <h2 id="latest-news-heading" className="sr-only">Latest News</h2>
        <CanvasTextImage
          text="LATEST NEWS"
          imageUrl="/text-img.svg"
          size="24px"
          aria-hidden="true"
        />
        <button className="text-[#C0C3C9] flex items-center justify-center gap-x-3 hover:text-white transition-colors" aria-label="View all latest news">
          <span className="mr-2">View All</span>
          <IoIosArrowForward aria-hidden="true" />
        </button>
      </div>
      <div className="800:flex hidden justify-between">
        <NewsCard />
        <NewsCard />
        <div className="970:block hidden">
          <NewsCard />
        </div>
        <div className="1920:block hidden">
          <NewsCard />
        </div>
      </div>
      <div className="block 800:hidden" >
        <ProductCarousel>
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
        </ProductCarousel>
      </div>
    </section>
  );
}
