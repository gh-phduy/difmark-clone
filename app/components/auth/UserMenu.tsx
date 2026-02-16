"use client";

import { useState } from "react";
import Image from "next/image";
import { useAuth } from "@/app/context/AuthContext";
import { useSettings } from "@/app/context/SettingsContext";
import { useTranslations } from "@/app/hooks/useTranslations";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { UserMenuHeader } from "./userMenu/UserMenuHeader";
import { UserMenuContent } from "./userMenu/UserMenuContent";
import { UserMenuFooter } from "./userMenu/UserMenuFooter";
import { LanguageCurrencySelector } from "./userMenu/LanguageCurrencySelector";

interface UserMenuProps {
  user: {
    name: string;
    email: string;
    picture: string;
  };
}

export default function UserMenu({ user }: UserMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const {
    language: selectedLang,
    setLanguage: setSelectedLang,
    currency: selectedCurrency,
    setCurrency: setSelectedCurrency,
  } = useSettings();
  const { logout } = useAuth();
  const t = useTranslations("userMenu");

  const handleLogout = () => {
    logout();
    setIsOpen(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      {/* Trigger Button */}
      <SheetTrigger className="flex items-center gap-2 outline-hidden">
        <div className="hover:ring-brand-primary relative h-9 w-9 cursor-pointer overflow-hidden rounded-full ring-2 ring-brand-light transition-all">
          <Image
            src={user.picture}
            alt={user.name}
            fill
            className="object-cover"
          />
        </div>
      </SheetTrigger>

      {/* Sidebar Content */}
      <SheetContent
        side="right"
        showCloseButton={false}
        className="w-[310px] gap-0 overflow-visible border-l border-white/5 bg-[#1c243a] p-0 shadow-2xl sm:max-w-[310px]"
      >
        <div className="relative flex h-full flex-col bg-[#1c243a]">
          {/* Header Section */}
          <div className="bg-[#242d48] px-5 pt-8 pb-3">
            <UserMenuHeader user={user} buyerRankText={t("buyerRank")} />

            {/* Language & Currency Selectors */}
            <LanguageCurrencySelector
              selectedLang={selectedLang}
              onLanguageChange={setSelectedLang}
              selectedCurrency={selectedCurrency}
              onCurrencyChange={setSelectedCurrency}
            />
          </div>

          {/* Menu Content */}
          <UserMenuContent t={t} />

          {/* Footer */}
          <UserMenuFooter onLogout={handleLogout} logoutText={t("logout")} />
        </div>
      </SheetContent>
    </Sheet>
  );
}
