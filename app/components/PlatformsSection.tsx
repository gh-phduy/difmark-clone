import { IoIosArrowForward } from "react-icons/io";
import { CanvasTextImage } from "./TextImageCanvas";
import PlatformCard from "./PlatformCard";
import ProductCarousel from "./ProductCarousel";

export default function PlatformsSection() {
  // Tạo array với 6 items cho grid layout
  const platformItems = Array.from({ length: 6 }, (_, i) => i + 1);

  return (
    <section className="w-full 800:px-0 px-8 responsive overflow-visible" aria-labelledby="platforms-heading">
      <div className="flex items-center justify-between mb-10">
        <h2 id="platforms-heading" className="sr-only">Platforms</h2>
        <CanvasTextImage
          className="-translate-x-[22px]"
          text="PLATFORMS"
          imageUrl="/text-img.svg"
          size="24px"
          aria-hidden="true"
        />
        <button className="text-[#C0C3C9] flex items-center justify-center gap-x-3 hover:text-white transition-colors cursor-pointer" aria-label="View all platforms">
          <span className="mr-2">View All</span>
          <IoIosArrowForward aria-hidden="true" />
        </button>
      </div>
      <div className="hidden 800:grid grid-cols-2 990:grid-cols-3 gap-4 990:gap-6">
        {platformItems.map((item) => (
          <PlatformCard key={item} />
        ))}
      </div>
      <div className="block 800:hidden overflow-visible" >
        <ProductCarousel>
          {platformItems.map((item) => (
            <PlatformCard key={item} />
          ))}
        </ProductCarousel>
      </div>
    </section>
  );
}