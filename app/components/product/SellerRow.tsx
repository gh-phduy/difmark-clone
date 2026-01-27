"use client"

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
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, TooltipArrow } from "@/components/ui/tooltip";
import { SiPlaystation, SiNintendo } from "react-icons/si";

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
  const isBanStatus = offer.data.activationRegion?.toLowerCase().includes("restricted");

  return (
    <div className="flex w-full items-center transition-colors duration-300 hover:bg-gray-700/70 rounded-sm justify-between bg-[#222936] px-[20px] py-[15px]">
      {/* 1. Seller Info Section */}
      <div className="flex w-[250px] items-center gap-x-3 shrink-0">
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
            <span className="text-lg font-semibold truncate max-w-[120px]">{offer.seller.name}</span>
            <BsShieldFillCheck className="shrink-0" color="#f8c944" size={16} />
          </div>
          <div className="flex items-center gap-x-3">
            <span className="text-sm whitespace-nowrap" >🏆 {offer.seller.tier}</span>
            <Separator orientation="vertical" className="h-[16px] bg-gray-600" />
            <div className="flex items-center gap-x-1 whitespace-nowrap">
              <TiStarFullOutline color="#f8c944" size={16} />
              <span>{offer.seller.rating.toFixed(1)}</span>
            </div>
          </div>
        </div>
      </div>

      <Separator orientation="vertical" className="h-[50px] bg-gray-600" />

      {/* 2. Platform Icons Section */}
      <div className="flex w-[120px] justify-center items-center gap-x-3 shrink-0">
        <TooltipProvider delayDuration={200}>
          <Tooltip disableHoverableContent={true}>
            <TooltipTrigger asChild>
              <div className="cursor-pointer w-[24px] rounded-full bg-[#3a475d] flex h-[24px] items-center justify-center">
                <IoKey />
              </div>
            </TooltipTrigger>
            <TooltipContent side="top" align="start" className="bg-[#3a475d] text-white text-base border-none" >
              <p>The seller will send you a {offer.data.type?.toLowerCase() || 'key'} that you can activate</p>
              <TooltipArrow className="fill-[#3a475d]" />
            </TooltipContent>
          </Tooltip>
          <Tooltip disableHoverableContent={true}>
            <TooltipTrigger asChild>
              <div className="cursor-pointer h-[24px] w-[24px] rounded-full bg-[#3a475d] flex items-center justify-center">
                {getPlatformIcon(offer.data.platform)}
              </div>
            </TooltipTrigger>
            <TooltipContent side="top" align="start" className="bg-[#3a475d] text-white text-base border-none" >
              <p>Platform: {offer.data.platform}</p>
              <TooltipArrow className="fill-[#3a475d]" />
            </TooltipContent>
          </Tooltip>
          <Tooltip disableHoverableContent={true}>
            <TooltipTrigger asChild>
              <div className="cursor-pointer h-[24px] w-[24px] rounded-full bg-[#3a475d] flex items-center justify-center">
                <RiGlobalLine />
              </div>
            </TooltipTrigger>
            <TooltipContent side="top" align="start" className="bg-[#3a475d] text-white text-base border-none" >
              <p>Region: {offer.data.activationRegion}</p>
              <TooltipArrow className="fill-[#3a475d]" />
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      <Separator orientation="vertical" className="h-[50px] bg-gray-600" />

      {/* 3. Edition Section */}
      <div className="flex w-[180px] gap-x-2 justify-start items-center shrink-0">
        <FaMedal className="text-gray-400" />
        <span className="text-[#9ba1ab] whitespace-nowrap" >Edition:</span>
        <span className="font-medium truncate">{offer.data.edition}</span>
      </div>

      <Separator orientation="vertical" className="h-[50px] bg-gray-600" />

      {/* 4. Activation Section */}
      <div className="flex w-[320px] items-center gap-x-2 shrink-0">
        {isBanStatus ? (
          <IoBanSharp color="#f87171" size={24} className="shrink-0" />
        ) : (
          <SlCheck color="#65c756" size={24} className="shrink-0" />
        )}
        <span className={`text-sm flex-1`} >
          {isBanStatus
            ? "Can't be activated in your region"
            : `Can be activated from ${offer.data.activationRegion}`}
        </span>
        <LuInfo className="text-[#9ba1ab] ml-1 shrink-0 cursor-pointer" size={20} />
      </div>

      <Separator orientation="vertical" className="h-[50px] bg-gray-600" />

      {/* 5. Price Section */}
      <div className="flex flex-col w-[150px] justify-center items-center shrink-0">
        <span className="text-[#9ba1ab] text-sm" >Total amount:</span>
        <span className="text-xl font-bold" >{offer.data.currency} {offer.data.price}</span>
      </div>

      <Separator orientation="vertical" className="h-[50px] bg-gray-600" />

      {/* 6. Actions Section */}
      <div className="flex items-center gap-x-6 shrink-0">
        <MdOutlineRemoveRedEye color="#9ba1ab" size={24} className="cursor-pointer hover:text-white transition-colors" />
        <Separator orientation="vertical" className="h-[50px] bg-gray-600" />
        <BiDotsVerticalRounded color="#9ba1ab" size={24} className="cursor-pointer hover:text-white transition-colors" />
        <Separator orientation="vertical" className="h-[50px] bg-gray-600" />
        <div className="flex rounded-lg h-[60px] cursor-pointer w-[60px] bg-[#3a475d] hover:bg-gray-500 transition-colors justify-center items-center">
          <FaCartShopping size={24} />
        </div>
      </div>
    </div >
  );
}
