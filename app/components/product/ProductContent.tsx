import ProductDescriptionText from "./ProductDescriptionText";
import ProductKeyFeatures from "./ProductKeyFeatures";

export default function ProductContent() {
    return <div className="w-full bg-red-500" >
        <ProductDescriptionText />
        <ProductKeyFeatures />
    </div>;
}