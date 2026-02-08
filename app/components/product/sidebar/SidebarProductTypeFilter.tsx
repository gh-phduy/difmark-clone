"use client";

import { useState } from "react";
import { Search, ChevronDown, ChevronUp } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

export default function SidebarProductTypeFilter() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="w-full border-t border-[#30363d] pt-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-2 text-white hover:text-gray-300"
      >
        <span className="font-semibold">Product type</span>
        {isOpen ? (
          <ChevronUp className="h-4 w-4" />
        ) : (
          <ChevronDown className="h-4 w-4" />
        )}
      </button>

      {isOpen && (
        <div className="mt-4 space-y-3">
          <div className="relative">
            <Search className="absolute top-1/2 left-2 h-4 w-4 -translate-y-1/2 text-gray-500" />
            <Input
              placeholder="Search product type"
              className="h-9 border-[#30363d] bg-midnight-750 pl-8 text-sm"
            />
          </div>

          {[
            "Game Keys",
            "Game Cards",
            "Console Games",
            "Gift Cards",
            "Software",
            "PC Games",
            "Mobile",
          ].map((type) => (
            <div
              key={type}
              className="group flex cursor-pointer items-center justify-between"
            >
              <div className="flex items-center space-x-2">
                <Checkbox id={type} className="border-gray-500" />
                <label
                  htmlFor={type}
                  className="cursor-pointer text-sm text-gray-400 group-hover:text-white"
                >
                  {type}
                </label>
              </div>
              <ChevronDown className="h-3 w-3 text-gray-600 opacity-0 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
