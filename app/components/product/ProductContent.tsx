import ProductDescriptionText from "./ProductDescriptionText";
import ProductKeyFeatures from "./ProductKeyFeatures";

export default function ProductContent() {
    return <div className="w-full flex flex-col gap-y-6 mb-8" >
        <h2 className="text-[24px] font-semibold uppercase text-white">About product</h2>
        {/* <ProductDescriptionText /> */}
        <ProductKeyFeatures />
    </div>;
}