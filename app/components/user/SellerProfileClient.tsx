"use client";

import { useState } from "react";
import type { SellerProfile } from "./seller-profile.data";
import SellerProfileHeader from "./profile/SellerProfileHeader";
import SellerProfileTabs from "./profile/SellerProfileTabs";
import SellerStorePanel from "./profile/SellerStorePanel";

interface SellerProfileClientProps {
  profile: SellerProfile;
}

type TabKey = "store" | "reviews" | "followers" | "following";

export default function SellerProfileClient({
  profile,
}: SellerProfileClientProps) {
  const [activeTab, setActiveTab] = useState<TabKey>("store");
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);

  return (
    <main className="w-full bg-midnight-950 px-4 pt-36 pb-16 text-white">
      <div className="mx-auto w-full max-w-[1120px] space-y-6">
        <SellerProfileHeader
          profile={profile}
          isDescriptionOpen={isDescriptionOpen}
          onToggleDescription={() => setIsDescriptionOpen((prev) => !prev)}
        />

        <SellerProfileTabs activeTab={activeTab} onChangeTab={setActiveTab} />

        {activeTab !== "store" ? (
          <section className="rounded-lg border border-midnight-700 bg-midnight-800 p-8 text-center text-steel-500">
            This tab is ready for integration. Store tab is fully implemented
            now.
          </section>
        ) : (
          <SellerStorePanel profile={profile} />
        )}
      </div>
    </main>
  );
}
