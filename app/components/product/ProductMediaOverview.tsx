import ProductMediaSlider from "./ProductMediaSlider";
import ProductQuickStats from "./ProductQuickStats";

export default function ProductMediaOverview() {
    return <div className="w-full gap-x-6 flex justify-between" >
        <ProductMediaSlider />
        <ProductQuickStats />
    </div>;
}