import { cn } from "@/lib/utils";
import { CreditCard, Gamepad2 } from "lucide-react";

type HeroTab = "digital" | "topup";

interface HeroTabsProps {
  activeTab: HeroTab;
  onTabChange: (tab: HeroTab) => void;
}

export function HeroTabs({ activeTab, onTabChange }: HeroTabsProps) {
  return (
    <div className="mb-8 flex justify-center gap-4">
      <button
        onClick={() => onTabChange("digital")}
        className={cn(
          "flex items-center gap-2 rounded-full px-8 py-3 font-semibold transition-all",
          activeTab === "digital"
            ? "bg-[#ccff00] text-black shadow-lg"
            : "bg-white/5 text-gray-300 hover:bg-white/10",
        )}
      >
        <Gamepad2 className="h-5 w-5" />
        Digital Products
      </button>
      <button
        onClick={() => onTabChange("topup")}
        className={cn(
          "flex items-center gap-2 rounded-full px-8 py-3 font-semibold transition-all",
          activeTab === "topup"
            ? "bg-[#ccff00] text-black shadow-lg"
            : "bg-white/5 text-gray-300 hover:bg-white/10",
        )}
      >
        <CreditCard className="h-5 w-5" />
        Direct Top Up
      </button>
    </div>
  );
}
