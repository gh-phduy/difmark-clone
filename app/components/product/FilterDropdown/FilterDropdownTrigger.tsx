"use client"

import { RefObject, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { MdKeyboardArrowDown } from "react-icons/md";

interface TriggerProps {
    triggerRef: RefObject<HTMLButtonElement | null>;
    arrowRef: RefObject<HTMLDivElement | null>;
    headerIcon: ReactNode;
    label: string;
    isOpen: boolean;
    onClick: () => void;
}

export function FilterDropdownTrigger({
    triggerRef,
    arrowRef,
    headerIcon,
    label,
    isOpen,
    onClick
}: TriggerProps) {
    return (
        <button
            ref={triggerRef}
            onClick={onClick}
            className={cn(
                "h-[44px] w-full border-none bg-surface-card text-dm-text-primary rounded-lg",
                "hover:bg-surface-overlay hover:ring-1 hover:ring-dm-border-strong",
                "transition-all duration-300 focus:ring-0 focus:outline-none px-4",
                "flex items-center justify-between"
            )}
            aria-haspopup="listbox"
            aria-expanded={isOpen}
        >
            <div className="flex items-center gap-3 overflow-hidden">
                <span className="text-dm-text-secondary flex items-center justify-center shrink-0">
                    {headerIcon}
                </span>
                <span className="text-[14px] font-medium truncate leading-none font-sans">
                    {label}
                </span>
            </div>
            <div ref={arrowRef} className="flex items-center justify-center">
                <MdKeyboardArrowDown className="text-dm-text-tertiary shrink-0" size={20} />
            </div>
        </button>
    );
}
