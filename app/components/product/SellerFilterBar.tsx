import FilterDropdown from "./FilterDropdown";
import ResetFilterButton from "./ResetFilterButton";

export default function SellerFilterBar() {
    return <div className="w-full mb-3 flex justify-between items-center gap-x-2 h-[50px" >
        <FilterDropdown />
        <FilterDropdown />
        <FilterDropdown />
        <FilterDropdown />
        <ResetFilterButton />
    </div>;
}