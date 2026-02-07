"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Search,
  ChevronRight,
  ChevronLeft,
  AlertCircle,
  CheckCircle2,
  ChevronDown,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const paymentMethods = [
  {
    id: "visa",
    name: "Visa/Mastercard - Cards International",
    tag: "Recommended",
    price: 107.47,
    fee: 7.5,
    icon: "/icons/visa.png", // Placeholder path
    color: "bg-white",
  },
  {
    id: "apple_pay",
    name: "Apple Pay",
    tag: "Recommended",
    price: 107.47,
    fee: 7.5,
    icon: "/icons/apple-pay.png",
    color: "bg-white",
  },
  {
    id: "google_pay",
    name: "Google Pay",
    tag: "Recommended",
    price: 107.47,
    fee: 7.5,
    icon: "/icons/google-pay.png",
    color: "bg-white",
  },
  {
    id: "crypto",
    name: "Crypto ewallet",
    price: 103.47,
    fee: 3.5,
    icon: "/icons/crypto.png",
    color: "bg-white",
  },
  {
    id: "paydo",
    name: "PayDo Checkout",
    price: 104.87,
    fee: 4.9,
    icon: "/icons/paydo.png",
    color: "bg-white",
  },
  {
    id: "skrill",
    name: "Skrill - Ewallet",
    price: 105.77,
    fee: 5.8,
    icon: "/icons/skrill.png",
    color: "bg-white",
  },
  {
    id: "volet",
    name: "Volet",
    price: 101.47,
    fee: 1.5,
    icon: "/icons/volet.png",
    color: "bg-white",
  },
  {
    id: "neteller",
    name: "Neteller - Ewallet",
    price: 105.77,
    fee: 5.8,
    icon: "/icons/neteller.png",
    color: "bg-white",
  },
];

