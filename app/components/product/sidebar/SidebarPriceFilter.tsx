"use client";

import { useState } from "react";
import { Separator } from "@base-ui/react";
import PriceChartSlider from "./price-filter/PriceChartSlider";
import PriceInputs from "./price-filter/PriceInputs";
import PriceRangeList from "./price-filter/PriceRangeRadioList";

const SLIDER_MAX = 400;

const PRICE_RANGES = [
  { min: 0, max: 6, label: "$ 0 - $ 6", count: 14727 },
  { min: 6, max: 30, label: "$ 6 - $ 30", count: 28663 },
  { min: 30, max: 120, label: "$ 30 - $ 120", count: 6387 },
  { min: 120, max: 400, label: "$ 120 - $ 400", count: 196 },
];

export default function SidebarPriceFilter() {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(15);

  const handlePriceChange = (min: number, max: number) => {
    setMinPrice(min);
    setMaxPrice(max);
  };

  return (
    <div className="w-full space-y-5 px-5">
      <h3 className="text-xl font-bold text-white">Price</h3>

      <PriceChartSlider
        minPrice={minPrice}
        maxPrice={maxPrice}
        sliderMax={SLIDER_MAX}
        onPriceChange={handlePriceChange}
      />

      <PriceInputs min={minPrice} max={maxPrice} onChange={handlePriceChange} />

      <PriceRangeList
        ranges={PRICE_RANGES}
        minPrice={minPrice}
        maxPrice={maxPrice}
        onRangeSelect={handlePriceChange}
      />

      <Separator
        orientation="horizontal"
        className="h-[1px] w-full bg-gray-800"
      />
    </div>
  );
}
