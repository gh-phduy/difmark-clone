"use client";

import OptimizedAvatar from "../shared/OptimizedAvatar";
import { Separator } from "@/components/ui/separator";
import { IoKey } from "react-icons/io5";
import { RiXboxFill, RiGlobalLine, RiSteamFill } from "react-icons/ri";
import { FaMedal } from "react-icons/fa6";
import { SlCheck } from "react-icons/sl";
import { LuInfo } from "react-icons/lu";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { FaCartShopping } from "react-icons/fa6";
import { BsShieldFillCheck } from "react-icons/bs";
import { TiStarFullOutline } from "react-icons/ti";
import { IoBanSharp } from "react-icons/io5";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SiPlaystation, SiNintendo } from "react-icons/si";
import SellerInfoTooltip from "./SellerInfoTooltip";

export interface SellerOffer {
  data: {
    id: string;
    type: string;
    platform: string;
    edition: string;
    activationRegion: string;
    price: number;
    currency: string;
  };
  seller: {
    id: string;
    name: string;
    avatar: string;
    isOnline: boolean;
    tier: string;
    rating: number;
  };
}

const getPlatformIcon = (platform: string) => {
  const p = platform.toLowerCase();
  if (p.includes("xbox")) return <RiXboxFill />;
  if (p.includes("playstation")) return <SiPlaystation />;
  if (p.includes("nintendo")) return <SiNintendo />;
  if (p.includes("steam")) return <RiSteamFill />;
  return <RiGlobalLine />;
};

export default function SellerRow({ offer }: { offer: SellerOffer }) {
  if (!offer) return null;

  // Simple heuristic for demo: if region is 'None' or contains 'Restricted' (simulation)
  // In real app, this would be a boolean from backend
  const isBanStatus = offer.data.activationRegion
    ?.toLowerCase()
    .includes("restricted");

  return (
    <div className="flex w-full items-center justify-between rounded-sm bg-midnight-750 px-[20px] py-[15px] transition-colors duration-300 hover:bg-gray-700/70">
      {/* 1. Seller Info Section */}
      <div className="flex w-[250px] shrink-0 items-center gap-x-3">
        <OptimizedAvatar
          className=""
          src={offer.seller.avatar || "/avt.jpg"}
          alt={offer.seller.name}
          size={48}
          isOnline={offer.seller.isOnline}
          fallback={offer.seller.name.substring(0, 2).toUpperCase()}
        />
        <div className="min-w-0">
          <div className="flex items-center gap-x-2">
            <span className="max-w-[120px] truncate text-lg font-semibold">
              {offer.seller.name}
            </span>
            <BsShieldFillCheck className="shrink-0" color="#f8c944" size={16} />
          </div>
          <div className="flex items-center gap-x-3">
            <span className="text-sm whitespace-nowrap">
              🏆 {offer.seller.tier}
            </span>
            <Separator
              orientation="vertical"
              className="h-[16px] w-[1px] bg-gray-600"
            />
            <div className="flex items-center gap-x-1 whitespace-nowrap">
              <TiStarFullOutline color="#f8c944" size={16} />
              <span>{offer.seller.rating.toFixed(1)}</span>
            </div>
          </div>
        </div>
      </div>

      <Separator
        orientation="vertical"
        className="h-[50px] w-[1px] bg-gray-600"
      />

      {/* 2. Platform Icons Section */}
      <div className="flex w-[120px] shrink-0 items-center justify-center gap-x-3">
        <TooltipProvider delayDuration={200}>
          <SellerInfoTooltip
            icon={<IoKey />}
            content={
              <p>
                The seller will send you a{" "}
                {offer.data.type?.toLowerCase() || "key"} that you can activate
              </p>
            }
          />
          <SellerInfoTooltip
            icon={getPlatformIcon(offer.data.platform)}
            content={<p>Platform: {offer.data.platform}</p>}
          />
          <SellerInfoTooltip
            icon={<RiGlobalLine />}
            content={<p>Region: {offer.data.activationRegion}</p>}
          />
        </TooltipProvider>
      </div>

      <Separator
        orientation="vertical"
        className="h-[50px] w-[1px] bg-gray-600"
      />

      {/* 3. Edition Section */}
      <div className="flex w-[180px] shrink-0 items-center justify-start gap-x-2">
        <FaMedal className="text-gray-400" />
        <span className="whitespace-nowrap text-steel-500">Edition:</span>
        <span className="truncate font-medium">{offer.data.edition}</span>
      </div>

      <Separator
        orientation="vertical"
        className="h-[50px] w-[1px] bg-gray-600"
      />

      {/* 4. Activation Section */}
      <div className="flex w-[320px] shrink-0 items-center gap-x-2">
        {isBanStatus ? (
          <IoBanSharp color="#f87171" size={24} className="shrink-0" />
        ) : (
          <SlCheck color="#65c756" size={24} className="shrink-0" />
        )}
        <span className={`flex-1 text-sm`}>
          {isBanStatus
            ? "Can't be activated in your region"
            : `Can be activated from ${offer.data.activationRegion}`}
        </span>
        <LuInfo
          className="ml-1 shrink-0 cursor-pointer text-steel-500"
          size={20}
        />
      </div>

      <Separator
        orientation="vertical"
        className="h-[50px] w-[1px] bg-gray-600"
      />

      {/* 5. Price Section */}
      <div className="flex w-[150px] shrink-0 flex-col items-center justify-center">
        <span className="text-sm text-steel-500">Total amount:</span>
        <span className="text-xl font-bold">
          {offer.data.currency} {offer.data.price}
        </span>
      </div>

      <Separator
        orientation="vertical"
        className="h-[50px] w-[1px] bg-gray-600"
      />

      {/* 6. Actions Section */}
      <div className="flex shrink-0 items-center gap-x-6 text-steel-500">
        <MdOutlineRemoveRedEye
          size={24}
          className="cursor-pointer transition-colors hover:text-white"
        />
        <Separator
          orientation="vertical"
          className="h-[50px] w-[1px] bg-gray-600"
        />
        <BiDotsVerticalRounded
          size={24}
          className="cursor-pointer transition-colors hover:text-white"
        />
        <Separator
          orientation="vertical"
          className="h-[50px] w-[1px] bg-gray-600"
        />
        <div className="flex h-[60px] w-[60px] cursor-pointer items-center justify-center rounded-lg bg-midnight-500 transition-colors hover:bg-gray-500">
          <FaCartShopping size={24} />
        </div>
      </div>
    </div>
  );
}
