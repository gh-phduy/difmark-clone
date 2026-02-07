import { Separator } from "@base-ui/react";
import { Settings } from "lucide-react";

export default function CheckoutNavSection() {
  return (
    <>
      <Separator orientation="vertical" className="h-6 w-[1px] bg-gray-700" />
      {/* Checkout Stepper */}
      <div className="hidden flex-1 items-center justify-center gap-4 text-sm font-medium md:flex">
        {/* Step 1: Shopping Cart (Completed) */}
        <div className="flex items-center gap-2 text-[#46ca43]">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#46ca43] text-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="8" cy="21" r="1" />
              <circle cx="19" cy="21" r="1" />
              <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
            </svg>
          </div>
          <span>Shopping Cart</span>
        </div>

        {/* Connector */}
        <div className="h-[2px] w-1/3 bg-[#46ca43]"></div>

        {/* Step 2: Checkout (Active) */}
        <div className="flex items-center gap-2 text-white">
          <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-[#58a6ff] bg-[#374050] text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="20" height="14" x="2" y="5" rx="2" />
              <line x1="2" x2="22" y1="10" y2="10" />
            </svg>
          </div>
          <span>Checkout</span>
        </div>

        {/* Connector */}
        <div className="h-[2px] w-1/3 bg-[#2d3544]"></div>

        {/* Step 3: Processing (Pending) */}
        <div className="flex items-center gap-2 text-[#8b949e]">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#21262d]">
            <div className="h-2 w-2 rounded-full bg-[#8b949e]"></div>
          </div>
          <span>Processing</span>
        </div>
      </div>
      <Separator orientation="vertical" className="h-6 w-[1px] bg-gray-700" />

      {/* Checkout Right Actions */}
      <div className="flex items-center gap-4 text-sm text-steel-500">
        <div className="flex items-center gap-4">
          <span className="cursor-pointer hover:text-white">USD</span>
          <Separator
            orientation="vertical"
            className="h-6 w-[1px] bg-gray-700"
          />
          <span className="cursor-pointer hover:text-white">ENG</span>
        </div>
      </div>
    </>
  );
}
