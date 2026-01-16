import ProductDescription from "../components/product/PurchaseCard";
import ProductGallery from "../components/product/ProductGallery";
import ProductDecription from "../components/product/ProductDecription";
import SellerList from "../components/product/SellerList";
import LoadMoreButton from "../components/shared/LoadMoreButton";
import Pagination from "../components/shared/Pagination";
import AboutProductSection from "../components/product/ProductContent";
import Breadcrumbs from "../components/layout/Breadcrumbs";

export default function BuyCheapPage() {
    return (
        <main id="main-content" className="max-w-[1590px] w-full flex flex-col items-center gap-y-8 pt-40">
            <Breadcrumbs />
            <div className="">Battle Field 2042</div>
            <div className="flex w-full justify-between">
                <ProductGallery />
                <ProductDescription />
            </div>
            <ProductDecription />
            <SellerList />
            <LoadMoreButton />
            <Pagination />
            <AboutProductSection />
        </main>
    );
}