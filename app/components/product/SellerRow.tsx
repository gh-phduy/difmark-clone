import OptimizedAvatar from "../shared/OptimizedAvatar";
import { Separator } from "@/components/ui/separator";

export default function SellerRow() {
  return (
    <div className="flex w-full items-center gap-x-8 bg-[#222936] px-[20px] py-[15px]">
      <div className="flex h-[70px] items-center gap-x-3">
        <OptimizedAvatar
          className=""
          src={"/avt.jpg"}
          alt={`avt`}
          size={48}
          isOnline={true}
          fallback={"AV"}
        />
        <div>
          <div>
            <span>BinStore</span>
          </div>
          <div>
            <span>🏆 Legendary</span>
          </div>
        </div>
      </div>
      <Separator orientation="vertical" className="h-[50px] bg-gray-600" />
      <div className="flex h-[70px] items-center gap-x-3">
        <div className="h-[24px] w-[24px] rounded-full bg-gray-600"></div>
        <div className="h-[24px] w-[24px] rounded-full bg-gray-600"></div>
        <div className="h-[24px] w-[24px] rounded-full bg-gray-600"></div>
      </div>
      <Separator orientation="vertical" className="h-[50px] bg-gray-600" />
      <div className="flex gap-x-3">
        <span>1000</span>
        <span>1000</span>
        <span>1000</span>
      </div>
      <Separator orientation="vertical" className="h-[50px] bg-gray-600" />
      <span>1000</span>
      <span>1000</span>
      <span>1000</span>
      <Separator orientation="vertical" className="h-[50px] bg-gray-600" />
      <span>Total</span>
      <span>Total</span>
    </div>
  );
}
