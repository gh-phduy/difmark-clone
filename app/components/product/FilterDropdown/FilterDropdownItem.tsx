"use client"

import { cn } from "@/lib/utils";
import { RiGlobalLine } from "react-icons/ri";
import { FilterOption } from "./types";

interface ItemProps {
    option: FilterOption;
    isSelected: boolean;
    onSelect: (id: string) => void;
}

export function FilterDropdownItem({ option, isSelected, onSelect }: ItemProps) {
    return (
        <button
            onClick={() => onSelect(option.id)}
            className={cn(
                "relative flex cursor-pointer items-center w-full px-4 py-[10px]",
                "outline-hidden transition-colors border-none text-left",
                "hover:bg-state-hover focus:bg-state-hover",
                isSelected && "bg-state-active"
            )}
            role="option"
            aria-selected={isSelected}
        >
            {/* Selection indicator */}
            {isSelected && (
                <div className="absolute left-0 top-0 h-full w-[3px] bg-dm-accent-green z-10" />
            )}

            <div className="flex items-center gap-3 w-full">
                {/* Icon / Flag */}
                <div className="flex h-[18px] w-[26px] shrink-0 items-center justify-center overflow-hidden rounded-[2px] shadow-xs bg-black/10">
                    {option.flagCode ? (
                        <img
                            src={`https://flagcdn.com/w80/${option.flagCode}.png`}
                            alt={option.label}
                            className="h-full w-full object-cover"
                        />
                    ) : option.icon ? (
                        <span className="text-dm-text-tertiary">{option.icon}</span>
                    ) : (
                        <RiGlobalLine className="text-dm-text-tertiary" size={16} />
                    )}
                </div>

                {/* Label and Count */}
                <div className="flex items-center gap-1.5 min-w-0 flex-1">
                    <span className={cn(
                        "text-[14px] truncate",
                        isSelected ? "text-dm-text-primary font-semibold" : "text-dm-text-secondary"
                    )}>
                        {option.label}
                    </span>
                    {option.count !== undefined && (
                        <span className="text-[12px] text-dm-text-tertiary font-normal">
                            ({option.count})
                        </span>
                    )}
                </div>
            </div>
        </button>
    );
}
