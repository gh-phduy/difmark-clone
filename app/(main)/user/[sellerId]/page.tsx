import SellerProfileClient from "@/app/components/user/SellerProfileClient";
import { getSellerProfile } from "@/app/components/user/seller-profile.data";

export default async function SellerProfilePage({
  params,
}: {
  params: Promise<{ sellerId: string }>;
}) {
  const { sellerId: sellerNameKey } = await params;
  const profile = await getSellerProfile(sellerNameKey);

  if (!profile) {
    return (
      <main className="flex min-h-screen w-full items-center justify-center bg-midnight-950 px-4 pt-36 text-white">
        <div className="rounded-lg border border-midnight-700 bg-midnight-800 p-8 text-center">
          <h1 className="text-2xl font-semibold">Seller not found</h1>
          <p className="mt-2 text-steel-500">
            This seller profile does not exist or has no active listings.
          </p>
        </div>
      </main>
    );
  }

  return <SellerProfileClient profile={profile} />;
}
