import SellerFilterBar from "./SellerFilterBar";
import SellerRow, { SellerOffer } from "./SellerRow";

async function getSellers() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/products`, {
      next: { revalidate: 60 }
    });
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
      <div className="flex flex-col w-full gap-y-2">
        <SellerFilterBar />
        <div className="bg-red-500/10 text-red-500 p-4 rounded-lg">
          Failed to load sellers. Please try again later.
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full gap-y-2">
      <SellerFilterBar />
      {products.map((offer: SellerOffer) => (
        <SellerRow key={offer.data.id} offer={offer} />
      ))}
      {products.length === 0 && (
        <div className="text-gray-400 p-4 text-center bg-[#2a3441] rounded-lg">
          No sellers available at the moment.
        </div>
      )}
    </div>
  );
}
