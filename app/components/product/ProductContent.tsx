import ProductDescriptionText from "./ProductDescriptionText";
import ProductKeyFeatures from "./ProductKeyFeatures";

export default function ProductContent() {
  return (
    <div className="mb-8 flex w-full flex-col gap-y-6">
      <h2 className="text-[24px] font-semibold text-white uppercase">
        About product
      </h2>
      {/* <ProductDescriptionText /> */}
      <ProductKeyFeatures />
    </div>
  );
}
