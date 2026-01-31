"use client";

import { useState } from "react";
import Image from "next/image";
import { useAuth } from "@/app/context/AuthContext";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import {
    MdSpaceDashboard,
    MdShoppingBag,
    MdAccountBalanceWallet,
    MdCardGiftcard,
    MdPerson,
    MdBookmark,
    MdVerified,
    MdContactSupport,
    MdBugReport,
    MdLogout,
} from "react-icons/md";
import { FaTicketAlt, FaHandHoldingUsd } from "react-icons/fa";

interface UserMenuProps {
    user: {
        name: string;
        email: string;
        picture: string;
    };
}

interface MenuItemProps {
    icon: React.ReactNode;
    label: string;
    value?: string;
    valueClassName?: string;
    onClick?: () => void;
    expandable?: boolean;
}

function MenuItem({ icon, label, value, valueClassName, onClick, expandable }: MenuItemProps) {
    return (
        <button
            onClick={onClick}
            className="flex w-full items-center justify-between px-4 py-2.5 text-sm text-dm-text-secondary transition-colors hover:bg-surface-overlay hover:text-dm-text-primary group"
        >
            <div className="flex items-center gap-3 text-dm-text-tertiary group-hover:text-dm-text-primary transition-colors">
                <span className="text-lg">{icon}</span>
                <span className="font-medium">{label}</span>
            </div>
            <div className="flex items-center gap-2">
                {value && (
                    <span className={`text-sm font-semibold ${valueClassName || "text-dm-text-primary"}`}>
                        {value}
                    </span>
                )}
                {expandable && (
                    <span className="text-[10px] text-dm-text-tertiary">▼</span>
                )}
            </div>
        </button>
    );
}



export default function UserMenu({ user }: UserMenuProps) {
    const [isOpen, setIsOpen] = useState(false);
    const { logout } = useAuth();

    const handleLogout = () => {
        logout();
        setIsOpen(false);
    };

    return (
        <Popover open={isOpen} onOpenChange={setIsOpen}>
            <PopoverTrigger className="flex items-center gap-2 outline-none">
                <div className="relative h-9 w-9 overflow-hidden rounded-full ring-2 ring-brand-light transition-all hover:ring-brand-primary">
                    <Image
                        src={user.picture}
                        alt={user.name}
                        fill
                        className="object-cover"
                    />
                </div>
            </PopoverTrigger>

            <PopoverContent
                className="w-[280px] rounded-lg border border-dm-border-subtle bg-surface-elevated/95 p-0 backdrop-blur-md"
                align="end"
                sideOffset={12}
            >
                {/* Header: Language & Currency */}
                <div className="flex items-center justify-between border-b border-dm-border-subtle px-4 py-3">
                    <button className="flex items-center gap-2 text-xs font-semibold text-dm-text-secondary hover:text-white transition-colors">
                        <span className="flex h-4 w-6 items-center justify-center overflow-hidden rounded-[2px] bg-slate-700">
                            🇬🇧
                        </span>
                        EN
                        <span className="text-[10px]">▼</span>
                    </button>
                    <button className="flex items-center gap-2 text-xs font-semibold text-dm-text-secondary hover:text-white transition-colors">
                        $ USD
                        <span className="text-[10px]">▼</span>
                    </button>
                </div>

                {/* Main Section */}
                <div className="py-2">
                    <div className="px-4 pb-1 pt-1">
                        <span className="text-xs font-semibold text-dm-text-tertiary">Main</span>
                    </div>
                    <MenuItem icon={<MdSpaceDashboard />} label="Dashboard" />
                    <MenuItem icon={<MdShoppingBag />} label="My Orders" />
                </div>

                {/* Finances Section */}
                <div className="py-2">
                    <div className="px-4 pb-1 pt-1">
                        <span className="text-xs font-semibold text-dm-text-tertiary">Finances</span>
                    </div>
                    <MenuItem
                        icon={<MdAccountBalanceWallet />}
                        label="Wallet"
                        value="$0.00"
                        expandable
                    />
                    <MenuItem
                        icon={<MdCardGiftcard />}
                        label="Cashback"
                        value="€ 0.00"
                        valueClassName="text-[#4ADE80]"
                    />
                    <MenuItem icon={<FaHandHoldingUsd />} label="Affiliate Program" />
                </div>

                {/* Cases Section */}
                <div className="py-2">
                    <div className="px-4 pb-1 pt-1">
                        <span className="text-xs font-semibold text-dm-text-tertiary">Cases</span>
                    </div>
                    <MenuItem icon={<FaTicketAlt />} label="My Tickets" />
                </div>

                {/* General Section */}
                <div className="py-2">
                    <div className="px-4 pb-1 pt-1">
                        <span className="text-xs font-semibold text-dm-text-tertiary">General</span>
                    </div>
                    <MenuItem
                        icon={<MdPerson />}
                        label="Account Settings"
                        expandable
                    />
                    <MenuItem icon={<MdBookmark />} label="Bookmarks" />
                    <MenuItem icon={<MdVerified />} label="Verification" expandable />
                    <MenuItem icon={<MdContactSupport />} label="Contact Us" />
                    <MenuItem icon={<MdBugReport />} label="Bug Report" />
                </div>

                {/* Logout */}
                <div className="border-t border-dm-border-subtle py-2">
                    <MenuItem
                        icon={<MdLogout />}
                        label="Logout"
                        onClick={handleLogout}
                    />
                </div>
            </PopoverContent>
        </Popover>
    );
}
