"use client";

import React, { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { Search, ChevronRight, AlertCircle, CheckCircle2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import CheckoutForm from "@/app/components/checkout/CheckoutForm";
import { ProductApiResponse } from "@/app/types/product";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!,
);

function CheckoutContent() {
  const searchParams = useSearchParams();
  const productId = searchParams.get("id") || "1";

  const [selectedMethod, setSelectedMethod] = useState("visa");
  const [clientSecret, setClientSecret] = useState("");
  const [productData, setProductData] = useState<ProductApiResponse | null>(
    null,
  );
  const [isLoading, setIsLoading] = useState(true);

  // Fetch product data
  useEffect(() => {
    async function fetchProduct() {
      try {
        const apiUrl =
          process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
        const res = await fetch(`${apiUrl}/api/products/${productId}`);
        if (res.ok) {
          const data = await res.json();
          setProductData(data);
        }
      } catch (e) {
        console.error("Failed to fetch product:", e);
      } finally {
        setIsLoading(false);
      }
    }
    fetchProduct();
  }, [productId]);

  const amount = productData?.data.price || 99.97;

  useEffect(() => {
    if (!productData) return;

    // Create PaymentIntent as soon as the product data is available
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
    fetch(`${apiUrl}/api/create-payment-intent`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: Math.round(amount * 100) }), // Amount in cents
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [productData, amount]);

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center text-white">
        Loading checkout...
      </div>
    );
  }

  return (
    <div className="mx-auto grid w-full max-w-[1200px] grid-cols-1 gap-6 pt-8 lg:grid-cols-3">
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
          <Select defaultValue="vn">
            <SelectTrigger className="min-w-[180px]">
              <SelectValue placeholder="Select country" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="vn">
                  <span className="flex items-center gap-2">
                    <span className="text-xl">🇻🇳</span> Viet Nam
                  </span>
                </SelectItem>
                <SelectItem value="us">
                  <span className="flex items-center gap-2">
                    <span className="text-xl">🇺🇸</span> USA
                  </span>
                </SelectItem>
                <SelectItem value="gb">
                  <span className="flex items-center gap-2">
                    <span className="text-xl">🇬🇧</span> UK
                  </span>
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
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
          {clientSecret && (
            <Elements
              options={{
                clientSecret,
                appearance: { theme: "night", labels: "floating" },
              }}
              stripe={stripePromise}
            >
              <CheckoutForm amount={amount} />
            </Elements>
          )}
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
              <span className="font-medium">
                $ {(amount * 0.03).toFixed(2)}
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between border-t border-[#30363d] pt-4">
            <span className="text-[#58a6ff]">Total:</span>
            <span className="text-2xl font-bold text-white">
              $ {amount.toFixed(2)}
            </span>
          </div>

          <div className="relative">
            <Input
              placeholder="DISCOUNT CODE"
              className="rounded border-none bg-[#242c38] pr-20 text-white uppercase placeholder:text-gray-500"
            />
            <button className="absolute top-1 right-1 bottom-1 rounded bg-[#374050] px-3 text-xs font-semibold text-white transition-colors hover:bg-[#444c5d]">
              Apply
            </button>
          </div>
        </div>

        {/* Product Card */}
        {productData && (
          <div className="overflow-hidden rounded-lg border border-[#30363d] bg-midnight-750">
            <div className="relative h-48 w-full overflow-hidden bg-black/50">
              {productData.data.images?.[0] && (
                <Image
                  src={productData.data.images[0]}
                  alt={productData.data.name}
                  fill
                  className="object-cover opacity-60"
                />
              )}
              {/* Seller Info Overlay */}
              <div className="absolute right-0 bottom-0 left-0 flex items-end justify-between bg-gradient-to-t from-black/90 to-transparent p-3">
                <div className="flex items-center gap-2">
                  <div className="relative h-6 w-6 overflow-hidden rounded-full bg-purple-600">
                    <Image
                      src={productData.seller.avatar}
                      alt={productData.seller.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="text-xs font-medium text-gray-300">
                    {productData.seller.name}
                  </span>
                </div>
                <span className="text-sm font-bold text-white">
                  $ {productData.data.price.toFixed(2)}
                </span>
              </div>
            </div>

            <div className="bg-[#1d232e] p-3 text-center">
              <h3 className="text-sm font-medium text-gray-300">
                {productData.data.name} ({productData.data.platform})
              </h3>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center text-white">
          Loading...
        </div>
      }
    >
      <CheckoutContent />
    </Suspense>
  );
}
