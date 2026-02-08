"use client";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { ReactNode } from "react";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!,
);

export default function CheckoutLayout({ children }: { children: ReactNode }) {
  return <div className="min-h-screen bg-[#0d1117] text-white">{children}</div>;
}
