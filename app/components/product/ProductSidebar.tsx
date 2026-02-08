"use client";

import Image from "next/image";
import { Search, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
// import { Slider } from "@/components/ui/slider"; // Component not available, using custom visual implementation
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@base-ui/react";

// Fallback Slider since it wasn't in the list, or I will implement a simple one.
// Actually, I'll try to implement a simple visual slider or just text inputs for now if Slider is missing.
// Or I can add a simple HTML range input.

export default function ProductSidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const [priceRange, setPriceRange] = useState([0, 15]);

  return (
    <div className="flex w-[270px] shrink-0 flex-col items-center space-y-5 bg-midnight-700">
      {/* Region Switch */}
      <div className="flex items-center justify-center gap-3 pt-5 text-lg">
        <Switch className="h-8 w-12 cursor-pointer" />
        <span className="text-white">Your region:</span>
        <span className="flex items-center gap-1 text-steel-300">
          <Image
            src="/vn.svg"
            alt="Vietnam"
            width={26}
            height={17}
            className="object-cover"
          />{" "}
          (VN)
        </span>
      </div>

      <Separator
        orientation="horizontal"
        className="h-[1px] w-60 bg-gray-700"
      />

      {/* Price Filter */}
      <div className="space-y-4">
        <h3 className="font-semibold text-white">Price</h3>

        {/* Visual Chart Placeholder for Price Distribution */}
        <div className="flex h-12 items-end gap-1 px-1">
          {[20, 40, 60, 80, 100, 70, 50, 30, 20, 10].map((h, i) => (
            <div
              key={i}
              className="flex-1 bg-green-500/50 hover:bg-green-500"
              style={{ height: `${h}%` }}
            ></div>
          ))}
        </div>

        {/* Range Slider - Using native input for simplicity if component missing */}
        <div className="relative h-2 rounded-full bg-gray-700">
          <div
            className="absolute top-0 left-0 h-full rounded-full bg-green-500"
            style={{ width: "100%" }}
          ></div>
          {/* Mock handles */}
          <div className="absolute top-1/2 left-0 h-4 w-4 -translate-y-1/2 cursor-pointer rounded-full bg-white shadow"></div>
          <div className="absolute top-1/2 right-0 h-4 w-4 -translate-y-1/2 cursor-pointer rounded-full bg-white shadow"></div>
        </div>

        <div className="flex items-center gap-2">
          <div className="relative flex-1">
            <span className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-500">
              $
            </span>
            <Input
              type="number"
              value="0.00"
              className="h-9 border-[#30363d] bg-midnight-750 pl-6"
            />
          </div>
          <span className="text-gray-500">-</span>
          <div className="relative flex-1">
            <span className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-500">
              $
            </span>
            <Input
              type="number"
              value="15.00"
              className="h-9 border-[#30363d] bg-midnight-750 pl-6"
            />
          </div>
        </div>

        <div className="space-y-2">
          {[
            { label: "$ 0 - $ 5", count: 17459 },
            { label: "$ 5 - $ 10", count: 16215 },
            { label: "$ 30 - $ 120", count: 0 },
            { label: "$ 120 - $ 400", count: 0 },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between text-sm"
            >
              <div className="flex items-center space-x-2">
                <Checkbox id={`price-${index}`} className="border-gray-500" />
                <label
                  htmlFor={`price-${index}`}
                  className="cursor-pointer text-gray-400 peer-checked:text-white"
                >
                  {item.label}
                </label>
              </div>
              <span className="text-xs text-gray-600">{item.count}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Product Type Accordion */}
      <div className="border-t border-[#30363d] pt-6">
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
    </div>
  );
}
