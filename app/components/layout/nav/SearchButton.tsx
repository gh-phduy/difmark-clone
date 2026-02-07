import { IoSearch } from "react-icons/io5";

export default function SearchButton() {
  return (
    <button
      className="flex shrink-0 cursor-pointer items-center rounded-lg bg-brand-light px-5 py-1 font-bold text-dm-text-tertiary transition-colors hover:text-dm-text-secondary"
      aria-label="Search"
    >
      <IoSearch size={20} aria-hidden="true" />
    </button>
  );
}
