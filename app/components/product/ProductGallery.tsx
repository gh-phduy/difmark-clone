import Image from "next/image";
import { Monitor } from "lucide-react";
import { FaXbox } from "react-icons/fa6";

export default function ProductGallery() {
  return (
    <div className="group relative h-[390px] w-[780px] overflow-hidden rounded-[24px] shadow-2xl">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/battlefield_6.jpg"
          alt="Battlefield 6"
          fill
          className="object-cover"
          priority
        />
        {/* Gradient overlay for better text/UI visibility */}
        <div className="absolute inset-0 bg-linear-to-b from-black/20 via-transparent to-black/60" />
      </div>

      {/* Bottom Navigation Bar - Transparent without blur */}
      <div className="absolute right-0 bottom-0 left-0 flex h-[60px] items-center justify-center gap-3 border-t border-white/8 bg-black/30 px-6">
        {/* Platform Selection */}
        <div className="flex items-center gap-2">
          {/* PC Button */}
          <button className="flex h-9 w-11 items-center justify-center rounded-lg bg-white/5 transition-all hover:bg-white/10 active:scale-90">
            <Monitor className="h-4.5 w-4.5 text-gray-400" />
          </button>

          {/* Xbox Pill - Styled to match the active chip in image */}
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/8 p-1 pr-4">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#107C10] shadow-[0_0_12px_rgba(16,124,16,0.3)]">
              <FaXbox className="h-4 w-4 text-white" />
            </div>
            <span className="text-[14px] font-medium tracking-tight text-white">
              Xbox Series X/S
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