export default function CheckoutPage() {
  const [selectedMethod, setSelectedMethod] = useState("visa");

  return (
    <div className="mx-auto grid w-full max-w-[1200px] grid-cols-1 gap-6 p-4 lg:grid-cols-3 lg:p-8">
      {/* Left Column - Payment Selection */}
      <div className="space-y-4 lg:col-span-2">
        {/* Filters */}
        <div className="flex flex-col gap-4 sm:flex-row">
          <div className="relative flex-1">
            <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-500" />
            <Input
              placeholder="Search by Payments method"
              className="h-10 rounded-md border-[#30363d] bg-midnight-750 pl-10 text-gray-300 placeholder:text-gray-500 focus-visible:ring-1 focus-visible:ring-[#58a6ff]"
            />
          </div>
          <button className="flex h-10 min-w-[160px] items-center justify-between gap-2 rounded-md border border-[#30363d] bg-midnight-750 px-4 py-2 text-gray-300 transition-colors hover:border-gray-500">
            <span className="flex items-center gap-2 text-sm font-medium">
              <span className="text-xl">🇻🇳</span> Viet Nam
            </span>
            <ChevronDown className="h-4 w-4 text-gray-500" />
          </button>
        </div>

        {/* Warning Banner */}
        <div className="flex flex-col items-start justify-between gap-3 rounded-md border border-[#30363d] bg-[#2a2a35] p-3 text-xs text-gray-400 sm:flex-row sm:items-center sm:text-sm">
          <div className="flex items-center gap-2">
            <AlertCircle className="h-4 w-4 shrink-0 text-red-400" />
            <span>
              The currency you have selected is different from the currency of
              your current location
            </span>
          </div>
          <button className="flex shrink-0 items-center gap-1 text-[#58a6ff] transition-colors hover:text-[#79b8ff] hover:underline">
            Default currency <ChevronRight className="h-3 w-3" />
          </button>
        </div>

        {/* Payment Methods List */}
        <div className="space-y-3">
          {paymentMethods.map((method) => {
            const isSelected = selectedMethod === method.id;
            return (
              <div
                key={method.id}
                onClick={() => setSelectedMethod(method.id)}
                className={`group relative flex cursor-pointer items-center justify-between rounded-lg border p-4 transition-all ${
                  isSelected
                    ? "border-[#eac54f] bg-[#1f242c] shadow-[0_0_0_1px_#eac54f]"
                    : "border-[#30363d] bg-midnight-750 hover:border-[#8b949e]"
                }`}
              >
                {/* Left Side: Radio & Info */}
                <div className="flex items-center gap-4">
                  {/* Custom Radio */}
                  <div
                    className={`flex h-5 w-5 items-center justify-center rounded-full border transition-colors ${
                      isSelected
                        ? "border-[#eac54f]"
                        : "border-gray-500 group-hover:border-gray-400"
                    }`}
                  >
                    {isSelected && (
                      <div className="h-2.5 w-2.5 rounded-full bg-[#eac54f]" />
                    )}
                  </div>

                  {/* Icon Placeholder */}
                  <div className="flex h-9 w-14 shrink-0 items-center justify-center overflow-hidden rounded bg-white">
                    {/* Placeholder Text or Image */}
                    {/* Ideally use Next/Image here if icons available */}
                    <span className="text-[10px] font-bold tracking-wider text-black">
                      {method.id.slice(0, 4).toUpperCase()}
                    </span>
                  </div>

                  {/* Name & Tag */}
                  <div className="flex flex-col">
                    <span
                      className={`text-sm font-medium transition-colors ${isSelected ? "text-white" : "text-gray-300"}`}
                    >
                      {method.name}
                    </span>
                    {method.tag && (
                      <span className="mt-0.5 text-xs text-[#eac54f]">
                        {method.tag}
                      </span>
                    )}
                  </div>
                </div>

                {/* Right Side: Price */}
                <div className="shrink-0 text-right">
                  <div className="text-lg font-bold tracking-wide text-white tabular-nums">
                    $ {method.price.toFixed(2)}
                  </div>
                  <div className="text-xs text-gray-500 tabular-nums">
                    Included fee: $ {method.fee.toFixed(2)}
                  </div>
                </div>

                {/* Vertical Accent Line for Selected */}
                {isSelected && (
                  <div className="absolute top-0 bottom-0 left-0 w-1 rounded-l-lg bg-[#eac54f]"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Right Column - Order Summary */}
      <div className="space-y-6 lg:col-span-1">
        {/* Checkout Total Card */}
        <div className="space-y-6 rounded-lg border border-[#30363d] bg-midnight-700 p-6">
          <h2 className="text-xl font-semibold text-white">Checkout total</h2>

          <div className="space-y-2 text-sm">
            <div className="flex justify-between text-gray-400">
              <span>Discount:</span>
              <span className="font-medium">$ 0.00</span>
            </div>
            <div className="flex justify-between text-gray-400">
              <span>Difmark balance pay:</span>
              <span className="font-medium">$ 0.00</span>
            </div>
            <div className="flex justify-between text-gray-400">
              <span>Payment method fee:</span>
              <span className="font-medium">$ 0.00</span>
            </div>
            <div className="flex justify-between text-[#46ca43]">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="h-3 w-3" /> Cashback:
              </span>
              <span className="font-medium">$ 3.00</span>
            </div>
          </div>

          <div className="flex items-center justify-between border-t border-[#30363d] pt-4">
            <span className="text-[#58a6ff]">Total:</span>
            <span className="text-2xl font-bold text-white">$ 99.97</span>
          </div>

          {/* Discount Code */}
          <div className="relative">
            <Input
              placeholder="DISCOUNT CODE"
              className="rounded border-none bg-[#242c38] pr-20 text-white uppercase placeholder:text-gray-500"
            />
            <button className="absolute top-1 right-1 bottom-1 rounded bg-[#374050] px-3 text-xs font-semibold text-white transition-colors hover:bg-[#444c5d]">
              Apply
            </button>
          </div>

          {/* Quick Pay Buttons */}
          <div className="space-y-3">
            <button className="flex w-full items-center justify-center gap-2 rounded bg-white py-2.5 font-semibold text-black transition-colors hover:bg-gray-100">
              {/* G Pay Logo Placeholder */}
              <span className="font-sans text-lg font-bold">
                <span className="text-blue-500">G</span> Pay
              </span>
            </button>
            <button className="flex w-full items-center justify-center gap-2 rounded bg-white py-2.5 font-semibold text-black transition-colors hover:bg-gray-100">
              {/* Apple Pay Logo Placeholder */}
              <span className="font-sans text-lg font-bold"> Pay</span>
            </button>
          </div>

          {/* Main Action Button */}
          <Button className="w-full rounded bg-[#9daec2] py-6 text-base font-bold text-[#161b22] shadow-none transition-colors hover:bg-[#b0c0d4]">
            CONFIRM AND PAY
          </Button>
        </div>

        {/* Product Card */}
        <div className="overflow-hidden rounded-lg border border-[#30363d] bg-midnight-750">
          <div className="relative h-48 w-full bg-black/50">
            {/* Product Image Placeholder */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                {/* Actual Image will go here */}
                <div className="relative z-10 p-4">
                  <h3 className="text-3xl font-bold tracking-wider text-red-600 drop-shadow-md">
                    NIOH
                  </h3>
                  <div className="absolute top-0 -right-4 rotate-12 text-xl font-bold text-white">
                    2
                  </div>
                </div>
              </div>
            </div>

            {/* Seller Info Overlay */}
            <div className="absolute right-0 bottom-0 left-0 flex items-end justify-between bg-gradient-to-t from-black/90 to-transparent p-3">
              <div className="flex items-center gap-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-purple-600 text-[10px] font-bold text-white">
                  C
                </div>
                <span className="text-xs font-medium text-gray-300">
                  CamoZoom
                </span>
              </div>
              <span className="text-sm font-bold text-white">$ 99.97</span>
            </div>
          </div>

          <div className="bg-[#1d232e] p-3">
            <h3 className="text-sm font-medium text-gray-300">Nioh 3 (PC)</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
