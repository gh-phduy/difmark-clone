import SellerFilterBar from "./SellerFilterBar";
import SellerRow, { SellerOffer } from "./SellerRow";

async function getSellers() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000"}/api/products`,
      {
        next: { revalidate: 60 },
      },
    );
    if (!res.ok) {
      throw new Error(`Failed to fetch sellers: ${res.status}`);
    }
    return await res.json();
  } catch (error) {
    console.error("Error fetching sellers:", error);
    return null;
  }
}

export default async function SellerList() {
  const data = await getSellers();
  const products = data?.products || [];

  if (!data) {
    return (
      <div className="flex w-full flex-col gap-y-2">
        <SellerFilterBar />
        <div className="rounded-lg bg-red-500/10 p-4 text-red-500">
          Failed to load sellers. Please try again later.
        </div>
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col gap-y-2">
      <SellerFilterBar />
      {products.map((offer: SellerOffer) => (
        <SellerRow key={offer.data.id} offer={offer} />
      ))}
      {products.length === 0 && (
        <div className="rounded-lg bg-[#2a3441] p-4 text-center text-gray-400">
          No sellers available at the moment.
        </div>
      )}
    </div>
  );
}
