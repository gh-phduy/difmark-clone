"use client";

import { cn } from "@/lib/utils";
import { CreditCard, Gamepad2 } from "lucide-react";
import { motion } from "framer-motion";
import { IoGameController } from "react-icons/io5";
import { GiTwoCoins } from "react-icons/gi";

type HeroTab = "digital" | "topup";

interface HeroTabsProps {
  activeTab: HeroTab;
  onTabChange: (tab: HeroTab) => void;
}

export function HeroTabs({ activeTab, onTabChange }: HeroTabsProps) {
  return (
    <div className="mb-8 flex justify-center">
      <div className="relative inline-flex gap-1 rounded-full bg-white/10 p-1.5 backdrop-blur-md">
        {/* Animated background gradient indicator */}
        <motion.div
          className="absolute top-1.5 left-1.5 h-[calc(100%-12px)] rounded-full"
          style={{
            background: "linear-gradient(to right, #60984b, #406433)",
          }}
          initial={false}
          animate={{
            x: activeTab === "digital" ? 0 : "calc(100% + 4px)",
            width: activeTab === "digital" ? "385px" : "385px",
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
          }}
        />

        <button
          onClick={() => onTabChange("digital")}
          className={cn(
            "relative z-10 flex h-[50px] w-[385px] cursor-pointer items-center justify-center gap-2 rounded-full text-lg font-semibold text-white transition-colors duration-200",
            activeTab === "digital" ? "" : "text-white/60 hover:text-white",
          )}
        >
          <IoGameController size={24} />
          Digital Products
        </button>

        <button
          onClick={() => onTabChange("topup")}
          className={cn(
            "relative z-10 flex h-[50px] w-[385px] cursor-pointer items-center justify-center gap-2 rounded-full text-lg font-semibold text-white transition-colors duration-200",
            activeTab === "topup" ? "" : "text-white/60 hover:text-white",
          )}
        >
          <GiTwoCoins size={24} />
          Direct Top Up
        </button>
      </div>
    </div>
  );
}
