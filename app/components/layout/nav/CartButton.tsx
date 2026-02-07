import { PiShoppingCartBold } from "react-icons/pi";

export default function CartButton() {
  return (
    <button
      className="relative text-dm-text-secondary transition-all duration-300 hover:text-dm-text-primary"
      aria-label="Shopping cart"
    >
      <PiShoppingCartBold size={24} aria-hidden="true" />
      {/* TODO: Add cart item count badge */}
    </button>
  );
}
