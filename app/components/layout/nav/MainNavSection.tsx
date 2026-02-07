"use client";

import { useState } from "react";
import NavDivider from "./NavDivider";
import CategoriesDropdown from "./CategoriesDropdown";
import NavSearch from "./NavSearch";
import SearchButton from "./SearchButton";
import CartButton from "./CartButton";
import SignInButton from "./SignInButton";

export default function MainNavSection() {
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [, setIsSearchFocused] = useState(false);

  const handleCategoriesOpenChange = (open: boolean) => {
    setIsCategoriesOpen(open);
  };

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
  };

  const handleSearchFocus = () => {
    setIsSearchFocused(true);
  };

  const handleSearchBlur = () => {
    setIsSearchFocused(false);
  };

  return (
    <>
      <NavDivider />

      {/* Center Navigation - Search Bar */}
      <div className="mx-6 hidden flex-1 items-center 770:flex">
        <div className="flex w-full rounded-lg bg-surface-overlay p-[2px]">
          {/* Categories Dropdown */}
          <CategoriesDropdown
            isOpen={isCategoriesOpen}
            onOpenChange={handleCategoriesOpenChange}
          />

          {/* Search Input */}
          <NavSearch
            value={searchValue}
            onChange={handleSearchChange}
            onFocus={handleSearchFocus}
            onBlur={handleSearchBlur}
          />

          {/* Search Button */}
          <SearchButton />
        </div>
      </div>

      {/* Right Side Actions */}
      <div className="flex items-center space-x-4">
        <NavDivider />
        <CartButton />
        <NavDivider />
        <SignInButton />
      </div>
    </>
  );
}
