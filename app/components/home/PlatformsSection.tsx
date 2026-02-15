import PlatformCard from "./PlatformCard";
import ProductCarousel from "../product/ProductCarousel";
import SectionHeader from "../shared/SectionHeader";

export default function PlatformsSection() {
  // Tạo array với 6 items cho grid layout
  const platformItems = Array.from({ length: 6 }, (_, i) => i + 1);

  return (
    <section
      className="w-full responsive overflow-visible px-8 800:px-0"
      aria-labelledby="platforms-heading"
    >
      <SectionHeader
        headingId="platforms-heading"
        headingText="Platforms"
        title="PLATFORMS"
        containerClassName="mb-10"
        titleClassName="-translate-x-[22px]"
        viewAllAriaLabel="View all platforms"
      />
      <div className="hidden grid-cols-2 gap-4 800:grid 990:grid-cols-3 990:gap-6">
        {platformItems.map((item) => (
          <PlatformCard key={item} />
        ))}
      </div>
      <div className="block overflow-visible 800:hidden">
        <ProductCarousel>
          {platformItems.map((item) => (
            <PlatformCard key={item} />
          ))}
        </ProductCarousel>
      </div>
    </section>
  );
}
