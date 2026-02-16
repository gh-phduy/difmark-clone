"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useCart } from "@/app/context/CartContext";

const PROCESSED_PAYMENT_INTENT_KEY = "processed_payment_intent";

export default function SuccessClient() {
  const searchParams = useSearchParams();
  const { resetCart } = useCart();
  const [status, setStatus] = useState<string | null>(null);

  useEffect(() => {
    const paymentIntent = searchParams.get("payment_intent");
    const redirectStatus = searchParams.get("redirect_status");

    if (!paymentIntent) {
      setStatus("failed");
      return;
    }

    if (redirectStatus === "succeeded") {
      setStatus("succeeded");

      const processedPaymentIntent = localStorage.getItem(
        PROCESSED_PAYMENT_INTENT_KEY,
      );

      if (processedPaymentIntent !== paymentIntent) {
        resetCart();
        localStorage.setItem(PROCESSED_PAYMENT_INTENT_KEY, paymentIntent);
      }
    } else {
      setStatus("failed");
    }
  }, [resetCart, searchParams]);

  if (status === null) {
    return (
      <div className="flex h-[60vh] w-full items-center justify-center">
        <Loader2 className="h-10 w-10 animate-spin text-[#eac54f]" />
      </div>
    );
  }

  return (
    <div className="mx-auto flex h-[60vh] w-full max-w-[600px] flex-col items-center justify-center gap-6 text-center">
      {status === "succeeded" ? (
        <>
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#eac54f]/10">
            <CheckCircle2 className="h-10 w-10 text-[#eac54f]" />
          </div>
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-white">
              Payment Successful!
            </h1>
            <p className="text-gray-400">
              Thank you for your purchase. Your order has been confirmed.
            </p>
          </div>
          <div className="w-full max-w-sm rounded-lg border border-[#30363d] bg-midnight-750 p-4">
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Payment ID</span>
              <span className="font-mono text-xs text-white">
                {searchParams.get("payment_intent")}
              </span>
            </div>
          </div>
          <div className="flex gap-4">
            <Link href="/">
              <Button className="rounded bg-[#30363d] px-6 py-2 text-white hover:bg-[#3c444d]">
                Return to Home
              </Button>
            </Link>
            <Link href="/orders">
              <Button className="rounded bg-[#eac54f] px-6 py-2 text-[#161b22] hover:bg-[#d4b246]">
                View Order
              </Button>
            </Link>
          </div>
        </>
      ) : (
        <>
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-red-500/10">
            <CheckCircle2 className="h-10 w-10 rotate-45 text-red-500" />
          </div>
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-white">Payment Failed</h1>
            <p className="text-gray-400">
              Something went wrong with your payment. Please try again.
            </p>
          </div>
          <Link href="/checkout">
            <Button className="rounded bg-[#eac54f] px-6 py-2 text-[#161b22] hover:bg-[#d4b246]">
              Try Again
            </Button>
          </Link>
        </>
      )}
    </div>
  );
}
