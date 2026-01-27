"use client"

import OptimizedAvatar from "../shared/OptimizedAvatar";
import { Separator } from "@/components/ui/separator";
import { IoKey } from "react-icons/io5";
import { RiXboxFill } from "react-icons/ri";
import { RiGlobalLine } from "react-icons/ri";
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

export default function SellerRow() {
  return (
    <div className="flex w-full items-center transition-colors duration-300 hover:bg-gray-700/70 rounded-sm justify-center gap-x-8 bg-[#222936] px-[20px] py-[15px]">
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
          <div className="flex items-center gap-x-2">
            <span className="text-lg font-semibold">BinStore</span>
            <BsShieldFillCheck color="#f8c944" size={16} />
          </div>
          <div className="flex items-center gap-x-5">
            <span className="text-sm" >🏆 Legendary</span>
            <Separator orientation="vertical" className="h-[20px] bg-gray-600" />
            <div className="flex items-center gap-x-1">
              <TiStarFullOutline color="#f8c944" size={16} />
              <span>4.9</span>
            </div>
          </div>
        </div>
      </div>
      <Separator orientation="vertical" className="h-[50px] bg-gray-600" />
      <div className="flex h-[70px] items-center gap-x-3">
        <TooltipProvider delayDuration={200}>
          <Tooltip disableHoverableContent={true}>
            <TooltipTrigger asChild>
              <div className="cursor-pointer w-[24px] rounded-full bg-[#3a475d] flex h-[24px] items-center justify-center">
                <IoKey />
              </div>
            </TooltipTrigger>
            <TooltipContent side="top" align="start" className="bg-[#3a475d] text-white text-base border-none" >
              <p>The seller will send you a key that you can activate</p>
              <TooltipArrow className="fill-[#3a475d]" />
            </TooltipContent>
          </Tooltip>
          <Tooltip disableHoverableContent={true}>
            <TooltipTrigger asChild>
              <div className="cursor-pointer h-[24px] w-[24px] rounded-full bg-[#3a475d] flex items-center justify-center">
                <RiXboxFill />
              </div>
            </TooltipTrigger>
            <TooltipContent side="top" align="start" className="bg-[#3a475d] text-white text-base border-none" >
              <p>Platform: Xbox</p>
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
              <p>Region: Global</p>
              <TooltipArrow className="fill-[#3a475d]" />
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <Separator orientation="vertical" className="h-[50px] bg-[#3a475d]" />
      <div className="flex gap-x-2 justify-center items-center">
        <FaMedal />
        <span className="text-[#9ba1ab]" >Edition:</span>
        <span>Standard</span>
      </div>
      <Separator orientation="vertical" className="h-[50px] bg-gray-600" />
      <div className="flex items-center gap-x-2">
        <SlCheck color="#65c756" size={24} />
        <span className="text-sm" >Can be activated from any country</span>
        <LuInfo className="text-[#9ba1ab] ml-1" size={20} />
      </div>
      <Separator orientation="vertical" className="h-[50px] bg-gray-600" />
      <div className="flex flex-col w-[200px] justify-center items-center">
        <span className="text-[#9ba1ab]" >Total amount:</span>
        <span className="text-xl" >$ 58.98</span>
      </div>
      <Separator orientation="vertical" className="h-[50px] bg-gray-600" />
      <MdOutlineRemoveRedEye color="#9ba1ab" size={24} className="cursor-pointer" />
      <Separator orientation="vertical" className="h-[50px] bg-gray-600" />
      <BiDotsVerticalRounded color="#9ba1ab" size={24} className="cursor-pointer" />
      <Separator orientation="vertical" className="h-[50px] bg-gray-600" />
      <div className="flex rounded-lg h-[70px] cursor-pointer w-[70px] bg-gray-600 justify-center items-center">
        <FaCartShopping size={24} />
      </div>
    </div >
  );
}
