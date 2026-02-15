import NewsCard from "./NewsCard";
import ProductCarousel from "../product/ProductCarousel";
import SectionHeader from "../shared/SectionHeader";

export default function LatestNewsSection() {
  return (
    <section
      className="w-full max-w-[720px] px-8 800:px-0 990:max-w-[940px] 1200:max-w-[1140px] 1640:max-w-[1310px] 1920:max-w-[1590px]"
      aria-labelledby="latest-news-heading"
    >
      <SectionHeader
        headingId="latest-news-heading"
        headingText="Latest News"
        title="LATEST NEWS"
        viewAllAriaLabel="View all latest news"
      />
      <div className="hidden justify-between 800:flex">
        <NewsCard />
        <NewsCard />
        <div className="hidden 970:block">
          <NewsCard />
        </div>
        <div className="hidden 1920:block">
          <NewsCard />
        </div>
      </div>
      <div className="block 800:hidden">
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
